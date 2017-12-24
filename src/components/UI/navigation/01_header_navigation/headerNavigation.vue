<template>
    <div class="ui_navigation_01_header_navigation">
        <nav class="mainmenu clearfix">
            <div class="col-md-4 nopadding" v-for="(navigationWord,index) in navigationTitleWordList">
                <template v-if="navigationWord.type && navigationWord.type =='shopLink'">
                    <label class="navigation_label">
                        <a class="a_header_navigation" :href="navigationWord.href" target="_blank">{{navigationWord.name}}</a>
                    </label>
                    <ul class="sf-js-enabled" style="touch-action: pan-y;">
                        <li class="li_header_navigation" v-for="(navShop,index) in navigationWord.childHref"><a :href="navShop.href">{{navShop.name}}</a></li>
                    </ul>
                </template>
                <template  v-else>
                    <label class="navigation_label">
                        {{navigationWord.name}}
                    </label>
                    <ul class="sf-js-enabled" style="touch-action: pan-y;">
                        <li  v-for="nav in navList" v-if="nav.columnType == navigationWord.columnType" class="li_header_navigation"><a class="a1_header_navigation" :href="nav.template">{{nav.name}}</a></li>
                    </ul>
                </template>
            </div>
        </nav>
    </div>
</template>

<script type="text/ecmascript-6">
    import PROJECT_CONFIG from "projectConfig";
    import {Post} from "@common";
    export default {
        name: "ui_navigation_01_header_navigation",
        reused: true,
        props: ["namespace"],
        data (){
        return {
            CONFIG: null,
            navList: [],
            navigationTitleWordList:[]
        }
    },
    mounted:function(){
        this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].navigation.headerNavigation_01 : PROJECT_CONFIG.navigation.headerNavigation_01;
        this.navigationTitleWordList = this.CONFIG.navigationTitleWordList?this.CONFIG.navigationTitleWordList:[];
        this.initNavigation();
    },
    methods:{
        initNavigation:function(){
            Post(this.CONFIG.url).then((rep) => {
                this.navList = rep.data.data;
            });
        }
    }
    }
</script>
<style>
</style>
