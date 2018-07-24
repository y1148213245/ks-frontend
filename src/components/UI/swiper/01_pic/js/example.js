/**
 * Created by codingnuts on 2017/12/12.
 */

import component from "../Pic_Swiper.vue";


const name = component.name;  // 组件标签名

const title = "轮播组件";  // 组件title

const description = `轮播图`;  // 组件描述信息

const dev = {
	swiper: {
		pic_01: {
			url: '/data/swiper_01_pic_list.json',
			height: "480px",
			interval: 5000,
			sysAdapter: "sykAdapter", // 系统字段
      typeAdapter: "newsAdapter", // 类型字段
      // showItem: ['button'], // 控制显示项 ！！！只需要控制复杂项的显示
      complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
        name: 'button', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
        field: 'resName', // 取什么字段
        display: '', // 固定显示内容是什么
        method: 'toDetail', // 方法名 要在下面配置
      }],
      toDetail: { // 去资讯详情页面
        url: "../pages/informationdetail.html",
        dataKeys: {
          pubId: "id", // id是从适配器里对应的
        },
        fixedKeys: {}
      },
      staticText: {
        noImg: "暂无图片",
        noDate: "暂无日期",
        yuan:"￥"
      }
		}
	}
}

const prod = {
	swiper: {
		pic_01: {
			height: "480px",
			interval: 5000,
			url:  'spc/cms/publish/list.do',
			params: {
				conditions: "[{'pub_col_id':'225'}]",
				orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
				pageNo: "1",
				pageSize: "15",
				searchText: null
			},
			sysAdapter: "sykAdapter", // 系统字段
      typeAdapter: "newsAdapter", // 类型字段
      showItem: ['button'], // 控制显示项 ！！！只需要控制复杂项的显示
      complicatedItem: [{ // 需要有固定显示内容的复杂项 && 单纯显示字段值的简单项
        name: 'button', // 名称 用来区分是简单项还是复杂项 （【新增的button包括了title在内】 button 自定义、 price 价格、 time 时间、 img 图片都属于复杂项，需要填写name的值）
        field: 'resName', // 取什么字段
        display: '', // 固定显示内容是什么
        method: 'toDetail', // 方法名 要在下面配置
      }],
      toDetail: { // 去资讯详情页面
        url: "../pages/informationdetail.html",
        dataKeys: {
          pubId: "id", // id是从适配器里对应的
        },
        fixedKeys: {}
      },
      staticText: {
        noImg: "暂无图片",
        noDate: "暂无日期",
        yuan: "￥"
      }
		}
	}
};

const platform = 'PC';
const pageType = ['index'];
const resourceType = ['book', 'information', 'journal', 'vedio'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
