/**
 * 图书详情页接口API  created by song 2017/1/3
 */
import Vue from 'vue';
import axios from 'axios';
// import { CONFIG.SITE_CONFIG } from "projectsConfig/config.dev.js";

export default {
  /**
   * 图书详情页接口
   * @param cb
   */
  viewBookDetailInfo(params, cb) {
    let loading = Vue.prototype.$loading({ fullscreen: true });
    var url = CONFIG.BASE_URL + "book/getBookDetail.do?pubId=" + params.pubId + '&loginName=' + params.loginName;
    axios.get(url).then(function (response) {
      if (response.data.result == "1" && cb && cb instanceof Function) {
        cb({
          bookDetailInfo: response.data.data,
        });
        loading.close();
      }
    }).catch(function (error) {
      loading.close();
    });
  },

  /**
   * 加入购物车
   * @param cb
   */
  addCartInfos(params, cb) {
    var url = CONFIG.BASE_URL + 'cart/addCart.do?number=' + params.number + '&loginName=' + params.loginName + '&activityId=' + 0 + '&pubId=' + params.pubId + "&colId=" + params.colId + '&siteId=' + CONFIG.SITE_CONFIG.siteId;
    axios.get(url).then(function (response) {
      if (response.data.result === "0" && response.data.error && response.data.error.errorCode === "403") { // 判断登录失效
        Vue.prototype.$alert("登录失效，请您重新登录。", "系统提示", {
          confirmButtonText: "确定"
        });
        return false;
      }
      if (cb && cb instanceof Function) {
        var showMsg = '系统数据维护中，请联系客服。';
        if (response.data.data && response.data.data.msg) {
          showMsg = response.data.data.msg;
        } else if (response.data.error && response.data.error.errorMsg) {
          showMsg = response.data.error.errorMsg === "用户名错误" ? '系统数据维护中，请联系客服。' : showMsg;
        }
        cb({
          addCartInfo: response.data.result,
          cartMessage: showMsg
        });
      }
    }).catch(function (error) {});
  },

  /**
   * 加入收藏
   * @param params
   * @param cb
   */
  addCollectOrLikeInfo(params, cb) {
    var collect_url = CONFIG.BASE_URL + 'collection/addCollect.do?loginName=' + params.loginName + '&pubId=' + params.pubId + '&operateType=' + params.operateType + '&productId=' + params.productId + '&siteId=' + CONFIG.SITE_CONFIG.siteId;
    axios.post(collect_url).then(function (response) {
      if (cb && cb instanceof Function) {
        if (response.data.result === "0" && response.data.error && response.data.error.errorCode === "403") { // 判断登录失效
          Vue.prototype.$alert("登录失效，请您重新登录。", "系统提示", {
            confirmButtonText: "确定"
          });
          return false;
        }
        cb({
          collectOrLikeInfo: response.data.result,
          message: response.data.data
        });
      }
        
    }).catch(function (error) {});
  },

  /**
   * 查购物车数量
   * @param loginName
   * @param cb
   */
  viewCarts(loginName, cb) {
    var url = CONFIG.BASE_URL + "cart/getCartAndActivity.do?loginName=" + loginName + '&siteId=' + CONFIG.SITE_CONFIG.siteId;
    axios.get(url).then(function (response) {
      var number = 0;
      // if (response.data.result === "0" && response.data.error && response.data.error.errorCode === "403") { // 判断登录失效
      //   Vue.prototype.$alert("登录失效，请您重新登录。", "系统提示", {
      //     confirmButtonText: "确定"
      //   });
      //   return false;
      // }
      if (!!response.data.data && !!response.data.data.content) {
        var cartData = response.data.data.content;
        if (cartData.length > 0) {
          for (var i = 0; i < cartData.length; i++) {
            var numList = cartData[i].list;
            for (var j = 0; j < numList.length; j++) {
              var num = numList[j].nums;
              number += num;
            }
          }
        }
      }
      if (cb && cb instanceof Function)
        cb({ carts: number });
    })
  },

  /**
   * 查询电子书或图书发布id
   * @param params
   * @param cb
   */
  viewEbookPubId(params, cb)
  {
    var url = CONFIG.BASE_URL + 'spc/cms/publish/list.do';
    var param = {
      conditions: '[{pub_resource_type:"' + params.resourseType + '"},{pub_resource_id:"' + params.resourceId + '"},{pub_content_type:"' + params.contentType + '"},{pub_site_id:"' + CONFIG.SITE_CONFIG.siteId + '"}]',
      orderBy: "pub_a_order asc pub_lastmodified desc id asc",
      pageNo: params.pageIndex + "",
      pageSize: "15",
      searchText: ""
    };
    axios.post(url, param).then(function (response) {
      var ebookList = response.data.result;
      if (ebookList.length != 0) {
        if (cb && cb instanceof Function)
          cb({ queryEbookPubId: ebookList });
      } else if (params.contentType == "91") {
        alert("没有图书");
      } else if (params.contentType == "94") {
        alert("没有电子书");
      }
    }).catch(function (error) {});
  },

  /**
   * 删除历史记录
   * @param params
   * @param cb
   */
  cancelHistoryInfo(params, cb) {
    var url = CONFIG.BASE_URL + 'browserHistory/deleteHistoryByUser.do?loginName=' + params;
    axios.get(url).then(function (response) {
      if (response.data.result === "0" && response.data.error && response.data.error.errorCode === "403") { // 判断登录失效
        Vue.prototype.$alert("登录失效，请您重新登录。", "系统提示", {
          confirmButtonText: "确定"
        });
        return false;
      }
      if (response.data.result == "1") {
        if (cb && cb instanceof Function)
          cb({ addHistory: [] });
      }
    })
  },

  /**
   * 历史记录
   * @param params
   * @param cb
   */
  addHistoryInfo(params, cb) {
    var url = CONFIG.BASE_URL + 'browserHistory/addBrowserHistory.do?pubId=' + params.pubId + '&loginName=' + params.loginName;
    var query_url = '/browserHistory/getHistoryList.do?num=' + params.num + '&username=' + params.loginName;
    axios.get(url).then(function (response) {
      if (response.data.result === "0" && response.data.error && response.data.error.errorCode === "403") { // 判断登录失效
        Vue.prototype.$alert("登录失效，请您重新登录。", "系统提示", {
          confirmButtonText: "确定"
        });
        return false;
      }
      if (response.data.result == '1') {
        axios.get(query_url).then(function (response) {
          if (response.data.result == "1") {
            if (cb && cb instanceof Function)
              cb({ addHistory: response.data.data });
          }
        })
      }
    });
  },

  /**
   * 查询图书简介
   * @param params
   * @param cb
   */
  viewBookIntroduction(params, cb) {
    var url = CONFIG.BASE_URL + "spc/prodb/publicize.do?doclibCode=" + params.doclibCod + "&docID=" + params.docID;
    axios.get(url).then(function (response) {
      if (cb && cb instanceof Function)
        cb({ bookIntroduction: response.data });
    })
  },
}
