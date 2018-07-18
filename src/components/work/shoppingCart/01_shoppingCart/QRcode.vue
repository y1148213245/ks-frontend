// 扫描二维码支付组件
<template>
  <div class="container qrcode">
    <div id="qrcode"></div>
    <div style="margin-top: 16px;">{{getStaticText('payWithWeChatScan') ? getStaticText('payWithWeChatScan') : '请使用微信扫一扫支付'}}</div>
  </div>
</template>
<script>
  import axios from 'axios';
  import URL from 'url';
  import PROJECT_CONFIG from "projectConfig";


  export default {
    name: "work_shoppingcart_01_qrcode",
    reused: true,
    props: {
      namespace: { // 生成二维码命名空间 需要多语言时才配置
        type: String,
        default: null
      },
    },
    data() {
      return {
        orderCode: '',
        CONFIG:null
      }
    },
    created(){
      this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].shoppingCart.shoppingCart_01.qrCode : null; // 兼容处理
    },
    mounted() {
      let href = window.location.href;
      let url = href.substring(href.indexOf('?data=') + 6, href.indexOf('&orderCode'));
      this.drawQRcode(url);
      let params = URL.parse(window.location.href || '', true).query
      this.orderCode = params.orderCode;
    },
    methods: {
      drawQRcode(url) {
        var _this = this;
        //参数1表示图像大小，取值范围1-10；参数2表示质量，取值范围'L','M','Q','H'
        /* document.getElementById("qrcode").style.display = "back"; */
        var qr = qrcode(10, 'M');
        qr.addData(url);
        qr.make();
        var dom = document.createElement('DIV');
        dom.innerHTML = qr.createImgTag();
        var element = document.getElementById("qrcode");
        element.appendChild(dom);
        //不断请求后台查询交易状态，如果已经支付直接跳转
        setInterval(function () {
          _this.queryOrder();
        }, 3000);
      },
      queryOrder() {
        axios.get(CONFIG.BASE_URL + '/order/getParentOrder.do?orderCode=' + this.orderCode).then(function (response) {
          var data = response.data.data;
          if (data && data.payStatus && data.payStatus === '1') {  // 支付成功跳转生成订单页面 支付失败继续请求
            window.location.href = "../pages/commitorder.html#/commitOrder/" + data.orderCode + "/" + data.payStatus + '/order';
          }
        })
      },
      getStaticText(text){
        if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]){
          return this.CONFIG.staticText[text]
        }else {
          return false
        }
      }
    }
  }
</script>
<style>
  .qrcode {
    padding: 100px;
    text-align: center;
  }
</style>
