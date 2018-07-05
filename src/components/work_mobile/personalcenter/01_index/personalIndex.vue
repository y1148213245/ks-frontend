<!-- 个人中心首页组件 Created by song on 2018/6/5 -->
<template>
  <div class="work_mobile_personalcenter_01">

    <van-cell-group class="work_mobile_personalcenter_01_cellgroup">
      <van-cell class="work_mobile_personalcenter_01_cell" v-for="(nav, index) in showLists" :key="index" :title="nav.title" :is-link="nav.hasLink" :url="CONFIG.toSubPCUrl + '#' + nav.tag">

        <!-- 我的资料 -->
        <div v-if="member && nav.tag == 'account'" class="work_mobile_personalcenter_01_account">
          <div class="work_mobile_personalcenter_01_account_img">
            <img :src="member.picture || '../assets/img/people.jpg'" alt="暂无头像">
          </div>
          <span class="work_mobile_personalcenter_01_account_name">{{member.loginName}}</span>
        </div>
        <!-- END 我的资料 -->

        <!-- 余额 -->
        <div v-else-if="member && nav.tag == 'balance'" class="work_mobile_personalcenter_01_balancecon">
          <span class="work_mobile_personalcenter_01_balance" v-text="member.virtualCoin ? Number(member.virtualCoin).toFixed(2) : '0.00'"></span>
          <van-button size="small"> {{display.recharge}} </van-button>
        </div>
        <!-- END 余额 -->

        <!-- 已购 -->
        <div v-else-if="member && nav.tag == 'purchasedtwo'" class="work_mobile_personalcenter_01_purchasedtwocon">
          <span class="work_mobile_personalcenter_01_purchasedtwo">({{boughtBooksList ? boughtBooksList.length : '0'}})</span>
        </div>
        <!-- END 已购 -->

      </van-cell>
    </van-cell-group>

    <div class="work_mobile_personalcenter_01_logout">
      <van-button type="danger" @click="loginOut()"> {{display.logOut}} </van-button>
    </div>


  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import * as interfaces from "@work/login/common/interfaces.js";
  import Vue from "vue";
  import { Cell, CellGroup, Icon, Button } from 'vant';
  import PROJECT_CONFIG from "projectConfig";
  import { Post, Get } from "@common";
  Vue.use(Cell).use(CellGroup).use(Icon).use(Button);

  export default {
    name: 'work_mobile_personalcenter_01',
    props: ['namespace', 'modulename'],
    reused: true,
    data () {
      return {
        CONFIG: null,
        showLists: [],
        display: {}, // 静态显示文本
        pageIndex: "1",  // 页码 从 1 开始
        pageSize: "15",  // 每页显示个数
        boughtBooksList: []  //已购图书列表
      };
    },
    computed: {
      ...mapGetters("login", {
        member: interfaces.GET_MEMBER
      }),
    },
    created () {
      this.getMemberInfo();
      this.CONFIG = PROJECT_CONFIG[this.namespace].work_mobile_personalcenter.work_mobile_personalcenter_01[this.modulename];
      this.showLists = this.CONFIG.showLists;
      this.display = this.CONFIG.display;
    },
    mounted () {
      this.$bus.$emit(this.CONFIG.emitEvent.contextEventName, this.display.navTitle);
    },

    methods: {
      ...mapActions("login", {
        getMemberInfo: interfaces.ACTION_KEEP_SESSION,
      }),
      loginOut () { // 退出登录
        localStorage.setItem('token', '');
        let toExit = this.CONFIG.toExit
        if (toExit && toExit.type) {
          if (toExit.type == 'href') {
            window.location.href = toExit.href
            return false
          } else if (toExit.type == 'function') {
            let func = toExit.func;
            let str = func.funcName + '(this.member'
            for (let index = 0; index < func.params.length; index++) {
              const element = func.params[index];
              str += ',' + '\'' + element + '\''
            }
            str += ')'
            eval(str)
          }
        } else {
          _axios.defaults.headers.token = '';
          this.getMemberInfo();
          location.reload(true);
        }
      },
      initData (loginName) {
        this.queryMyBoughtBooks(loginName);  //页面初始化获取已购买图书的全部数据
      },
      //为了显示已购图书的数量，发一次请求
      queryMyBoughtBooks (loginName) {
        let params = Object.assign({}, this.CONFIG.getBoughtBooks.params);
        Get(CONFIG.BASE_URL + this.CONFIG.getBoughtBooks.url + '?loginName=' + (loginName ? loginName : this.member.loginName) + '&pageIndex=' + params.pageIndex + '&pageSize=' + params.pageSize + '&type=' + params.type + '&siteId=' + CONFIG.SITE_CONFIG.siteId + '&productType=' + params.productType + '&status=' + params.status).then((resp) => {
          let res = resp.data;
          if (res.result == '1' && res.data.length > 0) {
            this.boughtBooksList = this.boughtBooksList.concat(res.data);
          }
        })
      }
    },
    watch: {
      member: function (newValue, oldValue) {
        if (newValue.loginName && newValue.loginName != oldValue.loginName) {
          this.initData(newValue.loginName); // 初始化数据之后再执行查询已购图书的方法
          this.loginName = newValue.loginName;
        }
      }
    }

  }
</script>
<style>
  .work_mobile_personalcenter_01 {
    font-size: 0.3rem;
  }

  .work_mobile_personalcenter_01 .van-cell:not(:last-child)::after {
    left: 0px;
  }

  .work_mobile_personalcenter_01_account {
    position: relative;
    height: 2rem;
  }

  .work_mobile_personalcenter_01_account_img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1.8rem;
    height: 1.8rem;
    overflow: hidden;
    border-radius: 50%;
  }

  .work_mobile_personalcenter_01_account_img img {
    width: 100%;
    height: 100%;
  }

  .work_mobile_personalcenter_01_account_name {
    position: absolute;
    left: 40%;
    top: 50%;
    transform: translateY(-50%);
  }

  .work_mobile_personalcenter_01_balance {
    float: left;
  }

  .work_mobile_personalcenter_01_logout {
    padding: 0.8rem 0;
    text-align: center;
  }

  .work_mobile_personalcenter_01_cellgroup .work_mobile_personalcenter_01_cell:nth-child(4) {
    margin-top: 0.3rem;
  }
</style>
