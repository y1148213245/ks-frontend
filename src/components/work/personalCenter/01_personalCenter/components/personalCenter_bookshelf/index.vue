// 文联我的书架  只有电子书 试读用
<template>
  <section class="personalcenter_shelflWrapper">
    <nav v-if="CONFIG && CONFIG.navList">
      <template v-for="(item,index) in CONFIG.navList">
        <el-button type="primary" @click="changType(item)" v-text="item.name" :key="index"></el-button>
      </template>
    </nav>
    <div class="myShelf" v-if="bookShelfInfo.data && bookShelfInfo.data.length > 0">
      <ul>
        <li v-for="(item,index) in bookShelfInfo.data" class="shelfContent" :key="index">
          <div style="width:180px;height: 210px; text-align: center;">
            <div class="picBox">
              <div style="width: 180px; height: 180px; vertical-align: middle; display: table-cell; position: relative;">
                <img v-bind:src="item[productKeys.pic] || require('@static/img/defaultCover.png')" onload="DrawImage(this,150,150)" />
              </div>
              <div class="namePrice">
                <div v-text="item[productKeys.name]" :title="item[productKeys.name]"></div>
              </div>
              <!-- 只有图书类型会显示阅读 -->
              <div class="readBox" v-if="item[productKeys.resourceType] && item[productKeys.resourceType] == 'BOOK'" @click="toRead(item[productKeys.resourceId],1,item[productKeys.name])" style="cursor:pointer">
                <!--    <a target="_blank" v-bind:href="readConfig.baseURL + '/ebook/read.jsp?bookId=' + item.resourceId + '&readType=1&bookName=' + item.productName">
                  阅读</a> -->
                <a target="_blank">{{getStaticText('read') ? getStaticText('read') : '阅读'}}</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="emptyColl" v-else>
      <img src="../../assets/img/empty.png" alt="">
      <div>{{getStaticText('myBookshelfIsEmpty') ? getStaticText('myBookshelfIsEmpty') : '我的书架是空的' }}</div>
    </div>
    <ui_pagination :pageMessage="{totalCount: this.bookShelfInfo.data && this.bookShelfInfo.totalCount - 0 || 0}" :excuteFunction="pagingF" :page-sizes="[8,16,32,64]"></ui_pagination>
  </section>
</template>
<script type="text/ecmascript-6">
import { mapGetters, mapActions } from "vuex";
export default {
  name: "book",
  reused: true,
  props: ["namespace", "parentConfig"],
  data () {
    return {
      CONFIG: '',
      currentProductType: '',
      pageNo: '1',
      pageSize: '8',
      productKeys: ''
      // readConfig: READ_CONFIG
    };
  },
  created () {
    this.productKeys = {//默认字段适配
      name: 'productName',
      pic: 'bigPic',
      resourceId: 'resourceId',
      resourceType: 'resourseType'
    }
    if (this.parentConfig.book) {
      let keysList, currentType;

      this.CONFIG = this.parentConfig.book;

      this.currentProductType = this.CONFIG.navList[0];

      keysList = this.CONFIG.productKeys;
      currentType = this.currentProductType.keyType
      if (keysList[currentType]) {
        this.productKeys = keysList[currentType]
      }
    } else {
      this.currentProductType = {
        name: '图书',
        type: '2',
        productType: '',
        keyType: 'book'
      }
    }
  },
  mounted: function () {
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
    loadData () {
      var param = {
        pageIndex: this.pageNo,
        pageSize: this.pageSize,
        type: this.currentProductType.type
      };
      if (this.currentProductType.productType) {
        param.productType = this.currentProductType.productType
      }
      this.$store.dispatch("personalCenter/querybookShelfInfo", param);
    },
    changType (item) {
      this.currentProductType = item;
      this.productKeys = this.CONFIG.productKeys[this.currentProductType.keyType]
      this.loadData();
    },
    pagingF: function ({ pageNo, pageSize }) {
      this.pageNo = pageNo;
      this.pageSize = pageSize;

      this.loadData();
    },
    toRead (bookId, readType, bookName) {
      var url =
        CONFIG.READ_URL +
        "?bookId=" +
        bookId +
        "&readType=" +
        readType +
        '&bookName=' +
        bookName +
        "&userName=&siteType=" + CONFIG.READ_CONFIG.siteType;
      window.open(url);
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
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
