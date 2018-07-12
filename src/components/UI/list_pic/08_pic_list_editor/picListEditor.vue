<template>
    <div class="ui_list_pic_08 ui_list_pic_08_skin">
        <div class="editorListWrapper" name="data_column_block">
            <h6 class="editorCon" :class="{onlyEditorCon: !show_more}">
                <span class="editor" v-if="show_more">{{getStaticText('edit') ? getStaticText('edit') : '编辑'}}</span>
                <span class="onlyEditor" v-else-if="!show_more">{{getStaticText('edit') ? getStaticText('edit') : '编辑'}}</span>
                <span class="moreEditor" v-if="show_more">
                  <a :href="(CONFIG && CONFIG.href)">MORE+</a>
                </span>
            </h6>
            <div class="editorList">
                <template v-for="(entry, index) in list">
                    <dl class="editorDl" :key="index">
                        <dt class="editorDt">
                            <a href="javascript:void(0)" class="editor_imgBox" @click="toDetail(entry.id)">
                                <img onload="DrawImage(this,98,98)" class="editor_img" :src="entry && entry.information_a_picSmall" :alt="getStaticText('noCover') ? getStaticText('noCover') : '暂无封面'"/>
                            </a>
                        </dt>
                        <dd class="editorDd">
                            <a class="ui_list_pic_08_editor_a" href="javascript:void(0)" @click="toDetail(entry.id)" v-html="entry && entry.information_SYS_TOPIC"></a>
                        </dd>
                        <dd class="zhaiyao scoped_text" v-text="entry && entry.information_a_abstract || (getStaticText('noIntroduction') ? getStaticText('noIntroduction') : '暂无简介')" :title="entry && entry.information_a_abstract"></dd>
                        <dd class="mail scoped_title" :title="entry && entry.information_a_collaborator || (getStaticText('noEmail') ? getStaticText('noEmail') : '暂无邮箱')">
                            {{getStaticText('email') ? getStaticText('email') : '邮箱：'}}{{entry && entry.information_a_collaborator || (getStaticText('noEmail') ? getStaticText('noEmail') : '暂无邮箱')}}
                        </dd>
                    </dl>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { Post, DrawImage } from "@common";
import PROJECT_CONFIG from "projectConfig";
export default {
  name: "ui_list_pic_08_editor",
  reused: true,
  props: ["namespace", "show_more"],
  data: function () {
    return {
      list: [],
      CONFIG: null
    }
  },
  mounted: function () {
    this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].list_pic.picListEditor : PROJECT_CONFIG.list_pic.picListEditor;
    this.queryData();
  },
  methods: {
    queryData: function () {
      Post(CONFIG.BASE_URL+this.CONFIG.url, this.CONFIG.params || {
        conditions: "[{pub_col_id:'117'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "2",
        searchText: ""
      }).then((rep) => {
        this.list = rep.data.result;
      });
    },
    toDetail: function (pubId) {
      window.location.href = this.CONFIG.locationHref + pubId + '&currentType=editor#';
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    }
  }
}
</script>

<style>
/* start 结构样式 */
.ui_list_pic_08 .editorListWrapper {
  margin-top: 53px;
}

.ui_list_pic_08 .editorCon {
  height: 29px;
  line-height: 29px;
  width: 222px;
  border-top-width: 2px;
  text-align: left;
}

.ui_list_pic_08 .editorCon .editor {
  height: 24px;
  line-height: 23px;
  padding: 0 0 0 30px;
  margin: 3px 0 0;
  float: left;
}

.ui_list_pic_08 .editorCon .moreEditor {
  float: right;
}

.ui_list_pic_08 .onlyEditorCon {
  height: 29px;
  line-height: 29px;
  width: 222px;
  text-align: center;
}

.ui_list_pic_08 .editorList {
  text-align: center;
  border-width: 2px;
  border-top: none;
  width: 218px;
}

.ui_list_pic_08 .editorDl {
  border-bottom: 1px dotted #33373e;
  padding: 20px;
  overflow: hidden;
}

.ui_list_pic_08 .editorDt {
  padding: 0 0 15px 0px;
}

.ui_list_pic_08 .editorDt .editor_imgBox {
  position: relative;
  display: block;
  width: 178px;
  height: 98px;
  margin: 0;
  padding: 0;
  line-height: 98px;
}

.ui_list_pic_08 .editorDt .editor_img {
  border-radius: 50%;
  width: 98px;
  height: 98px;
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  margin: 0;
  padding: 0;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.ui_list_pic_08 .editorDd {
  padding-bottom: 10px;
}

.ui_list_pic_08 .editorDd a {
  padding: 0 7px;
}

.ui_list_pic_08 .editorDl .zhaiyao {
  line-height: 21px;
  text-align: left;
}

.ui_list_pic_08 .editorDl .mail {
  text-align: left;
  padding-top: 10px;
}

.ui_list_pic_08 .editorDl .scoped_text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  height: 60px;
}

.ui_list_pic_08 .editorDl .scoped_title {
  display: inline-block;
  width: 100%;
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
}
/* end 结构样式 */

/* start 皮肤样式 */
.ui_list_pic_08_skin .editorListWrapper {
  background-color: #ffffff;
}

.ui_list_pic_08_skin .editorCon {
  border-top-style: solid;
  border-top-color: #da0b2d;
  color: #7e7e7e;
  font-weight: normal;
  font-size: 16px;
}

.ui_list_pic_08_skin .editorCon .editor {
  background: url(/assets/img/bg_001.png) no-repeat 4px -156px;
  font-size: 18px;
  color: #7e7e7e;
}

.ui_list_pic_08_skin .editorCon .moreEditor {
  font-size: 12px;
}

.ui_list_pic_08_skin .onlyEditorCon {
  font-weight: normal;
  font-size: 16px;
  background: #c50000;
}

.ui_list_pic_08_skin .onlyEditorCon .onlyEditor {
  color: #ffffff;
}

.ui_list_pic_08_skin .editorCon .moreEditor a {
  color: #727272;
  text-decoration: none;
}

.ui_list_pic_08_skin .editorList {
  border-style: solid;
  border-color: #f8f8f8;
}

.ui_list_pic_08_skin .editorDl {
  border-bottom-style: dotted;
  border-bottom-color: #33373e;
}

.ui_list_pic_08_skin .editorDt .editor_imgBox {
  outline: none;
  color: #888888;
  text-decoration: none;
}

.ui_list_pic_08_skin .editorDd {
  color: #2c3138;
  background: url(/assets/img/bg_002.png) repeat-x center 40%;
  font-size: 14px;
}

.ui_list_pic_08_skin .editorDd a {
  color: #2c3138;
  background: #fff;
  text-decoration: none;
}

.ui_list_pic_08_skin .editorDl .zhaiyao {
  color: #7a7a7a;
}

.ui_list_pic_08_skin .editorDl .mail {
  color: #2c3138;
}
/* end 皮肤样式 */
</style>
