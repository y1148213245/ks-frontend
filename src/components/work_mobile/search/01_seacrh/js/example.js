/**
 * Created by song on 2018/3/21
 */

import component from "../search.vue";


const name = component.name; // 组件标签名

const title = "搜索组件"; // 组件title

const description = `搜索组件，搜索组件要传递搜索内容给搜索结果（即图书列表组件）组件，通过发广播的形式进行组件之间的通信`; // 组件描述信息

const dev = {
  search: {
    search_01: {
      eveName: "showSearchResult"   // 搜索组件要传递搜索内容给搜索结果（即图书列表组件）组件，这里通过发广播的形式进行组件之间的通信
    }
  }
}

const prod = {
  search: {
    search_01: {
      eveName: "showSearchResult" // 搜索组件要传递搜索内容给搜索结果（即图书列表组件）组件，这里通过发广播的形式进行组件之间的通信
    }
  }
};

const platform = 'mobile';
const pageType = ['index'];
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
