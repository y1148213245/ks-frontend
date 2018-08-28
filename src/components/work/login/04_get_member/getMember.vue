<!-- 获取登陆信息 -->
<template>

  <div class="work_login_04">

    <!-- 登录前 -->

    <template v-if="!member.loginName">
      <a :href="CONFIG.toLoginHref" class="work_login_04-login">
        <slot>
          {{getStaticText('loginSys') ? getStaticText('loginSys') : '[登录]'}}
        </slot>
      </a>
      <a v-if="member.loginName" :href="CONFIG.toPersonalCenterHref" class="work_login_04-member" v-text="member.loginName"></a>
      <span v-if="getIsShow('register')">
        <a :href="CONFIG.toRegisterHref">{{getStaticText('register') ? getStaticText('register') : "注 册"}}</a>
      </span>
    </template>
    <!-- 登陆后 -->

    <template v-if="member.loginName">

      <a :href="CONFIG.toPersonalCenterHref" class="work_login_04-member" v-text="member.loginName"></a>

      <span class="work_login_04-info">{{getStaticText('welcomeBack') ? getStaticText('welcomeBack') : '欢迎回来！' }}</span>

      <a class="work_login_04-exit" @click="exit">
        <slot name="exit">
          {{getStaticText('exit') ? getStaticText('exit') : '退出'}}
        </slot>
      </a>
    </template>
  </div>

</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { _axios, Post } from '@common'
import { mapGetters, mapActions } from 'vuex'
import * as interfaces from "@work/login/common/interfaces.js"

export default {
  name: 'work_login_04',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      CONFIG: null,
    };
  },

  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER,
    })
  },

  created () {
    this.initConfig();
    this.getMemberInfo();
  },

  mounted () { },

  methods: {
    ...mapActions("login", {
      getMemberInfo: interfaces.ACTION_KEEP_SESSION,
    }),
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].login.work_login_04
    },
    getIsShow (item) {
      if (this.CONFIG.hasOwnProperty('showItem')) {
        let arr = this.CONFIG.showItem;
        if (arr.indexOf(item) > -1) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    },
    exit () {
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
    }
  }
}
</script>
<style>
.work_login_04 {
}
.work_login_04-a {
  text-decoration: none;
}
.work_login_04-info {
  float: left;
}
</style>
