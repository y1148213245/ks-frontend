import component from '../crumbs_02.vue'
const name = component.name;  // 组件标签名
const title = '面包屑组件';  // 组件title
const description = `基于栏目树,通过外部事件传入详情数据,取出所在栏目,在栏目中找到名字及链接`;  // 组件描述信息
const dev = {
  crumbs: {
    work_crumbs_02: {
      url: '',
    }
  }
};
const prod = {
  crumbs: {
    work_crumbs_02: {
      'modulename':{
        getCols:{
          url: 'spc/cms/col/getAllColBySiteId',
          type:'get',/* 请求方式 */
          params: {/* 查询参数key:参数名  value:参数值.*/
            // colId: '39', // 栏目ID
            siteId:'',
            chId:'0'
          },
          getGlobalParams:{/* 获取全局参数 key:全局对象属性,请求参数名*/
            siteId:'siteId'
          },
          keys:{
            id:"id",
            parentId:'parentId',
            name:'name',
            url:'url'
          }
        },
        startCol:'0',
        event:{
          listenDetail:{
            name:'listenInfoDetail',
            keys:{
              colId:'pub_col_id',
              colName:'pub_col_name'
            }
          }
        }
      }
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };