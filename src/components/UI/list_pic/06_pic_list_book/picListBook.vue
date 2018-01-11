<template>
    <div class="ui_list_pic_06 sale_top mt30">
        <h6 class="sale_top_title f16" v-text="title"></h6>
        <div class="sale_top_list">
            <div class="data_column_block_picListBook" name="data_column_block">
                <dl class="sale_top_con cl" v-for="(entry,index) in list" v-if="index<(number || 4)" :key="index">
                    <dt class="fl">
                        <a :href="(CONFIG && CONFIG.href)+entry.id" class="hotsellrank_ofbook_list_imgBox">
                            <img class="hotsellrank_ofbook_list_img" :src="entry && entry.pub_picBig" onload="DrawImage(this,70,84)" alt="暂无封面"/>
                        </a>
                    </dt>
                    <dd class="jiaobiao" v-text="index+1" v-if="modulename === 'hotsalebank'"></dd>
                    <dd class="fl pl15">
                        <p class="title f14 ">
                            <a :href="(CONFIG && CONFIG.href)+entry.id" class="hot_sell_text" v-text="entry.pub_resource_name" :title="entry.pub_resource_name"></a>
                        </p>
                        <p class="hitcount pt15" v-if="modulename === 'hotsalebank'">点击量:{{entry.pub_read_num || 0}}</p>
                        <p class="price" :class="{pt10: modulename === 'historyrecord'}">价格:￥{{entry.prod_member_price?Number(entry.prod_member_price).toFixed(2):'0.00'}}</p>
                        <p class="shanchu fr" v-if="modulename === 'historyrecord'">
                            <a href="javascript:void(0)" @click="deleteOneHistory()">删除</a>
                        </p>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
import { Post, Get, DrawImage, CookieUtils } from "@common";
import PROJECT_CONFIG from "projectConfig";
import { mapGetters } from "vuex";
import * as interfaces from "@work/login/common/interfaces.js";

export default {
    name: "ui_list_pic_06_book_list",
    reused: true,
    props: ["namespace", "number", "modulename"],
    data () {
        return {
            list: [],
            CONFIG: null,
            title: '',
        }
    },
    computed: {
        ...mapGetters("login_02", {
            member: interfaces.GET_MEMBER
        }),
        ...mapGetters({
            bookInfo: 'bookDetail/bookDetailInfo',
        }),
    },
    mounted () {
        let moduleName = this.modulename;
        this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.picListBook[moduleName];
        this.title = this.CONFIG.title;
        // this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].list_pic.picListBook : PROJECT_CONFIG.list_pic.picListBook;
        this[moduleName]();  // 首页 —— 热销排行组件  &  图书详情页 —— 浏览历史组件
    },
    methods: {
        hotsalebank: function () {
            Post(this.CONFIG.url, this.CONFIG.params || {
                conditions: "[{pub_col_id:'131'},{pub_status:'1'}]",
                groupBy: "pub_resource_id",
                orderBy: "pub_read_num desc",
                pageNo: "1",
                pageSize: "4",
                searchText: ""
            }).then((rep) => {
                this.list = rep.data.result;
            });
        },
        historyrecord () {
            let param = Object.assign({}, this.CONFIG.params);
            param.username = 'song@163.com';
            this.gethistorylist(param);
        },
        addgethistorylist: function (loginName) {
            var url = this.CONFIG.url;
            let param = Object.assign({}, this.CONFIG.params);
            param.username = loginName;
            Get(BASE_URL + '/browserHistory/addBrowserHistory.do?pubId=' + this.query.pubId + '&loginName=' + loginName).then((repsonse) => {
                if (repsonse.data.result === '1') {
                    this.gethistorylist(param);
                }
            })
        },
        gethistorylist (param) {
            Get(this.CONFIG.url, { params: param }).then((rep) => {
                var data = rep.data.data;
                var hasData = rep.status === 200 && data && Object.prototype.toString.call(data) === "[object Array]" && data.length > 0 ? true : false;
                if (hasData) {
                    var dataList = []; // 历史记录返回的数据字段与模板上的不同 处理一下字段名称
                    var len = data.length;
                    for (var i = 0; i < len; i++) {
                        var temp = {
                            pub_picBig: data[i].bigPic, // 封面图
                            pub_read_num: data[i].pub_read_num, //点击量
                            prod_member_price: data[i].prod_member_price,  // 价格
                            pub_resource_name: data[i].resourceName, // 书名
                            id: data[i].pubId
                        };
                        dataList.push(temp);
                    }
                    this.list = dataList;
                } else {
                    this.list = [];
                }
            })
        },
        deleteOneHistory () {
            if (this.member.loginName) {
                Get(BASE_URL + 'browserHistory/deleteOneHistory.do?&loginName=' + 'song@163.com' + '&pubId=' + this.pubId + '&siteId=' + SITE_CONFIG.siteId).then((rep) => {
                    if (rep.data.result === "1") {
                        this.$message({
                            type: "success",
                            message: "删除成功!"
                        });
                        let param = Object.assign({}, this.CONFIG.params);
                        param.username = this.member.loginName;
                        this.gethistorylist(param);
                    } else {
                        this.$message({
                            type: "error",
                            message: "删除失败!"
                        });
                    }
                })
            } else {
                CookieUtils.delCookie("history");
                this.bookList = "";
            }

        }
    },
    watch: {
        /* member: function (newValue, oldValue) {
            if (newValue.loginName && newValue.loginName !== oldValue.loginName) { // 已经登录时 历史浏览记录从后台请求
                this.addgethistorylist(newValue.loginName);   // 您的历史记录
            }
        }, */
        bookInfo: function (newv, oldv) {
            if (this.modulename === 'historyrecord') {
                var loginName = this.member.loginName;
                if (!loginName) {    //未登录时 历史浏览记录存 cookie
                    var queryCookie = JSON.parse(CookieUtils.getCookie('history'));
                    //取 cookie
                    if (queryCookie == null) {
                        queryCookie = [];
                    }
                    //控制重复添加浏览历史数据
                    var flag = true;
                    for (var i = 0; i < queryCookie.length; i++) {
                        if (newv.pubId == queryCookie[i].id) {
                            flag = false;
                        }
                    }
                    var obj = {
                        BOOK_SYS_TOPIC: newv.resourceName,
                        BOOK_SYS_AUTHORS: newv.author,
                        prod_sale_price: newv.productPrice,
                        id: newv.pubId,
                        pub_content_type: newv.contentType,
                        pub_col_id: newv.colId,
                        pub_picBig: newv.bigPic
                    };
                    if (flag) {
                        queryCookie.unshift(obj);
                        //存 cookie
                    }
                    CookieUtils.setCookie("history", JSON.stringify(queryCookie), 1);
                    this.bookList = (JSON.parse(CookieUtils.getCookie('history')));
                }
            }
        }
    }
}
</script>
<style>
/*文字自动换行处理*/
.hot_sell_text {
  display: inline-block;
  width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.hotsellrank_ofbook_list_imgBox {
  position: relative;
  display: block !important;
  width: 63px !important;
  height: 84px !important;
  line-height: 84px !important;
}
.hotsellrank_ofbook_list_img {
  position: absolute;
  display: inline-block;
  top: 50%;
  transform: translateY(-50%);
}
</style>
