/* 
 * Created by song 2018/2/5
 * 评论组件
 */
import component from "../activityReview.vue";


const name = component.name;

const title = "评论组件"; // 组件title

const description = `评论分两类：图书、资讯、活动评论为第一类，也是默认的评论；作品评论为第二类，是特殊的评论，索引库查不到作品的相关信息。两类评论的查询评论和添加评论接口都不一样。`;

const dev = {
  bookreview: {
    activityreview_02: {
      url: '../data/activityreview_02_data.json'
    }
  }
};

var prod = {
  /* 作品配置信息 */
  review: { // 查询作品评论列表
    queryreview: {
      url:  'comment/getWorksComment.do',
      params: {
        resourceType: '',
        resourceId: '',
        type: '1', //1：老师  2：普通
        pageIndex: 1,
        pageSize: 15,
        siteId: CONFIG.SITE_CONFIG.siteId
      },
      reviewType: [{ // 评论角色配置
        type: '1',
        name: '教师点评'
      }, {
        type: '2',
        name: '用户点评'
      }]
    },
    addreview: { // 添加作品评论 索引库里面没有作品
      url:  'comment/addWorksComment.do',
      params: {
        pubId: '', //  所以pubId为空
        loginName: '',
        content: '',
        siteId: CONFIG.SITE_CONFIG.siteId,
        parentId: '0',
        starNum: '0',
        type: '1',
        colId: '',
        memberType: '', // 1:普通人员 2：机构人员 3：评委老师 4：评论老师 5：学生
        resourceName: '', // 必须要填
        resourceType: '', // 必须要填
        resourceId: '', // 必须要填 
      }
    }
  },
  /* 图书、资讯、活动配置信息 */
  review: { // 查询活动评论列表
    getParamType:'event',/* event:事件取参 ,href:地址栏取参 */
    listenEvent:{/* getParamType值为event时配置,否则不配置 */
      name:'dwadwa',
      keys:{
        pubId:'id',
        colId:'pub_col_id',
        resourceName:'pub_resource_name',
        resourceType:'pub_resource_type',
        resourceId:'pub_resource_id',
        activityId:'id',
      }
    },
    queryreview: {
      url:  'comment/comments.do',
      params: {
        pubId: '',
        pageIndex: 1,
        pageSize: 15,
        siteId: CONFIG.SITE_CONFIG.siteId
      },
      reviewType: [{ // 评论角色配置
        type: '1',
        name: '教师点评'
      }, {
        type: '2',
        name: '用户点评'
      }]
    },
    addreview: { // 添加资讯、图书、活动评论（索引库里有）
      url:  'comment/addComment.do',
      params: {
        pubId: '',
        loginName: '',
        content: '',
        siteId: CONFIG.SITE_CONFIG.siteId,
        starNum: '0',
        deviceName: 'PC',
        parentId: '0',
        type: '1',
        colId: '',
        memberType: '', // 1:普通人员 2：机构人员 3：评委老师 4：评论老师 5：学生
        resourceName: '', // 值可以为空
        resourceType: '', // 值可以为空
        resourceId: '', // 值可以为空
      },
    }
  },
}

const platform = 'PC';
const pageType = ['channel'];
const resourceType = ['information'];

export { name, title, dev, prod, description, platform, pageType, resourceType };
