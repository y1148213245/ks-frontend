var CONFIG = {
	// "BASE_URL": "http://www.liaoningxinhuajiaoyu.com/portal/api/",
	"BASE_URL": "http://172.19.92.76:8080/portal/api/",
	// "BASE_URL":"http://172.19.57.67:8080/portal/api/",/* 新服务器 */
	// "BASE_URL":"http://172.19.92.94:8080/portal/api/",
	// "BASE_URL":"http://172.19.36.97:9092/spc-portal-web/",
	"READ_URL": "http://172.19.57.153/portal/reader/yuezhi/read.jsp?",
	"PAGE_MANAGEMENT_URL": "../../../frontend-api/api/",
	"SITE_CONFIG": {
		"siteId": 8,
		"chId": 0
	}
}
var $_$ = {
	bookContentType: { // 书的类型  纸书：91 电子书 94
		bookType: '91',
		ebookType: '94',
	},
	"SITE_NAME": "site-102",
	"IS_DISABLE": false,
	/* 投票活动页配置 */
	"activityvote": {
		/* 详情 */
		activityDetail: {
			"work_activitydetail_01": {
				"url": "spc/cms/publish/detail.do",
				"keys": {
					"title": "PORTAL_VOTEACTIVITY_SYS_TOPIC",
					"content": "PORTAL_VOTEACTIVITY_DESCRIPTION",
					"startDate": "PORTAL_VOTEACTIVITY_BEGIN_TIMESTAMPNEW",
					"endDate": "PORTAL_VOTEACTIVITY_END_TIMESTAMPNEW",
					"resourceId": "pub_resource_id",
					"illustration": "pub_illustration",
					"reviewDate": "PORTAL_VOTEACTIVITY_REVIEW_TIMESTAMPNEW",
					"requestUrlParam_pubId": "pubId",
					"toUploadPageUrlParam_docId": "docId",
					"illustrationLinks": "PORTAL_VOTEACTIVITY_ACTIVITY_LINKS"
				},
				"eventName_loadedDatas": "eventName_loadedDatas",
				"toUploadPagUrl": "",
				showItem:[]
			},
			/* 投票活动复合组件 */
			work_activitydetail_08: {
				activityCandidate:{
					modulename:'activityCandidate'
				},
				activityPlan:{
					modulename:'activityPlan'
				},
				activityPrizewinner:{
					modulename:'activityPrizewinner'
				},
				activityDetail:{/* 活动详情配置 */
					event:{
						listenName:'eventName_loadedDatas',
					},
					sysAdapter:'sykAdapter',
					typeAdapter:'activityVoteAdapter',
				},
				tabArr: [
					{
						tag:'activityInstructions',
						title:'活动说明'
					},
					{
						tag:'activityPlan',
						title:'活动方案'
					},
					{
						tag:'activityNews',
						title:'活动新闻'
					},
					{
						tag:'activityCandidate',
						title:'参选人'
					},
					{
						tag:'activityPrizewinner',
						title:'获奖人展示'
					}],
			},
			/* 参赛人组件 */
			work_activitydetail_09: {
				"activityCandidate": {
					showType:'candidate',/* candidate:参选人,prizewinner:获奖人 */
					getCandidateList:{
						url:'spc/prodb/searchNLP.do',
						params:{
							doclibCode:'PORTAL_VOTE'
						},
						fixedParams:[{
							relations: '5',
							cols: 'TEXT',
							symbols: '5',
							vals: '5'
						}],
						getActivityDetailData: [{
							relations: '1',
							cols: 'ACTIVITYID',
							symbols: '2',
							vals: 'resId'
						}],
						sysAdapter:'zykAdapter',
						typeAdapter:'candidateAdapter',
					},
					activityDetail:{/* 活动详情配置 */
						event:{
							listenName:'eventName_loadedDatas',
						},
						sysAdapter:'sykAdapter',
						typeAdapter:'activityVoteAdapter',
					}
				},
				"activityPrizewinner": {
					showType:'prizewinner',/* candidate:参选人,prizewinner:获奖人 */
					getCandidateList:{
						url:'spc/prodb/searchNLP.do',
						params:{
							doclibCode:'PORTAL_VOTE'
						},
						fixedParams:[{
							relations: '1',
							cols: 'AWARD_NAME',
							symbols: '8',
							vals: '1'
						}],
						getActivityDetailData: [{
							relations: '1',
							cols: 'ACTIVITYID',
							symbols: '2',
							vals: 'resId'
						}],
						sysAdapter:'zykAdapter',
						typeAdapter:'candidateAdapter',
					},
					getAwardList: {/* 获取奖项列表配置 */
						url: 'spc/prodb/searchNL.do',
						params: {
							doclibCode: 'PORTAL_AWARD',
							page: 1,
							size: 99
						},
						sysAdapter:'zykAdapter',
						typeAdapter:'activityAwardAdapter',
						getActivityDetailData: [{
							relations: '1',
							cols: 'ACTIVITYID',
							symbols: '2',
							vals: 'resId'
						}]
					},
					activityDetail:{/* 活动详情配置 */
						event:{
							listenName:'eventName_loadedDatas',
						},
						sysAdapter:'sykAdapter',
						typeAdapter:'activityVoteAdapter',
					}
				}
				
	
			},
			/* 活动新闻组件 */
			"work_activitydetail_03": {
				"url": "spc/prodb/activity/voteActivityNews.do",
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
					}
				},
				"eventName_listen": "eventName_loadedDatas"
			},
			/* 辅文(活动方案)组件 */
			"work_activitydetail_02": {
				"activityPlan": {
					"url": "spc/prodb/getPublicize.do",
					"topic": "详情",
					"keys": {
						"topic": "topic",
						"content": "content",
						"eventName_listen_resourceId": "pub_resource_id",
						"eventName_listen_resourceType": "pub_resource_type",
						"requestUrlParam_docId": "docID",
						"requestUrlParam_code": "code"
					},
					"eventName_listen": "eventName_loadedDatas"
				}
			}
		}
	},
	/* END 投票活动页配置 */
	"findPassword": {
		"findPassword": {
			"work_findPassword_01": {
				"findPasswordUrl": "user/findPassword.do?email=",
				"setPasswordUrl": "user/setPassword1.do?email=",
				"href": "../pages/login.html"
			},
			"work_findpassword_01": {
				"findPasswordUrl": "user/findPassword.do?email=",
				"setPasswordUrl": "user/setPassword1.do?email=",
				"href": "../pages/login.html"
			}
		}
	},
	"common": {
		"common": {
			"vote_03": {
				"url": "spc/prodb/activity/vote.do?",
				"params": {
					"browserId": "",
					"docID": ""
				}
			}
		},
		"navigation": {
			"ui_navigation_04": {
				"totop": {
					"showItem": ["toTop"],
					"display": {
						"qq": "联系我们",
						"toTop": "返回顶部"
					},
					"toQQ": {
						"url": "http://wpa.qq.com/msgrd?v=3&uin=275591164&site=qq&menu=yes"
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
	"upload": {
		"contestants": {
			"contestants_01": {
				"competitionList": {
					"url": "user/getActivityMemberByUser.do",
					"competitionedUrl": "spc/prodb/activity/activityPothunterExist.do",
					"params": {
						"userId": "",
						"pageNo": "1",
						"pageSize": "8"
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
						"getPlaceRequestBack_areas": "AREALIMT_BIG",
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
					"url": "/spc/prodb/activity/saveAcitivityWorks.do?",
					"params": {
						"doclibCode": "PORTAL_WORKS",
						"metaMap": {
							"ACTIVITYID": "",
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
							"WORKSTYPE": ""
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
				}
			}
		}
	},
	"productiondetail": {
		"bookdetail": {
			"bookdetail_03": {
				"url": "book/getWorkDetail.do",
				"collectUrl": "collection/addWorkCollect.do",
				"loadUrl": "dynamicFile/file.do?recordID=",
				"params": {
					"doclibCode": "",
					"docID": ""
				},
				"keys": {
					"title": "SYS_TOPIC",
					"author": "POTHUNTER_NAME",
					"voteNum": "VOTE_COUNT",
					"raceType": "CLASS",
					"abstract": "DESCRIPTION",
					"content": "TEXTCONTENT",
					"attachment": "ATTACH_LIST",
					"docId": "SYS_DOCUMENTID",
					"isCollect": "isCollect",
					"isHide": "IS_HIDE",
					"activityName": "ACTIVITY_NAME",
					"createdTime": "SYS_CREATED",
					"area": "AREA",
					"school": "SCHOOL",
					"workType": "WORKSTYPE"
				},
				"getActivityInfo": {
					"url": "spc/prodb/detail.do",
					"requestParams": {
						"doclibCode": "PORTAL_ACTIVITY"
					},
					"dataKeys": {
						"voteSwitch": "PRAISE_SWITCH",
						"endDate": "END_TIMESTAMPNEW",
						"startDate": "BEGIN_TIMESTAMPNEW",
						"isHide": "IS_HIDE",
						"voteDescription": "PRAISE_DESCRIPTION"
					}
				}
			}
		},
		"bookReview": {
			"work_bookreview_02": {
				"reviewType": "production",
				"getParamType": "href",
				"queryreview": {
					"url": "comment/getWorksComment.do",
					"params": {
						"resourceType": "",
						"resourceId": "",
						"type": "1",
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
					"url": "comment/addWorksComment.do",
					"params": {
						"pubId": "",
						"loginName": "",
						"content": "",
						"siteId": 8,
						"parentId": "0",
						"starNum": "0",
						"type": "1",
						"colId": "",
						"memberType": "",
						"resourceName": "",
						"resourceType": "",
						"resourceId": "",
						"activityId": ""
					}
				},
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
				}
			}
		}
	},
	"activitylist": {
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
				detailHref: {
					activityrace:'./activityrace.html',
					activityvote:'./activityvote.html'
				},
				baseKeys:{
					id: "id",
					resourceType:'pub_resource_type',
					pub_picMiddle: "pub_picMiddle"
				},
				keys: {
					'contribute':{
						topic: "PORTAL_ACTIVITY_SYS_TOPIC",
						beginTime: "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
						endTime: "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
						reviewDate:'PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW',
					},
					'vote':{
						topic: "PORTAL_VOTEACTIVITY_SYS_TOPIC",
						beginTime: "PORTAL_VOTEACTIVITY_BEGIN_TIMESTAMPNEW",
						endTime: "PORTAL_VOTEACTIVITY_END_TIMESTAMPNEW",
						reviewDate:'',
						
					}
					
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
				}
			}
		},
		"advert": {
			"ui_advert_01": {
				"activitylist": {
					"getList": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": "[{pub_col_id:'275'}]",
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
		"list_word": {
			"list_word_02": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": [{
						"pub_col_id": "274"
					}],
					"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": null
				},
				"startNum": 0,
				"locationQuery": {
					"keys": {
						"colId": "infoColId"
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
		}
	},
	"newsdetail": {
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
					"abstract": "ABSTRACT",
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
					"locationMode": {
						"dataKeys": {
							"docID": "docID"
						}
					},
					"type": "location",
					"eventMode": {
						"listenEventName": "eventName_toNewsDetail",
						"dataKeys": {
							"docID": "SYS_DOCUMENTID"
						}
					}
				},
				"eventName_back": "eventName_backNewsList"
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
				"toUploadPagUrl": "./uploadproduction.html"
			},
			"work_activitydetail_02": {
				"module1": {
					"url": "spc/prodb/getPublicize.do",
					"topic": "详情",
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
				"module2": {
					"url": "spc/prodb/getPublicize.do",
					"showType": "simple",
					"topic": "公告",
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
					}
				},
				"module2": {
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
						"getListParam_pageNo": "page",
						"getListParam_pageSize": "size",
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
						"getListParam_pageNo": "page",
						"getListParam_pageSize": "size",
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
					"tag": "activityNews",
					"title": "活动新闻"
				}, {
					"tag": "activityProduct",
					"title": "参赛作品"
				}, {
					"tag": "activityProductWinning",
					"title": "获奖作品"
				}, {
					"tag": "activityTeather",
					"title": "名师指导"
				}]
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
	"header": {
		"navigation": {
			"navigation_02": {
				"toCartUrl": "../pages/shoppingcart.html",
				"toLoginUrl": "../pages/login.html"
			},
			"navigation_03": {
				"targetType": "_self",
				"currentSelect": [{
					"id": "268",
					"htmls": ["index.html"]
				}, {
					"id": "269",
					"htmls": ["xhjy.html"]
				}, {
					"id": "270",
					"htmls": ["zxsc.html"]
				}, {
					"id": "271",
					"htmls": ["informationdetail.html", "informationlist.html", "newslist.html"]
				}, {
					"id": "272",
					"htmls": ["jyzy.html"]
				}, {
					"id": "273",
					"htmls": ["activity.html", "activityrace.html", "activitylist.html", "informationdetail.html", "productiondetail.html", "uploadproduction.html"]
				}],
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
					"parentId": "267",
					"showChildNav": [271]
				}
			},
			"navigation_06": {
				"targetType": "_self",
				"currentSelect": [{
					"id": "268",
					"htmls": ["index.html"]
				}, {
					"id": "269",
					"htmls": ["xhjy.html"]
				}, {
					"id": "270",
					"htmls": ["zxsc.html"]
				}, {
					"id": "271",
					"htmls": ["informationdetail.html", "informationlist.html", "newslist.html"]
				}, {
					"id": "272",
					"htmls": ["jyzy.html"]
				}, {
					"id": "273",
					"htmls": ["activity.html", "activityrace.html", "activitylist.html", "informationdetail.html", "productiondetail.html", "uploadproduction.html"]
				}],
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
					"parentId": "267",
					"showChildNav": [271]
				},
				"url": "spc/cms/col/getColNextLevelNode",
				"params": {
					"colId": "39"
				}
			}
		},
		"login": {
			"work_login_04": {
				"toLoginHref": "../pages/login.html",
				"toPersonalCenterHref": "../pages/personalcenter.html",
				"toExit": {
					"type": "href",
					"href": "../pages/activity.html",
					"func": {
						"funcName": "",
						"params": []
					}
				},
				toRegisterHref: './register.html',
				showItem: ['register']
			}
		},
		"search": {
			"search_01": {
				"searchUrl": "../pages/search.html",
				"advSearchUrl": "../pages/searchadvanced.html"
			}
		}
	},
	"activity": {
		"swiper": {
			"swiper_07": {
				"getListData": {
					"url": "spc/cms/publish/list.do",
					"params": {
						"conditions": "[{pub_col_id:'266'}]",
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
				"linkType": "source"
			}
		},
		"list_pic": {
			"ui_list_pic_22": {
				"url": "spc/cms/col/getColNextLevelNode",
				"params": {
					"colId": "248"
				},
				"activityListUrl": "./activitylist.html",
				"keys": {
					"small_pic": "small_pic",
					"id": "id",
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
					detailHref: {
						activityrace:'./activityrace.html',
						activityvote:'./activityvote.html'
					},
					baseKeys:{
						id: "id",
						resourceType:'pub_resource_type',
						pub_picMiddle: "pub_picMiddle"
					},
					keys: {
						'contribute':{
							topic: "PORTAL_ACTIVITY_SYS_TOPIC",
							beginTime: "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
							endTime: "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
							reviewDate:'PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW',
						},
						'vote':{
							topic: "PORTAL_VOTEACTIVITY_SYS_TOPIC",
							beginTime: "PORTAL_VOTEACTIVITY_BEGIN_TIMESTAMPNEW",
							endTime: "PORTAL_VOTEACTIVITY_END_TIMESTAMPNEW",
							reviewDate:'',
							
						}
					}
				},
				"showActivityTypeStr": "ACTIVITY"
			}
		}
	},
	"list": {
		"list_word": {
			"list_word_02": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": "[{pub_col_id:'274'}]",
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
				}
			}
		}
	},
	"personalcenter": {
		"personalcenter": {
			"personalcenter_01": {
				"navList": [{
					"title": "我的帐号",
					"icon": "el-icon-edit",
					"tag": "account"
				}, {
					"title": "我的工作台",
					"icon": "el-icon-edit",
					"tag": "workbench"
				}],
				"subConfig": {
					"account": {}
				}
			}
		}
	},
	"personalCenter": {
		"personalcenter": {
			"personalcenter_01": {
				"navList": [{
					"title": "我的帐号",
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
					"title": "参与的活动",
					"icon": "el-icon-service",
					"tag": "joinactivity"
				},
				{
					"title": "我的工作台",
					"icon": "el-icon-edit",
					"tag": "workbench"
				}],
				"subConfig": {
					'account': {
						getMobileCode: {
							url: 'user/sendMobileMessage.do' /* /user/sendToMobile.do 文联用  user/sendMobileMessage.do 华育用 */
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
					"url": "user/sendMobileMessage.do"
				},
				"showItem": ["bindMobile", "bindEmail"]
			}
		}
	},
	"register_success": {
		"common": {
			"work_common_04": {
				"getLocationParam": {
					"keys": {
						"status": "status",
						"token": "token"
					}
				},
				"toLoginHref": "./login.html",
				"toLoginType": "auto"
			}
		}
	},
	"index": {
		"swiper": {
			"pic_01": {
				"height": "380px",
				"interval": 5000,
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": "[{'pub_col_id':'280'}]",
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
				}
			},
			"swiper_08": {
				"sygg": {
					"display": {},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": "[{pub_col_id: '283'}]",
							"orderBy": "pub_a_order asc pub_lastmodified desc id asc",
							"pageNo": "1",
							"pageSize": "15",
							"searchText": ""
						},
						"startNum": 0,
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
					}
				}
			}
		},
		"list_pic": {
			"list_pic_29": {
				"zixuntu": {
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
							"colId": "282"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "282"
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
						"showItem": ["img", "title"],
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
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/newslist.html",
						"dataKeys": {
							"colId": "id"
						},
						"fixedKeys": {}
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
							"colId": "colId"
						},
						"fixedKeys": {}
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"getSubTitle": {
						"url": "spc/cms/col/getColumnByIdForSite",
						"params": {
							"colId": "250"
						},
						"sysAdapter": "sykAdapter",
						"typeAdapter": "columnAdapter"
					},
					"onEvent": {
						"eventName": "showNavContent"
					},
					"pagination": {
						"showPagination": true,
						"pagesize": [15, 30, 50, 100]
					}
				}
			},
			"list_pic_28": {
				"hyzx": {
					"comTitle": {
						"isShow": true,
						"name": "华育资讯"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "el-icon-back",
						"name": "更多"
					},
					"haveChildNavTag": true,
					"display": {},
					"getColumnList": {
						"url": "spc/cms/col/getColNextLevelNode",
						"params": {
							"colId": "249"
						}
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "249"
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
						"showItem": ["img", "title"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": ""
						}, {
							"name": "title",
							"field": "resName",
							"display": ""
						}]
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/newslist.html",
						"dataKeys": {
							"colId": "colId"
						},
						"fixedKeys": {},
						isGetSubCol: true
					}
				},
				"csdt": {
					"comTitle": {
						"isShow": true,
						"name": "分公司动态"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "el-icon-back",
						"name": "更多"
					},
					"haveChildNavTag": true,
					"display": {},
					"getColumnList": {
						"url": "spc/cms/col/getColNextLevelNode",
						"params": {
							"colId": "252"
						}
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "252"
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
						"showItem": ["img", "title"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": ""
						}, {
							"name": "title",
							"field": "resName",
							"display": ""
						}]
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/newslist.html",
						"dataKeys": {
							"colId": "colId"
						},
						"fixedKeys": {}
					}
				},
				"dqjs": {
					"comTitle": {
						"isShow": true,
						"name": "党群建设"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "el-icon-back",
						"name": "更多"
					},
					"haveChildNavTag": true,
					"display": {},
					"getColumnList": {
						"url": "spc/cms/col/getColNextLevelNode",
						"params": {
							"colId": "250"
						}
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
						"maxNum": 4,
						"sysAdapter": "sykAdapter",
						"typeAdapter": "newsAdapter",
						"showItem": ["img", "title"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": ""
						}, {
							"name": "title",
							"field": "resName",
							"display": ""
						}]
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/newslist.html",
						"dataKeys": {
							"colId": "colId"
						},
						"fixedKeys": {}
					}
				},
				"fxxx": {
					"comTitle": {
						"isShow": true,
						"name": "发行信息"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "el-icon-back",
						"name": "更多"
					},
					"haveChildNavTag": true,
					"display": {},
					"getColumnList": {
						"url": "spc/cms/col/getColNextLevelNode",
						"params": {
							"colId": "251"
						}
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "251"
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
						"showItem": ["img", "title"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": ""
						}, {
							"name": "title",
							"field": "resName",
							"display": ""
						}]
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/newslist.html",
						"dataKeys": {
							"colId": "colId"
						},
						"fixedKeys": {}
					}
				},
				"modulename": {
					"comTitle": {
						"isShow": true,
						"name": "华育资讯"
					},
					"toMoreBtn": {
						"isShow": true,
						"iconClass": "el-icon-back",
						"name": "更多"
					},
					"haveChildNavTag": true,
					"display": {},
					"getColumnList": {
						"url": "spc/cms/col/getColNextLevelNode",
						"params": {
							"colId": "245"
						}
					},
					"getResourceLists": {
						"url": "spc/cms/publish/list.do",
						"params": {
							"conditions": [{
								"pub_col_id": "249"
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
						"showItem": ["img", "title"],
						"complicatedItem": [{
							"name": "img",
							"field": "picBig",
							"display": ""
						}, {
							"name": "title",
							"field": "resName",
							"display": ""
						}]
					},
					"infoImgWidth": 200,
					"infoImgHeight": 160,
					"toDetail": {
						"url": "../pages/informationdetail.html",
						"dataKeys": {
							"pubId": "id"
						},
						"fixedKeys": {}
					},
					"toMore": {
						"url": "../pages/newslist.html",
						"dataKeys": {
							"colId": "colId"
						},
						"fixedKeys": {}
					}
				}
			}
		},
		"list_word": {
			"list_word_02": {
				"url": "spc/cms/publish/list.do",
				"params": {
					"conditions": [{
						"pub_col_id": "282"
					}],
					"orderBy": "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
					"pageNo": "1",
					"pageSize": "15",
					"searchText": null
				},
				"startNum": 1,
				"locationQuery": {
					"keys": {
						"colId": "colId"
					}
				}
			}
		}
	},
	"newslist": {
		"list_pic": {
			"list_pic_30": {
				"newslist": {
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
								"op": "in"
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
						"title": "华育动态",
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
								"op": "in"
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
		},
		"navigation": {
			"navigation_05": {
				"newscol": {
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
							"siteId": 8,
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
							"siteId": 8,
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
		}
	},
	"xhjy": {
		"navigation": {
			"navigation_05": {
				"xhjycol": {
					"colId": 244,
					"comTitle": {
						"isShow": true,
						"name": "关于新华教育"
					},
					"showChildren": false,
					"broadcastName": "showNavContent",
					"display": {},
					"getNavLists": {
						"url": "spc/cms/col/getAllColBySiteId.do",
						"params": {
							"siteId": 8,
							"chId": 0
						},
						"keys": {
							"parentId": "parentId",
							"id": "id",
							"name": "name"
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
							"siteId": 8,
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
				"content": {
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
	"footer": {
		"navigation": {
			"navigation_03": {
				"url": "spc/cms/col/getColNextLevelNode",
				"targetType": "_blank",
				"params": {
					"colId": "287"
				}
			}
		}
	},
	"login": {
		"login": {
			"work_login_01": {
				"disBacks": ["register.html", "register_success.html", "forgetPassword.html"],
				"indexPath": "./index.html"
			},
			"work_login_03": {
				"disBacks": ["register.html", "register_success.html", "forgetPassword.html"],
				// showItem:['code'],
				"indexPath": "./index.html"
			}
		}
	},
	"informationdetail": {
		"crumbs": {
			"work_crumbs_02": {
				"detail": {
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
		"informationDetail": {
			"work_informationdetail_01": {
				"url": "spc/cms/publish/detail.do",
				"params": {
					"pubId": "",
					"loginName": ""
				},
				"keys": {
					"show_key": false,
					"information_SYS_AUTHORS": "information_SYS_AUTHORS",
					"information_a_pubTime": "information_a_pubTime",
					"information_SYS_TOPIC": "information_SYS_TOPIC",
					"information_a_content": "information_a_content",
					"information_collect": "information_collect",
					"information_share": "information_share",
					"pub_widget_url": "pub_widget_url",
					"pub_widget_content": "pub_widget_content"
				},
				"collectOrLike": {
					"url": "collection/addCollect.do",
					"params": {
						"pubId": "",
						"operateType": "0",
						"siteId": ""
					}
				},
				"showItem": [],
				"event": {
					"detailReady": "listenInfoDetail"
				}
			}
		},
		share: {
			ui_share_01: {
				'work_informationdetail_01_share': {
					shareLists: [// 分享配置
						{
							title: '分享到QQ空间', //
							class: 'bds_qzone', //
							cmd: 'qzone', //
						},
						{
							title: '分享到新浪微博',
							class: 'bds_tsina',
							cmd: 'tsina',
						},
						{
							title: '分享到腾讯微博',
							class: 'bds_tqq',
							cmd: 'tqq',
						},
						{
							title: '分享到人人网',
							class: 'bds_renren',
							cmd: 'renren',
						},
					]
				}
			}
		},
		"pagination": {
			"ui_pagination_01": {
				"url": "spc/cms/publish/searchNext.do",
				"queryKeys": {
					"id": "pubId",
					"conditions": "conditions",
					"orderBy": "orderBy",
					"pageNo": "pageNo",
					"pageSize": "pageSize"
				},
				"prevNextUrl": "./informationdetail.html?",
				"pageConfig": {
					"isGetLocationQuery": false,
					"keys": {
						"pageNo": "pageNo",
						"pageSize": "pageSize"
					},
					"pageNo": "1",
					"pageSize": "999"
				}
			}
		}
	}
}