// 文联我的书架  只有电子书 试读用
<template>
  <section class="personalcenter_shelflWrapper">
    <div class="myShelf" v-if="bookShelfInfo.data && bookShelfInfo.data.length > 0">
      <ul>
        <li v-for="item in bookShelfInfo.data" class="shelfContent">
          <div style="width:180px;height: 210px; text-align: center;">
            <div class="picBox">
              <div style="width: 180px; height: 180px; vertical-align: middle; display: table-cell; position: relative;">
                <img v-bind:src="item.bigPic || '../assets/img/zwfm.png'" onload="DrawImage(this,150,150)"/>
              </div>
              <div class="namePrice">
                <div v-text="item.productName" :title="item.productName"></div>
              </div>
              <div class="readBox" @click="toRead(item.resourceId,1,item.productName)" style="cursor:pointer">
             <!--    <a target="_blank" v-bind:href="readConfig.baseURL + '/ebook/read.jsp?bookId=' + item.resourceId + '&readType=1&bookName=' + item.productName">
                  阅读</a> -->
                <a target="_blank" >{{getStaticText('read') ? getStaticText('read') : '阅读'}}</a>
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
  props: ["namespace","parentConfig"],
  data () {
    return {
      CONFIG:''
      // readConfig: READ_CONFIG
    };
  },
  created (){
    this.CONFIG = this.parentConfig.bookshelf;
  },
  mounted: function () {
    this.$store.dispatch("personalCenter/queryUser", {
      loadedCallBack: this.loadedCallBack
    });
  },
  computed: {
    ...mapGetters("personalCenter/", {
      bookShelfInfo: "getBookShelfInfo"
    })
  },
  methods: {
    loadedCallBack () {
      var param = {
        pageIndex: 1,
        pageSize: 8,
        type: 2
      };
      this.$store.dispatch("personalCenter/querybookShelfInfo", param);
    },
    pagingF: function ({ pageNo, pageSize }) {
      var param = {
        pageIndex: pageNo,
        pageSize: pageSize,
        type: 2
      };
      this.$store.dispatch("personalCenter/querybookShelfInfo", param);
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
    getStaticText(text){
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]){
        return this.CONFIG.staticText[text]
      }else {
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
