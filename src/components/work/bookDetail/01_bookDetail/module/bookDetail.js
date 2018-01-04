/**
 * 详情页 vuex
 * created by song on 2018/1/3.
 */

import * as type from "@work/bookDetail/common/interfaces.js";
import api from '../api/bookDetailApi.js';

var state = {
  bookDetailInfo: [],
  hotSaleInfo: [],
  addCartInfo: [],
  cartMessage: {},
  //collectOrLikeInfo:[],
  //message:{},
  addHistory: [],
  cancelHistory: [],
  queryEbookPubId: [],
  bookIntroduction: [],
  relateBook: [],
  getCartAmount: {}
};

var getters = {
  bookDetailInfo: (state) => state.bookDetailInfo, //图书详情
  hotSaleInfo: (state) => state.hotSaleInfo, //热卖图书
  addCartInfo: (state) => state.addCartInfo, //详情页加入购物车
  cartMessage: (state) => state.cartMessage, //购物车成功失败返回的提示
  //collectOrLikeInfo:(state)=>state.collectOrLikeInfo,//详情页收藏or点赞
  //message:(state)=>state.message,  //收藏或点赞，取消收藏，点赞返回的提示
  addHistory: (state) => state.addHistory, //历史浏览记录
  cancelHistory: (state) => state.cancelHistory, //取消历史浏览记录
  queryEbookPubId: (state) => state.queryEbookPubId, //电子书发布id
  bookIntroduction: (state) => state.bookIntroduction, //图书简介
  relateBook: (state) => state.relateBook, //相关图书
  getCartAmount: (state) => state.getCartAmount //会员购物车信息
};

var actions = {

  [type.BOOK_DETAIL]({ commit, dispatch }, params) {
    api.viewBookDetailInfo(params, ({ bookDetailInfo }) => {
      commit(type.BOOK_DETAIL, bookDetailInfo)

      var param = { operateType: "1", productId: bookDetailInfo.productId, productName: bookDetailInfo.productName, productType: bookDetailInfo.productType, pubId: bookDetailInfo.pubId, resourceId: bookDetailInfo.resourceId, resourceName: bookDetailInfo.resourceName, resourceType: bookDetailInfo.resourseType, siteId: 0 };

      var docID = bookDetailInfo.resourceId;
      var introductionParam = { doclibCod: "BOOK", docID: docID }
      dispatch(type.BOOK_INTRODUCTION, introductionParam); //图书简介

      // dispatch(type.RELATE_BOOK, bookDetailInfo.pubId); //相关图书

    });
  },

  [type.HOT_SALE]({ commit }) {
    api.viewHotSaleInfo(({ hotSaleInfo }) => commit(type.HOT_SALE, hotSaleInfo));
  },

  [type.ADD_CART]({ commit, dispatch }, params) {
    api.addCartInfos(params.param, ({ addCartInfo, cartMessage }) => {
      let obj = {
        addCartInfo: addCartInfo,
        cartMessage: cartMessage,
        myCallback: params.myCallback
      }
      commit(type.ADD_CART, obj);
      dispatch(type.CART_NUMS, params.param.loginName); //购物车数量
    });
  },

  [type.COLLECT_OR_LIKE]({ commit }, params) {
    api.addCollectOrLikeInfo(params.param, ({ collectOrLikeInfo, message }) => {
      let obj = {
        collectOrLikeInfo: collectOrLikeInfo,
        message: message,
        myCallback: params.myCallback
      }
      commit(type.COLLECT_OR_LIKE, obj)
    });
  },

  [type.HISTORY_RECODE]({ commit }, params) {
    api.addHistoryInfo(params, ({ addHistory }) => {
      commit(type.HISTORY_RECODE, addHistory);
    })
  },

  [type.CANCEL_HISTORY]({ commit }, params) {
    api.cancelHistoryInfo(params.param, ({ addHistory }) => {
      commit(type.CANCEL_HISTORY, addHistory);
    })
  },

  [type.QUERY_EBOOK]({ commit }, params) {
    api.viewEbookPubId(params, ({ queryEbookPubId }) => {
      params.myCallback({ pubId: queryEbookPubId[0].id })
      commit(type.QUERY_EBOOK, queryEbookPubId);
    })
  },

  [type.BOOK_INTRODUCTION]({ commit }, params) {
    api.viewBookIntroduction(params, ({ bookIntroduction }) => {
      commit(type.BOOK_INTRODUCTION, bookIntroduction);
    })
  },

  /* [type.RELATE_BOOK]({ commit }, params) {
    api.viewRelateBook(params, ({ relateBook }) => {
      commit(type.RELATE_BOOK, relateBook);
    })
  }, */
  [type.CART_NUMS]({ commit }, loginName) {
    api.viewCarts(loginName, ({ carts }) => {
      commit(type.CART_NUMS, carts);
    })
  },

};

var mutations = {
  [type.BOOK_DETAIL]: (state, bookDetailInfo) => { //详情
    return state.bookDetailInfo = bookDetailInfo
  },

  [type.HOT_SALE]: (state, hotSaleInfo) => state.hotSaleInfo = hotSaleInfo, //热卖榜

  [type.ADD_CART]: (state, obj) => {
      state.cartMessage = obj.cartMessage,
      state.addCartInfo = obj.addCartInfo, //加入购物车
      obj.myCallback();
  },

  [type.COLLECT_OR_LIKE]: (state, obj) => {
    obj.myCallback();
  },

  [type.HISTORY_RECODE]: (state, addHistory) => state.addHistory = addHistory, //历史浏览记录

  [type.CANCEL_HISTORY]: (state, cancelHistory) => state.addHistory = cancelHistory, //取消历史浏览记录

  [type.QUERY_EBOOK]: (state, queryEbookPubId) =>
  {
    state.QUERY_EBOOK = queryEbookPubId
  },

  [type.BOOK_INTRODUCTION]: (state, bookIntroduction) =>
  {
    state.bookIntroduction = bookIntroduction
  },

  /* [type.RELATE_BOOK]: (state, relateBook) =>
  {
    state.relateBook = relateBook
  }, */
  [type.CART_NUMS]: (state, carts) =>
  {
    state.getCartAmount = carts
  }

};

export default {
  namespaced: true,
  name: 'bookDetail',
  state,
  getters,
  actions,
  mutations
}
