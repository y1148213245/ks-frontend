<template>
    <div class="ui_list_pic_08_editor">
        <div class="ui_list_pic_08_editor_div" name="data_column_block">
            <div class="bianji mt42" >
                <h6 class="bianji_title f16">
                    <span class="ui_list_pic_08_editor_span1" v-if="show_more">编辑</span>
                    <span v-else-if="!show_more" class="bianji_ico fl f18 pl16 color_7e7">编辑</span>
                    <span class="more fr f12" v-if="!show_more">
                        <a href="(CONFIG && CONFIG.href)" class="color_727">MORE+</a>
                    </span>
                </h6>
                <div class="bianji_list">
                    <template v-for="entry in list">
                        <dl class="bianji_con">
                            <dt class="ui_list_pic_08_editor_dt">
                                <a href="javascript:void(0)" class="editor_imgBox" @click="toDetail(entry.id)">
                                    <img onload="DrawImage(this,98,98)" class="editor_img" :src="entry && entry.information_a_picSmall" alt="暂无封面"/>
                                </a>
                            </dt>
                            <dd  class="author f14">
                                <a class="ui_list_pic_08_editor_a" href="javascript:void(0)" @click="toDetail(entry.id)" v-html="entry && entry.information_SYS_TOPIC"></a>
                            </dd>
                            <dd class="zhaiyao scoped_text" v-text="entry && entry.information_a_abstract || '暂无简介'" :title="entry && entry.information_a_abstract"></dd>
                            <dd class="mail scoped_title" :title="entry && entry.information_a_collaborator || '暂无邮箱'">
                                邮箱：{{entry && entry.information_a_collaborator || "暂无邮箱"}}
                            </dd>
                        </dl>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Post,DrawImage} from "@common";
    import PROJECT_CONFIG from "projectConfig";
    export default {
        name: "ui_list_pic_08_editor",
        reused: true,
        props: ["namespace","show_more"],
        data: function () {
            return {
                list: [],
                CONFIG:null
            }
        },
        mounted: function () {
            this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].list_pic.picListEditor : PROJECT_CONFIG.list_pic.picListEditor;
            this.queryData();
        },
        methods: {
            queryData: function () {
                Post(this.CONFIG.url, this.CONFIG.params || {
                            conditions: "[{pub_col_id:'117'}]",
                            groupBy: "pub_resource_id",
                            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
                            pageNo: "1",
                            pageSize: "2",
                            searchText: ""
                        }).then((rep)=>{
                    this.list = rep.data.result;
                });
            },
            toDetail: function (pubId) {
                window.location.href = this.CONFIG.locationHref + pubId + '&currentType=editor#';
            }
        }
    }
</script>

<style>
    /*多行自动换行处理*/
    .scoped_text {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        /*width: 300px;*/
        height: 60px;
    }

    /*单行自动换行处理*/
    .scoped_title {
        display: inline-block;
        width: 100%;
        line-height: 25px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: left;
    }
    .editor_imgBox{
        position: relative;
        display: block!important;
        width: 178px!important;
        height:98px!important ;
        margin: 0!important;
        padding: 0!important;
        line-height: 98px!important;
    }
    .editor_img{
        position: absolute;
        top: 50%;
        left: 50%;
        display: inline-block;
        margin: 0!important;
        padding: 0!important;
        transform: translate(-50%,-50%);
        text-align: center;
        /*box-shadow: 0 0 2px black;*/
    }
</style>
