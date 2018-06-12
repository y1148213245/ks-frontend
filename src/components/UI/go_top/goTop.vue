<template>
  <div class="ui_go_top">
    <section class="vqrcode">
      <div class="icon-qrcode">
        <div class="qrcode">
          <div class="col-md-6"><img src="./assets/img/qrcode-wchat.jpg" alt="微信二维码"><span>微信扫一扫关注我们的公众号</span></div>
          <div class="col-md-6"><img src="./assets/img/qcode-tmall.jpg" alt="天猫旗舰店二维码"><span>淘宝扫一扫关注官方旗舰店</span></div>
        </div>
      </div>
      <div class="icon-angle-up" @click="toTop()"></div>
    </section>
  </div>
</template>
<script>
  import {Post} from "@common"
  import PROJECT_CONFIG from "projectConfig";
  import $ from "jquery";
    export default {
        name: "ui_go_top",
        reused:true,
        mounted:function(){
          var obj = this;
          window.addEventListener("scroll",obj.scrollEvent);
          },
        methods:{
          toTop:function(){
            $('body,html').animate({scrollTop: 0}, 500);
          },
          scrollEvent:function(){
            var obj = this.$el;
              if( document.documentElement.scrollTop > 450 ) {
                $(obj).fadeIn();
              } else {
                $(obj).fadeOut();
              }
          }
        }
    }
</script>

<style>
  .ui_go_top{
    height: 81px;
    display: none;
    z-index: 299;
    position: fixed;
    top: auto;
    left: auto;
    right: 30px;
    bottom: 50px;
  }
  body:not(.device-touch) .ui_go_top .icon-angle-up, body:not(.device-touch) .ui_go_top .icon-qrcode{
    -webkit-transition: background-color .2s linear;
  }
  .ui_go_top .icon-qrcode{
    margin-bottom: 1px;
    position: relative;
  }
  .ui_go_top .icon-angle-up, .ui_go_top .icon-qrcode{
    display: block;
    width: 40px;
    height: 40px;
    background-color: #333;
    background-color: rgba(0,0,0,0.3);
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    color: #FFF;
    cursor: pointer;
    border-radius: 0px;
  }
  .ui_go_top .icon-qrcode .qrcode{
    position: absolute;
    right: 30px;
    bottom: 30px;
    border: 1px solid #e3e3e3;
    padding: 10px 0px;
    box-shadow: 0px 13px 42px 11px rgba(0, 0, 0, 0.2);
    width: 400px;
    height: 200px;
    background: #fff;
    font-size: 12px;
    color: #333;
    line-height: 12px;
    display: none;
  }
  img{
    max-width: 100%;
    vertical-align: middle;
    border: 0;
  }
  .icon-qrcode:before{
    content: "\e6e2";
  }
  .icon-angle-up:before{
    content: "\e7a6";
  }
  .ui_go_top .icon-qrcode:hover .qrcode{display: block}
  .stretched .ui_go_top { bottom: 30px; }

  .ui_go_top .icon-angle-up:hover,.ui_go_top .icon-qrcode:hover { background-color: #AE0F29; }
</style>
