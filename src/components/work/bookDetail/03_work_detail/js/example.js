/**
 * Created by song 2018/1/9
 * 图书详情页 图书详细信息
 */

import component from "../workdetail.vue";


const name = component.name;

const title = "作品详情组件"; // 组件title

const description = `作品详情`;


const dev = {
  bookdetail: {
    bookdetail_03: {
      url: '../data/work_detail_03_data.json'
    }
  }
};

const prod = {
  bookdetail: {
    bookdetail_03: {
      url: BASE_URL + 'spc/prodb/detail.do',
      params: {
        doclibCode: '',
        docID: '',
      },
      keys: {
        
      }
    }
  }
};

const platform = 'PC';
const pageType = ['detail'];
const resourceType = ['information'];

export { name, title, dev, prod, description, platform, pageType, resourceType };
