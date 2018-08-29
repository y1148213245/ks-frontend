<!--文联收藏夹-->
<template>
  <section class="personalcenter_collWrapper">
    <div class="personalcenter_collWrapper_tab" v-if="CONFIG && CONFIG.tabListShow.length > 0">
      <el-radio-group v-model="radio" @change="bookList">
        <el-radio-button :label="item.type" v-for="(item, index) in CONFIG.tabListShow" :key="index">{{item.title}}</el-radio-button>
      </el-radio-group>
    </div>

    <div class="myColList" v-if="collectionInfo.data && collectionInfo.data.length > 0">
      <div class="deleteColls">
        <el-checkbox v-model="selectedAll" @change="selectAll()"></el-checkbox>
        <span>{{getStaticText('totalSelection') ? getStaticText('totalSelection') : '全选'}}</span>
        <a href="javascript: void(0);" @click="deleteLots()">{{getStaticText('batchCancelCollection') ? getStaticText('batchCancelCollection') : '批量取消收藏'}}</a>
      </div>
      <ul>
        <li v-for="item in collectionInfo.data" class="bookColl collContent">
          <div style="width:180px;height: 240px; text-align: center;">
            <div class="picBox">
              <div style="width: 180px; height: 180px; vertical-align: middle; display: table-cell; position: relative;">
                <img v-bind:src="item.bigPic || '../assets/img/zwfm.png'" onload="DrawImage(this,150,150)" />
              </div>
              <div class="namePrice">
                <div v-text="item.productName" :title="item.productName"></div>
                <div>{{getStaticText('price') ? getStaticText('price') : '价格'}}：
                  <span>{{item.memberPrice | formatPriceNew}}</span>
                </div>
              </div>
              <div class="readBox">
                <a target="_blank" v-bind:href="'../pages/bookdetail.html?pubId=' + item.pubId">{{getStaticText('buy') ? getStaticText('buy') :'购买'}}</a>
              </div>
              <div class="deleteCllo" @click="deleteCollProduct(item)">
                <img src="../../assets/img/deleteCllo.png" alt="">
              </div>
              <div class="selectCllo">
                <el-checkbox v-model="item.checked" @change="selectCollProduct(item)"></el-checkbox>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="emptyColl" v-else>
      <img src="../../assets/img/empty.png" alt="">
      <div>{{getStaticText('theFavoritesAreEmpty') ? getStaticText('theFavoritesAreEmpty') : '收藏夹是空的'}}</div>
    </div>
    <ui_pagination v-if="initPagination" :pageMessage="{totalCount: this.collectionInfo.data && this.collectionInfo.totalCount - 0 || 0}" :excuteFunction="pagingF" :page-sizes="[8,16,32,64]"></ui_pagination>
  </section>
