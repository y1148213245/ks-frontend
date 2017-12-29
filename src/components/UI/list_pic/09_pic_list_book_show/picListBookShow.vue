<template>
    <div class="index_jpts_list cl ui_list_pic_09_book_show">
        <ul class="ui_list_pic_09_book_show_ul">
            <li class="ui_list_pic_09_book_show_li" v-for="(book, index) in list" v-if="index >=(CONFIG.beginPicIndex?CONFIG.beginPicIndex:0) && index < (CONFIG.finishPicIndex?CONFIG.finishPicIndex:list.length)">
                <div class="jingpin_list_imgBox"><a :href="(CONFIG && CONFIG.bookDetail)+book.id">
                    <img class="jingpin_img" :src="book.pub_picSmall" onload="DrawImage(this,106,142)" alt="暂无封面"/></a>
                </div>
                <div class="jieshao">
                    <p class="title" :title="book.pub_resource_name">
                        <a class="ui_list_pic_09_book_show_a" :href="(CONFIG && CONFIG.bookDetail)+book.id">
                            <span class="jingpin_text" v-text="book.pub_resource_name"></span>
                        </a>
                    </p>
                    <p class="author" :title="book.BOOK_SYS_AUTHORS">
                        <span class="jingpin_text" v-text="book.BOOK_SYS_AUTHORS"></span></p>
                    <p class="xing starStyle">
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
    import {Post,DrawImage} from "@common";
    import PROJECT_CONFIG from "projectConfig";
    export default {
        name:"ui_list_pic_09_book_show",
        reused: true,
        props: ["namespace"],
        data: function () {
            return {
                CONFIG:null,
                list: []
            }
        },
        mounted:function(){
            this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].list_pic.picListBookShow : PROJECT_CONFIG.list_pic.picListBookShow;
            this.queryData();
        },
        methods:{
            queryData:function(){
                Post(this.CONFIG.url, this.CONFIG.params || {
                            conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
                            groupBy: "pub_resource_id",
                            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
                            pageNo: "1",
                            pageSize: "15",
                            searchText: ""
                        }).then((rep)=>{
                    this.list = rep.data.result;
                });
            },
            shidu: function (bookId, readType, bookName) {
                var url = this.CONFIG.href  + bookId + '&readType=' + readType + '&bookName=' + bookName;
                window.open(url);
            }
        }
    }
</script>

<style>
</style>
