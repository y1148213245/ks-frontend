/*
 * @Author: yan.chaoming 
 * @Date: 2018-01-05 13:36:35 
 * @Last Modified by: song
 * @Last Modified time: 2018-03-12 14:17:06
 */
export default {
  name: 'search',
  search: {
    search_result_04: {
      url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
      pageSizes:[10, 20, 50, 100],
      eventName_loadDate:'loadSearchResult',
    }
  },
  rankCard: {
    rank_01: {
      rules:[
        {
          title:'综合排序',
          orderBy:'pub_a_order asc pub_lastmodified desc id asc',
        },
        {
          title:'按人气',
          orderBy:'pub_read_num desc',
        },
        {
          title:'按最新',
          orderBy:'BOOK_PUBDATE desc',
        }
      ],
      eventName:'loadSearchResult',
    },
  }
};