</template>
<script type="text/ecmascript-6">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "collecting",
  reused: true,
  props: ["namespace", "parentConfig"],
  mounted: function() {
    this.siteId = CONFIG.SITE_CONFIG.siteId;
    this.$store.dispatch("personalCenter/queryUser", {
      loadedCallBack: this.loadedCallBack
    });
  },
  data() {
    return {
      siteId: "",
      modalStatus: false,
      selectedAll: false,
      autofocus: true,
      radio: null,
      CONFIG: null, // 当前组件配置
      contentType: "",
      initPagination: true // 初始化分页组件
    };
  },
  computed: {
    ...mapGetters("personalCenter/", {
      collectionInfo: "getCollectionInfo"
    })
  },
  created() {
    this.CONFIG = this.parentConfig.collection;
    this.radio =
      this.CONFIG && this.CONFIG.tabListShow.length > 0
        ? this.CONFIG.tabListShow[0].type
        : 94;
  },
  methods: {
    loadedCallBack() {
      var params = {
        param: {
          pageIndex: 1,
          pageSize: 8,
          contentType:
            this.CONFIG && this.CONFIG.tabListShow.length > 0
              ? this.CONFIG.tabListShow[0].type
              : 94
        },
        myCallBack: function() {}
      };
      this.$store.dispatch("personalCenter/queryCollectionInfo", params);
    },
    pagingF: function({ pageNo, pageSize }) {
      var params = {
        param: {
          pageIndex: pageNo,
          pageSize: pageSize,
          contentType: this.contentType
        },
        myCallBack: function() {}
      };
      this.$store.dispatch("personalCenter/queryCollectionInfo", params);
    },
    bookList(val) {
      var _this = this;
      this.initPagination = false;
      this.contentType = val;
      var params = {
        param: {
          pageIndex: 1,
          pageSize: 8,
          contentType: val
        },
        myCallBack: function() {
          _this.initPagination = true;
        }
      };
      this.$store.dispatch("personalCenter/queryCollectionInfo", params);
    },
    deleteCollProduct: function(item) {
      // 删除收藏商品
      var _this = this;
      this.$confirm(
        _this.getStaticText(
          "areYouSureYouWantToRemoveTheFavoritesFromTheMerchandise"
        )
          ? _this.getStaticText(
              "areYouSureYouWantToRemoveTheFavoritesFromTheMerchandise"
            )
          : "您确定要将商品移除收藏夹吗?",
        _this.getStaticText("systemHints")
          ? _this.getStaticText("systemHints")
          : "系统提示",
        {
          confirmButtonText: _this.getStaticText("confirm")
            ? _this.getStaticText("confirm")
            : "确定",
          cancelButtonText: _this.getStaticText("cancel")
            ? _this.getStaticText("cancel")
            : "取消",
          type: "warning"
        }
      ).then(function() {
        var params = {
          id: item.pubId,
          cb: _this.deleteCollProductcb
        };
        _this.$store.dispatch("personalCenter/deleteCollProduct", params);
      });
    },
    deleteCollProductcb: function(delCollStatus) {
      var _this = this;
      if (delCollStatus == 1) {
        this.$message({
          message: _this.getStaticText("removeSuccess")
            ? _this.getStaticText("removeSuccess")
            : "移除成功",
          type: "success"
        });
        var params = {
          param: {
            pageIndex: 1,
            pageSize: 8,
            contentType: _this.contentType
          },
          myCallBack: function() {
            _this.isSelectAll();
          }
        };
        this.$forceUpdate();
        this.$store.dispatch("personalCenter/queryCollectionInfo", params);
      } else {
        this.$message({
          message: _this.getStaticText("removeFailed")
            ? _this.getStaticText("removeFailed")
            : "移除失败",
          type: "error"
        });
      }
    },
    selectCollProduct: function(item) {
      this.isSelectAll();
    },
    deleteLots: function() {
      let _this = this;
      var tempList = this.collectionInfo.data;
      var len = tempList.length;
      var pubidList = [];
      for (var i = 0; i < len; i++) {
        if (tempList[i].checked) {
          pubidList.push(tempList[i].pubId);
        }
      }
      if (pubidList.length <= 0) {
        this.$message({
          message: _this.getStaticText("pleasePickAtLeastOneItem")
            ? _this.getStaticText("pleasePickAtLeastOneItem")
            : "请选择至少一件商品~",
          type: "error"
        });
        return false;
      }
      var pubIds = {
        pubId: pubidList.join(",")
      };
      this.deleteCollProduct(pubIds);
    },
    selectAll: function() {
      var tempList = this.collectionInfo.data;
      var len = tempList.length;
      for (var j = 0; j < len; j++) {
        if (typeof tempList[j].checked == "undefined") {
          Vue.set(tempList[j], "checked", this.selectedAll);
        } else {
          tempList[j].checked = this.selectedAll;
        }
      }
    },
    isSelectAll: function() {
      var status = true;
      var data = this.collectionInfo.data;
      for (var j = 0; j < data.length; j++) {
        if (!data[j].checked) {
          status = false;
        }
      }
      if (status) {
        this.selectedAll = true;
      } else {
        this.selectedAll = false;
      }
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
<style>
.personalcenter_collWrapper {
  float: right;
  color: #4a4a4a;
  font-size: 14px;
}

.personalcenter_collWrapper .myColList {
  margin-bottom: 30px;
}

.personalcenter_collWrapper .readBox {
  position: absolute;
  bottom: 30px;
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

.personalcenter_collWrapper .readBox a {
  color: #ffffff;
}

.personalcenter_collWrapper .picBox:hover > .readBox {
  transition: all 0.2s ease-out;
  transform: translateY(-30px);
}

.personalcenter_collWrapper .picBox {
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  border: 1px solid #e7e7e7;
  width: 180px;
  height: 200px;
  vertical-align: middle;
  display: table-cell;
  background-color: #ffffff;
}

.personalcenter_collWrapper .collContent .namePrice {
  width: 180px;
  text-align: center;
  position: relative;
  z-index: 1;
  background-color: #fff;
}

.personalcenter_collWrapper .collContent .namePrice div {
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

.personalcenter_collWrapper .collContent .namePrice div:last-child {
  color: #ffa31a;
}

.personalcenter_collWrapper .collContent .namePrice div:last-child span {
  font-weight: bold;
  font-size: 16px;
}

.personalcenter_collWrapper .picBox:hover {
  border: 1px solid #ffa31a;
}

.personalcenter_collWrapper .collContent .deleteCllo {
  position: absolute;
  right: 2px;
  top: -17px;
  transition: all 0.2s ease-in 0s;
  transform: translateY(0px);
}

.personalcenter_collWrapper .collContent .deleteCllo img {
  cursor: pointer;
}

.personalcenter_collWrapper .picBox:hover > .deleteCllo {
  transition: all 0.2s ease-out;
  transform: translateY(17px);
}

.personalcenter_collWrapper .collContent .selectCllo {
  position: absolute;
  left: 1px;
  top: 1px;
  /*transition: all .2s ease-in 0s;
    transform: translateY(0px);*/
}

.personalcenter_collWrapper .collContent .selectCllo a {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 1px solid #bcbcbc;
  border-radius: 3px;
  font-size: 0;
  line-height: 0;
  overflow: hidden;
  margin: 0 5px 1px 0;
  vertical-align: text-bottom;
}

.personalcenter_collWrapper .collContent .selectCllo .checked {
  border-color: #ff2832;
  /* background: #ff2832 url(~projects/wenlian/assets/img/tick.png) no-repeat 0px 1px; */
  background-size: 12px;
}

.personalcenter_collWrapper .emptyColl {
  text-align: center;
  padding: 50px 0px;
}

.personalcenter_collWrapper .emptyColl img {
  width: 150px;
}

.personalcenter_collWrapper .deleteColls {
  height: 30px;
  line-height: 30px;
}

.personalcenter_collWrapper .deleteColls a {
  margin-left: 10px;
  color: #4a4a4a;
}

.personalcenter_collWrapper .deleteColls a:hover {
  color: #ff2832;
  text-decoration: underline !important;
}

.personalcenter_collWrapper .deleteColls .selectAll {
  margin-right: 10px;
  cursor: pointer;
}

.personalcenter_collWrapper .deleteColls .selectAll a {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 1px solid #bcbcbc;
  background-color: #fff;
  border-radius: 3px;
  font-size: 0;
  line-height: 0;
  overflow: hidden;
  margin: 0 1px 1px 0;
  vertical-align: text-bottom;
}

.personalcenter_collWrapper .deleteColls .checked a {
  border-color: #ff2832;
  /* background: #ff2832 url(~projects/wenlian/assets/img/tick.png) no-repeat 0px 1px; */
  background-size: 12px;
}

.personalcenter_collWrapper .myColList ul {
  display: inline-block;
}

.personalcenter_collWrapper .myColList ul li {
  float: left;
  margin-right: 30px;
  margin-top: 15px;
}
</style>
