/* 
 * 组件库的资源类别属性、页面类型属性
 * Created by song 2018/1/22
 */
const pageTypeObj = [{ // 页面类别属性
  name: '主页',
  type: 'index'
}, {
  name: '详情页',
  type: 'detail'
}, {
  name: '列表页',
  type: 'list'
}, {
  name: '登录页',
  type: 'login'
}, {
  name: '注册页',
  type: 'register'
}, {
  name: '频道页',  // 例如：电子书城页
  type: 'channel'
}, {
  name: '个人中心',
  type: 'center'
}, {
  name: '购物车',
  type: 'cart'
}, {
  name: '其它',
  type: 'others'
}];

const resourceTypeObj = [{ // 资源类别属性
  name: '图书',
  type: 'book'
}, {
  name: '资讯',
  type: 'information'
}, {
  name: '期刊',
  type: 'journal'
}, {
  name: '音频',
  type: 'radio'
}, {
  name: '视频',
  type: 'vedio'
}, {
  name: '数据库',
  type: 'database'
}, {
  name: '条目',
  type: 'entry'
}, {
  name: '其它',
  type: 'others'
}];

export { pageTypeObj, resourceTypeObj };
