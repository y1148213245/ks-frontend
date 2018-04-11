<template>
    <div class="col-md-4 norightpadding hotsale components_index_bestsale">
        <div class="tabs tabs-bb clearfix ui-tabs ui-widget ui-widget-content ui-corner-all">
            <ul class="tab-nav clearfix ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
                <li class="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="tabs-35" aria-labelledby="ui-id-19" aria-selected="false" aria-expanded="false">
                    <a class="product-desc-bestsale-word">热 销</a>
                </li>
            </ul>
            <div class="tab-container">
                <div class="product iproduct clearfix">
                    <div class="product-image">
                        <a class="index_hot_imgBox"><img class="index_hot_img" :src="recommendList && recommendList[10] && recommendList[10].bookUrl" onload="DrawImage(this,140,140)" alt="暂无封面"></a>
                    </div>
                    <div class="product-desc center">
                        <div class="product-title">
                            <h4 class="product-desc-h4">
                                <a class="product-desc-bestsale-word-a" :href="(CONFIG && CONFIG.picLinkUrl)+(recommendList && recommendList[10] && recommendList[10].pubId)+'&contentType='+(recommendList && recommendList[10] && recommendList[10].contentType)+'&columnId='+(CONFIG && CONFIG.columnId)">
                                    {{recommendList && recommendList[10] && recommendList[10].bookName}}
                                </a>
                            </h4>
                        </div>
                        <div class="product-author">
                            作者：{{recommendList && recommendList[10] && recommendList[10].bookAuthor}}
                        </div>
                        <div class="product-price">
                            <label class="product-author-label">定价：</label>
                            ¥ {{recommendList && recommendList[10] && recommendList[10].bookPrice}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PROJECT_CONFIG from "projectConfig";
    import {Post} from "@common";
    export default {
        name: "components_index_bestsale",
        reused: true,
        data ()
    {
        return {
            CONFIG:null,
            recommendList: []
        }
    },
    props:['namespace'],
    mounted() {
        this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].indexBestSale : PROJECT_CONFIG.indexBestSale;
        this.queryData();
    },
    methods:{
        queryData:function(){
            Post(CONFIG.BASE_URL+this.CONFIG.url, this.CONFIG.params || {
                        conditions: "[{pub_resource_type:'BOOK'}]",
                        orderBy: null,
                        pageNo: "1",
                        pageSize: "15",
                        searchText: null
                    }).then((rep) => {
                var datas = rep.data.result;
                var loadDatas = [];
                for (var i = 0; i < datas.length; i++) {
                    var entry = {
                        bookName: datas[i].pub_resource_name || '暂无书名',
                        bookPrice: datas[i].BOOK_PRICE || '暂无价格',
                        bookAuthor: datas[i].BOOK_SYS_AUTHORS || '暂无作者',
                        pubId: datas[i].id || 0,
                        contentType: datas[i].pub_content_type || 0,
                        bookUrl: datas[i].pub_picBig || ""
                    };
                    loadDatas.push(entry);
                };
                this.recommendList = loadDatas;
            });
        }
    }
    }
</script>

<style>
</style>
