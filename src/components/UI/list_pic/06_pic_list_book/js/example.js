/**
 * Created by ma.jw on 2017/12/15.
 * 热销排行
 */

import component from "../picListBook.vue";


const name = component.name;

const title = "热销排行组件";

const description = `热销排行`;

const dev = {
  list_pic: {
    picListBook: {
      hotsalebank: {
        title: '热销排行',
        url: "/data/ui_list_pic_06.json",
        href: "177",
        staticText: {
          hits: "点击量：",
          price: "价格：￥",
          noCover: "暂无封面",
          deleteSuccess: "删除成功！",
          deleteFailed: "删除失败！"
        }
      },
      historyrecord: {
        title: '浏览历史',
        href: "177",
        getBookDetail: {
          url: 'book/getBookDetail.do',
          params: {
            pubId: "",
            loginName: ""
          }
        },
        staticText: {
          hits: "点击量：",
          price: "价格：￥",
          noCover: "暂无封面",
          deleteSuccess: "删除成功！",
          deleteFailed: "删除失败！"
        },
        deleteAll:true
      },
      directUrl: { // 购物车列表有很多类型的商品 类型不同可能跳转不同的详情页面 根据类型配置 默认跳转bookdetail.html
        '91': './bookdetail.html', // 纸质书
        '94': './bookdetail.html', // 电子书
        '149': './journaldetail.html', // 电子期刊
        '177': './seriesdetail.html' // 丛书
      }
    }
  }
};

const prod = {
  list_pic: {
    picListBook: {
      hotsalebank: {
        title: '热销排行',
        url: "spc/cms/publish/list.do",
        params: {
          conditions: "[{pub_col_id:'131'},{pub_status:'1'}]",
          groupBy: "pub_resource_id",
          orderBy: "pub_read_num desc",
          pageNo: "1",
          pageSize: "4",
          searchText: ""
        },
        href: "177",
        staticText: {
          hits: "点击量：",
          price: "价格：￥",
          deleteSuccess: "删除成功！",
          deleteFailed: "删除失败！",
          noCover: "暂无封面"
        }
      },
      historyrecord: {
        title: '浏览历史',
        url: "browserHistory/getHistoryList.do",
        deleteAll:true,
        params: {
          num: 3,
          username: "",
          // siteId: CONFIG.SITE_CONFIG.siteId
        },
        href: "177",
        getBookDetail: {
          url: 'book/getBookDetail.do',
          params: {
            pubId: "",
            loginName: ""
          }
        },
        staticText: {
          hits: "点击量：",
          price: "价格：￥",
          deleteSuccess: "删除成功！",
          deleteFailed: "删除失败！",
          noCover: "暂无封面"
        }
      },
      directUrl: { // 购物车列表有很多类型的商品 类型不同可能跳转不同的详情页面 根据类型配置 默认跳转bookdetail.html
        '91': './bookdetail.html', // 纸质书
        '94': './bookdetail.html', // 电子书
        '149': './journaldetail.html', // 电子期刊
        '177': './seriesdetail.html' // 丛书
      }
    }
  }

};

const platform = 'PC';
const pageType = ['index', 'list', 'channel'];
const resourceType = ['book'];

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
