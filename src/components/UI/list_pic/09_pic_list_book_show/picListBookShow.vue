<template>
    <div class="ui_list_pic_09 ui_list_pic_09_skin">
        <ul class="ui_list_pic_09_ul">
            <li class="ui_list_pic_09_li" v-for="(book, index) in list" v-if="index >=(CONFIG.beginPicIndex?CONFIG.beginPicIndex:0) && index < (CONFIG.finishPicIndex?CONFIG.finishPicIndex:list.length)" :key="index">
                <div class="imgBox"><a :href="(CONFIG && CONFIG.bookDetail)+book.id">
                    <img class="jingpin_img" :src="book.pub_picSmall" onload="DrawImage(this,106,142)" alt="暂无封面"/></a>
                </div>
                <div class="jieshao">
                    <p class="title" :title="book.pub_resource_name">
                        <a :href="(CONFIG && CONFIG.bookDetail)+book.id">
                            <span class="authorName" v-text="book.pub_resource_name"></span>
                        </a>
                    </p>
                    <p class="author" :title="book.BOOK_SYS_AUTHORS">
                        <span class="authorName" v-text="book.BOOK_SYS_AUTHORS"></span></p>
                    <p class="xing">
                        <el-rate v-model="book.pub_star_num" :show-text="false" :max="5" disabled disabled-void-color="#c1c1c0"></el-rate>
                    </p>
                    <p class="reader">
                        <a target="_blank" href="javascript:void(0)" @click="shidu(book.pub_resource_id,0,book.pub_resource_name)" class="color_fff">免费试读</a>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { Post, DrawImage } from "@common";
import PROJECT_CONFIG from "projectConfig";
export default {
    name: "ui_list_pic_09_book_show",
    reused: true,
    props: ["namespace", "bookShow"],
    data: function () {
        return {
            CONFIG: null,
            list: []
        }
    },
    mounted: function () {
        this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].list_pic.picListBookShow : PROJECT_CONFIG.list_pic.picListBookShow;
        this.queryData();
    },
    methods: {
        queryData: function () {
            if (this.bookShow && this.bookShow instanceof Array && this.bookShow.length > 0) {
                this.list = this.bookShow;
            } else {
                Post(CONFIG.BASE_URL+this.CONFIG.url, this.CONFIG.params || {
                    conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
                    groupBy: "pub_resource_id",
                    orderBy: "pub_a_order asc pub_lastmodified desc id asc",
                    pageNo: "1",
                    pageSize: "15",
                    searchText: ""
                }).then((rep) => {
                    this.list = rep.data.result;
                });
            }
        },
        shidu: function (bookId, readType, bookName) {
            var url = this.CONFIG.READ_URL || CONFIG.READ_URL  + '?bookId=' + bookId + '&readType=' + readType + '&bookName=' + bookName + '&userName=&siteType=' + CONFIG.READ_CONFIG.siteType;
            window.open(url);
        }
    }
}
</script>

<style>
.ui_list_pic_09 {
  padding-top: 30px;
  clear: both;
}

.ui_list_pic_09 .ui_list_pic_09_li {
  float: left;
  text-align: center;
}

.ui_list_pic_09 .ui_list_pic_09_li .imgBox {
  position: relative;
  display: block;
  width: 155px;
  height: 142px;
  margin: 0;
  padding: 0;
  line-height: 142px;
}

.ui_list_pic_09 .ui_list_pic_09_li .jieshao {
  border-right-width: 1px;
  width: 106px;
  margin: 0 auto;
  padding: 0 24px 0 24px;
}

.ui_list_pic_09 .ui_list_pic_09_li .jieshao .title {
  padding-top: 10px;
}

.ui_list_pic_09 .ui_list_pic_09_li .jieshao .author {
  line-height: 25px;
  height: 25px;
}

.ui_list_pic_09 .ui_list_pic_09_li .jieshao .authorName {
  display: inline-block;
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ui_list_pic_09 .ui_list_pic_09_li .jieshao .xing {
  padding: 5px 0 10px 0px;
}

.ui_list_pic_09 .ui_list_pic_09_li .jieshao .reader {
  line-height: 35px;
  height: 35px;
  width: 72px;
  text-align: center;
  margin: 0 auto;
}
</style>
