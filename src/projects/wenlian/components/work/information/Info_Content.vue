<template>
  <div class="work_information_info_content">
    <div class="news_nav  f14 line-h35 color_9b9 mt18 ml12">
     {{getStaticText('yourPosition') ? getStaticText('yourPosition') : "您的位置:"}}
      <a href="../pages/index.html" class="color_9b9 ">{{getStaticText('homePage') ? getStaticText('homePage') : "首页"}}</a>>>
      <a class="color_626">{{getStaticText('informationalContent') ? getStaticText('informationalContent') : '资讯内容'}}</a>
    </div>
    <div>
      <div class="news_con pt15 pr30 pb50 pl30">
        <div class="news_tit f20 pb10" v-text="information.pub_resource_name"></div>
        <div class="news_other f14 color_aba pt10 scoped_title_info">
          <span>{{information.information_SYS_AUTHORS || (getStaticText('noAuthor') ? getStaticText('noAuthor') : '暂无作者')}}</span>
          <span>{{formatTimeNEW(information.information_a_pubTime)}}</span>
          <span class="fr share">
						<a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis " target="_blank">
              <i class="news_other_03"></i>{{getStaticText('share') ? getStaticText('share') : "分享"}}
            </a>
					</span>

          <span class="fr ml20 mr20 sc " @click="collectOrLike('0',information.pub_content_type,information.id)">
						<i v-if="information.isCollect == '1'" class=" news_other_02_cg"></i>
						<i v-else-if="information.isCollect == '0' || information.isCollect == null" class=" news_other_02"></i>{{getStaticText('collect') ? getStaticText('collect') : "收藏"}}

					</span>
          <span class="fr dz " @click="collectOrLike('1',information.pub_content_type,information.id)">
						<i v-if="information.isLike == '1'" class="news_other_01_cg"></i>
						<i v-else-if="information.isLike == '0' || information.isLike == null" class="news_other_01"></i>{{getStaticText('support') ? getStaticText('support') : "点赞"}}
					</span>
        </div>
        <div class="news_nr f14 line-h24 pt20 color_737 pb25" v-html="information.information_a_content"></div>
        <div class="infoImg">
          <img :src="information.pub_picBig" onload="DrawImage(this,940,455)">
        </div>

        <!-- 这里要放评论组件 -->
        <work_bookreview_01 namespace="bookdetail"></work_bookreview_01>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters, mapActions} from "vuex";
  import * as interfaces from "@work/login/common/interfaces.js";
  import {Get, Post} from "@common";
  import URL from 'url';
  import PROJECT_CONFIG from "projectConfig";

  export default {
    name: 'work_information_info_content',
    reused: true,
    props: ['namespace'],
    data: function () {
      return {
        CONFIG: "", // API配置
        pubId: 0, // 资讯ID
        information: {}, // 资讯详情
        commentList: [] // 评论列表
      }
    },
    computed: {
      ...mapGetters("login", {
        member: interfaces.GET_MEMBER
      })
    },
    mounted: function () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].information.information_info_content;
      this.setPubId();
      this.queryInformation();
    },
    methods: {
      ...mapActions("data/index/book", [
        'setCollectOrLike',
        'setQueryComment',
        'setAddComment'
      ]),
      setPubId: function () {
        let urlParams = URL.parse(document.URL, true).query;
        this.pubId = urlParams.pubId || 0;
      },
      parseUrlAndParamsToStr: function (url, params) {
        let urlInfo = URL.parse(url, true);
        urlInfo.query = params;
        return URL.format(urlInfo);
      },
      queryInformation: function () {
        let url = this.parseUrlAndParamsToStr(this.CONFIG.queryDetail.url, {pubId: this.pubId, loginName: this.member && this.member.loginName || ''});
        Get(CONFIG.BASE_URL+url).then(rep => {
          if (rep.data && rep.data.success) {
            this.information = rep.data.data;
            // console.log(this.information);
          }
        });
      },
      collectOrLike: function (operateTypeValue, contentType, id) {
        let loginName = this.member.loginName;
        if (!loginName) {
          this.$message({
            message: this.getStaticText('pleaseLogin') ? this.getStaticText('pleaseLogin') : "请登录",
            type: 'warning'
          });
          return;
        }
        let param = {
          loginName: loginName,
          pubId: id,
          operateType: operateTypeValue,
          contentType: contentType
        };

        let url = this.parseUrlAndParamsToStr(this.CONFIG.collectOrLike.url, param);
        Post(CONFIG.BASE_URL+url).then((rep) => {
          if (1 === Number(rep.data && rep.data.result)) {
            if (rep.data.data.code === '00') {
              this.information.isCollect = '1';
              this.$message({
                message: rep.data.data.msg,
                type: 'success'
              })
            } else if (rep.data.data.code === '11') {
              this.information.isLike = '1';
              this.$message({
                message: rep.data.data.msg,
                type: 'success'
              });
            } else if (rep.data.data.code === '000') {
              this.information.isCollect = '0';
              this.$message({
                message: rep.data.data.msg,
                type: 'success'
              });
            } else if (rep.data.data.code === '111') {
              this.information.isLike = '0';
              this.$message({
                message: rep.data.data.msg,
                type: 'success'
              });
            }
          }
        });
      },
      getStaticText: function(text){
        if(this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]){
          return this.CONFIG.staticText[text];

        }else {
          return false;
        }
      },
      formatTimeNEW (time) {
        if (time !== undefined && time !== '' && time !== null) {
          let date = new Date(parseInt(time));
          return formatDate(date, 'yyyy'+(this.getStaticText('year') ? this.getStaticText('year') : '年')
            +'MM'+(this.getStaticText('month') ? this.getStaticText('month') : '月')
            +'dd'+(this.getStaticText('day') ? this.getStaticText('day') : '日')
            +' hh:mm')
        }

        function formatDate(date, fmt) {
          if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
          }
          let o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
          }
          for (let k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
              let str = o[k] + ''
              fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
            }
          }
          return fmt
        }

        function padLeftZero(str) {
          return ('00' + str).substr(str.length)
        }
      },
    }
  }
</script>
<style>
  .scoped_title_info{
    text-align: center;
  }

</style>
