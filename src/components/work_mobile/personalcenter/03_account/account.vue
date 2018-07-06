/*
 * @Author: song
 * @Date: 2018-06-05 17:38:28
 * @Last Modified by: song
 * @Last Modified time: 2018-07-06 11:04:52
 * 个人资料
 */
 <template>
  <div class="work_mobile_personalcenter_03" v-loading="loading">

    <!-- 个人资料 -->
    <div class="work_mobile_personalcenter_03_info" v-if="showItem == 'default'">
      <van-cell-group class="work_mobile_personalcenter_03_cellgroup" v-if="getMember">
        <van-cell class="work_mobile_personalcenter_03_cell" :class="'work_mobile_personalcenter_03_' + nav.tag" v-for="(nav, index) in showLists" :key="index" :title="nav.title" :is-link="nav.hasLink" @click="enterEditModule(nav)">
          <!-- 头像在微信端不可更改，未设置头像用户显示默认头像，用第三方账号登录直接显示第三方账号头像 -->
          <div class="work_mobile_personalcenter_03_picturecon" v-if="nav.tag == 'picture'">
            <img v-if="JSON.stringify(getMember) != '{}' && getMember[nav.tag]" :src="getMember[nav.tag]" :alt="display.noPic || '暂无头像'" />
            <img v-if="JSON.stringify(getMember) != '{}' && !getMember[nav.tag]" :src="require('@static/img/people.jpg')" :alt="display.noPic || '暂无头像'" />
          </div>
          <div class="work_mobile_personalcenter_03_other" v-else>
            <span> {{getMember[nav.tag] || display.noData || '暂无数据'}} </span>
          </div>
        </van-cell>
      </van-cell-group>
    </div>
    <!-- END 个人资料 -->

    <!-- 修改昵称 -->
    <div class="work_mobile_personalcenter_03_editname" v-if="showItem == 'nickName'">
      <div class="work_mobile_personalcenter_03_editname_nickname">{{display.nickName || '昵称'}}</div>
      <div class="work_mobile_personalcenter_03_editname_con">
        <form action="">
          <input class="work_mobile_personalcenter_03_editname_name" type="text" v-model="getMember.nickName" maxlength="10">
        </form>
        <i class="el-icon-close" @click="removeName()" v-if="getMember.nickName"></i>
        <!-- 文本框有内容时显示清除按钮 -->
      </div>
      <div v-if="!getMember.nickName" class="work_mobile_personalcenter_03_nonn">{{CONFIG.display.noNickname}}</div>
      <div class="work_mobile_personalcenter_03_savenn">
        <van-button size="normal" @click="editUserInfo('nickName')">{{display.save || '保存'}}</van-button>
      </div>

    </div>
    <!-- END 修改昵称 -->

    <!-- 修改签名 -->
    <div class="work_mobile_personalcenter_03_editintro" v-if="showItem == 'introduction'">
      <div class="work_mobile_personalcenter_03_editintro_intro">{{display.introduction || '签名'}}</div>
      <div class="work_mobile_personalcenter_03_editintro_con">
        <textarea class="work_mobile_personalcenter_03_editintro_textarea" :maxlength="display.maxNum" v-model="getMember.introduction"></textarea>
        <span class="work_mobile_personalcenter_03_editintro_textarea_count">{{getMember.introduction.length}}/{{display.maxNum}}</span>
      </div>
      <div v-if="!getMember.introduction" class="work_mobile_personalcenter_03_nointro">{{CONFIG.display.noIntroduction}}</div>
      <div class="work_mobile_personalcenter_03_saveintro">
        <van-button size="normal" @click="editUserInfo('introduction')">{{display.save || '保存'}}</van-button>
      </div>
    </div>
    <!-- END 修改签名 -->

  </div>
</template>

 <script>
import Vue from "vue";
import { Get, Post } from "@common";
import { mapGetters } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import PROJECT_CONFIG from 'projectConfig';
import { Button, Toast } from 'vant';

Vue.use(Button);

