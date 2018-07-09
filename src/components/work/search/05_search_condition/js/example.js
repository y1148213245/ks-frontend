/*
 * @Author: yan.chaoming
 * @Date: 2018-01-04 16:44:27
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-01-05 18:16:29
 * 高级检索
 */

import component from "../searchCondition.vue";


const name = component.name;  // 组件标签名

const title = "高级检索组件";  // 组件title

const description = `高级检索条件`;  // 组件描述信息

const dev = {
  search: {
    search_condition_05: {
      staticText: {
        bookName: "书名:",
        inputBookName: "请输入书名",
        author: "作者:",
        inputAuthor: "请输入作者",
        ISBNNum: "ISBN:",
        inputISBNNum: "请输入ISBN",
        search: "检索",
        publishTime: "出版时间:",
        selectDate: "选择日期",
        to: "至",
        price: "定价:",
        inputPrice: "请输入价格",

      }
    }
  }
};

const prod = {
  search: {
    search_condition_05: {
      conditions:"{pub_resource_type:'BOOK'},{pub_site_id:'2'}",
      eventName:'loadSearchResult',
      staticText: {
        bookName: "书名:",
        inputBookName: "请输入书名",
        author: "作者:",
        inputAuthor: "请输入作者",
        ISBNNum: "ISBN:",
        inputISBNNum: "请输入ISBN",
        search: "检索",
        publishTime: "出版时间:",
        selectDate: "选择日期",
        to: "至",
        price: "定价:",
        inputPrice: "请输入价格",
      }
    }
  }
};

const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
