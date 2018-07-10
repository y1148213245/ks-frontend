<!-- 注册状态组件 -->
<template>
  <div class="work_common_04">
    <div class="work_common_04-success" v-if="status == 0">
      <div class="work_common_04-success_icon"></div>
      <div class="work_common_04-success_msg">{{getStaticText('registerSuccessInfo') ? getStaticText('registerSuccessInfo') : '恭喜您,注册成功！'}}</div>
      <p class="work_common_04-success_interval"><span v-text="time"></span>{{getStaticText('waitingLoginInfo') ? getStaticText('waitingLoginInfo') : '秒后自动登录...'}}</p>
      <div class="work_common_04-success_login" v-if="CONFIG.toLoginType == ''"><a :href="CONFIG.toLoginHref">{{getStaticText('loginInfo') ? getStaticText('loginInfo') : '登&nbsp;&nbsp;录'}}</a></div>
    </div>
    <div class="work_common_04-error" v-if="status != 0">
      <div class="work_common_04-error_icon"></div>
      <div v-if="status ==1" class="work_common_04-error_isHad">{{getStaticText('userExistInfo') ? getStaticText('userExistInfo') : '用户已经存在'}}</div>
      <div v-if="status ==2" class="work_common_04-error_isTimeout">{{getStaticText('verifyTimeOut') ? getStaticText('verifyTimeOut') : '验证超时'}}</div>
      <div v-if="status ==3" class="work_common_04-error_notHad">{{getStaticText('userNameNotExist') ? getStaticText('userNameNotExist') : '用户名不存在'}}</div>
      <!---->
      <!---->
      <!---->

    </div>
  </div>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post } from '@common'
export default {
  name: 'work_common_04',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      CONFIG: null,
      time: 3,
      status: null
    };
  },

  computed: {},

  created () {
    this.initConfig();
  },

  mounted () {
    this.getHrefParam();
  },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].common.work_common_04;
    },
    getHrefParam () {
      //0代表成功 1：用户已经存在 2:操作失败 3:用户名不存在
      let queryObj = URL.parse(document.URL, true).query;
      this.status = queryObj[this.CONFIG.getLocationParam.keys.status];
      if (this.status == 0 && this.CONFIG.toLoginType == 'auto') {
        this.setToken(queryObj[this.CONFIG.getLocationParam.keys.token])
        setInterval(() => {
          if (this.time > 0) {
            this.time--
          } else {
            window.location.href = this.CONFIG.toLoginHref;
          }
        }, 1000);
      }
    },
    setToken (token) {
      localStorage.setItem('token', token);
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    },
  }
}
</script>
<style>
.work_common_04-success_msg {
  text-align: center;
  color: #727272;
  font-size: 20px;
  margin-bottom: 35px;
}
.work_common_04-success_interval {
}
.work_common_04-success_login a {
  background: #c50000;
  padding: 8px 22px;
  color: #fff;
  text-decoration: none;
}
</style>
