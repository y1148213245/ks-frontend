<!-- 编辑列表 -->
<template>
  <div>
    <div class="bjlb_list pt20">
      <div class="bjlb_list_con fl mb20 ml40 f14" v-for="entry in list" :key="entry.id">
        <p class="bjlb_list_con_pic"><a href="javascript:void(0)" @click="toDetail(entry.id)"><img :src="entry && entry.pub_picMiddle" alt="暂无图片" style="line-height:150px" onload="DrawImage(this,147,222)"></a></p>
        <p class="bjlb_list_tit mt15"><a href="" class="color_4949" v-text="entry.information_SYS_AUTHORS"></a></p>
        <p class="bjlb_list_jj mt05" v-text="entry.information_SYS_TOPIC" @click="toDetail(entry.id)" style="cursor: pointer;"></p>
        <p class="bjlb_list_yx mt05" v-text="entry.information_a_collaborator || '暂无邮箱'"></p>
        <p class="line-h35" style="margin-top: 5px;">
          <a href="javascript:void(0)" class="color_fff f14 qtg" @click="goContribute(entry.information_a_collaborator)">去投稿</a>
        </p>
        <!-- <p class="bjlb_list_dh mt05">13123456789</p> -->
      </div>
    </div>

    <!--翻页-->
    <div class="page cl">
      <ui_pagination :pageMessage='{totalCount:totalCount} || null' :excuteFunction='pageCallBack' :pageSizes="pageSizes"></ui_pagination>
    </div>
    <!--翻页--> 
  </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Post } from "@common";
import * as interfaces from '@work/login/common/interfaces.js';
import {mapGetters} from 'vuex';

export default {
  name: 'ui_list_pic_15',
  reused: true,
  props: {
    namespace:String
  },
  data () {
    return {
      projectConfig: null,
      list: null,
      totalCount: 0,
      pageNo: 0,
      pageSize: 0,
      pageSizes: null,
    };
  },

  computed: {
    ...mapGetters("login_02",{
      member:interfaces.GET_MEMBER
    })
  },

  created () {
    this.initConfig();
    this.loadDatas();
  },

  mounted () {
  },

  methods: {
    initConfig () {
      let config = PROJECT_CONFIG[this.namespace].list_pic.ui_list_pic_15;
      this.projectConfig = config;
      this.pageNo = config.param.pageNo;
      this.pageSize = config.param.pageSize;
      this.pageSizes = config.pageSizes;
    },
    pageCallBack ({ pageNo, pageSize }) {
      this.pageNo = pageNo;
      this.pageSize = pageSize;
      this.loadDatas();
    },
    loadDatas () {
      let configParams = this.projectConfig.param
      let param = {
        conditions: configParams.conditions,
        groupBy: configParams.groupBy,
        orderBy: configParams.orderBy,
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        searchText: ''
      }
      Post(this.projectConfig.url, param).then((req) => {
        let data = req.data.result;
        this.totalCount = req.data.totalCount;
        if (data && data instanceof Array && data.length >= 0) {
          this.list = data;
        }
      })
    },
    toDetail (id) {
      window.location.href = this.projectConfig.toDetailHref + id;
    },
    goContribute(value){
			if(!(this.member && this.member.loginName)){
				window.location.href = "./login.html";
				return;
			}
      var url = this.projectConfig.contributeBaseUrl + "authorName=" + this.member.loginName + "&userName=" + value;
			window.open(url);
		}
  }
}

</script>
<style scoped>
.qtg {
		text-align: center;
	    background: #ca0000;
	    height: 32px;
	    display: inline-block;
	    line-height: 32px;
	    width: 210px;
	}
</style> 