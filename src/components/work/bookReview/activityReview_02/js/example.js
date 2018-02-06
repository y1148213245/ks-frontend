/* 
 * Created by song 2018/2/5
 * 评论组件
 */
import component from "../activityReview.vue";


const name = component.name;

const title = "评论组件";  // 组件title

const description = `活动评论`;

const dev = {
  bookreview: {
    activityreview_02: {
      url: '../data/activityreview_02_data.json'
    }
  }
};

var prod = {
  bookreview: {
    activityreview_02: {
      url: BASE_URL + '',
    }
  }
}

const platform = 'PC';
const pageType = ['channel'];
const resourceType = ['information'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
