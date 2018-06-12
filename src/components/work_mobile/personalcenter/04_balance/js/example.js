/*    */
import component from "../balance.vue";

const name = component.name; // 组件标签名

const title = "余额充值组件"; // 组件title

const description = `额充值组件`; // 组件描述信息

const dev = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_04: {
      display: { // 组件静态文本
        navTitle: "充值",
        account: '充值账户：',
        balance: '账户余额：',
        chooseAmount: '请选择充值金额',
        payWeixin: '微信支付',
        money: '元',
        add: '赠'
      },
      emitEvent: { // 发广播事件名称
        contextEventName: 'showContext'
      },
    }
  }
}

const prod = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_04: {
      display: { // 组件静态文本
        navTitle: "充值",
        account: '充值账户：',
        balance: '账户余额：',
        chooseAmount: '请选择充值金额',
        payWeixin: '微信支付',
        money: '元',
        add: '赠'
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
