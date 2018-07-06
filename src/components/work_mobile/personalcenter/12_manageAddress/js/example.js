/*
 * @Author: song
 * @Date: 2018-06-07 15:26:18
 * @Last Modified by: yy
 * @Last Modified time: 2018-06-15 16:37:56
 * 个人中心管理收货地址
 */


import component from "../manageAddress.vue";

const name = component.name; // 组件标签名

const title = "管理收货地址"; // 组件title


const description = `个人中心管理收货地址组件`; // 组件描述信息


const dev = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_12: {
      display: {
        navTitle: '管理收货地址',
        setDefault: '设为默认',
        edit: '编辑',
        delete: '删除',
        addAddress: '添加新地址',
        sureToDeleteAddress: '确定要删除该地址吗',
        cancelDeleteAddress: '您已取消删除地址',
      },
      emitEvent: {//发广播的事件名称
        contextEventName: 'showContext'
      },
      addressInfo: {
        id: '',
        name: '',
        tel: '',
        province: '',
        city: '',
        county: '',
        address_detail: '',
        area_code: '',
        postal_code: '',
        is_default: false,
      },
      addressUrl: 'user/addresses.do',
      updateAddress: 'user/updateAddress.do?',
      addAddress: 'user/addAddress.do?',
      deleteAddress: 'user/deleteAddress.do',
      setDefaultAddress: 'user/setDefaultAddress.do',
    },
  }
}

const prod = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_12: {
      display: {
        navTitle: '管理收货地址',
        setDefault: '设为默认',
        edit: '编辑',
        delete: '删除',
        addAddress: '添加新地址',
        sureToDeleteAddress: '确定要删除该地址吗',
        cancelDeleteAddress: '您已取消删除地址',
      },
      emitEvent: {//发广播的事件名称
        contextEventName: 'showContext'
      },
      addressInfo: {
        id: '',
        name: '',
        tel: '',
        province: '',
        city: '',
        county: '',
        address_detail: '',
        area_code: '',
        postal_code: '',
        is_default: false,
      },
      addressUrl: 'user/addresses.do',
      updateAddress: 'user/updateAddress.do?',
      addAddress: 'user/addAddress.do?',
      deleteAddress: 'user/deleteAddress.do',
      setDefaultAddress: 'user/setDefaultAddress.do',
    },
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
