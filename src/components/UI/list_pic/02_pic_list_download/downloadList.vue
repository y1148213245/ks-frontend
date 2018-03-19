<!-- 书目下载组件 -->
<template>
    <div class="ui_listPic_01 category-new col-md-8 noleftpadding kejianbox kejian-newlist">
      <template v-for="item in bookcatalogList">
        <article class="entry clearfix">
          <div class="entry-image">
            <img class="image_fade" src="./assets/kejian-thumb.jpg" alt="暂无图片">
            <label>{{item.fileType}}</label>
          </div>
          <div class="entry-title">
            <h3>{{item && item.listcenter || ''}}</h3>
            <h5>文件名：{{item && item.listName || ''}}</h5>
          </div>
          <a :href="item.listUrl" target="_blank" class="button button-border button-border-thin button-red">
            <i class="icon-download"></i>下 载
          </a>
        </article>
      </template>

      <ui_pagination :pageMessage="{totalCount: this.bookcatalogList &&  this.bookcatalogList.length - 0 || 0}" :excuteFunction="paging" namespace="pagination"></ui_pagination>
    </div>
</template>

<script type="text/ecmascript-6">
import { Post } from "@common";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: "ui_list_pic_02",
  reused: true,
  props: ["namespace"],
  data () {
    return {
      bookcatalogList: [],
      totalCount: '0',
    }
  },
  mounted () {
    this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].list_pic.pic_list_download_02 : PROJECT_CONFIG.bookcatalog.list_pic.pic_list_download_02;
    this.queryBookcatalogList();
  },
  methods: {
    queryBookcatalogList (param) {  // 数目下载列表查询
      let paramsObj = Object.assign({}, this.CONFIG.params);
      if (param) {
        paramsObj.pageNo = param.pageNo;
        paramsObj.pageSize = param.pageSize;
      }
      Post(this.CONFIG.url, paramsObj).then((rep) => {
        var data = rep.data.result;
        if (data && data instanceof Array && data.length > 0) {
          var datas = rep.data.result;
          var loadDatas = [];
          for (var i = 0; i < datas.length; i++) {
            var list = {
              center: datas[i].information_SYS_TOPIC,
              bookName: datas[i].pub_widget_content,
              content: datas[i].pub_widget_url,
            };
            if (list.bookName) {
              for (var j = 0; j < list.bookName.length; j++) {
                var downloadList = {
                  listcenter: list.center,
                  listName: list.bookName[j] || '暂无文件名',
                  listUrl: list.content[j] || '暂无地址',
                  fileType: list.bookName[j].replace(/.+\./, "")
                };
                loadDatas.push(downloadList)
              }
            }
          }
          this.bookcatalogList = loadDatas;  // 数目下载列表
          /*this.totalCount = rep.data.totalCount;  // 总条数*/
        }
      })
    },
    paging: function ({ pageNo, pageSize }) {
      var param = {
        pageNo: pageNo,
        pageSize: pageSize,
      };
      this.queryBookcatalogList(param);
    },
  },
};
</script>

<style>
/*书目下载组件 结构样式*/
ui_listPic_01 a {
  text-decoration: none !important;
}

ui_listPic_01 h3 {
  font-size: 18px;
}

ui_listPic_01 h1,
ui_listPic_01 h2,
ui_listPic_01 h3,
ui_listPic_01 h4,
ui_listPic_01 h5,
ui_listPic_01 h6 {
  color: #4a4a4a;
  font-weight: 600;
  line-height: 1.5;
  margin: 0 0 8px 0;
}

.category-new {
  margin: 12px 0px;
}

.noleftpadding {
  padding-left: 0 !important;
}

.kejian-newlist article.entry {
  height: auto;
  padding: 18px 0px;
}

.kejian-newlist .entry .entry-image {
  width: 200px;
  float: left;
  margin-right: 12px;
  position: relative;
}

.image_fade {
  max-width: 100%;
}

.kejianbox .entry .entry-image label {
  position: absolute;
  font-size: 11px;
  left: 6px;
  bottom: 2px;
  display: inline-block;
  font-weight: normal;
  padding: 2px 6px;
}

.category-new article h5,
.category-new article h6 {
  margin-bottom: 10px;
}

.button {
  display: inline-block;
  position: relative;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  padding: 0 22px;
  height: 40px;
  line-height: 40px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.kejian-newlist .entry .button {
  height: 30px;
  padding: 0px 12px;
  font-size: 12px;
  line-height: 30px;
}

.button.button-border {
  line-height: 36px;
  font-weight: 600;
  text-shadow: none;
}

.button.button-border-thin {
  border-width: 1px;
  line-height: 38px;
}

.category-new article h5,
.category-new article h6 {
  margin-bottom: 10px;
}

.button i {
  position: relative;
  top: 1px;
  line-height: 1;
  margin-right: 5px;
  width: 16px;
  text-align: center;
}
</style>
