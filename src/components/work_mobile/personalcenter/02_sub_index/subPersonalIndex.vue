/*
 * @Author: song 
 * @Date: 2018-06-05 17:32:51 
 * @Last Modified by: song
 * @Last Modified time: 2018-06-13 16:39:40
 * 个人中心子页面的主页面
 */
<template>
  <div class="work_mobile_personalcenter_02">
    <component :is="currentShowTag" class="personalcenter_section" :namespace="namespace"></component>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import PROJECT_CONFIG from 'projectConfig';
import URL from 'url';
import account from '@components/work_mobile/personalcenter/03_account/account';
import balance from '@components/work_mobile/personalcenter/04_balance/balance';
import recharge from '@components/work_mobile/personalcenter/05_recharge/recharge';
import consume from '@components/work_mobile/personalcenter/06_consume/consume';
import purchased from '@components/work_mobile/personalcenter/07_purchased/purchased';
import bookshelf from '@components/work_mobile/personalcenter/09_bookmyshelf/bookmyshelf';
import collection from '@components/work_mobile/personalcenter/10_collection/collection';

export default {
  name: 'work_mobile_personalcenter_02',
  props: ['namespace'],
  reused: true,
  data () {
    return {
      CONFIG: '1111',
      currentShowTag: "",
    };
  },
  /* computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
  }, */
  components: {
    account,     // 个人资料
    balance,     // 余额充值
    recharge,    // 充值记录
    consume,     // 消费记录
    purchased,   // 已购图书
	  bookshelf,   // 我的书架
	  collection,  // 我的收藏
  },

  created () {
    var getHash = URL.parse(window.location.href, true).hash
    this.currentShowTag = getHash ? getHash.substring(getHash.indexOf('#') + 1, getHash.length) : '';
    this.getMemberInfo();
  },

  mounted () { },

  methods: {
    ...mapActions("login", {
      getMemberInfo: interfaces.ACTION_KEEP_SESSION,
    }),
  }

}
</script>
<style>
</style>