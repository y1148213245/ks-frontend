/* 
 * Created by song 2018/1/10
 * 评论组件
 */
import component from "../bookReview.vue";


const name = component.name;

const title = "评论组件";  // 组件title

const description = `评论`;

const dev = {
  bookreview: {
    bookreview_01: {
      queryComments: {  // 查询评论
        
      },
      addComment: {  // 添加评论
        
      }
    }
  }
};

var prod = {
  bookreview: {
    bookreview_01: {
      queryComments: {  // 查询评论
        url:  'comment/comments.do',
        params: {
          pubId: "",
          pageIndex: 1,
          pageSize: 15,
          siteId: CONFIG.SITE_CONFIG.siteId,
        }
      },
      addComment: {  // 添加评论
        url:  'comment/addComment.do',
        params: {
          pubId: "",
          loginName: "",
          content: "",
          starNum: 0,
          deviceName: "pc",  // 设备类型
          colId: "",
          siteId: CONFIG.SITE_CONFIG.siteId,
          type: "1",
          parentId: "0",
          activityId: '',
        }
      }
    }
  }
}

const platform = 'PC';
const pageType = ['detail'];
const resourceType = ['book', 'information'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
