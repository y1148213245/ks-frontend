/* 
 * Created by song 2018/2/6
 * 投票组件
 */
import component from "../vote.vue";


const name = component.name;

const title = "投票组件";  // 组件title

const description = `投票`;

const dev = {
  common: {
    vote_03: {
      url: '../data/work_common_03_data.json'
    }
  }
};

var prod = {
  common: {
    vote_03: {
      url: CONFIG.BASE_URL + '',
      params: {
        pubId: '',
        loginName: '',
      }
    }
  }
}

const platform = 'PC';
const pageType = ['detail'];
const resourceType = ['book', 'information'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
