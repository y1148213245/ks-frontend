<template>
        <nav class="mainmenu clearfix primary-menu-navigation ui_navigation_01_header_navigation">
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
                        <li  v-for="nav in navList" v-if="nav.parentId == navigationWord.id" class="li_header_navigation"><a class="a1_header_navigation" :href="nav.url">{{nav.name}}</a></li>
                    </ul>
                </template>
            </div>
        </nav>
</template>

<script type="text/ecmascript-6">
    import PROJECT_CONFIG from "projectConfig";
    import {Get} from "@common";
    export default {
        name: "ui_navigation_01_header_navigation",
        reused: true,
        props: ["namespace"],
        data (){
        return {
            CONFIG: null,

            navList: [],
            navigationTitleWordList:[],
            showItemFromColId:[],
        }
    },
    mounted:function(){
        this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].navigation.headerNavigation_01 : PROJECT_CONFIG.navigation.headerNavigation_01;
        this.navigationTitleWordList = this.CONFIG.navigationTitleWordList?this.CONFIG.navigationTitleWordList:[];
        this.showItemFromColId = this.CONFIG.showItemFromColId;
        this.initNavigation();
    },
    methods:{
        initNavigation:function(){
            Get(CONFIG.BASE_URL+this.CONFIG.url).then((rep) => {
                
                let shows = this.showItemFromColId;
                let datas = rep.data.data
                for (let index = 0; index < shows.length; index++) {
                    const showId = shows[index];
                    for (let index2 = 0; index2 < datas.length; index2++) {
                        const col = datas[index2];
                        if(showId == col.id){
                            this.navList.push(col);
                        }
                    }
                }
            });
        },
    }
    }
</script>
<style>
  /*********************头部导航部分*************/
  .ui_navigation_01_header_navigation{
    padding-top: 20px;
  }
  .primary-menu-navigation div.col-md-4{margin: 4px 0px 8px;line-height: 16px}
  .primary-menu-navigation div label{font-size: 18px;font-weight: bold;margin-right: 8px;letter-spacing: 3px;}
  .primary-menu-navigation div ul{display: inline-block;margin: 0px;padding: 0;}
  .primary-menu-navigation div ul>li{list-style: none;display: inline-block;}
  .primary-menu-navigation div ul>li.sub-menu{position: relative}
  .primary-menu-navigation div ul>li a{color: #7f7f7f;padding: 0px 10px 0px 8px;border-right: 1px solid #ACACAC;}
  .primary-menu-navigation div ul>li a:hover{color:#AE0F29 }
  .primary-menu-navigation div ul>li.menu-active a{color:#AE0F29;cursor: default}
  .primary-menu-navigation div ul>li:last-child a{border-right: 0px}
  .primary-menu-navigation div.nav-special label a{padding: 0px 10px 0px 8px;border-left: 1px solid #ACACAC;}
  .primary-menu-navigation div.nav-special label a:first-child{border-left:none;padding-left: 0px}
  .primary-menu-navigation ul ul{
    display: none;
    position: absolute;
    width: 120px;
    background-color: #FFF;
    box-shadow: 0px 13px 42px 11px rgba(0, 0, 0, 0.05);
    border-top: 0px solid #AE0F29;
    height: auto;
    z-index: 199;
    top:20px;
    left: 0;
    margin: 0;
  }
  .primary-menu-navigation ul ul li, .side-catergory ul>li{
    list-style: none;
    float: none;
    margin: 0;
    display: block;
    border-top: 1px solid #F8F8F8;
  }
  .primary-menu-navigation ul ul li:first-child { border-top: 0; }
  .primary-menu-navigation ul ul li > a,.side-catergory ul>li a {
    font-size: 13px;
    font-weight: normal;
    color: #666;
    display: block;
    padding-top: 8px;
    padding-bottom: 8px;
    border: 0;
    letter-spacing: 0;
    font-family: 'Lato', sans-serif;
    -webkit-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  }
  .primary-menu-navigation ul ul li > a i { vertical-align: middle; }
  .primary-menu-navigation ul ul li:hover > a{
    background-color: #F9F9F9;
    padding-left: 18px;
    color: #AE0F29;
  }
  .primary-menu-navigation div label a{
    color: #AE0F29;
  }
</style>
