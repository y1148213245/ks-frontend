<template>
    <div class="ui_list_pic_06 sale_top">
        <h6 class="sale_top_title f16">热销排行</h6>
        <div class="sale_top_list">
            <div class="data_column_block_picListBook" name="data_column_block">
                <dl class="sale_top_con cl" v-for="(entry,index) in list" v-if="index<(number || 4)">
                    <dt class="fl">
                        <a :href="(CONFIG && CONFIG.href)+entry.id" class="hotsellrank_ofbook_list_imgBox">
                            <img class="hotsellrank_ofbook_list_img" :src="entry && entry.pub_picBig" onload="DrawImage(this,63,84)" alt="暂无封面"/>
                        </a>
                    </dt>
                    <dd class="jiaobiao" v-text="index+1"></dd>
                    <dd class="fl pl15">
                        <p class="title f14 ">
                            <a :href="(CONFIG && CONFIG.href)+entry.id" class="hot_sell_text" v-text="entry.pub_resource_name" :title="entry.pub_resource_name"></a>
                        </p>
                        <p class="hitcount pt15">点击量:{{entry.pub_read_num || 0}}</p>
                        <p class="price">价格:￥{{entry.prod_member_price?Number(entry.prod_member_price).toFixed(2):'0.00'}}</p>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
    import {Post,DrawImage} from "@common";
    import PROJECT_CONFIG from "projectConfig";
    export default {
        name:"ui_list_pic_06_book_list",
        reused: true,
        props: ["namespace","number"],
        data ()
    {
        return {
            list: [],
            CONFIG:null,
        }
    },
    mounted() {
        this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].list_pic.picListBook : PROJECT_CONFIG.list_pic.picListBook;
        this.queryData();
    },
    methods:{
        queryData:function(){
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
        }
     }
    }
</script>
<style>
    /*文字自动换行处理*/
    .hot_sell_text{
        display: inline-block;
        width: 80px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .hotsellrank_ofbook_list_imgBox {
        position: relative;
        display: block!important;
        width: 63px!important;
        height:84px!important ;
        line-height: 84px!important;
    }
    .hotsellrank_ofbook_list_img{
        position: absolute;
        display: inline-block;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
