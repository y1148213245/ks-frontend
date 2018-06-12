/**
 * Created by qinff on 2017/12/27.
 */
export default {
  name: 'header',
  common: {
    header: {
      queryMember: {
        url: '/data/common_header_member.json',
        param: {}
      },
      queryNavCols: {
        url: '/data/common_header_navcol.json',
        param: {
          siteId: 2,
          chId: 0
        }
      },
      queryHotWord: {
        num: 4,   // 显示个数限制
      },
    }
  }
}