export default {
  name: 'work_mobile_personalcenter_03',
  props: ['namespace'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      showLists: [],
      display: {}, //组件静态文本
      showItem: "default",
      getMember: {}, // 个人信息
      // noNickname: false, // 昵称为空
      // noIntroduction: false, //签名为空
      // remainNum: '',  //剩余的可输入字数
      loading: true,
    };
  },
  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
  },
  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].work_mobile_personalcenter.work_mobile_personalcenter_03;
    this.display = this.CONFIG.display;
    this.showLists = this.CONFIG.showLists;
  },

  mounted () {
    this.$bus.$emit(this.CONFIG.emitEvent.contextEventName, this.CONFIG.display.navTitle);
    var _this = this;
    $(document).ready(function () {
      if (window.history && window.history.pushState) {
        $(window).on('popstate', function () { // 监听浏览器页面回退
          if (_this.showItem !== 'default') { // 在修改昵称或者修改签名页面回退
            _this.$bus.$emit(_this.CONFIG.emitEvent.contextEventName, _this.CONFIG.display.navTitle);
            _this.showItem = 'default';
          } else { // 在个人资料页面回退
            window.history.go(-1);
            return false;
          }
          history.pushState(null, null, document.URL); // 点击回退时向历史记录插入一条 以便阻止下一次点击回退
          window.history.forward(1); // forward 加载历史记录列表中的下一个URL
        });
      }
      /* 页面载入时使用 pushState 插入一条历史记录 原因：onpopstate事件只能监听pushState插入的历史记录 超链接<a>或者location.href跳转不受控制
       * history.pushState(state, title, url)
       * state 可以是字符串 也可以是一个JS对象 该参数设置的值在可以在响应onpopstate事件时event对象上获取
       * title 设置历史记录中的标题
       * url   历史记录中的URL地址
       */
      window.history.pushState(null, null, document.URL);
      window.history.forward(1);
    });
  },

  methods: {
    /* descInput(){
        this.remainNum = this.display.maxNum - this.getMember.introduction.length;
    }, */
    getMemberInfo (loginName) {
      Get(CONFIG.BASE_URL + this.CONFIG.getMemberInfo.url + '?loginName=' + loginName).then((resp) => {
        let res = resp.data;
        if (res.result == '1' && res.data) {
          this.getMember = res.data;
          // this.noNickname = this.getMember.nickName ? false : true; // 是否有昵称
          // this.noIntroduction = this.getMember.introduction ? false : true; // 是否有签名
          // this.descInput();
        }
        this.loading = false;
      })
    },
    enterEditModule (item) {
      if (item.tag == 'picture' || item.tag == 'loginName') {
        return false;
      }
      this.$bus.$emit(this.CONFIG.emitEvent.contextEventName, this.CONFIG.display['nav' + item.tag]); // 发广播修改导航文字内容
      this.showItem = item.tag;
    },
    removeName () {
      this.getMember.nickName = '';
    },
    editUserInfo (item) {  // 保存昵称和个性签名的修改
      // TODO: 后端修改Post请求的接参数方式后优化合并以下代码
      if (item == 'introduction') { // 更改个性签名
        if (this.getMember.introduction == '') { // 昵称为空时不能保存
          // this.noIntroduction = true;
          return false;
        } else {
          // this.noIntroduction = false;
          Post(CONFIG.BASE_URL + this.CONFIG.editPersonalInfo.url + '?loginName=' + this.getMember.loginName + '&introduction=' + this.getMember.introduction).then((resp) => {
            let res = resp.data;
            if (res.result == '1') {
              let msg = res.data.msg;
              Toast.success({
                duration: 1000,
                message: msg
              });
            } else {
              Toast.fail({
                duration: 1000,
                message: this.display.failedOp
              });
            }
          })
        }
      }
      else if (item == 'nickName') { // 更改昵称
        if (this.getMember.nickName == '') { // 昵称为空时不能保存
          // this.noNickname = true;
          return false;
        } else {
          /*let paramsObj = Object.assign({}, this.CONFIG.editPersonalInfo.params);
           paramsObj.loginName = this.member.loginName;
          paramsObj[item] = item == 'nickName' ? this.nickName : this.introduction; */
          // this.noNickname = false;
          Post(CONFIG.BASE_URL + this.CONFIG.editPersonalInfo.url + '?loginName=' + this.getMember.loginName + '&userNick=' + this.getMember.nickName).then((resp) => {
            let res = resp.data;
            if (res.result == '1') {
              let msg = res.data.msg;
              Toast.success({
                duration: 1000,
                message: msg
              });
            } else {
              Toast.fail({
                duration: 1000,
                message: this.display.failedOp
              });
            }
          })
        }
      }
    }
  },
  watch: {
    member: function (newValue, oldValue) {
      if (newValue.loginName && newValue.loginName !== oldValue.loginName) {
        this.getMemberInfo(newValue.loginName); // 根据用户名获取用户信息
        this.getMember.nickName = this.getMember.nickName ? this.getMember.nickName : newValue.loginName;  //首次修改昵称，输入框内显示用户名
      }
    }
  }
}
</script>
<style>
.work_mobile_personalcenter_03 {
  font-size: 0.35rem;
}

.work_mobile_personalcenter_03 .van-cell:not(:last-child)::after {
  left: 0px;
}

.work_mobile_personalcenter_03_other {
  text-align: left;
}

.work_mobile_personalcenter_03_editname {
  padding: 0.5rem;
}

.work_mobile_personalcenter_03_editname_name {
  width: 100%;
  height: 0.8rem;
  border: 0.01rem solid #ccc;
  border-radius: 0.15rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  margin: 0.3rem 0;
}

.work_mobile_personalcenter_03_editname_con {
  position: relative;
}

.work_mobile_personalcenter_03_editname_con .el-icon-close {
  position: absolute;
  right: 0.2rem;
  top: 0.52rem;
}
.work_mobile_personalcenter_01_picture {
  height: 2rem;
  line-height: 2rem;
}

.work_mobile_personalcenter_03_picturecon {
  width: 1.8rem;
  height: 1.8rem;
  float: right;
  border-radius: 50%;
  overflow: hidden;
}

.work_mobile_personalcenter_03_picturecon img {
  width: 100%;
  height: 100%;
}

.work_mobile_personalcenter_03_cellgroup
  .work_mobile_personalcenter_03_cell:nth-child(3) {
  margin-top: 0.3rem;
}

.work_mobile_personalcenter_03_nonn {
  height: 0.8rem;
  color: red;
}
.work_mobile_personalcenter_03_nointro {
  height: 0.8rem;
  color: red;
}

.work_mobile_personalcenter_03_savenn {
  text-align: center;
}

.work_mobile_personalcenter_03_editintro {
  padding: 0.5rem;
}

.work_mobile_personalcenter_03_editintro_textarea {
  border-radius: 0.15rem;
  width: 100%;
  height: 2.5rem;
  padding: 0.3rem;
  box-sizing: border-box;
  resize: none;
  margin: 0.3rem 0;
}
</style>
