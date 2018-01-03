/**
 * Created by qinff on 2017/12/27.
 */
export default {
  name: 'header',
  common: {
    header: {
      queryMember: {
        url: '../data/common_header.json',
        param: {}
      },
      queryNavCols: {
        url: '../spc/cms/col/getAllColBySiteId.do',
        param: {
          siteId: 2,
          chId: 0
        }
      }
    }
  }
}
