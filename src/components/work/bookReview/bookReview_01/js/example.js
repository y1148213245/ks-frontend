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
        url: CONFIG.BASE_URL + 'comment/comments.do',
        params: {
          pubId: "",
          pageIndex: 0,
          pageSize: 15
        }
      },
      addComment: {  // 添加评论
        url: CONFIG.BASE_URL + 'comment/addComment.do',
        params: {
          pubId: "",
          loginName: "",
          content: "",
          starNum: "",
          deviceName: "pc",  // 设备类型
          colId: "",
          siteId: CONFIG.SITE_CONFIG.siteId,
          type: "1",
          parentId: "0",
        }
      }
    }
  }
}

const platform = 'PC';
const pageType = ['detail'];
const resourceType = ['book', 'information'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
