<template>
    <div :class="{'ui_mobile_list_03_l':classFloat==='left' , 'ui_mobile_list_03_r':classFloat==='right'}">
      <a class="ui_mobile_list_03_a">
        <div :class="{'ui_mobile_list_03_r_div':classFloat==='right'}">
          <p class="ui_mobile_list_03_p f30" :style="{color:titleColor}">{{navName}}</p>
          <p class="ui_mobile_list_03_title color_8b8b f18 mb20 mt15">{{CONFIG && CONFIG.title}}</p>
          <span :class="{'ui_mobile_list_03_l_decorate' : classFloat==='left'}"></span>
          <p :class="{'ui_mobile_list_03_r_decorate':classFloat==='right'}"></p>
        </div>
        <div :class="{'ui_mobile_list_03_img_l':classFloat==='left' , 'ui_mobile_list_03_img_r':classFloat==='right'}" v-if="bookInfo && bookInfo.pub_picBig">
          <img :src="bookInfo && bookInfo.pub_picBig" @click="appbook(bookInfo.id)">
        </div>
      </a>
    </div>
</template>

<script>
  import PROJECT_CONFIG from "projectConfig";
  import {Post, Get} from "@common";

  export default {
    name: "ui_mobile_list_03",
    reused: true,
    props: {
      namespace: String,
      module: String
    },
    data: function () {
      return {
        keys: {},
        bookInfo: {},
        navName:'',
        CONFIG:null,
        classFloat:null,
        titleColor:''
      }
    },
    mounted: function () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].list.ui_mobile_list_03[this.module];
      this.keys = this.CONFIG.keys;
      this.titleColor=this.CONFIG.titleColor;
      this.classFloat=this.CONFIG.classFloat;
      this.params = Object.assign({}, this.CONFIG.params);
      let condition = JSON.parse(this.params.conditions);
      let siteidCondition = condition.map((item) => {
        for (let i in item) {
          if (i === this.keys.pub_site_id) {
            item[i] = CONFIG.SITE_CONFIG.siteId + 1;
          }
        }
        return item
      });
      this.params.conditions = JSON.stringify(siteidCondition);
      this.getBookData();
      this.navParams = Object.assign({}, this.CONFIG.navParams);
      this.navParams.siteId = CONFIG.SITE_CONFIG.siteId;
      this.navParams.chId = CONFIG.SITE_CONFIG.chId;
      this.getNavData();
    },
    methods: {
      appbook: function (bookid) {
        sendMsg("{\"bookid\":\"" + bookid + "\"}");
      },
      getBookData: function () {
        Post(this.CONFIG.url, this.params).then((response) => {
          let data = response.data.result;
          if (data && data instanceof Array) {
            this.bookInfo = response.data.result[0];
          }
        })
      },
      getNavData: function () {
        Post(this.CONFIG.navUrl, {"params": this.navParams}).then((response) => {
          let data = response.data.data;
          data.filter((item) => {
            if (item.id === this.CONFIG.colId) {
              this.navName=item.name;
            }
          })
        })
      }
    }
  }
</script>

<style>
.ui_mobile_list_03_l{
  float: left;
  width: 2.78rem;
  border-right: 1px solid #d9d9d9;
  border-top: 0.0rem;
  text-align: center;
  padding-top: 0.65rem;
  padding-bottom: 0.25rem;
}
  .ui_mobile_list_03_r{
    padding: 0.4rem 0.55rem .15rem 0.55rem;
    border-bottom: 1px solid #d9d9d9;
    display: -webkit-box;
    /* display: -webkit-flex; */
    display: -moz-box;
    display: -ms-flexbox;
    /* display: flex; */
    /* -webkit-box-orient: vertical; */
    /* -webkit-box-direction: normal; */
    /* -webkit-flex-direction: column; */
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    /* flex-direction: column; */
  }
  .ui_mobile_list_03_a{
    display: block;
    width: 100%;
    height: 100%;
  }
  .f30{
    font-size: 0.3rem;
  }
.color_8b8b{
  color: #8b8b8b;
}
  .f18{
    font-size: 0.18rem;
  }
  .mb20{
    margin-bottom: 0.2rem;
  }
  .mt15{
    margin-top: 0.15rem;
  }
  .ui_mobile_list_03_r_decorate{
    width: 0.3rem;
    margin: 0 auto;
    height: 1px;
    background-color: #c40001;
  }
  .ui_mobile_list_03_l_decorate{
    width: 0.27rem;
    height: 0.41rem;
    position: absolute;
    top: 1rem;
    left: 0.4rem;
    background: url(/assets/img/bg_ico.png) no-repeat;
    background-position: -0.96rem 0.0rem;
    display: inline-block;
    vertical-align: middle;
    -webkit-background-size: 5rem 5rem;
    -moz-background-size: 5rem 5rem;
    background-size: 5rem 5rem;
  }
  .ui_mobile_list_03_img_l img,
  .ui_mobile_list_03_img_r img{
    width: 100%;
  }
.ui_mobile_list_03_img_l img{
  height: 2.02rem;
}
.ui_mobile_list_03_img_l img{
  height: 1.42rem;
}
  .ui_mobile_list_03_img_l{
    width: 1.44rem;
     height: 2.02rem;
     margin: 0 auto;
  }
  .ui_mobile_list_03_r_div{
    float:left
  }
  .ui_mobile_list_03_img_r{
    float: left;
    width: 1.07rem;
    height: 1.42rem;
    margin-left: 0.6rem;
  }
</style>
