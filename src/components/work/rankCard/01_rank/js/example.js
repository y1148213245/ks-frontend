/*
 * @Author: yan.chaoming 
 * @Date: 2018-01-05 15:51:44 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-01-05 16:12:44
 */

const dev = {
  rankCard: {
    rank_01: {
    }
  }
};

const prod = {
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
      eventName:''
    },

  }
};