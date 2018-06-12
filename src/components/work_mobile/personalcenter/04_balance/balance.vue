/*
 * @Author: song 
 * @Date: 2018-06-07 10:27:26 
 * @Last Modified by: song
 * @Last Modified time: 2018-06-07 16:58:39
 * 余额充值
 */
 <template>
  <div class="work_mobile_personalcenter_04" v-if="display">
    <div class="work_mobile_personalcenter_04_account">
      <span class="work_mobile_personalcenter_04_account_f">{{display.account}}</span>
      <span class="work_mobile_personalcenter_04_account_s">{{member.loginName}}</span>
    </div>
    <div class="work_mobile_personalcenter_04_balance">
      <span class="work_mobile_personalcenter_04_balance_f">{{display.balance}}</span>
      <span class="work_mobile_personalcenter_04_balance_s">{{member.virtualCoin ? Number(member.virtualCoin).toFixed(2) : '0.00'}}</span>
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
        <li class="work_mobile_personalcenter_04_rechargeLists_li" v-for="(item, index) in testList" :key="index" @click="goToWXPay(item)">
          <span> {{(item.price ? Number(item.price).toFixed(2) : '0.00') + display.money}}</span>
          <span> {{display.add + (item.add ? Number(item.add).toFixed(2) : '0.00') + display.money}} </span>
        </li>
      </ul>
    </div>
  </div>
</template>


 
 <script>
import { mapGetters } from 'vuex';
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
      testList: [{
        "price": "6", // 充多少
        "add": "0" // 赠多少
      },
      {
        "price": "12",
        "add": "1"
      },
      {
        "price": "30",
        "add": "5"
      },
      {
        "price": "50",
        "add": "10"
      }
      ]
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
  },

  mounted () {
    this.$bus.$emit(this.CONFIG.emitEvent.contextEventName, this.display.navTitle);
  },

  methods: {
    goToWXPay(item) {
      console.log(item);
    }
  }

}
</script>


 <style>
.work_mobile_personalcenter_04 {
  font-size: 0.35rem;
}
</style>
