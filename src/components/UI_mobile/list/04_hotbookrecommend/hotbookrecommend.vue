<template>

  <div class="ui_mobile_list_04">
    <!--热门推荐-->
    <div class="ui_mobile_list_04_search_hot_column">
      <div class="ui_mobile_list_04_title">
        <i class="ui_mobile_list_04_search_hot_column_1"></i>
        热门推荐
        <i class="ui_mobile_list_04_search_hot_column_2"></i>
      </div>
    </div>
    <div class="ui_mobile_list_04_search_hot">
      <div class="ui_mobile_list_04_hotBookWrapper" v-if="getHotBookList && getHotBookList.length>0">
        <div class="ui_mobile_list_04_hotBook" v-for="(item, index) in getHotBookList"
             @click="toDetail(item)">
          <span class="ui_mobile_list_04_bookName" v-text="item[keys.Bookname]"></span>
          <span class="ui_mobile_list_04_author" v-text="item[keys.author]"></span>
        </div>
      </div>
      <div class="ui_mobile_list_04_noHotBookWrapper" v-else>
        <div class="ui_mobile_list_04_noHotBook">抱歉， 暂无推荐内容~</div>
      </div>
    </div>
    <!--热门推荐 END-->

  </div>

</template>

<script>

import { Post } from "@common";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: "ui_mobile_list_04",
  props: ['namespace'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      getHotBookList: [],//热门推荐列表
      keys: {},
    };
  },
  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].hotbookrecommend.hotbookrecommend_01;
    this.keys = this.CONFIG.keys;
    this.queryClassificationList();
  },

  methods: {
    toDetail (item) {
      let toDetailType = this.CONFIG.toDetailType;
      if (toDetailType.type == 'phone') {
        // let params = '';
        // for (let index = 0; index < toDetailType.phone.values.length; index++) {
        //   const element = toDetailType.phone.values[index];
        //   params += item[element] + ',';
        // }
        // params = params.substring(0, params.length - 1)
        // eval(toDetailType.phone.functionName + '(' + params + ')')
        sendMsg("{\"bookid\":\"" + item.id + "\"}");
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
    queryClassificationList () {
      Post(this.CONFIG.url, this.CONFIG.params).then(rep => {
        var datas = rep.data.result;
        if (datas && datas instanceof Array && datas.length > 0) {
          this.getHotBookList = datas.slice(0, this.CONFIG.maxNumber);
        }
      });
    }
  },
}
</script>

<style>
.ui_mobile_list_04 {
  padding: 0.4rem 0 0.35rem 0;
}

.ui_mobile_list_04_search_hot_column {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-weight: 500;
  margin-bottom: 0.3rem;
  font-family: "Microsoft Yahei";
}

.ui_mobile_list_04_title {
  color: #5c5c5c;
  font-size: 0.26rem;
  display: block;
}

.ui_mobile_list_04_search_hot_column_1 {
  width: 8px;
  height: 0.32rem;
  background: url(/assets/img/bg_ico.png) no-repeat -2.24rem -4.24rem;
  display: inline-block;
  vertical-align: middle;
  background-size: 5rem 5rem;
  margin-right: 0.2rem;
  font-style: normal;
  color: #5c5c5c;
  font-size: 0.26rem;
}

.ui_mobile_list_04_search_hot_column_2 {
  width: 0.3rem;
  height: 0.3rem;
  background: url(/assets/img/bg_ico.png) no-repeat -2.82rem -4.73rem;
  display: inline-block;
  vertical-align: middle;
  background-size: 5rem 5rem;
  margin-left: 0.15rem;
  font-style: normal;
  color: #5c5c5c;
  font-size: 0.26rem;
}

.ui_mobile_list_04_hotBookWrapper {
  padding: 0 20px;
  display: block;
  font-family: "Microsoft Yahei";
}

.ui_mobile_list_04_hotBook {
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #7a7a7a;
  color: #5c5c5c;
  font-size: 0.26rem;
}

.ui_mobile_list_04_bookName {
  float: left;
  width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: none;
}

.ui_mobile_list_04_author {
  float: right;
  text-align: right;
  width: 30%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: none;
}

.ui_mobile_list_04_noHotBookWrapper {
}

.ui_mobile_list_04_noHotBook {
  font-size: 0.26rem;
  text-align: center;
}
</style>

