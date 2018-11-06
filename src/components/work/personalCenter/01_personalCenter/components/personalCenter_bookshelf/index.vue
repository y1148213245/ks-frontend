
/* 新增
   180911 新增书架接口返回回调方法: listLoadedCallBack
          新增期刊个性化数据查询(通过书架接口返回数据拼参数查list.do接口,返回已发布的期刊)
          新增期刊个性化名字显示(在名字后显示期刊年份与期数)

 */
<template>
  <section class="personalcenter_shelflWrapper">
    <!-- 类型切换导航 -->
    <nav v-if="CONFIG && CONFIG.navList">
      <template v-for="(item,index) in CONFIG.navList">
        <el-button type="primary" @click="changType(item)" v-text="item.name" :key="index"></el-button>
      </template>
    </nav>
    <!-- 资源列表 -->
    <div class="myShelf" v-if="bookShelfInfo.data && bookShelfInfo.data.length > 0">
      <ul>
        <li v-for="(item,index) in bookShelfInfo.data" class="shelfContent" :key="index">
          <div style="width:180px;height: 210px; text-align: center;">
            <div class="picBox">
              <div style="width: 180px; height: 180px; vertical-align: middle; display: table-cell; position: relative;">
                <img v-bind:src="item[productKeys.pic] || require('@static/img/defaultCover.png')" onload="DrawImage(this,150,150)" />
              </div>
              <div class="namePrice">
                <div v-text="getProductName(item)" :title="getProductName(item)">
                </div>
              </div>
              
              <div class="readBox" v-if="getIsRead(currentProductType.keyType)" @click="toRead(item)" style="cursor:pointer">
                <a target="_blank">{{getStaticText('read') ? getStaticText('read') : '阅读'}}</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 无数据提示 -->
    <div class="emptyColl" v-else>
      <img src="../../assets/img/empty.png" alt="">
      <div>{{getStaticText('myBookshelfIsEmpty') ? getStaticText('myBookshelfIsEmpty') : '我的书架是空的' }}</div>
    </div>
    <!-- 分页 -->
    <ui_pagination :pageMessage="{totalCount: this.bookShelfInfo.data && this.bookShelfInfo.totalCount - 0 || 0}" :excuteFunction="pagingF" :page-sizes="[8,16,32,64]"></ui_pagination>
  </section>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions } from "vuex";
