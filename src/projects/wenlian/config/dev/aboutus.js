export default {
  name: 'aboutus',
  crumbs:{
    url:'./index.html',
    showWord:{
      location:'您的位置',
      index:'首页'
    },
    getCrumbdOn:'setCrumbs',  //事件监听
    getCrumbdEmit:'setCrumbs',  //事件触发
    crumbType:[{ //面包屑
      name: 'author',
      title: '作者详情',
    }, {
      name: 'editor',
      title: '编辑详情',
    }, {
      name: 'aboutus',
      title: '关于我们',
    }]
  },
  url: CONFIG.BASE_URL + 'spc/cms/publish/list.do'
}
