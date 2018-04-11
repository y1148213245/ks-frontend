<template>
    <div class="ui_mobile_list_03" :class="{'ui_mobile_list_03_l':classFloat==='left' , 'ui_mobile_list_03_r':classFloat==='right'}">
      <a class="ui_mobile_list_03_a">
        <div :class="{'ui_mobile_list_03_r_div':classFloat==='right'}">
          <p class="ui_mobile_list_03_p"  @click="toDetail(bookInfo)" :style="{color:titleColor}">{{navName}}</p>
          <p class="ui_mobile_list_03_title">{{CONFIG && CONFIG.title}}</p>
          <span :class="{'ui_mobile_list_03_l_decorate' : classFloat==='left'}"></span>
          <p :class="{'ui_mobile_list_03_r_decorate':classFloat==='right'}"></p>
        </div>
        <div :class="{'ui_mobile_list_03_img_l':classFloat==='left' , 'ui_mobile_list_03_img_r':classFloat==='right'}" v-if="bookInfo && bookInfo[keys.pub_picBig]">
          <img class="ui_mobile_list_03-img" :src="bookInfo && bookInfo[keys.pub_picBig]" @click="toDetail(bookInfo)" alt="暂无图片">
        </div>
      </a>
    </div>
</template>

<script>
import PROJECT_CONFIG from "projectConfig";
import { Post, Get } from "@common";

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
      navName: '',
      CONFIG: null,
      classFloat: null,
      titleColor: ''
    }
  },
  mounted: function () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list.ui_mobile_list_03[this.module];
    this.keys = this.CONFIG.keys;
    this.titleColor = this.CONFIG.titleColor;
    this.classFloat = this.CONFIG.classFloat;
    this.params = Object.assign({}, this.CONFIG.params);
    let condition = JSON.parse(this.params.conditions);
    let siteidCondition = condition.map((item) => {
      for (let i in item) {
        if (i === this.keys.pub_site_id) {
          item[i] = CONFIG.SITE_CONFIG.siteId;
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
    toDetail (item) {
      let toDetailType = this.CONFIG.toDetailType;
      if (toDetailType.type == 'phone') {
        let params = '';
        for (let index = 0; index < toDetailType.phone.values.length; index++) {
          const element = toDetailType.phone.values[index];
          params += item[element] + ',';
        }
        params = params.substring(0, params.length - 1)
        eval(toDetailType.phone.functionName + '(' + params + ')')
      } else if (toDetailType.type == 'href') {
        let url = toDetailType.href.url + '?';
        for (const key in toDetailType.href.keys) {
          const element = toDetailType.href.keys[key];
          url += key + '=' + item[element] + '&';
        }
        for (const key in toDetailType.href.fixedKeys) {
          const element = toDetailType.href.fixedKeys[key];
          url += key + '=' + element + '&';
        }
        url = url.substring(0, url.length - 1)
        window.location.href = url;
      }
    },
    getBookData: function () {
      Post(CONFIG.BASE_URL+this.CONFIG.url, this.params).then((response) => {
        let data = response.data.result;
        if (data && data instanceof Array) {
          this.bookInfo = response.data.result[0];
        }
      })
    },
    getNavData: function () {
      Get(CONFIG.BASE_URL+this.CONFIG.navUrl, { "params": this.navParams }).then((response) => {
        let data = response.data.data;
        data.filter((item) => {
          if (item.id === this.CONFIG.colId) {
            this.navName = item.name;
          }
        })
      })
    }
  }
}
</script>

<style>
.ui_mobile_list_03 {
  position: relative;
}
.ui_mobile_list_03_l {
  float: left;
  width: 2.78rem;
  height: 4rem;
  box-sizing: border-box;
  border-right: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  border-top: 0rem;
  text-align: center;
  padding-top: 0.65rem;
  padding-bottom: 0.25rem;
}
.ui_mobile_list_03_r {
  padding: 0.4rem 0.55rem 0.15rem 0.55rem;
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
  overflow: hidden;
  /* flex-direction: column; */
  height: 2rem;
  box-sizing: border-box;
}
.ui_mobile_list_03_a {
  display: block;
  width: 100%;
  height: 100%;
}
.ui_mobile_list_03_p {
  font-size: 0.3rem;
}
.ui_mobile_list_03-img {
  font-size: 0.2rem;
}
.ui_mobile_list_03_title {
  color: #8b8b8b;
  font-size: 0.18rem;
  margin-bottom: 0.2rem;
  margin-top: 0.15rem;
}
.ui_mobile_list_03_r_decorate {
  width: 0.3rem;
  margin: 0 auto;
  height: 1px;
  background-color: #c40001;
}
.ui_mobile_list_03_l_decorate {
  width: 0.27rem;
  height: 0.41rem;
  position: absolute;
  top: 0rem;
  left: 0.4rem;
  background: url(/assets/img/bg_ico.png) no-repeat;
  background-position: -0.96rem 0rem;
  display: inline-block;
  vertical-align: middle;
  -webkit-background-size: 5rem 5rem;
  -moz-background-size: 5rem 5rem;
  background-size: 5rem 5rem;
}
.ui_mobile_list_03_img_l img,
.ui_mobile_list_03_img_r img {
  width: 100%;
}
.ui_mobile_list_03_img_l img {
  height: 2.02rem;
}
.ui_mobile_list_03_img_l img {
  height: 1.42rem;
}
.ui_mobile_list_03_img_l {
  width: 1.44rem;
  height: 2.02rem;
  margin: 0 auto;
}
.ui_mobile_list_03_r_div {
  float: left;
}
.ui_mobile_list_03_img_r {
  float: left;
  width: 1.07rem;
  height: 1.44rem;
  margin-left: 0.5rem;
}
</style>