import { Post, readUtils } from '@common'
export default {
  name: "book",
  reused: true,
  props: ["namespace", "parentConfig"],
  data() {
    return {
      CONFIG: "",
      currentProductType: "",
      pageNo: "1",
      pageSize: "8",
      productKeys: "",
      // readConfig: READ_CONFIG,
      defaultObj: {
        name: "图书",
        type: "2",
        productType: "",
        keyType: "book" //字段适配器名,对应productKeys配置中的key,字段适配器名
      }
    };
  },
  created() {
    this.productKeys = {
      //默认字段适配
      name: "productName",
      pic: "bigPic",
      resourceId: "resourceId",
      resourceType: "resourseType",
      productType: "contentType"
    };
    this.defaultObj.name = this.getStaticText("book") ? this.getStaticText("book") : "图书"

    if (this.parentConfig.book) {
      let keysList, currentType;

      this.CONFIG = this.parentConfig.book;

      this.currentProductType = this.CONFIG.navList[0]
        ? this.CONFIG.navList[0]
        : this.defaultObj;
      keysList = this.CONFIG.productKeys;
      currentType = this.currentProductType.keyType;
      if (keysList[currentType]) {
        this.productKeys = keysList[currentType];
      }
    } else {
      /* 默认资源类型 */
      this.currentProductType = this.defaultObj;
    }
  },
  mounted: function() {
    this.$store.dispatch("personalCenter/queryUser", {
      loadedCallBack: this.loadData
    });
  },
  computed: {
    ...mapGetters("personalCenter/", {
      bookShelfInfo: "getBookShelfInfo"
    })
  },
  methods: {
    loadData() {
      var param = {
        pageIndex: this.pageNo,
        pageSize: this.pageSize,
        type: this.currentProductType.type,
        cb:this.listLoadedCallBack
      };
      if (this.currentProductType.productType) {
        param.productType = this.currentProductType.productType;
      }
      this.$store.dispatch("personalCenter/querybookShelfInfo", param);
    },
    /* 书架接口回调 */
    listLoadedCallBack(data){
      /* 个性化处理 */
      let currentProductType = this.currentProductType
      switch (currentProductType.keyType) {
        case 'periodical':{
          this.$store.dispatch("personalCenter/setNewBookShelfInfo", {data:''});//传{data:''} 为了使数据结构一致
          let list = data.data;
          let conditions_str = ''
          /* 初始化条件 */
          let conditions = [
            {MAGAZINE_PERIOD_NUM:[],op:'in'},
            {MAGAZINE_PUBLISH_YEAR:[],op:'in'},
            {pub_resource_name:[],op:'in'}
          ]
          let changedKeys = []//有变化的key名
          /* 遍历数据 */
          list.forEach(item => {
            /* 遍历数据中每一个属性 */
            for (const key in item) {
              /* 遍历条件 */
              conditions.forEach(condition => {
                /* 遍历每个条件中每个属性 */
                for (const condition_key in condition) {
                  const element = condition[condition_key];
                  /* 对比赋值 */
                  if (key == condition_key) {
                    condition[condition_key].push(item[key])
                    changedKeys.push(condition_key)
                  }
                }
              });
            }
          });
          /* 去重 */
          changedKeys = [...new Set(changedKeys)]
          conditions.forEach(item => { 
            changedKeys.forEach(key => {
              if (item.hasOwnProperty(key)) {
                item[key] = [...new Set(item[key])].join(' ')
              }
            });
          })
          conditions_str = JSON.stringify(conditions)
          let params = {
            conditions:conditions_str,
            groupBy:'pub_resource_id',
            orderBy:'pub_a_order asc pub_lastmodified desc id asc',
            pageNo:this.pageNo,
            pageSize:this.pageSize,
            searchText:''
          }
          let loading = this.$loading({text:this.getStaticText("loading") ? this.getStaticText("loading") : '正在加载中...'})
          Post(CONFIG.BASE_URL + 'spc/cms/publish/list.do',params).then(resp => {
            loading.close();
            if (resp.data && resp.data.result) {
              this.$store.dispatch("personalCenter/setNewBookShelfInfo", {data:resp.data.result,totalCount:resp.data.totalCount});
            }
          }).catch(err=>{
            loading.close();
          })
          break;
        }
          
        default:
          break;
      }
    },
    changType(item) {
      this.currentProductType = item;
      this.productKeys = this.CONFIG.productKeys[
        this.currentProductType.keyType
      ];
      this.pageNo = '1';
      this.pageSize = '8';
      this.loadData();
    },
    pagingF: function({ pageNo, pageSize }) {
      this.pageNo = pageNo;
      this.pageSize = pageSize;

      this.loadData();
    },
    toRead(item) {
      var url =
        CONFIG.READ_URL +
        "?bookId=" +
        item[this.productKeys.resourceId] +
        "&readType=1" +
        "&bookName="  +
        item[this.productKeys.name] +
        "&userName=&siteType=" +
        CONFIG.READ_CONFIG.siteType;
        if (item[this.productKeys.resourceType]) {
          url += '&doclibCode=' + item[this.productKeys.resourceType]
        }
      
      /* 新增阅读接口返回url 依赖全局配置'晒书阅读配置 CONFIG.SHAISHU_READ'
        CONFIG.SHAISHU_READ.type 阅读文件类型
      */
      if ( CONFIG && CONFIG.SHAISHU_READ ) {
        let resId = item[this.productKeys.resourceId];
        let resType = item[this.productKeys.resourceType];
        let type = CONFIG.SHAISHU_READ.type;
        let proType = item[this.productKeys.productType];
        // let siteId = CONFIG.SITE_CONFIG.siteId;
        
        readUtils.shaishuRead.full(resId ,resType ,type ,proType);
      } else {
        window.open(url);
      }
    },
    getIsRead(type){
      if(this.CONFIG && this.CONFIG.isReadList){
        return this.CONFIG.isReadList.indexOf(type) > -1
      } else {
        return true
      }
    },
    getProductName(product){
      let productKeys = this.productKeys;
      let periodNum = productKeys.periodNum && product[productKeys.periodNum] ? product[productKeys.periodNum] + (this.getStaticText('periodicalPeriod') ? this.getStaticText('periodicalPeriod') : '期') : '';
      let publishYear = productKeys.publishYear && product[productKeys.publishYear] ? product[productKeys.publishYear] + (this.getStaticText('periodicalYear') ? this.getStaticText('periodicalYear') : '年') : '';

      return product[productKeys.name] + (publishYear || periodNum ? '(' + publishYear + periodNum + ')' : '')
    },
    getStaticText(text) {
      if (
        this.CONFIG &&
        this.CONFIG.staticText &&
        this.CONFIG.staticText[text]
      ) {
        return this.CONFIG.staticText[text];
      } else {
        return false;
      }
    }
  }
};
</script>
<style scoped>
.personalcenter_shelflWrapper {
  float: right;
}
.personalcenter_shelflWrapper .readBox {
  position: absolute;
  bottom: 0px;
  z-index: 0;
  width: 180px;
  height: 30px;
  line-height: 30px;
  background-color: rgba(100, 100, 100, 0.7);
  color: white;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease-in 0s;
  transform: translateY(0px);
}

.personalcenter_shelflWrapper .readBox a {
  color: #ffffff;
}

.personalcenter_shelflWrapper .picBox:hover > .readBox {
  transition: all 0.2s ease-out;
  transform: translateY(-30px);
}

.personalcenter_shelflWrapper .picBox {
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  border: 1px solid #e7e7e7;
  width: 200px;
  height: 200px;
  vertical-align: middle;
  display: table-cell;
  background-color: #ffffff;
}

.personalcenter_shelflWrapper .shelfContent .namePrice {
  text-align: center;
  position: relative;
  z-index: 1;
  background-color: #fff;
}

.personalcenter_shelflWrapper .shelfContent .namePrice div {
  width: 180px;
  height: 30px;
  line-height: 30px;
  white-space: nowrap;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 10px;
  box-sizing: border-box;
}

.personalcenter_shelflWrapper .picBox:hover {
  border: 1px solid #ffa31a;
}

.personalcenter_shelflWrapper .emptyColl {
  text-align: center;
  padding: 50px 0px;
}

.personalcenter_shelflWrapper .emptyColl img {
  width: 150px;
}
.personalcenter_shelflWrapper .myShelf {
  margin-bottom: 30px;
}
.personalcenter_shelflWrapper .myShelf ul {
  display: inline-block;
}

.personalcenter_shelflWrapper .myShelf ul li {
  float: left;
  margin-right: 30px;
  margin-top: 15px;
}
</style>
