/**
 * Created by codingnuts on 2017/12/14.
 */

var CONFIG = {
	BASE_URL: "http://172.19.57.153/spc-portal-app/",
	READ_URL: 'http://172.19.57.153/portal/reader/yuezhi/read.jsp',  // 阅读地址
	PAGE_MANAGEMENT_URL: "http://172.19.92.76:8085/spc/api/",  // 页面管理系统地址
	SITE_CONFIG: {
		siteId: 5,
		chId: 0
	},
	APP: 1
}

var $_$ = {
	SITE_NAME: 'site-101',
	search: {
		hotbookrecommend: {
			hotbookrecommend_01: {
				url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
				params: {
					conditions: '[{pub_resource_type:"BOOK"},{pub_status:"1"},{pub_col_id:"113"},{pub_site_id:"' + CONFIG.SITE_CONFIG.siteId + '"}]', //热门推荐栏目id为113
					groupBy: "pub_resource_id",
					orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
					pageNo: "1",
					pageSize: "10",
					searchText: ""
				},
				keys: { //接口字段兼容
					Bookname: "pub_resource_name",
					author: "BOOK_SYS_AUTHORS"
				},
				maxNumber: 10, // 显示多少个数据
				toDetailType: {
					type: 'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
					// phone: {
					//   functionName: 'appbook',/* app方法名 */
					//   values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
					// },
					href: {/* 转跳页面 */
						url: './bookdetail.html',
						keys: {
							'pubId': 'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
						},
						fixedKeys: {
							'app': '1'/* 左侧为转跳参数；右侧为值 */
						}
					}
				},
			}
		},
		search: {
			search_01: {
				eveName: "showSearchResult" // 搜索组件要传递搜索内容给搜索结果（即图书列表组件）组件，这里通过发广播的形式进行组件之间的通信
			}
		},
		booklist: {
			booklist_01: {
				'searchList': {
					url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
					params: {
						conditions: [
							{ pub_resource_type: "BOOK" },
							{ pub_status: "1" },
							{ pub_site_id: CONFIG.SITE_CONFIG.siteId },
						],
						groupBy: "pub_resource_id", // 为了去重
						orderBy: "pub_read_num desc", // 默认传这个值 "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc" 为了与后台顺序一致
						pageNo: "1",
						pageSize: "10",
						searchText: null
					},
					listType: 'colId', // 筛选功能： ‘colId’按栏目查、‘cascadId’按分类查 , 无筛选则为空
					// showNum: 3,//显示个数,不限制则不配置
					toMoreList: {//‘更多链接’的配置
						isShow: false,//是否显示
						url: '',//链接
						keys: {//动态参数，左为参数名，右为内部数据的字段名
							orderBy: 'orderParam'
						},
						fixedKeys: {//固定参数，左为参数名，右为参数值，可自行扩展。

						}
					},
					showItem: ['picture', 'bookname', 'author', 'abstract', 'price'], // 控制显示哪些项
					display: {  // template 固定显示内容
						author: '作者：',
					},
					keys: { // 接口请求字段兼容
						picture: 'pub_picSmall', // 封面图
						bookname: 'pub_resource_name', // 书名
						author: 'BOOK_SYS_AUTHORS', // 作者
						abstract: 'BOOK_SYNOPSIS', // 摘要
						price: 'prod_member_price', // 价格
					},
					eveName: "showSearchResult", // 搜索组件要传递搜索内容给搜索结果（即图书列表组件）组件，这里通过发广播的形式进行组件之间的通信
					toDetailType: {
						type: 'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
						phone: {
							functionName: 'appbook',/* app方法名 */
							values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
						},
						href: {/* 转跳页面 */
							url: './bookdetail.html',
							keys: {
								'pubId': 'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
							},
							fixedKeys: {
								'app': '1'/* 左侧为转跳参数；右侧为值 */
							}
						}
					},
				}
			}
		}
	},
	bookdetail: {
		bookdetail: {
			bookdetail_01: {
				url: CONFIG.BASE_URL + "mobileBook/getBookDetail.do",
				params: {
					pubId: "",
					loginName: "",
				},
				keys: { //接口字段兼容
					pic: "bigPic",
					title: "resourceName",
					author: "author",
					memberPrice: "memberPrice",
					bookPrice: "bookPrice",
					bookSize: 'bookSize',
					starNum: "starNum",
					bookmemory: "bookPrice",
					abstract: 'bookAbstract',
				},

			}
		},
		relatebooklist: {
			relatebooklist_01: {
				url: CONFIG.BASE_URL + "spc/cms/publish/related.do",
				params: {
					size: "3",
					pubId: "52",
				},
				keys: { //接口字段兼容
					pic: "pub_picBig",
					Bookname: "pub_resource_name",
					BookId: "id"
				},
				maxRelateNumber: 7, // 显示多少个数据
				toDetailType: {
					type: 'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
					phone: {
						functionName: 'appbook',/* app方法名 */
						values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
					},
					href: {/* 转跳页面 */
						url: './bookdetail.html',
						keys: {
							'pubId': 'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
						},
						fixedKeys: {
							'app': '1'/* 左侧为转跳参数；右侧为值 */
						}
					}
				},
			},

		}
	},
	booklist: {
		booklist: {
			booklist_01: {
				'list': {
					url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
					params: {
						conditions: [
							{ pub_resource_type: "BOOK" },
							{ pub_status: "1" },
							{ pub_site_id: CONFIG.SITE_CONFIG.siteId },
						],
						groupBy: "pub_resource_id", // 为了去重
						orderBy: "pub_read_num desc", // 默认传这个值 "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc" 为了与后台顺序一致
						pageNo: "1",
						pageSize: "10",
						searchText: null
					},
					listType: 'colId', // 列表有两种类型： ‘colId’按栏目查、‘cascadId’按分类查
					showItem: ['picture', 'bookname', 'author', 'abstract', 'price'], // 控制显示哪些项
					display: {  // template 固定显示内容
						author: '作者：',
					},
					keys: { // 接口请求字段兼容
						picture: 'pub_picSmall', // 封面图
						bookname: 'pub_resource_name', // 书名
						author: 'BOOK_SYS_AUTHORS', // 作者
						abstract: 'BOOK_SYNOPSIS', // 摘要
						price: 'prod_member_price', // 价格
					},
					eveName: "showSearchResult", // 搜索组件要传递搜索内容给搜索结果（即图书列表组件）组件，这里通过发广播的形式进行组件之间的通信
					toDetailType: {
						type: 'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
						phone: {
							functionName: 'appbook',/* app方法名 */
							values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
						},
						href: {/* 转跳页面 */
							url: './bookdetail.html',
							keys: {
								'pubId': 'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
							},
							fixedKeys: {
								'app': '1'/* 左侧为转跳参数；右侧为值 */
							}
						}
					},
				}
			}
		}
	},
	bookrank: {
		booklist: {
			booklist_01: {
				'changxiao': {
					url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
					params: {
						conditions: [
							{ pub_resource_type: "BOOK" },
							{ pub_status: "1" },
							{ pub_site_id: CONFIG.SITE_CONFIG.siteId },
						],
						groupBy: "pub_resource_id", // 为了去重
						orderBy: "pub_sales_num desc", // 默认传"pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc"这个值 为了与后台顺序一致
						pageNo: "1",
						pageSize: "10",
						searchText: null
					},
					listType: '', // 列表有两种类型： ‘colId’按栏目查、‘cascadId’按分类查
					showNum: 3,
					title: {
						isShow: true,
						name: '畅销榜'
					},
					toMoreList: {//‘更多链接’的配置
						isShow: true,//是否显示
						url: './bookrankmore.html',//链接
						keys: {//动态参数，左为参数名，右为内部数据的字段名
							orderBy: 'orderParam'
						},
						fixedKeys: {//固定参数，左为参数名，右为参数值，可自行扩展。

						}
					},
					showItem: ['picture', 'bookname', 'author', 'abstract'], // 控制显示哪些项
					display: {  // template 固定显示内容
						author: '作者：',
					},
					keys: { // 接口请求字段兼容
						picture: 'pub_picSmall', // 封面图
						bookname: 'pub_resource_name', // 书名
						author: 'BOOK_SYS_AUTHORS', // 作者
						abstract: 'BOOK_SYNOPSIS', // 摘要
						price: 'prod_member_price', // 价格
					},
					eveName: "showSearchResult", // 搜索组件要传递搜索内容给搜索结果（即图书列表组件）组件，这里通过发广播的形式进行组件之间的通信,
					toDetailType: {
						type: 'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
						phone: {
							functionName: 'appbook',/* app方法名 */
							values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
						},
						href: {/* 转跳页面 */
							url: './bookdetail.html',
							keys: {
								'pubId': 'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
							},
							fixedKeys: {
								'app': '1'/* 左侧为转跳参数；右侧为值 */
							}
						}
					},
				},
				'renqi': {
					url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
					params: {
						conditions: [
							{ pub_resource_type: "BOOK" },
							{ pub_status: "1" },
							{ pub_site_id: CONFIG.SITE_CONFIG.siteId },
						],
						groupBy: "pub_resource_id", // 为了去重
						orderBy: "pub_read_num desc", // 默认传这个值 为了与后台顺序一致
						pageNo: "1",
						pageSize: "10",
						searchText: null
					},
					listType: '', // 列表有两种类型： ‘colId’按栏目查、‘cascadId’按分类查
					showNum: 3,
					title: {
						isShow: true,
						name: '人气榜'
					},
					toMoreList: {//‘更多链接’的配置
						isShow: true,//是否显示
						url: './bookrankmore.html',//链接
						keys: {//动态参数，左为参数名，右为内部数据的字段名
							orderBy: 'orderParam'
						},
						fixedKeys: {//固定参数，左为参数名，右为参数值，可自行扩展。

						}
					},
					showItem: ['picture', 'bookname', 'author', 'abstract'], // 控制显示哪些项
					display: {  // template 固定显示内容
						author: '作者：',
					},
					keys: { // 接口请求字段兼容
						picture: 'pub_picSmall', // 封面图
						bookname: 'pub_resource_name', // 书名
						author: 'BOOK_SYS_AUTHORS', // 作者
						abstract: 'BOOK_SYNOPSIS', // 摘要
						price: 'prod_member_price', // 价格
					},
					eveName: "showSearchResult",// 搜索组件要传递搜索内容给搜索结果（即图书列表组件）组件，这里通过发广播的形式进行组件之间的通信
					toDetailType: {
						type: 'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
						phone: {
							functionName: 'appbook',/* app方法名 */
							values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
						},
						href: {/* 转跳页面 */
							url: './bookdetail.html',
							keys: {
								'pubId': 'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
							},
							fixedKeys: {
								'app': '1'/* 左侧为转跳参数；右侧为值 */
							}
						}
					},
				},
				'xinshu': {
					url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
					params: {
						conditions: [
							{ pub_resource_type: "BOOK" },
							{ pub_status: "1" },
							{ pub_site_id: CONFIG.SITE_CONFIG.siteId },
						],
						groupBy: "pub_resource_id", // 为了去重
						orderBy: "BOOK_PUBDATE desc", // 默认传这个值 为了与后台顺序一致
						pageNo: "1",
						pageSize: "10",
						searchText: null
					},
					listType: '', // 列表有两种类型： ‘colId’按栏目查、‘cascadId’按分类查
					showNum: 3,
					title: {
						isShow: true,
						name: '新书榜'
					},
					toMoreList: {//‘更多链接’的配置
						isShow: true,//是否显示
						url: './bookrankmore.html',//链接
						keys: {//动态参数，左为参数名，右为内部数据的字段名
							orderBy: 'orderParam'
						},
						fixedKeys: {//固定参数，左为参数名，右为参数值，可自行扩展。

						}
					},
					showItem: ['picture', 'bookname', 'author', 'abstract'], // 控制显示哪些项
					display: {  // template 固定显示内容
						author: '作者：',
					},
					keys: { // 接口请求字段兼容
						picture: 'pub_picSmall', // 封面图
						bookname: 'pub_resource_name', // 书名
						author: 'BOOK_SYS_AUTHORS', // 作者
						abstract: 'BOOK_SYNOPSIS', // 摘要
						price: 'prod_member_price', // 价格
					},
					eveName: "showSearchResult",// 搜索组件要传递搜索内容给搜索结果（即图书列表组件）组件，这里通过发广播的形式进行组件之间的通信
					toDetailType: {
						type: 'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
						phone: {
							functionName: 'appbook',/* app方法名 */
							values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
						},
						href: {/* 转跳页面 */
							url: './bookdetail.html',
							keys: {
								'pubId': 'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
							},
							fixedKeys: {
								'app': '1'/* 左侧为转跳参数；右侧为值 */
							}
						}
					},
				},
			}
		}
	},
	bookrankmore: {
		booklist: {
			booklist_01: {
				'moreRank': {
					url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
					params: {
						conditions: [
							{ pub_resource_type: "BOOK" },
							{ pub_status: "1" },
							{ pub_site_id: CONFIG.SITE_CONFIG.siteId },
						],
						groupBy: "pub_resource_id", // 为了去重
						orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc", // 默认传这个值 为了与后台顺序一致
						pageNo: "1",
						pageSize: "10",
						searchText: null
					},
					listType: '', // 列表有两种类型： ‘colId’按栏目查、‘cascadId’按分类查
					// showNum: 3,
					toMoreList: {//‘更多链接’的配置
						isShow: false,//是否显示
						url: './bookrankmore.html',//链接
						keys: {//动态参数，左为参数名，右为内部数据的字段名
							orderBy: 'orderParam'
						},
						fixedKeys: {//固定参数，左为参数名，右为参数值，可自行扩展。

						}
					},
					showItem: ['picture', 'bookname', 'author', 'abstract'], // 控制显示哪些项
					display: {  // template 固定显示内容
						author: '作者：',
					},
					keys: { // 接口请求字段兼容
						picture: 'pub_picSmall', // 封面图
						bookname: 'pub_resource_name', // 书名
						author: 'BOOK_SYS_AUTHORS', // 作者
						abstract: 'BOOK_SYNOPSIS', // 摘要
						price: 'prod_member_price', // 价格
					},
					eveName: "showSearchResult", // 搜索组件要传递搜索内容给搜索结果（即图书列表组件）组件，这里通过发广播的形式进行组件之间的通信,
					toDetailType: {
						type: 'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
						phone: {
							functionName: 'appbook',/* app方法名 */
							values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
						},
						href: {/* 转跳页面 */
							url: './bookdetail.html',
							keys: {
								'pubId': 'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
							},
							fixedKeys: {
								'app': '1'/* 左侧为转跳参数；右侧为值 */
							}
						}
					},
				}
			}
		}
	},
	classify: {
		classification: {
			classification_01: {
				queryClassification: {
					url: CONFIG.BASE_URL + "spc/prodb/treeByCode.do", // 请求分类
					params: {
						code: "BOOK",
					},
					keys: { // 字段兼容
						cascadeId: "cascadeId", // 分类Id
						text: "text", // 分类名
						children: "children", // 分类下的子类
					},
					toClassifyBookUrl: '../pages/classifybook.html'
				},
				queryCount: {
					url: CONFIG.BASE_URL + "spc/cms/publish/listCount.do", // 各个分类下对应有几本书
					params: {
						conditions: '[{pub_resource_type:"BOOK"},{pub_status:"1"},{pub_site_id:"' + CONFIG.SITE_CONFIG.siteId + '"},{BOOK_BOOK_CASCADID:"",op:"lk"}]',
						facetFields: "BOOK_BOOK_CASCADID_1",  // 按书分类ID查询
						groupBy: "pub_resource_id", // 为了去重
						orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc", // 默认传这个值 为了与后台顺序一致
						pageNo: "1",
						pageSize: "10",
						searchText: null
					},
				}

			}
		}
	},
	classifybook: {
		booklist: {
			booklist_01: {
				"class": {
					url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
					params: {
						conditions: [
							{ pub_resource_type: "BOOK" },
							{ pub_status: "1" },
							{ pub_site_id: CONFIG.SITE_CONFIG.siteId },
						],
						groupBy: "pub_resource_id", // 为了去重
						orderBy: "BOOK_PUBDATE desc", // 默认传这个值 为了与后台顺序一致
						pageNo: "1",
						pageSize: "10",
						searchText: null
					},
					listType: 'cascadId', // 列表有两种类型： ‘colId’按栏目查、‘cascadId’按分类查
					showItem: ['picture', 'bookname', 'author', 'abstract', 'price'], // 控制显示哪些项
					display: { // template 固定显示内容
						author: '作者：',
					},
					keys: { // 接口请求字段兼容
						picture: 'pub_picSmall', // 封面图
						bookname: 'pub_resource_name', // 书名
						author: 'BOOK_SYS_AUTHORS', // 作者
						abstract: 'BOOK_SYNOPSIS', // 摘要
						price: 'prod_member_price', // 价格
					},
					classifyArr: ['JAVA', 'C', 'JavaScript', '线性代数', '高等数学'],
					queryClassification: {
						url: CONFIG.BASE_URL + "spc/prodb/treeByCode.do", // 请求分类
						params: {
							code: "BOOK",
						},
						keys: { // 字段兼容
							cascadeId: "cascadeId", // 分类Id
							text: "text", // 分类名
							children: "children", // 分类下的子类
						},
						toClassifyBookUrl: '../pages/classifybook.html'
					},
					toDetailType: {
						type: 'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
						phone: {
							functionName: 'appbook',/* app方法名 */
							values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
						},
						href: {/* 转跳页面 */
							url: './bookdetail.html',
							keys: {
								'pubId': 'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
							},
							fixedKeys: {
								'app': '1'/* 左侧为转跳参数；右侧为值 */
							}
						}
					},
				}
			}
		}
	},
	common: {
		navigation: {
			navigation_01: {
				left: {
					url: "",
					icon: "el-icon-arrow-left"
				},
				right: {
					url: "../pages/search.html",
					icon: "el-icon-search"
				}
			}
		}
	},
	index: {
		list: {
			ui_mobile_list_01: {
				'zhongbang': {
					getList: {
						url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
						params: { /* 参数配置 */
							conditions: [ /* 条件配置 */ {
								pub_resource_type: 'BOOK'
							},
							{
								pub_status: '1'
							},
							{
								pub_site_id: '5'
							},
							{
								pub_col_id: 104
							}
							],
							groupBy: "pub_resource_id",
							orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
							pageNo: "1",
							pageSize: "10",
							searchText: "",
						},
						keys: {
							id: 'id',
							title: "BOOK_SYS_TOPIC",
							pic: 'pub_picBig',
							author: 'BOOK_SYS_AUTHORS',
						}
					},
					getColDetail: {
						url: CONFIG.BASE_URL + 'spc/cms/col/getColumnByIdForSite',
						params: {
							colId: 104
						},
						keys: {
							id: 'id',
							name: 'name',
						}
					},
					toMoreList: {
						url: './booklist.html'
					},
					toDetailType: {
						type: 'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
						phone: {
							functionName: 'appbook',/* app方法名 */
							values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
						},
						href: {/* 转跳页面 */
							url: './bookdetail.html',
							keys: {
								'pubId': 'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
							},
							fixedKeys: {
								'app': '1'/* 左侧为转跳参数；右侧为值 */
							}
						}
					},
				},
				'xinshu': {
					getList: {
						url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
						params: { /* 参数配置 */
							conditions: [ /* 条件配置 */ {
								pub_resource_type: 'BOOK'
							},
							{
								pub_status: '1'
							},
							{
								pub_site_id: '5'
							},
							{
								pub_col_id: 106
							}
							],
							groupBy: "pub_resource_id",
							orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
							pageNo: "1",
							pageSize: "10",
							searchText: "",
						},
						keys: {
							id: 'id',
							title: "BOOK_SYS_TOPIC",
							pic: 'pub_picBig',
							author: 'BOOK_SYS_AUTHORS',
						}
					},
					getColDetail: {
						url: CONFIG.BASE_URL + 'spc/cms/col/getColumnByIdForSite',
						params: {
							colId: 106
						},
						keys: {
							id: 'id',
							name: 'name',
						}
					},
					toMoreList: {
						url: './booklist.html'
					},
					toDetailType: {
						type: 'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
						phone: {
							functionName: 'appbook',/* app方法名 */
							values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
						},
						href: {/* 转跳页面 */
							url: './bookdetail.html',
							keys: {
								'pubId': 'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
							},
							fixedKeys: {
								'app': '1'/* 左侧为转跳参数；右侧为值 */
							}
						}
					},
				},
				'zuixin': {
					getList: {
						url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
						params: { /* 参数配置 */
							conditions: [ /* 条件配置 */ {
								pub_resource_type: 'BOOK'
							},
							{
								pub_status: '1'
							},
							{
								pub_site_id: '5'
							},
							{
								pub_col_id: 107
							}
							],
							groupBy: "pub_resource_id",
							orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
							pageNo: "1",
							pageSize: "10",
							searchText: "",
						},
						keys: {
							id: 'id',
							title: "BOOK_SYS_TOPIC",
							pic: 'pub_picBig',
							author: 'BOOK_SYS_AUTHORS',
						}
					},
					getColDetail: {
						url: CONFIG.BASE_URL + 'spc/cms/col/getColumnByIdForSite',
						params: {
							colId: 107
						},
						keys: {
							id: 'id',
							name: 'name',
						}
					},
					toMoreList: {
						url: './booklist.html'
					},
					toDetailType: {
						type: 'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
						phone: {
							functionName: 'appbook',/* app方法名 */
							values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
						},
						href: {/* 转跳页面 */
							url: './bookdetail.html',
							keys: {
								'pubId': 'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
							},
							fixedKeys: {
								'app': '1'/* 左侧为转跳参数；右侧为值 */
							}
						}
					},
				},
				'mianfei': {
					getList: {
						url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
						params: { /* 参数配置 */
							conditions: [ /* 条件配置 */ {
								pub_resource_type: 'BOOK'
							},
							{
								pub_status: '1'
							},
							{
								pub_site_id: '5'
							},
							{
								pub_col_id: 108
							}
							],
							groupBy: "pub_resource_id",
							orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
							pageNo: "1",
							pageSize: "10",
							searchText: "",
						},
						keys: {
							id: 'id',
							title: "BOOK_SYS_TOPIC",
							pic: 'pub_picBig',
							author: 'BOOK_SYS_AUTHORS',
						}
					},
					getColDetail: {
						url: CONFIG.BASE_URL + 'spc/cms/col/getColumnByIdForSite',
						params: {
							colId: 108
						},
						keys: {
							id: 'id',
							name: 'name',
						}
					},
					toMoreList: {
						url: './booklist.html'
					},
					toDetailType: {
						type: 'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
						phone: {
							functionName: 'appbook',/* app方法名 */
							values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
						},
						href: {/* 转跳页面 */
							url: './bookdetail.html',
							keys: {
								'pubId': 'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
							},
							fixedKeys: {
								'app': '1'/* 左侧为转跳参数；右侧为值 */
							}
						}
					},
				},
			},
			ui_mobile_list_03: {
				newbook: {
					url: CONFIG.BASE_URL+'spc/cms/publish/list.do',
					params: {
						conditions: '[{"pub_resource_type":"BOOK"},{"pub_status":"1"},{"pub_site_id":"5"},{"pub_col_id":110}]',
						groupBy: "pub_resource_id",
						orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
						pageNo: "1",
						pageSize: "10",
						searchText: "",
					},
					navUrl: CONFIG.BASE_URL+'spc/cms/col/getAllColBySiteId.do',
					navParams: {
						siteId: 5,
						chId: 0
					},
					keys: {
						pub_site_id: "pub_site_id",
						pub_picBig: "pub_picBig",
						id: "id"
					},
					colId: 110,
					title: '编辑力推超值好书',
					classFloat: 'left',
					titleColor: "#c40001",
					toDetailType: {
						type: 'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
						phone: {
							functionName: 'appbook',/* app方法名 */
							values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
						},
						href: {/* 转跳页面 */
							url: './bookdetail.html',
							keys: {
								'pubId': 'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
							},
							fixedKeys: {
								'app': '1'/* 左侧为转跳参数；右侧为值 */
							}
						}
					},
				},
				newfree: {
					url: CONFIG.BASE_URL+'spc/cms/publish/list.do',
					params: {
						conditions: '[{"pub_resource_type":"BOOK"},{"pub_status":"1"},{"pub_site_id":"5"},{"pub_col_id":111}]',
						groupBy: "pub_resource_id",
						orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
						pageNo: "1",
						pageSize: "10",
						searchText: "",
					},
					navUrl: CONFIG.BASE_URL+'spc/cms/col/getAllColBySiteId.do',
					navParams: {
						siteId: 5,
						chId: 0
					},
					keys: {
						pub_site_id: "pub_site_id",
						pub_picBig: "pub_picBig",
						id: "id"
					},
					colId: 111,
					title: '多种图书免费长读',
					classFloat: 'right',
					titleColor: "#4dbe6f",
					toDetailType: {
						type: 'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
						phone: {
							functionName: 'appbook',/* app方法名 */
							values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
						},
						href: {/* 转跳页面 */
							url: './bookdetail.html',
							keys: {
								'pubId': 'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
							},
							fixedKeys: {
								'app': '1'/* 左侧为转跳参数；右侧为值 */
							}
						}
					},
				},
				newsale: {
					url: CONFIG.BASE_URL+'/spc/cms/publish/list.do',
					params: {
						conditions: '[{"pub_resource_type":"BOOK"},{"pub_status":"1"},{"pub_site_id":"5"},{"pub_col_id":112}]',
						groupBy: "pub_resource_id",
						orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
						pageNo: "1",
						pageSize: "10",
						searchText: "",
					},
					navUrl: CONFIG.BASE_URL+'spc/cms/col/getAllColBySiteId.do',
					navParams: {
						siteId: 5,
						chId: 0
					},
					keys: {
						pub_site_id: "pub_site_id",
						pub_picBig: "pub_picBig",
						id: "id"
					},
					colId: 112,
					title: '特价好书买不停',
					classFloat: 'right',
					titleColor: "#54b1e1",
					toDetailType: {
						type: 'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
						phone: {
							functionName: 'appbook',/* app方法名 */
							values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
						},
						href: {/* 转跳页面 */
							url: './bookdetail.html',
							keys: {
								'pubId': 'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
							},
							fixedKeys: {
								'app': '1'/* 左侧为转跳参数；右侧为值 */
							}
						}
					},
				},

			}
		},
		header: {
			work_mobile_header_01: {
				display: [{ //控制头部菜单栏展示
					name: "推荐",
					url: "./index.html"
				}, {
					name: "榜单",
					url: "./bookrank.html"
				}, {
					name: "分类",
					url: "./classify.html"
				}],
				toSearch: "./search.html"
			}
		},
		swiper: {
			ui_mobile_swiper_02: {
				url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
				params: {
					conditions: '[{pub_resource_type:"BOOK"},{pub_status:"1"},{pub_site_id:"' + CONFIG.SITE_CONFIG.siteId + '"},{pub_col_id:133}]', //广告栏目id为133
					groupBy: "pub_resource_id",
					orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
					pageNo: "1",
					pageSize: "10",
					searchText: "",
				},
				keys: { //接口字段兼容
					pic: "pub_picBig",
				},
				maxNum: 1, // 取多少个数据
			},
			ui_mobile_swiper_01: {
				'top': {
					toDetailType: {
						type: 'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
						phone: {
							functionName: 'appbook',/* app方法名 */
							values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
						},
						href: {/* 转跳页面 */
							url: './bookdetail.html',
							keys: {
								'pubId': 'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
							},
							fixedKeys: {
								'app': '1'/* 左侧为转跳参数；右侧为值 */
							}
						}
					},
					getList: {
						url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
						params: {/* 参数配置 */
							conditions: [/* 条件配置 */
								{ pub_resource_type: 'BOOK' },
								{ pub_status: '1' },
								{ pub_site_id: '5' },
								{ pub_col_id: 132 }
							],
							groupBy: "pub_resource_id",
							orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
							pageNo: "1",
							pageSize: "10",
							searchText: "",
						},
						keys: {
							id: 'id',
							pic: 'pub_picBig',
							poster: 'pub_POSTER'
						}
					},
				}
			}
		}
	}
};
