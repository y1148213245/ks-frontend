/*
 * @Author: song
 * @Date: 2018-02-05 17:22:30
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-05-12 21:23:43
 * 活动资讯列表
 */

import component from "../activityInfoList.vue";

const name = component.name;  // 组件标签名

const title = "资讯列表组件";  // 组件title

const description = `活动资讯列表组件，
    分页（control-pagination）、资讯时间（control-time）可以通过传值的方式控制显示隐藏，默认值都为true，显示的资讯个数（max-num）也通过传值的方式控制`;  // 组件描述信息

const dev = {
  list_word: {
    list_word_02: {
      url: '../data/activity_infolist_02_data.json',
      staticText : {
        noDate: "暂无日期"
      },
      locationQuery:{
        keys:{
          colId:'colId'
        }
      },
    }
  }
};

const prod = {
  list_word: {
    list_word_01: {
      url:  'spc/cms/publish/list.do',
      params: {
        conditions: [{pub_col_id:'249'}],   // 华育资讯栏目id=249
				orderBy: 'pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc',  // 默认orderBy
				pageNo: "1",
				pageSize: "15",
				searchText: null
      },
      startNum: 0, // 从第几个开始 默认从第0条开始
      locationQuery:{
        keys:{
          colId:'colId'
        }
      },
      staticText : {
        noDate: "暂无日期"
      }
    }
  }
};

const platform = 'PC';
const pageType = ['channel'];
const resourceType = ['information'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
