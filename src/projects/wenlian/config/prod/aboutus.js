export default {
  name: 'aboutus',
  // url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
  url:`${CONFIG.BASE_URL}spc/cms/publish/list.do`,
  params: {
    conditions:"[{pub_col_id:'40'}]",
    groupBy:"pub_resource_id",
    orderBy:"pub_a_order asc pub_lastmodified desc id asc",
    pageNo:"1",
    pageSize:"15",
    searchText:""
  }
}
