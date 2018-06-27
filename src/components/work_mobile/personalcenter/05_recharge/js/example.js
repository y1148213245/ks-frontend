/*
 * @Author: song 
 * @Date: 2018-06-07 14:19:07 
 * @Last Modified by: song
 * @Last Modified time: 2018-06-26 17:59:11
 */

import component from "../recharge.vue";

const name = component.name; // 组件标签名

const title = "充值记录"; // 组件title

const description = `个人中心充值记录组件`; // 组件描述信息

const dev = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_05: {
      display: { // 组件静态文本
        navTitle: '充值记录',
        balance: '账户余额',
        record: '充值记录',
        money: '元',
        moneyIcon: '￥',
        empty: '暂无充值记录'
      },
      getRechargeLog: { // 获取充值记录
        url: 'user/getRechargeInfo.do',
        params: {
          loginName: '',
          pageIndex: '1',
          pageSize: '15'
        }
      },
      emitEvent: { // 发广播事件名称
        contextEventName: 'showContext'
      },
    }
  }
}

const prod = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_05: {
      display: { // 组件静态文本
        navTitle: '充值记录',
        balance: '账户余额',
        record: '充值记录',
        money: '元',
        moneyIcon: '￥',
        empty: '暂无充值记录'
      },
      getRechargeLog: { // 获取充值记录
        url: 'user/getRechargeInfo.do',
        params: {
          loginName: '',
          pageIndex: '1',
          pageSize: '15'
        }
      },
      emitEvent: { // 发广播事件名称
        contextEventName: 'showContext'
      },
    }
  }
}

const platform = 'mobile';
const pageType = ['others'];
const resourceType = ['others'];

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
