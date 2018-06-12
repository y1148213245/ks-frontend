/*
 * @Author: song 
 * @Date: 2018-06-07 14:20:40 
 * @Last Modified by: song
 * @Last Modified time: 2018-06-07 18:37:13
 * 个人中心充值记录
 */
 <template>
  <div class="work_mobile_personalcenter_05">

    <div class="work_mobile_personalcenter_05_recharge">
      <div class="work_mobile_personalcenter_05_recharge_f">{{display.balance}}</div>
      <div class="work_mobile_personalcenter_05_recharge_s">{{member.virtualCoin ? (Number(member.virtualCoin).toFixed(2) + display.money) : ('0.00' + display.money) }}</div>
    </div>

    <div class="work_mobile_personalcenter_05_record">
      <div class="work_mobile_personalcenter_05_rechargerecord">
        <span>{{display.record}}</span>
      </div>
      <ul class="work_mobile_personalcenter_05_record_ul">
        <li v-if="recordLists && recordLists.length > 0" class="work_mobile_personalcenter_05_record_li" v-for="(item, index) in recordLists" :key="index">
          <div class="work_mobile_personalcenter_05_record_divf">
            <span class="work_mobile_personalcenter_05_record_out">{{+Number(item.price).toFixed(2) + display.money}}</span>
            <span class="work_mobile_personalcenter_05_record_money">{{display.moneyIcon + Number(item.money).toFixed(2)}}</span>
          </div>
          <div class="work_mobile_personalcenter_05_record_divs">
            <span class="work_mobile_personalcenter_05_record_date">{{item.date | formatDateHH}}</span>
            <span class="work_mobile_personalcenter_05_record_way">{{item.way}}</span>
          </div>
        </li>
        <li v-if="recordLists && recordLists.length == 0" class="work_mobile_personalcenter_05_record_empty">{{display.empty}}</li>
      </ul>
    </div>

  </div>
</template>
 
 <script>
import { mapGetters } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import PROJECT_CONFIG from 'projectConfig';

export default {
  name: 'work_mobile_personalcenter_05',
  props: ['namespace'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      recordLists: [{
        price: '6',
        money: '6',
        date: '1528353486937',
        way: '微信支付',
      }, {
        price: '16',
        money: '16',
        date: '1528353486940',
        way: '微信支付',
      }, {
        price: '80',
        money: '80',
        date: '1528353486137',
        way: '微信支付',
      },]
    };
  },

  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
  },

  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].work_mobile_personalcenter.work_mobile_personalcenter_05;
    this.display = this.CONFIG.display;
  },

  mounted () {
    this.$bus.$emit(this.CONFIG.emitEvent.contextEventName, this.display.navTitle);
  },

  methods: {}

}
</script>
 <style>
.work_mobile_personalcenter_05 {
  font-size: 0.35rem;
}
</style>
