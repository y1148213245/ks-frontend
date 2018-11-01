/*
 * @Author: song
 * @Date: 2018-06-08 13:46:56
 * @Last Modified by: song
 * @Last Modified time: 2018-06-08 16:29:48
 * 移动端下拉加载
 * 主要参数：vue对象  总页数 页码 方法名
 */
var mobileLoading = function (_this, method) {
  let vthis = _this;
  let clientHeight = $(window).height(); // 屏幕可视高度
  let scrollHeight = $(window).scrollTop(); // 滚动条滚动高度
  let allHeight = $(document).height(); // 总高度
  if (clientHeight + scrollHeight ==  allHeight ) {
    if (Number(vthis.pageIndex) < Number(vthis.totalPages)) { // 当前页小于翻页最大值
      vthis.pageIndex = parseInt(vthis.pageIndex) + 1 + '';
      vthis[method]();
    }
  }
}

export default mobileLoading;
