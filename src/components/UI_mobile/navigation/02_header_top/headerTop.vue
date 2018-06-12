<!-- 手机端头部列表组件 Created by zong 2018/06/1 -->
<template>
    <div class="ui_mobile_navigation_02">
      <span v-if="CONFIG && headerLists" class="ui_mobile_navigation_02_span"  v-for="(item, index) in headerLists"  :key="index">
        <a href="javascript:void(0)" v-bind:class="item.class" @click="toCustomFun(item)">{{item.name}}</a>
      </span>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import PROJECT_CONFIG from "projectConfig";
import * as interfaces from "@work/login/common/interfaces.js";
import Vue from 'vue';

export default {
  name: 'ui_mobile_navigation_02',
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      headerLists: [],
      loginName:'',
    };
  },

  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].navigation.navigation_02[this.modulename];
    this.headerLists = this.CONFIG.headerLists;
    this.getMemberInfo().then((member) => {
      this.loginName = member.loginName;
    });
  },

		computed: {
			...mapGetters("login", {
				member: interfaces.GET_MEMBER
			}),
		},

  mounted () {
  },
  methods: {
			...mapActions("login", {
				getMemberInfo: interfaces.ACTION_KEEP_SESSION
			}),
    toCustomFun (fieldUrl) { // 执行自定义事件
      if(fieldUrl){
        if(fieldUrl.url == 'backUrl'){
          window.history.go(-1);
          return false;
        }
        if(fieldUrl.url == 'personUrl'){
          if(this.loginName){
            window.open(fieldUrl.personUrl);
          }else{
            window.open(fieldUrl.loginUrl);
          }
           return false;
        }

        window.open(fieldUrl.url);
      }
    }
  }
}

</script>
