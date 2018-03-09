import component from '../productList.vue'
const name = component.name;  // 组件标签名
const title = '作品列表组件';  // 组件title
const description = `作品列表组件
  接受viewType属性，默认‘complete’，可选值‘simple’，显示完成功能或简易功能`;  // 组件描述信息
const dev = {
  activityDetail: {
    common: {
      vote_03: {  // 投票组件
        url:'',
        params: {
          browserId: '', // 浏览器指纹
          docID: '',
        }
      }
    },
    work_activitydetail_05: {
      'module1': {
        url: '/data/work_activitydetail_05.json',
        keys: {
          title: 'title',
          author: 'author',
          date: 'date',
          abstract: 'abstract',
          teacherCommentNum: 'teacherCommentNum',
          voteNum: 'voteNum'
        },
        eventName_listenLoadedData: '',
        eventName_listenSearch: '',
        isDevelopment: true,
      }

    }
  }
};
const prod = {
  common: {
    vote_03: {  // 投票组件
      url: BASE_URL + 'spc/prodb/activity/vote.do?',
      params: {
        browserId: '', // 浏览器指纹
        docID: '',
      }
    }
  },
  activityDetail: {
    work_activitydetail_05: {
      'module1': {
        url: 'spc/prodb/getWorkList.do',
        toProductDetailUrl: 'productiondetail.html',
        params: {
          getListParam_doclibCode: 'PORTAL_WORKS',
          getListParamOptions:{//扩展查询参数配置，扩展属性名应与“扩展查询参数”字段配置一致
            activityId:{
              getListParam_relations: '1',
              getListParam_cols: 'ACTIVITYID',
              getListParam_symbols: '2',
              getListParam_memberType: '4',
            },
            'place':{//扩展属性名
              getListParam_relations: '1',
              getListParam_cols: 'AREA',
              getListParam_symbols: '1',
              getListParam_memberType: '4',
            },
            'school':{
              getListParam_relations: '1',
              getListParam_cols: 'SCHOOL',
              getListParam_symbols: '1',
              getListParam_memberType: '4',
            },
            'group':{
              getListParam_relations: '1',
              getListParam_cols: 'CLASS',
              getListParam_symbols: '1',
              getListParam_memberType: '4',
            },
            'searchText':{
              getListParam_relations: '1',
              getListParam_cols: 'SYS_TOPIC',
              getListParam_symbols: '1',
              getListParam_memberType: '4',
            },
          },
          getListParamOptions_fixed:{/* 固定条件配置 */
            IS_EXCELLENTWORK:{//例
              getListParam_relations: '1',
              getListParam_cols: 'IS_EXCELLENTWORK',
              getListParam_symbols: '2',
              getListParam_memberType: '4',
              getListParam_vals:'是',
            },
          },
          toProductDetailParam_resourceType: 'PORTAL_WORKS'
        },
        keys: {
          title: 'SYS_TOPIC',
          author: 'POTHUNTER_NAME',
          date: 'VOTE_COUNT',
          abstract: 'DESCRIPTION',
          teacherCommentNum: 'DIS_COUNT_NUM',
          voteNum: 'VOTE_COUNT',
          resourceId: 'SYS_DOCUMENTID',
          resourceName: 'SYS_TOPIC',
          activityId: 'ACTIVITYID',
          eventListienLoadDatas_activityId:'pub_resource_id',
          eventListienSearchDatas:['place','school','group','searchText'],//扩展查询参数
          getListParam_doclibCode:'doclibCode',
          getListParam_relations:'relations',
          getListParam_cols:'cols',
          getListParam_symbols:'symbols',
          getListParam_vals:'vals',
          getListParam_memberType:'memberType',
          toProductDetailParam_resourceType: 'resourceType',
          toProductDetailParam_resourceId: 'resourceId',
          toProductDetailParam_colId: 'colId',
          toProductDetailParam_resourceName: 'resourceName',
          toProductDetailParam_activityId: 'activityId',
        },
        eventName_listenLoadedData: '',
        eventName_listenSearch: '',
        isDevelopment: false,
      }

    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };