var CONFIG = {
	"BASE_URL": "http://172.19.57.71:8080/portal/api/",
	// "BASE_URL": "http://172.19.36.97:9092/spc-portal-web/",

	"READ_URL": "../../../reader/kspdf/read.jsp",
	"GO_CONTRIBUTE_URL": "http://172.19.57.168:8989/wenlian/ssoWenlianLogin.do?",
	"PAGE_MANAGEMENT_URL": "../../../frontend-api/api/",
	"SITE_CONFIG": {
		"siteId": 33,
		"chId": 0
	},
	"READ_CONFIG": {
		"siteType": 0
	},
	"CRUMB_TYPE": [{
		"name": "author",
		"title": "作者详情"
	}, {
		"name": "editor",
		"title": "编辑详情"
	}, {
		"name": "aboutus",
		"title": "关于我们"
	}],
	"BOOK_LIST_TYPE": {
		"_2_COLS": [363],
		"_3_COLS": [0, 362, 364]
	}
}
var $_$ = {
	"bookContentType": {
		"bookType": "91",
		"ebookType": "94"
	},
	"indexPage": {
		"authorMoreHref": "./authorlist.html"
	},
	"SITE_NAME": "site-101",
	"IS_DISABLE": false,
	"activity": {
		"swiper": {
			"swiper_07": {
				"getListData": {
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": "[{pub_col_id:'1284'}]",
						"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
						"pageNo": "1",
						"pageSize": "15",
						"searchText": null
					},
					"keys": {
						"bigPicture": "pub_picBig",
						"pubId": "id",
						"sourceUrl": "information_a_sourceUrl"
					}
				},
				"getRelatedData": {
					"url": "spc/cms/publish/relatedZX.do",
					"params": {
						"pubId": ""
					},
					"toDetailurl": "../pages/informationdetail.html?pubId="
				},
				"height": "360px",
				"interval": 5000,
				"linkType": ""
			},
			"pic_01": {
				"height": "360px",
				"interval": 5000,
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": "[{'pub_col_id':'1284'}]",
					"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": null
				},
				"sysAdapter": "sykAdapter",
				"typeAdapter": "newsAdapter",
				"showItem": ["button"],
				"complicatedItem": [{
					"name": "button",
					"field": "resName",
					"display": "",
					"method": "toDetail"
				}],
				"toDetail": {
					"url": "../pages/informationdetail.html",
					"dataKeys": {
						"pubId": "id"
					},
					"fixedKeys": {}
				},
				"staticText": {
					"noImg": "暂无图片",
					"noDate": "暂无日期",
					"yuan": "￥"
				}
			}
		},
		"list_pic": {
			"ui_list_pic_22": {
				"url": "spc/cms/col/getColNextLevelNode",
				"params": {
					"colId": "1265"
				},
				"activityListUrl": "./activitylist.html",
				"keys": {
					"pub_picMiddle": "pub_picMiddle",
					"id": "id",
					"PORTAL_ACTIVITY_SYS_TOPIC": "PORTAL_ACTIVITY_SYS_TOPIC",
					"PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW": "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
					"PORTAL_ACTIVITY_END_TIMESTAMPNEW": "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
					"reviewDate": "PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW",
					"small_pic": "small_pic",
					"name": "name",
					"contentCode": "contentCode"
				},
				"getActivityList": {
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": [{
							"pub_col_id": "253"
						}],
						"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
						"pageNo": "1",
						"pageSize": "3",
						"searchText": null
					},
					"detailHref": {
						"activityrace": "./activityrace.html",
						"activityvote": "./activityvote.html",
						"activityshow": "./activityshow.html"
					},
					"baseKeys": {
						"id": "id",
						"resourceType": "pub_resource_type",
						"pub_picMiddle": "pub_picMiddle"
					},
					"keys": {
						"contribute": {
							"topic": "PORTAL_ACTIVITY_SYS_TOPIC",
							"beginTime": "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
							"endTime": "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
							"reviewDate": "PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW"
						},
						"vote": {
							"topic": "PORTAL_VOTEACTIVITY_SYS_TOPIC",
							"beginTime": "PORTAL_VOTEACTIVITY_BEGIN_TIMESTAMPNEW",
							"endTime": "PORTAL_VOTEACTIVITY_END_TIMESTAMPNEW",
							"reviewDate": ""
						},
						"show": {
							"topic": "PORTAL_SHOWACTIVITY_SYS_TOPIC",
							"beginTime": "",
							"endTime": "",
							"reviewDate": ""
						}
					}
				},
				"baseKeys": {
					"id": "id",
					"resourceType": "pub_resource_type",
					"pub_picMiddle": "pub_picMiddle"
				},
				"showActivityTypeStr": "PORTAL_ACTIVITY",
				"staticText": {
					"activityTime": "活动时间：",
					"seeMore": "查看更多...",
					"noImg": "暂无图片",
					"to": "至",
					"notBegin": "未开始",
					"inProgress": "进行中",
					"appraisalBonus": "评奖中",
					"haveFinished": "已结束",
					"noDate": "暂无日期"
				}
			}
		}
	},
	"activityrace": {
		"common": {
			"vote_03": {
				"url": "spc/prodb/activity/vote.do?",
				"params": {
					"browserId": "",
					"docID": ""
				}
			}
		},
		"activityDetail": {
			"work_activitydetail_01": {
				"url": "spc/cms/publish/detail.do",
				"keys": {
					"title": "PORTAL_ACTIVITY_SYS_TOPIC",
					"content": "PORTAL_ACTIVITY_DESCRIPTION",
					"startDate": "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
					"endDate": "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
					"resourceId": "pub_resource_id",
					"illustration": "pub_illustration",
					"reviewDate": "PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW",
					"requestUrlParam_pubId": "pubId",
					"toUploadPageUrlParam_docId": "docId",
					"illustrationLinks": "PORTAL_ACTIVITY_ACTIVITY_LINKS"
				},
				"eventName_loadedDatas": "eventName_loadedDatas",
				"toUploadPagUrl": "./uploadproduction.html",
				"staticText": {
					"uploadWork": "上传作品",
					"notBegin": "未开始",
					"contributeClosed": "截止投稿",
					"haveEnded": "已结束"
				}
			},
			"work_activitydetail_02": {
				"module1": {
					"url": "spc/prodb/getPublicize.do",
					"topic": "活动方案",
					"keys": {
						"topic": "topic",
						"content": "content",
						"eventName_listen_resourceId": "pub_resource_id",
						"eventName_listen_resourceType": "pub_resource_type",
						"requestUrlParam_docId": "docID",
						"requestUrlParam_code": "code"
					},
					"eventName_listen": "eventName_loadedDatas"
				},
				"activityProductWinning_fuwen": {
					"url": "spc/prodb/getPublicize.do",
					"topic": "获奖结果",
					"keys": {
						"topic": "topic",
						"content": "content",
						"eventName_listen_resourceId": "pub_resource_id",
						"eventName_listen_resourceType": "pub_resource_type",
						"requestUrlParam_docId": "docID",
						"requestUrlParam_code": "code"
					},
					"eventName_listen": "eventName_loadedDatas"
				},
				"module": {
					"url": "spc/prodb/getPublicize.do",
					"showType": "simple",
					"topic": "奖项设置",
					"keys": {
						"topic": "topic",
						"content": "content",
						"eventName_listen_resourceId": "pub_resource_id",
						"eventName_listen_resourceType": "pub_resource_type",
						"requestUrlParam_docId": "docID",
						"requestUrlParam_code": "code"
					},
					"eventName_listen": "loadSearchResult"
				}
			},
			"work_activitydetail_03": {
				"url": "spc/prodb/activity/activityNews.do",
				"getPicUrl": "dynamicFile/stream.do",
				"params": {
					"getListParam_pageNo": "1",
					"getListParam_pageSize": "99",
					"getListParam_orderBy": "SYS_DOCUMENTID DESC"
				},
				"keys": {
					"title": "SYS_TOPIC",
					"picId": "COVERID",
					"date": "SYS_CREATED",
					"abstract": "ABSTRACT",
					"eventListenData_activityId": "pub_resource_id",
					"getPicParam_coverId": "recordID",
					"getListParam_activityID": "activityID",
					"getListParam_pageNo": "page",
					"getListParam_pageSize": "pageSize",
					"getListParam_orderBy": "orderBy"
				},
				"toDetailMode": {
					"href": {
						"url": "./newsdetail.html",
						"params": {
							"docID": "SYS_DOCUMENTID"
						},
						"activityParams": {
							"activityID": "pub_resource_id"
						},
						"fixedParams": {
							"page": "1",
							"pageSize": "99",
							"orderBy": "SYS_DOCUMENTID DESC"
						}
					},
					"type": "href",
					"event": {
						"name": "eventName_toNewsDetail"
					}
				},
				"eventName_listen": "eventName_loadedDatas"
			},
			"work_activitydetail_04": {
				"url": "spc/prodb/detail.do",
				"getSchoolUrl": "spc/prodb/searchNL.do",
				"params": {
					"getPlaceRequest_doclibCode": "PORTAL_ACTIVITY",
					"getSchoolRequest_doclibCode": "PORTAL_SCHOOL",
					"getSchoolRequest_relations": "1,1",
					"getSchoolRequest_cols": "AREA,CLASS",
					"getSchoolRequest_symbols": "1,1"
				},
				"keys": {
					"output_place": "place",
					"output_school": "school",
					"output_group": "group",
					"output_searchText": "searchText",
					"output_author": "author",
					"output_idCard": "idCard",
					"school_name": "SYS_TOPIC",
					"eventData_docID": "pub_resource_id",
					"getPlaceRequest_doclibCode": "doclibCode",
					"getPlaceRequest_docID": "docID",
					"getPlaceRequestBack_areas": "AREALIMT",
					"getPlaceRequestBack_classes": "CLASSLIMT",
					"getSchoolRequest_doclibCode": "doclibCode",
					"getSchoolRequest_relations": "relations",
					"getSchoolRequest_cols": "cols",
					"getSchoolRequest_symbols": "symbols",
					"getSchoolRequest_vals": "vals"
				},
				"eventName_search": "eventName_search",
				"eventName_listenLoadedData": "eventName_loadedDatas",
				"cascaderConfig": {
					"splitTag": {
						"item": ";",
						"category": "~"
					}
				},
				"showItem": ["place", "group", "school", "topic", "author"]
			},
			"work_activitydetail_05": {
				"module1": {
					"url": "spc/prodb/getWorkList.do",
					"toProductDetailUrl": "productiondetail.html",
					"params": {
						"getListParam_doclibCode": "PORTAL_WORKS",
						"getListParam_orderCondition": " BY_SPC_SYS_DOCUMENTID_SPC_DESC",
						"getListParam_pageNo": "1",
						"getListParam_pageSize": "15",
						"getListParamOptions": {
							"activityId": {
								"getListParam_relations": "1",
								"getListParam_cols": "ACTIVITYID",
								"getListParam_symbols": "2",
								"getListParam_memberType": "4"
							},
							"place": {
								"getListParam_relations": "1",
								"getListParam_cols": "AREA",
								"getListParam_symbols": "1",
								"getListParam_memberType": "4"
							},
							"school": {
								"getListParam_relations": "1",
								"getListParam_cols": "SCHOOL",
								"getListParam_symbols": "1",
								"getListParam_memberType": "4"
							},
							"group": {
								"getListParam_relations": "1",
								"getListParam_cols": "CLASS",
								"getListParam_symbols": "1",
								"getListParam_memberType": "4"
							},
							"searchText": {
								"getListParam_relations": "1",
								"getListParam_cols": "SYS_TOPIC",
								"getListParam_symbols": "1",
								"getListParam_memberType": "4"
							},
							"author": {
								"getListParam_relations": "1",
								"getListParam_cols": "POTHUNTER_NAME",
								"getListParam_symbols": "1",
								"getListParam_memberType": "4"
							},
							"idCard": {
								"getListParam_relations": "1",
								"getListParam_cols": "POTHUNTER_IDNUMBER",
								"getListParam_symbols": "2",
								"getListParam_memberType": "4"
							}
						},
						"getListParamOptions_fixed": {
							"SYS_CURRENTSTATUS": {
								"getListParam_relations": "1",
								"getListParam_cols": "SYS_CURRENTSTATUS",
								"getListParam_symbols": "3",
								"getListParam_memberType": "4",
								"getListParam_vals": "未审核"
							},
							"SYS_CURRENTSTATUS_1": {
								"getListParam_relations": "1",
								"getListParam_cols": "SYS_CURRENTSTATUS",
								"getListParam_symbols": "3",
								"getListParam_memberType": "4",
								"getListParam_vals": "未通过审核"
							}
						},
						"toProductDetailParam_resourceType": "PORTAL_WORKS"
					},
					"keys": {
						"title": "SYS_TOPIC",
						"author": "POTHUNTER_NAME",
						"date": "SYS_CREATED",
						"abstract": "DESCRIPTION",
						"teacherCommentNum": "DIS_COUNT_NUM",
						"voteNum": "VOTE_COUNT",
						"resourceId": "SYS_DOCUMENTID",
						"resourceName": "SYS_TOPIC",
						"activityId": "ACTIVITYID",
						"voteDescription": "PORTAL_ACTIVITY_PRAISE_DESCRIPTION",
						"eventListienLoadDatas_activityId": "pub_resource_id",
						"eventListienLoadDatas_voteSwitch": "PORTAL_ACTIVITY_PRAISE_SWITCH",
						"eventListienLoadDatas_endDate": "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
						"eventListienLoadDatas_voteDescription": "PORTAL_ACTIVITY_PRAISE_DESCRIPTION",
						"eventListienLoadDatas_reviewDate": "PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW",
						"eventListienLoadDatas_startDate": "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
						"eventListienSearchDatas": ["place", "school", "group", "searchText", "author", "idCard"],
						"getListParam_doclibCode": "doclibCode",
						"getListParam_relations": "relations",
						"getListParam_cols": "cols",
						"getListParam_symbols": "symbols",
						"getListParam_vals": "vals",
						"getListParam_memberType": "memberType",
						"getListParam_pageNo": "page",
						"getListParam_pageSize": "size",
						"getListParam_orderCondition": "orderCondition",
						"toProductDetailParam_resourceType": "resourceType",
						"toProductDetailParam_resourceId": "resourceId",
						"toProductDetailParam_colId": "colId",
						"toProductDetailParam_resourceName": "resourceName",
						"toProductDetailParam_activityId": "activityId"
					},
					"eventName_listenLoadedData": "eventName_loadedDatas",
					"eventName_listenSearch": "eventName_search",
					"isDevelopment": false,
					"classification": {
						"titles": ["一等奖", "二等奖", "三等奖"],
						"key": "AWARD"
					},
					"getAwardList": {
						"url": "spc/prodb/searchNL.do",
						"params": {
							"doclibCode": "PORTAL_AWARD",
							"relations": 1,
							"cols": "ACTIVITYID",
							"symbols": 2,
							"vals": "",
							"status": 0,
							"page": 1,
							"size": 99,
							"pageable": 1
						}
					},
					"listTitle": ""
				},
				"module2": {
					"url": "spc/prodb/getWorkList.do",
					"toProductDetailUrl": "productiondetail.html",
					"params": {
						"getListParam_doclibCode": "PORTAL_WORKS",
						"getListParam_orderCondition": " BY_SPC_SYS_DOCUMENTID_SPC_DESC",
						"getListParamOptions": {
							"activityId": {
								"getListParam_relations": "1",
								"getListParam_cols": "ACTIVITYID",
								"getListParam_symbols": "2",
								"getListParam_memberType": "4"
							}
						},
						"getListParamOptions_fixed": {
							"IS_EXCELLENTWORK": {
								"getListParam_relations": "1",
								"getListParam_cols": "IS_EXCELLENTWORK",
								"getListParam_symbols": "2",
								"getListParam_memberType": "4",
								"getListParam_vals": "是"
							},
							"SYS_CURRENTSTATUS": {
								"getListParam_relations": "1",
								"getListParam_cols": "SYS_CURRENTSTATUS",
								"getListParam_symbols": "3",
								"getListParam_memberType": "4",
								"getListParam_vals": "未审核"
							}
						},
						"toProductDetailParam_resourceType": "PORTAL_WORKS"
					},
					"keys": {
						"title": "SYS_TOPIC",
						"author": "POTHUNTER_NAME",
						"date": "SYS_CREATED",
						"abstract": "DESCRIPTION",
						"teacherCommentNum": "DIS_COUNT_NUM",
						"voteNum": "VOTE_COUNT",
						"resourceId": "SYS_DOCUMENTID",
						"resourceName": "SYS_TOPIC",
						"activityId": "ACTIVITYID",
						"eventListienLoadDatas_activityId": "pub_resource_id",
						"eventListienSearchDatas": [],
						"getListParam_doclibCode": "doclibCode",
						"getListParam_relations": "relations",
						"getListParam_cols": "cols",
						"getListParam_symbols": "symbols",
						"getListParam_vals": "vals",
						"getListParam_memberType": "memberType",
						"getListParam_orderCondition": "orderCondition",
						"toProductDetailParam_resourceType": "resourceType",
						"toProductDetailParam_resourceId": "resourceId",
						"toProductDetailParam_colId": "colId",
						"toProductDetailParam_resourceName": "resourceName",
						"toProductDetailParam_activityId": "activityId"
					},
					"eventName_listenLoadedData": "eventName_loadedDatas",
					"eventName_listenSearch": "",
					"isDevelopment": false
				},
				"classification": {
					"url": "spc/prodb/getWorkList.do",
					"toProductDetailUrl": "productiondetail.html",
					"classification": {
						"titles": ["一等奖", "二等奖", "三等奖"],
						"key": "AWARD"
					},
					"params": {
						"getListParam_doclibCode": "PORTAL_WORKS",
						"getListParam_orderCondition": " BY_SPC_SYS_DOCUMENTID_SPC_DESC",
						"getListParamOptions": {
							"activityId": {
								"getListParam_relations": "1",
								"getListParam_cols": "ACTIVITYID",
								"getListParam_symbols": "2",
								"getListParam_memberType": "4"
							},
							"place": {
								"getListParam_relations": "1",
								"getListParam_cols": "AREA",
								"getListParam_symbols": "1",
								"getListParam_memberType": "4"
							},
							"school": {
								"getListParam_relations": "1",
								"getListParam_cols": "SCHOOL",
								"getListParam_symbols": "1",
								"getListParam_memberType": "4"
							},
							"group": {
								"getListParam_relations": "1",
								"getListParam_cols": "CLASS",
								"getListParam_symbols": "1",
								"getListParam_memberType": "4"
							},
							"searchText": {
								"getListParam_relations": "1",
								"getListParam_cols": "SYS_TOPIC",
								"getListParam_symbols": "1",
								"getListParam_memberType": "4"
							}
						},
						"toProductDetailParam_resourceType": "PORTAL_WORKS"
					},
					"keys": {
						"title": "SYS_TOPIC",
						"author": "POTHUNTER_NAME",
						"date": "SYS_CREATED",
						"abstract": "DESCRIPTION",
						"teacherCommentNum": "DIS_COUNT_NUM",
						"voteNum": "VOTE_COUNT",
						"resourceId": "SYS_DOCUMENTID",
						"resourceName": "SYS_TOPIC",
						"activityId": "ACTIVITYID",
						"eventListienLoadDatas_activityId": "pub_resource_id",
						"eventListienSearchDatas": ["place", "school", "group", "searchText"],
						"getListParam_doclibCode": "doclibCode",
						"getListParam_relations": "relations",
						"getListParam_cols": "cols",
						"getListParam_symbols": "symbols",
						"getListParam_vals": "vals",
						"getListParam_memberType": "memberType",
						"getListParam_orderCondition": "orderCondition",
						"toProductDetailParam_resourceType": "resourceType",
						"toProductDetailParam_resourceId": "resourceId",
						"toProductDetailParam_colId": "colId",
						"toProductDetailParam_resourceName": "resourceName",
						"toProductDetailParam_activityId": "activityId"
					},
					"eventName_listenLoadedData": "eventName_loadedDatas",
					"eventName_listenSearch": "",
					"isDevelopment": false,
					"getAwardList": {
						"url": "spc/prodb/searchNL.do",
						"params": {
							"doclibCode": "PORTAL_AWARD",
							"relations": 1,
							"cols": "ACTIVITYID",
							"symbols": 2,
							"vals": "",
							"status": 0,
							"page": 1,
							"size": 99,
							"pageable": 1
						}
					}
				}
			},
			"work_activitydetail_06": {
				"url": "comment/getActivityDiscussDetail.do",
				"params": {
					"paging_pageSizes": [15, 30, 50, 100],
					"requestParam_memberType": "4",
					"requestParam_pageNo": "1",
					"requestParam_pageSize": "15"
				},
				"keys": {
					"name": "userName",
					"picUrl": "picture",
					"commentProduct": "resourceName",
					"commentContent": "disContent",
					"requestParam_activityId": "activityId",
					"requestParam_memberType": "memberType",
					"requestParam_pageNo": "pageNo",
					"requestParam_pageSize": "pageSize",
					"eventName_listenData_activityId": "pub_resource_id"
				},
				"eventName_listen": "eventName_loadedDatas",
				"toProductDetail": {
					"url": "./productiondetail.html",
					"superKeys": {
						"activityId": "pub_resource_id"
					},
					"dataKeys": {
						"resourceId": "resourceId",
						"resourceName": "resourceName"
					},
					"fixKeys": {
						"resourceType": "PORTAL_WORKS",
						"colId": ""
					}
				}
			},
			"work_acitivityrace_07": {
				"tabArr": [{
					"tag": "activityInstructions",
					"title": "活动说明"
				}, {
					"tag": "activityPlan",
					"title": "活动方案"
				}, {
					"tag": "activityProductWinning_fuwen",
					"title": "获奖结果"
				}],
				"staticText": {
					"announcement": "公告",
					"displayExcellentWorks": "优秀作品展示",
					"yes": "是",
					"pleaseWaitForTheReview": "请等待评审"
				}
			}
		},
		"informationDetail": {
			"work_informationdetail_02": {
				"getDetailUrl": "spc/prodb/detail.do",
				"getPreAndNextUrl": "spc/prodb/activity/prevNextNews.do",
				"collectUrl": "collection/addWorkCollect.do",
				"attachUrl": "dynamicFile/file.do",
				"show": ["time", "collect", "share", "abstract", "download"],
				"attachTypeCode": "original",
				"params": {
					"getDetailRequestParam_doclibCode": "PORTAL_ACTIVITYNEWS"
				},
				"keys": {
					"topic": "SYS_TOPIC",
					"time": "SYS_CREATED",
					"content": "TEXTCONTENT",
					"resourceType": "doclibCode",
					"resourceId": "SYS_DOCUMENTID",
					"attachList": "ATTACH_LIST",
					"fileRecordID": "fileRecordID",
					"attachTypeCode": "attachTypeCode",
					"isCollect": "isCollect",
					"eventListenData_preNextConfig_activityId": "activityID",
					"eventListenData_preNextConfig_pageNo": "page",
					"eventListenData_preNextConfig_pageSize": "pageSize",
					"eventListenData_preNextConfig_orderBy": "orderBy",
					"getDetailRequestParam_doclibCode": "doclibCode",
					"getDetailRequestParam_docID": "docID",
					"getDetailRequestParam_loginName": "loginName",
					"getPreNextRequestParam_newsID": "newsID",
					"getPreNextRequestParam_activityId": "activityID",
					"getPreNextRequestParam_pageNo": "page",
					"getPreNextRequestParam_pageSize": "pageSize",
					"getPreNextRequestParam_orderBy": "orderBy",
					"preNextData_preId": "prev",
					"preNextData_nextId": "next",
					"getAttachParam_recordID": "recordID"
				},
				"driveMode": {
					"eventMode": {
						"listenEventName": "eventName_toNewsDetail",
						"dataKeys": {
							"docID": "SYS_DOCUMENTID"
						}
					}
				},
				"eventName_back": "eventName_backNewsList"
			}
		},
		"bookReview": {
			"work_bookreview_02": {
				"getParamType": "event",
				"listenEvent": {
					"name": "eventName_loadedDatas",
					"keys": {
						"pubId": "id",
						"colId": "pub_col_id",
						"resourceName": "pub_resource_name",
						"resourceType": "pub_resource_type",
						"resourceId": "pub_resource_id",
						"activityId": "id"
					}
				},
				"queryreview": {
					"url": "comment/comments.do",
					"params": {
						"pubId": "",
						"pageIndex": 1,
						"pageSize": 15,
						"siteId": 8
					},
					"reviewType": [{
						"type": "1",
						"name": "教师点评"
					}, {
						"type": "2",
						"name": "用户点评"
					}]
				},
				"addreview": {
					"url": "comment/addComment.do",
					"params": {
						"pubId": "",
						"loginName": "",
						"content": "",
						"siteId": 8,
						"starNum": "0",
						"deviceName": "PC",
						"parentId": "0",
						"type": "1",
						"colId": "",
						"memberType": "",
						"resourceName": "",
						"resourceType": "",
						"resourceId": ""
					}
				},
				"reviewType": "other"
			}
		}
	},
	"activitylist": {
		"list_pic": {
			"ui_list_pic_21": {
				"detailHref": {
					"activityrace": "./activityrace.html",
					"activityvote": "./activityvote.html",
					"activityshow": "./activityshow.html"
				},
				"baseKeys": {
					"id": "id",
					"resourceType": "pub_resource_type",
					"pub_picMiddle": "pub_picMiddle"
				},
				"keys": {
					"contribute": {
						"topic": "PORTAL_ACTIVITY_SYS_TOPIC",
						"beginTime": "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
						"endTime": "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
						"reviewDate": "PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW"
					},
					"vote": {
						"topic": "PORTAL_VOTEACTIVITY_SYS_TOPIC",
						"beginTime": "PORTAL_VOTEACTIVITY_BEGIN_TIMESTAMPNEW",
						"endTime": "PORTAL_VOTEACTIVITY_END_TIMESTAMPNEW",
						"reviewDate": ""
					},
					"show": {
						"topic": "PORTAL_SHOWACTIVITY_SYS_TOPIC",
						"beginTime": "",
						"endTime": "",
						"reviewDate": ""
					}
				},
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": "[{\"pub_col_id\":\"253\"}]",
					"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "8",
					"searchText": null
				},
				"pageSizes": [8, 16, 32, 48],
				"showItem": [],
				"getColDetail": {
					"url": "spc/cms/col/getColumnByIdForSite",
					"keys": {
						"name": "name"
					},
					"params": {
						"colId": "colId"
					}
				},
				"staticText": {
					"activityTime": "活动时间：",
					"to": "至",
					"noImg": "暂无图片",
					"notBegin": "未开始",
					"inProgress": "进行中",
					"appraisalBonus": "评奖中",
					"haveFinished": "已结束",
					"noDate": "暂无日期"
				}
			}
		},
		"advert": {
			"ui_advert_01": {
				"activitylist": {
					"getList": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": "[{pub_col_id:'274'}]",
							"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": null
						},
						"keys": {
							"pic": "pub_picBig",
							"sourceLink": "information_a_sourceUrl"
						}
					}
				}
			}
		},
		"common": {
			"work_common_06": {
				"name": {
					"getColDetail": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"keys": {
							"name": "name"
						},
						"params": {
							"colId": "colId"
						}
					},
					"showItem": ["title"]
				}
			}
		},
		"list_word": {
			"list_word_01": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": [{
						"pub_col_id": "1285"
					}],
					"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": null
				},
				"startNum": 0,
				"locationQuery": {
					"keys": {
						"colId": "columnId"
					}
				},
				"staticText": {
					"noDate": "暂无日期"
				}
			}
		}
	},
	"footer": {
		"navigation": {
			"navigation_03": {
				"url": "spc/cms/col/getColNextLevelNode",
				"params": {
					"colId": "520"
				},
				"targetType": "_blank",
				"getCols": {
					"url": "spc/cms/col/getAllColBySiteId",
					"type": "get",
					"params": {
						"siteId": "",
						"chId": "0"
					},
					"getGlobalParams": {
						"siteId": "siteId"
					},
					"keys": {
						"id": "id",
						"parentId": "parentId",
						"name": "name"
					}
				},
				"showType": {
					"parentId": "520",
					"showChildNav": [268]
				},
				"currentSelect": [{
					"id": "265",
					"htmls": ["index.html"]
				}, {
					"id": "266",
					"htmls": []
				}, {
					"id": "267",
					"htmls": []
				}, {
					"id": "268",
					"htmls": ["informationdetail.html", "informationlist.html"]
				}, {
					"id": "269",
					"htmls": []
				}, {
					"id": "270",
					"htmls": ["activity.html", "activityrace.html", "activitylist.html"]
				}]
			},
			"ui_navigation_04": {
				"totop": {
					"showItem": ["toTop"],
					"display": {
						"qq": "联系我们",
						"toTop": "返回顶部"
					},
					"toQQ": {
						"url": "http://wpa.qq.com/msgrd?v=3&uin=1148213245&site=qq&menu=yes"
					}
				},
				"modulename": {
					"showItem": ["QQ", "toTop"],
					"display": {
						"qq": "联系我们",
						"toTop": "返回顶部"
					},
					"toQQ": {
						"url": "http://wpa.qq.com/msgrd?v=3&uin=378365117&site=qq&menu=yes"
					}
				}
			}
		}
	},
	"header": {
		"navigation": {
			"navigation_02": {
				"toCartUrl": "../pages/shoppingcart.html",
				"tips": "我的购物车",
				"toLoginUrl": "../pages/login.html",
				"staticText": {
					"systemPrompt": "系统提示",
					"OK": "确定",
					"pleaseLoginFirst": "请您先登录"
				}
			},
			"navigation_03": {
				"url": "spc/cms/col/getColNextLevelNode",
				"params": {
					"colId": "257"
				}
			},
			"navigation_06": {
				"targetType": "_self",
				"getCols": {
					"url": "spc/cms/col/getAllColBySiteId",
					"type": "get",
					"params": {
						"siteId": "",
						"chId": "0"
					},
					"getGlobalParams": {
						"siteId": "siteId"
					},
					"keys": {
						"id": "id",
						"parentId": "parentId",
						"name": "name"
					}
				},
				"showType": {
					"parentId": "511",
					"showChildNav": [511]
				},
				"currentSelect": [{
					"id": "512",
					"htmls": ["index.html"]
				}, {
					"id": "513",
					"htmls": ["aboutUs.html"]
				}, {
					"id": "515",
					"htmls": ["bookstore.html"]
				}, {
					"id": "516",
					"htmls": ["ebookstore.html"]
				}, {
					"id": "517",
					"htmls": ["docCenter.html"]
				}, {
					"id": "518",
					"htmls": ["videos.html", "videodetail.html", "videoplay.html"]
				}, {
					"id": "1003",
					"htmls": ["activity.html"]
				}, {
					"id": "1059",
					"htmls": ["helpCenter.html"]
				}]
			}
		},
		"login": {
			"work_login_04": {
				"toLoginHref": "../pages/login.html",
				"toPersonalCenterHref": "../pages/personalcenter.html",
				"toExit": {
					"type": "href",
					"href": "../pages/login.html",
					"func": {
						"funcName": "",
						"params": []
					}
				},
				"toRegisterHref": "./register.html",
				"showItem": ["register"],
				"staticText": {
					"loginSys": "[登录]",
					"welcomeBack": "欢迎回来！",
					"exit": "退出",
					"register": "注 册"
				}
			}
		},
		"search": {
			"search_01": {
				"searchUrl": "../pages/search.html",
				"advSearchUrl": "../pages/searchadvanced.html",
				"searchConditionArr": []
			}
		},
		"classification": {
			"classification_02": {
				"url": "spc/prodb/treeByCode.do",
				"params": {
					"code": "BOOK",
					"layer": 2
				},
				"bookListUrl": "../pages/bookList.html"
			}
		},
		"ui_international": {
			"ui_international_01": {
				"header_cn": {
					"langsObj": [{
						"order": 1,
						"name": "朝鲜语",
						"lang": "ko",
						"href": "_k"
					}, {
						"order": 0,
						"name": "中文",
						"lang": "cn",
						"href": ""
					}]
				},
				"modulename": {
					"langsObj": [{
						"order": 0,
						"name": "中文",
						"lang": "cn",
						"href": "./test.html"
					}, {
						"order": 1,
						"name": "朝鲜语",
						"lang": "ko",
						"href": "./test_k.html"
					}]
				}
			}
		}
	},
	"header325": {
		"navigation": {
			"navigation_03": {
				"url": "spc/cms/col/getColNextLevelNode",
				"params": {
					"colId": "370"
				},
				"targetType": "_blank",
				"getCols": {
					"url": "spc/cms/col/getAllColBySiteId",
					"type": "get",
					"params": {
						"siteId": "",
						"chId": "0"
					},
					"getGlobalParams": {
						"siteId": "siteId"
					},
					"keys": {
						"id": "id",
						"parentId": "parentId",
						"name": "name"
					}
				},
				"showType": {
					"parentId": "370",
					"showChildNav": [268]
				},
				"currentSelect": [{
					"id": "371",
					"htmls": ["index.html", "personalcenter.html"]
				}, {
					"id": "372",
					"htmls": ["aboutUs.html"]
				}, {
					"id": "373",
					"htmls": ["informationdetail.html", "newslist.html"]
				}, {
					"id": "374",
					"htmls": ["ebook.html", "booklist.html"]
				}, {
					"id": "375",
					"htmls": []
				}, {
					"id": "376",
					"htmls": ["helpCenter.html"]
				}, {
					"id": "377",
					"htmls": ["contactInformation.html"]
				}, {
					"id": "378",
					"htmls": [""]
				}, {
					"id": "269",
					"htmls": []
				}, {
					"id": "270",
					"htmls": ["activity.html", "activityrace.html", "activitylist.html"]
				}]
			}
		}
	},
	"index": {
		"swiper": {
			"pic_noWords_04": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": "[{pub_col_id:'83'},{pub_site_id:29}]",
					"groupBy": "pub_resource_id",
					"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "16",
					"searchText": ""
				},
				"infoDetailHref": "../pages/informationInfo.html?pubId="
			},
			"pic_advert_05": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": "[{pub_col_id:'365'}, {pub_site_id: 29}]",
					"groupBy": "pub_resource_id",
					"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": ""
				},
				"infoUrlPrefix": "informationInfo.html?pubId="
			},
			"pic_01": {
				"height": "360px",
				"interval": 5000,
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": "[{'pub_col_id':'506'}]",
					"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": null
				},
				"sysAdapter": "sykAdapter",
				"typeAdapter": "newsAdapter",
				"showItem": ["button"],
				"complicatedItem": [{
					"name": "button",
					"field": "resName",
					"display": "",
					"method": "toDetail"
				}],
				"toDetail": {
					"url": "../pages/informationdetail.html",
					"dataKeys": {
						"pubId": "id"
					},
					"fixedKeys": {}
				},
				"staticText": {
					"noImg": "暂无图片",
					"noDate": "暂无日期",
					"yuan": "￥"
				}
			},
			"swiper_08": {
				"sygg": {
					"display": {},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": "[{pub_col_id: 1259}]",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 1,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter"
					},
					"imgMaxWidth": 300,
					"imgMaxHeight": 100,
					"toDetail": {
						"url": "",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "",
						"dataKeys": {
							"colId": "colId"
						},
						"fixedKeys": {}
					}
				},
				"modulename": {
					"display": {},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": "[{pub_col_id: 133}]",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 1,
						"maxNum": 4,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter"
					},
					"imgMaxWidth": 300,
					"imgMaxHeight": 100,
					"toDetail": {
						"url": "",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "",
						"dataKeys": {
							"colId": "colId"
						},
						"fixedKeys": {}
					},
					"staticText": {
						"noImg": "暂无图片"
					}
				}
			}
		},
		"list_pic": {
			"picListBookShow": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": "[{pub_col_id:'362'},{pub_status:'1'}]",
					"groupBy": "pub_resource_id",
					"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": ""
				},
				"href": "../../../reader/yuezhi/read.jsp",
				"bookDetail": "../pages/bookdetail.html?pubId=",
				"beginPicIndex": 2,
				"finishPicIndex": 8,
				"colId": "362",
				"READ_URL": ""
			},
			"picListRefinedBook": {
				"url": "spc/cms/publish/list.do",
				"param": {
					"conditions": "[{pub_col_id:'362'},{pub_status:'1'}]",
					"groupBy": "pub_resource_id",
					"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": ""
				},
				"baseURL": "../../../reader/yuezhi/read.jsp",
				"href": "./bookList.html?colId=",
				"bookDetail": "./bookdetail.html?pubId=",
				"colId": "362",
				"READ_URL": ""
			},
			"list_pic_24": {
				"url": "spc/cms/publish/list.do",
				"param": {
					"conditions": "[{pub_col_id:'362'},{pub_status:'1'},{pub_site_id:29}]",
					"groupBy": "pub_resource_id",
					"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": ""
				},
				"href": "./bookList.html?colId=",
				"colId": "362"
			},
			"ui_list_pic_22": {
				"url": "spc/cms/col/getColNextLevelNode",
				"params": {
					"colId": "367"
				},
				"activityListUrl": "./activitylist.html",
				"keys": {
					"small_pic": "small_pic",
					"id": "id",
					"name": "name"
				}
			},
			"list_pic_27": {
				"modulename": {
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": "[{pub_col_id:'437'},{pub_status:'1'}]",
						"groupBy": "pub_resource_id",
						"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
						"pageNo": "1",
						"pageSize": "15",
						"searchText": ""
					},
					"comTitle": {
						"isShow": true,
						"name": "免费专区"
					},
					"showItem": ["bookName", "starNum", "bookAuthor", "pressName", "pubDate", "price", "share", "buy", "review"],
					"display": {
						"bookAuthor": "作者：",
						"pressName": "出版社：",
						"pubDate": "出版时间：",
						"share": "分享",
						"buy": "购买",
						"review": "查看",
						"more": "MORE+"
					},
					"keys": {
						"bookName": "pub_resource_name",
						"starNum": "pub_star_num",
						"memberPrice": "prod_member_price",
						"ebPrice": "BOOK_EB_PRICE",
						"bookAuthor": "BOOK_SYS_AUTHORS",
						"pubId": "id",
						"contentType": "pub_content_type",
						"colId": "pub_col_id",
						"colName": "pub_col_name",
						"bookPic": "pub_picBig",
						"pressName": "BOOK_PRESS_NAME",
						"pubDate": "BOOK_PUBDATE"
					},
					"detailHref": "./bookdetail.html",
					"moreHref": "./bookList.html",
					"maxNum": 4
				}
			},
			"list_pic_29": {
				"splb": {
					"comTitle": {
						"isShow": true,
						"name": "视频讲座"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "| 查看更多>>",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "1000"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "1000"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 4,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "sourceUrl"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "sourceUrl"
						}]
					},
					"toDetail": {
						"url": "../pages/videodetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/videos.html",
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"pagination": {
						"showPagination": false,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"rmts": {
					"comTitle": {
						"isShow": true,
						"name": "热门推荐"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "| 查看更多 >>",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "503"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "503"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 8,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "",
							"field": "sysAuthors",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": ""
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/bookList.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"pagination": {
						"showPagination": false,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"zxdt": {
					"comTitle": {
						"isShow": true,
						"name": "最新动态"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "el-icon-back",
						"name": "更多动态 》",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "943"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "943"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 6,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "time",
							"field": "pubTime",
							"display": "",
							"method": ""
						}]
					},
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/helpCenter.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"pagination": {
						"showPagination": false,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"zxts": {
					"comTitle": {
						"isShow": true,
						"name": "新书推荐"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "| 查看更多>>",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "504"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "504"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 8,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": ""
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/bookList.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"pagination": {
						"showPagination": false,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "资讯"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "el-icon-back",
						"name": "更多",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "250"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "250"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 1,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}]
					},
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"onEvent": {
						"eventName": "showNavContent"
					},
					"pagination": {
						"showPagination": true,
						"pagesize": [15, 30, 50, 100]
					},
					"isMobileLoading": false,
					"toOrderByBtn": {
						"name": "排序：",
						"isShow": false,
						"itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
						"itemList": [{
							"name": "默认",
							"itemField": "pub_a_order asc pub_lastmodified desc id asc"
						}, {
							"name": "最新",
							"itemField": "pub_created asc id asc"
						}, {
							"name": "热门",
							"itemField": "pub_read_num asc id asc"
						}]
					},
					"staticText": {
						"noImg": "暂无图片",
						"noData": "暂无数据",
						"noDate": "暂无日期",
						"yuan": "￥"
					},
					"showSearchBtn": true
				}
			},
			"list_pic_33": {
				"xsph": {
					"comTitle": {
						"isShow": true,
						"name": "销售排行榜"
					},
					"toMoreBtn": {
						"isShow": false,
						"iconClass": "",
						"name": "更多>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "505"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "505"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": true,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "原价：",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/booklist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "销售排行榜"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "更多>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "131"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "131"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": false,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "pubId"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/booklist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140
				},
				"staticText": {
					"noData": "暂无数据",
					"noImg": "暂无图片"
				},
				"test": {
					"comTitle": {
						"isShow": true,
						"name": "销售排行榜"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "更多>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "131"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "131"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": false,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "pubId"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/booklist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140,
					"staticText": {
						"noData": "暂无数据",
						"noImg": "暂无图片",
						"yuan": "￥",
						"notHaveYet": "暂无",
						"noDate": "暂无日期"
					}
				}
			}
		},
		"list_word": {
			"list_word_02": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": [{
						"pub_col_id": "367"
					}],
					"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "5",
					"searchText": null
				},
				"startNum": 0,
				"locationQuery": {
					"keys": {
						"colId": "colId"
					}
				}
			}
		}
	},
	"ebook": {
		"list_pic": {
			"pic_info_list_12": {
				"url": "book/getBookDetail.do",
				"READ_URL": "",
				"introductionUrl": "spc/prodb/publicize.do",
				"params": {
					"pubId": "436",
					"loginName": "",
					"siteId": "29"
				},
				"introductionParams": {
					"doclibCode": "",
					"docID": ""
				},
				"moreUrl": "../pages/bookList.html?colId=436"
			},
			"star_pic_info_13": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": "[{pub_col_id:'436'},{pub_status:'1'}]",
					"groupBy": "pub_resource_id",
					"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc ",
					"pageNo": "1",
					"pageSize": "3"
				}
			},
			"picListBook": {
				"hotsalebank": {
					"title": "热销排行",
					"url": "spc/cms/publish/list.do",
					"param": {
						"conditions": "[{pub_col_id:'364'},{pub_status:'1'}]",
						"groupBy": "pub_resource_id",
						"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
						"pageNo": "1",
						"pageSize": "3",
						"searchText": ""
					},
					"href": "./bookdetail.html?pubId=",
					"params": {
						"conditions": "[{pub_col_id:'364'},{pub_status:'1'}]",
						"groupBy": "pub_resource_id",
						"orderBy": "pub_read_num desc",
						"pageNo": "1",
						"pageSize": "4",
						"searchText": ""
					}
				},
				"historyrecord": {
					"title": "浏览历史",
					"url": "browserHistory/getHistoryList.do",
					"params": {
						"num": 3,
						"username": "",
						"siteId": 29
					},
					"href": "./bookdetail.html?pubId="
				}
			},
			"popularBook": {
				"url": "spc/cms/publish/list.do",
				"param": {
					"condition": "[{pub_col_id:'57'},{pub_status:'1'}]",
					"groupBy": "pub_resource_id",
					"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": ""
				},
				"number": 15,
				"href": "./bookdetail.html?pubId="
			},
			"list_pic_27": {
				"freeBook": {
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": "[{pub_col_id:'437'},{pub_status:'1'}]",
						"groupBy": "pub_resource_id",
						"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
						"pageNo": "1",
						"pageSize": "15",
						"searchText": ""
					},
					"comTitle": {
						"isShow": true,
						"name": "免费专区"
					},
					"showItem": ["bookName", "starNum", "bookAuthor", "pressName", "pubDate", "price", "share", "buy", "review"],
					"display": {
						"bookAuthor": "作者：",
						"pressName": "出版社：",
						"pubDate": "出版时间：",
						"share": "分享",
						"buy": "购买",
						"review": "查看",
						"more": "MORE+"
					},
					"keys": {
						"bookName": "pub_resource_name",
						"starNum": "pub_star_num",
						"memberPrice": "prod_member_price",
						"ebPrice": "BOOK_EB_PRICE",
						"bookAuthor": "BOOK_SYS_AUTHORS",
						"pubId": "id",
						"contentType": "pub_content_type",
						"colId": "pub_col_id",
						"colName": "pub_col_name",
						"bookPic": "pub_picBig",
						"pressName": "BOOK_PRESS_NAME",
						"pubDate": "BOOK_PUBDATE"
					},
					"detailHref": "./bookdetail.html",
					"moreHref": "./bookList.html",
					"maxNum": 4
				},
				"freeBook2": {
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": "[{pub_col_id:'363'},{pub_status:'1'}]",
						"groupBy": "pub_resource_id",
						"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
						"pageNo": "1",
						"pageSize": "15",
						"searchText": ""
					},
					"comTitle": {
						"isShow": true,
						"name": "免费专区2"
					},
					"showItem": ["bookName", "starNum", "bookAuthor", "pressName", "pubDate", "price", "share", "buy", "review"],
					"display": {
						"bookAuthor": "作者：",
						"pressName": "出版社：",
						"pubDate": "出版时间：",
						"share": "分享",
						"buy": "购买",
						"review": "查看",
						"more": "MORE+"
					},
					"keys": {
						"bookName": "pub_resource_name",
						"starNum": "pub_star_num",
						"memberPrice": "prod_member_price",
						"ebPrice": "BOOK_EB_PRICE",
						"bookAuthor": "BOOK_SYS_AUTHORS",
						"pubId": "id",
						"contentType": "pub_content_type",
						"colId": "pub_col_id",
						"colName": "pub_col_name",
						"bookPic": "pub_picBig",
						"pressName": "BOOK_PRESS_NAME",
						"pubDate": "BOOK_PUBDATE"
					},
					"detailHref": "./bookdetail.html",
					"moreHref": "./bookList.html",
					"maxNum": 4
				},
				"modulename": {
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": "[{pub_col_id:'130'},{pub_status:'1'}]",
						"groupBy": "pub_resource_id",
						"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
						"pageNo": "1",
						"pageSize": "15",
						"searchText": ""
					},
					"comTitle": {
						"isShow": true,
						"name": "免费专区"
					},
					"showItem": ["bookName", "starNum", "bookAuthor", "pressName", "pubDate", "price", "share", "buy", "review"],
					"display": {
						"bookAuthor": "作者：",
						"pressName": "出版社：",
						"pubDate": "出版时间：",
						"share": "分享",
						"buy": "购买",
						"review": "查看",
						"more": "MORE+"
					},
					"keys": {
						"bookName": "pub_resource_name",
						"starNum": "pub_star_num",
						"memberPrice": "prod_member_price",
						"ebPrice": "BOOK_EB_PRICE",
						"bookAuthor": "BOOK_SYS_AUTHORS",
						"pubId": "id",
						"contentType": "pub_content_type",
						"colId": "pub_col_id",
						"colName": "pub_col_name",
						"bookPic": "pub_picBig",
						"pressName": "BOOK_PRESS_NAME",
						"pubDate": "BOOK_PUBDATE"
					},
					"detailHref": "./bookdetail.html",
					"moreHref": "./bookList.html",
					"maxNum": 4
				}
			}
		}
	},
	"common": {
		"list_pic": {
			"popularBook": {
				"url": "spc/cms/publish/list.do",
				"param": {
					"conditions": "[{pub_resource_type:\"BOOK\"},{pub_status:\"1\"},{pub_site_id:\"29\"},{pub_col_id:\"363\"}]",
					"groupBy": "pub_resource_id",
					"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": ""
				},
				"number": 15,
				"href": "./bookdetail.html?pubId="
			},
			"picListBook": {
				"hotsalebank": {
					"title": "热销排行",
					"url": "spc/cms/publish/list.do",
					"param": {
						"conditions": "[{pub_col_id:'364'},{pub_status:'1'}]",
						"groupBy": "pub_resource_id",
						"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
						"pageNo": "1",
						"pageSize": "4",
						"searchText": ""
					},
					"href": "./bookdetail.html?pubId=",
					"params": {
						"conditions": "[{pub_col_id:'364'},{pub_status:'1'}]",
						"groupBy": "pub_resource_id",
						"orderBy": "pub_read_num desc",
						"pageNo": "1",
						"pageSize": "4",
						"searchText": ""
					}
				},
				"historyrecord": {
					"title": "浏览历史",
					"url": "browserHistory/getHistoryList.do",
					"params": {
						"num": 3,
						"username": ""
					},
					"href": "./bookdetail.html?pubId="
				}
			},
			"refinedBook": {
				"url": "spc/cms/publish/list.do",
				"param": {
					"conditions": "[{pub_col_id:'59'},{pub_status:'1'}]",
					"groupBy": "pub_resource_id",
					"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": ""
				},
				"href": "./bookList.html?colId=",
				"colId": 59
			}
		}
	},
	"bookdetail": {
		"list_pic": {
			"picListBook": {
				"historyrecord": {
					"title": "浏览历史",
					"url": "browserHistory/getHistoryList.do",
					"params": {
						"num": 4,
						"username": ""
					},
					"href": "./bookdetail.html?pubId=",
					"getBookDetail": {
						"url": "book/getBookDetail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						}
					}
				},
				"hotsalebank": {
					"title": "热销排行",
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": "[{pub_col_id:'131'},{pub_status:'1'}]",
						"groupBy": "pub_resource_id",
						"orderBy": "pub_read_num desc",
						"pageNo": "1",
						"pageSize": "4",
						"searchText": ""
					},
					"href": "./bookdetail.html?pubId="
				}
			},
			"list_pic_16_relative": {
				"title": "相关图书",
				"url": "spc/cms/publish/related.do",
				"params": {
					"pubId": "",
					"size": 3
				}
			}
		},
		"book_detail": {
			"book_detail_02": {
				"buyBookUrl": "https://yanbiandaxuechubanshe.tmall.com/shop/view_shop.htm?spm=a220m.1000862.1000730.2.4bb914c5PYx6bM&user_number_id=3816921287&rn=7cd54fc003612de5db880f3c52e47abe?navColId=378",
				"probationUrl": "/ebook/read.jsp",
				"showInfoList": [{
					"title": "出版时间:",
					"key": "pubTime",
					"filter": true
				}, {
					"title": "出版社:",
					"key": "BOOK_PRESS_NAME",
					"filter": false
				}, {
					"title": "ISBN:",
					"key": "isbn",
					"filter": false
				}, {
					"title": "版次:",
					"key": "bookVersion",
					"filter": false
				}, {
					"title": "备注:",
					"key": "BOOK_REMARK",
					"filter": false
				}, {
					"title": "页数:",
					"key": "pageNums",
					"filter": false
				}, {
					"title": "字数:",
					"key": "bookWords",
					"filter": false
				}],
				"showItem": []
			}
		},
		"bookreview": {
			"bookreview_01": {
				"queryComments": {
					"url": "comment/comments.do",
					"params": {
						"pubId": "",
						"pageIndex": 1,
						"pageSize": 15,
						"siteId": 2
					}
				},
				"addComment": {
					"url": "comment/addComment.do",
					"params": {
						"pubId": "",
						"loginName": "",
						"content": "",
						"starNum": 0,
						"deviceName": "pc",
						"colId": "",
						"siteId": 2,
						"type": "1",
						"parentId": "0",
						"activityId": ""
					}
				},
				"pagination": {
					"showPagination": true,
					"pagesize": [15, 30, 50, 100]
				},
				"operList": {
					"like": {
						"likeShow": true
					},
					"review": {}
				},
				"orReGetMenberName": true,
				"toAddReview": {
					"toAddReviewShow": true,
					"toAddReviewName": "评论",
					"toAddReviewUrl": "../pages/reviewPublish.html"
				},
				"staticText": {
					"comments": "评论",
					"noHeadPicture": "暂无头像",
					"noComments": "暂无评论",
					"commentsEmptyInfo": "评论内容不能为空",
					"pleaseGradeBeforeSubmitting": "请先评分再提交评论~",
					"commentAddFailed": "评论添加失败",
					"contentBefore": "您还可以输入",
					"contentAfter": "个字"
				},
				"resourceDetail": {
					"sysAdapter": "sykAdapter",
					"typeAdapter": "bookAdapter",
					"isDiscussLimit": true
				}
			}
		},
		"work_bookdetail": {
			"work_bookdetail_04": {
				"bookdetail": {
					"getResourceDetail": {
						"url": "book/getBookDetail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"complicatedItem": {
							"first": [{
								"name": "img",
								"field": "picBig",
								"display": "",
								"method": "",
								"className": ""
							}],
							"five": [{
								"name": "button",
								"field": "resName",
								"display": "",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "sysAuthors",
								"display": "作者：",
								"method": "",
								"className": ""
							}],
							"second": [{
								"name": "bPrice",
								"field": "memberPrice",
								"display": "纸书售价：",
								"method": "",
								"className": ""
							}, {
								"name": "bPrice",
								"field": "salePrice",
								"display": "纸书原价：",
								"method": "",
								"className": ""
							}, {
								"name": "ebPrice",
								"field": "memberPrice",
								"display": "电子书售价：",
								"method": "",
								"className": ""
							}, {
								"name": "activity",
								"field": "activityList",
								"display": "促销：",
								"method": "",
								"className": ""
							}],
							"third": [{
								"name": "like",
								"field": "",
								"display": "点赞",
								"method": "collectOrLike",
								"className": "fa fa-thumbs-up"
							}, {
								"name": "collect",
								"field": "",
								"display": "收藏",
								"method": "collectOrLike",
								"className": "fa fa-heart"
							}, {
								"name": "share",
								"field": "",
								"display": "分享",
								"method": "",
								"className": "fa fa-share-alt"
							}],
							"four": [{
								"name": "status",
								"field": "",
								"display": "状态：",
								"method": "",
								"className": ""
							}, {
								"name": "probation",
								"field": "",
								"display": "免费试读",
								"method": "toProbation",
								"className": "fa fa-book"
							}, {
								"name": "addcart",
								"field": "",
								"display": "购买纸书",
								"method": "addCart",
								"className": "fa fa-shopping-cart"
							}, {
								"name": "addebcart",
								"field": "",
								"display": "购买电子书",
								"method": "addCart",
								"className": "fa fa-tablet"
							}],
							"six": [{
								"name": "",
								"field": "pressName",
								"display": "出版社：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "isbn",
								"display": "ISBN：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "bookVersion",
								"display": "版次：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "",
								"display": "纸张：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "fitment",
								"display": "包装：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "format",
								"display": "开本：",
								"method": "",
								"className": ""
							}, {
								"name": "time",
								"field": "pubdate",
								"display": "出版时间：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "language",
								"display": "正文语种：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "textNum",
								"display": "页数：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "",
								"display": "是否套装：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "bookwords",
								"display": "字数：",
								"method": "",
								"className": ""
							}]
						}
					},
					"toProbation": {
						"url": "../../../reader/ebook/read.jsp",
						"dataKeys": {
							"bookId": "resId",
							"bookName": "resName"
						},
						"fixedKeys": {
							"siteType": 0,
							"readType": 0
						}
					},
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 320,
					"infoImgHeight": 220,
					"tabConfigList": {
						"tabConfigshow": true,
						"tabShow": true,
						"reviewShow": true,
						"tabList": ["商品介绍", "商品讨论"],
						"tabActiveIndex": 0,
						"toAllReviewName": "查看全部评论",
						"toAllReviewMethod": {
							"method": "toReviewList"
						}
					},
					"getPublicizeInfo": {
						"url": "spc/prodb/publicize.do",
						"params": {
							"doclibCode": "BOOK",
							"docID": ""
						},
						"isShowPublicize": true,
						"showPublicize": ["内容介绍", "作者介绍", "译者简介", "目录"]
					},
					"getAudioAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": 33,
							"attachTypes": "audio"
						},
						"isShowAudio": false
					},
					"addCart": {
						"url": "cart/addCart.do",
						"params": {
							"number": "",
							"loginName": "",
							"activityId": 0,
							"pubId": "",
							"siteId": 33
						}
					},
					"collectOrLike": {
						"url": "collection/addCollect.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"operateType": 0,
							"productId": "",
							"siteId": 33
						}
					},
					"toReviewList": {
						"url": "../pages/reviewlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"bookContentType": {
						"bookType": "91",
						"ebookType": "94"
					},
					"toBuy": {
						"url": "../pages/bookBuy.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"judgeInventory": {
						"showInventory": true,
						"noPaperBook": "没有对应的纸质书",
						"lessInventory": "纸质书库存不足",
						"enoughInventory": "纸质书库存充足"
					},
					"staticText": {
						"noImg": "暂无图片",
						"noResource": "暂无",
						"quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
						"systemPrompt": "系统提示",
						"OK": "确定",
						"noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
						"noEBookInfo": "该书没有对应电子书，无法加入购物车"
					}
				},
				"modulename": {
					"getResourceDetail": {
						"url": "book/getBookDetail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "",
							"className": ""
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "",
							"className": ""
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "纸书售价：",
							"method": "",
							"className": ""
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "电子书售价：",
							"method": "",
							"className": ""
						}, {
							"name": "price",
							"field": "price",
							"display": "纸书原价：",
							"method": "",
							"className": ""
						}, {
							"name": "probation",
							"field": "",
							"display": "免费试读",
							"method": "toProbation",
							"className": "fas fa-book"
						}, {
							"name": "addcart",
							"field": "",
							"display": "加入购物车",
							"method": "addCart",
							"className": ""
						}, {
							"name": "addebcart",
							"field": "",
							"display": "电子书加入购物车",
							"method": "addCart",
							"className": ""
						}, {
							"name": "like",
							"field": "",
							"display": "点赞",
							"method": "collectOrLike",
							"className": "fas fa-thumbs-up"
						}, {
							"name": "collect",
							"field": "",
							"display": "收藏",
							"method": "collectOrLike",
							"className": "fas fa-heart"
						}, {
							"name": "share",
							"field": "",
							"display": "分享：",
							"method": "",
							"className": ""
						}]
					},
					"toProbation": {
						"url": "../../../reader/ebook/read.jsp",
						"dataKeys": {
							"bookId": "resId",
							"bookName": "resName"
						},
						"fixedKeys": {
							"siteType": 0,
							"readType": 0
						}
					},
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 320,
					"infoImgHeight": 220,
					"tabConfigList": {
						"tabShow": true,
						"reviewShow": true,
						"tabList": ["详情", "评论"],
						"tabActiveIndex": 0,
						"toAllReviewName": "查看全部评论",
						"toAllReviewMethod": {
							"method": "toReviewList"
						}
					},
					"getPublicizeInfo": {
						"url": "spc/prodb/publicize.do",
						"params": {
							"doclibCode": "BOOK",
							"docID": ""
						},
						"isShowPublicize": true,
						"showPublicize": ["前言", "内容简介", "目录"]
					},
					"getAudioAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": 33,
							"attachTypes": "audio"
						},
						"isShowAudio": true
					},
					"addCart": {
						"url": "cart/addCart.do",
						"params": {
							"number": "",
							"loginName": "",
							"activityId": 0,
							"pubId": "",
							"siteId": 33
						}
					},
					"collectOrLike": {
						"url": "collection/addCollect.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"operateType": 0,
							"productId": "",
							"siteId": 33
						}
					},
					"toReviewList": {
						"url": "../pages/reviewlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"toBuy": {
						"url": "../pages/bookBuy.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"staticText": {
						"noImg": "暂无图片",
						"noResource": "暂无",
						"quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
						"systemPrompt": "系统提示",
						"OK": "确定",
						"noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
						"noEBookInfo": "该书没有对应电子书，无法加入购物车"
					},
					"bugButton": {
						"display": "立即购买",
						"method": "toBuy",
						"display1": "加入书架",
						"method1": "toBuy",
						"display2": "开始阅读",
						"method2": "toProbation"
					},
					"bookContentType": {
						"bookType": "91",
						"ebookType": "94"
					},
					"getPubidByLocationQueryFromSyk": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"queryParams": {
							"title": "BOOK_SYS_TOPIC"
						}
					},
					"showDialog": false,
					"display": {
						"courseUseTime": "使用期限：",
						"buyCourse": "课程购买",
						"sure": "确认支付",
						"cancel": "取消",
						"needPay": "需支付：",
						"payWay": "支付方式",
						"zhifubao": "支付宝",
						"weixin": "微信",
						"drumpPage": "正在跳转支付页面..."
					},
					"getPayMethodsBySiteId": {
						"url": "cart/getPayMethod.do",
						"params": {
							"siteId": ""
						}
					},
					"commitOrderUrl": "order/submitSplitOrder.do",
					"combinateProductCfg": {
						"show": true,
						"title": "组合购买",
						"lastBtn": "加入购物车",
						"addCart": {
							"url": "cart/addCombinateProductToCart.do",
							"params": {
								"loginName": "",
								"siteId": 37,
								"combinateId": ""
							}
						},
						"toDetail": {
							"url": "booldetail.html",
							"params": {}
						}
					},
					"loginUrl": "../../pages/login.html",
					"judgeInventory": {
						"showInventory": true,
						"noPaperBook": "没有对应的纸质书",
						"lessInventory": "纸质书库存不足"
					},
					"zhentiContentType": "123",
					"isbnConfig": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_site_id": "37"
							}, {
								"pub_status": "1"
							}, {
								"BOOK_ISBN": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						}
					},
					"qrcodeHref": "../pages/qrcode.html?data=",
					"errorpageHref": "../pages/errorpage.html",
					"commitorderHref": "../pages/commitorder.html#/commitOrder/"
				},
				"staticText": {
					"noImg": "暂无图片",
					"noResource": "暂无",
					"quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
					"systemPrompt": "系统提示",
					"OK": "确定",
					"noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
					"noEBookInfo": "该书没有对应电子书，无法加入购物车"
				}
			}
		},
		"share": {
			"ui_share_01": {
				"bookdetailshare": {
					"shareLists": [{
						"title": "分享到微信",
						"class": "bds_weixin",
						"cmd": "weixin"
					}, {
						"title": "分享给QQ好友",
						"class": "bds_sqq",
						"cmd": "sqq"
					}, {
						"title": "分享到QQ空间",
						"class": "bds_qzone",
						"cmd": "qzone"
					}, {
						"title": "分享到新浪微博",
						"class": "bds_tsina",
						"cmd": "tsina"
					}, {
						"title": "更多",
						"class": "bds_more",
						"cmd": "more"
					}]
				},
				"modulename": {
					"shareLists": [{
						"title": "分享到QQ空间",
						"class": "bds_qzone",
						"cmd": "qzone"
					}, {
						"title": "分享到新浪微博",
						"class": "bds_tsina",
						"cmd": "tsina"
					}, {
						"title": "分享到腾讯微博",
						"class": "bds_tqq",
						"cmd": "tqq"
					}, {
						"title": "分享到人人网",
						"class": "bds_renren",
						"cmd": "renren"
					}]
				}
			}
		}
	},
	"personalCenter": {
		"personalcenter": {
			"personalcenter_01": {
				"navList": [{
					"title": "我的账号",
					"icon": "el-icon-edit",
					"tag": "account"
				}, {
					"title": "我的订单",
					"icon": "el-icon-goods",
					"tag": "list"
				}, {
					"title": "我的书架",
					"icon": "el-icon-tickets",
					"tag": "book"
				}, {
					"title": "收藏夹",
					"icon": "el-icon-star-on",
					"tag": "collecting"
				}, {
					"title": "我的投稿",
					"icon": "el-icon-service",
					"tag": "joinactivity"
				}],
				"subConfig": {
					"account": {
						"getMobileCode": {
							"url": "user/sendMessageYanBian.do"
						}
					},
					"collection": {
						"tabListShow": [{
							"title": "电子书",
							"type": "94"
						}, {
							"title": "纸质书",
							"type": "91"
						}]
					},
					"feedback": {
						"submitUrl": "spc/prodb/saveItem.do",
						"feedbackkeys": "QUE_CONTENT",
						"params": {
							"doclibCode": "QUE_ANS",
							"metaMap": {}
						}
					},
					"samplebook": {
						"getListUrl": "spc/prodb/searchNL.do",
						"doclibCode": "",
						"pageIndex": "1",
						"pageSize": "10"
					},
					"joinactivity": {
						"staticText": {
							"auditStatusScreening": "审核状态筛选",
							"unaudited": "未审核",
							"audited": "已审核",
							"inTheAward": "评奖中",
							"haveBeenAwardedPrize": "已评奖",
							"all": "全部",
							"managementEnrolment": "管理报名人",
							"participateInActivities": "参加活动",
							"activeState": "活动状态",
							"auditStatus": "审核状态",
							"titleOfWork": "作品标题",
							"contestant": "参赛人",
							"timeOfCompetition": "参赛时间",
							"identityCardNumberOfContestant": "参赛人身份证号",
							"awardSituation": "获奖情况",
							"operation": "操作",
							"failureToPassAudit": "未通过审核",
							"viewTheWork": "查看作品",
							"yes": "是",
							"hiddenWorks": "隐藏作品",
							"openWork": "公开作品",
							"newCompetitorInformation": "新增参赛人信息",
							"newPersonnel": "新增人员",
							"name": "姓名",
							"gender": " 性别",
							"male": "男",
							"female": "女",
							"identityCard": "身份证",
							"telephone": "电话",
							"cancel": "取 消",
							"confirm": "确 定",
							"contactInformation": "联系方式",
							"identityCardNumber": "身份证号码",
							"edit": "编辑",
							"delete": "删除",
							"return": "返回",
							"editCompetitorInformation": "编辑参赛人信息",
							"pleaseFillInTheContestants": "请填写参赛人",
							"pleaseFillInTheCorrectIdentityCardNumber": "请填写正确身份证号",
							"contactNumber": "联系电话",
							"pleaseFillInTheContactNumber": "请填写联系电话",
							"pleaseInputTheCorrectPhoneNumber": "请输入正确电话号",
							"pleaseEnterTheNameOfTheParticipant": "请输入参赛人姓名",
							"pleaseEnterTheIdentityCardNumberOfTheParticipant": "请输入参赛人身份证号",
							"pleaseEnterTheCellPhoneNumberOfTheCompetitor": "请输入参赛人手机号",
							"no": "否",
							"setSuccess": "设置成功!",
							"setFailed": "设置失败!",
							"participantsAddSuccess": "参赛人添加成功!",
							"areYouSureYouWantToDeleteTheCompetitorInformation": "您确定要删除该参赛人信息吗?",
							"systemHints": "系统提示",
							"informationDeletedSuccessfully": "信息删除成功!",
							"informationModifiedSuccessfully": "信息修改成功!",
							"finished": "已结束",
							"haveInHand": "进行中",
							"scoring": "评分中"
						}
					},
					"learning": {
						"tabListShow": [{
							"label": "音频",
							"productType": "183"
						}, {
							"label": "视频",
							"productType": "172"
						}, {
							"label": "课件",
							"productType": "185"
						}, {
							"label": "试题",
							"productType": "123"
						}],
						"defaultActive": "183",
						"staticText": {
							"noData": "暂无数据"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "",
						"getResourceLists": {
							"url": "/user/getBookShelfList.do",
							"params": {
								"loginName": "",
								"pageIndex": "1",
								"pageNo": "1",
								"pageSize": "10",
								"type": "2",
								"siteId": "",
								"productType": "",
								"status": "1"
							},
							"complicatedItem": [{
								"name": "img",
								"field": "productMidPic",
								"display": "",
								"method": "toDetail"
							}, {
								"name": "button",
								"field": "productName",
								"display": "",
								"method": "toDetail"
							}]
						},
						"toDetail": {
							"url": "../pages/videoDetail.html",
							"dataKeys": {
								"pubId": "pubId",
								"resType": "productResType"
							},
							"fixedKeys": {}
						},
						"pageSizes": [10, 20, 50, 100]
					},
					"list": {
						"exchangeState": false,
						"KDNConfig": false,
						"tabListShow": [{
							"title": "图书",
							"type": 94
						}, {
							"title": "期刊",
							"type": 91
						}, {
							"title": "知识服务",
							"type": 11
						}],
						"staticText": {
							"fullOrder": "全部订单",
							"waitForPayment": "等待付款",
							"startDate": "开始日期",
							"endDate": "结束日期",
							"selectTimeRange": "选择时间范围",
							"orderDetail": "订单详情",
							"number": "数量",
							"amountOfMoney": "金额",
							"orderNumber": "订单号",
							"subSingleNumber": "子单号",
							"pendingPayment": "订单状态：待付款",
							"cancelled": "订单状态：已取消",
							"undelivery": "订单状态：待收货",
							"completed": "订单状态：已完成",
							"noCover": "暂无封面",
							"noBookTitleForTheTimeBeing": "暂无书名",
							"author": "作者",
							"noAuthor": "暂无作者",
							"ebookOrder": "电子书订单",
							"paperBookOrder": "纸书订单",
							"money": "¥",
							"cancellationOfOrder": "取消订单",
							"deleteOrder": "删除订单",
							"seeDelivery": "查看物流",
							"recieved": "确认收货",
							"alreadyPaid": "已付款",
							"toBePaid": "待支付",
							"downloadCurrencyDeduction": "下载币抵扣",
							"activityRemission": "活动减免",
							"orderIsEmpty": "订单是空的~快去购买吧",
							"receiptInformation": "收货信息",
							"consignee": "收货人",
							"phone": "电话",
							"receivingAddress": "收货地址",
							"invoiceInformation": "发票信息",
							"invoiceType": "发票类型",
							"personal": "个人",
							"valueAddedTaxInvoice": "增值税发票",
							"invoicesTitle": "发票抬头",
							"invoiceContent": "发票内容",
							"detailsOfPayment": "支付详情",
							"paymentMethod": "支付方式",
							"weChatPayment": "微信支付",
							"alipay": "支付宝",
							"downloadedCurrency": "下载币",
							"commodityTotal": "商品总计",
							"freightTotal": "运费总计",
							"yuan": "元",
							"noteInformation": "备注信息",
							"returnGoods": "退货",
							"exchangeGoods": "换货",
							"return": "返回",
							"totalOrder": "订单总额：¥",
							"noPublication": "暂无刊名",
							"submission": "提交申请",
							"businessAudit": "商家审核",
							"userDelivery": "用户发货",
							"reviewOfRefunds": "审核退款",
							"completeTheReturnOfTheGoods": "完成退货",
							"completeTheReturnTransOfTheGoods": "完成换货",
							"commodityName": "商品名称",
							"purchaseQuantity": "购买数量",
							"orderTime": "下单时间",
							"returnQuantity": "退货数量",
							"returnTransQuantity": "换货数量",
							"problemDescription": "问题描述",
							"pleaseDescribeTheProblem": "请描述问题",
							"uploadPicture": "上传图片",
							"applicationForReturn": "申请退货",
							"applicationForReturnTrans": "申请换货",
							"lastWeek": "最近一周",
							"lastMonth": "最近一个月",
							"lastThreeMonths": "最近三个月",
							"upload5PicturesAtMost": "抱歉，最多上传5张图片",
							"pleaseUploadPngJpgOrBmpTypePictures": "请上传PNG、JPG或BMP类型图片",
							"uploadHeadImageSizeCanNotExceed5MB": "上传头像图片大小不能超过 5MB!",
							"receiptAddressMustNotBeEmpty": "收货地址不得为空噢",
							"failureToSubmitApplication": "抱歉，申请提交失败",
							"incorrectSubmissionOfOrders": "订单提交有误",
							"systemHints": "系统提示",
							"confirm": "确定",
							"abolishSuccess": "取消成功",
							"abolishFailed": "取消失败，请重试",
							"deleteSuccess": "删除成功",
							"deleteFailed": "删除失败，请重试"
						}
					},
					"afterservice": {
						"tabStateShow": [{
							"title": "全部状态",
							"type": ""
						}, {
							"title": "处理中",
							"type": "1"
						}, {
							"title": "待您邮寄",
							"type": "2"
						}, {
							"title": "退款中",
							"type": "3"
						}, {
							"title": "已完成",
							"type": "4"
						}, {
							"title": "不同意退货",
							"type": "5"
						}, {
							"title": "不同意退款",
							"type": "6"
						}, {
							"title": "已取消",
							"type": "7"
						}],
						"tabTypeShow": [{
							"title": "全部订单",
							"type": ""
						}, {
							"title": "退货订单",
							"type": "1"
						}, {
							"title": "换货订单",
							"type": "2"
						}],
						"courierOptions": [{
							"value": "中通",
							"label": "中通"
						}, {
							"value": "圆通",
							"label": "圆通"
						}, {
							"value": "顺丰",
							"label": "顺丰"
						}, {
							"value": "EMS",
							"label": "EMS"
						}],
						"staticText": {
							"orderType": "订单类型",
							"orderStatus": "订单状态",
							"returnNumber": "退换货编号",
							"orderNumber": "订单编号",
							"date": "日期",
							"count": "数量",
							"operate": "操作",
							"check": "查看",
							"submission": "提交申请",
							"businessAudit": "商家审核",
							"businessAuditNotPass": "商家审核未通过",
							"userDelivery": "用户发货",
							"reviewOfRefunds": "审核退款",
							"refundNotPass": "审核退款未通过",
							"completeTheReturnOfTheGoods": "完成退货",
							"goodsName": "商品名称",
							"purchaseCount": "购买数量",
							"orderTime": "下单时间",
							"noCover": "暂无封面",
							"author": "作者",
							"returnCount": "退货数量",
							"problemDescription": "问题描述",
							"picture": "图片",
							"noPicture": "暂无图片",
							"refundAmount": "退款金额：￥",
							"refundVirtualCoin": "返还虚拟币：￥",
							"courierNumber": "快递单号",
							"returnApplicationAudit": "退货申请审核中...",
							"cancelReturnApplication": "取消退货申请",
							"returnAuditFailed": "退货审核不通过",
							"auditOpinion": "审核意见",
							"returnAuditPassed": "退货审核通过",
							"returnPolicy": "退货说明",
							"courierCompany": "快递公司",
							"chooseCourierCompany": "请选择快递公司",
							"writeCourierNumber": "请填写快递单号",
							"submit": "提交",
							"returnGoods": "退货",
							"confirmCancelReturn": "是否确定要取消退货申请？",
							"cancel": "取 消",
							"confirm": "确 定",
							"businessReceiving": "商家收货中...",
							"businessAgreeRefund": "商家收到退货商品，同意退款",
							"waitRefundArrive": "请等待退款到账",
							"businessDisagreeRefund": "商家收到退货商品，不同意退款",
							"completeReturn": "退货完成",
							"cancelReturn": "退货申请已取消",
							"createExchangeOrder": "生成换货订单",
							"exchangeCount": "换货数量",
							"exchangeApplicationAudit": "换货申请审核中...",
							"cancelExchangeApplication": "取消换货申请",
							"exchangeAuditFailed": "换货审核不通过",
							"exchangeAuditPassed": "换货审核通过",
							"exchangePolicy": "换货说明",
							"exchangeGoods": "换货",
							"confirmCancelExchange": "是否确定要取消换货申请？",
							"businessAgreeExchange": "商家收到换货商品，同意换货",
							"cancelExchange": "换货申请已取消",
							"informationSubmitSuccess": "信息提交成功",
							"informationSubmitFail": "抱歉，信息提交失败",
							"cancelFail": "抱歉，取消失败",
							"cancelSuccess": "取消成功"
						}
					},
					"book": {
						"navList": [{
							"name": "图书",
							"type": "2",
							"productType": "",
							"keyType": "book"
						}, {
							"name": "期刊",
							"type": "3",
							"productType": "periodical",
							"keyType": "periodical"
						}],
						"productKeys": {
							"book": {
								"name": "productName",
								"pic": "bigPic",
								"resourceId": "resourceId",
								"resourceType": "resourseType"
							},
							"periodical": {
								"name": "pub_resource_name",
								"pic": "pub_picBig",
								"resourceId": "pub_resource_id",
								"resourceType": "pub_resource_type"
							}
						}
					},
					"comment": {
						"detailUrl": {
							"91": "./bookdetail.html",
							"94": "./bookdetail.html",
							"149": "./journaldetail.html",
							"177": "./seriesdetail.html"
						}
					},
					"nav": {
						"staticText": {
							"personalCenter": "个人中心",
							"myAccount": "我的帐号",
							"myOrder": "我的订单",
							"myBookshelf": "我的书架",
							"collectionFolder": "收藏夹",
							"myPoints": "我的积分",
							"afterSaleRecord": "售后记录",
							"myCoupon": "我的优惠券"
						}
					}
				}
			}
		}
	},
	"addcart": {
		"list_pic": {
			"list_pic_23": {
				"userbook": {
					"title": "购买该书的用户还买",
					"url": "cart/getOtherBookList.do",
					"params": {
						"pubId": "",
						"loginName": ""
					},
					"detailHref": "../pages/bookdetail.html?pubId=",
					"maxNum": 4
				},
				"otherbook": {
					"title": "该作者其他图书",
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": [{
							"pub_resource_type": "BOOK"
						}, {
							"pub_site_id": 2
						}],
						"groupBy": "pub_resource_id",
						"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
						"pageNo": "1",
						"pageSize": "15",
						"searchText": ""
					},
					"detailHref": "../pages/bookdetail.html?pubId=",
					"maxNum": 4
				}
			}
		},
		"shoppingCart": {
			"shoppingCart_02": {
				"url": "api/book/getBookDetail.do",
				"params": {
					"loginName": "",
					"pubId": "",
					"siteId": 2
				},
				"bookType": "91",
				"ebookType": "94",
				"toDetailUrl": "../pages/bookdetail.html"
			}
		}
	},
	"information": {
		"bookreview": {
			"bookreview_01": {
				"indexHref": "../pages/index_k.html",
				"queryComments": {
					"url": "comment/comments.do",
					"params": {
						"pubId": "",
						"pageIndex": 1,
						"pageSize": 15,
						"siteId": 2
					}
				},
				"addComment": {
					"url": "comment/addComment.do",
					"params": {
						"pubId": "",
						"loginName": "",
						"content": "",
						"starNum": 0,
						"deviceName": "pc",
						"colId": "",
						"siteId": 2,
						"type": "1",
						"parentId": "0",
						"activityId": ""
					}
				},
				"keys": {
					"information_a_content": "information_a_text"
				},
				"pagination": {
					"showPagination": true,
					"pagesize": [15, 30, 50, 100]
				},
				"operList": {
					"review": {
						"reviewShow": true,
						"toReviewInfoUrl": "../pages/reviewDetail.html"
					},
					"like": {
						"likeShow": true
					}
				},
				"orReGetMenberName": true,
				"toAddReview": {
					"toAddReviewShow": true,
					"toAddReviewName": "평론",
					"toAddReviewUrl": "../pages/reviewPublish.html"
				},
				"staticText": {
					"comments": "평론",
					"noHeadPicture": "반신상 없음",
					"noComments": "평론이 없음",
					"commentsEmptyInfo": "평론란은 비워서는 안됩니다",
					"pleaseGradeBeforeSubmitting": "먼저 점수를 매긴 다음 평론해주십시오~",
					"commentAddFailed": "평론 추가 실패",
					"contentBefore": "다음을 입력 할 수도 있습니다",
					"contentAfter": "개의 글자"
				},
				"resourceDetail": {
					"sysAdapter": "sykAdapter",
					"typeAdapter": "bookAdapter",
					"isDiscussLimit": true
				}
			}
		},
		"information": {
			"information_01": {
				"indexHref": "../pages/index_k.html",
				"showItem": ["share", "review", "share", "review"],
				"queryDetail": {
					"url": "resource/detail.do",
					"params": {
						"pubId": "",
						"loginName": ""
					},
					"keys": {
						"title": "pub_resource_name",
						"author": "information_SYS_AUTHORS",
						"pubTime": "information_a_pubTime",
						"content": "information_a_content",
						"picture": "pub_picBig"
					},
					"display": {
						"noAuthor": "작자 없음",
						"like": "좋아요",
						"collect": "장바구니 넣기",
						"share": "모멘트 공유"
					}
				},
				"collectOrLike": {
					"url": "collection/addCollect.do",
					"params": {
						"loginName": "",
						"pubId": "",
						"operateType": "",
						"siteId": 2
					}
				},
				"shareLists": [{
					"title": "QQ친구",
					"class": "popup_sqq",
					"cmd": "sqq"
				}, {
					"title": "우챗",
					"class": "popup_weixin",
					"cmd": "weixin"
				}, {
					"title": "시나 블로그에 공유",
					"class": "bds_tsina",
					"cmd": "tsina"
				}, {
					"title": "더 보기",
					"class": "bds_more",
					"cmd": "more"
				}],
				"staticText": {
					"yourPosition": "고객님의 위치：",
					"homePage": "처음으로",
					"infoContent": "자료와 정보",
					"shareTo": "공유하기：",
					"QQZone": "QQ공간",
					"weChat": "위책",
					"shareToSinaWeibo": "시나블로그에 공유하기",
					"forMore": "더보기",
					"pleaseLogin": "로그인하세요",
					"operationErrorInfo": "잠시후 다시 시도해주세요",
					"font": "글자체",
					"big": "큰 글자체",
					"middle": "보통 글자체",
					"small": "작은 글자체",
					"noDate": "날자 없음"
				},
				"timeFormat": 0
			}
		}
	},
	"list": {
		"list_word": {
			"list_word_02": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": "[{pub_col_id:'83'}]",
					"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": null
				}
			},
			"list_word_01": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": [{
						"pub_col_id": "1285"
					}],
					"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": null
				},
				"startNum": 0,
				"locationQuery": {
					"keys": {
						"colId": "colId"
					}
				},
				"staticText": {
					"noDate": "暂无日期"
				}
			}
		}
	},
	"search": {
		"search": {
			"search_result_04": {
				"url": "spc/cms/publish/list.do",
				"param": {
					"conditions": "[{pub_site_id:'33'},{pub_status:'1'},{pub_resource_type:'BOOK'}]",
					"groupBy": "pub_resource_id",
					"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "10",
					"searchText": ""
				},
				"pageSizes": [10, 20, 50, 100],
				"eventName_loadDate": "loadSearchResult",
				"detailHref": "./bookdetail.html?pubId=",
				"isMobileLoading": false,
				"staticText": {
					"total": "共",
					"productQuanity": "件商品",
					"noCover": "暂无封面",
					"author": "作者：",
					"copyright": "版权：",
					"publish": "出版",
					"yuan": "￥",
					"commentQuanity": "条评论",
					"noDigest": "暂无摘要",
					"shareTo": "分享",
					"buy": "购买",
					"checkInfo": "查看",
					"noDate": "暂无日期",
					"isbn": "ISBN：",
					"noRelevantBooks": "暂无相关书籍"
				},
				"isShowIsbn": false,
				"isMoreFieldSearch": ["prod_name", "BOOK_SYNOPSIS", "pub_resource_name"]
			}
		},
		"rankCard": {
			"rank_01": {
				"rules": [{
					"title": "综合排序",
					"orderBy": "pub_a_order asc pub_lastmodified desc id asc"
				}, {
					"title": "按人气",
					"orderBy": "pub_read_num desc"
				}, {
					"title": "按最新",
					"orderBy": "pub_lastmodified desc"
				}],
				"eventName": "loadSearchResult"
			}
		},
		"share": {
			"ui_share_01": {
				"modulename": {
					"shareLists": [{
						"title": "分享到QQ空间",
						"class": "bds_qzone",
						"cmd": "qzone"
					}, {
						"title": "分享到新浪微博",
						"class": "bds_tsina",
						"cmd": "tsina"
					}, {
						"title": "分享到腾讯微博",
						"class": "bds_tqq",
						"cmd": "tqq"
					}, {
						"title": "分享到人人网",
						"class": "bds_renren",
						"cmd": "renren"
					}]
				}
			}
		}
	},
	"searchadvance": {
		"search": {
			"search_result_04": {
				"url": "spc/cms/publish/list.do",
				"param": {
					"conditions": "[{pub_site_id:'33'},{pub_status:'1'},{pub_resource_type:'BOOK'}]",
					"groupBy": "pub_resource_id",
					"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": ""
				},
				"pageSizes": [10, 20, 50, 100],
				"eventName_loadDate": "loadSearchResult",
				"detailHref": "./bookdetail.html?pubId=",
				"isMobileLoading": false,
				"staticText": {
					"total": "共",
					"productQuanity": "件商品",
					"noCover": "暂无封面",
					"author": "作者：",
					"copyright": "版权：",
					"publish": "出版",
					"yuan": "￥",
					"commentQuanity": "条评论",
					"noDigest": "暂无摘要",
					"shareTo": "分享",
					"buy": "购买",
					"checkInfo": "查看",
					"noDate": "暂无日期",
					"isbn": "ISBN："
				},
				"isShowIsbn": false
			},
			"search_condition_05": {
				"conditions": "{pub_resource_type:'BOOK'},{pub_site_id:'33'}",
				"eventName": "loadSearchResult",
				"staticText": {
					"bookName": "书名:",
					"inputBookName": "请输入书名",
					"author": "作者:",
					"inputAuthor": "请输入作者",
					"ISBNNum": "ISBN:",
					"inputISBNNum": "请输入ISBN",
					"search": "检索",
					"publishTime": "出版时间:",
					"selectDate": "选择日期",
					"to": "至",
					"price": "定价:",
					"inputPrice": "请输入价格"
				}
			}
		},
		"share": {
			"ui_share_01": {
				"modulename": {
					"shareLists": [{
						"title": "分享到QQ空间",
						"class": "bds_qzone",
						"cmd": "qzone"
					}, {
						"title": "分享到新浪微博",
						"class": "bds_tsina",
						"cmd": "tsina"
					}, {
						"title": "分享到腾讯微博",
						"class": "bds_tqq",
						"cmd": "tqq"
					}, {
						"title": "分享到人人网",
						"class": "bds_renren",
						"cmd": "renren"
					}]
				}
			}
		}
	},
	"booklist": {
		"_3colsWithSort": {
			"queryBookList": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": "",
					"orderBy": "",
					"pageNo": "",
					"pageSize": "",
					"searchText": "",
					"groupBy": "pub_resource_id"
				}
			},
			"showPrice": true,
			"secondCrumbsName": "电子书城",
			"secondCrumbsUrl": "../pages/ebook.html",
			"toIndexHref": "../pages/index.html",
			"toEBookHref": "../pages/ebook.html",
			"toBookDetailHref": "../pages/bookdetail.html",
			"staticText": {
				"homePage": "首页",
				"ebay": "电子书城",
				"moreBookList": "更多图书列表",
				"defaultSort": "默认排序",
				"pubTime": "发布时间",
				"salesVolume": "销量",
				"comment": "评论",
				"noPic": "暂无图片",
				"author": "作者",
				"originalPrice": "原价",
				"currentPrice": "现价",
				"buy": "购买",
				"check": "查看"
			}
		},
		"_2colsWithSort": {
			"queryBookList": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": "",
					"orderBy": "",
					"pageNo": "",
					"pageSize": "",
					"searchText": "",
					"groupBy": "pub_resource_id"
				},
				"staticText": {
					"homePage": "首页",
					"ebay": "电子书城",
					"moreBookList": "更多图书列表",
					"defaultSort": "默认排序",
					"pubTime": "发布时间",
					"salesVolume": "销量",
					"comment": "评论",
					"noPic": "暂无图片",
					"author": "作者",
					"originalPrice": "原价",
					"currentPrice": "现价",
					"buy": "购买",
					"check": "查看",
					"noAuthor": "暂无作者",
					"share": "分享"
				},
				"toIndexHref": "../pages/index.html",
				"toEBookHref": "../pages/ebook.html",
				"toBookDetailHref": "../pages/bookdetail.html"
			}
		}
	},
	"xhjy": {
		"navigation": {
			"navigation_05": {
				"helpcenter": {
					"colId": 508,
					"comTitle": {
						"isShow": true,
						"name": "客服中心"
					},
					"showChildren": false,
					"broadcastName": "showNavContent",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					}
				},
				"modulename": {
					"colId": 245,
					"comTitle": {
						"isShow": true,
						"name": "华育动态新闻"
					},
					"showChildren": false,
					"broadcastName": "showNavContent",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					}
				}
			}
		},
		"information": {
			"information_02": {
				"aboutContent": {
					"comTitle": {
						"isShow": false,
						"name": "资讯"
					},
					"display": {},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "993"
							}, {
								"pub_status": "1"
							}],
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						}
					},
					"getResource": {
						"url": "spc/cms/publish/detail.do",
						"params": {
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["content"],
						"complicatedItem": [{
							"name": "content",
							"field": "content",
							"display": ""
						}]
					},
					"broadcastName": "showNavContent"
				},
				"helpCenter": {
					"comTitle": {
						"isShow": true,
						"name": "资讯"
					},
					"display": {},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "564"
							}, {
								"pub_status": "1"
							}],
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						}
					},
					"getResource": {
						"url": "spc/cms/publish/detail.do",
						"params": {
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["content"],
						"complicatedItem": [{
							"name": "content",
							"field": "content",
							"display": ""
						}]
					},
					"broadcastName": "showNavContent"
				},
				"contactInformation": {
					"comTitle": {
						"isShow": true,
						"name": "资讯"
					},
					"display": {},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "565"
							}, {
								"pub_status": "1"
							}],
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						}
					},
					"getResource": {
						"url": "spc/cms/publish/detail.do",
						"params": {
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["content"],
						"complicatedItem": [{
							"name": "content",
							"field": "content",
							"display": ""
						}]
					},
					"broadcastName": "showNavContent"
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "资讯"
					},
					"display": {},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "249"
							}, {
								"pub_status": "1"
							}],
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						}
					},
					"getResource": {
						"url": "spc/cms/publish/detail.do",
						"params": {
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["lastModifyDate", "createdDate", "content"],
						"complicatedItem": [{
							"name": "title",
							"field": "topic",
							"display": ""
						}, {
							"name": "lastModifyDate",
							"field": "lastModified",
							"display": "最后修改"
						}, {
							"name": "createdDate",
							"field": "created",
							"display": "创建时间"
						}, {
							"name": "authors",
							"field": "authors",
							"display": "作者"
						}, {
							"name": "sort",
							"field": "colName",
							"display": "分类"
						}, {
							"name": "content",
							"field": "content",
							"display": ""
						}]
					},
					"broadcastName": "showNavContent"
				}
			}
		}
	},
	"newslist": {
		"navigation": {
			"navigation_05": {
				"newscol": {
					"colId": 367,
					"comTitle": {
						"isShow": true,
						"name": "新闻动态"
					},
					"showChildren": false,
					"broadcastName": "showNavContent",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 29,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					}
				}
			}
		},
		"list_pic": {
			"list_pic_30": {
				"newslist": {
					"comTitle": {
						"isShow": false,
						"name": "新闻动态"
					},
					"broadcastName": "showNavContent",
					"display": {},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "556",
								"op": "in"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 6,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"display": {
							"time": "日期",
							"title": "标题"
						},
						"showItem": ["time", "title"],
						"complicatedItem": [{
							"name": "time",
							"field": "lastModified",
							"display": ""
						}, {
							"name": "title",
							"field": "resName",
							"display": ""
						}]
					},
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"colId": "colId"
						},
						"fixedKeys": {}
					},
					"crumb": [{
						"title": "首页",
						"href": "./index.html"
					}, {
						"title": "新闻动态",
						"href": "./newslist.html"
					}]
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "华育资讯"
					},
					"broadcastName": "showNavContent",
					"display": {},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "249",
								"lk": "in"
							}, {
								"pub_status": "1"
							}],
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 6,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"display": {
							"time": "日期",
							"title": "标题",
							"author": "作者",
							"createdTime": "创建时间",
							"sort": "分类"
						},
						"showItem": ["time", "title", "createdTime", "sort", "author"],
						"complicatedItem": [{
							"name": "time",
							"field": "lastModified",
							"display": "日期"
						}, {
							"name": "title",
							"field": "resName",
							"display": "标题"
						}, {
							"name": "createdTime",
							"field": "created",
							"display": "创建时间"
						}, {
							"name": "sort",
							"field": "colName",
							"display": "分类"
						}, {
							"name": "author",
							"field": "authors",
							"display": "作者"
						}]
					},
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist.html",
						"dataKeys": {
							"colId": "colId"
						},
						"fixedKeys": {}
					}
				}
			}
		}
	},
	"login": {
		"login": {
			"work_login_03": {
				"disBacks": ["register.html", "register_success.html", "forgetPassword.html", "login.html"],
				"indexPath": "./index.html",
				"thirdParty": {
					"topic": "社交账号登陆",
					"url": "auth/login.do?type=",
					"target": "_self",
					"showItem": [{
						"title": "QQ",
						"type": "QQ",
						"tag": "qq"
					}, {
						"title": "微信",
						"type": "WeiXin",
						"tag": "weixin"
					}, {
						"title": "微博",
						"type": "WeiBo",
						"tag": "weibo"
					}],
					"customShowItem": []
				},
				"staticText": {
					"loginSys": "登录",
					"inputUserName": "请输入用户名",
					"inputPwd": "请输入密码",
					"forgetPwd": "忘记密码",
					"noAccount": "还没有账号？",
					"signUpNow": "立即注册",
					"accountFrozenInfo": "账号已被冻结，请联系管理员",
					"loginFailed": "登录失败",
					"usernameAndPwdCannotBeEmpty": "用户名或密码不能为空",
					"accountAndPwdError": "账号或密码错误",
					"userNameCannotBeEmpty": "用户名不能为空",
					"pwdCannotBeEmpty": "密码不能为空",
					"inputCode": "请输入验证码",
					"codeFailed": "验证码输入错误",
					"unRegisterName": "账号未注册"
				},
				"isPC": "true",
				"checkUsername": {
					"url": "user/checkUserInfo.do",
					"params": {
						"checkText": "",
						"checkType": "1"
					}
				}
			}
		}
	},
	"bookstore": {
		"list_pic": {
			"list_pic_33": {
				"xsph": {
					"comTitle": {
						"isShow": true,
						"name": "销售排行榜"
					},
					"toMoreBtn": {
						"isShow": false,
						"iconClass": "",
						"name": "更多>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "505"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "505"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": true,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "原价：",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "pubId"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/bookList.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "销售排行榜"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "更多>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "131"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "131"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": false,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "pubId"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/booklist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140
				},
				"staticText": {
					"noData": "暂无数据",
					"noImg": "暂无图片"
				},
				"test": {
					"comTitle": {
						"isShow": true,
						"name": "销售排行榜"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "更多>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "131"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "131"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": false,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "pubId"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/booklist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140,
					"staticText": {
						"noData": "暂无数据",
						"noImg": "暂无图片",
						"yuan": "￥",
						"notHaveYet": "暂无",
						"noDate": "暂无日期"
					}
				}
			},
			"list_pic_29": {
				"rmts": {
					"comTitle": {
						"isShow": true,
						"name": "热门推荐"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "| 查看更多 >>",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "503"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "503"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 8,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "",
							"field": "sysAuthors",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": ""
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/bookList.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"pagination": {
						"showPagination": false,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"zxts": {
					"comTitle": {
						"isShow": true,
						"name": "新书推荐"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "| 查看更多>>",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "504"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "504"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 8,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": ""
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/bookList.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"pagination": {
						"showPagination": false,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "资讯"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "el-icon-back",
						"name": "更多",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "250"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "250"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 1,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}]
					},
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"onEvent": {
						"eventName": "showNavContent"
					},
					"pagination": {
						"showPagination": true,
						"pagesize": [15, 30, 50, 100]
					}
				}
			}
		},
		"classification": {
			"classification_02": {
				"url": "spc/prodb/treeByCode.do",
				"params": {
					"code": "BOOK",
					"layer": 2
				},
				"bookListUrl": "../pages/bookList.html",
				"staticText": {
					"allClassifications": "全部分类",
					"showAll": "显示全部",
					"closeAll": "收起全部"
				}
			},
			"classification_ebook": {
				"url": "spc/prodb/treeByCode.do",
				"params": {
					"code": "EBOOK_FL",
					"layer": 2
				},
				"bookListUrl": "../pages/ebookList.html",
				"staticText": {
					"allClassifications": "全部分类",
					"showAll": "显示全部",
					"closeAll": "收起全部"
				}
			}
		}
	},
	"helpcenter": {
		"navigation": {
			"navigation_05": {
				"helpcenter": {
					"colId": 508,
					"comTitle": {
						"isShow": true,
						"name": "客服中心"
					},
					"showChildren": false,
					"broadcastName": "showNavContent",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"keys": {
							"colId": "pub_col_id"
						}
					}
				},
				"modulename": {
					"colId": 245,
					"comTitle": {
						"isShow": true,
						"name": "华育动态新闻"
					},
					"showChildren": false,
					"broadcastName": "showNavContent",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"keys": {
							"colId": "pub_col_id"
						}
					}
				}
			}
		},
		"list_pic": {
			"list_pic_29": {
				"helpcenter": {
					"comTitle": {
						"isShow": false,
						"name": "资讯"
					},
					"toMoreBtn": {
						"isShow": false,
						"iconClass": "el-icon-back",
						"name": "更多",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "250"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "250"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 0,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "time",
							"field": "pubTime",
							"display": "",
							"method": "toDetail"
						}]
					},
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"onEvent": {
						"eventName": "showNavContent"
					},
					"pagination": {
						"showPagination": true,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "资讯"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "el-icon-back",
						"name": "更多",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "250"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "250"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 1,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}]
					},
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"onEvent": {
						"eventName": "showNavContent"
					},
					"pagination": {
						"showPagination": true,
						"pagesize": [15, 30, 50, 100]
					}
				}
			}
		}
	},
	"aboutUs": {
		"navigation": {
			"navigation_05": {
				"cbsjs": {
					"colId": 507,
					"comTitle": {
						"isShow": true,
						"name": "出版社介绍"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"transDefaultColId": "transDefaultColId",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"keys": {
							"colId": "pub_col_id"
						}
					}
				},
				"modulename": {
					"colId": 245,
					"comTitle": {
						"isShow": true,
						"name": "华育动态新闻"
					},
					"showChildren": false,
					"broadcastName": "showNavContent",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"showThreeColumn": false,
					"transTitle": "transNavTitle",
					"transDefaultColId": "transDefaultColId",
					"directLink": {
						"switchFlag": false,
						"dierctWay": "_blank",
						"directRules": {
							"1118": "../pages/newslistsnxw.html?colId=",
							"1119": "../pages/newslistyjxw.html?colId=",
							"1120": "../pages/newslistzcfg.html?colId=",
							"1121": "../pages/newslisttpxw.html?colId=",
							"1122": "../pages/newslistspjx.html?colId="
						}
					},
					"reverseByColId": false
				}
			}
		},
		"information": {
			"information_02": {
				"aboutcontent": {
					"comTitle": {
						"isShow": false,
						"name": "资讯"
					},
					"display": {},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "993"
							}, {
								"pub_status": "1"
							}],
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						}
					},
					"getResource": {
						"url": "spc/cms/publish/detail.do",
						"params": {
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["content"],
						"complicatedItem": [{
							"name": "content",
							"field": "content",
							"display": ""
						}]
					},
					"broadcastName": "showNavContent"
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "资讯"
					},
					"display": {},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "249"
							}, {
								"pub_status": "1"
							}],
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						}
					},
					"getResource": {
						"url": "spc/cms/publish/detail.do",
						"params": {
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["lastModifyDate", "createdDate", "content"],
						"complicatedItem": [{
							"name": "title",
							"field": "topic",
							"display": ""
						}, {
							"name": "lastModifyDate",
							"field": "lastModified",
							"display": "最后修改"
						}, {
							"name": "createdDate",
							"field": "created",
							"display": "创建时间"
						}, {
							"name": "authors",
							"field": "authors",
							"display": "作者"
						}, {
							"name": "sort",
							"field": "colName",
							"display": "分类"
						}, {
							"name": "content",
							"field": "content",
							"display": ""
						}]
					},
					"broadcastName": "showNavContent",
					"staticText": {
						"noDate": "暂无日期"
					}
				}
			}
		},
		"crumbs": {
			"work_crumbs_02": {
				"crumbs": {
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					}
				},
				"modulename": {
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					}
				}
			}
		},
		"work_videoplay": {
			"work_videoplay_01": {
				"aboutvideoplay": {
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "1021"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "videoAdapter",
						"typeAdapter1": "audioAdapter"
					},
					"complicatedItem": [],
					"playVideoUrl": "dynamicFile/stream.do?recordID=",
					"showVideoList": false,
					"queryParamsType": ""
				}
			}
		}
	},
	"header_search": {
		"search": {
			"search_01": {
				"searchUrl": "../pages/search.html",
				"advSearchUrl": "../pages/searchadvanced.html",
				"searchConditionArr": [],
				"staticText": {
					"search": "搜索",
					"inputKeyWord": "输入关键字",
					"advancedSearch": "高级检索"
				}
			}
		}
	},
	"helpCenter": {
		"crumbs": {
			"work_crumbs_02": {
				"helpcrumbs": {
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					}
				},
				"modulename": {
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					}
				}
			}
		}
	},
	"register": {
		"register": {
			"work_register_03": {
				"sendNum": {
					"url": "user/sendMessageYanBian.do"
				},
				"showItem": ["bindEmail", "bindMobile"],
				"staticText": {
					"userRegister": "新用户注册",
					"userName": "用户名:",
					"userNameSupportCode": "支持6~16位数字、字母、下划线",
					"userExistInfo": "很抱歉，用户名已存在",
					"canUseInfo": "恭喜您!可以使用",
					"setNewPwd": "设置新密码:",
					"pwdSupportCode": "密码支持6-16位字符",
					"confirmPwd": "确认密码:",
					"inputPwdAgain": "请再次输入密码",
					"verifiCode": "验证码:",
					"inputVerifiCode": "请输入验证码",
					"changeAnotherPage": "换一张",
					"refreshInfo": "刷新",
					"nextStep": "下一步",
					"emailBind": "邮箱绑定",
					"phoneNumBind": "手机绑定",
					"email": "邮箱:",
					"inputEmailInfo": "请输入邮箱 email@mail.com",
					"registerNow": "立即注册",
					"phoneNum": "手机号:",
					"inputPhoneNum": "请输入手机号",
					"inputCorrectPhoneNum": "请输入正确手机号",
					"phoneNumBoundInfo": "手机号已被绑定",
					"inputPhoneVerifiCode": "请输入手机验证码",
					"yourEmailWillReceive": "您的邮箱将会收到一封",
					"verify": "验证",
					"mail": "邮件",
					"checkOutEmail": "请登录你的邮箱查看",
					"backToLogin": "返回登录页",
					"pleaseInputUserName": "请输入用户名",
					"userNameFormatInfo": "请以字母开头，可以使用数字、字母、下划线，长度6到16位",
					"pwdFormatErrorInfo": "格式错误，密码仅支持汉字、字母、数字、\"-\"、\"_\"的组合",
					"pleaseInputPwd": "请输入密码",
					"pwdAtLeastSixDigits": "密码至少为6位数",
					"pwdCanBeUpToSixteenDigits": "密码最多为16位数",
					"twoPwdDoNotMatch": "两次输入密码不一致!",
					"verifiCodeInputError": "验证码输入错误！!",
					"verifiCodeError": "验证码错误",
					"inputTheCorrectPhoneNum": "请输入正确的手机号",
					"getVerifiCode": "获取验证码",
					"verifiCodeIsSending": "验证码发送中...",
					"sendSuccess": "发送成功",
					"networkTimeout": "网络超时",
					"registerFailed": "注册失败，",
					"phoneNumWasSuccessfullyBound": "手机号绑定成功",
					"congratulations": "恭喜",
					"yes": "确定",
					"returnToLoginAfterThreeSeconds": "3秒后返回登录界面",
					"requestFailed": "请求失败",
					"inputEmail": "请输入邮箱"
				},
				"directLoginHref": "./login.html"
			}
		}
	},
	"test": {
		"list_pic": {
			"list_pic_33": {
				"xsph": {
					"comTitle": {
						"isShow": true,
						"name": "销售排行榜"
					},
					"toMoreBtn": {
						"isShow": false,
						"iconClass": "",
						"name": "更多>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "505"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "505"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": true,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "原价：",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "pubId"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/booklist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "销售排行榜"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "更多>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "131"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "131"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": false,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "pubId"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/booklist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140
				}
			}
		}
	},
	"ebookstore": {
		"classification": {
			"classification_02": {
				"url": "spc/prodb/treeByCode.do",
				"params": {
					"code": "BOOK",
					"layer": 2
				},
				"bookListUrl": "../pages/ebookList.html",
				"staticText": {
					"allClassifications": "全部分类",
					"showAll": "显示全部",
					"closeAll": "收起全部"
				}
			}
		},
		"list_pic": {
			"list_pic_33": {
				"xsph": {
					"comTitle": {
						"isShow": true,
						"name": "销售排行榜"
					},
					"toMoreBtn": {
						"isShow": false,
						"iconClass": "",
						"name": "更多>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "1056"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "1056"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": true,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/booklist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "销售排行榜"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "更多>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "131"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "131"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": false,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "pubId"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/booklist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140,
					"staticText": {
						"noData": "暂无数据",
						"noImg": "暂无图片",
						"yuan": "￥",
						"notHaveYet": "暂无",
						"noDate": "暂无日期"
					}
				}
			},
			"list_pic_29": {
				"rmts": {
					"comTitle": {
						"isShow": true,
						"name": "热门推荐"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "| 查看更多 >>",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "1054"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "1054"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 8,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "",
							"field": "sysAuthors",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": ""
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/ebookList.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"pagination": {
						"showPagination": false,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"zxts": {
					"comTitle": {
						"isShow": true,
						"name": "新书推荐"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "| 查看更多>>",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "1055"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "1055"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 8,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": ""
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/ebookList.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"pagination": {
						"showPagination": false,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "资讯"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "el-icon-back",
						"name": "更多",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "250"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "250"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 1,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}]
					},
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"onEvent": {
						"eventName": "showNavContent"
					},
					"pagination": {
						"showPagination": true,
						"pagesize": [15, 30, 50, 100]
					},
					"isMobileLoading": false,
					"toOrderByBtn": {
						"name": "排序：",
						"isShow": false,
						"itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
						"itemList": [{
							"name": "默认",
							"itemField": "pub_a_order asc pub_lastmodified desc id asc"
						}, {
							"name": "最新",
							"itemField": "pub_created asc id asc"
						}, {
							"name": "热门",
							"itemField": "pub_read_num asc id asc"
						}]
					},
					"staticText": {
						"noImg": "暂无图片",
						"noData": "暂无数据"
					},
					"showSearchBtn": true
				}
			}
		}
	},
	"findPassword": {
		"findPassword": {
			"work_findpassword_01": {
				"findPasswordUrl": "user/findPassword.do?email=",
				"setPasswordUrl": "user/setPassword1.do?email=",
				"href": "../pages/login.html",
				"checkMobileUrl": "user/checkExistMember.do",
				"sendMobileUrl": "user/sendMessageYanBian.do",
				"setPasswordByMobileUrl": "user/findPasswordByMobile.do",
				"staticText": {
					"inputEmail": "输入邮箱",
					"inputEmailVerifiCode": "填写邮箱验证码",
					"updatePwd": "更改密码",
					"findSuccess": "找回完成",
					"email": "邮箱",
					"pleaseInputEmail": "请输入邮箱",
					"verifiCode": "验证码",
					"pleaseInputVeirifiCode": "请输入验证码",
					"canNotSeeClearly": "看不清楚",
					"nextStep": "下一步",
					"emailVerifiCode": "邮箱验证码",
					"pleaseInputEmailVerifiCode": "请输入邮箱验证码",
					"submit": "提交",
					"verifiCodeInvalidInfo": "验证码已失效，请重新验证",
					"pleaseInputNewPwd": "请输入新密码",
					"pleaseConfirmNewPwd": "请确认新密码",
					"mailboxFormatIsIncorrect": "邮箱格式不正确",
					"verifiCodeError": "验证码输入错误！",
					"formatError": "格式错误，密码仅支持汉字、字母、数字、\"-\"、\"_\"的组合",
					"pleaseInputPwd": "请输入密码",
					"passwordAtLeastSixDigits": "密码至少为6位数",
					"passwordCanBeUpToSixTeenDigits": "密码最多为16位数",
					"pleaseInputPwdAgain": "请再次输入密码",
					"twoPwdsDoNotMatch": "两次密码输入不一致",
					"pleaseInputVerifiCode": "请输入验证码",
					"findByEmail": "通过邮箱找回",
					"findByMobilePhone": "通过手机找回",
					"mobilePhoneVerify": "手机验证",
					"pleaseInputPhoneNum": "请输入手机号",
					"sendVerifiCode": "发送验证码",
					"loading": "正在加载中...",
					"verifiCodeCorrectInfoAndInputNewPwd": "验证码输入正确，请重新设置密码",
					"verifiCodeIncorrectInfoAndRetry": "验证码输入错误，请重试",
					"sendSuccess": "发送成功",
					"internetTimeOut": "网络超时",
					"verifiCodeHasSentToYourEmailAndVerifyQuickly": "已发送验证码至您邮箱,请在2分钟内输入验证",
					"resetFailed": "重置失败",
					"pwdResetSuccess": "密码重置成功",
					"yes": "确定",
					"congratulations": "恭喜",
					"returnToLoginAfterThreeSeconds": "3秒后返回登录界面"
				}
			}
		}
	},
	"ebookList": {
		"classification": {
			"classification_02": {
				"url": "spc/prodb/treeByCode.do",
				"params": {
					"code": "BOOK",
					"layer": 2
				},
				"bookListUrl": "../pages/ebookList.html",
				"staticText": {
					"allClassifications": "全部分类",
					"showAll": "显示全部",
					"closeAll": "收起全部"
				}
			}
		}
	},
	"video": {
		"navigation": {
			"navigation_05": {
				"videomenu": {
					"colId": 1127,
					"comTitle": {
						"isShow": true,
						"name": "视频讲座"
					},
					"showChildren": false,
					"broadcastName": "showNavContent",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"keys": {
							"colId": "pub_col_id"
						}
					}
				}
			}
		}
	},
	"videos": {
		"crumbs": {
			"work_crumbs_02": {
				"crumbs": {
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "33",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					}
				}
			}
		},
		"work_bookdetail": {
			"work_bookdetail_04": {
				"videosdetail": {
					"getResourceDetail": {
						"url": "book/getBookDetail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"complicatedItem": {
							"one": [{
								"name": "",
								"field": "",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}],
							"two": [{
								"name": "",
								"field": "",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}]
						}
					},
					"toProbation": {
						"url": "../../../reader/kspdf/read.jsp",
						"dataKeys": {
							"bookId": "resId",
							"bookName": "resName"
						},
						"fixedKeys": {
							"siteType": 0,
							"readType": 0
						}
					},
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toBuy": {
						"url": "../pages/bookBuy.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 320,
					"infoImgHeight": 220,
					"tabConfigList": {
						"tabShow": true,
						"reviewShow": true,
						"tabList": ["详情", "评论"],
						"tabActiveIndex": 0,
						"toAllReviewName": "查看全部评论",
						"toAllReviewMethod": {
							"method": "toReviewList"
						}
					},
					"getPublicizeInfo": {
						"url": "spc/prodb/publicize.do",
						"params": {
							"doclibCode": "BOOK",
							"docID": ""
						},
						"isShowPublicize": true,
						"showPublicize": ["前言", "内容简介", "目录"]
					},
					"getAudioAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": 33,
							"attachTypes": "audio"
						},
						"isShowAudio": true
					},
					"addCart": {
						"url": "cart/addCart.do",
						"params": {
							"number": "",
							"loginName": "",
							"activityId": 0,
							"pubId": "",
							"siteId": 33
						}
					},
					"collectOrLike": {
						"url": "collection/addCollect.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"operateType": 0,
							"productId": "",
							"siteId": 33
						}
					},
					"toReviewList": {
						"url": "../pages/reviewlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"bugButton": {
						"display": "立即购买",
						"method": "toBuy",
						"display1": "加入书架",
						"method1": "toBuy",
						"display2": "开始阅读",
						"method2": "toProbation"
					},
					"bookContentType": {
						"bookType": "91",
						"ebookType": "94"
					},
					"getPubidByLocationQueryFromSyk": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"queryParams": {
							"title": "BOOK_SYS_TOPIC"
						}
					},
					"staticText": {
						"noImg": "暂无图片",
						"noResource": "暂无",
						"quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
						"systemPrompt": "系统提示",
						"OK": "确定",
						"noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
						"noEBookInfo": "该书没有对应电子书，无法加入购物车",
						"noDate": "暂无日期",
						"yuan": "￥"
					}
				}
			}
		},
		"bookreview": {
			"bookreview_01": {
				"queryComments": {
					"url": "comment/comments.do",
					"params": {
						"pubId": "",
						"pageIndex": 1,
						"pageSize": 15,
						"siteId": 33
					}
				},
				"addComment": {
					"url": "comment/addComment.do",
					"params": {
						"pubId": "",
						"loginName": "",
						"content": "",
						"starNum": 0,
						"deviceName": "pc",
						"colId": "",
						"siteId": 33,
						"type": "1",
						"parentId": "0",
						"activityId": ""
					}
				},
				"pagination": {
					"showPagination": true,
					"pagesize": [15, 30, 50, 100]
				},
				"operList": {
					"review": {
						"reviewShow": true,
						"toReviewInfoUrl": "../pages/reviewDetail.html"
					},
					"like": {
						"likeShow": true
					}
				},
				"orReGetMenberName": true,
				"toAddReview": {
					"toAddReviewShow": true,
					"toAddReviewName": "评论",
					"toAddReviewUrl": "../pages/reviewPublish.html"
				},
				"staticText": {
					"comments": "评论",
					"noHeadPicture": "暂无头像",
					"noComments": "暂无评论",
					"commentsEmptyInfo": "评论内容不能为空",
					"pleaseGradeBeforeSubmitting": "请先评分再提交评论~",
					"commentAddFailed": "评论添加失败"
				}
			}
		},
		"share": {
			"ui_share_01": {
				"modulename": {
					"shareLists": [{
						"title": "分享到QQ空间",
						"class": "bds_qzone",
						"cmd": "qzone"
					}, {
						"title": "分享到新浪微博",
						"class": "bds_tsina",
						"cmd": "tsina"
					}, {
						"title": "分享到腾讯微博",
						"class": "bds_tqq",
						"cmd": "tqq"
					}, {
						"title": "分享到人人网",
						"class": "bds_renren",
						"cmd": "renren"
					}]
				}
			}
		},
		"list_pic": {
			"list_pic_36": {
				"videoslist": {
					"display": {
						"courseContain": "课程包含内容：",
						"courseName": "课程名称",
						"symbol": "、"
					},
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": "[{pub_parent_id:''}]",
						"groupBy": "pub_resource_id",
						"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
						"pageNo": "1",
						"pageSize": "10",
						"searchText": ""
					},
					"sysAdapter": "sykAdapter",
					"typeAdapter": "videoAdapter",
					"toDetail": {
						"url": "../pages/videoplay.html",
						"dataKeys": {
							"parentId": "parentId",
							"id": "id"
						},
						"fixedKeys": {}
					},
					"maxNum": 10,
					"pageSizes": [10, 30, 50, 100]
				}
			}
		}
	},
	"": {
		"navigation": {
			"navigation_05": {
				"navigation": {
					"colId": 0,
					"comTitle": {
						"isShow": true,
						"name": "华育动态新闻"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"transTitle": "listenTitle",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"directLink": {
						"switchFlag": false,
						"directRules": {
							"1118": "../pages/newslistsnxw?colId=",
							"1119": "../pages/newslistyjxw?colId=",
							"1120": "../pages/newslistzcfg?colId=",
							"1121": "../pages/newslisttpxw?colId=",
							"1122": "../pages/newslistspjx?colId="
						}
					}
				}
			}
		},
		"crumbs": {
			"work_crumbs_02": {
				"doccrumbs": {
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					}
				},
				"modulename": {
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					}
				}
			}
		}
	},
	"docCenter": {
		"navigation": {
			"navigation_05": {
				"docnavigation": {
					"colId": 510,
					"comTitle": {
						"isShow": true,
						"name": "资料中心"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"transDefaultColId": "transDefaultColId",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"transTitle": "listenTitle",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"directLink": {
						"switchFlag": false,
						"directRules": {
							"1118": "../pages/newslistsnxw?colId=",
							"1119": "../pages/newslistyjxw?colId=",
							"1120": "../pages/newslistzcfg?colId=",
							"1121": "../pages/newslisttpxw?colId=",
							"1122": "../pages/newslistspjx?colId="
						}
					}
				},
				"moduleName": {
					"colId": 0,
					"comTitle": {
						"isShow": true,
						"name": "华育动态新闻"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"transTitle": "listenTitle",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"directLink": {
						"switchFlag": false,
						"directRules": {
							"1118": "../pages/newslistsnxw?colId=",
							"1119": "../pages/newslistyjxw?colId=",
							"1120": "../pages/newslistzcfg?colId=",
							"1121": "../pages/newslisttpxw?colId=",
							"1122": "../pages/newslistspjx?colId="
						}
					}
				},
				"modulename": {
					"colId": 510,
					"comTitle": {
						"isShow": true,
						"name": "资料中心"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"transDefaultColId": "transDefaultColId",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"transTitle": "listenTitle",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"directLink": {
						"switchFlag": false,
						"dierctWay": "_self",
						"directRules": {
							"1118": "../pages/newslistsnxw.html?colId=",
							"1119": "../pages/newslistyjxw.html?colId=",
							"1120": "../pages/newslistzcfg.html?colId=",
							"1121": "../pages/newslisttpxw.html?colId=",
							"1122": "../pages/newslistspjx.html?colId="
						}
					},
					"reverseByColId": false
				}
			}
		},
		"crumbs": {
			"work_crumbs_02": {
				"doccrumbs": {
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					}
				},
				"modulename": {
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					},
					"staticText": {
						"currentPosition": "当前位置"
					},
					"showLang": "Chinese"
				}
			}
		},
		"list_pic": {
			"list_pic_37": {
				"doccenterlist": {
					"colId": 510,
					"display": {
						"resourceTitle": "",
						"noData": "暂无数据",
						"book": "BOOK",
						"video": "VIDEO-MEDIA",
						"audio": "AUDIO-MEDIA",
						"download": "ZILIAOKU",
						"bookShow": "电子书",
						"videShow": "视频",
						"audioShow": "音频",
						"downloadShow": "下载",
						"bookIconShow": "pdf",
						"videIconShow": "video",
						"audioIconShow": "audio",
						"downloadIconShow": "archive",
						"description": "描述："
					},
					"downloadColumns": [1175, 1176],
					"attachType": {
						"download": "all",
						"pdf": "txtlpdf"
					},
					"tabList": [],
					"tHeadList": ["文件类型", "资料名称", "日期"],
					"tBodyList": [],
					"sysAdapter": "sykAdapter",
					"typeAdapter": "systemAdapter",
					"transTitle": "transNavTitle",
					"transDefaultColId": "transDefaultColId",
					"toEbook": {
						"url": "",
						"params": {
							"bookId": "",
							"readType": 1,
							"bookName": "",
							"userName": "",
							"siteType": ""
						}
					},
					"toPlayAudio": {
						"url": "../pages/videoplay.html",
						"dataKeys": {
							"id": "id",
							"resType": "pubResType"
						},
						"fixedKeys": {},
						"params": {
							"audioResId": "AUDIO-MEDIA_RESOURCEID"
						}
					},
					"toPlayVideo": {
						"url": "../pages/videoplay.html",
						"dataKeys": {
							"id": "id",
							"resType": "pubResType"
						},
						"fixedKeys": {},
						"params": {
							"videoResId": "VIDEO-MEDIA_RESOURCEID"
						}
					},
					"getZipAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": "",
							"attachTypes": "all"
						}
					},
					"toDownload": {
						"url": "dynamicFile/file.do",
						"dataKeys": {
							"recordID": "fileRecordID"
						},
						"fixedKeys": {}
					},
					"getList": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": "[{pub_col_id:''}]",
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"isGetSubColsData": true
					},
					"pageSizes": [10, 30, 50, 100]
				},
				"resourceCenter": {
					"colId": 510,
					"display": {
						"resourceTitle": "",
						"noData": "暂无数据",
						"book": "BOOK",
						"video": "VIDEO-MEDIA",
						"audio": "AUDIO-MEDIA",
						"download": ""
					},
					"tabList": [],
					"tHeadList": ["文件类型", "资料名称", "日期"],
					"tBodyList": [],
					"sysAdapter": "sykAdapter",
					"typeAdapter": "systemAdapter",
					"transTitle": "transNavTitle",
					"toEbook": {
						"url": "",
						"params": {
							"bookId": "",
							"readType": 1,
							"bookName": "",
							"userName": "",
							"siteType": ""
						}
					},
					"toPlayAudio": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toPlayVideo": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"getList": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": "[{pub_col_id:''}]",
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						}
					},
					"pageSizes": [10, 30, 50, 100],
					"getZipAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": "",
							"attachTypes": "all"
						}
					},
					"toDownload": {
						"url": "dynamicFile/file.do",
						"dataKeys": {
							"recordID": "fileRecordID"
						},
						"fixedKeys": {}
					},
					"transDefaultColId": "transDefaultColId"
				},
				"modulename": {
					"colId": 510,
					"display": {
						"resourceTitle": "",
						"noData": "暂无数据",
						"book": "BOOK",
						"video": "VIDEO-MEDIA",
						"audio": "AUDIO-MEDIA",
						"download": "ZILIAOKU",
						"bookShow": "电子书",
						"videShow": "视频",
						"audioShow": "音频",
						"downloadShow": "下载",
						"bookIconShow": "pdf",
						"videIconShow": "video",
						"audioIconShow": "audio",
						"downloadIconShow": "archive",
						"description": "描述："
					},
					"tabList": [],
					"tHeadList": ["文件类型", "资料名称", "日期"],
					"tBodyList": [],
					"sysAdapter": "sykAdapter",
					"typeAdapter": "systemAdapter",
					"transTitle": "transNavTitle",
					"transDefaultColId": "transDefaultColId",
					"toEbook": {
						"url": "",
						"params": {
							"bookId": "",
							"readType": 1,
							"bookName": "",
							"userName": "",
							"siteType": ""
						}
					},
					"toPlayAudio": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"id": "id",
							"resType": "pubResType"
						},
						"fixedKeys": {},
						"params": {
							"audioResId": "AUDIO-MEDIA_RESOURCEID"
						}
					},
					"toPlayVideo": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"id": "id",
							"resType": "pubResType"
						},
						"fixedKeys": {},
						"params": {
							"videoResId": "VIDEO-MEDIA_RESOURCEID"
						}
					},
					"getZipAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": "",
							"attachTypes": "all"
						}
					},
					"toDownload": {
						"url": "dynamicFile/file.do",
						"dataKeys": {
							"recordID": "fileRecordID"
						},
						"fixedKeys": {}
					},
					"getList": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": "[{pub_col_id:''}]",
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						}
					},
					"pageSizes": [10, 30, 50, 100],
					"getAllCols": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"chId": 0
						}
					}
				}
			}
		}
	},
	"videodetail": {
		"bookreview": {
			"bookreview_01": {
				"queryComments": {
					"url": "comment/comments.do",
					"params": {
						"pubId": "",
						"pageIndex": 1,
						"pageSize": 15,
						"siteId": 33
					}
				},
				"addComment": {
					"url": "comment/addComment.do",
					"params": {
						"pubId": "",
						"loginName": "",
						"content": "",
						"starNum": 0,
						"deviceName": "pc",
						"colId": "",
						"siteId": 33,
						"type": "1",
						"parentId": "0",
						"activityId": ""
					}
				},
				"pagination": {
					"showPagination": true,
					"pagesize": [15, 30, 50, 100]
				},
				"operList": {
					"review": {
						"reviewShow": true,
						"toReviewInfoUrl": "../pages/reviewDetail.html"
					},
					"like": {
						"likeShow": true
					}
				},
				"orReGetMenberName": true,
				"toAddReview": {
					"toAddReviewShow": true,
					"toAddReviewName": "评论",
					"toAddReviewUrl": "../pages/reviewPublish.html"
				},
				"staticText": {
					"comments": "评论",
					"noHeadPicture": "暂无头像",
					"noComments": "暂无评论",
					"commentsEmptyInfo": "评论内容不能为空",
					"pleaseGradeBeforeSubmitting": "请先评分再提交评论~",
					"commentAddFailed": "评论添加失败",
					"contentBefore": "您还可以输入",
					"contentAfter": "个字"
				}
			}
		},
		"work_bookdetail": {
			"work_bookdetail_04": {
				"videodetail": {
					"getResourceDetail": {
						"url": "resource/detail.do",
						"params": {
							"pubId": "",
							"loginName": "",
							"attachTypes": "video"
						},
						"ZILIAOZU": {
							"sysAdapter": "sykAdapter",
							"typeAdapter": "ziliaozu"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "videoAdapter",
						"complicatedItem": {
							"one": [{
								"name": "img",
								"field": "picBig",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}, {
								"name": "title",
								"field": "resName",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}, {
								"name": "courseNumber",
								"field": "courseNumber",
								"display": "课程总数：",
								"afterDisplay": "讲",
								"method": "",
								"className": ""
							}, {
								"name": "courseDuration",
								"field": "courseDuration",
								"display": "课程：",
								"afterDisplay": "日",
								"method": "",
								"className": ""
							}, {
								"name": "free",
								"field": "free",
								"display": "费用：",
								"afterDisplay": "免费",
								"method": "",
								"className": ""
							}],
							"two": [{
								"name": "",
								"field": "",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}]
						}
					},
					"toProbation": {
						"url": "../../../reader/kspdf/read.jsp",
						"dataKeys": {
							"bookId": "resId",
							"bookName": "resName"
						},
						"fixedKeys": {
							"siteType": 0,
							"readType": 0
						}
					},
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 320,
					"infoImgHeight": 220,
					"tabConfigList": {
						"tabConfigshow": false,
						"tabShow": false,
						"reviewShow": false,
						"tabList": ["详情", "评论"],
						"tabActiveIndex": 0,
						"toAllReviewName": "查看全部评论",
						"toAllReviewMethod": {
							"method": "toReviewList"
						}
					},
					"getPublicizeInfo": {
						"url": "spc/prodb/publicize.do",
						"params": {
							"doclibCode": "BOOK",
							"docID": ""
						},
						"isShowPublicize": false,
						"showPublicize": ["前言", "内容简介", "目录"]
					},
					"getAudioAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": 33,
							"attachTypes": "audio"
						},
						"isShowAudio": false
					},
					"addCart": {
						"url": "cart/addCart.do",
						"params": {
							"number": "",
							"loginName": "",
							"activityId": 0,
							"pubId": "",
							"siteId": 33
						}
					},
					"collectOrLike": {
						"url": "collection/addCollect.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"operateType": 0,
							"productId": "",
							"siteId": 33
						}
					},
					"toReviewList": {
						"url": "../pages/reviewlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"bookContentType": {
						"bookType": "91",
						"ebookType": "94"
					},
					"getPubidByLocationQueryFromSyk": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"queryParams": {
							"title": "BOOK_SYS_TOPIC"
						}
					},
					"staticText": {
						"noImg": "暂无图片",
						"noResource": "暂无",
						"quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
						"systemPrompt": "系统提示",
						"OK": "确定",
						"noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
						"noEBookInfo": "该书没有对应电子书，无法加入购物车",
						"noDate": "暂无日期",
						"yuan": "￥"
					}
				},
				"modulename": {
					"getResourceDetail": {
						"url": "book/getBookDetail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"complicatedItem": {
							"one": [{
								"name": "",
								"field": "",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}],
							"two": [{
								"name": "",
								"field": "",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}]
						}
					},
					"toProbation": {
						"url": "../../../reader/kspdf/read.jsp",
						"dataKeys": {
							"bookId": "resId",
							"bookName": "resName"
						},
						"fixedKeys": {
							"siteType": 0,
							"readType": 0
						}
					},
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toBuy": {
						"url": "../pages/bookBuy.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 320,
					"infoImgHeight": 220,
					"tabConfigList": {
						"tabShow": true,
						"reviewShow": true,
						"tabList": ["详情", "评论"],
						"tabActiveIndex": 0,
						"toAllReviewName": "查看全部评论",
						"toAllReviewMethod": {
							"method": "toReviewList"
						}
					},
					"getPublicizeInfo": {
						"url": "spc/prodb/publicize.do",
						"params": {
							"doclibCode": "BOOK",
							"docID": ""
						},
						"isShowPublicize": true,
						"showPublicize": ["前言", "内容简介", "目录"]
					},
					"getAudioAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": 33,
							"attachTypes": "audio"
						},
						"isShowAudio": true
					},
					"addCart": {
						"url": "cart/addCart.do",
						"params": {
							"number": "",
							"loginName": "",
							"activityId": 0,
							"pubId": "",
							"siteId": 33
						}
					},
					"collectOrLike": {
						"url": "collection/addCollect.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"operateType": 0,
							"productId": "",
							"siteId": 33
						}
					},
					"toReviewList": {
						"url": "../pages/reviewlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"bugButton": {
						"display": "立即购买",
						"method": "toBuy",
						"display1": "加入书架",
						"method1": "toBuy",
						"display2": "开始阅读",
						"method2": "toProbation"
					},
					"bookContentType": {
						"bookType": "91",
						"ebookType": "94"
					},
					"getPubidByLocationQueryFromSyk": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"queryParams": {
							"title": "BOOK_SYS_TOPIC"
						}
					},
					"staticText": {
						"noImg": "暂无图片",
						"noResource": "暂无",
						"quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
						"systemPrompt": "系统提示",
						"OK": "确定",
						"noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
						"noEBookInfo": "该书没有对应电子书，无法加入购物车",
						"noDate": "暂无日期",
						"yuan": "￥"
					},
					"combinateProductCfg": {
						"show": true,
						"title": "组合购买",
						"lastBtn": "加入购物车",
						"addCart": {
							"url": "cart/addCombinateProductToCart.do",
							"params": {
								"loginName": "",
								"siteId": 37,
								"combinateId": ""
							}
						},
						"toDetail": {
							"url": "booldetail.html",
							"params": {}
						}
					},
					"showDialog": false,
					"display": {
						"courseUseTime": "使用期限：",
						"buyCourse": "课程购买",
						"sure": "确认支付",
						"cancel": "取消",
						"needPay": "需支付：",
						"payWay": "支付方式",
						"zhifubao": "支付宝",
						"weixin": "微信",
						"drumpPage": "正在跳转支付页面..."
					},
					"getPayMethodsBySiteId": {
						"url": "cart/getPayMethod.do",
						"params": {
							"siteId": ""
						}
					},
					"commitOrderUrl": "order/submitSplitOrder.do",
					"loginUrl": "../../pages/login.html"
				}
			}
		},
		"share": {
			"ui_share_01": {
				"modulename": {
					"shareLists": [{
						"title": "分享到QQ空间",
						"class": "bds_qzone",
						"cmd": "qzone"
					}, {
						"title": "分享到新浪微博",
						"class": "bds_tsina",
						"cmd": "tsina"
					}, {
						"title": "分享到腾讯微博",
						"class": "bds_tqq",
						"cmd": "tqq"
					}, {
						"title": "分享到人人网",
						"class": "bds_renren",
						"cmd": "renren"
					}]
				}
			}
		},
		"list_pic": {
			"list_pic_36": {
				"videodetaillist": {
					"getResourceDetail": {
						"url": "resource/detail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						}
					},
					"ziliaozuAttachType": "video",
					"getAttachPictureUrl": "dynamicFile/stream.do?recordID=",
					"display": {
						"courseContain": "课程包含内容：",
						"courseName": "课程名称",
						"symbol": "、",
						"play": "播放",
						"test": "测试卷",
						"video": "VIDEO-MEDIA",
						"ziliao": "ZILIAOKU",
						"noData": "暂无数据",
						"anwser": "答案",
						"testWord": "测试"
					},
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": [{
							"pub_parent_id": ""
						}, {
							"pub_site_id": ""
						}],
						"groupBy": "pub_resource_id",
						"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
						"pageNo": "1",
						"pageSize": "10",
						"searchText": ""
					},
					"sysAdapter": "sykAdapter",
					"typeAdapter": "videoAdapter",
					"toPlayVideo": {
						"url": "../pages/videoplay.html",
						"dataKeys": {
							"parentId": "parentId",
							"id": "id",
							"resType": "pubResType"
						},
						"fixedKeys": {},
						"params": {
							"videoResId": "VIDEO-MEDIA_RESOURCEID"
						}
					},
					"toPlayZLKVideo": {
						"url": "../pages/videoplay.html",
						"dataKeys": {
							"id": "id",
							"parentId": "parentId",
							"resType": "pubResType"
						},
						"fixedKeys": {}
					},
					"maxNum": 10,
					"pageSizes": [10, 30, 50, 100]
				},
				"modulename": {
					"display": {
						"courseContain": "课程包含内容：",
						"courseName": "课程名称",
						"symbol": "、"
					},
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": "[{pub_parent_id:''}]",
						"groupBy": "pub_resource_id",
						"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
						"pageNo": "1",
						"pageSize": "10",
						"searchText": ""
					},
					"sysAdapter": "sykAdapter",
					"typeAdapter": "videoAdapter",
					"toDetail": {
						"url": "../pages/videoplay.html",
						"dataKeys": {
							"parentId": "parentId",
							"id": "id"
						},
						"fixedKeys": {}
					},
					"maxNum": 10,
					"pageSizes": [10, 30, 50, 100],
					"toPlayVideo": {
						"url": "../pages/videoplay.html",
						"dataKeys": {
							"parentId": "parentId",
							"id": "id"
						},
						"fixedKeys": {}
					},
					"showTest": false,
					"needtobuy": false,
					"getResourceDetail": {
						"url": "resource/detail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						}
					},
					"toEbook": {
						"url": "",
						"params": {
							"bookId": "",
							"readType": 1,
							"bookName": "",
							"userName": "",
							"siteType": ""
						}
					},
					"toPlayAudio": {
						"url": "../pages/videoplay.html",
						"dataKeys": {
							"id": "id",
							"parentId": "parentId",
							"resType": "pubResType"
						},
						"fixedKeys": {},
						"params": {
							"audioResId": "AUDIO-MEDIA_RESOURCEID"
						}
					},
					"getAttachPictureUrl": "dynamicFile/stream.do?recordID=",
					"toPlayZLKVideo": {
						"url": "../pages/videoplay.html",
						"dataKeys": {
							"id": "id",
							"resType": "pubResType"
						},
						"fixedKeys": {}
					},
					"freeCourseNum": 1,
					"ziliaozuAttachType": "lowqualitypdf"
				}
			}
		},
		"crumbs": {
			"work_crumbs_02": {
				"videocrumbs": {
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					}
				}
			}
		},
		"navigation": {
			"navigation_05": {
				"videodetailnavigation": {
					"colId": 1127,
					"comTitle": {
						"isShow": true,
						"name": "视频讲座"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"transTitle": "listenTitle",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"directLink": {
						"switchFlag": true,
						"dierctWay": "_self",
						"directRules": {
							"1128": "../pages/videos.html?colId=",
							"1129": "../pages/videos.html?colId=",
							"1130": "../pages/videos.html?colId="
						}
					}
				},
				"moduleName": {
					"colId": 0,
					"comTitle": {
						"isShow": true,
						"name": "华育动态新闻"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"transTitle": "listenTitle",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"directLink": {
						"switchFlag": false,
						"directRules": {
							"1118": "../pages/newslistsnxw?colId=",
							"1119": "../pages/newslistyjxw?colId=",
							"1120": "../pages/newslistzcfg?colId=",
							"1121": "../pages/newslisttpxw?colId=",
							"1122": "../pages/newslistspjx?colId="
						}
					}
				},
				"modulename": {
					"colId": 510,
					"comTitle": {
						"isShow": true,
						"name": "资料中心"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"transDefaultColId": "transDefaultColId",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"transTitle": "listenTitle",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"directLink": {
						"switchFlag": false,
						"dierctWay": "_blank",
						"directRules": {
							"1118": "../pages/newslistsnxw.html?colId=",
							"1119": "../pages/newslistyjxw.html?colId=",
							"1120": "../pages/newslistzcfg.html?colId=",
							"1121": "../pages/newslisttpxw.html?colId=",
							"1122": "../pages/newslistspjx.html?colId="
						}
					},
					"reverseByColId": false
				}
			}
		}
	},
	"videoplay": {
		"work_videoplay": {
			"work_videoplay_01": {
				"videoplay": {
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_parent_id": ""
							}, {
								"pub_site_id": "33"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "videoAdapter"
					},
					"complicatedItem": [{
						"name": "title",
						"field": "resName",
						"display": "",
						"method": ""
					}, {
						"name": "img",
						"field": "picMiddle",
						"display": "",
						"method": ""
					}],
					"playVideoUrl": "dynamicFile/stream.do?recordID=",
					"showVideoList": true,
					"queryParamsType": "url",
					"getDetailById": {
						"url": "spc/cms/publish/detail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						}
					},
					"getResourceDetail": {
						"url": "resource/detail.do",
						"params": {
							"pubId": "",
							"loginName": "",
							"attachTypes": "video"
						}
					}
				},
				"modulename": {
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "1024"
							}, {
								"pub_site_id": ""
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "videoAdapter"
					},
					"complicatedItem": [{
						"name": "",
						"field": "resName",
						"display": "",
						"method": ""
					}],
					"playVideoUrl": "dynamicFile/stream.do?recordID=",
					"showVideoList": false,
					"queryParamsType": "url",
					"getDetailById": {
						"url": "spc/cms/publish/detail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						}
					},
					"getResourceDetail": {
						"url": "resource/detail.do",
						"params": {
							"pubId": "",
							"loginName": "",
							"attachTypes": "video"
						}
					},
					"staticText": {
						"noelseTips": "没有下一个视1111频啦"
					}
				}
			}
		},
		"crumbs": {
			"work_crumbs_02": {
				"videoplaycrumbs": {
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					}
				}
			}
		}
	},
	"videolist": {
		"crumbs": {
			"work_crumbs_02": {
				"videolistcrumbs": {
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					}
				}
			}
		},
		"navigation": {
			"navigation_05": {
				"videolistnavigation": {
					"colId": 1127,
					"comTitle": {
						"isShow": true,
						"name": "视频讲座"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"transTitle": "listenTitle",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"directLink": {
						"switchFlag": false,
						"directRules": {
							"1118": "../pages/newslistsnxw?colId=",
							"1119": "../pages/newslistyjxw?colId=",
							"1120": "../pages/newslistzcfg?colId=",
							"1121": "../pages/newslisttpxw?colId=",
							"1122": "../pages/newslistspjx?colId="
						}
					}
				},
				"moduleName": {
					"colId": 0,
					"comTitle": {
						"isShow": true,
						"name": "华育动态新闻"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"transTitle": "listenTitle",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"directLink": {
						"switchFlag": false,
						"directRules": {
							"1118": "../pages/newslistsnxw?colId=",
							"1119": "../pages/newslistyjxw?colId=",
							"1120": "../pages/newslistzcfg?colId=",
							"1121": "../pages/newslisttpxw?colId=",
							"1122": "../pages/newslistspjx?colId="
						}
					}
				}
			}
		},
		"list_pic": {
			"list_pic_29": {
				"videolist": {
					"comTitle": {
						"isShow": false,
						"isShowImg": false,
						"name": "资讯"
					},
					"toMoreBtn": {
						"isShow": false,
						"iconClass": "el-icon-back",
						"name": "更多",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "250"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "0"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 15,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}]
					},
					"toDetail": {
						"url": "../pages/videodetail.html",
						"dataKeys": {
							"pubId": "id",
							"colId": "colId",
							"resType": "pubResType"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"onEvent": {
						"eventName": "showNavContent",
						"onColumnInfo": "columnInfo"
					},
					"pagination": {
						"showPagination": true,
						"pagesize": [15, 30, 50, 100]
					},
					"isMobileLoading": false,
					"toOrderByBtn": {
						"name": "排序：",
						"isShow": false,
						"itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
						"itemList": [{
							"name": "默认",
							"itemField": "pub_a_order asc pub_lastmodified desc id asc"
						}, {
							"name": "最新",
							"itemField": "pub_created asc id asc"
						}, {
							"name": "热门",
							"itemField": "pub_read_num asc id asc"
						}]
					},
					"staticText": {
						"noImg": "暂无图片",
						"noData": "暂无数据",
						"noDate": "暂无日期",
						"yuan": "￥"
					},
					"showSearchBtn": false
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"isShowImg": false,
						"name": "资讯"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "el-icon-back",
						"name": "更多",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "250"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "250"
							}, {
								"pub_status": "1"
							}, {
								"pub_parent_id": "0"
							}, {
								"BOOK_BOOK_CASCADID": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 1,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}]
					},
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"onEvent": {
						"eventName": "showNavContent",
						"onColumnInfo": "columnInfo"
					},
					"pagination": {
						"showPagination": true,
						"pagesize": [15, 30, 50, 100]
					},
					"isMobileLoading": false,
					"toOrderByBtn": {
						"name": "排序：",
						"isShow": false,
						"itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
						"itemList": [{
							"name": "默认",
							"itemField": "pub_a_order asc pub_lastmodified desc id asc"
						}, {
							"name": "最新",
							"itemField": "pub_created asc id asc"
						}, {
							"name": "热门",
							"itemField": "pub_read_num asc id asc"
						}]
					},
					"staticText": {
						"noImg": "暂无图片",
						"noData": "暂无数据",
						"noDate": "暂无日期",
						"yuan": "￥"
					},
					"showSearchBtn": true
				}
			}
		}
	},
	"informationdetail": {
		"bookreview": {
			"bookreview_01": {
				"queryComments": {
					"url": "comment/comments.do",
					"params": {
						"pubId": "",
						"pageIndex": 1,
						"pageSize": 15,
						"siteId": 33
					}
				},
				"addComment": {
					"url": "comment/addComment.do",
					"params": {
						"pubId": "",
						"loginName": "",
						"content": "",
						"starNum": 0,
						"deviceName": "pc",
						"colId": "",
						"siteId": 33,
						"type": "1",
						"parentId": "0",
						"activityId": ""
					}
				},
				"pagination": {
					"showPagination": true,
					"pagesize": [15, 30, 50, 100]
				},
				"operList": {
					"review": {
						"reviewShow": true,
						"toReviewInfoUrl": "../pages/reviewDetail.html"
					},
					"like": {
						"likeShow": true
					}
				},
				"orReGetMenberName": true,
				"toAddReview": {
					"toAddReviewShow": true,
					"toAddReviewName": "评论",
					"toAddReviewUrl": "../pages/reviewPublish.html"
				},
				"staticText": {
					"comments": "评论",
					"noHeadPicture": "暂无头像",
					"noComments": "暂无评论",
					"commentsEmptyInfo": "评论内容不能为空",
					"pleaseGradeBeforeSubmitting": "请先评分再提交评论~",
					"commentAddFailed": "评论添加失败",
					"contentBefore": "您还可以输入",
					"contentAfter": "个字"
				},
				"resourceDetail": {
					"sysAdapter": "sykAdapter",
					"typeAdapter": "bookAdapter",
					"isDiscussLimit": true
				}
			}
		},
		"work_bookdetail": {
			"work_bookdetail_04": {
				"informationdetail": {
					"getResourceDetail": {
						"url": "resource/detail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"complicatedItem": {
							"one": [{
								"name": "",
								"field": "resName",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}],
							"two": [{
								"name": "time",
								"field": "pubTime",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "source",
								"display": "来源：",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "authors",
								"display": "作者：",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}],
							"three": [{
								"name": "share",
								"field": "",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}],
							"four": [{
								"name": "",
								"field": "content",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}]
						}
					},
					"toProbation": {
						"url": "../../../reader/kspdf/read.jsp",
						"dataKeys": {
							"bookId": "resId",
							"bookName": "resName"
						},
						"fixedKeys": {
							"siteType": 0,
							"readType": 0
						}
					},
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toBuy": {
						"url": "../pages/bookBuy.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 320,
					"infoImgHeight": 220,
					"tabConfigList": {
						"tabConfigshow": false,
						"tabShow": false,
						"reviewShow": false,
						"tabList": ["详情", "评论"],
						"tabActiveIndex": 0,
						"toAllReviewName": "查看全部评论",
						"toAllReviewMethod": {
							"method": "toReviewList"
						}
					},
					"getPublicizeInfo": {
						"url": "spc/prodb/publicize.do",
						"params": {
							"doclibCode": "BOOK",
							"docID": ""
						},
						"isShowPublicize": false,
						"showPublicize": ["前言", "内容简介", "目录"]
					},
					"getAudioAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": 33,
							"attachTypes": "audio"
						},
						"isShowAudio": false
					},
					"addCart": {
						"url": "cart/addCart.do",
						"params": {
							"number": "",
							"loginName": "",
							"activityId": 0,
							"pubId": "",
							"siteId": 33
						}
					},
					"collectOrLike": {
						"url": "collection/addCollect.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"operateType": 0,
							"productId": "",
							"siteId": 33
						}
					},
					"toReviewList": {
						"url": "../pages/reviewlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"bookContentType": {
						"bookType": "91",
						"ebookType": "94"
					},
					"getPubidByLocationQueryFromSyk": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"queryParams": {
							"title": "BOOK_SYS_TOPIC"
						}
					},
					"staticText": {
						"noImg": "暂无图片",
						"noResource": "暂无",
						"quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
						"systemPrompt": "系统提示",
						"OK": "确定",
						"noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
						"noEBookInfo": "该书没有对应电子书，无法加入购物车",
						"noDate": "暂无日期",
						"yuan": "￥"
					}
				},
				"modulename": {
					"getResourceDetail": {
						"url": "book/getBookDetail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"complicatedItem": {
							"one": [{
								"name": "",
								"field": "",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}],
							"two": [{
								"name": "",
								"field": "",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}]
						}
					},
					"toProbation": {
						"url": "../../../reader/kspdf/read.jsp",
						"dataKeys": {
							"bookId": "resId",
							"bookName": "resName"
						},
						"fixedKeys": {
							"siteType": 0,
							"readType": 0
						}
					},
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toBuy": {
						"url": "../pages/bookBuy.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 320,
					"infoImgHeight": 220,
					"tabConfigList": {
						"tabShow": true,
						"reviewShow": true,
						"tabList": ["详情", "评论"],
						"tabActiveIndex": 0,
						"toAllReviewName": "查看全部评论",
						"toAllReviewMethod": {
							"method": "toReviewList"
						}
					},
					"getPublicizeInfo": {
						"url": "spc/prodb/publicize.do",
						"params": {
							"doclibCode": "BOOK",
							"docID": ""
						},
						"isShowPublicize": true,
						"showPublicize": ["前言", "内容简介", "目录"]
					},
					"getAudioAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": 33,
							"attachTypes": "audio"
						},
						"isShowAudio": true
					},
					"addCart": {
						"url": "cart/addCart.do",
						"params": {
							"number": "",
							"loginName": "",
							"activityId": 0,
							"pubId": "",
							"siteId": 33
						}
					},
					"collectOrLike": {
						"url": "collection/addCollect.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"operateType": 0,
							"productId": "",
							"siteId": 33
						}
					},
					"toReviewList": {
						"url": "../pages/reviewlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"bugButton": {
						"display": "立即购买",
						"method": "toBuy",
						"display1": "加入书架",
						"method1": "toBuy",
						"display2": "开始阅读",
						"method2": "toProbation"
					},
					"bookContentType": {
						"bookType": "91",
						"ebookType": "94"
					},
					"getPubidByLocationQueryFromSyk": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"queryParams": {
							"title": "BOOK_SYS_TOPIC"
						}
					},
					"staticText": {
						"noImg": "暂无图片",
						"noResource": "暂无",
						"quantityOfGoodsMustNotExceedTwoHundred": "商品数量不能大于200",
						"systemPrompt": "系统提示",
						"OK": "确定",
						"noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
						"noEBookInfo": "该书没有对应电子书，无法加入购物车",
						"noDate": "暂无日期",
						"yuan": "￥"
					},
					"showDialog": false,
					"zhentiContentType": "123",
					"display": {
						"courseUseTime": "使用期限：",
						"buyCourse": "课程购买",
						"sure": "确认支付",
						"cancel": "取消",
						"needPay": "需支付：",
						"payWay": "支付方式",
						"zhifubao": "支付宝",
						"weixin": "微信",
						"drumpPage": "正在跳转支付页面..."
					},
					"getPayMethodsBySiteId": {
						"url": "cart/getPayMethod.do",
						"params": {
							"siteId": ""
						}
					},
					"commitOrderUrl": "order/submitSplitOrder.do",
					"combinateProductCfg": {
						"show": true,
						"title": "组合购买",
						"lastBtn": "加入购物车",
						"showCombinateItem": 3,
						"addCart": {
							"url": "cart/addCombinateProductToCart.do",
							"params": {
								"loginName": "",
								"siteId": 37,
								"combinateId": ""
							}
						},
						"toDetail": {
							"url": "booldetail.html",
							"params": {}
						}
					},
					"loginUrl": "../../pages/login.html",
					"judgeInventory": {
						"showInventory": true,
						"noPaperBook": "没有对应的纸质书",
						"lessInventory": "纸质书库存不足",
						"enoughInventory": "纸质书库存充足"
					}
				}
			}
		},
		"share": {
			"ui_share_01": {
				"informationdetailshare": {
					"shareLists": [{
						"title": "分享更多",
						"class": "bds_more",
						"cmd": "more"
					}, {
						"title": "分享到QQ空间",
						"class": "bds_qzone",
						"cmd": "qzone"
					}, {
						"title": "分享到新浪微博",
						"class": "bds_tsina",
						"cmd": "tsina"
					}, {
						"title": "分享到人人网",
						"class": "bds_renren",
						"cmd": "renren"
					}]
				},
				"modulename": {
					"shareLists": [{
						"title": "分享到QQ空间",
						"class": "bds_qzone",
						"cmd": "qzone"
					}, {
						"title": "分享到新浪微博",
						"class": "bds_tsina",
						"cmd": "tsina"
					}, {
						"title": "分享到腾讯微博",
						"class": "bds_tqq",
						"cmd": "tqq"
					}, {
						"title": "分享到人人网",
						"class": "bds_renren",
						"cmd": "renren"
					}]
				}
			}
		}
	},
	"index_k": {
		"list_pic": {
			"list_pic_29": {
				"splb": {
					"comTitle": {
						"isShow": true,
						"name": "동영상강좌"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "| 더 보기>>",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "1334"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "1334"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "4",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 4,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "sourceUrl"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "sourceUrl"
						}]
					},
					"toDetail": {
						"url": "../pages/videodetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/videos_k.html",
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"pagination": {
						"showPagination": false,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"rmts": {
					"comTitle": {
						"isShow": true,
						"name": "핫상품 추천"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "| 더 보기 >>",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "503"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "503"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 8,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "",
							"field": "sysAuthors",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": ""
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/bookList_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"pagination": {
						"showPagination": false,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"zxdt": {
					"comTitle": {
						"isShow": true,
						"name": "최신 뉴스"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "el-icon-back",
						"name": "더보기 》",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "943"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "943"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 6,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "time",
							"field": "pubTime",
							"display": "",
							"method": ""
						}]
					},
					"toDetail": {
						"url": "../pages/informationdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/helpCenter_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"pagination": {
						"showPagination": false,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"zxts": {
					"comTitle": {
						"isShow": true,
						"name": "새책추천"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "| 더 보기>>",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "504"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "504"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 8,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": ""
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/bookList_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"pagination": {
						"showPagination": false,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "자료와 정보"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "el-icon-back",
						"name": "더 보기",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "250"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "250"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 1,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}]
					},
					"toDetail": {
						"url": "../pages/informationdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"onEvent": {
						"eventName": "showNavContent"
					},
					"pagination": {
						"showPagination": true,
						"pagesize": [15, 30, 50, 100]
					},
					"isMobileLoading": false,
					"toOrderByBtn": {
						"name": "차례：",
						"isShow": false,
						"itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
						"itemList": [{
							"name": "디폴트?",
							"itemField": "pub_a_order asc pub_lastmodified desc id asc"
						}, {
							"name": "최신",
							"itemField": "pub_created asc id asc"
						}, {
							"name": "인기상품",
							"itemField": "pub_read_num asc id asc"
						}]
					},
					"staticText": {
						"noImg": "이미지 없음",
						"noData": "데터 없음",
						"noDate": "날자 없음",
						"yuan": "￥"
					},
					"showSearchBtn": true,
					"emitEvent": {
						"contextEventName": ""
					}
				}
			},
			"list_pic_33": {
				"xsph": {
					"comTitle": {
						"isShow": true,
						"name": "판매 순위"
					},
					"toMoreBtn": {
						"isShow": false,
						"iconClass": "",
						"name": "더 보기>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "505"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "505"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": true,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "정가：",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/booklist_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "판매 순위"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "더 보기>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "131"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "131"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": false,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail_k.html",
						"dataKeys": {
							"pubId": "pubId"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/booklist_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140
				},
				"staticText": {
					"noData": "데터 없음",
					"noImg": "사진 없음"
				},
				"test": {
					"comTitle": {
						"isShow": true,
						"name": "판매 순위"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "더 보기>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "131"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "131"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": false,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail_k.html",
						"dataKeys": {
							"pubId": "pubId"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/booklist_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140,
					"staticText": {
						"noData": "데터 없음",
						"noImg": "이미지 없음",
						"yuan": "￥",
						"notHaveYet": "없음",
						"noDate": "날자 없음"
					}
				}
			}
		},
		"swiper": {
			"pic_01": {
				"height": "360px",
				"interval": 5000,
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": "[{'pub_col_id':'506'}]",
					"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": null
				},
				"sysAdapter": "sykAdapter",
				"typeAdapter": "newsAdapter",
				"showItem": ["button"],
				"complicatedItem": [{
					"name": "button",
					"field": "resName",
					"display": "",
					"method": "toDetail"
				}],
				"toDetail": {
					"url": "../pages/informationdetail_k.html",
					"dataKeys": {
						"pubId": "id"
					},
					"fixedKeys": {}
				},
				"staticText": {
					"noImg": "이미지 없음",
					"noDate": "날자 없음",
					"yuan": "￥"
				}
			},
			"swiper_08": {
				"sygg": {
					"display": {},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": "[{pub_col_id: 1259}]",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 1,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter"
					},
					"imgMaxWidth": 300,
					"imgMaxHeight": 100,
					"toDetail": {
						"url": "",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "",
						"dataKeys": {
							"colId": "colId"
						},
						"fixedKeys": {}
					},
					"staticText": {
						"noImg": "사진 없음"
					}
				},
				"modulename": {
					"display": {},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": "[{pub_col_id: 133}]",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 1,
						"maxNum": 4,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter"
					},
					"imgMaxWidth": 300,
					"imgMaxHeight": 100,
					"toDetail": {
						"url": "",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "",
						"dataKeys": {
							"colId": "colId"
						},
						"fixedKeys": {}
					},
					"staticText": {
						"noImg": "그림이 없음"
					}
				}
			}
		}
	},
	"aboutUs_k": {
		"navigation": {
			"navigation_05": {
				"cbsjs": {
					"showLang": "Korean",
					"colId": 507,
					"comTitle": {
						"isShow": true,
						"name": "출판사 소개"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"transDefaultColId": "transDefaultColId",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"keys": {
							"colId": "pub_col_id"
						}
					}
				},
				"modulename": {
					"colId": 245,
					"comTitle": {
						"isShow": true,
						"name": "최신뉴스"
					},
					"showChildren": false,
					"broadcastName": "showNavContent",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"showThreeColumn": false,
					"transTitle": "transNavTitle",
					"transDefaultColId": "transDefaultColId",
					"directLink": {
						"switchFlag": false,
						"dierctWay": "_blank",
						"directRules": {
							"1118": "../pages/newslistsnxw.html?colId=",
							"1119": "../pages/newslistyjxw.html?colId=",
							"1120": "../pages/newslistzcfg.html?colId=",
							"1121": "../pages/newslisttpxw.html?colId=",
							"1122": "../pages/newslistspjx.html?colId="
						}
					},
					"reverseByColId": false,
					"showLang": "Korean"
				}
			}
		},
		"information": {
			"information_02": {
				"aboutcontent": {
					"comTitle": {
						"isShow": false,
						"name": "자료와 정보"
					},
					"display": {},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "993"
							}, {
								"pub_status": "1"
							}],
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						}
					},
					"getResource": {
						"url": "spc/cms/publish/detail.do",
						"params": {
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["content"],
						"complicatedItem": [{
							"name": "content",
							"field": "content",
							"display": ""
						}]
					},
					"broadcastName": "showNavContent"
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "자료와 정보"
					},
					"display": {},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "249"
							}, {
								"pub_status": "1"
							}],
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						}
					},
					"getResource": {
						"url": "spc/cms/publish/detail.do",
						"params": {
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["lastModifyDate", "createdDate", "content"],
						"complicatedItem": [{
							"name": "title",
							"field": "topic",
							"display": ""
						}, {
							"name": "lastModifyDate",
							"field": "lastModified",
							"display": "최종수정일"
						}, {
							"name": "createdDate",
							"field": "created",
							"display": "올린날짜"
						}, {
							"name": "authors",
							"field": "authors",
							"display": "작자"
						}, {
							"name": "sort",
							"field": "colName",
							"display": "분류"
						}, {
							"name": "content",
							"field": "content",
							"display": ""
						}]
					},
					"broadcastName": "showNavContent",
					"staticText": {
						"noDate": "날자 없음"
					}
				}
			}
		},
		"crumbs": {
			"work_crumbs_02": {
				"crumbs": {
					"showLang": "Korean",
					"staticText": {
						"currentPosition": "현재위치"
					},
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					}
				},
				"modulename": {
					"showLang": "Korean",
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					},
					"staticText": {
						"currentPosition": "현재위치"
					}
				}
			}
		},
		"work_videoplay": {
			"work_videoplay_01": {
				"aboutvideoplay": {
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "1021"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "videoAdapter",
						"typeAdapter1": "audioAdapter"
					},
					"complicatedItem": [],
					"playVideoUrl": "dynamicFile/stream.do?recordID=",
					"showVideoList": false,
					"queryParamsType": ""
				},
				"modulename": {
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_parent_id": ""
							}, {
								"pub_site_id": ""
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "videoAdapter",
						"typeAdapter1": "audioAdapter"
					},
					"complicatedItem": [{
						"name": "title",
						"field": "resName",
						"display": "",
						"method": ""
					}, {
						"name": "img",
						"field": "picBig",
						"display": "",
						"method": ""
					}],
					"playVideoUrl": "dynamicFile/stream.do?recordID=",
					"showVideoList": true,
					"queryParamsType": "url",
					"getDetailById": {
						"url": "spc/cms/publish/detail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						}
					},
					"staticText": {
						"noelseTips": "마지막 입니다"
					},
					"getResourceDetail": {
						"url": "resource/detail.do",
						"params": {
							"pubId": "",
							"loginName": "",
							"attachTypes": "video"
						}
					},
					"event": {
						"emitDetail_name": "resourceDetailLoaded"
					}
				}
			}
		}
	},
	"activity_k": {
		"swiper": {
			"swiper_07": {
				"getListData": {
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": "[{pub_col_id:'1284'}]",
						"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
						"pageNo": "1",
						"pageSize": "15",
						"searchText": null
					},
					"keys": {
						"bigPicture": "pub_picBig",
						"pubId": "id",
						"sourceUrl": "information_a_sourceUrl"
					}
				},
				"getRelatedData": {
					"url": "spc/cms/publish/relatedZX.do",
					"params": {
						"pubId": ""
					},
					"toDetailurl": "../pages/informationdetail_k.html?pubId="
				},
				"height": "360px",
				"interval": 5000,
				"linkType": "source"
			},
			"pic_01": {
				"height": "360px",
				"interval": 5000,
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": "[{'pub_col_id':'1281'}]",
					"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": null
				},
				"sysAdapter": "sykAdapter",
				"typeAdapter": "newsAdapter",
				"showItem": ["button"],
				"complicatedItem": [{
					"name": "button",
					"field": "resName",
					"display": "",
					"method": "toDetail"
				}],
				"toDetail": {
					"url": "../pages/informationdetail_k.html",
					"dataKeys": {
						"pubId": "id"
					},
					"fixedKeys": {}
				},
				"staticText": {
					"noImg": "사진 없음",
					"noDate": "날자 없음",
					"yuan": "￥"
				}
			}
		},
		"list_pic": {
			"ui_list_pic_22": {
				"url": "spc/cms/col/getColNextLevelNode",
				"params": {
					"colId": "1265"
				},
				"activityListUrl": "./activitylist_k.html",
				"keys": {
					"pub_picMiddle": "pub_picMiddle",
					"id": "id",
					"PORTAL_ACTIVITY_SYS_TOPIC": "PORTAL_ACTIVITY_SYS_TOPIC",
					"PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW": "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
					"PORTAL_ACTIVITY_END_TIMESTAMPNEW": "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
					"reviewDate": "PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW",
					"small_pic": "small_pic",
					"name": "name",
					"contentCode": "contentCode"
				},
				"getActivityList": {
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": [{
							"pub_col_id": "253"
						}],
						"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
						"pageNo": "1",
						"pageSize": "3",
						"searchText": null
					},
					"detailHref": {
						"activityrace": "./activityrace_k.html",
						"activityvote": "./activityvote_k.html",
						"activityshow": "./activityshow_k.html"
					},
					"baseKeys": {
						"id": "id",
						"resourceType": "pub_resource_type",
						"pub_picMiddle": "pub_picMiddle"
					},
					"keys": {
						"contribute": {
							"topic": "PORTAL_ACTIVITY_SYS_TOPIC",
							"beginTime": "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
							"endTime": "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
							"reviewDate": "PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW"
						},
						"vote": {
							"topic": "PORTAL_VOTEACTIVITY_SYS_TOPIC",
							"beginTime": "PORTAL_VOTEACTIVITY_BEGIN_TIMESTAMPNEW",
							"endTime": "PORTAL_VOTEACTIVITY_END_TIMESTAMPNEW",
							"reviewDate": ""
						},
						"show": {
							"topic": "PORTAL_SHOWACTIVITY_SYS_TOPIC",
							"beginTime": "",
							"endTime": "",
							"reviewDate": ""
						}
					}
				},
				"baseKeys": {
					"id": "id",
					"resourceType": "pub_resource_type",
					"pub_picMiddle": "pub_picMiddle"
				},
				"showActivityTypeStr": "PORTAL_ACTIVITY",
				"staticText": {
					"activityTime": "행사 시간：",
					"seeMore": "더 보기...",
					"noImg": "이미지 없음",
					"to": "까지",
					"notBegin": "행사 준비 중",
					"inProgress": "행사 진행 중",
					"appraisalBonus": "수상자 선정 중",
					"haveFinished": "행사 종료",
					"noDate": "날자 없음"
				}
			}
		}
	},
	"list_k": {
		"list_word": {
			"list_word_01": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": [{
						"pub_col_id": "1285"
					}],
					"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": null
				},
				"startNum": 0,
				"locationQuery": {
					"keys": {
						"colId": "colId"
					}
				},
				"staticText": {
					"noDate": "날자 없음"
				}
			}
		}
	},
	"activitylist_k": {
		"list_pic": {
			"ui_list_pic_21": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": "[{\"pub_col_id\":\"253\"}]",
					"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "8",
					"searchText": null
				},
				"detailHref": "./activityrace_k.html",
				"keys": {
					"pub_picMiddle": "pub_picMiddle",
					"id": "id",
					"PORTAL_ACTIVITY_SYS_TOPIC": "PORTAL_ACTIVITY_SYS_TOPIC",
					"PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW": "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
					"PORTAL_ACTIVITY_END_TIMESTAMPNEW": "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
					"activityStatus": "activityStatus",
					"reviewDate": "PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW",
					"contribute": {
						"topic": "PORTAL_ACTIVITY_SYS_TOPIC",
						"beginTime": "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
						"endTime": "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
						"reviewDate": "PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW"
					},
					"vote": {
						"topic": "PORTAL_VOTEACTIVITY_SYS_TOPIC",
						"beginTime": "PORTAL_VOTEACTIVITY_BEGIN_TIMESTAMPNEW",
						"endTime": "PORTAL_VOTEACTIVITY_END_TIMESTAMPNEW",
						"reviewDate": ""
					},
					"show": {
						"topic": "PORTAL_SHOWACTIVITY_SYS_TOPIC",
						"beginTime": "",
						"endTime": "",
						"reviewDate": ""
					}
				},
				"pageSizes": [8, 16, 32, 48],
				"getColDetail": {
					"url": "spc/cms/col/getColumnByIdForSite",
					"keys": {
						"name": "name"
					},
					"params": {
						"colId": "colId"
					}
				},
				"baseKeys": {
					"id": "id",
					"resourceType": "pub_resource_type",
					"pub_picMiddle": "pub_picMiddle"
				},
				"staticText": {
					"activityTime": "활동 시간：",
					"to": "~까지",
					"noImg": "이미지 없음",
					"notBegin": "행사 준비 중",
					"inProgress": "진행 중",
					"appraisalBonus": "수상자 선정 중",
					"haveFinished": "행사 종료",
					"noDate": "날자 없음"
				},
				"showItem": []
			},
			"url": "spc/cms/publish/list.do",
			"params": {
				"conditions": "[{\"pub_col_id\":\"253\"}]",
				"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
				"pageNo": "1",
				"pageSize": "8",
				"searchText": null
			},
			"detailHref": {
				"activityrace": "./activityrace.html",
				"activityvote": "./activityvote.html",
				"activityshow": "./activityshow.html"
			},
			"baseKeys": {
				"id": "id",
				"resourceType": "pub_resource_type",
				"pub_picMiddle": "pub_picMiddle"
			},
			"keys": {
				"contribute": {
					"topic": "PORTAL_ACTIVITY_SYS_TOPIC",
					"beginTime": "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
					"endTime": "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
					"reviewDate": "PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW"
				},
				"vote": {
					"topic": "PORTAL_VOTEACTIVITY_SYS_TOPIC",
					"beginTime": "PORTAL_VOTEACTIVITY_BEGIN_TIMESTAMPNEW",
					"endTime": "PORTAL_VOTEACTIVITY_END_TIMESTAMPNEW",
					"reviewDate": ""
				},
				"show": {
					"topic": "PORTAL_SHOWACTIVITY_SYS_TOPIC",
					"beginTime": "",
					"endTime": "",
					"reviewDate": ""
				}
			},
			"pageSizes": [8, 16, 32, 48],
			"showItem": ["title"],
			"getColDetail": {
				"url": "spc/cms/col/getColumnByIdForSite",
				"keys": {
					"name": "name"
				},
				"params": {
					"colId": "colId"
				}
			},
			"staticText": {
				"activityTime": "活动时间：",
				"to": "至",
				"noImg": "暂无图片",
				"notBegin": "未开始",
				"inProgress": "进行中",
				"appraisalBonus": "评奖中",
				"haveFinished": "已结束",
				"noDate": "暂无日期"
			}
		},
		"list_word": {
			"list_word_01": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": [{
						"pub_col_id": "1285"
					}],
					"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": null
				},
				"startNum": 0,
				"locationQuery": {
					"keys": {
						"colId": "columnId"
					}
				},
				"staticText": {
					"noDate": "날자 없음"
				}
			},
			"url": "spc/cms/publish/list.do",
			"params": {
				"conditions": [{
					"pub_col_id": "249"
				}],
				"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
				"pageNo": "1",
				"pageSize": "15",
				"searchText": null
			},
			"startNum": 0,
			"locationQuery": {
				"keys": {
					"colId": "colId"
				}
			},
			"staticText": {
				"noDate": "暂无日期"
			}
		},
		"advert": {
			"ui_advert_01": {
				"activitylist": {
					"getList": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": "[{pub_col_id:'274'}]",
							"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": null
						},
						"keys": {
							"pic": "pub_picBig",
							"sourceLink": "information_a_sourceUrl"
						}
					}
				},
				"modulename": {
					"getList": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": "[{pub_col_id:'263'}]",
							"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": null
						},
						"keys": {
							"pic": "pub_picBig",
							"sourceLink": "information_a_sourceUrl"
						}
					}
				}
			}
		},
		"common": {
			"work_common_06": {
				"name": {
					"showLang": "Korean",
					"getColDetail": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"keys": {
							"name": "name",
							"code": "code"
						},
						"params": {
							"colId": "colId"
						}
					},
					"showItem": ["title"]
				},
				"modulename": {
					"getColDetail": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"keys": {
							"name": "name"
						},
						"params": {
							"colId": "colId"
						}
					},
					"showItem": ["title"]
				}
			}
		}
	},
	"addcart_k": {
		"list_pic": {
			"list_pic_23": {
				"userbook": {
					"title": "이 책을 산 고객은 또 ~을 샀습니다",
					"url": "cart/getOtherBookList.do",
					"params": {
						"pubId": "",
						"loginName": ""
					},
					"detailHref": "../pages/bookdetail_k.html?pubId=",
					"maxNum": 4,
					"staticText": {
						"author": "작자:",
						"comments": "평론  ~개",
						"noData": "데터 없음",
						"noImg": "사진 없음",
						"noIntroduction": "소개 없음",
						"noBookName": "책제목 없음",
						"noAuthor": "작자 없음",
						"yuan": "￥"
					}
				},
				"otherbook": {
					"title": "본 작자의 기타 도서",
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": [{
							"pub_resource_type": "BOOK"
						}, {
							"pub_site_id": 2
						}],
						"groupBy": "pub_resource_id",
						"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
						"pageNo": "1",
						"pageSize": "15",
						"searchText": ""
					},
					"detailHref": "../pages/bookdetail_k.html?pubId=",
					"maxNum": 4,
					"staticText": {
						"author": "작자:",
						"comments": "평론  ~개",
						"noData": "데터 없음",
						"noImg": "사진 없음",
						"noIntroduction": "소개 없음",
						"noBookName": "책제목 없음",
						"noAuthor": "작자 없음",
						"yuan": "￥"
					}
				}
			}
		},
		"shoppingCart": {
			"shoppingCart_02": {
				"url": "api/book/getBookDetail.do",
				"params": {
					"loginName": "",
					"pubId": "",
					"siteId": 2
				},
				"bookType": "91",
				"ebookType": "94",
				"toDetailUrl": "../pages/bookdetail_k.html",
				"toIndexHref": "../pages/index_k.html",
				"toShoppingCartHref": "../pages/shoppingcart_k.html",
				"staticText": {
					"addCartSuccess": "책바구니 담기 성공！",
					"author": "작자:",
					"eProduct": "디지털상품",
					"backShopping": "홈으로 가기",
					"settleAccountInShoppingCart": "바로 계산",
					"noImg": "이미지 없음"
				}
			}
		}
	},
	"bookdetail_k": {
		"list_pic": {
			"picListBook": {
				"historyrecord": {
					"title": "최근 검색한 상품",
					"url": "browserHistory/getHistoryList.do",
					"params": {
						"num": 4,
						"username": ""
					},
					"href": "./bookdetail_k.html?pubId=",
					"getBookDetail": {
						"url": "book/getBookDetail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						}
					},
					"staticText": {
						"hits": "히트 수：",
						"price": "가격：￥",
						"deleteSuccess": "삭제 성공！",
						"deleteFailed": "삭제 실패！",
						"noCover": "표지 없음"
					}
				},
				"hotsalebank": {
					"title": "인기상품순위",
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": "[{pub_col_id:'131'},{pub_status:'1'}]",
						"groupBy": "pub_resource_id",
						"orderBy": "pub_read_num desc",
						"pageNo": "1",
						"pageSize": "4",
						"searchText": ""
					},
					"href": "./bookdetail_k.html?pubId=",
					"staticText": {
						"hits": "히트 수：",
						"price": "가격：￥",
						"deleteSuccess": "삭제 성공！",
						"deleteFailed": "삭제 실패！",
						"noCover": "표지 없음"
					}
				}
			}
		},
		"work_bookdetail": {
			"work_bookdetail_04": {
				"bookdetail": {
					"qrcodeHref": "../pages/qrcode_k.html?data=",
					"errorpageHref": "../pages/errorpage_k.html",
					"commitorderHref": "../pages/commitorder_k.html#/commitOrder/",
					"getResourceDetail": {
						"url": "book/getBookDetail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"complicatedItem": {
							"first": [{
								"name": "img",
								"field": "picBig",
								"display": "",
								"method": "",
								"className": ""
							}],
							"five": [{
								"name": "button",
								"field": "resName",
								"display": "",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "sysAuthors",
								"display": "작자：",
								"method": "",
								"className": ""
							}],
							"second": [{
								"name": "bPrice",
								"field": "memberPrice",
								"display": "도서 판매가：",
								"method": "",
								"className": ""
							}, {
								"name": "bPrice",
								"field": "salePrice",
								"display": "도서 원가：",
								"method": "",
								"className": ""
							}, {
								"name": "ebPrice",
								"field": "memberPrice",
								"display": "전자책 판매가：",
								"method": "",
								"className": ""
							}, {
								"name": "activity",
								"field": "activityList",
								"display": "판촉：",
								"method": "",
								"className": ""
							}],
							"third": [{
								"name": "like",
								"field": "",
								"display": "좋아요",
								"method": "collectOrLike",
								"className": "fa fa-thumbs-up"
							}, {
								"name": "collect",
								"field": "",
								"display": "장바구니 넣기",
								"method": "collectOrLike",
								"className": "fa fa-heart"
							}, {
								"name": "share",
								"field": "",
								"display": "모멘트 공유",
								"method": "",
								"className": "fa fa-share-alt"
							}],
							"four": [{
								"name": "",
								"field": "",
								"display": "상태：",
								"method": "",
								"className": ""
							}, {
								"name": "probation",
								"field": "",
								"display": "무료로 읽어보기",
								"method": "toProbation",
								"className": "fa fa-book"
							}, {
								"name": "addcart",
								"field": "",
								"display": "종이 책 구입",
								"method": "addCart",
								"className": "fa fa-shopping-cart"
							}, {
								"name": "addebcart",
								"field": "",
								"display": "전자책 구매하기",
								"method": "addCart",
								"className": "fa fa-tablet"
							}],
							"six": [{
								"name": "",
								"field": "pressName",
								"display": "출판사：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "isbn",
								"display": "ISBN：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "bookVersion",
								"display": "버전：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "",
								"display": "쪽수：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "fitment",
								"display": "포장：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "format",
								"display": "크기：",
								"method": "",
								"className": ""
							}, {
								"name": "time",
								"field": "pubdate",
								"display": "출판 시간：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "language",
								"display": "언어：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "textNum",
								"display": "쪽수：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "",
								"display": "시리즈：",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "bookwords",
								"display": "글자수：",
								"method": "",
								"className": ""
							}]
						}
					},
					"toProbation": {
						"url": "../../../reader/ebook/read.jsp",
						"dataKeys": {
							"bookId": "resId",
							"bookName": "resName"
						},
						"fixedKeys": {
							"siteType": 0,
							"readType": 0
						}
					},
					"toDetail": {
						"url": "../pages/informationdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 320,
					"infoImgHeight": 220,
					"tabConfigList": {
						"tabConfigshow": true,
						"tabShow": true,
						"reviewShow": true,
						"tabList": ["상품소개", "상품토론"],
						"tabActiveIndex": 0,
						"toAllReviewName": "전부평론",
						"toAllReviewMethod": {
							"method": "toReviewList"
						}
					},
					"getPublicizeInfo": {
						"url": "spc/prodb/publicize.do",
						"params": {
							"doclibCode": "BOOK",
							"docID": ""
						},
						"isShowPublicize": true,
						"showPublicize": ["내용소개", "작가소개", "편자소개", "목차"]
					},
					"getAudioAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": 33,
							"attachTypes": "audio"
						},
						"isShowAudio": false
					},
					"addCart": {
						"url": "cart/addCart.do",
						"params": {
							"number": "",
							"loginName": "",
							"activityId": 0,
							"pubId": "",
							"siteId": 33
						}
					},
					"collectOrLike": {
						"url": "collection/addCollect.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"operateType": 0,
							"productId": "",
							"siteId": 33
						}
					},
					"toReviewList": {
						"url": "../pages/reviewlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"bookContentType": {
						"bookType": "91",
						"ebookType": "94"
					},
					"toBuy": {
						"url": "../pages/bookBuy.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"staticText": {
						"noImg": "이미지 없음",
						"noResource": "없음",
						"quantityOfGoodsMustNotExceedTwoHundred": "상품수는 200보다 작아야 함",
						"systemPrompt": "시스템 알림",
						"OK": "확인",
						"noPaperBookInfo": "책이 없으므로 책바구니에 담을 수 없음",
						"noEBookInfo": "책이 없으므로 책바구니에 담을 수 없음",
						"noDate": "날자 없음",
						"yuan": "¥",
						"noDiscount": "진행중의 이벤트가 없습니다",
						"price": "가격",
						"combinatePrice": "세트가격",
						"save": "성"
					}
				},
				"modulename": {
					"qrcodeHref": "../pages/qrcode_k.html?data=",
					"errorpageHref": "../pages/errorpage_k.html",
					"commitorderHref": "../pages/commitorder_k.html#/commitOrder/",
					"getResourceDetail": {
						"url": "book/getBookDetail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "",
							"className": ""
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "",
							"className": ""
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "도서 판매가",
							"method": "",
							"className": ""
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "전자책 판매가",
							"method": "",
							"className": ""
						}, {
							"name": "price",
							"field": "price",
							"display": "도서 원가",
							"method": "",
							"className": ""
						}, {
							"name": "probation",
							"field": "",
							"display": "무료로 읽어보기",
							"method": "toProbation",
							"className": "fas fa-book"
						}, {
							"name": "addcart",
							"field": "",
							"display": "쇼핑차에 추가",
							"method": "addCart",
							"className": ""
						}, {
							"name": "addebcart",
							"field": "",
							"display": "전자책 장바구니 담기",
							"method": "addCart",
							"className": ""
						}, {
							"name": "like",
							"field": "",
							"display": "좋아요",
							"method": "collectOrLike",
							"className": "fas fa-thumbs-up"
						}, {
							"name": "collect",
							"field": "",
							"display": "장바구니 넣기",
							"method": "collectOrLike",
							"className": "fas fa-heart"
						}, {
							"name": "share",
							"field": "",
							"display": "모멘트 공유：",
							"method": "",
							"className": ""
						}]
					},
					"toProbation": {
						"url": "../../../reader/ebook/read.jsp",
						"dataKeys": {
							"bookId": "resId",
							"bookName": "resName"
						},
						"fixedKeys": {
							"siteType": 0,
							"readType": 0
						}
					},
					"toDetail": {
						"url": "../pages/informationdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 320,
					"infoImgHeight": 220,
					"tabConfigList": {
						"tabShow": true,
						"reviewShow": true,
						"tabList": ["상세 보기", "답글 하기"],
						"tabActiveIndex": 0,
						"toAllReviewName": "전부평론",
						"toAllReviewMethod": {
							"method": "toReviewList"
						}
					},
					"getPublicizeInfo": {
						"url": "spc/prodb/publicize.do",
						"params": {
							"doclibCode": "BOOK",
							"docID": ""
						},
						"isShowPublicize": true,
						"showPublicize": ["머리말", "내용 소개", "목차"]
					},
					"getAudioAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": 33,
							"attachTypes": "audio"
						},
						"isShowAudio": true
					},
					"addCart": {
						"url": "cart/addCart.do",
						"params": {
							"number": "",
							"loginName": "",
							"activityId": 0,
							"pubId": "",
							"siteId": 33
						}
					},
					"collectOrLike": {
						"url": "collection/addCollect.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"operateType": 0,
							"productId": "",
							"siteId": 33
						}
					},
					"toReviewList": {
						"url": "../pages/reviewlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"toBuy": {
						"url": "../pages/bookBuy.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"staticText": {
						"noImg": "이미지 없음",
						"noResource": "없음",
						"quantityOfGoodsMustNotExceedTwoHundred": "상품수는 200보다 작아야 함",
						"systemPrompt": " 시스템 알림",
						"OK": "확인",
						"noPaperBookInfo": "책이 없으므로 책바구니에 담을 수 없음",
						"noEBookInfo": "책이 없으므로 책바구니에 담을 수 없음",
						"noDate": "날자 없음",
						"yuan": "¥",
						"noDiscount": "진행중의 이벤트가 없습니다",
						"price": "가격",
						"combinatePrice": "세트가격",
						"save": "성"
					},
					"bugButton": {
						"display": "바로 결제",
						"method": "toBuy",
						"display1": "책바구니 담기",
						"method1": "toBuy",
						"display2": "읽어보기",
						"method2": "toProbation"
					},
					"bookContentType": {
						"bookType": "91",
						"ebookType": "94"
					},
					"getPubidByLocationQueryFromSyk": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"queryParams": {
							"title": "BOOK_SYS_TOPIC"
						}
					},
					"showDialog": false,
					"display": {
						"courseUseTime": "사용기간：",
						"buyCourse": "과정구매",
						"sure": "확인",
						"cancel": "취소",
						"needPay": "지불 해야할 금액",
						"payWay": "지불방식",
						"zhifubao": "支付宝(待翻译)",
						"weixin": "우챗",
						"drumpPage": "결제페이지 이동중"
					},
					"getPayMethodsBySiteId": {
						"url": "cart/getPayMethod.do",
						"params": {
							"siteId": ""
						}
					},
					"commitOrderUrl": "order/submitSplitOrder.do",
					"combinateProductCfg": {
						"show": true,
						"title": "합쳐서 구매",
						"lastBtn": "쇼핑차에 추가",
						"addCart": {
							"url": "cart/addCombinateProductToCart.do",
							"params": {
								"loginName": "",
								"siteId": 37,
								"combinateId": ""
							}
						},
						"toDetail": {
							"url": "booldetail_k.html",
							"params": {}
						}
					},
					"loginUrl": "../../pages/login_k.html",
					"zhentiContentType": "123",
					"judgeInventory": {
						"showInventory": true,
						"noPaperBook": "상응된 도서가 없습니다",
						"lessInventory": "재고부족"
					},
					"isbnConfig": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_site_id": "37"
							}, {
								"pub_status": "1"
							}, {
								"BOOK_ISBN": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						}
					},
					"attachTypesCfg": {
						"showColId": "",
						"type": "practice",
						"url": "/dynamicFile/stream.do",
						"key01": "recordID",
						"val01": "fileRecordID"
					},
					"toApply": {
						"showColId": "",
						"url": "../pages/applysamplebook.html",
						"dataKeys": {
							"REMARK": "id",
							"SYS_TOPIC": "resName"
						},
						"fixedKeys": {}
					}
				},
				"staticText": {
					"noImg": "이미지 없음",
					"noResource": "없음",
					"quantityOfGoodsMustNotExceedTwoHundred": "상품수는 200보다 작아야 함",
					"systemPrompt": " 시스템 알림",
					"OK": "확인",
					"noPaperBookInfo": "책이 없으므로 책바구니에 담을 수 없음",
					"noEBookInfo": "책이 없으므로 책바구니에 담을 수 없음",
					"noDate": "날자 없음",
					"yuan": "¥",
					"noDiscount": "진행중의 이벤트가 없습니다",
					"price": "가격",
					"combinatePrice": "세트가격",
					"save": "성"
				}
			}
		},
		"bookreview": {
			"bookreview_01": {
				"queryComments": {
					"url": "comment/comments.do",
					"params": {
						"pubId": "",
						"pageIndex": 1,
						"pageSize": 15,
						"siteId": 2
					}
				},
				"addComment": {
					"url": "comment/addComment.do",
					"params": {
						"pubId": "",
						"loginName": "",
						"content": "",
						"starNum": 0,
						"deviceName": "pc",
						"colId": "",
						"siteId": 2,
						"type": "1",
						"parentId": "0",
						"activityId": ""
					}
				},
				"pagination": {
					"showPagination": true,
					"pagesize": [15, 30, 50, 100]
				},
				"operList": {
					"review": {
						"reviewShow": true,
						"toReviewInfoUrl": "../page/reviewInfo.html"
					},
					"like": {
						"likeShow": true
					}
				},
				"orReGetMenberName": true,
				"toAddReview": {
					"toAddReviewShow": true,
					"toAddReviewName": "답글 하기",
					"toAddReviewUrl": "../pages/reviewPublish.html"
				},
				"staticText": {
					"comments": "답글 하기",
					"noHeadPicture": "반신상 없음",
					"noComments": "아직 평론이 없습니다",
					"commentsEmptyInfo": "평론란은 비워서는 안됩니다",
					"pleaseGradeBeforeSubmitting": "먼저 점수를 매긴 다음 평론해주십시오~",
					"commentAddFailed": "평론 추가 실패",
					"contentBefore": "다음을 입력 할 수도 있습니다",
					"contentAfter": "개의 글자"
				},
				"resourceDetail": {
					"sysAdapter": "sykAdapter",
					"typeAdapter": "bookAdapter",
					"isDiscussLimit": true
				}
			}
		},
		"share": {
			"ui_share_01": {
				"bookdetailshare": {
					"shareLists": [{
						"title": "공유하기위책",
						"class": "bds_weixin",
						"cmd": "weixin"
					}, {
						"title": "공유하기QQ친구",
						"class": "bds_sqq",
						"cmd": "sqq"
					}, {
						"title": "공유하기QQ공간",
						"class": "bds_qzone",
						"cmd": "qzone"
					}, {
						"title": "공유하기시나 블로그에 공유",
						"class": "bds_tsina",
						"cmd": "tsina"
					}, {
						"title": "더 보기",
						"class": "bds_more",
						"cmd": "more"
					}]
				},
				"modulename": {
					"shareLists": [{
						"title": "공유하기QQ공간",
						"class": "bds_qzone",
						"cmd": "qzone"
					}, {
						"title": "공유하기시나 블로그에 공유",
						"class": "bds_tsina",
						"cmd": "tsina"
					}, {
						"title": "分享到腾讯微博（待翻译）",
						"class": "bds_tqq",
						"cmd": "tqq"
					}, {
						"title": "分享到人人网（待翻译）",
						"class": "bds_renren",
						"cmd": "renren"
					}]
				}
			}
		}
	},
	"bookstore_k": {
		"classification": {
			"classification_02": {
				"url": "spc/prodb/treeByCode.do",
				"params": {
					"code": "BOOK",
					"layer": 2
				},
				"bookListUrl": "../pages/bookList_k.html",
				"staticText": {
					"allClassifications": "전체 목록",
					"showAll": "전체 보기",
					"closeAll": "전체 거두기"
				}
			}
		},
		"list_pic": {
			"list_pic_33": {
				"xsph": {
					"comTitle": {
						"isShow": true,
						"name": "판매 순위"
					},
					"toMoreBtn": {
						"isShow": false,
						"iconClass": "",
						"name": "더 보기>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "505"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "505"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": true,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "정가：",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail_k.html",
						"dataKeys": {
							"pubId": "pubId"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/bookList_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140,
					"staticText": {
						"noData": "데터 없음",
						"noImg": "이미지 없음",
						"yuan": "￥",
						"notHaveYet": "없음",
						"noDate": "날자 없음"
					}
				},
				"test": {
					"comTitle": {
						"isShow": true,
						"name": "销售排行榜"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "더보기>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "131"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "131"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": false,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail.html",
						"dataKeys": {
							"pubId": "pubId"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/booklist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140,
					"staticText": {
						"noData": "데터 없음",
						"noImg": "아직 그림이 없습니다.",
						"yuan": "￥",
						"notHaveYet": "아직 없음",
						"noDate": "날자 없음"
					}
				}
			},
			"list_pic_29": {
				"rmts": {
					"comTitle": {
						"isShow": true,
						"name": "자료와 정보"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "| 더 보기 >>",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "503"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "503"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 8,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "",
							"field": "sysAuthors",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": ""
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/bookList_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"pagination": {
						"showPagination": false,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"zxts": {
					"comTitle": {
						"isShow": true,
						"name": "새책추천"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "| 더 보기>>",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "504"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "504"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 8,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": ""
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/bookList_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"pagination": {
						"showPagination": false,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "자료와 정보"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "el-icon-back",
						"name": "더 보기",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "250"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "250"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 1,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}]
					},
					"toDetail": {
						"url": "../pages/informationdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"onEvent": {
						"eventName": "showNavContent"
					},
					"pagination": {
						"showPagination": true,
						"pagesize": [15, 30, 50, 100]
					},
					"isMobileLoading": false,
					"toOrderByBtn": {
						"name": "차례：",
						"isShow": false,
						"itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
						"itemList": [{
							"name": "디폴트",
							"itemField": "pub_a_order asc pub_lastmodified desc id asc"
						}, {
							"name": "최신",
							"itemField": "pub_created asc id asc"
						}, {
							"name": "인기상품",
							"itemField": "pub_read_num asc id asc"
						}]
					},
					"staticText": {
						"noImg": "이미지 없음",
						"noData": "데터 없음",
						"noDate": "날자 없음",
						"yuan": "￥"
					},
					"showSearchBtn": true,
					"emitEvent": {
						"contextEventName": ""
					}
				}
			}
		}
	},
	"booklist_k": {
		"_2colsWithSort": {
			"queryBookList": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": "",
					"orderBy": "",
					"pageNo": "",
					"pageSize": "",
					"searchText": "",
					"groupBy": "pub_resource_id"
				},
				"staticText": {
					"homePage": "홈페지",
					"ebay": "전자서점",
					"moreBookList": "더보기",
					"defaultSort": "배렬순서",
					"pubTime": "발표일",
					"salesVolume": "판매량",
					"comment": "평론",
					"noPic": "그림이 없음",
					"author": "작자",
					"originalPrice": "정가",
					"currentPrice": "판매가",
					"buy": "구매",
					"check": "보기",
					"noAuthor": "작자 없음",
					"share": "공유"
				},
				"toIndexHref": "../pages/index_k.html",
				"toEBookHref": "../pages/ebook_k.html",
				"toBookDetailHref": "../pages/bookdetail_k.html"
			}
		},
		"_3colsWithSort": {
			"queryBookList": {
				"url": "spc/cms/publish/list.do",
				"secondCrumbsName": "전자서점",
				"secondCrumbsUrl": "../pages/ebook_k.html",
				"toIndexHref": "../pages/index_k.html",
				"toEBookHref": "../pages/ebook_k.html",
				"toBookDetailHref": "../pages/bookdetail_k.html",
				"params": {
					"conditions": "",
					"orderBy": "",
					"pageNo": "",
					"pageSize": "",
					"searchText": "",
					"groupBy": "pub_resource_id"
				}
			},
			"showPrice": "true",
			"toIndexHref": "../pages/index_k.html",
			"toEBookHref": "../pages/ebook_k.html",
			"toBookDetailHref": "../pages/bookdetail_k.html",
			"secondCrumbsName": "전자서점",
			"secondCrumbsUrl": "../pages/ebook_k.html",
			"staticText": {
				"homePage": "홈페지",
				"ebay": "전자서점",
				"moreBookList": "더보기",
				"defaultSort": "배렬순서",
				"pubTime": "발표일",
				"salesVolume": "판매량",
				"comment": "평론",
				"noPic": "그림이 없음",
				"author": "작자",
				"originalPrice": "정가",
				"currentPrice": "판매가",
				"buy": "구매",
				"check": "보기"
			}
		}
	},
	"docCenter_k": {
		"navigation": {
			"navigation_05": {
				"docnavigation": {
					"showLang": "Korean",
					"colId": 510,
					"comTitle": {
						"isShow": true,
						"name": "자료쎈터"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"transDefaultColId": "transDefaultColId",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"transTitle": "listenTitle",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"directLink": {
						"switchFlag": false,
						"dierctWay": "_blank",
						"directRules": {
							"1118": "../pages/newslistsnxw_k.html?colId=",
							"1119": "../pages/newslistyjxw_k.html?colId=",
							"1120": "../pages/newslistzcfg_k.html?colId=",
							"1121": "../pages/newslisttpxw_k.html?colId=",
							"1122": "../pages/newslistspjx_k.html?colId="
						}
					},
					"reverseByColId": false
				},
				"modulename": {
					"colId": 510,
					"comTitle": {
						"isShow": true,
						"name": "자료센터"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"transDefaultColId": "transDefaultColId",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"transTitle": "listenTitle",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"directLink": {
						"switchFlag": false,
						"dierctWay": "_self",
						"directRules": {
							"1118": "../pages/newslistsnxw_k.html?colId=",
							"1119": "../pages/newslistyjxw_k.html?colId=",
							"1120": "../pages/newslistzcfg_k.html?colId=",
							"1121": "../pages/newslisttpxw_k.html?colId=",
							"1122": "../pages/newslistspjx_k.html?colId="
						}
					},
					"reverseByColId": false,
					"showLang": "Chinese"
				}
			}
		},
		"list_pic": {
			"list_pic_37": {
				"doccenterlist": {
					"showLang": "Korean",
					"colId": 510,
					"display": {
						"resourceTitle": "",
						"noData": "데터 없음",
						"book": "BOOK",
						"video": "VIDEO-MEDIA",
						"audio": "AUDIO-MEDIA",
						"download": "ZILIAOKU",
						"bookShow": "전자도서",
						"videShow": "동영상",
						"audioShow": "음원",
						"downloadShow": "다운로드",
						"bookIconShow": "pdf",
						"videIconShow": "video",
						"audioIconShow": "audio",
						"downloadIconShow": "archive",
						"description": "描述（待翻译）："
					},
					"downloadColumns": [1175, 1176],
					"attachType": {
						"download": "all",
						"pdf": "txtlpdf"
					},
					"tabList": [],
					"tHeadList": ["文件类型（待翻译）", "资料名称（待翻译）", "날자"],
					"tBodyList": [],
					"sysAdapter": "sykAdapter",
					"typeAdapter": "systemAdapter",
					"transTitle": "transNavTitle",
					"transDefaultColId": "transDefaultColId",
					"toEbook": {
						"url": "",
						"params": {
							"bookId": "",
							"readType": 1,
							"bookName": "",
							"userName": "",
							"siteType": ""
						}
					},
					"toPlayAudio": {
						"url": "../pages/videoplay_k.html",
						"dataKeys": {
							"id": "id",
							"resType": "pubResType"
						},
						"fixedKeys": {},
						"params": {
							"audioResId": "AUDIO-MEDIA_RESOURCEID"
						}
					},
					"toPlayVideo": {
						"url": "../pages/videoplay_k.html",
						"dataKeys": {
							"id": "id",
							"resType": "pubResType"
						},
						"fixedKeys": {},
						"params": {
							"videoResId": "VIDEO-MEDIA_RESOURCEID"
						}
					},
					"getZipAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": "",
							"attachTypes": "all"
						}
					},
					"toDownload": {
						"url": "dynamicFile/file.do",
						"dataKeys": {
							"recordID": "fileRecordID"
						},
						"fixedKeys": {}
					},
					"getList": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": "[{pub_col_id:''}]",
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"isGetSubColsData": true
					},
					"pageSizes": [10, 30, 50, 100]
				},
				"resourceCenter": {
					"colId": 510,
					"display": {
						"resourceTitle": "",
						"noData": "데이터가 없음",
						"book": "BOOK",
						"video": "VIDEO-MEDIA",
						"audio": "AUDIO-MEDIA",
						"download": ""
					},
					"tabList": [],
					"tHeadList": ["文件类型（待翻译）", "资料名称（待翻译）", "날자"],
					"tBodyList": [],
					"sysAdapter": "sykAdapter",
					"typeAdapter": "systemAdapter",
					"transTitle": "transNavTitle",
					"toEbook": {
						"url": "",
						"params": {
							"bookId": "",
							"readType": 1,
							"bookName": "",
							"userName": "",
							"siteType": ""
						}
					},
					"toPlayAudio": {
						"url": "../pages/bookdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toPlayVideo": {
						"url": "../pages/bookdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"getList": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": "[{pub_col_id:''}]",
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						}
					},
					"pageSizes": [10, 30, 50, 100],
					"getZipAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": "",
							"attachTypes": "all"
						}
					},
					"toDownload": {
						"url": "dynamicFile/file.do",
						"dataKeys": {
							"recordID": "fileRecordID"
						},
						"fixedKeys": {}
					},
					"transDefaultColId": "transDefaultColId"
				},
				"modulename": {
					"colId": 510,
					"display": {
						"resourceTitle": "",
						"noData": "데이터가 없음",
						"book": "BOOK",
						"video": "VIDEO-MEDIA",
						"audio": "AUDIO-MEDIA",
						"download": "ZILIAOKU",
						"bookShow": "전자 책",
						"videShow": "동영상",
						"audioShow": "음원",
						"downloadShow": "다운로드",
						"bookIconShow": "pdf",
						"videIconShow": "video",
						"audioIconShow": "audio",
						"downloadIconShow": "archive",
						"description": "描述（待翻译）："
					},
					"tabList": [],
					"tHeadList": ["文件类型（待翻译）", "资料名称（待翻译）", "날자"],
					"tBodyList": [],
					"sysAdapter": "sykAdapter",
					"typeAdapter": "systemAdapter",
					"transTitle": "transNavTitle",
					"transDefaultColId": "transDefaultColId",
					"toEbook": {
						"url": "",
						"params": {
							"bookId": "",
							"readType": 1,
							"bookName": "",
							"userName": "",
							"siteType": ""
						}
					},
					"toPlayAudio": {
						"url": "../pages/bookdetail_k.html",
						"dataKeys": {
							"id": "id",
							"resType": "pubResType"
						},
						"fixedKeys": {},
						"params": {
							"audioResId": "AUDIO-MEDIA_RESOURCEID"
						}
					},
					"toPlayVideo": {
						"url": "../pages/bookdetail_k.html",
						"dataKeys": {
							"id": "id",
							"resType": "pubResType"
						},
						"fixedKeys": {},
						"params": {
							"videoResId": "VIDEO-MEDIA_RESOURCEID"
						}
					},
					"getZipAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": "",
							"attachTypes": "all"
						}
					},
					"toDownload": {
						"url": "dynamicFile/file.do",
						"dataKeys": {
							"recordID": "fileRecordID"
						},
						"fixedKeys": {}
					},
					"getList": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": "[{pub_col_id:''}]",
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						}
					},
					"pageSizes": [10, 30, 50, 100],
					"getAllCols": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"chId": 0
						}
					}
				}
			}
		},
		"crumbs": {
			"work_crumbs_02": {
				"doccrumbs": {
					"showLang": "Korean",
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"staticText": {
						"currentPosition": "현재위치"
					},
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					}
				},
				"modulename": {
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					},
					"staticText": {
						"currentPosition": "현재위치"
					},
					"showLang": "Chinese"
				}
			}
		}
	},
	"ebookList_k": {
		"classification": {
			"classification_02": {
				"url": "spc/prodb/treeByCode.do",
				"params": {
					"code": "BOOK",
					"layer": 2
				},
				"bookListUrl": "../pages/bookList_k.html",
				"staticText": {
					"allClassifications": "전체 목록",
					"showAll": "전체 보기",
					"closeAll": "전체 거두기"
				}
			}
		}
	},
	"header_search_k": {
		"search": {
			"search_01": {
				"searchUrl": "../pages/search_k.html",
				"advSearchUrl": "../pages/searchadvanced_k.html",
				"searchConditionArr": [],
				"staticText": {
					"search": "검색",
					"inputKeyWord": "키워드 입력",
					"advancedSearch": "상세 정보 검색"
				}
			}
		}
	},
	"header_k": {
		"navigation": {
			"navigation_06": {
				"targetType": "_self",
				"getCols": {
					"url": "spc/cms/col/getAllColBySiteId",
					"type": "get",
					"params": {
						"siteId": "",
						"chId": "0"
					},
					"getGlobalParams": {
						"siteId": "siteId"
					},
					"keys": {
						"id": "id",
						"parentId": "parentId",
						"name": "name"
					}
				},
				"showType": {
					"parentId": "1262",
					"showChildNav": [1262]
				},
				"currentSelect": [{
					"id": "1292",
					"htmls": ["index_k.html"]
				}, {
					"id": "1293",
					"htmls": ["aboutUs_k.html"]
				}, {
					"id": "1294",
					"htmls": ["bookstore_k.html"]
				}, {
					"id": "1295",
					"htmls": ["ebookstore_k.html"]
				}, {
					"id": "1296",
					"htmls": ["docCenter_k.html"]
				}, {
					"id": "1297",
					"htmls": ["videos_k.html", "videodetail_k.html", "videoplay_k.html"]
				}, {
					"id": "1298",
					"htmls": ["activity_k.html"]
				}, {
					"id": "1299",
					"htmls": ["helpCenter_k.html"]
				}]
			},
			"navigation_02": {
				"toCartUrl": "../pages/shoppingcart_k.html",
				"tips": "나의 장바구니",
				"toLoginUrl": "../pages/login_k.html",
				"staticText": {
					"systemPrompt": "시스템 알림",
					"OK": "확인",
					"pleaseLoginFirst": "로그인해주세요"
				}
			}
		},
		"login": {
			"work_login_04": {
				"toLoginHref": "../pages/login_k.html",
				"toPersonalCenterHref": "../pages/personalcenter_k.html",
				"toRegisterHref": "./register_k.html",
				"toExit": {
					"type": "function",
					"href": "",
					"func": {
						"funcName": "",
						"params": []
					}
				},
				"showItem": ["register"],
				"staticText": {
					"loginSys": "[로그인]",
					"welcomeBack": "환영합니다！",
					"exit": "나가기",
					"register": "등 록"
				}
			}
		},
		"ui_international": {
			"ui_international_01": {
				"header_ko": {
					"langsObj": [{
						"order": 1,
						"name": "조선어",
						"lang": "ko",
						"href": "_k"
					}, {
						"order": 0,
						"name": "中文(待翻译)",
						"lang": "cn",
						"href": ""
					}]
				},
				"modulename": {
					"langsObj": [{
						"order": 0,
						"name": "中文",
						"lang": "cn",
						"href": "./test.html"
					}, {
						"order": 1,
						"name": "조선어",
						"lang": "ko",
						"href": "./test_k.html"
					}]
				}
			}
		}
	},
	"upload": {
		"contestants": {
			"contestants_01": {
				"competitionList": {
					"url": "/user/getActivityMemberByUser.do",
					"competitionedUrl": "spc/prodb/activity/activityPothunterExist.do",
					"params": {
						"userId": "",
						"pageNo": "1",
						"pageSize": "99"
					},
					"competitionedParams": {
						"IDNumbers": "",
						"activityID": ""
					}
				},
				"supplementaryInformation": {
					"url": "/spc/prodb/detail.do?",
					"getSchoolUrl": "spc/prodb/searchNL.do",
					"params": {
						"getPlaceRequest_doclibCode": "PORTAL_ACTIVITY",
						"getSchoolRequest_doclibCode": "PORTAL_SCHOOL",
						"getSchoolRequest_relations": "1,1",
						"getSchoolRequest_cols": "AREA,CLASS",
						"getSchoolRequest_symbols": "1,1",
						"doclibCode": "PORTAL_ACTIVITY",
						"docID": ""
					},
					"keys": {
						"output_place": "place",
						"output_school": "school",
						"output_group": "group",
						"output_searchText": "searchText",
						"school_name": "SYS_TOPIC",
						"eventData_docID": "pub_resource_id",
						"getPlaceRequest_doclibCode": "doclibCode",
						"getPlaceRequest_docID": "docID",
						"getPlaceRequestBack_areas": "AREALIMT",
						"getPlaceRequestBack_classes": "CLASSLIMT",
						"getSchoolRequest_doclibCode": "doclibCode",
						"getSchoolRequest_relations": "relations",
						"getSchoolRequest_cols": "cols",
						"getSchoolRequest_symbols": "symbols",
						"getSchoolRequest_vals": "vals"
					}
				},
				"upLoadUrl": "/dynamicFile/upload.do?",
				"informationUploading": {
					"url": "/spc/prodb/saveItem.do?",
					"params": {
						"doclibCode": "PORTAL_WORKS",
						"metaMap": {
							"ACTIVITYID": "",
							"ACTIVITY_NAME": "",
							"POTHUNTER_NAME": "",
							"POTHUNTER_SEX": "",
							"POTHUNTER_PHONENUMBER": "",
							"POTHUNTER_IDNUMBER": "",
							"GUIDE_TEACHER": "",
							"AREA": "",
							"CLASS": "",
							"SCHOOL": "",
							"SYS_TOPIC": "",
							"DESCRIPTION": "",
							"TEXTCONTENT": "",
							"ATTACHID": "",
							"COMMITUSER": "",
							"WORKSTYPE": "",
							"CONCRETE_CLASS": "",
							"SCHOOL_ADDRESS": "",
							"MAILBOX": "",
							"POSTCODE": "",
							"GUIDETEACHER_PHONENUMBER": "",
							"ORGANIZE_TEACHER": "",
							"ORGANIZETEACHER_PHONENUMBER": "",
							"IS_HIDE": ""
						},
						"attachMap": [{
							"FILERECORDID": "",
							"CATEGORYID": "4127"
						}]
					}
				},
				"cascaderConfig": {
					"splitTag": {
						"item": ";",
						"category": "~"
					}
				},
				"staticText": {
					"participantInformation": "参赛人信息",
					"uploadPortfolios": "上传作品",
					"accomplish": "完成",
					"selectParticipant": "选择参赛人员",
					"addParticipant": "新增参赛人员",
					"addParticipantInformation": "添加参赛人信息",
					"name": "姓名",
					"sex": "性别",
					"male": "男",
					"female": "女",
					"identityCard": "身份证",
					"telePhone": "电话",
					"cancel": "取 消",
					"confirm": "确 定",
					"mobilePhoneNum": "手机号",
					"identityCardNum": "身份证号",
					"haveEnteredTheCompetition": "已参赛",
					"relevantInformation": "相关信息",
					"pothunter": "参赛人",
					"region": "地区",
					"group": "组别",
					"pleaseSelectTheEntryGroup": "请选择参赛组别",
					"school": "学校",
					"pleaseSelectSchool": "请选择学校",
					"gradeAndClass": "年级班级",
					"pleaseEnterGradeAndClass": "请填写年级班级",
					"schoolAddress": "学校地址",
					"otherSchools": "其他学校",
					"pleaseEnterSchoolAddress": "请填写学校地址",
					"email": "邮箱",
					"pleaseEnterEmail": "请填写邮箱",
					"postcode": "邮编",
					"pleaseInputPostcode": "请填写邮编",
					"guidanceTeacher": "指导教师",
					"pleaseEnterGuidanceTeacher": "请填写指导教师",
					"pleaseInputGuidanceTeacherTelephone": "请填写指导教师电话",
					"guidanceTeacherPhoneNum": "指导教师电话",
					"organizationTeacher": "组织教师",
					"pleaseInputOrganizationTeacher": "请填写组织教师",
					"organizationTeacherPhoneNum": "组织教师电话",
					"pleaseInputOrganizationTeacherPhoneNum": "请填写组织教师电话",
					"setToPrivacy": "设为隐私",
					"yes": "是",
					"no": "否",
					"thePrivacyFunctionIntroduction": "隐私功能用于设置是否公开参赛作品，如选择“否”，默认为您自愿公开展示参赛作品。",
					"nextStep": "下一步",
					"inputProductionInfo": "填写作品信息",
					"title": "作品标题",
					"briefIntroduction": "作品简介",
					"file": "作品附件",
					"clickOnToUpload": "点击上传",
					"mainBody": "正文",
					"pleaseInputMainBody": "请输入正文",
					"lastStep": "上一步",
					"submit": "提交",
					"preview": "预览",
					"basicInformation": "基本信息",
					"additionalInformation": "补充信息",
					"whetherPrivacy": "是否隐私",
					"productionInfo": "作品信息",
					"productionSubmitSuccessfullyInfo": "您的作品已提交成功",
					"goToHomePage": "前往首页",
					"goToTheEventsYouParticipateIn": "前往参与的活动",
					"continueToContribute": "继续投稿",
					"others": "其他",
					"pleaseInputSchool": "请填写学校",
					"pleaseInputCorrectPhoneNum": "请输入正确电话号",
					"pleaseInputCorrectPostcode": "请输入正确邮政编码",
					"profileShallNotExceedFiveHundredsWords": "简介不得多于500字",
					"pleaseInputParticipantName": "请输入参赛人姓名",
					"pleaseInputParticipantIDCard": "请输入参赛人身份证号",
					"pleaseInputParticipantPhoneNum": "请输入参赛人手机号",
					"pleaseEnterSchool": "请输入学校",
					"pleaseInputGuidanceTeacher": "请输入指导教师",
					"pleaseInputGradeAndClass": "请输入年级班级",
					"pleaseInputEmail": "请输入邮箱",
					"pleaseInputSchoolAddress": "请输入学校地址",
					"pleaseInputEntryTitle": "请输入参赛作品标题",
					"pleaseInputEntryIntroduction": "请输入参赛作品简介",
					"pleaseInputEntryArticle": "请填写参赛文章",
					"pleaseLogin": "请登录",
					"pleaseSelectTheParticipantInTheList": "请在列表里选择参赛人",
					"pleaseSelectRegion": "请选择地区",
					"pleaseSelectGroup": "请选择组别",
					"pleaseSelectAndInputSchool": "请选择填写学校",
					"pleaseSelectAndInputSchoolAddress": "请选择填写学校地址",
					"pleaseSelectAndInputClass": "请选择填写班级",
					"pleaseSelectAndInputCorrectGuidanceTeacherPhoneNum": "请选择填写正确指导教师手机号",
					"pleaseSelectAndInputCorrectOrganizationTeacherPhoneNum": "请选择填写正确组织教师手机号",
					"pleaseEnterCorrectPostcode": "请填写正确邮编",
					"studentAddSuccess": "学生添加成功！",
					"uploadProductionFormatInfo": "上传作品文件只能是 doc、docx、txt、pdf格式,图片或音频!",
					"uploadProductionSizeInfo": "上传作品文件不能超过10M！",
					"fileUploadSuccessInfo": "文件上传成功",
					"fileUploadErrorInfo": "文件上传失败，请重试",
					"pleaseUploadEntryAccessory": "请上传参赛附件",
					"pleaseInputEntryMainBody": "请填写参赛正文",
					"briefIntroductionSizeInfo": "简介不得多于500字",
					"submitFailed": "提交失败",
					"onlyOneEntryCanBeUploaded": "只能上传一个参赛作品附件",
					"accessory": "附件"
				},
				"inputShow": ["schoolAddress", "email", "zipCode"]
			}
		}
	},
	"footer_k": {
		"navigation": {
			"navigation_03": {
				"url": "spc/cms/col/getColNextLevelNode",
				"params": {
					"colId": "1263"
				},
				"targetType": "_blank",
				"getCols": {
					"url": "spc/cms/col/getAllColBySiteId",
					"type": "get",
					"params": {
						"siteId": "",
						"chId": "0"
					},
					"getGlobalParams": {
						"siteId": "siteId"
					},
					"keys": {
						"id": "id",
						"parentId": "parentId",
						"name": "name"
					}
				},
				"showType": {
					"parentId": "1263",
					"showChildNav": [268]
				},
				"currentSelect": [{
					"id": "265",
					"htmls": ["index_k.html"]
				}, {
					"id": "266",
					"htmls": []
				}, {
					"id": "267",
					"htmls": []
				}, {
					"id": "268",
					"htmls": ["informationdetail_k.html", "informationlist_k.html"]
				}, {
					"id": "269",
					"htmls": []
				}, {
					"id": "270",
					"htmls": ["activity.html", "activityrace.html", "activitylist.html"]
				}]
			},
			"ui_navigation_04": {
				"totop": {
					"showItem": ["toTop"],
					"display": {
						"qq": "찾아오시는 길",
						"toTop": "맨위로"
					},
					"toQQ": {
						"url": "http://wpa.qq.com/msgrd?v=3&uin=1148213245&site=qq&menu=yes"
					}
				},
				"modulename": {
					"showItem": ["QQ", "toTop"],
					"display": {
						"qq": "찾아오시는 길",
						"toTop": "맨위로"
					},
					"toQQ": {
						"url": "http://wpa.qq.com/msgrd?v=3&uin=378365117&site=qq&menu=yes"
					}
				}
			}
		}
	},
	"header_ko": {
		"navigation": {
			"navigation_02": {
				"toCartUrl": "../pages/shoppingcart.html",
				"tips": "我的购物车（待翻译）",
				"toLoginUrl": "../pages/login.html",
				"staticText": {
					"systemPrompt": "시스템 알림",
					"OK": "확인",
					"pleaseLoginFirst": "로그인해주세요"
				}
			},
			"navigation_06": {
				"targetType": "_blank",
				"getCols": {
					"url": "spc/cms/col/getAllColBySiteId",
					"type": "get",
					"params": {
						"siteId": "",
						"chId": "0"
					},
					"getGlobalParams": {
						"siteId": "siteId"
					},
					"keys": {
						"id": "id",
						"parentId": "parentId",
						"name": "name"
					}
				},
				"showType": {
					"parentId": "1262",
					"showChildNav": [268]
				},
				"currentSelect": [{
					"id": "265",
					"htmls": ["index.html"]
				}, {
					"id": "266",
					"htmls": []
				}, {
					"id": "267",
					"htmls": []
				}, {
					"id": "268",
					"htmls": ["informationdetail.html", "informationlist.html"]
				}, {
					"id": "269",
					"htmls": []
				}, {
					"id": "270",
					"htmls": ["activity.html", "activityrace.html", "activitylist.html"]
				}]
			}
		}
	},
	"header_k0": {
		"login": {
			"work_login_04": {
				"toLoginHref": "../pages/login.html",
				"toPersonalCenterHref": "../pages/personalcenter.html",
				"toRegisterHref": "./register.html",
				"toExit": {
					"type": "function",
					"href": "",
					"func": {
						"funcName": "",
						"params": []
					}
				},
				"staticText": {
					"loginSys": "[로그인]",
					"welcomeBack": "환영합니다！",
					"exit": "나가기",
					"register": "등 록"
				}
			}
		}
	},
	"header_search_ko": {
		"search": {
			"search_01": {
				"searchUrl": "../pages/search.html",
				"advSearchUrl": "../pages/searchadvanced.html",
				"searchConditionArr": [{
					"name": "전체 목록",
					"tag": "all"
				}, {
					"name": "도서",
					"tag": "BOOK"
				}, {
					"name": "자료와 정보",
					"tag": "information"
				}, {
					"name": "동영상",
					"tag": "VIDEO-MEDIA"
				}],
				"staticText": {
					"search": "검색",
					"inputKeyWord": "키워드 입력",
					"advancedSearch": "상세 정보 검색"
				}
			}
		}
	},
	"ebookstore_k": {
		"classification": {
			"classification_02": {
				"url": "spc/prodb/treeByCode.do",
				"params": {
					"code": "BOOK",
					"layer": 2
				},
				"bookListUrl": "../pages/bookList_k.html",
				"staticText": {
					"allClassifications": "전체 목록",
					"showAll": "전체 보기",
					"closeAll": "전체 거두기"
				}
			}
		},
		"list_pic": {
			"list_pic_33": {
				"xsph": {
					"comTitle": {
						"isShow": true,
						"name": "판매 순위"
					},
					"staticText": {
						"noData": "데터 없음",
						"noImg": "이미지 없음",
						"yuan": "￥",
						"notHaveYet": "없음",
						"noDate": "날자 없음"
					},
					"toMoreBtn": {
						"isShow": false,
						"iconClass": "",
						"name": "더 보기>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "1056"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "1056"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": true,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/booklist_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "판매 순위"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "더 보기>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "131"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "131"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": false,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail_k.html",
						"dataKeys": {
							"pubId": "pubId"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/booklist_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140,
					"staticText": {
						"noData": "데터 없음",
						"noImg": "이미지 없음",
						"yuan": "￥",
						"notHaveYet": "없음",
						"noDate": "날자 없음"
					}
				},
				"test": {
					"comTitle": {
						"isShow": true,
						"name": "판매 순위"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "더 보기>>",
						"method": "toMore"
					},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "131"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "131"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 10,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"hasHoverEvent": false,
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "sysAuthors",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "true"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}, {
							"name": "price",
							"field": "ebPrice",
							"display": "",
							"method": "",
							"hoverEvent": "false"
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail_k.html",
						"dataKeys": {
							"pubId": "pubId"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/booklist_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 120,
					"infoImgHeight": 140,
					"staticText": {
						"noData": "데터 없음",
						"noImg": "이미지 없음",
						"yuan": "￥",
						"notHaveYet": "없음",
						"noDate": "날자 없음"
					}
				}
			},
			"list_pic_29": {
				"rmts": {
					"comTitle": {
						"isShow": true,
						"name": " 인기상품 추천"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "| 더 보기 >>",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "1054"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "1054"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 8,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "",
							"field": "sysAuthors",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": ""
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/ebookList_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"pagination": {
						"showPagination": false,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"zxts": {
					"comTitle": {
						"isShow": true,
						"name": "새책추천"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "",
						"name": "| 더 보기>>",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "1055"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "1055"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 8,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "price",
							"field": "memberPrice",
							"display": "",
							"method": ""
						}, {
							"name": "price",
							"field": "salePrice",
							"display": "",
							"method": ""
						}]
					},
					"toDetail": {
						"url": "../pages/bookdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/ebookList_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"pagination": {
						"showPagination": false,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "자료와 정보"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "el-icon-back",
						"name": "더 보기",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "250"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "250"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 1,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}]
					},
					"toDetail": {
						"url": "../pages/informationdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"onEvent": {
						"eventName": "showNavContent"
					},
					"pagination": {
						"showPagination": true,
						"pagesize": [15, 30, 50, 100]
					},
					"isMobileLoading": false,
					"toOrderByBtn": {
						"name": "차례：",
						"isShow": false,
						"itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
						"itemList": [{
							"name": "디폴트",
							"itemField": "pub_a_order asc pub_lastmodified desc id asc"
						}, {
							"name": "최신",
							"itemField": "pub_created asc id asc"
						}, {
							"name": "인기상품",
							"itemField": "pub_read_num asc id asc"
						}]
					},
					"staticText": {
						"noImg": "이미지 없음",
						"noData": "데터 없음"
					},
					"showSearchBtn": true,
					"emitEvent": {
						"contextEventName": ""
					}
				}
			}
		}
	},
	"findPassword_k": {
		"findPassword": {
			"work_findpassword_01": {
				"findPasswordUrl": "user/findPassword.do?email=",
				"setPasswordUrl": "user/setPassword1.do?email=",
				"href": "../pages/login_k.html",
				"checkMobileUrl": "user/checkExistMember.do",
				"sendMobileUrl": "user/sendMessageYanBian.do",
				"setPasswordByMobileUrl": "user/findPasswordByMobile.do",
				"staticText": {
					"inputEmail": "이메일 주소 입력",
					"inputEmailVerifiCode": "이메일 인증번호 입력",
					"updatePwd": "비밀번호 수정",
					"findSuccess": "찾기완성",
					"email": "이메일",
					"pleaseInputEmail": "이메일 주소를 입력하십시오",
					"verifiCode": "인증번호",
					"pleaseInputVeirifiCode": "인증번호 입력",
					"canNotSeeClearly": "보이지 않음",
					"nextStep": "다음으로",
					"emailVerifiCode": "이메일 인증번호",
					"pleaseInputEmailVerifiCode": "이메일 인증번호 입력",
					"submit": "제출하기",
					"verifiCodeInvalidInfo": "무효한 인정번호입니다, 다시 인증해주세요",
					"pleaseInputNewPwd": "새 비밀번호 입력",
					"pleaseConfirmNewPwd": " 새 비밀번호 확인",
					"mailboxFormatIsIncorrect": "이메일 주소 정확하지 않음",
					"verifiCodeError": "인증번호 무효！",
					"formatError": "격식 무효, 비밀번호는 한자, 자모, 수자의 조합으로 되여야 합니다",
					"pleaseInputPwd": "비밀번호 입력",
					"passwordAtLeastSixDigits": "비밀번호는 적어서 6자리수로 되여야 합니다",
					"passwordCanBeUpToSixTeenDigits": "비밀번호는 많아서 16자리를 넘어나지 말아야 합니다",
					"pleaseInputPwdAgain": "비밀번호를 다시 입력해주세요",
					"twoPwdsDoNotMatch": "비밀번호가 일치하지 않습니다.",
					"pleaseInputVerifiCode": "인증번호를 입력하십시오",
					"findByEmail": "메일로 되찾습니다",
					"findByMobilePhone": "핸드폰으로 되찾습니다",
					"mobilePhoneVerify": "핸드폰 확인",
					"pleaseInputPhoneNum": "핸드폰번호 입력해주세요",
					"sendVerifiCode": "인증번호 전송",
					"loading": "로드중...",
					"verifiCodeCorrectInfoAndInputNewPwd": "인증 번호가 정확하게 입력되었습니다. 비밀번호를 재설정하십시오",
					"verifiCodeIncorrectInfoAndRetry": "인증번호가 잘못  입력되였습니다. 다시 시도하십시오",
					"sendSuccess": "성공적으로 발송되였습니다",
					"internetTimeOut": "네트워크 시간 초과",
					"verifiCodeHasSentToYourEmailAndVerifyQuickly": "이메일주소로 인증번호가 전송되었습니다. 2 분 내에 인증하십시오",
					"resetFailed": "재설정에 실패하였습니다",
					"pwdResetSuccess": " 성공적으로 비밀번호를 재설정하였습니다",
					"yes": "확인",
					"congratulations": "축하합니다",
					"returnToLoginAfterThreeSeconds": "3초후 로그인 화면으로 돌아갑니다"
				}
			}
		}
	},
	"helpcenter_k": {
		"navigation": {
			"navigation_05": {
				"helpcenter": {
					"showLang": "Korean",
					"colId": 508,
					"comTitle": {
						"isShow": true,
						"name": "고객쎈터"
					},
					"showChildren": false,
					"broadcastName": "showNavContent",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"keys": {
							"colId": "pub_col_id"
						}
					}
				},
				"modulename": {
					"colId": 245,
					"comTitle": {
						"isShow": true,
						"name": "최신뉴스"
					},
					"showChildren": false,
					"broadcastName": "showNavContent",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"showThreeColumn": false,
					"transTitle": "transNavTitle",
					"transDefaultColId": "transDefaultColId",
					"directLink": {
						"switchFlag": false,
						"dierctWay": "_blank",
						"directRules": {
							"1118": "../pages/newslistsnxw.html?colId=",
							"1119": "../pages/newslistyjxw.html?colId=",
							"1120": "../pages/newslistzcfg.html?colId=",
							"1121": "../pages/newslisttpxw.html?colId=",
							"1122": "../pages/newslistspjx.html?colId="
						}
					},
					"reverseByColId": false,
					"showLang": "Chinese"
				}
			}
		},
		"list_pic": {
			"list_pic_29": {
				"helpcenter": {
					"comTitle": {
						"isShow": false,
						"name": "자료와 정보"
					},
					"toMoreBtn": {
						"isShow": false,
						"iconClass": "el-icon-back",
						"name": "더 보기",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "250"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "250"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 0,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "time",
							"field": "pubTime",
							"display": "",
							"method": "toDetail"
						}]
					},
					"toDetail": {
						"url": "../pages/informationdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"onEvent": {
						"eventName": "showNavContent"
					},
					"pagination": {
						"showPagination": true,
						"pagesize": [15, 30, 50, 100]
					}
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "자료와 정보"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "el-icon-back",
						"name": "더 보기",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "250"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "250"
							}, {
								"pub_status": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 1,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}]
					},
					"toDetail": {
						"url": "../pages/informationdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"onEvent": {
						"eventName": "showNavContent"
					},
					"pagination": {
						"showPagination": true,
						"pagesize": [15, 30, 50, 100]
					},
					"isMobileLoading": false,
					"toOrderByBtn": {
						"name": "차 례：",
						"isShow": false,
						"itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
						"itemList": [{
							"name": "디폴트",
							"itemField": "pub_a_order asc pub_lastmodified desc id asc"
						}, {
							"name": "최신",
							"itemField": "pub_created asc id asc"
						}, {
							"name": "인기상품",
							"itemField": "pub_read_num asc id asc"
						}]
					},
					"staticText": {
						"noImg": "이미지 없음",
						"noData": "데터 없음",
						"noDate": "날자 없음",
						"yuan": "￥"
					},
					"showSearchBtn": true,
					"emitEvent": {
						"contextEventName": ""
					}
				}
			}
		}
	},
	"helpCenter_k": {
		"crumbs": {
			"work_crumbs_02": {
				"helpcrumbs": {
					"showLang": "Korean",
					"staticText": {
						"currentPosition": "현재위치"
					},
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					}
				},
				"modulename": {
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					},
					"staticText": {
						"currentPosition": "현재위치"
					},
					"showLang": "Chinese"
				}
			}
		}
	},
	"informationdetail_k": {
		"bookreview": {
			"bookreview_01": {
				"queryComments": {
					"url": "comment/comments.do",
					"params": {
						"pubId": "",
						"pageIndex": 1,
						"pageSize": 15,
						"siteId": 33
					}
				},
				"addComment": {
					"url": "comment/addComment.do",
					"params": {
						"pubId": "",
						"loginName": "",
						"content": "",
						"starNum": 0,
						"deviceName": "pc",
						"colId": "",
						"siteId": 33,
						"type": "1",
						"parentId": "0",
						"activityId": ""
					}
				},
				"pagination": {
					"showPagination": true,
					"pagesize": [15, 30, 50, 100]
				},
				"operList": {
					"review": {
						"reviewShow": true,
						"toReviewInfoUrl": "../pages/reviewDetail.html"
					},
					"like": {
						"likeShow": true
					}
				},
				"orReGetMenberName": true,
				"toAddReview": {
					"toAddReviewShow": true,
					"toAddReviewName": "답글 하기",
					"toAddReviewUrl": "../pages/reviewPublish.html"
				},
				"staticText": {
					"comments": "평론",
					"noHeadPicture": "반신상 없음",
					"noComments": "평론이 없음",
					"commentsEmptyInfo": "평론란은 비워서는 안됩니다",
					"pleaseGradeBeforeSubmitting": "먼저 점수를 매긴 다음 평론해주십시오~",
					"commentAddFailed": "평론 추가 실패",
					"contentBefore": "다음을 입력 할 수도 있습니다",
					"contentAfter": "개의 글자"
				},
				"resourceDetail": {
					"sysAdapter": "sykAdapter",
					"typeAdapter": "bookAdapter",
					"isDiscussLimit": true
				}
			}
		},
		"work_bookdetail": {
			"work_bookdetail_04": {
				"informationdetail": {
					"qrcodeHref": "../pages/qrcode_k.html?data=",
					"errorpageHref": "../pages/errorpage_k.html",
					"commitorderHref": "../pages/commitorder_k.html#/commitOrder/",
					"getResourceDetail": {
						"url": "resource/detail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"complicatedItem": {
							"one": [{
								"name": "",
								"field": "resName",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}],
							"two": [{
								"name": "time",
								"field": "pubTime",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "source",
								"display": "출처：",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}, {
								"name": "",
								"field": "authors",
								"display": "작자：",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}],
							"three": [{
								"name": "share",
								"field": "",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}],
							"four": [{
								"name": "",
								"field": "content",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}]
						}
					},
					"toProbation": {
						"url": "../../../reader/kspdf/read.jsp",
						"dataKeys": {
							"bookId": "resId",
							"bookName": "resName"
						},
						"fixedKeys": {
							"siteType": 0,
							"readType": 0
						}
					},
					"toDetail": {
						"url": "../pages/informationdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toBuy": {
						"url": "../pages/bookBuy.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 320,
					"infoImgHeight": 220,
					"tabConfigList": {
						"tabConfigshow": false,
						"tabShow": false,
						"reviewShow": false,
						"tabList": ["상세 보기", "답글 하기"],
						"tabActiveIndex": 0,
						"toAllReviewName": "전체보기",
						"toAllReviewMethod": {
							"method": "toReviewList"
						}
					},
					"getPublicizeInfo": {
						"url": "spc/prodb/publicize.do",
						"params": {
							"doclibCode": "BOOK",
							"docID": ""
						},
						"isShowPublicize": false,
						"showPublicize": ["머리말", "내용 소개", "목차"]
					},
					"getAudioAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": 33,
							"attachTypes": "audio"
						},
						"isShowAudio": false
					},
					"addCart": {
						"url": "cart/addCart.do",
						"params": {
							"number": "",
							"loginName": "",
							"activityId": 0,
							"pubId": "",
							"siteId": 33
						}
					},
					"collectOrLike": {
						"url": "collection/addCollect.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"operateType": 0,
							"productId": "",
							"siteId": 33
						}
					},
					"toReviewList": {
						"url": "../pages/reviewlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"bookContentType": {
						"bookType": "91",
						"ebookType": "94"
					},
					"getPubidByLocationQueryFromSyk": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"queryParams": {
							"title": "BOOK_SYS_TOPIC"
						}
					},
					"staticText": {
						"noImg": "이미지 없음",
						"noResource": "내용 없음",
						"quantityOfGoodsMustNotExceedTwoHundred": "상품수는 200보다 작아야 함",
						"systemPrompt": "시스템 알림",
						"OK": "확인",
						"noPaperBookInfo": "책이 없으므로 책바구니에 담을 수 없음",
						"noEBookInfo": "책이 없으므로 책바구니에 담을 수 없음",
						"noDate": "날자 없음",
						"yuan": "￥"
					}
				},
				"modulename": {
					"qrcodeHref": "../pages/qrcode_k.html?data=",
					"errorpageHref": "../pages/errorpage_k.html",
					"commitorderHref": "../pages/commitorder_k.html#/commitOrder/",
					"getResourceDetail": {
						"url": "book/getBookDetail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"complicatedItem": {
							"one": [{
								"name": "",
								"field": "",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}],
							"two": [{
								"name": "",
								"field": "",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}]
						}
					},
					"toProbation": {
						"url": "../../../reader/kspdf/read.jsp",
						"dataKeys": {
							"bookId": "resId",
							"bookName": "resName"
						},
						"fixedKeys": {
							"siteType": 0,
							"readType": 0
						}
					},
					"toDetail": {
						"url": "../pages/informationdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toBuy": {
						"url": "../pages/bookBuy.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 320,
					"infoImgHeight": 220,
					"tabConfigList": {
						"tabShow": true,
						"reviewShow": true,
						"tabList": ["상세 보기", "답글 하기"],
						"tabActiveIndex": 0,
						"toAllReviewName": "전체보기",
						"toAllReviewMethod": {
							"method": "toReviewList"
						}
					},
					"getPublicizeInfo": {
						"url": "spc/prodb/publicize.do",
						"params": {
							"doclibCode": "BOOK",
							"docID": ""
						},
						"isShowPublicize": true,
						"showPublicize": ["머리말", "내용 소개", "목차"]
					},
					"getAudioAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": 33,
							"attachTypes": "audio"
						},
						"isShowAudio": true
					},
					"addCart": {
						"url": "cart/addCart.do",
						"params": {
							"number": "",
							"loginName": "",
							"activityId": 0,
							"pubId": "",
							"siteId": 33
						}
					},
					"collectOrLike": {
						"url": "collection/addCollect.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"operateType": 0,
							"productId": "",
							"siteId": 33
						}
					},
					"toReviewList": {
						"url": "../pages/reviewlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"bugButton": {
						"display": "바로 결제",
						"method": "toBuy",
						"display1": "책바구니 담기",
						"method1": "toBuy",
						"display2": "읽어보기",
						"method2": "toProbation"
					},
					"bookContentType": {
						"bookType": "91",
						"ebookType": "94"
					},
					"getPubidByLocationQueryFromSyk": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"queryParams": {
							"title": "BOOK_SYS_TOPIC"
						}
					},
					"staticText": {
						"noImg": "이미지 없음",
						"noResource": "내용 없음",
						"quantityOfGoodsMustNotExceedTwoHundred": "상품수는 200보다 작아야 함",
						"systemPrompt": "시스템 알림",
						"OK": "확인",
						"noPaperBookInfo": "책이 없으므로 책바구니에 담을 수 없음",
						"noEBookInfo": "책이 없으므로 책바구니에 담을 수 없음",
						"noDate": "날자 없음",
						"yuan": "￥"
					},
					"showDialog": false,
					"zhentiContentType": "123",
					"display": {
						"courseUseTime": "사용기간：",
						"buyCourse": "과정구매",
						"sure": "확인",
						"cancel": "취소",
						"needPay": "지불 해야할 금액",
						"payWay": "지불방식",
						"zhifubao": "支付宝（待翻译）",
						"weixin": "우챗",
						"drumpPage": "결제페이지 이동중"
					},
					"getPayMethodsBySiteId": {
						"url": "cart/getPayMethod.do",
						"params": {
							"siteId": ""
						}
					},
					"commitOrderUrl": "order/submitSplitOrder.do",
					"combinateProductCfg": {
						"show": true,
						"title": "합쳐서 구매",
						"lastBtn": "쇼핑차에 추가",
						"showThisBook": true,
						"showCombinateItem": 3,
						"addCart": {
							"url": "cart/addCombinateProductToCart.do",
							"params": {
								"loginName": "",
								"siteId": 37,
								"combinateId": ""
							}
						},
						"toDetail": {
							"url": "booldetail_k.html",
							"params": {}
						}
					},
					"loginUrl": "../../pages/login_k.html",
					"judgeInventory": {
						"showInventory": true,
						"noPaperBook": "상응된 도서가 없습니다",
						"lessInventory": "재고부족"
					},
					"attachTypesCfg": {
						"showColId": "",
						"type": "practice",
						"url": "/dynamicFile/stream.do",
						"key01": "recordID",
						"val01": "fileRecordID"
					},
					"toApply": {
						"showColId": "",
						"url": "../pages/applysamplebook.html",
						"dataKeys": {
							"REMARK": "id",
							"SYS_TOPIC": "resName"
						},
						"fixedKeys": {}
					},
					"isbnConfig": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_site_id": "37"
							}, {
								"prod_product_type": "ebook"
							}, {
								"BOOK_ISBN": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						}
					}
				}
			}
		},
		"share": {
			"ui_share_01": {
				"informationdetailshare": {
					"shareLists": [{
						"title": "分享更多（待翻译）",
						"class": "bds_more",
						"cmd": "more"
					}, {
						"title": "공유하기QQ공간",
						"class": "bds_qzone",
						"cmd": "qzone"
					}, {
						"title": "시나블로그에 공유하기",
						"class": "bds_tsina",
						"cmd": "tsina"
					}, {
						"title": "分享到腾讯微博（待翻译）",
						"class": "bds_tqq",
						"cmd": "tqq"
					}, {
						"title": "分享到人人网（待翻译）",
						"class": "bds_renren",
						"cmd": "renren"
					}]
				},
				"modulename": {
					"shareLists": [{
						"title": "공유하기QQ공간",
						"class": "bds_qzone",
						"cmd": "qzone"
					}, {
						"title": "시나블로그에 공유하기",
						"class": "bds_tsina",
						"cmd": "tsina"
					}, {
						"title": "分享到腾讯微博（待翻译）",
						"class": "bds_tqq",
						"cmd": "tqq"
					}, {
						"title": "分享到人人网（待翻译）",
						"class": "bds_renren",
						"cmd": "renren"
					}]
				}
			}
		}
	},
	"login_k": {
		"login": {
			"work_login_01": {
				"url": "spc/cms/publish/list.do",
				"keys": {},
				"eventName_loadDate": "loadSearchResult",
				"toIndexHref": "./index_k.html",
				"staticText": {
					"userName": "사용자 이름",
					"password": "비밀번호 ",
					"bind": "바인드",
					"notBind": "빠른 로그인",
					"autoLogin": "~초 후 자동 로그인",
					"userNotExist": "존재하지 않는 아이디 입니다",
					"pleaseInputUserName": "사용자 이름을 입력하십시오",
					"pleaseInputPass": "비밀번호를 입력하십시오"
				}
			},
			"work_login_03": {
				"disBacks": ["register_k.html", "register_success_k.html", "forgetPassword_k.html", "login_k.html"],
				"toForgetPasswordHref": "./forgetPassword_k.html",
				"toRegisterHref": "./register_k.html",
				"indexPath": "./index_k.html",
				"thirdParty": {
					"topic": "기타 계좌 등록",
					"url": "auth/login.do?type=",
					"target": "_self",
					"showItem": [{
						"title": "QQ",
						"type": "QQ",
						"tag": "qq"
					}, {
						"title": "우챗",
						"type": "WeiXin",
						"tag": "weixin"
					}, {
						"title": "웨이버",
						"type": "WeiBo",
						"tag": "weibo"
					}],
					"customShowItem": []
				},
				"staticText": {
					"loginSys": "로그인",
					"inputUserName": "사용자 이름을 입력해주세요",
					"inputPwd": "비밀번호를 입력해주세요",
					"forgetPwd": "비밀번호 찾기",
					"noAccount": "계좌 번호 없음？",
					"signUpNow": "바로 등록",
					"accountFrozenInfo": "계좌 번호 사용을 정지시켰습니다, 관리원을 련계해주세요",
					"loginFailed": " 로그인 실패",
					"usernameAndPwdCannotBeEmpty": "사용자 이름과 비밀번호를 입력해주세요",
					"accountAndPwdError": "계좌번화와 비밀번호 무효",
					"userNameCannotBeEmpty": "아이디를 입력하세요",
					"pwdCannotBeEmpty": "비밀번호를 입력하세요",
					"inputCode": " 인증번호를 입력해주세요",
					"codeFailed": "인증번호 무효",
					"unRegisterName": "등록되지 않은 계좌번호입니다"
				},
				"isPC": "true",
				"checkUsername": {
					"url": "user/checkUserInfo.do",
					"params": {
						"checkText": "",
						"checkType": "1"
					}
				}
			}
		}
	},
	"register_k": {
		"register": {
			"work_register_03": {
				"sendNum": {
					"url": "user/sendMessageYanBian.do"
				},
				"showItem": ["bindEmail", "bindMobile"],
				"staticText": {
					"userRegister": "새 아이디 등록",
					"userName": "아이디 이름:",
					"userNameSupportCode": " 6~16자리의 수자, 자모, 밑로 작성해주세요",
					"userExistInfo": "미안합니다, 이미 존재한 아이디 이름입니다",
					"canUseInfo": "사용 가능한 아이디 이름입니다",
					"setNewPwd": "새 비밀번호 설정:",
					"pwdSupportCode": "6-16자리의 문자부로를 사요해주세요",
					"confirmPwd": "비밀번호 확인:",
					"inputPwdAgain": "비밀번호를 다시 입력해주세요",
					"verifiCode": "인증번호:",
					"inputVerifiCode": "인증번호를 입력해주세요",
					"changeAnotherPage": "다음 그림으로 바꾸기",
					"refreshInfo": "새로 고치기",
					"nextStep": "다음으로",
					"emailBind": "이메일 련결",
					"phoneNumBind": "핸드폰 련결",
					"email": "이메일:",
					"inputEmailInfo": "이메일주소를 입력해주세요 email@mail.com",
					"registerNow": "바로 등록",
					"phoneNum": "핸드폰번호:",
					"inputPhoneNum": "핸드폰번호를 입력해주세요",
					"inputCorrectPhoneNum": "정확한 핸드폰번호를 입력해주세요",
					"phoneNumBoundInfo": "핸드폰과 련결되였습니다",
					"inputPhoneVerifiCode": "핸드폰 인증번호를 입력해주세요",
					"yourEmailWillReceive": "이메일에 인증메일을 보내드렸습니다",
					"verify": "인증",
					"mail": "이메일",
					"checkOutEmail": "이메일을 확인해주세요",
					"backToLogin": "메인페이지로 가기",
					"pleaseInputUserName": "사용자 이름을 입력해주세요",
					"userNameFormatInfo": "영어문자로 시작하여 수자, 영어문자, 밑줄을 사용할 수 있으며, 길이는  6 에서 16 위까지 가능합니다",
					"pwdFormatErrorInfo": "비밀번호는 한자, 자모, 수자의 조합으로 되여야 합니다",
					"pleaseInputPwd": "비밀번호 입력",
					"pwdAtLeastSixDigits": "비밀번호는 적어서 6자리수로 되여야 합니다",
					"pwdCanBeUpToSixteenDigits": "비밀번호는 많아서 16자리를 넘어나지 말아야 합니다",
					"twoPwdDoNotMatch": "두번의 입력 암호가 일치하지 않습니다!",
					"verifiCodeInputError": "인증 번호 입력 오유! !",
					"verifiCodeError": "인증 번호 오유! !",
					"inputTheCorrectPhoneNum": "정확한 핸드폰 번호를 입력하십시오",
					"getVerifiCode": "인증번호 받기",
					"verifiCodeIsSending": "인증 번호를 전송하는 중입니다 ...",
					"sendSuccess": "발송성공",
					"networkTimeout": "네트워크 시간 초과",
					"registerFailed": "등록 실패，",
					"phoneNumWasSuccessfullyBound": "핸드폰번호 련동에 성공",
					"congratulations": "축하합니다",
					"yes": "확인",
					"returnToLoginAfterThreeSeconds": "3초후 로그인 화면으로 돌아갑니다",
					"requestFailed": "요청 실패",
					"inputEmail": "이메일 주소를 입력하십시오"
				},
				"directLoginHref": "./login_k.html"
			}
		}
	},
	"register_success_k": {
		"common": {
			"work_common_04": {
				"getLocationParam": {
					"keys": {
						"status": "status",
						"token": "token"
					}
				},
				"toLoginHref": "./login_k.html",
				"toLoginType": "auto",
				"staticText": {
					"registerSuccessInfo": "로그인 성공！",
					"waitingLoginInfo": "초 후 자동 로그인...",
					"loginInfo": "등  록",
					"userExistInfo": "이미 사용된 아이디입니다",
					"verifyTimeOut": "인증 시간이 지났습니다",
					"userNameNotExist": "아이디 없음"
				}
			}
		}
	},
	"search_k": {
		"rankCard": {
			"rank_01": {
				"rules": [{
					"title": "종합순위",
					"orderBy": "pub_a_order asc pub_lastmodified desc id asc"
				}, {
					"title": "인기도",
					"orderBy": "pub_read_num desc"
				}, {
					"title": "최신순",
					"orderBy": "pub_lastmodified desc"
				}],
				"eventName": "loadSearchResult"
			}
		},
		"search": {
			"search_result_04": {
				"url": "spc/cms/publish/list.do",
				"param": {
					"conditions": "[{pub_site_id:'33'},{pub_status:'1'},{pub_resource_type:'BOOK'}]",
					"groupBy": "pub_resource_id",
					"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "10",
					"searchText": ""
				},
				"pageSizes": [10, 20, 50, 100],
				"eventName_loadDate": "loadSearchResult",
				"detailHref": "./bookdetail_k.html?pubId=",
				"isMobileLoading": false,
				"staticText": {
					"total": "모두",
					"productQuantity": "개의 상품",
					"noCover": "표지 없음",
					"author": "작자：",
					"copyright": "저작권：",
					"publish": "출판",
					"yuan": "￥",
					"commentQuanity": "평론  ~개",
					"noDigest": "개요 없음",
					"shareTo": "공유",
					"buy": "구입",
					"checkInfo": "보기",
					"noDate": "날자 없음",
					"isbn": "ISBN：",
					"noRelevantBooks": "관련 서적 없음 ",
					"productQuanity": "상품 ...개"
				},
				"isShowIsbn": false,
				"isMoreFieldSearch": ["prod_name", "BOOK_SYNOPSIS", "pub_resource_name"]
			}
		},
		"share": {
			"ui_share_01": {
				"modulename": {
					"shareLists": [{
						"title": "공유하기QQ공간",
						"class": "bds_qzone",
						"cmd": "qzone"
					}, {
						"title": "시나블로그에 공유하기",
						"class": "bds_tsina",
						"cmd": "tsina"
					}, {
						"title": "分享到腾讯微博（待翻译）",
						"class": "bds_tqq",
						"cmd": "tqq"
					}, {
						"title": "分享到人人网（待翻译）",
						"class": "bds_renren",
						"cmd": "renren"
					}]
				}
			}
		}
	},
	"searchadvance_k": {
		"search": {
			"search_condition_05": {
				"conditions": "{pub_resource_type:'BOOK'},{pub_site_id:'2'}",
				"eventName": "loadSearchResult",
				"staticText": {
					"bookName": "책이름:",
					"inputBookName": "책이름을 입력해주세요",
					"author": "저자 :",
					"inputAuthor": "이름을 입력해주세요",
					"ISBNNum": "ISBN:",
					"inputISBNNum": "ISBN을 입력해주세요",
					"search": "검색",
					"publishTime": "출판시간:",
					"selectDate": "날자를 선택해주세요",
					"to": "~까지",
					"price": "가격:",
					"inputPrice": "가격을 입력해주세요"
				}
			},
			"search_result_04": {
				"url": "spc/cms/publish/list.do",
				"param": {
					"conditions": "[{pub_site_id:'2'},{pub_status:'1'}]",
					"groupBy": "pub_resource_id",
					"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": ""
				},
				"pageSizes": [10, 20, 50, 100],
				"eventName_loadDate": "loadSearchResult",
				"detailHref": "./bookdetail_k.html?pubId=",
				"isMobileLoading": false,
				"isMoreFieldSearch": ["prod_name", "BOOK_SYNOPSIS", "pub_resource_name"],
				"staticText": {
					"total": "모두",
					"productQuanity": "개의 상품",
					"noCover": "표지 없음",
					"author": "작자：",
					"copyright": "저작권：",
					"publish": "출판",
					"yuan": "￥",
					"commentQuanity": "상품 ...개",
					"noDigest": "개요 없음",
					"shareTo": "공유",
					"buy": "구입",
					"checkInfo": "상세보기",
					"noDate": "날자 없음",
					"isbn": "ISBN：",
					"noRelevantBooks": "관련 서적 없음 "
				},
				"isShowIsbn": false
			}
		},
		"share": {
			"ui_share_01": {
				"modulename": {
					"shareLists": [{
						"title": "공유하기QQ공간",
						"class": "bds_qzone",
						"cmd": "qzone"
					}, {
						"title": "공유하기시나 블로그에 공유",
						"class": "bds_tsina",
						"cmd": "tsina"
					}, {
						"title": "分享到腾讯微博（待翻译）",
						"class": "bds_tqq",
						"cmd": "tqq"
					}, {
						"title": "分享到人人网（待翻译）",
						"class": "bds_renren",
						"cmd": "renren"
					}]
				}
			}
		}
	},
	"shoppingCart_k": {
		"shoppingCart": {
			"shoppingCart_01": {
				"cartContent": {
					"directUrl": {
						"91": "./bookdetail_k.html",
						"94": "./bookdetail_k.html",
						"149": "./journaldetail.html",
						"177": "./seriesdetail.html"
					},
					"bookType": "91",
					"ebookType": "94",
					"staticText": {
						"priceChangeInfo": "가격 변경 안내：",
						"priceDescInfo": "장바구니에 넣을 때보다 ~원 낮아졌습니다",
						"money": "원",
						"selectAll": "전체",
						"productInfo": "상품 정보",
						"unitPrice": "단가( 원)",
						"quantity": "개수",
						"sumPrice": "금액",
						"operation": "조작",
						"author": "작자：",
						"dontParticipateAnyActivities": "이벤트 참여 안함",
						"delete": "삭제",
						"addToCollection": "장바구니 넣기",
						"haveCollected": "장바구니 넣기 성공",
						"moveToCollection": "장바구니에 옮겨넣기",
						"noImg": "이미지 없음",
						"yuan": "￥",
						"selectAtLeastOne": "상품을 하나 선택해주세요",
						"settleAccounts": "결제",
						"totalPrice": "총가격：",
						"haveSaved": "모두 ~원을 절약하였습니다：",
						"haveSelected": "모두 ~개의 상품을 선택하였습니다",
						"productQuanity": "상품 ...개",
						"cartEmptyInfo": "당신의 쇼핑차는 여전히 비여있으니 서둘러주세요!",
						"invoiceInfo": "령수증 정보",
						"chooseWetherNeedInvoice": "령수증 수요 여부 선택",
						"yes": "예",
						"no": "아니요",
						"discountCoupon": "할인권",
						"satisfy": "차다",
						"toUse": "사용",
						"deduction": "직접 제하다",
						"discount": "할인",
						"discountRate": "할인률",
						"date": "날짜 :",
						"only": "에 한하다:",
						"paperBook": "종이 책",
						"ebook": "전자 책",
						"ejournal": "전자 정기 간행물",
						"classification": "분류",
						"deselect": "선택 취소",
						"noCoupons": "특혜권이 없음",
						"modeOfPayment": "지불 방식",
						"postscript": "비고 정보",
						"inputPostscript": "비고란에 기입하십시오",
						"pleaseInputPostscript": "의견을 입력하십시오.",
						"youCanAlsoInput": "다음을 입력 할 수도 있습니다.",
						"wordQuanity": "개의 글자",
						"productList": "상품 목록",
						"onSale": "판촉",
						"ebookClass": "(전자 책)",
						"ejournalClass": "(전자 정기 간행물)",
						"totalCount": "총계",
						"shouldPay": "지불금액 ：",
						"totalHave": "합계",
						"downloadCoin": "다운로드 통화",
						"oneCoinEqualsOneYuan": "1다운로드 통화=",
						"reducePrice": "쿠폰：- ",
						"downloadCoinReduce": "다운로드 통화：- ",
						"modeOfDistribution": "배송 방법：",
						"carriage": "배송비：",
						"actuallyPaid": "실제 지불 금액：",
						"submitOrder": "주문 제출",
						"remarksShouldNotExceedFiftyCharacters": "설명은 50자를 초과하지 말아야 합니다",
						"systemPrompt": "시스템알림",
						"activityReplacementFail": "활동 대체 실패~",
						"areYouSureToDeleteTheItem": "이 상품을 삭제하시겠습니까?",
						"cancel": "취소",
						"deleteSuccess": "성공적으로 삭제되였습니다!",
						"deleteFailed": "삭제에 실패하였습니다!",
						"theQuantityOfProductsMustNotExceedTwoHundred": "상품수량은 200 개를 초과하지 말아야 합니다",
						"collectSuccess": "성공적으로 수집하였습니다",
						"cancelCollectSuccess": "수집성공이 취소되였습니다",
						"moveIntoCollectionFolderSuccess": "성공적으로 즐겨찾기에 넣었습니다.",
						"moveIntoCollectionFolderFailed": "즐겨찾기에 넣기에 실패하였습니다",
						"numberOfProductsMustBeMoreThanZero": "상품수는 0보다 커야 합니다",
						"shippingAddressMustNotBeEmpty": "배송 주소는 반드시 입력하여야 합니다~",
						"orderSubmissionError": "주문이 잘못 제출되었습니다",
						"downloadCoinNotEnough": "다운로드 통화가 충분하지 않음~",
						"downloadCoinDiscountCanNotBeLessThanZero": "다운로드 통화 할인 금액은 0 보다 작지 말아야 합니다~",
						"downloadCoinDiscountCanNotBeMoreThanAmountActuallyPaid": "다운로드 통화 할인 금액은 실제 지불 금액보다 크지말아야 합니다~",
						"confirm": "확인"
					},
					"addressContent": {
						"staticText": {
							"receiverAddress": "배송 주소",
							"pleaseAddNewAddress": "선택할 주소가 없으므로 주소를 추가해야합니다.",
							"selectOtherAddress": "다른 배송 주소를 선택",
							"addNewAddress": "주소 추가",
							"selectReceiverAddress": "배송 주소 선택",
							"cancel": "취 소",
							"yes": "확 인",
							"addNewReceiverAddress": "배송 주소 추가",
							"receiver": "접수인",
							"receivingArea": "접수지역",
							"pleaseCompleteInformationOfProvincesAndCities": "성 및 도시 정보를 완정하게 기입하십시오",
							"detailedAddress": "상세한 주소",
							"pleaseFillInTheDetailedAddress": "상세한 주소를 기입해주십시오",
							"phone": "련계전화",
							"newAddressSuccessfullyAdded": "주소 추가 성공",
							"newAddressFailed": "주소 추가 실패",
							"pleaseFillInTheConsignee": "접수인을 기입하십시오",
							"consigneeMustNotExceed40Characters": "접수인은 40자를 초과하지 말아야 합니다",
							"pleaseFillInTheContactNumber": "련계전화를 기입하십시오",
							"pleaseEnterTheNumber": "번호를 입력하십시오",
							"theTelephoneIsLong": "핸드폰 번호 길이가 너무 깁니다",
							"province": "성",
							"prefectureLevelCity": "직할시",
							"cityCountyLevelCity": "시, 현급 도시"
						}
					},
					"invoiceContent": {
						"staticText": {
							"chooseInvoiceType": "발화표 류형은 선택하세요",
							"regularInvoice": "일반 령수증",
							"valueAddedTaxInvoice": "부가가치세 령수증",
							"invoiceTitle": "령수증 수표란",
							"invoiceContent": "령수증 내용",
							"detail": "명세",
							"stationery": "사무용품",
							"computerAccessories": "컴퓨터 주변 기기",
							"consumableItems": "소모품",
							"companyName": "단위 이름",
							"taxpayerIdentificationCode": "납세자 식별 번호는 20자를 초과 할 수 없습니다",
							"registeredAddress": "등록 주소",
							"registeredTelephone": "등록 전화",
							"depositBank": "구좌 개설 은행",
							"bankAccount": "은행 구좌",
							"alter": "수정",
							"confirm": "확인",
							"pleaseFillInTheCompanyName": "회사이름을 기입하십시오",
							"pleaseFillInTheTaxpayerIdentificationNumber": "납세자 식별 번호를 기입하십시오",
							"theTaxpayerIdentificationNumberShallNotExceed20Characters": "납세자 식별 번호는 20자를 초과하지 말아야 합니다",
							"pleaseFillInTheRegisteredAddress": "등록 된 주소를 기입하십시오",
							"pleaseFillInTheRegistrationNumber": "등록 번호를 기입하십시오",
							"pleaseFillOutTheOpeningBank": "구좌개설은행을 기입하십시오",
							"theOpeningBankCannotExceed21Characters": "입금액은 21자를 초과 할 수 없습니다",
							"pleaseFillOutYourBankAccount": "은행구좌를 기입하십시오",
							"personage": "개인"
						}
					}
				},
				"commitContent": {
					"url": "/data/shoppingCart_01_shoppingCart.json",
					"picLinkUrl": "",
					"staticText": {
						"order": "상품 주문 명세서",
						"paidSuccess": "지불 성공",
						"paidFailed": "지불 실패",
						"success": "성공",
						"failed": "실패",
						"checkOrder": "상품주문명세서 확인하기"
					}
				},
				"qrCode": {
					"url": "/data/shoppingCart_01_shoppingCart.json",
					"picLinkUrl": "",
					"staticText": {
						"payWithWeChatScan": "위챗기능으로 지불해주세요",
						"downloadCoinCharge": "입금하여 중전하기"
					}
				}
			}
		}
	},
	"personalCenter_k": {
		"personalcenter": {
			"personalcenter_01": {
				"navList": [{
					"title": "나의 아이디",
					"icon": "el-icon-edit",
					"tag": "account"
				}, {
					"title": "나의 주문서",
					"icon": "el-icon-goods",
					"tag": "list"
				}, {
					"title": "나의 책장",
					"icon": "el-icon-tickets",
					"tag": "book"
				}, {
					"title": "즐겨찾기",
					"icon": "el-icon-star-on",
					"tag": "collecting"
				}, {
					"title": "내가 투고한 글",
					"icon": "el-icon-service",
					"tag": "joinactivity"
				}, {
					"title": "판매 후 기록",
					"icon": "el-icon-service",
					"tag": "afterservice"
				}, {
					"title": "내 특혜권",
					"icon": "el-icon-menu",
					"tag": "coupon"
				}, {
					"title": "염두에 두십시오",
					"icon": "el-icon-edit-outline",
					"tag": "note"
				}],
				"subConfig": {
					"nav": {
						"staticText": {
							"personalCenter": "개인 센터",
							"myAccount": "나의 계정",
							"myOrder": "나의 주문",
							"myBookshelf": "나의 책장",
							"collectionFolder": "즐겨 찾기",
							"myPoints": "나의 포인트",
							"afterSaleRecord": "판매 후 기록",
							"myCoupon": "내 특혜권"
						}
					},
					"joinactivity": {
						"showItem": [],
						"staticText": {
							"auditStatusScreening": "상태 확인",
							"unaudited": "심사사하지 않았습니다",
							"audited": "이미 심사하였습니다",
							"inTheAward": "수상자 선정 중",
							"haveBeenAwardedPrize": "이미 표창하였습니다",
							"all": "전체 목록",
							"managementEnrolment": "지원자를 관리하다",
							"participateInActivities": "행사에 참가하다",
							"activeState": "활동 상태",
							"auditStatus": "심사 상태",
							"titleOfWork": "작품제목",
							"contestant": "참가자",
							"timeOfCompetition": "출전 시간",
							"identityCardNumberOfContestant": "참가자 신분증",
							"awardSituation": "수상 상황",
							"operation": "조작하다",
							"failureToPassAudit": "심사에 통과되지 못했습니다",
							"viewTheWork": "작품보기",
							"yes": "예",
							"hiddenWorks": "숨겨진 작품들",
							"openWork": "공개 작품",
							"newCompetitorInformation": "참가자 정보를 추가하다",
							"newPersonnel": "새로 추가된 인원",
							"name": "이름",
							"gender": " 성별",
							"male": "남자",
							"female": "여자",
							"identityCard": "신분증",
							"telephone": "전화",
							"cancel": "취 소",
							"confirm": "확 인",
							"contactInformation": "련계방식",
							"identityCardNumber": "신분증번호",
							"edit": "편집",
							"delete": "삭제",
							"return": "돌아 가기",
							"editCompetitorInformation": "참가자 정보를 수정",
							"pleaseFillInTheContestants": "참가자를 기입하십시오",
							"pleaseFillInTheCorrectIdentityCardNumber": "정확한 신분증번호를 기입하십시오",
							"contactNumber": "련계전화",
							"pleaseFillInTheContactNumber": "련계전화를 기입하십시오",
							"pleaseInputTheCorrectPhoneNumber": "정확한 전화번호를 입력하십시오",
							"pleaseEnterTheNameOfTheParticipant": "참가자의 이름을 입력하십시오",
							"pleaseEnterTheIdentityCardNumberOfTheParticipant": "참가자의 신분증번호를 입력하십시오",
							"pleaseEnterTheCellPhoneNumberOfTheCompetitor": "참가자의 핸드폰번호를 입력하십시오",
							"no": "아니오오",
							"setSuccess": "성공적으 설정되였습니다!",
							"setFailed": "설정이 실패되였습니다!",
							"participantsAddSuccess": "참가자가 성공적으로 추가되였습니다!",
							"areYouSureYouWantToDeleteTheCompetitorInformation": "이 참가자 정보를 삭제하시겠습니까?",
							"systemHints": "시스템 알림",
							"informationDeletedSuccessfully": "정보가 성공적으로 삭제되었습니다!",
							"informationModifiedSuccessfully": "정보가 성공적으로 수정되었습니다!",
							"finished": "끝",
							"haveInHand": "진행 중",
							"scoring": "평점 중"
						}
					},
					"account": {
						"getMobileCode": {
							"url": "user/sendMessageYanBian.do"
						},
						"toLoginHref": "./login_k.html",
						"toQRCodeHref": "./qrcode_k.html",
						"staticText": {
							"myAccount": "나의 계정",
							"noAvatar": "반신상 없음",
							"currentIntegral": "현재 점수",
							"viewTheIntegral": "점수 보기",
							"downloadedCurrency": "다운로드 통화",
							"viewDownloadCurrency": "다운로드 통화 보기",
							"managingReceiptAddress": "배송 주소 관리",
							"modifyPersonalInformation": "개인 정보 수정",
							"titleOfAccount": "계정 이름",
							"modifyInformation": "정보 수정",
							"accountLevel": "계정 등급",
							"accountIntegral": "계정 포인트",
							"coupon": "특혜권",
							"piece": "장",
							"dynamic": "동적",
							"commentListOfBooks": "설명 도서 목록",
							"noPicture": "그림이 없음",
							"comment": "条评论",
							"serialNumber": "번호",
							"getIntegralPath": "적립 경로",
							"integralValue": "적립한 포인트",
							"time": "시간",
							"return": "돌아 가기",
							"mailboxVerificationCode": "이메일 인증번호",
							"newReceiptAddress": "배송 주소 추가",
							"consignee": "접수인",
							"receivingArea": "접수지역",
							"pleaseImproveProvincialAndMunicipalInformation": "성 및 도시 정보를 완정하게 기입하십시오",
							"detailedAddress": "상세한 주소",
							"pleaseFillInTheDetailedAddress": "상세한 주소를 기입해주십시오",
							"receivingAddress": "배송 주소",
							"phone": "전화",
							"operation": "조작",
							"edit": "편집",
							"delete": "삭제",
							"setAsDefault": "기본값으로 설정",
							"defaultAddress": "기본 주소",
							"modifyReceivingAddress": "배송 주소 수정",
							"pleaseFillInTheConsignee": "접수인을 기입하십시오",
							"changeTo": "다음으로 변경",
							"contactNumber": "련계전화",
							"pleaseFillInTheContactNumber": "련계전화를 기입하십시오",
							"amendTheMailbox": "이메일 주소 수정",
							"pleaseConfirmTheNewPassword": "새 비밀번호를 확인하십시오",
							"temporaryBinding": "아직 련동되여있지 않다",
							"phoneNumber": "핸드폰번호",
							"modifyCellPhoneNumber": "핸드폰 번호 수정",
							"changePassword": "비밀번호 변경",
							"settingUpSecretProtection": "비밀번호보호문제를 설정",
							"pleaseInputTheAnswersToTheSelectedConfidentialQuestions": "선택한 비밀번호 보호 문제의 답안을 입력하십시오",
							"whichCityWereYouBornIn": "당신의 출생지는 어느 도시입니까",
							"yourFatherName": "당신의 아버지의 이름은",
							"yourMotherName": "당신의 어머니의 이름은",
							"securityQuestion": "비밀번호 보호 문제",
							"securityQuestionVerify": "비밀번호찾기 질문",
							"answerToTheSecretInsurance": "비밀번호 보호 문제 답안",
							"phoneNum": "핸드폰번호",
							"checkNumber": "인증 번호",
							"oldPassword": "원래 비밀번호",
							"pleaseChooseTheOldPassword": "원래 비밀번호를 선택하십시오",
							"newPassword": "새 비밀번호",
							"pleaseSelectTheNewPassword": "새 비밀번호를 입력하세요",
							"repeatTheNewPassword": "새 비밀번호를 반복하여 입력해주십시오",
							"pleaseChooseTheNewPasswordAgain": "확인 비밀번호를 입력하세요",
							"reset": "재설정",
							"mailbox": "이메일주소",
							"mailboxVerification": "이메일 인증번호",
							"pleaseBindTheMailboxFirst": "먼저 이메일 주소를 련동하여주십시오",
							"bindTheMailbox": "이메일 주소 련동",
							"next": "다음 단계",
							"theVerificationCodeIsInvalid": "인증번호가 실효되였습니다. 다시 확인하십시오",
							"mobilePhoneNumberVerification": "핸드폰 번호 인증",
							"bindCellPhoneNumber": "핸드폰 번호 련동",
							"sendVerificationCode": "인증번호 전송",
							"mobileVerificationCode": "핸드폰 인증번호",
							"pleaseEnterYourPhoneVerificationCode": "핸드폰 인증번호를  입력하십시오",
							"submit": "제출하다",
							"newPhoneNumber": "새 핸드폰 번호",
							"yuan": "원",
							"exchange": "환전",
							"confirmTheRecharge": "충전 확인",
							"type": "류형",
							"value": "수치",
							"bind": "바인드",
							"paymentProject": "지불 항목",
							"rechargeDownloadCurrency": "다운로드 통화를 충전",
							"paymentMethod": "지불 방식",
							"noPaymentMethod": "지불방식이 없음",
							"amountPayable": "지불해야 할 금액",
							"placeOrder": "주문 제출",
							"pleaseInputTheOldPassword": "원래 비밀번호를 입력하십시오",
							"pleaseEnterNewPassword": "새 비밀번호를 입력하십시오",
							"consistentWithTheOriginalPassword": "원 비밀번호와 같습니다",
							"thePasswordIsAtLeast6Digits": "비밀번호는 적어도 6자리 수여야 합니다",
							"theMaximumNumberOfPasswordsIs16Digits": "비밀번호는 제일 많아서 16자리 수를 초과하지 못한다",
							"pleaseInputTheNewPasswordAgain": "새 비밀번호를 다시 입력해주십시오",
							"twoInputPasswordIsInconsistent": "두번의 입력 암호가 일치하지 않습니다!",
							"pleaseSetUpTheAnswerToSecretInsurance": "비밀번호 보호 문제 답안을 설정하십시오",
							"pleaseSelectSecretInsurance": "비밀번호 보호 문제를 선택하십시오",
							"pleaseSetNewPwd": "새 비밀번호를 입력하세요",
							"pleaseInputTheMailbox": "이메일 주소를 입력하십시오",
							"incorrectMailboxFormat": "이메일 주소형식이 정확하지 않습니다",
							"pleaseEnterTheMailboxVerificationCode": "이메일 인증번호를 입력하십시오",
							"verificationCodeError": "인증 번호 오유",
							"pleaseEnterTheAnswerToSecretInsurance": "비밀번호 보호문제 답안을 입력하십시오",
							"formattingError": "형식이 잘못되었습니다. 비밀번호는 한자, 영어문자, 수자, “-”, “_”의 조합만 지지합니다",
							"pleaseInputPassword": "비밀번호를 입력하십시오",
							"pleaseInputThePasswordAgain": "비밀번호를 다시 한번 입력해주십시오",
							"pleaseInputTheCorrectCellPhoneNumber": "정확한 핸드폰 번호를 입력하십시오",
							"thisIsACompleteAddress": "이것은 완전한 주소입니다",
							"recharge": "충전",
							"consumption": "소비",
							"modifiedAddressSuccessfully": "주소를 성공적으로 수정하였습니다!",
							"failedToChangeAddress": "주소를 변경하는데 실패하였습니다!!",
							"areYouSureYouWantToDeleteTheReceiptAddress": "이 배송 주소를 삭제 하시겠습니까?",
							"systemHints": "시스템알림",
							"confirm": "확 인",
							"cancel": "취 소",
							"deleteSuccess": "삭제 성공!",
							"deleteFailure": "삭제 실패!",
							"newAddressSucceeded": "주소 추가 성공!",
							"newAddressFailed": "주소 추가 실패!",
							"consigneeMustNotExceed40Characters": "접수인은 40자를 초과하지 말아야 합니다",
							"pleaseEnterNumber": "번호를 입력하십시오",
							"telephoneLengthIsTooLong": "핸드폰 번호 길이가 너무 깁니다",
							"province": "성",
							"prefectureLevelCity": "직할시",
							"cityAndCountyLevelCity": "시, 현급 도시",
							"setDefaultAddressSuccessfully": "기본 주소를 성공적으로 설정하였습니다!",
							"failedToSetDefaultAddress": "기본 주소를 설정하는데 실패하였습니다!",
							"verificationCodeSending": "인증 번호를 전송하는 중입니다 ...",
							"hasBeenSentToYourMailbox": "이메일을 보냈는데 링크를 클릭하여 이메일 주소를 련동하십시오",
							"mailboxBindingFailed": "이메일주소 련동에 실패 :",
							"secretInsuranceIsSetUpSuccessfully": "비밀보호문제가 성공적으로 설정되었습니다",
							"failureOfSecretProtectionSettings": "비밀보호문제 설정에 실패하여습니다",
							"pleaseEnterCellPhoneNumber": "핸드폰 번호를  입력하십시오.",
							"pleaseEnterCorrectCellPhoneNumber": "정확한 핸드폰 번호를 입력하십시오",
							"thePhoneNumberHasBeenBound": "죄송합니다. 핸드폰 번호가 이미 련동되였습니다",
							"theMobilePhoneVerificationCodeHasBeenSent": "핸드폰 인증번호가 전송되였습니다. 확인하십시오",
							"networkTimeout": "네트워크 시간 초과",
							"passwordModifiedSuccessfully": "비밀번호가 성공적으로 수정되였습니다",
							"passwordModificationFailed": "비밀번호 수정에 실패하였습니다:：",
							"clickConfirmationPayment": "지불을 하려면 확인을 클릭하십시오",
							"tips": "제시",
							"cancelledPayment": "지불이 이미 취소되였습니다",
							"theAvatarHasBeenChangedSuccessfully": "반신상이 성공적으로 변경되었습니다",
							"theHeaderChangeFailed": "반신상을 변경하는데 실패하였습니다. 다시 시도하십시오",
							"uploading": "업로드 중..",
							"uploadHeadPictureCanOnlyBeJPGFormat": "반신상 사진 업로드는 JPG 형식으로 만 가능합니다!",
							"uploadHeadImageSizeCanNotExceed2MB": "업로드하는 반신상 사진 크기는 2MB를 초과할 수 없습니다!!",
							"theVerificationCodeHasBeenSentToYourMailbox": "이메일주소로 인증번호가 전송되었습니다. 2 분 내에 인증하십시오",
							"passwordResetSuccessfully": "비밀번호 재설정에 성공하엿습니다. 다시 로그인하십시오.",
							"congratulations": "축하합니다"
						}
					},
					"collection": {
						"staticText": {
							"totalSelection": "전체 선택",
							"batchCancelCollection": "즐겨찾기의 항목을 대량으로 제거",
							"price": "가격",
							"buy": "구매",
							"theFavoritesAreEmpty": "즐겨 찾기가 비여있습니다",
							"areYouSureYouWantToRemoveTheFavoritesFromTheMerchandise": "즐겨 찾기에서 항목을 제거 하시겠습니까?",
							"systemHints": "시스템알림",
							"confirm": "확인",
							"cancel": "취소",
							"removeSuccess": "삭제 완료",
							"removeFailed": "삭제 실패",
							"pleasePickAtLeastOneItem": "하나 이상의 상품을 선택하십시오~"
						},
						"tabListShow": [{
							"title": "전자도서",
							"type": "94"
						}, {
							"title": "종이책",
							"type": "91"
						}]
					},
					"feedback": {
						"submitUrl": "spc/prodb/saveItem.do",
						"feedbackkeys": "QUE_CONTENT",
						"params": {
							"doclibCode": "QUE_ANS",
							"metaMap": {}
						}
					},
					"samplebook": {
						"getListUrl": "spc/prodb/searchNL.do",
						"doclibCode": "",
						"pageIndex": "1",
						"pageSize": "10"
					},
					"learning": {
						"staticText": {
							"noData": "데이터가 없음"
						},
						"tabListShow": [{
							"label": "음원",
							"productType": "183"
						}, {
							"label": "동영상",
							"productType": "172"
						}, {
							"label": "코스웨어",
							"productType": "185"
						}, {
							"label": "시험문제",
							"productType": "123"
						}],
						"defaultActive": "183",
						"sysAdapter": "sykAdapter",
						"typeAdapter": "",
						"getResourceLists": {
							"url": "/user/getBookShelfList.do",
							"params": {
								"loginName": "",
								"pageIndex": "1",
								"pageNo": "1",
								"pageSize": "10",
								"type": "2",
								"siteId": "",
								"productType": "",
								"status": "1"
							},
							"complicatedItem": [{
								"name": "img",
								"field": "productMidPic",
								"display": "",
								"method": "toDetail"
							}, {
								"name": "button",
								"field": "productName",
								"display": "",
								"method": "toDetail"
							}]
						},
						"toDetail": {
							"url": "../pages/videoDetail_k.html",
							"dataKeys": {
								"pubId": "pubId",
								"resType": "productResType"
							},
							"fixedKeys": {}
						},
						"pageSizes": [10, 20, 50, 100]
					},
					"book": {
						"navList": [{
							"name": "도서",
							"type": "2",
							"productType": "",
							"keyType": "book"
						}, {
							"name": "잡지",
							"type": "3",
							"productType": "periodical",
							"keyType": "periodical"
						}],
						"productKeys": {
							"book": {
								"name": "productName",
								"pic": "bigPic",
								"resourceId": "resourceId",
								"resourceType": "resourseType"
							},
							"periodical": {
								"name": "pub_resource_name",
								"pic": "pub_picBig",
								"resourceId": "pub_resource_id",
								"resourceType": "pub_resource_type"
							}
						}
					},
					"comment": {
						"detailUrl": {
							"91": "./bookdetail_k.html",
							"94": "./bookdetail_k.html",
							"149": "./journaldetail_k.html",
							"177": "./seriesdetail_k.html"
						}
					},
					"list": {
						"exchangeState": false,
						"KDNConfig": false,
						"tabListShow": [{
							"title": "도서",
							"type": 94
						}, {
							"title": "잡지",
							"type": 91
						}, {
							"title": "지식 서비스",
							"type": 11
						}],
						"staticText": {
							"fullOrder": "주문서 전체",
							"waitForPayment": "지불 대기 중",
							"startDate": "시작일",
							"endDate": "종료일",
							"selectTimeRange": "시간 범위 선택",
							"orderDetail": "상세한 주문정보",
							"number": "수량",
							"amountOfMoney": "금액",
							"orderNumber": "주문 번호",
							"subSingleNumber": "하위 번호",
							"pendingPayment": "주문 상태 : 지불 대기 중",
							"cancelled": "주문 상태 : 취소",
							"undelivery": "订单状态：待收货(待译)",
							"completed": "주문 상태 : 완료",
							"noCover": "표지 없음",
							"noBookTitleForTheTimeBeing": "책제목 없음",
							"author": "작자",
							"noAuthor": "작자 없음",
							"ebookOrder": "전자 책 주문",
							"paperBookOrder": "종이 책 주문",
							"money": "¥",
							"cancellationOfOrder": "주문 취소",
							"deleteOrder": "주문 삭제",
							"seeDelivery": "查看物流(待译)",
							"recieved": "确认收货(待译)",
							"alreadyPaid": "결제 완료",
							"toBePaid": "지불 대기 중",
							"downloadCurrencyDeduction": "다운로드 통화 공제",
							"activityRemission": "활동 감면",
							"orderIsEmpty": "주문은 비여있습니다. 빨리 구매하십시오",
							"receiptInformation": "물건접수 정보",
							"consignee": "접수인",
							"phone": "전화",
							"receivingAddress": "배송주소",
							"invoiceInformation": "령수증 정보",
							"invoiceType": "령수증 류형",
							"personal": "개인",
							"valueAddedTaxInvoice": "부가가치세 령수증",
							"invoicesTitle": "령수증 수표란",
							"invoiceContent": "령수증 내용",
							"detailsOfPayment": "상세한 지불 상황",
							"paymentMethod": "지불 방식",
							"weChatPayment": "위챗지불",
							"alipay": "알리페이",
							"downloadedCurrency": "다운로드 통화",
							"commodityTotal": "총 상품",
							"freightTotal": "총 운송 비용",
							"yuan": "원",
							"noteInformation": "비고",
							"returnGoods": "반품",
							"exchangeGoods": "상품 교환",
							"return": "돌아 가기",
							"totalOrder": "총 주문 금액 : ¥",
							"noPublication": "간행물이 없음",
							"submission": "신청서 제출",
							"businessAudit": "상가에서 심사",
							"userDelivery": "사용자 출하",
							"reviewOfRefunds": "환불 심사",
							"completeTheReturnOfTheGoods": "반품 완성",
							"completeTheReturnTransOfTheGoods": "完成换货(待译)",
							"commodityName": "상품명칭",
							"purchaseQuantity": "구매 수량",
							"orderTime": "주문 시간",
							"returnQuantity": "반품 수량",
							"returnTransQuantity": "换货数量(待译)",
							"problemDescription": "문제 설명",
							"pleaseDescribeTheProblem": "문제를 설명해주십시오",
							"uploadPicture": "사진 업로드",
							"applicationForReturn": "반품 신청 심사 중",
							"applicationForReturnTrans": "申请换货(待译)",
							"lastWeek": "지난 주",
							"lastMonth": "지난 달",
							"lastThreeMonths": "지난 3 개월",
							"upload5PicturesAtMost": "죄송합니다. 그림을 제일 많아서 5개까지 업로드할수 있습니다 ",
							"pleaseUploadPngJpgOrBmpTypePictures": "PNG, JPG 또는 BMP 류형의 그림을 업로드하십시오",
							"uploadHeadImageSizeCanNotExceed5MB": "업로드하는 상반신 사진의 크기는 5MB를 초과할 수 없습니다！",
							"receiptAddressMustNotBeEmpty": "배송주소는 비워둘 수 없습니다",
							"failureToSubmitApplication": "죄송합니다. 신청서를 제출하는데 실패하였습니다",
							"incorrectSubmissionOfOrders": "주문이 잘못 제출되었습니다.",
							"systemHints": "시스템 알림",
							"confirm": "확인",
							"abolishSuccess": "성공을 취소하십시오",
							"abolishFailed": "취소에 실패했습니다. 다시 시도하십시오",
							"deleteSuccess": "성공적으로 삭제되었습니다.",
							"deleteFailed": "삭제에 실패했습니다. 다시 시도하십시오.",
							"confirmDeleteOrder": "确定删除此订单？(待译)",
							"tips": "제시",
							"cancel": "취소",
							"confirmCancelOrder": "确定取消此订单？(待译)"
						}
					},
					"afterservice": {
						"tabStateShow": [{
							"title": "전부상태",
							"type": ""
						}, {
							"title": "처리중",
							"type": "1"
						}, {
							"title": "우편 보내주세요",
							"type": "2"
						}, {
							"title": "환불중",
							"type": "3"
						}, {
							"title": "완료",
							"type": "4"
						}, {
							"title": "반품거절",
							"type": "5"
						}, {
							"title": "환불거절",
							"type": "6"
						}, {
							"title": " 취소",
							"type": "7"
						}],
						"tabTypeShow": [{
							"title": "주문서 전체",
							"type": ""
						}, {
							"title": "반품내역",
							"type": "1"
						}, {
							"title": "교환내역",
							"type": "2"
						}],
						"courierOptions": [{
							"value": "中通(待翻译)",
							"label": "中通(待翻译)"
						}, {
							"value": "圆通(待翻译)",
							"label": "圆通(待翻译)"
						}, {
							"value": "顺丰(待翻译)",
							"label": "顺丰(待翻译)"
						}, {
							"value": "EMS",
							"label": "EMS"
						}],
						"staticText": {
							"orderType": "주문 류형",
							"orderStatus": "주문 상태",
							"returnNumber": "반품 번호",
							"orderNumber": "주문 번호",
							"date": "날자",
							"count": "수량",
							"operate": "조작작",
							"check": "보기",
							"submission": "신청서 제출",
							"businessAudit": "상가에서 심사",
							"businessAuditNotPass": "상가의 심사에 통과되지 못했습니다",
							"userDelivery": "사용자 출하",
							"reviewOfRefunds": "환불 심사",
							"refundNotPass": "환불 심사에 실패하였습니다",
							"completeTheReturnOfTheGoods": "반품 완성",
							"goodsName": "상품명칭",
							"purchaseCount": "구매 수량",
							"orderTime": "주문 시간",
							"noCover": "표지 없음",
							"author": "작자",
							"returnCount": "반품 수량",
							"problemDescription": "문제 설명",
							"picture": "그림",
							"noPicture": "사진 없음",
							"refundAmount": "환불 금액 : ¥",
							"refundVirtualCoin": "가상 통화 반환 : ¥",
							"courierNumber": "택배 번호",
							"returnApplicationAudit": "반품 신청 심사 중...",
							"cancelReturnApplication": "반품신청이 취소",
							"returnAuditFailed": "반품 심사에 통과되지 못했습니다",
							"auditOpinion": "의견을 심사하여 결정하다",
							"returnAuditPassed": "반품 심사에 통과되였습니다",
							"returnPolicy": "반품 설명",
							"courierCompany": "택배 회사",
							"chooseCourierCompany": "택배 회사를 선택하십시오",
							"writeCourierNumber": "택배 번호를 기입하십시오",
							"submit": "제출",
							"returnGoods": "반품",
							"confirmCancelReturn": "是否确定要取消退货申请？(待译)",
							"cancel": "취소",
							"confirm": "확인",
							"businessReceiving": "상가에서 물건을 받는 중...",
							"businessAgreeRefund": "상가는 반품 상품을 받고 환불하는 것에 동의했습니다",
							"waitRefundArrive": "환불이 입금할 때까지 기다려주십시오",
							"businessDisagreeRefund": " 상가는 반품 상품을 받고 환불하는 것에 동의하지 않습니다",
							"completeReturn": "반품 완성",
							"cancelReturn": "반품 신청은 이미 취소되였습니다",
							"createExchangeOrder": "상품교환 주문서 생성",
							"exchangeCount": "교환 수량",
							"exchangeApplicationAudit": "상품교환 신청 심사 중...",
							"cancelExchangeApplication": "상품교환 신청 취소",
							"exchangeAuditFailed": "상품교환 심사에 통과되지 못했습니다",
							"exchangeAuditPassed": "상품교환 심사에 통과되였습니다",
							"exchangePolicy": "상품교환설명",
							"exchangeGoods": "상품 교환",
							"confirmCancelExchange": "是否确定要取消换货申请？(待译)",
							"businessAgreeExchange": "상인은 교체품을 받고 물품 교환에 동의합니다",
							"cancelExchange": "상품교환 신청은 이미 취소되였습니다",
							"informationSubmitSuccess": "정보 제출 성공",
							"informationSubmitFail": "죄송합니다. 정보 제출에 실패하였습니다",
							"cancelFail": "죄송합니다. 취소에 실패하였습니다",
							"cancelSuccess": "성공을 취소하십시오"
						}
					}
				}
			}
		}
	},
	"activityrace_k": {
		"swiper": {
			"ui_swiper_06": {}
		},
		"activityDetail": {
			"work_activitydetail_01": {
				"url": "spc/cms/publish/detail.do",
				"keys": {
					"title": "PORTAL_ACTIVITY_SYS_TOPIC",
					"content": "PORTAL_ACTIVITY_DESCRIPTION",
					"startDate": "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
					"endDate": "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
					"resourceId": "pub_resource_id",
					"illustration": "pub_illustration",
					"reviewDate": "PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW",
					"illustrationLinks": "PORTAL_ACTIVITY_ACTIVITY_LINKS",
					"requestUrlParam_pubId": "pubId",
					"toUploadPageUrlParam_docId": "docId"
				},
				"eventName_loadedDatas": "eventName_loadedDatas",
				"toUploadPagUrl": "./uploadproduction_k.html",
				"staticText": {
					"uploadWork": "작품 업로드",
					"notBegin": "행사 준비 중",
					"contributeClosed": "투고 마감",
					"haveEnded": "행사 종료"
				}
			},
			"work_acitivityrace_07": {
				"tabArr": [{
					"tag": "activityInstructions",
					"title": "행사 설명"
				}, {
					"tag": "activityPlan",
					"title": "행사 방안"
				}, {
					"tag": "activityNews",
					"title": "행사 관련 뉴스",
					"subModules": ["notice", "goodProduct"]
				}, {
					"tag": "activityProduct",
					"title": "투고작품",
					"subModules": ["notice", "goodProduct"]
				}, {
					"tag": "activityProductWinning",
					"title": "수상작품"
				}, {
					"tag": "activityTeather",
					"title": "유명 교사 지도",
					"subModules": ["notice", "goodProduct"]
				}],
				"staticText": {
					"announcement": "안내글",
					"displayExcellentWorks": "우수작품 전시",
					"yes": "예",
					"pleaseWaitForTheReview": "심사 대기 중"
				}
			},
			"work_activitydetail_02": {
				"module": {
					"url": "spc/prodb/getPublicize.do",
					"showType": "simple",
					"topic": "奖项设置",
					"keys": {
						"topic": "topic",
						"content": "content",
						"eventName_listen_resourceId": "pub_resource_id",
						"eventName_listen_resourceType": "pub_resource_type",
						"requestUrlParam_docId": "docID",
						"requestUrlParam_code": "code"
					},
					"eventName_listen": "loadSearchResult"
				}
			},
			"work_activitydetail_03": {
				"url": "spc/prodb/activity/activityNews.do",
				"getPicUrl": "dynamicFile/stream.do",
				"params": {
					"getListParam_pageNo": "1",
					"getListParam_pageSize": "10",
					"getListParam_orderBy": "SYS_DOCUMENTID DESC"
				},
				"keys": {
					"title": "SYS_TOPIC",
					"picId": "COVERID",
					"date": "SYS_CREATED",
					"abstract": "ABSTRACT",
					"eventListenData_activityId": "pub_resource_id",
					"getPicParam_coverId": "recordID",
					"getListParam_activityID": "activityID",
					"getListParam_pageNo": "page",
					"getListParam_pageSize": "pageSize",
					"getListParam_orderBy": "orderBy"
				},
				"toDetailMode": {
					"type": "href",
					"event": {
						"name": "eventName_toNewsDetail"
					},
					"href": {
						"url": "./newsdetail.html",
						"params": {
							"docID": "SYS_DOCUMENTID"
						},
						"activityParams": {
							"activityID": "activityId"
						},
						"fixedParams": {
							"page": "1",
							"pageSize": "10",
							"orderBy": "SYS_DOCUMENTID DESC"
						}
					}
				},
				"eventName_listen": ""
			},
			"work_activitydetail_04": {
				"url": "spc/prodb/detail.do",
				"getSchoolUrl": "spc/prodb/searchNL.do",
				"showItem": ["place", "group", "school", "topic", "author"],
				"params": {
					"getPlaceRequest_doclibCode": "PORTAL_ACTIVITY",
					"getSchoolRequest_doclibCode": "PORTAL_SCHOOL",
					"getSchoolRequest_relations": "1,1",
					"getSchoolRequest_cols": "AREA,CLASS",
					"getSchoolRequest_symbols": "1,1"
				},
				"keys": {
					"output_place": "place",
					"output_school": "school",
					"output_group": "group",
					"output_searchText": "searchText",
					"output_author": "author",
					"output_idCard": "idCard",
					"school_name": "SYS_TOPIC",
					"eventData_docID": "pub_resource_id",
					"getPlaceRequest_doclibCode": "doclibCode",
					"getPlaceRequest_docID": "docID",
					"getPlaceRequestBack_areas": "AREALIMT",
					"getPlaceRequestBack_classes": "CLASSLIMT",
					"getSchoolRequest_doclibCode": "doclibCode",
					"getSchoolRequest_relations": "relations",
					"getSchoolRequest_cols": "cols",
					"getSchoolRequest_symbols": "symbols",
					"getSchoolRequest_vals": "vals"
				},
				"eventName_search": "",
				"eventName_listenLoadedData": "eventName_loadedDatas",
				"cascaderConfig": {
					"splitTag": {
						"item": ";",
						"category": "~"
					}
				}
			},
			"work_activitydetail_05": {
				"module1": {
					"listTitle": "",
					"url": "spc/prodb/getWorkList.do",
					"toProductDetailUrl": "productiondetail_k.html",
					"classification": {
						"titles": ["一等奖", "二等奖", "三等奖"],
						"key": "AWARD"
					},
					"params": {
						"getListParam_doclibCode": "PORTAL_WORKS",
						"getListParam_orderCondition": " BY_SPC_SYS_DOCUMENTID_SPC_DESC",
						"getListParam_pageNo": "1",
						"getListParam_pageSize": "5",
						"getListParamOptions": {
							"activityId": {
								"getListParam_relations": "1",
								"getListParam_cols": "ACTIVITYID",
								"getListParam_symbols": "2",
								"getListParam_memberType": "4"
							},
							"place": {
								"getListParam_relations": "1",
								"getListParam_cols": "AREA",
								"getListParam_symbols": "1",
								"getListParam_memberType": "4"
							},
							"school": {
								"getListParam_relations": "1",
								"getListParam_cols": "SCHOOL",
								"getListParam_symbols": "1",
								"getListParam_memberType": "4"
							},
							"group": {
								"getListParam_relations": "1",
								"getListParam_cols": "CLASS",
								"getListParam_symbols": "1",
								"getListParam_memberType": "4"
							},
							"searchText": {
								"getListParam_relations": "1",
								"getListParam_cols": "SYS_TOPIC",
								"getListParam_symbols": "1",
								"getListParam_memberType": "4"
							},
							"author": {
								"getListParam_relations": "1",
								"getListParam_cols": "POTHUNTER_NAME",
								"getListParam_symbols": "1",
								"getListParam_memberType": "4"
							},
							"idCard": {
								"getListParam_relations": "1",
								"getListParam_cols": "POTHUNTER_IDNUMBER",
								"getListParam_symbols": "2",
								"getListParam_memberType": "4"
							}
						},
						"getListParamOptions_fixed": {
							"IS_EXCELLENTWORK": {
								"getListParam_relations": "1",
								"getListParam_cols": "IS_EXCELLENTWORK",
								"getListParam_symbols": "2",
								"getListParam_memberType": "4",
								"getListParam_vals": "예"
							}
						},
						"toProductDetailParam_resourceType": "PORTAL_WORKS"
					},
					"keys": {
						"title": "SYS_TOPIC",
						"author": "POTHUNTER_NAME",
						"date": "SYS_CREATED",
						"abstract": "DESCRIPTION",
						"teacherCommentNum": "DIS_COUNT_NUM",
						"voteNum": "VOTE_COUNT",
						"resourceId": "SYS_DOCUMENTID",
						"resourceName": "SYS_TOPIC",
						"activityId": "ACTIVITYID",
						"eventListienLoadDatas_activityId": "pub_resource_id",
						"eventListienLoadDatas_voteSwitch": "PORTAL_ACTIVITY_PRAISE_SWITCH",
						"eventListienLoadDatas_endDate": "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
						"eventListienLoadDatas_voteDescription": "PORTAL_ACTIVITY_PRAISE_DESCRIPTION",
						"eventListienLoadDatas_reviewDate": "PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW",
						"eventListienLoadDatas_startDate": "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
						"eventListienSearchDatas": ["place", "school", "group", "searchText", "author", "idCard"],
						"getListParam_doclibCode": "doclibCode",
						"getListParam_relations": "relations",
						"getListParam_cols": "cols",
						"getListParam_symbols": "symbols",
						"getListParam_vals": "vals",
						"getListParam_memberType": "memberType",
						"getListParam_orderCondition": "orderCondition",
						"getListParam_pageNo": "page",
						"getListParam_pageSize": "size",
						"toProductDetailParam_resourceType": "resourceType",
						"toProductDetailParam_resourceId": "resourceId",
						"toProductDetailParam_colId": "colId",
						"toProductDetailParam_resourceName": "resourceName",
						"toProductDetailParam_activityId": "activityId"
					},
					"eventName_listenLoadedData": "eventName_loadedDatas",
					"eventName_listenSearch": "eventName_search",
					"isDevelopment": false,
					"getAwardList": {
						"url": "spc/prodb/searchNL.do",
						"params": {
							"doclibCode": "PORTAL_AWARD",
							"relations": 1,
							"cols": "ACTIVITYID",
							"symbols": 2,
							"vals": "",
							"status": 0,
							"page": 1,
							"size": 99,
							"pageable": 1
						}
					}
				}
			},
			"work_activitydetail_06": {
				"url": "comment/getActivityDiscussDetail.do",
				"params": {
					"paging_pageSizes": [15, 30, 50, 100],
					"requestParam_memberType": "4",
					"requestParam_pageNo": "1",
					"requestParam_pageSize": "15"
				},
				"keys": {
					"name": "userName",
					"picUrl": "picture",
					"commentProduct": "resourceName",
					"commentContent": "disContent",
					"requestParam_activityId": "activityId",
					"requestParam_memberType": "memberType",
					"requestParam_pageNo": "pageNo",
					"requestParam_pageSize": "pageSize",
					"eventName_listenData_activityId": "pub_resource_id"
				},
				"eventName_listen": "loadSearchResult",
				"toProductDetail": {
					"url": "./productiondetail.html",
					"superKeys": {
						"activityId": "pub_resource_id"
					},
					"dataKeys": {
						"resourceId": "resourceId",
						"resourceName": "resourceName"
					},
					"fixKeys": {
						"resourceType": "PORTAL_WORKS",
						"colId": ""
					}
				}
			}
		},
		"bookReview": {
			"work_bookreview_02": {
				"reviewType": "production",
				"getParamType": "event",
				"listenEvent": {
					"name": "dwadwa",
					"keys": {
						"pubId": "id",
						"colId": "pub_col_id",
						"resourceName": "pub_resource_name",
						"resourceType": "pub_resource_type",
						"resourceId": "pub_resource_id",
						"activityId": "id"
					}
				},
				"queryreview": {
					"url": "comment/comments.do",
					"params": {
						"resourceType": "",
						"resourceId": "",
						"type": "1",
						"pubId": "",
						"pageIndex": 1,
						"pageSize": 15,
						"siteId": 33
					},
					"reviewType": [{
						"type": "1",
						"name": "教师点评"
					}, {
						"type": "2",
						"name": "用户点评"
					}]
				},
				"addreview": {
					"url": "comment/addComment.do",
					"params": {
						"pubId": "",
						"loginName": "",
						"content": "",
						"siteId": 33,
						"starNum": "0",
						"deviceName": "PC",
						"parentId": "0",
						"type": "1",
						"colId": "",
						"memberType": "",
						"resourceName": "",
						"resourceType": "",
						"resourceId": ""
					}
				}
			}
		}
	},
	"videodetail_k": {
		"navigation": {
			"navigation_05": {
				"videodetailnavigation": {
					"showLang": "Korean",
					"colId": 1127,
					"comTitle": {
						"isShow": true,
						"name": "동영상강좌"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"transTitle": "listenTitle",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"directLink": {
						"switchFlag": true,
						"dierctWay": "_self",
						"directRules": {
							"1128": "../pages/videos_k.html?colId=",
							"1129": "../pages/videos_k.html?colId=",
							"1130": "../pages/videos_k.html?colId="
						}
					}
				},
				"moduleName": {
					"colId": 0,
					"comTitle": {
						"isShow": true,
						"name": "최신뉴스"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"transTitle": "listenTitle",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"directLink": {
						"switchFlag": false,
						"directRules": {
							"1118": "../pages/newslistsnxw?colId=",
							"1119": "../pages/newslistyjxw?colId=",
							"1120": "../pages/newslistzcfg?colId=",
							"1121": "../pages/newslisttpxw?colId=",
							"1122": "../pages/newslistspjx?colId="
						}
					}
				},
				"modulename": {
					"colId": 510,
					"comTitle": {
						"isShow": true,
						"name": "자료센터"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"transDefaultColId": "transDefaultColId",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"transTitle": "listenTitle",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"directLink": {
						"switchFlag": false,
						"dierctWay": "_blank",
						"directRules": {
							"1118": "../pages/newslistsnxw.html?colId=",
							"1119": "../pages/newslistyjxw.html?colId=",
							"1120": "../pages/newslistzcfg.html?colId=",
							"1121": "../pages/newslisttpxw.html?colId=",
							"1122": "../pages/newslistspjx.html?colId="
						}
					},
					"reverseByColId": false,
					"showLang": "Chinese"
				}
			}
		},
		"list_pic": {
			"list_pic_36": {
				"videodetaillist": {
					"getResourceDetail": {
						"url": "resource/detail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						}
					},
					"ziliaozuAttachType": "video",
					"getAttachPictureUrl": "dynamicFile/stream.do?recordID=",
					"display": {
						"courseContain": "课程包含内容(待翻译)：",
						"courseName": "课程名称(待翻译)",
						"symbol": "、",
						"play": "播放(待翻译)",
						"test": "测试卷(待翻译)",
						"video": "VIDEO-MEDIA",
						"ziliao": "ZILIAOKU",
						"noData": "데터 없음",
						"anwser": "答案(待翻译)",
						"testWord": "测试(待翻译)"
					},
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": [{
							"pub_parent_id": ""
						}, {
							"pub_site_id": ""
						}],
						"groupBy": "pub_resource_id",
						"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
						"pageNo": "1",
						"pageSize": "10",
						"searchText": ""
					},
					"sysAdapter": "sykAdapter",
					"typeAdapter": "videoAdapter",
					"toPlayVideo": {
						"url": "../pages/videoplay_k.html",
						"dataKeys": {
							"parentId": "parentId",
							"id": "id",
							"resType": "pubResType"
						},
						"fixedKeys": {},
						"params": {
							"videoResId": "VIDEO-MEDIA_RESOURCEID"
						}
					},
					"toPlayZLKVideo": {
						"url": "../pages/videoplay_k.html",
						"dataKeys": {
							"id": "id",
							"parentId": "parentId",
							"resType": "pubResType"
						},
						"fixedKeys": {}
					},
					"maxNum": 10,
					"pageSizes": [10, 30, 50, 100]
				},
				"modulename": {
					"display": {
						"courseContain": "课程包含内容(待翻译)：",
						"courseName": "课程名称(待翻译)",
						"symbol": "、"
					},
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": "[{pub_parent_id:''}]",
						"groupBy": "pub_resource_id",
						"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
						"pageNo": "1",
						"pageSize": "10",
						"searchText": ""
					},
					"sysAdapter": "sykAdapter",
					"typeAdapter": "videoAdapter",
					"toDetail": {
						"url": "../pages/videoplay_k.html",
						"dataKeys": {
							"parentId": "parentId",
							"id": "id"
						},
						"fixedKeys": {}
					},
					"maxNum": 10,
					"pageSizes": [10, 30, 50, 100],
					"toPlayVideo": {
						"url": "../pages/videoplay_k.html",
						"dataKeys": {
							"parentId": "parentId",
							"id": "id"
						},
						"fixedKeys": {}
					},
					"showTest": false,
					"needtobuy": false,
					"getResourceDetail": {
						"url": "resource/detail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						}
					},
					"toEbook": {
						"url": "",
						"params": {
							"bookId": "",
							"readType": 1,
							"bookName": "",
							"userName": "",
							"siteType": ""
						}
					},
					"toPlayAudio": {
						"url": "../pages/videoplay_k.html",
						"dataKeys": {
							"id": "id",
							"parentId": "parentId",
							"resType": "pubResType"
						},
						"fixedKeys": {},
						"params": {
							"audioResId": "AUDIO-MEDIA_RESOURCEID"
						}
					},
					"getAttachPictureUrl": "dynamicFile/stream.do?recordID=",
					"toPlayZLKVideo": {
						"url": "../pages/videoplay_k.html",
						"dataKeys": {
							"id": "id",
							"resType": "pubResType"
						},
						"fixedKeys": {}
					},
					"freeCourseNum": 1,
					"ziliaozuAttachType": "lowqualitypdf",
					"attachTypes": {
						"video": "video",
						"orgicpic": "orgicpic",
						"txtlpdf": "txtlpdf"
					}
				}
			}
		},
		"work_bookdetail": {
			"work_bookdetail_04": {
				"videodetail": {
					"getResourceDetail": {
						"url": "resource/detail.do",
						"params": {
							"pubId": "",
							"loginName": "",
							"attachTypes": "video"
						},
						"ZILIAOZU": {
							"sysAdapter": "sykAdapter",
							"typeAdapter": "ziliaozu"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "videoAdapter",
						"complicatedItem": {
							"one": [{
								"name": "img",
								"field": "picBig",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}, {
								"name": "title",
								"field": "resName",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}, {
								"name": "courseNumber",
								"field": "courseNumber",
								"display": "课程总数(待翻译)：",
								"afterDisplay": "讲(待翻译)",
								"method": "",
								"className": ""
							}, {
								"name": "courseDuration",
								"field": "courseDuration",
								"display": "课程(待翻译)：",
								"afterDisplay": "日(待翻译)",
								"method": "",
								"className": ""
							}, {
								"name": "free",
								"field": "free",
								"display": "费用(待翻译)：",
								"afterDisplay": "免费(待翻译)",
								"method": "",
								"className": ""
							}],
							"two": [{
								"name": "",
								"field": "",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}]
						}
					},
					"toProbation": {
						"url": "../../../reader/kspdf/read.jsp",
						"dataKeys": {
							"bookId": "resId",
							"bookName": "resName"
						},
						"fixedKeys": {
							"siteType": 0,
							"readType": 0
						}
					},
					"toDetail": {
						"url": "../pages/informationdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 320,
					"infoImgHeight": 220,
					"tabConfigList": {
						"tabConfigshow": false,
						"tabShow": false,
						"reviewShow": false,
						"tabList": ["상세 보기", "답글 하기"],
						"tabActiveIndex": 0,
						"toAllReviewName": "전부평론",
						"toAllReviewMethod": {
							"method": "toReviewList"
						}
					},
					"getPublicizeInfo": {
						"url": "spc/prodb/publicize.do",
						"params": {
							"doclibCode": "BOOK",
							"docID": ""
						},
						"isShowPublicize": false,
						"showPublicize": ["머리말", "내용 소개", "목차"]
					},
					"getAudioAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": 33,
							"attachTypes": "audio"
						},
						"isShowAudio": false
					},
					"addCart": {
						"url": "cart/addCart.do",
						"params": {
							"number": "",
							"loginName": "",
							"activityId": 0,
							"pubId": "",
							"siteId": 33
						}
					},
					"collectOrLike": {
						"url": "collection/addCollect.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"operateType": 0,
							"productId": "",
							"siteId": 33
						}
					},
					"toReviewList": {
						"url": "../pages/reviewlist_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"bookContentType": {
						"bookType": "91",
						"ebookType": "94"
					},
					"getPubidByLocationQueryFromSyk": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"queryParams": {
							"title": "BOOK_SYS_TOPIC"
						}
					},
					"staticText": {
						"noImg": "이미지 없음",
						"noResource": "내용 없음",
						"quantityOfGoodsMustNotExceedTwoHundred": "상품수는 200보다 작아야 함",
						"systemPrompt": "시스템 알림",
						"OK": "확인",
						"noPaperBookInfo": " 책이 없으므로 책바구니에 담을 수 없음",
						"noEBookInfo": "책이 없으므로 책바구니에 담을 수 없음",
						"noDate": "날자 없음",
						"yuan": "￥"
					}
				},
				"modulename": {
					"getResourceDetail": {
						"url": "book/getBookDetail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "bookAdapter",
						"complicatedItem": {
							"one": [{
								"name": "",
								"field": "",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}],
							"two": [{
								"name": "",
								"field": "",
								"display": "",
								"afterDisplay": "",
								"method": "",
								"className": ""
							}]
						}
					},
					"toProbation": {
						"url": "../../../reader/kspdf/read.jsp",
						"dataKeys": {
							"bookId": "resId",
							"bookName": "resName"
						},
						"fixedKeys": {
							"siteType": 0,
							"readType": 0
						}
					},
					"toDetail": {
						"url": "../pages/informationdetail_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toBuy": {
						"url": "../pages/bookBuy_k.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 320,
					"infoImgHeight": 220,
					"tabConfigList": {
						"tabShow": true,
						"reviewShow": true,
						"tabList": ["상세한", "평론"],
						"tabActiveIndex": 0,
						"toAllReviewName": "전부평론",
						"toAllReviewMethod": {
							"method": "toReviewList"
						}
					},
					"getPublicizeInfo": {
						"url": "spc/prodb/publicize.do",
						"params": {
							"doclibCode": "BOOK",
							"docID": ""
						},
						"isShowPublicize": true,
						"showPublicize": ["前言", "内容简介", "차례"]
					},
					"getAudioAttachment": {
						"url": "resource/detail.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"siteId": 33,
							"attachTypes": "audio"
						},
						"isShowAudio": true
					},
					"addCart": {
						"url": "cart/addCart.do",
						"params": {
							"number": "",
							"loginName": "",
							"activityId": 0,
							"pubId": "",
							"siteId": 33
						}
					},
					"collectOrLike": {
						"url": "collection/addCollect.do",
						"params": {
							"loginName": "",
							"pubId": "",
							"operateType": 0,
							"productId": "",
							"siteId": 33
						}
					},
					"toReviewList": {
						"url": "../pages/reviewlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"bugButton": {
						"display": "立即购买",
						"method": "toBuy",
						"display1": "加入书架",
						"method1": "toBuy",
						"display2": "开始阅读",
						"method2": "toProbation"
					},
					"bookContentType": {
						"bookType": "91",
						"ebookType": "94"
					},
					"getPubidByLocationQueryFromSyk": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"queryParams": {
							"title": "BOOK_SYS_TOPIC"
						}
					},
					"staticText": {
						"noImg": "아직 그림이 없습니다.",
						"noResource": "아직 없음",
						"quantityOfGoodsMustNotExceedTwoHundred": "상품수량은 200 개를 초과하지 말아야 합니다",
						"systemPrompt": "시스템 알림",
						"OK": "확인",
						"noPaperBookInfo": "该书没有对应纸质书，无法加入购物车",
						"noEBookInfo": "该书没有对应电子书，无法加入购物车",
						"noDate": "날자 없음",
						"yuan": "￥"
					},
					"combinateProductCfg": {
						"show": true,
						"title": "합쳐서 구매",
						"lastBtn": "쇼핑차에 추가",
						"addCart": {
							"url": "cart/addCombinateProductToCart.do",
							"params": {
								"loginName": "",
								"siteId": 37,
								"combinateId": ""
							}
						},
						"toDetail": {
							"url": "booldetail.html",
							"params": {}
						}
					},
					"showDialog": false,
					"display": {
						"courseUseTime": "사용기간：",
						"buyCourse": "과정구매",
						"sure": "확인",
						"cancel": "취소",
						"needPay": "지불 해야할 금액：",
						"payWay": "지불방식",
						"zhifubao": "支付宝",
						"weixin": "微信",
						"drumpPage": "결제페이지 이동중..."
					},
					"getPayMethodsBySiteId": {
						"url": "cart/getPayMethod.do",
						"params": {
							"siteId": ""
						}
					},
					"commitOrderUrl": "order/submitSplitOrder.do",
					"loginUrl": "../../pages/login.html",
					"qrcodeHref": "../pages/qrcode.html?data=",
					"errorpageHref": "../pages/errorpage.html",
					"commitorderHref": "../pages/commitorder.html#/commitOrder/",
					"zhentiContentType": "123",
					"isbnConfig": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_site_id": "37"
							}, {
								"pub_status": "1"
							}, {
								"BOOK_ISBN": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						}
					},
					"judgeInventory": {
						"showInventory": true,
						"noPaperBook": "상응된 도서가 없습니다",
						"lessInventory": "재고부족",
						"enoughInventory": "재고부족"
					},
					"attachTypesCfg": {
						"showColId": "",
						"type": "practice",
						"url": "/dynamicFile/stream.do",
						"key01": "recordID",
						"val01": "fileRecordID"
					},
					"toApply": {
						"showColId": "",
						"url": "../pages/applysamplebook.html",
						"dataKeys": {
							"REMARK": "id",
							"SYS_TOPIC": "resName"
						},
						"fixedKeys": {}
					}
				}
			}
		},
		"bookreview": {
			"bookreview_01": {
				"queryComments": {
					"url": "comment/comments.do",
					"params": {
						"pubId": "",
						"pageIndex": 1,
						"pageSize": 15,
						"siteId": 33
					}
				},
				"addComment": {
					"url": "comment/addComment.do",
					"params": {
						"pubId": "",
						"loginName": "",
						"content": "",
						"starNum": 0,
						"deviceName": "pc",
						"colId": "",
						"siteId": 33,
						"type": "1",
						"parentId": "0",
						"activityId": ""
					}
				},
				"pagination": {
					"showPagination": true,
					"pagesize": [15, 30, 50, 100]
				},
				"operList": {
					"review": {
						"reviewShow": true,
						"toReviewInfoUrl": "../pages/reviewDetail.html"
					},
					"like": {
						"likeShow": true
					}
				},
				"orReGetMenberName": true,
				"toAddReview": {
					"toAddReviewShow": true,
					"toAddReviewName": "평론",
					"toAddReviewUrl": "../pages/reviewPublish.html"
				},
				"staticText": {
					"comments": "평론",
					"noHeadPicture": "반신상 없음",
					"noComments": "아직 평론이 없습니다",
					"commentsEmptyInfo": "내용을 입력하세요",
					"pleaseGradeBeforeSubmitting": "먼저 점수를 매긴 다음 평론해주십시오",
					"commentAddFailed": "평론 추가 실패",
					"contentBefore": "다음을 입력 할 수도 있습니다.",
					"contentAfter": "... 개의 글자"
				},
				"resourceDetail": {
					"sysAdapter": "sykAdapter",
					"typeAdapter": "bookAdapter",
					"isDiscussLimit": true
				}
			}
		},
		"share": {
			"ui_share_01": {
				"modulename": {
					"shareLists": [{
						"title": "分享到QQ空间",
						"class": "bds_qzone",
						"cmd": "qzone"
					}, {
						"title": "分享到新浪微博",
						"class": "bds_tsina",
						"cmd": "tsina"
					}, {
						"title": "分享到腾讯微博",
						"class": "bds_tqq",
						"cmd": "tqq"
					}, {
						"title": "分享到人人网",
						"class": "bds_renren",
						"cmd": "renren"
					}]
				}
			}
		}
	},
	"videolist_k": {
		"crumbs": {
			"work_crumbs_02": {
				"videolistcrumbs": {
					"showLang": "Korean",
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					},
					"staticText": {
						"currentPosition": "현재위치"
					}
				},
				"modulename": {
					"getCols": {
						"url": "spc/cms/col/getAllColBySiteId",
						"type": "get",
						"params": {
							"siteId": "",
							"chId": "0"
						},
						"getGlobalParams": {
							"siteId": "siteId"
						},
						"keys": {
							"id": "id",
							"parentId": "parentId",
							"name": "name",
							"url": "url"
						}
					},
					"startCol": "0",
					"event": {
						"listenDetail": {
							"name": "listenInfoDetail",
							"keys": {
								"colId": "pub_col_id",
								"colName": "pub_col_name"
							}
						}
					},
					"staticText": {
						"currentPosition": "현재위치"
					},
					"showLang": "Chinese"
				}
			}
		},
		"navigation": {
			"navigation_05": {
				"videolistnavigation": {
					"showLang": "Korean",
					"colId": 1127,
					"comTitle": {
						"isShow": true,
						"name": "자료쎈터"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"transDefaultColId": "transDefaultColId",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"transTitle": "listenTitle",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"directLink": {
						"switchFlag": false,
						"dierctWay": "_self",
						"directRules": {
							"1118": "../pages/newslistsnxw_k.html?colId=",
							"1119": "../pages/newslistyjxw_k.html?colId=",
							"1120": "../pages/newslistzcfg_k.html?colId=",
							"1121": "../pages/newslisttpxw_k.html?colId=",
							"1122": "../pages/newslistspjx_k.html?colId="
						}
					},
					"reverseByColId": false
				},
				"modulename": {
					"colId": 510,
					"comTitle": {
						"isShow": true,
						"name": "자료쎈터"
					},
					"showChildren": true,
					"showThreeColumn": false,
					"broadcastName": "showNavContent",
					"transTitle": "transNavTitle",
					"transDefaultColId": "transDefaultColId",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 33,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
						}
					},
					"broadcastEventName": {
						"transCol": "listenInfoDetail",
						"transTitle": "listenTitle",
						"keys": {
							"colId": "pub_col_id"
						}
					},
					"directLink": {
						"switchFlag": false,
						"dierctWay": "_self",
						"directRules": {
							"1118": "../pages/newslistsnxw_k.html?colId=",
							"1119": "../pages/newslistyjxw_k.html?colId=",
							"1120": "../pages/newslistzcfg_k.html?colId=",
							"1121": "../pages/newslisttpxw_k.html?colId=",
							"1122": "../pages/newslistspjx_k.html?colId="
						}
					},
					"reverseByColId": false
				}
			}
		},
		"list_pic": {
			"list_pic_29": {
				"videolist": {
					"comTitle": {
						"isShow": false,
						"isShowImg": false,
						"name": "자료와 정보"
					},
					"toMoreBtn": {
						"isShow": false,
						"iconClass": "el-icon-back",
						"name": "더 보기",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "250"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "0"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 15,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}]
					},
					"toDetail": {
						"url": "../pages/videodetail_k.html",
						"dataKeys": {
							"pubId": "id",
							"colId": "colId",
							"resType": "pubResType"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist_k.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"onEvent": {
						"eventName": "showNavContent",
						"onColumnInfo": "columnInfo"
					},
					"pagination": {
						"showPagination": true,
						"pagesize": [15, 30, 50, 100]
					},
					"isMobileLoading": false,
					"toOrderByBtn": {
						"name": "차례：",
						"isShow": false,
						"itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
						"itemList": [{
							"name": "디폴트",
							"itemField": "pub_a_order asc pub_lastmodified desc id asc"
						}, {
							"name": "최신",
							"itemField": "pub_created asc id asc"
						}, {
							"name": "인기상품",
							"itemField": "pub_read_num asc id asc"
						}]
					},
					"staticText": {
						"noImg": "이미지 없음",
						"noData": "데터 없음",
						"noDate": "날자 없음",
						"yuan": "￥"
					},
					"showSearchBtn": false
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"isShowImg": false,
						"name": "资讯"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "el-icon-back",
						"name": "더보기",
						"method": "toMore"
					},
					"display": {},
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "250"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "250"
							}, {
								"pub_status": "1"
							}, {
								"pub_parent_id": "0"
							}, {
								"BOOK_BOOK_CASCADID": "1"
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
						"maxNum": 1,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "button"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": "",
							"method": "toDetail"
						}, {
							"name": "button",
							"field": "resName",
							"display": "",
							"method": "toDetail"
						}]
					},
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/informationlist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"onEvent": {
						"eventName": "showNavContent",
						"onColumnInfo": "columnInfo"
					},
					"pagination": {
						"showPagination": true,
						"pagesize": [15, 30, 50, 100]
					},
					"isMobileLoading": false,
					"toOrderByBtn": {
						"name": "排序：",
						"isShow": false,
						"itemFieldDefult": "pub_a_order asc pub_lastmodified desc id asc",
						"itemList": [{
							"name": "디폴트",
							"itemField": "pub_a_order asc pub_lastmodified desc id asc"
						}, {
							"name": "最新",
							"itemField": "pub_created asc id asc"
						}, {
							"name": "인기상품",
							"itemField": "pub_read_num asc id asc"
						}]
					},
					"staticText": {
						"noImg": "아직 그림이 없습니다.",
						"noData": "데터 없음",
						"noDate": "날자 없음",
						"yuan": "￥"
					},
					"showSearchBtn": true,
					"emitEvent": {
						"contextEventName": ""
					}
				}
			}
		}
	},
	"videoplay_k": {
		"work_videoplay": {
			"work_videoplay_01": {
				"videoplay": {
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_parent_id": ""
							}, {
								"pub_site_id": ""
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "videoAdapter",
						"typeAdapter1": "audioAdapter",
						"typeAdapter2": "ziliaoku"
					},
					"complicatedItem": [{
						"name": "title",
						"field": "resName",
						"display": "",
						"method": ""
					}, {
						"name": "img",
						"field": "picBig",
						"display": "",
						"method": ""
					}],
					"playVideoUrl": "dynamicFile/stream.do?recordID=",
					"showVideoList": true,
					"queryParamsType": "url",
					"getDetailById": {
						"url": "spc/cms/publish/detail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						}
					},
					"getResourceDetail": {
						"url": "resource/detail.do",
						"params": {
							"pubId": "",
							"loginName": "",
							"attachTypes": "video"
						}
					},
					"staticText": {
						"noNextVideo": "마지막 입니다",
						"noNextAudio": "没有下一个音频啦（待翻译）"
					},
					"event": {
						"emitDetail_name": "resourceDetailLoaded"
					}
				},
				"modulename": {
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_parent_id": ""
							}, {
								"pub_site_id": ""
							}],
							"groupBy": "pub_resource_id",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "10",
							"searchText": ""
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "videoAdapter",
						"typeAdapter1": "audioAdapter",
						"typeAdapter2": "ziliaoku"
					},
					"complicatedItem": [{
						"name": "title",
						"field": "resName",
						"display": "",
						"method": ""
					}, {
						"name": "img",
						"field": "picBig",
						"display": "",
						"method": ""
					}],
					"playVideoUrl": "dynamicFile/stream.do?recordID=",
					"showVideoList": true,
					"queryParamsType": "url",
					"getDetailById": {
						"url": "spc/cms/publish/detail.do",
						"params": {
							"pubId": "",
							"loginName": ""
						}
					},
					"getResourceDetail": {
						"url": "resource/detail.do",
						"params": {
							"pubId": "",
							"loginName": "",
							"attachTypes": "video"
						}
					},
					"staticText": {
						"noNextVideo": "마지막 입니다",
						"noNextAudio": "没有下一个音频啦"
					},
					"event": {
						"emitDetail_name": "resourceDetailLoaded"
					}
				}
			}
		}
	},
	"bookList_k": {
		"_2colsWithSort": {
			"queryBookList": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": "",
					"orderBy": "",
					"pageNo": "",
					"pageSize": "",
					"searchText": "",
					"groupBy": "pub_resource_id"
				},
				"staticText": {
					"homePage": "홈페지",
					"ebay": "전자서점",
					"moreBookList": "더보기",
					"defaultSort": "배렬순서",
					"pubTime": "발표일",
					"salesVolume": "판매량",
					"comment": "평론",
					"noPic": "그림이 없음",
					"author": "작자",
					"originalPrice": "정가",
					"currentPrice": "판매가",
					"buy": "구매",
					"check": "보기",
					"noAuthor": "작자 없음",
					"share": "공유"
				},
				"toIndexHref": "../pages/index_k.html",
				"toEBookHref": "../pages/ebook_k.html",
				"toBookDetailHref": "../pages/bookdetail_k.html"
			}
		},
		"_3colsWithSort": {
			"queryBookList": {
				"url": "spc/cms/publish/list.do",
				"secondCrumbsName": "전자서점",
				"secondCrumbsUrl": "../pages/ebook_k.html",
				"toIndexHref": "../pages/index_k.html",
				"toEBookHref": "../pages/ebook_k.html",
				"toBookDetailHref": "../pages/bookdetail_k.html",
				"params": {
					"conditions": "",
					"orderBy": "",
					"pageNo": "",
					"pageSize": "",
					"searchText": "",
					"groupBy": "pub_resource_id"
				}
			},
			"staticText": {
				"homePage": "홈페지",
				"ebay": "전자서점",
				"moreBookList": "더보기",
				"defaultSort": "배렬순서",
				"pubTime": "발표일",
				"salesVolume": "판매량",
				"comment": "평론",
				"noPic": "그림이 없음",
				"author": "작자",
				"originalPrice": "정가",
				"currentPrice": "판매가",
				"buy": "구매",
				"check": "보기"
			}
		}
	}
}