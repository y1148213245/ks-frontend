/*
 * @Author: song
 * @Date: 2018-06-07 15:26:18
 * @Last Modified by: yancm
 * @Last Modified time: 2018-11-05 11:08:22
 * 个人中心消费记录
 */


import component from "../purchased.vue";

const name = component.name; // 组件标签名

const title = "已购图书"; // 组件title


const description = `个人中心已购图书组件`; // 组件描述信息


const dev = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_07: {
      display: { //组件的静态文本
        navTitle: '已购图书',
        author: '作者：',
        bookName: '书名：',
        noData: '您还没有购买图书',
        gotoShop: '去书城逛逛',
        hasAddBookshelf: '您还没有图书加入书架', // tab指向 已加入书架
        noAddBookshelf: '您的图书全部在书架中', // tab指向 未加入书架
        startRead: '开始阅读',
        addBookshelf: '加入书架',
        noPicture: '暂无图片',
        addSuccess: '成功加入书架',
        addFailed: '加入书架失败',
        getReadUrlError:'暂无阅读地址',
        tabsList: [{
            title: '全部',
            type: '2', //已购买
            status: '3' //全部
          },
          {
            title: '已加入书架',
            type: '2',
            status: '1' //已加入书架
          },
          {
            title: '未加入书架',
            type: '2',
            status: '0' //未加入书架
          }
        ]
      },
      emitEvent: { //发广播的事件名称
        contextEventName: 'showContext'
      },
      getBoughtBooks: {
        url: "user/getBookShelfList.do",
        params: {
          pageIndex: '1', // 页码
          pageSize: '10', // 每页的数量
          type: '2', //类型： 试读(1)、购买(2)、全部(3)
          siteId: '', // 站点id
          productType: '', //商品类型
          status: '3' //状态：未加入书架(0)、加入书架(1)、全部(3)
        }
      },
      toReadBook: {
        url: '',
        params: {
          bookId: '',
          readType: 0,
          bookName: '',
          userName: '',
          siteType: ''
        }
      },
      addBookShelf: {
        url: "user/addBookShelf.do",
        params: {
          pubId: '',
          siteId: '', // 站点id
          type: '2' //1试读 2购买
        }
      },
      toBookDetail: {
        url: '../pages/bookDetail.html'
      },
      toshopUrl: '../pages/index.html'
    },
  }
}

const prod = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_07: {
      display: { //组件的静态文本
        navTitle: '已购图书',
        author: '作者：',
        bookName: '书名：',
        noData: '您还没有购买图书',
        gotoShop: '去书城逛逛',
        hasAddBookshelf: '您还没有图书加入书架', // tab指向 已加入书架
        noAddBookshelf: '您的图书全部在书架中', // tab指向 未加入书架
        startRead: '开始阅读',
        addBookshelf: '加入书架',
        noPicture: '暂无图片',
        addSuccess: '成功加入书架',
        addFailed: '加入书架失败',
        tabsList: [{
            title: '全部',
            type: '2', //已购买
            status: '3' //全部
          },
          {
            title: '已加入书架',
            type: '2',
            status: '1' //已加入书架
          },
          {
            title: '未加入书架',
            type: '2',
            status: '0' //未加入书架
          }
        ]
      },
      emitEvent: { //发广播的事件名称
        contextEventName: 'showContext'
      },
      getBoughtBooks: {
        url: "user/getBookShelfList.do",
        params: {
          pageIndex: '1', // 页码
          pageSize: '10', // 每页的数量
          type: '2', //类型： 试读(1)、购买(2)、全部(3)
          siteId: '', // 站点id
          productType: '', //商品类型
          status: '3' //状态：未加入书架(0)、加入书架(1)、全部(3)
        }
      },
      toReadBook: {
        url: '',
        params: {
          bookId: '',
          readType: 0,
          bookName: '',
          userName: '',
          siteType: ''
        }
      },
      addBookShelf: {
        url: "user/addBookShelf.do",
        params: {
          pubId: '',
          siteId: '', // 站点id
          type: '2' //1试读 2购买
        }
      },
      toBookDetail: {
        url: '../pages/bookDetail.html'
      },
      toshopUrl: '../pages/index.html'
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
