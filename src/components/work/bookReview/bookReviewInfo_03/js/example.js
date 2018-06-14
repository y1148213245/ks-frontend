/*
 * Created by zong 2018/06/13
 * 评论详情组件
 */
import component from "../bookReview.vue";


const name = component.name;

const title = "评论详情组件";  // 组件title

const description = `评论,没传过来loginName 就是没登陆，记好咯`;

const dev = {
  bookreview: {
    bookreview_03: {
      'modulename': {
        getReviewInfo: {  // 查询评论详情
          url:  'comment/comments.do',
          params: {
            pubId: "",
            reviewId: "",
            siteId: CONFIG.SITE_CONFIG.siteId,
          }
        },
        reviewCon:{
          reviewConShow:true,
          placeholder:'说点什么吧',
          buttonValue:"确定"
        },
        queryComments: {  // 查询评论回复列表
          url:  'comment/queryCommentsByParentId.do',
          params: {
            parentId: "",
            pageIndex: 1,
            pageSize: 15,
            siteId: CONFIG.SITE_CONFIG.siteId,
          },
          noHint:"暂无回复",
        },
        addComment: {  // 添加评论回复
          url:  'comment/addComment.do',
          params: {
            pubId: "",
            colId:'',   //必填
            loginName: "",
            menberType: "1",
            content: "",
            starNum: 0,
            deviceName: "wxShop",  // 设备类型
            // colId: "",
            siteId: CONFIG.SITE_CONFIG.siteId,
            type: "1",
            parentId: "0",   //其他人评论写其他人
            activityId: '0',
          }
        },
        pagination: { // 分页信息
          showPagination: true, // 是否显示分页
          pagesize: [15, 30, 50, 100], // 如何分页
        },
        operList:{       //如果有的话就展示
          review:{
            reviewShow:true,
            toReviewInfoUrl:"../pages/reviewInfo.html",
          },
          like:{
            likeShow:true,
          },
        },
        orReGetMenberName:false, //单独成列表页的话就配置成true 如果在详情页用的话就false 或者不写
      }
    }
  }
};

var prod = {
  bookreview: {
    bookreview_03: {
      'modulename': {
        getReviewInfo: {  // 查询评论详情
          url:  'comment/comments.do',
          params: {
            pubId: "",
            reviewId: "",
            siteId: CONFIG.SITE_CONFIG.siteId,
          }
        },
        reviewCon:{
          reviewConShow:true,
          placeholder:'说点什么吧',
          buttonValue:"确定"
        },
        queryComments: {  // 查询评论回复列表
          url:  'comment/comments.do',
          params: {
            pubId: "",
            pageIndex: 1,
            pageSize: 15,
            siteId: CONFIG.SITE_CONFIG.siteId,
          },
          noHint:"暂无回复",
        },
        addComment: {  // 添加评论回复
          url:  'comment/addComment.do',
          params: {
            pubId: "",
            loginName: "",
            content: "",
            starNum: 0,
            deviceName: "pc",  // 设备类型
            // colId: "",
            siteId: CONFIG.SITE_CONFIG.siteId,
            type: "1",
            parentId: "0",
            activityId: '',
          }
        },
        pagination: { // 分页信息
          showPagination: true, // 是否显示分页
          pagesize: [15, 30, 50, 100], // 如何分页
        },
        operList:{       //如果有的话就展示
          review:{
            reviewShow:true,
            toReviewInfoUrl:"../pages/reviewInfo.html",
          },
          like:{
            likeShow:true,
          },
        },
        orReGetMenberName:false, //单独成列表页的话就配置成true 如果在详情页用的话就false 或者不写
      }
    }
  }
}

const platform = 'PC';
const pageType = ['detail'];
const resourceType = ['book', 'information'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
