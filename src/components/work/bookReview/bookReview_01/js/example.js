/*
 * Created by song 2018/1/10
 * re by zong 20180609
 * 评论组件
 */
import component from "../bookReview.vue";


const name = component.name;

const title = "评论组件";  // 组件title

const description = `评论,orReGetMenberName:true, //单独成列表页的话就配置成true 如果在详情页用的话就false 或者不写  true的话也会根据pubId 再次获取图书信息
  --------- 2018 / 9 / 28 新增可以多次评论的资源类型 金融PC是稿件和咨询都能多次评论 ----------
  "limitDisscussType": ["93", "150"] // 限制可以多次评论的数据类型
`;

const dev = {
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
      orReGetMenberName:true, //单独成列表页的话就配置成true 如果在详情页用的话就false 或者不写
      toAddReview:{// 单独添加评论按钮是否展示
        toAddReviewShow:true,
        toAddReviewName:"评论",
        toAddReviewUrl:'./pages/reviewPublish.html'
      },
      "loginUrl": '../pages/login.html',
      staticText:{
        comments:"评论",
        noHeadPicture:"暂无头像",
        noComments:"暂无评论",
        commentsEmptyInfo:"评论内容不能为空",
        commentsTooMany:"评论不能超过250字",
        pleaseGradeBeforeSubmitting:"请先评分再提交评论~",
        commentAddFailed:"评论添加失败",
        contentBefore: "您还可以输入",
        contentAfter: "个字"
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
      },
      pagination: { // 分页信息
        showPagination: true, // 是否显示分页
        pagesize: [15, 30, 50, 100], // 如何分页
      },
      operList:{       //如果有的话就展示
        review:{
          reviewShow:true,
          toReviewInfoUrl:"../pages/reviewDetail.html",
        },
        like:{
          likeShow:true,
        },
      },
      orReGetMenberName:true, //单独成列表页的话就配置成true 如果在详情页用的话就false 或者不写
      toAddReview:{// 单独添加评论按钮是否展示
        toAddReviewShow:true,
        toAddReviewName:"评论",
        toAddReviewUrl:'../pages/reviewPublish.html'
      },
      resourceDetail:{
        sysAdapter:'sykAdapter',
        typeAdapter:'bookAdapter',
        isDiscussLimit:true //评论限制 (评论逻辑控制)  例:获取后台控制评论1次之后不可再评论的状态
      },
      "loginUrl": '../pages/login.html',
      staticText:{
        comments:"评论",
        noHeadPicture:"暂无头像",
        noComments:"暂无评论",
        commentsEmptyInfo:"评论内容不能为空",
        pleaseGradeBeforeSubmitting:"请先评分再提交评论~",
        commentAddFailed:"评论添加失败",
        contentBefore: "您还可以输入",
        contentAfter: "个字"
      }
    }
  }
}

const platform = 'PC';
const pageType = ['detail'];
const resourceType = ['book', 'information'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
