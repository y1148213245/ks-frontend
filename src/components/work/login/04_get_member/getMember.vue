<!-- 获取登陆信息 -->
<template>
 <div class="work_login_04">
   <a v-if="!member.loginName" :href="CONFIG.toLoginHref" class="work_login_04-login">
     <slot>
       [登陆]
     </slot>
   </a>
   <a v-if="member.loginName" :href="CONFIG.toPersonalCenterHref" class="work_login_04-member" v-text="member.loginName"></a>
   <span v-if="member.loginName" style="float: right;">欢迎回来！</span>
 </div>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post } from '@common'
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
</style>
