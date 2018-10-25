<!-- 视频详情 Created by song 2018/05/05 -->
<template>
  <div class="work_videodetail_01">
    <div class="work_videodetail_01_baseinfo">
      <h4 class="work_videodetail_01_baseinfo_resName">{{resourceDetail[keys.resName]}}</h4>
      <div class="work_videodetail_01_baseinfo_price" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('price') !== -1 && keys.price && resourceDetail[keys.price] != undefined">
        <span>{{CONFIG.display.price}}</span>
        <span>{{resourceDetail[keys.price] | formatPriceNew}}</span>
      </div>
       <div class="work_videodetail_01_baseinfo_author" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('author') !== -1 && keys.author && resourceDetail[keys.author] != undefined">
        <span>{{CONFIG.display.author}}</span>
        <span>{{resourceDetail[keys.author] || (getStaticText('noAuthor') ? getStaticText('noAuthor') :'暂无作者') }}</span>
      </div>
      <div class="work_videodetail_01_baseinfo_pressname" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('pressname') !== -1 && keys.pressname && resourceDetail[keys.pressname] != undefined">
        <span>{{CONFIG.display.pressname}}</span>
        <span>{{resourceDetail[keys.pressname] || (getStaticText('noPublicInfo') ? getStaticText('noPublicInfo') :'暂无出版信息') }}</span>
      </div>
      <div class="work_videodetail_01_baseinfo_pubdate" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('pubdate') !== -1 && keys.pubdate && resourceDetail[keys.pubdate] != undefined">
        <span>{{CONFIG.display.pubdate}}</span>
        <span>{{resourceDetail[keys.pubdate] | formatDateHH}}</span>
      </div>
      <div class="work_videodetail_01_baseinfo_created" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('created') !== -1 && keys.created && resourceDetail[keys.created] != undefined">
        <span>{{CONFIG.display.created}}</span>
        <span>{{resourceDetail[keys.created] | formatDateHH}}</span>
      </div>
      <time class="work_videodetail_01_baseinfo_time" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('time') !== -1 && keys.time && resourceDetail[keys.time] != undefined">{{resourceDetail[keys.time]}}
        <span>{{CONFIG.display.time}}</span>
        <span>{{resourceDetail[keys.time] || (getStaticText('noTime') ? getStaticText('noTime') :'暂无时间') }}</span>
      </time>
    </div>

    <div class="work_videodetail_01_mydplayer" id="myDPlayer"></div>

    <div class="work_videodetail_01_other">
      
      <div class="work_videodetail_01_description" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('description') !== -1 && keys.description && resourceDetail[keys.description] != undefined">
        <span>{{CONFIG.display.description}}</span>
        <span>{{resourceDetail[keys.description] || (getStaticText('noDescription') ? getStaticText('noDescription') :'暂无描述信息')}}</span>
      </div>

      <div class="work_videodetail_01_videolists" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('videolists') !== -1 && keys.video && resourceDetail[keys.video] != undefined">
        <span>{{CONFIG.display.videolists}}</span>
        <ul class="work_videodetail_01_videolists_ul">
          <li class="work_videodetail_01_videolists_li" v-for="(item, index) in resourceDetail[keys.video]" :key="index">
            <span v-text="item.attachName"></span>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
import { Get, getFieldAdapter } from "@common";
import URL from "url";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: "work_videodetail_01",
  props: ["namespace", "modulename"],
  reused: true,
  data () {
    return {
      CONFIG: null,
      resourceDetail: {}, // 获取到的资源详情
      pubId: "", // ubId
      resourceId: "",
      keys: "",
    };
  },
  mounted () {
    this.pubId = URL.parse(document.URL, true).query.pubId;
    this.resourceId = URL.parse(document.URL, true).query.resourceId;
    const myDPlayerdp = new DPlayer({
      container: document.getElementById('myDPlayer'),
      screenshot: true,
      video: {
        /* pic: CONFIG.BASE_URL + 'dynamicFile/coverStrem.do?recordID=' + this.resourceId, // 视频封面 */
        url: CONFIG.BASE_URL + 'dynamicFile/stream.do?recordID=' + this.resourceId, // 视频地址
      },
    });
    
    this.CONFIG = PROJECT_CONFIG[this.namespace].work_videodetail.work_videodetail_02[this.modulename];
    this.keys = getFieldAdapter(this.CONFIG.getResourceDetail.sysAdapter, this.CONFIG.getResourceDetail.typeAdapter);
    /* console.log(this.keys); */
    this.getResourceDetail();
  },
  methods: {
     getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    },
    getResourceDetail () {
      let paramsObj = Object.assign({}, this.CONFIG.getResourceDetail.params);
      paramsObj.pubId = this.pubId;
      Get(CONFIG.BASE_URL + this.CONFIG.getResourceDetail.url, { params: paramsObj }).then((rep) => {
        if (rep.data.result === "1") {
          let datas = rep.data.data;
          if (datas) {
            this.resourceDetail = datas;
          }
        }
      });
    }
  }
}
</script>
<style>
.work_videodetail_01 {
  background-color: #ffffff;
  font-size: 14px;
  color: #424242;
  padding: 30px;
}

.work_videodetail_01_baseinfo {
  width: 50%;
  float: right;
  box-sizing: border-box;
  padding-left: 20px;
}

.work_videodetail_01_baseinfo_resName {
  font-size: 16px;
}

.work_videodetail_01_mydplayer {
  width: 50%;
  float: right;
  box-sizing: border-box;
}

.work_videodetail_01_other {
  clear: both;
  padding: 30px 20px;
}

.work_videodetail_01_description {
  margin-bottom: 10px;
}

.work_videodetail_01_videolists_ul {
  list-style-type: decimal-leading-zero;
  padding-left: 25px;
}

.work_videodetail_01_videolists_li {
  height: 36px;
  line-height: 36px;
}

.work_videodetail_01_baseinfo_created {
  text-align: left;
}
</style>
