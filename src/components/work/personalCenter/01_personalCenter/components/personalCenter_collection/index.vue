<!--文联收藏夹-->
<template>
  <div class="wl_collWrapper">
    <div class="myColList" v-if="collectionInfo.data && collectionInfo.data.length > 0">
      <div class="deleteColls">
        <el-checkbox v-model="selectedAll" @change="selectAll()"></el-checkbox>
        <span>全选</span>
        <a href="javascript: void(0);" @click="deleteLots()">批量取消收藏</a>
      </div>
      <ul>
        <li v-for="item in collectionInfo.data" v-if="siteId == 1 && item.contentType== '91'" class="bookColl collContent">
          <div style="width:180px;height: 240px; text-align: center;">
            <div class="picBox">
              <div
                style="width: 180px; height: 180px; vertical-align: middle; display: table-cell; position: relative;">
                <img v-bind:src="item.bigPic" onload="DrawImage(this,150,150)"/>
              </div>
              <div class="namePrice">
                <div v-text="item.productName" :title="item.productName"></div>
                <div>价格：￥ <span v-text="item.productPrice"></span></div>
              </div>
              <div class="readBox">
                <a target="_blank"
                   v-bind:href="'/pages/column/43/48/detail/detail.html?pubId=' + item.pubId + '&contentType=91&columnId=' + item.colId">
                  购买</a>
              </div>
              <div class="deleteCllo" @click="deleteCollProduct(item)">
                <!-- <img src="~projects/wenlian/assets/img/deleteCllo.png" alt=""> -->
              </div>
              <div class="selectCllo">
                <!--<a href="javascript:void(0)" v-bind:class="{checked:item.checked}"></a>-->
                <el-checkbox v-model="item.checked" @change="selectCollProduct(item)"></el-checkbox>
              </div>
            </div>
          </div>
        </li>
        <li v-for="item in collectionInfo.data" v-if="item.contentType== '94'" class="ebookColl collContent">
          <div style="width:180px;height: 240px; text-align: center;">
            <div class="picBox">
              <div
                style="width: 180px; height: 180px; vertical-align: middle; display: table-cell; position: relative;">
                <img v-bind:src="item.bigPic" onload="DrawImage(this,150,150)"/>
              </div>
              <div class="namePrice">
                <div v-text="item.productName" :title="item.productName"></div>
                <div>价格：￥ <span v-text="item.productPrice"></span></div>
              </div>
              <div class="readBox">
                <a target="_blank" v-bind:href="'./bookDetail.html?pubId=' + item.pubId">购买</a>
              </div>
              <div class="deleteCllo" @click="deleteCollProduct(item)">
                <!-- <img src="~projects/wenlian/assets/img/deleteCllo.png" alt=""> -->
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
      <div>收藏夹是空的</div>
    </div>
    <ui_pagination :pageMessage="{totalCount: this.collectionInfo.data && this.collectionInfo.totalCount - 0 || 0}" :excuteFunction="pagingF" :page-sizes="[8,16,32,64]"></ui_pagination>
  </div>
</template>
<script type="text/ecmascript-6">

  import Vue from 'vue';
  // import * as type from 'projectsConfig/config.wl.js';
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: "collecting",
    reused: true,
    props: ["namespace"],
    mounted: function () {
      this.siteId = SITE_CONFIG.siteId;
      this.$store.dispatch("personalCenter/queryUser", {
        loadedCallBack: this.loadedCallBack
      });
    },
    data() {
      return {
        siteId: "",
        modalStatus: false,
        selectedAll: false,
      }
    },
    computed: {
      ...mapGetters("personalCenter/", {
        collectionInfo: "getCollectionInfo",
      })
    },
    methods: {
      loadedCallBack() {
        var params = {
          param: {
            pageIndex: 1,
            pageSize: 8
          },
          myCallBack: function() {}
        };
        this.$store.dispatch("personalCenter/queryCollectionInfo", params);
      },
      pagingF: function ({pageNum, pageSize}) {
        var params = {
          param: {
            pageIndex: pageNum,
            pageSize: pageSize
          },
          myCallBack: function() {}
        };
        this.$store.dispatch("personalCenter/queryCollectionInfo", params);
      },
      deleteCollProduct: function (item) {  // 删除收藏商品
        var _this = this;
        this.$confirm('您确定要将商品移除收藏夹吗?', '系统提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          var params = {
            id: item.pubId,
            cb: _this.deleteCollProductcb
          };
          _this.$store.dispatch("personalCenter/deleteCollProduct", params);
        })
      },
      deleteCollProductcb: function (delCollStatus) {
        var _this = this;
        if (delCollStatus == 1) {
          this.$message({
            message: '移除成功',
            type: 'success'
          });
          var params = {
            param: {},
            myCallBack: function() {
              _this.isSelectAll();
            }
          };
          this.$forceUpdate();
          this.$store.dispatch("personalCenter/queryCollectionInfo", params);

        } else {
          this.$message({
            message: '移除失败',
            type: 'error'
          })
        }
      },
      selectCollProduct: function (item) {
        this.isSelectAll();
      },
      deleteLots: function () {
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
            message: '请选择至少一件商品~',
            type: 'error'
          });
          return false;
        }
        var pubIds = {
          pubId: pubidList.join(",")
        };
        this.deleteCollProduct(pubIds);
      },
      selectAll: function () {
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
      isSelectAll: function () {
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
      }
    }
  }
