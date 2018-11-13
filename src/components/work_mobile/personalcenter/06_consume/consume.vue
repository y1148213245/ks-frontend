/*
 * @Author: song 
 * @Date: 2018-06-07 15:24:58 
 * @Last Modified by: song
 * @Last Modified time: 2018-06-13 16:26:19
 * 个人中心消费记录 即我的订单
 * TODO: 下拉的时候没有loading提示；下拉到了最底部没有提示“没有数据了”
 */

 <template>
  <div class="work_mobile_personalcenter_06">
    <div class="work_mobile_personalcenter_06_consume">
      <span>{{display.record}}</span>
    </div>
    <div class="work_mobile_personalcenter_06_consumelists">
      <ul class="work_mobile_personalcenter_06_consumelists_ul">
        <li v-if="consumeLists && consumeLists.length > 0" class="work_mobile_personalcenter_06_rconsumelists_li" v-for="(item, index) in consumeLists" :key="index">
          <ul class="work_mobile_personalcenter_06_consumelists_li_ul">
            <li class="work_mobile_personalcenter_06_consumelists_li_li" v-for="(subItem, subIndex) in item.orderList" :key="subIndex">
              <ul class="work_mobile_personalcenter_06_consumelists_li_li_ul">
                <li class="work_mobile_personalcenter_06_consumelists_li_li_li" v-for="(order, ind) in  subItem.itemList" :key="ind">
                  <div class="work_mobile_personalcenter_06_consumelists_divf">
                    <span class="work_mobile_personalcenter_06_consumelists_bookname"> {{order.productName}} </span>
                    <!-- 是否是循环的最后一个oder 避免保留两位小数 导致总价格有点对不上 -->
                    <span  class="work_mobile_personalcenter_06_consumelists_money"> 
                      -{{(Number(item.realAmount) * 
                      (Number(order.productPrice) * Number(order.productNum)) /
                      (Number(item.realAmount)+Number(item.balanceAmount))).toFixed(2) 
                       + display.money}}
                    </span>
                  </div>
                  <div class="work_mobile_personalcenter_06_consumelists_divd">
                    <span class="work_mobile_personalcenter_06_consumelists_date"> {{subItem.createTime}} </span>
                    <span class="work_mobile_personalcenter_06_consumelists_way" v-if="subItem.payMethod == 'Weixin'">{{display.wxpay || '微信支付'}}</span>
                    <span class="work_mobile_personalcenter_06_consumelists_way" v-else-if="subItem.payMethod == 'Balance'">{{display.balancepay || '余额支付'}}</span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li v-if="consumeLists && consumeLists.length == 0" class="work_mobile_personalcenter_06_consume_empty">{{display.empty}}</li>
      </ul>
    </div>

  </div>
</template>
 
 <script>
import { Get, mobileLoading } from "@common";
import { mapGetters } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import PROJECT_CONFIG from 'projectConfig';

export default {
  name: 'work_mobile_personalcenter_06',
  props: ['namespace'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      display: '', // 组件静态文本
      consumeLists: [],
      totalCount: '0', // 订单总个数
      totalPages: '0', // 订单总页数
      pageIndex: "1",  // 页码 从 1 开始
      pageSize: "15",  // 每页显示个数
    };
  },

  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
  },

  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].work_mobile_personalcenter.work_mobile_personalcenter_06;
    this.ORDERCONFIG = this.CONFIG.getMyOrder;
    this.display = this.CONFIG.display;
  },

  mounted () {
    this.$bus.$emit(this.CONFIG.emitEvent.contextEventName, this.CONFIG.display.navTitle);
    /*检测滚动条*/
    $(window).scroll(() => {
      /**
       * function 下拉底部加载
       * params1: vue对象
       * params2: 回调方法
       */
      mobileLoading(this, 'queryMyOrder');
    });
  },

  methods: {
    initData (loginName) { // 初始化数据
      this.pageSize = this.ORDERCONFIG.params.pageSize;
      this.pageIndex = this.ORDERCONFIG.params.pageIndex;
      this.queryMyOrder(loginName); // 获取我的订单
    },
    queryMyOrder (loginName) {
      let params = Object.assign({}, this.ORDERCONFIG.params);
      Get(CONFIG.BASE_URL + this.ORDERCONFIG.url + '?loginName=' + (loginName ? loginName : this.member.loginName) + '&pageIndex=' + this.pageIndex + '&pageSize=' + this.pageSize + '&siteId=' + CONFIG.SITE_CONFIG.siteId + '&payStatus=' + params.payStatus + '&status=' + params.status).then((resp) => {
        let res = resp.data;
        if (res.result == '1' && res.data.length > 0) {
          this.consumeLists = this.consumeLists.concat(res.data);
          this.totalCount = res.totalCount;
          this.totalPages = res.totalPages;
        }
      })
    }
  },
  watch: {
    member: function (newValue, oldValue) {
      if (newValue.loginName && newValue.loginName != oldValue.loginName) {
        this.initData(newValue.loginName); // 初始化数据之后再执行查询订单的方法
      }
    }
  }

}
</script>
 <style>
.work_mobile_personalcenter_06 {
  font-size: 0.35rem;
  padding: 0.5rem;
}

.work_mobile_personalcenter_06_consumelists_li_li_li {
  border-bottom: 0.008rem solid #ccc;
}
</style>
