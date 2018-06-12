

export default {
  name:'index',
  navigation: {
    navigation_03: {
      targetType: '_blank',/* 跳转方式配置 */
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
          name:'name'
        }
      },
      showType:{/* 首行栏目显示方式 */
        parentId:'264',/* 指定起始id */
        showChildNav:[268],/* 指定可显示子导航的id */
        custom:[{/* 自定义显示栏目信息(基于后台栏目树) 属性值为空默认取后台数据 */
          id:'',
          name:'',
          href:'',
        }]
      },
      currentSelect:[{
        id:'265',
        htmls:['index.html']
      },
      {
        id:'266',
        htmls:[]
      },
      {
        id:'267',
        htmls:[]
      },
      {
        id:'268',
        htmls:['informationdetail.html','informationlist.html']
      },
      {
        id:'269',
        htmls:[]
      },
      {
        id:'270',
        htmls:['activity.html','activityrace.html','activitylist.html']
      }]
    }
  },
  crumbs: {
    work_crumbs_02: {
      'index':{
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
            name:'name'
          }
        },
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
}