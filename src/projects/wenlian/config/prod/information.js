/**
 * Created by qinff on 2018/1/9.
 * Edit by song on  2018/3/30.
 * 资讯详情组件
 */
export default {
  name: 'information',
  information: {
    information_01: {
      showItem: ['like', 'collect', 'share', 'review'], // 控制显示哪些项： like（点赞）  collect （收藏）  share （分享）
      queryDetail: { // 查询资讯详情 
        url: CONFIG.BASE_URL + 'spc/cms/publish/detail.do',
        params: { // 请求参数
          pubId: '',
          loginName: ''
        },
        keys: { // 字段兼容
          title: "pub_resource_name", // 资讯标题
          author: "information_SYS_AUTHORS", // 作者
          pubTime: "information_a_pubTime", // 资讯发布时间
          content: "information_a_content", // 资讯内容
          picture: "pub_picBig", // 图片
        },
        display: {  // template 固定显示内容
          noAuthor: '暂无作者',
          like: "点赞",
          collect: "收藏",
          share: "分享",
        },
      },
      collectOrLike: { // 收藏 / 点赞
        url: CONFIG.BASE_URL + 'collection/addCollect.do',
        params: {
          loginName: '',
          pubId: '',
          operateType: '',
          siteId: CONFIG.SITE_CONFIG.siteId
        }
      },

    }
  },
  bookreview: { // 评论
    bookreview_01: {
      queryComments: { // 查询评论
        url: CONFIG.BASE_URL + 'comment/comments.do',
        params: {
          pubId: "",
          pageIndex: 1,
          pageSize: 15,
          siteId: CONFIG.SITE_CONFIG.siteId,
        }
      },
      addComment: { // 添加评论
        url: CONFIG.BASE_URL + 'comment/addComment.do',
        params: {
          pubId: "",
          loginName: "",
          content: "",
          starNum: 0,
          deviceName: "pc", // 设备类型
          colId: "",
          siteId: CONFIG.SITE_CONFIG.siteId,
          type: "1",
          parentId: "0",
          activityId: '',
        }
      },
      keys:{
        information_a_content:"information_a_text"
      }
    }
  },

}
