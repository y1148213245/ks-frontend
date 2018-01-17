/**
 * Created by codingnuts on 2017/11/1.
 */

export default {
	//大数据访问前缀
	BASE_AMUC_URL: "http://172.19.32.127:8081/api/",

	//部门稿件参数设置
	DOC_DEPARTMENT_CONFIG: {
		fvid: 52,
		begin: 0,
		count: 100,
		getsourceidAll: "/devdata/docDepartment.json",
		imgUrlPrefix: "http://128.1.1.252:80/newsedit/"
	},
	//刷新频率
	FREQUENCY: {
		// 竞媒比对开始
		// **** 页面刷新时间  74 * 60 * 1000
		jmbdRefreshTime: 20 * 1000,
		// 竞媒比对结束

		// 运营分析开始
		// **** 页面刷新时间  76 * 60 * 1000
		yyfxRefreshTime: 76 * 60 * 1000,
		// 运营分析结束

		// 影响力展示开始
		// **** tab切换时间     5 * 60 * 1000
		// **** 新闻列表滚动时间    8 * 1000
		yxlzsTabChangeFrequency: 20 * 1000,
		yxlzsInterTime: 3 * 1000,
		// 影响力展示结束

		// 快讯播报开始
		// **** 页面刷新时间      4*60*1000
		// **** 新闻列表滚动时间    12*1000
		kxbbRefreshTime: 4 * 60 * 1000,
		kxbbInterTime: 3 * 1000,
		// 快讯播报结束

		// 新闻线索开始
		// **** 页面刷新时间      62*60*1000
		// **** 新闻列表滚动时间    7*1000
		xwxsRefreshTime: 4*60*1000,
		xwxsInterTime: 3 * 1000,
		// 新闻线索结束

		// 传播路径开始
		// **** 页面刷新时间  64* 60 * 1000
		cbdtRefreshTime: 64* 60 * 1000,
		// 传播路径结束

		// 媒体热点榜开始
		// **** 页面刷新时间      63*60*1000
		// **** 横向tab切换时间   10 * 1000
		mtrdbRefreshTime: 20 * 1000,
		mtrdbTabInterTime: 3 * 1000,
		// 媒体热点榜结束

		// 地域热搜词开始
		// **** 页面刷新时间      66*60*1000
		// **** 横向tab切换时间   14*1000
		dyrscRefreshTime: 20 * 1000,
		dyrscTabInterTime: 3 * 1000,
		// 地域热搜词结束

		// 全网热搜词开始
		// **** 页面刷新时间      72 * 60 * 1000
		qwrscRefreshTime: 20 * 1000,
		// 全网热搜词结束

		// 地域热点开始
		// **** 页面刷新时间      61 * 60 * 1000
		// **** 新闻列表滚动时间  10 * 1000
		dyrdRefreshTime: 20 * 1000,
		dyrdInterTime: 3 * 1000,
		// 地域热点结束

		// 微博热点搜索开始
		// **** 页面刷新时间      61 * 60 * 1000
		// **** 微博热点列表滚动时间  10 * 1000
		weiboRefreshTime: 20 * 1000,
		weiboInterTime: 3 * 1000,
		// 微博热点搜索结束

		//部门稿件开始
		docDepartInterTime: 3 * 1000,
		//部门稿件结束
		//文章
		docSourceArticleInterTime: 3 * 1000,
		//图片
		docSourceImageInterTime: 3 * 1000
	}
};
