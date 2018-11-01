/*
 * @Author: song
 * @Date: 2018-06-07 10:27:26
 * @Last Modified by: song
 * @Last Modified time: 2018-07-06 10:17:13
 * 余额充值
 * TODO: 公众号商户授权之后还需要联调支付接口 支付成功与失败的回调 提示信息
 */
 <template>
  <div class="work_mobile_personalcenter_04" v-if="display">
    <div class="work_mobile_personalcenter_04_account">
      <span class="work_mobile_personalcenter_04_account_f">{{display.account}}</span>
      <span class="work_mobile_personalcenter_04_account_s">{{member.loginName}}</span>
    </div>
    <div class="work_mobile_personalcenter_04_balance">
      <span class="work_mobile_personalcenter_04_balance_f">{{display.balance}}</span>
      <span class="work_mobile_personalcenter_04_balance_s">{{memberNew.virtualCoin ? Number(memberNew.virtualCoin).toFixed(2) : '0.00'}}</span>
      <span class="work_mobile_personalcenter_04_balance_m">{{display.money}}</span>
    </div>
    <div class="work_mobile_personalcenter_04_choose">
      <span class="work_mobile_personalcenter_04_chooseway">{{display.chooseAmount}}</span>
    </div>
    <div class="work_mobile_personalcenter_04_pay">
      <i class="work_mobile_personalcenter_04_pay_icon fa fa-weixin"></i>
      <span class="work_mobile_personalcenter_04_payway">{{display.payWeixin}}</span>
    </div>
    <div class="work_mobile_personalcenter_04_rechargeLists">
      <ul class="work_mobile_personalcenter_04_rechargeLists_ul">
        <li class="work_mobile_personalcenter_04_rechargeLists_li" :class="{active:currentIndex == index}" v-for="(item, index) in chargeLists" :key="index" @click="goToWXPay(item,index)">
          <span> {{(item.price ? Number(item.price).toFixed(2) : '0.00') + display.money}}</span>
          <span> {{display.add + (item.add ? Number(item.add).toFixed(2) : '0.00') + display.money}} </span>
        </li>
      </ul>
    </div>
  </div>
</template>



 <script>
import { mapGetters } from 'vuex';
import { Get, Post } from "@common";
import { Toast } from "vant";
import * as interfaces from "@work/login/common/interfaces.js";
import PROJECT_CONFIG from 'projectConfig';

export default {
  name: 'work_mobile_personalcenter_04',
  props: ['namespace'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      display: "", //组件静态文本
      chargeLists: [],
      currentIndex: -1,
      memberNew: {}  //存放接口返回来的数据，主要用于更新余额
    };
  },
  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
  },

  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].work_mobile_personalcenter.work_mobile_personalcenter_04;
    this.display = this.CONFIG.display;
    this.getChargeLists(); // 获取充值规则列表
  },

  mounted () {
    this.$bus.$emit(this.CONFIG.emitEvent.contextEventName, this.display.navTitle);
  },

  methods: {
    initData (loginName) {
      this.getMember(loginName);
    },
    getChargeLists () { // 获取充值规则列表
      Get(CONFIG.BASE_URL + this.CONFIG.getChargeLists.url).then((resp) => {
        let datas = resp.data;
        if (datas.result == '1') { // 获取成功
          this.chargeLists = datas.data ? JSON.parse(datas.data) : [];
        }
      })
    },
    goToWXPay (item, index) { // 去微信支付
      if (!this.member.loginName) { // 未登录情况下不得支付
        Toast.fail({
          duration: 1000,
          message: this.display.login
        });// 请您先登录
        return false
      }
      this.currentIndex = index;
      let rechargeConfig = this.CONFIG.goToCharge;
      let paramsObj = Object.assign({}, rechargeConfig.params);
      paramsObj.price = item.price;
      paramsObj.loginName = this.member.loginName;
      paramsObj.siteId = CONFIG.SITE_CONFIG.siteId;
      Get(CONFIG.BASE_URL + rechargeConfig.url, { 'params': paramsObj }).then((resp) => {
        let datas = resp.data;
        if (datas.result == '1') { // 请求成功
          if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
              document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false);
            } else if (document.attachEvent) {
              document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady);
              document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady);
            }
          } else {
            this.onBridgeReady(datas.data ? JSON.parse(datas.data) : []);
          }
        }
      })
    },
    onBridgeReady (data) {
      // 在微信浏览器里面打开H5网页中执行JS调起支付  WeixinJSBridge内置对象在其他浏览器中无效 【授权】
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          "appId": data.appId,     //公众号名称，由商户传入
          "timeStamp": data.timeStamp,         //时间戳，自1970年以来的秒数
          "nonceStr": data.nonceStr, //随机串
          "package": data.package,
          "signType": data.signType,         //微信签名方式：
          "paySign": data.paySign //微信签名
        },
        function (res) {
          console.log(res)
          if (res.err_msg == "get_brand_wcpay_request:ok") {

          }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
        }
      );
    },
    //因为返回来的token中的数据不是实时的，所以在调一次用户数据接口
    getMember(loginName){
      Get(CONFIG.BASE_URL + this.CONFIG.getMember.url + '?loginName=' + (loginName ? loginName : this.member.loginName) ).then((resp) => {
        let res = resp.data;
        if (res.result == '1' && res.data) {
          this.memberNew = res.data;
        } else {
          Toast.fail({
            duration: 1000,
            message: res.error.msg
          });
        }
      })
    }
  },
   watch: {
    member: function (newValue, oldValue) {
      if (newValue.loginName && newValue.loginName != oldValue.loginName) {
        this.initData(newValue.loginName);
      }
    }
  }

}
</script>


 <style>
.active {
  border: 1px solid #f00;
}
.work_mobile_personalcenter_04 {
  font-size: 0.35rem;
}
</style>
