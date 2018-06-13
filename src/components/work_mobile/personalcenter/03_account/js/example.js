/*
 * @Author: song 
 * @Date: 2018-06-06 16:16:12 
 * @Last Modified by: song
 * @Last Modified time: 2018-06-13 16:28:04
 * 个人资料
 */
/*    */
import component from "../account.vue";

const name = component.name; // 组件标签名

const title = "个人资料"; // 组件title

const description = `个人中心的个人资料`; // 组件描述信息

const dev = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_03: {
      emitEvent: { // 发广播事件名称
        contextEventName: 'showContext'
      },
      showLists: [{
        title: "头像",
        tag: "picture",
        hasLink: false,
      }, {
        title: "账号",
        tag: "loginName",
        hasLink: false,
      }, {
        title: "昵称",
        tag: "nickName",
        hasLink: true,
      }, {
        title: "签名",
        tag: "introduction",
        hasLink: true,
      }],
      display: {
        navTitle: "个人资料",
        navnickName: '修改昵称',
        navintroduction: '修改签名',
        noNickname: '昵称不能为空',
        nickName: '昵称',
        introduction: '签名',
        save: '保存',
        noData: '暂无数据',
        noPic: '暂无头像',
        failedOp: '操作失败'
      },
      editPersonalInfo: { // 编辑个人信息：昵称 签名
        url: "user/editMemberByName.do",
        params: {
          loginName: ''
        }
      },
      getMemberInfo: {
        url: "user/getMemberByName.do", // 根据用户名获取用户信息
        params: {
          loginName: ""
        }
      }
    },
  }
}

const prod = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_03: {
      emitEvent: { // 发广播事件名称
        contextEventName: 'showContext'
      },
      showLists: [{
        title: "头像",
        tag: "picture",
        hasLink: false,
      }, {
        title: "账号",
        tag: "loginName",
        hasLink: false,
      }, {
        title: "昵称",
        tag: "nickName",
        hasLink: true,
      }, {
        title: "签名",
        tag: "introduction",
        hasLink: true,
      }],
      display: {
        navTitle: "个人资料",
        navnickName: '修改昵称',
        navintroduction: '修改签名',
        noNickname: '昵称不能为空',
        nickName: '昵称',
        introduction: '签名',
        save: '保存',
        noData: '暂无数据',
        noPic: '暂无头像',
        failedOp: '操作失败'
      },
      editPersonalInfo: { // 编辑个人信息：昵称 签名
        url: "user/editMemberByName.do",
        params: {
          loginName: ''
        }
      },
      getMemberInfo: {
        url: "user/getMemberByName.do", // 根据用户名获取用户信息
        params: {
          loginName: ""
        }
      }
    },
  }
}

const platform = 'PC';
const pageType = [];
const resourceType = [];

export {
  name,
  title,
  dev,
  prod,
  description,
  platform,
  pageType,
  resourceType
};
