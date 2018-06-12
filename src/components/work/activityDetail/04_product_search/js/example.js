import component from '../searchCondition.vue'
const name = component.name;  // 组件标签名
const title = '活动详情组件';  // 组件title
const description = `活动详情组件`;  // 组件描述信息
const dev = {
  activityDetail: {
    work_activitydetail_04: {
      url: '',
      keys: {
        place: 'place',
        school: 'school',
        group: 'group',
        searchText: 'searchText',
      },
      eventName_search: '',
      isDevelopment:true,
    }
  }
};
const prod = {
  activityDetail: {
    work_activitydetail_04: {
      url:  'spc/prodb/detail.do',
      getSchoolUrl:'spc/prodb/searchNL.do',
      showItem:['place','group','school','topic','author'],/* idCard:身份证号 */
      params:{
        getPlaceRequest_doclibCode:'PORTAL_ACTIVITY',//配库码
        getSchoolRequest_doclibCode:'PORTAL_SCHOOL',//配库码
        getSchoolRequest_relations:'1,1',//1并且，2或者
        getSchoolRequest_cols:'AREA,CLASS',//字段名
        getSchoolRequest_symbols:'1,1',//匹配模式，1包含，2等于，3不等于
      },
      keys: {
        output_place: 'place',
        output_school: 'school',
        output_group: 'group',
        output_searchText: 'searchText',
        
        output_author:'author',
        output_idCard:'idCard',

        school_name:'SYS_TOPIC',
        eventData_docID:'pub_resource_id',//事件接受参数数据，资源id
        getPlaceRequest_doclibCode:'doclibCode',
        getPlaceRequest_docID:'docID',//资源id
        getPlaceRequestBack_areas:'AREALIMT',
        getPlaceRequestBack_classes:'CLASSLIMT',
        getSchoolRequest_doclibCode:'doclibCode',
        getSchoolRequest_relations:'relations',
        getSchoolRequest_cols:'cols',
        getSchoolRequest_symbols:'symbols',
        getSchoolRequest_vals:'vals',//值
      },
      eventName_search: '',
      eventName_listenLoadedData: 'eventName_loadedDatas',
      cascaderConfig:{
        splitTag:{
          item:';',
          category:'~'
        }
      }
    }
  }
};
const platform = 'PC';
const pageType = ['list','detail'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };