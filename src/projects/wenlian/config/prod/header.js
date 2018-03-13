/**
 * Created by qinff on 2017/12/27.
 */
export default {
  name: 'header',
  common: {
    header: {
      queryMember: {
        url: CONFIG.BASE_URL + '../data/common_header.json',
        params: {}
      },
      queryHotWord: {
        /* 查询热门搜索关键词 栏目是 115 类型是资讯 */
        url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
        params: {
          conditions: "[{pub_col_id:'115'}, {pub_status:'1'}]",
          groupBy: "",
          orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "15",
          searchText: ""
        },
        colId: "115",
        num: 4,   // 显示个数限制
      },
      queryNavCols: {
        /* 查询栏目导航 */
        url: CONFIG.BASE_URL + 'spc/cms/col/getAllColBySiteId.do',
        params: {
          siteId: 2,
          chId: 0
        },
        navColArr: ['37', '38', '39', '40']
      },
      queryNavCategory: {
        /* 查询图书分类导航 */
        url: CONFIG.BASE_URL + 'spc/prodb/treeByCode.do',
        params: {
          code: "BOOK",
          layer: 2
        }
      },
      logoutUrl: CONFIG.BASE_URL + 'logout.do'
    }
  }
}
