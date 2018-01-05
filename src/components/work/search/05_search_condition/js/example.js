/*
 * @Author: yan.chaoming 
 * @Date: 2018-01-04 16:44:27 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-01-05 18:16:29
 */
const dev = {
  search: {
    search_condition_05: {
    }
  }
};

const prod = {
  search: {
    search_condition_05: {
      conditions:"{pub_resource_type:'BOOK'},{pub_site_id:'2'}",
      eventName:'loadSearchResult',
    }
  }
};