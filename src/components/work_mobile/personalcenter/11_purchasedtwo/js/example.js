/*
 * @Author: song
 * @Date: 2018-06-07 15:26:18
 * @Last Modified by: song
 * @Last Modified time: 2018-06-15 16:37:56
 * 个人中心消费记录
 */


import component from "../purchasedtwo.vue";

const name = component.name; // 组件标签名

const title = "已购"; // 组件title


const description = `个人中心已购组件`; // 组件描述信息


const dev = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_11: {
      display: { //组件的静态文本
        navTitle: '已购图书',
        author: '作者：',
        bookName: '书名：',
        periodicalName: '期刊名：',
        periodicalContent: '期刊内容：',
        serviceTitle: '知识服务标题：',
        publicTime: '出版时间：',
        sourceForm: '资源来源：',
        sourceType: '来源类型：',
        noData: ['您还没有购买图书','您还没有购买期刊','您还没有购买知识服务'],
        noPicture: '暂无图片',
        options: [
          {text: '封面模式',value: '1'},
          {text: '列表模式',value: '2'}
        ],
        tabsList: [{
          title: '图书',
          type: '2', //已购买
          status: '3' //全部
        },
          {
            title: '期刊',
            type: '2',
            status: '1' //已加入书架
          },
          {
            title: '知识服务',
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
      toDetailUrl: '../pages/bookdetail.html',
      toKnowledgeService: 'https://www.baidu.com/' //TODO知识服务外链，还没有地址，先这么写
    },
  }
}

const prod = {
  work_mobile_personalcenter: {
    work_mobile_personalcenter_11: {
      display: { //组件的静态文本
        navTitle: '已购图书',
        author: '作者：',
        bookName: '书名：',
        periodicalName: '期刊名：',
        periodicalContent: '期刊内容：',
        serviceTitle: '知识服务标题：',
        publicTime: '出版时间：',
        sourceForm: '资源来源：',
        sourceType: '来源类型：',
        noData: ['您还没有购买图书','您还没有购买期刊','您还没有购买知识服务'],
        noPicture: '暂无图片',
        options: [
          {text: '封面模式',value: '1'},
          {text: '列表模式',value: '2'}
        ],
        tabsList: [{
          title: '图书',
          type: '2', //已购买
          status: '3' //全部
        },
          {
            title: '期刊',
            type: '2',
            status: '1', //已加入书架
            productType:'periodical'
          },
          {
            title: '知识服务',
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
          status: '3' //状态：未加入书架(0)、加入书架(1)、全部(3)
        }
      },
      toDetailUrl: '../pages/bookdetail.html',
      toKnowledgeService: 'https://www.baidu.com/', //TODO知识服务外链，还没有地址，先这么写
      toProbationParams: {
        readType: '1',
        siteType: '1',
      }
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
