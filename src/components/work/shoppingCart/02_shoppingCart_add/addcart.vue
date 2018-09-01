<!-- 加入购物车提示组件 Created by song 2018/1/18 -->
<template>
  <div class="work_shoppingcart_02 work_shoppingcart_02_skin">
    <div class="tips">
      <i class="tipsItag"></i>
      <span>{{getStaticText('addCartSuccess') ? getStaticText('addCartSuccess') : '商品已成功加入购物车！'}}</span>
    </div>
    <div class="bookInfoWrapper">
      <dl class="bookInfoDl">
        <dt class="bookInfoDt">
          <img :src="bookInfo.bigPic" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" onload="DrawImage(this,150,150)">
        </dt>
        <dd class="bookInfoDd">
          <p class="toDetail" v-on:click="toDetail(bookInfo.pubId)" v-text="bookInfo.productName"></p>
          <p class="author">{{getStaticText('author') ? getStaticText('author') : '作者:'}}{{bookInfo.author}}</p>
          <p class="ebook" v-if="CONFIG && CONFIG.ebookType && bookInfo.contentType === CONFIG.ebookType">{{getStaticText('eProduct') ? getStaticText('eProduct'): '数字商品'}}</p>
          <p class="redirect">
            <a :href="CONFIG.toIndexHref ? CONFIG.toIndexHref : '../pages/index.html'" class="toIndex">{{getStaticText('backShopping') ? getStaticText('backShopping') : '返回商城'}}</a>
            <a :href="CONFIG.toShoppingCartHref ? CONFIG.toShoppingCartHref : '../pages/shoppingcart.html'" class="toCart">{{getStaticText('settleAccountInShoppingCart') ? getStaticText('settleAccountInShoppingCart') : '去购物车结算'}}</a>
          </p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import * as type from "@work/bookDetail/common/interfaces.js";
import * as interfaces from "@work/login/common/interfaces.js";

export default {
  name: "work_shoppingcart_02_add",
  reused: true,
  props: ["namespace"],
  data () {
    return {
      CONFIG: "",
      pubId: '',
    };
  },
  computed: {
    ...mapGetters({
      bookInfo: 'bookDetail/bookDetailInfo',
    }),
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
  },
  mounted () {
    this.pubId = URL.parse(window.location.href, true).query.pubId;
    this.CONFIG = PROJECT_CONFIG[this.namespace].shoppingCart.shoppingCart_02;
  },
  methods: {
    toDetail(pubId) { // 去图书详情页
      window.location.href = (this.CONFIG.toDetailUrl ? this.CONFIG.toDetailUrl : '../pages/bookdetail.html')+ '?pubId=' + pubId;
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false

      }
    },
  },
  watch: {
    bookInfo: function (newValue, oldValue) {
      if (newValue.BOOK_SYS_AUTHORS !== undefined) {
        this.$bus.$emit('searchAuthor', newValue);
      }
    },
    member: function (newValue, oldVlue) {
      if (newValue.loginName) {
        let paramsObj = Object.assign({}, this.CONFIG.params);
        paramsObj.loginName = newValue.loginName;
        paramsObj.pubId = this.pubId;
        this.$store.dispatch('bookDetail/' + type.BOOK_DETAIL, paramsObj);
      }
    }
  }
}

</script>
<style>
/* start 结构样式 */
.work_shoppingcart_02 {
  overflow: hidden;
}

.work_shoppingcart_02 .tips {
  margin-bottom: 15px;
  margin-top: 5px;
}

.work_shoppingcart_02 .tipsItag {
  width: 48px;
  height: 48px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
}

.work_shoppingcart_02 .bookInfoWrapper .bookInfoDl {
  width: 100%;
  height: 150px;
  margin-top: 0;
  margin-bottom: 20px;
}

.work_shoppingcart_02 .bookInfoDl .bookInfoDt {
  padding-right: 30px;
  float: left;
  line-height: 1.42857143;
}

.work_shoppingcart_02 .bookInfoDl .bookInfoDd {
  width: calc(100% - 200px);
  float: left;
  margin-left: 0;
  line-height: 1.42857143;
}

.work_shoppingcart_02 .bookInfoDl .bookInfoDd .toDetail {
  padding-top: 24px;
  margin: 0 0 10px;
}

.work_shoppingcart_02 .bookInfoDl .bookInfoDd .author {
  margin: 0 0 10px;
}

.work_shoppingcart_02 .bookInfoDl .bookInfoDd .ebook {
  padding-bottom: 10px;
  margin: 0 0 10px;
}

.work_shoppingcart_02 .bookInfoDl .bookInfoDd .redirect {
  text-align: right;
  line-height: 30px;
  margin: 0 0 10px;
}

.work_shoppingcart_02 .redirect .toIndex {
  border-width: 1px;
  padding: 3px 25px;
  margin-right: 30px;
}

.work_shoppingcart_02 .redirect .toCart {
  padding: 3px 15px;
}
/* end 结构样式 */

/* start 皮肤样式 */
.work_shoppingcart_02_skin .tips {
  color: #737373;
  font-size: 20px;
}

.work_shoppingcart_02_skin .tipsItag {
  background: url(/assets/img/bg_10.png) no-repeat -552px -351px;
  font-style: normal;
}

.work_shoppingcart_02_skin .bookInfoDl .bookInfoDt {
  font-weight: bold;
}

.work_shoppingcart_02_skin .bookInfoDl .bookInfoDd .toDetail {
  cursor: pointer;
  color: #c50000;
  font-size: 14px;
}

.work_shoppingcart_02_skin .bookInfoDl .bookInfoDd .author {
  color: #a6a6a6;
}

.work_shoppingcart_02_skin .bookInfoDl .bookInfoDd .ebook {
  color: #a6a6a6;
}

.work_shoppingcart_02_skin .bookInfoDl .bookInfoDd .redirect {
  font-size: 16px;
}

.work_shoppingcart_02_skin .redirect .toIndex {
  border-style: solid;
  border-color: #ca0000;
  text-decoration: none;
  color: #c50000;
}

.work_shoppingcart_02_skin .redirect .toCart {
  background: #c50000;
  color: #fff;
  text-decoration: none;
}
/* end 皮肤样式 */
</style>