</script>
<style>
  .wl_collWrapper {
    width: 80%;
    float: right;
    color: #4a4a4a;
    font-size: 14px;
  }

  .wl_collWrapper .myColList {
    margin-bottom: 30px;
  }

  .wl_collWrapper .readBox {
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
    transition: all .2s ease-in 0s;
    transform: translateY(0px);
  }

  .wl_collWrapper .readBox a {
    color: #ffffff;
  }

  .wl_collWrapper .picBox:hover > .readBox {
    transition: all 0.2s ease-out;
    transform: translateY(-30px);
  }

  .wl_collWrapper .picBox {
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

  .wl_collWrapper .collContent .namePrice {
    width: 180px;
    text-align: center;
    position: relative;
    z-index: 1;
    background-color: #FFF;
  }

  .wl_collWrapper .collContent .namePrice div {
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

  .wl_collWrapper .collContent .namePrice div:last-child {
    color: #ffa31a;
  }

  .wl_collWrapper .collContent .namePrice div:last-child span {
    font-weight: bold;
    font-size: 16px;
  }

  .wl_collWrapper .picBox:hover {
    border: 1px solid #ffa31a;
  }

  .wl_collWrapper .collContent .deleteCllo {
    position: absolute;
    right: 2px;
    top: -17px;
    transition: all .2s ease-in 0s;
    transform: translateY(0px);
  }

  .wl_collWrapper .collContent .deleteCllo img {
    cursor: pointer;
  }

  .wl_collWrapper .picBox:hover > .deleteCllo {
    transition: all 0.2s ease-out;
    transform: translateY(17px);
  }

  .wl_collWrapper .collContent .selectCllo {
    position: absolute;
    left: 1px;
    top: 1px;
    /*transition: all .2s ease-in 0s;
    transform: translateY(0px);*/
  }

  .wl_collWrapper .collContent .selectCllo a {
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

  .wl_collWrapper .collContent .selectCllo .checked {
    border-color: #ff2832;
    /* background: #ff2832 url(~projects/wenlian/assets/img/tick.png) no-repeat 0px 1px; */
    background-size: 12px;
  }

  .wl_collWrapper .emptyColl {
    text-align: center;
    padding: 50px 0px;
  }

  .wl_collWrapper .emptyColl img {
    width: 150px;
  }

  .wl_collWrapper .deleteColls {
    height: 30px;
    line-height: 30px;
  }

  .wl_collWrapper .deleteColls a {
    margin-left: 10px;
    color: #4a4a4a;
  }

  .wl_collWrapper .deleteColls a:hover {
    color: #ff2832;
    text-decoration: underline !important;
  }

  .wl_collWrapper .deleteColls .selectAll {
    margin-right: 10px;
    cursor: pointer;
  }

  .wl_collWrapper .deleteColls .selectAll a {
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

  .wl_collWrapper .deleteColls .checked a {
    border-color: #ff2832;
    /* background: #ff2832 url(~projects/wenlian/assets/img/tick.png) no-repeat 0px 1px; */
    background-size: 12px;
  }

  .wl_collWrapper .myColList ul {
    display: inline-block;
  }

  .wl_collWrapper .myColList ul li {
    float: left;
    margin-right: 30px;
    margin-top: 15px;
  }
</style>
