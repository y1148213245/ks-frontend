import component from '../index.vue';

const name = component.name; // 组件标签名

const title = "完善个人信息组件"; // 组件title


const description = `这是完善个人信息组件`; // 组件描述信息
const dev = {
	"subConfig": {
        "account": {
            "getMobileCode": {
                "url": "user/sendMobileMessage.do"
            },
            "editInfo": true,
            "staticText": {
                "editInfo": true,
                "editInfoText": "",
                "ordinaryUserText": "",
                "teacherUserText": ""
            },
            "secretQuestionBtnHide": true,
            "pswVerifyOption": true
        },
        "collection": {
            "tabListShow": [{
                "title": "电子书",
                "type": 94
            }, {
                "title": "纸质书",
                "type": 91
            }, {
                "title": "知识",
                "type": 95
            }]
        },
        "list": {
            "exchangeState": "true",
            "tabListShow": []
        },
        "feedback": {
            "submitUrl": "spc/prodb/saveItem.do",
            "feedbackkeys": "QUE_CONTENT",
            "params": {
                "doclibCode": "PORTAL_QUE_ANS",
                "metaMap": {}
            }
        },
        "samplebook": {
            "getListUrl": "spc/prodb/searchNL.do",
            "doclibCode": "PORTAL_YANGSHUKU",
            "pageIndex": "1",
            "pageSize": "10"
        },
        "comment": {
            "detailUrl": {
                "91": "./bookdetail.html",
                "94": "./bookdetail.html",
                "149": "./journaldetail.html",
                "177": "./seriesdetail.html"
            }
        },
        "modifyUser": {
            "submitUrl": "user/editMemberByName.do",
            "loginName": "",
            "userNick": "",
            "birthday": "",
            "mobileno": "",
            "introduction": "",
            "address": "",
            "memberType": "",
            "username": "",
            "industry": ["银行业", "证券、基金业", "保险业", "信托、租聘业", "其他金融机构", "金融监管机构", "高等院校", "科研院所", "政府机关", "其他"],
            "educated": ["博士", "硕士", "本科", "大专", "高中"],
            "areaInfo": ["北京","天津","上海","重庆","黑龙江省","吉林省","辽宁省","河北省", "山西省", "青海省","山东省","河南省","江苏省","安徽省","浙江省","福建省","江西省","湖南省","湖北省","广东省","台湾省","海南省", "甘肃省","陕西省","四川省","贵州省","云南省","内蒙古自治区","新疆维吾尔自治区","西藏自治区","宁夏回族自治区","广西壮族自治区"],
            "postcode": "",
            "bookClassifyConcerned": ["金融", "银行", "证券", "保险"],
            "job": "",
            "positio": ["助教", "讲师", "副教授", "教授"],
            "company": "",
            "faculty": "",
            "staffRoom": "",
            "teachLevel": ["研究生", "本科生", "高职"],
            "subject": "",
            "teachCourse": "",
            "tachingMaterialClassify": ""
        },
        "learning": {
            "tabListShow": [{
                "label": "音频",
                "name": "audio",
                "productType": "183"
            }, {
                "label": "视频",
                "name": "video",
                "productType": ""
            }, {
                "label": "课件",
                "name": "courseware",
                "productType": ""
            }, {
                "label": "试题",
                "name": "test",
                "productType": ""
            }],
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
            }]
        },
        "joinactivity": {
            "showItem": ["operate"]
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
            }, {
                "name": "知识服务",
                "type": "3",
                "productType": "knowledge",
                "keyType": "knowledge"
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
                },
                "knowledge": {
                    "name": "docName",
                    "pic": "",
                    "resourceId": "docId",
                    "resourceType": ""
                }
            }
        }
    }
}