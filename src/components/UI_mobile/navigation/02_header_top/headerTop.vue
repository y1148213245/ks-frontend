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
          let urlData=window.location.href;
          var bluefile =urlData.substring(urlData.indexOf("=")+1, urlData.indexOf("#"))
          if(bluefile=="details"){//判断是否进入订单详情页的详情页(有问题请找李修改)
            let splicingUrl=urlData.substring(0, urlData.indexOf("?"));
            let splicingUrlend=urlData.substring(urlData.indexOf("#"), urlData.length);
            var jumpEditPage=splicingUrl+splicingUrlend
            location.href=jumpEditPage;
          }else{
            if(urlData.match(/\#(.*)/)!=null){
              if(urlData.match(/\#(.*)/)[1]=="myorderlist"||urlData.match(/\#(.*)/)[1]=="manageaddress"){//判断是否进入订单详情页
                let jumpPersonPage=urlData.substring(0, urlData.indexOf("pages"));
                location.href=jumpPersonPage+"pages/person.html";
              }else{
                window.history.go(-1);
              }
            }else{
              window.history.go(-1);
            }
          }
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
