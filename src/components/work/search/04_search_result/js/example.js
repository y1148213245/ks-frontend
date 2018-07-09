/*
 * @Author: yan.chaoming
 * @Date: 2018-01-04 16:44:27
 * @Last Modified by: song
 * @Last Modified time: 2018-03-12 14:18:06
 * @Last Modified by: zong mobileLoading
 * @Last Modified time: 2018-06-24
 * @Last Modified by: song
 * @Last Modified time: 2018-07-09 15:56:40
 * 搜索结果列表
 */

import component from "../searchResult.vue";


const name = component.name; // 组件标签名

const title = "搜索结果列表组件"; // 组件title

const description = `搜索结果列表 isMobileLoading 是否下拉加载默认不需要`; // 组件描述信息

const dev = {
  search: {
    search_result_04: {
      staticText: {
        total: "共",
        productQuanity: "件商品",
        noCover: "暂无封面",
        author: "作者：",
        copyright: "版权：",
        publish: "出版",
        yuan: "￥",
        commentQuanity: "条评论",
        noDigest: "暂无摘要",
        shareTo: "分享",
        buy: "购买",
        checkInfo: "查看",
        noDate: "暂无日期"
      }
    }
  }
};

const prod = {
  search: {
    search_result_04: {
      url: 'spc/cms/publish/list.do',
      param: {
        conditions: "[{pub_site_id:'2'},{pub_status:'1'}]",
        groupBy: 'pub_resource_id',
        orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
        pageNo: '1',
        pageSize: '15',
        searchText: ''
      },
      pageSizes: [10, 20, 50, 100],
      eventName_loadDate: 'loadSearchResult',
      detailHref: './bookdetail.html?pubId=',
      isMobileLoading: false,
      staticText: {
        total: "共",
        productQuanity: "件商品",
        noCover: "暂无封面",
        author: "作者：",
        copyright: "版权：",
        publish: "出版",
        yuan: "￥",
        commentQuanity: "条评论",
        noDigest: "暂无摘要",
        shareTo: "分享",
        buy: "购买",
        checkInfo: "查看",
        noDate: "暂无日期",
        isbn: "ISBN："
      },
      isShowIsbn: false
    }
  }
};

const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
const childComponents = ['work_search_04', 'ui_share_01'];

export {
  name,
  title,
  dev,
  prod,
  description,
  platform,
  pageType,
  resourceType,
  childComponents
};
