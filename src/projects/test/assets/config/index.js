var CONFIG = {
	"BASE_URL": "http://172.19.57.71:8080/portal/api/",
	"READ_URL": "../../../reader/yuezhi/read.jsp",
	"PAGE_MANAGEMENT_URL": "http://172.19.92.76:8085/spc/api/",
	"SITE_CONFIG": {
		"siteId": 35,
		"chId": 0
	},
	"READ_CONFIG": {
		"siteType": 1
	},
	"APP": 1
}
var $_$ = {
	"SITE_NAME": "site-231",

	"IS_DISABLE": false,
  "test":{
    "work_videoplay": {
      "work_videoplay_01": {
        "videoplay": {
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [
                {
                  "pub_parent_id": ""
                },
                {
                  "pub_site_id": "33"
                }
              ],
              "groupBy": "pub_resource_id",
              "orderBy": "pub_a_order asc pub_lastmodified desc id asc",
              "pageNo": "1",
              "pageSize": "10",
              "searchText": ""
            },
            "sysAdapter": "sykAdapter",
            "typeAdapter": "videoAdapter"
          },
          "complicatedItem": [
            {
              "name": "title",
              "field": "resName",
              "display": "",
              "method": ""
            },
            {
              "name": "img",
              "field": "picMiddle",
              "display": "",
              "method": ""
            }
          ],
          "playVideoUrl": "dynamicFile/refStream.do?path=proof_path&recordID=",
          "showVideoList": true,
          "queryParamsType": "url",
          "getDetailById": {
            "url": "spc/cms/publish/detail.do",
            "params": {
              "pubId": "",
              "loginName": ""
            }
          }
        },
        "modulename": {
          "getResourceLists": {
            "url": "spc/cms/publish/list.do",
            "params": {
              "conditions": [
                {
                  "pub_parent_id": ""
                },
                {
                  "pub_site_id": ""
                }
              ],
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
          "complicatedItem": [
            {
              "name": "title",
              "field": "resName",
              "display": "",
              "method": ""
            },
            {
              "name": "img",
              "field": "picBig",
              "display": "",
              "method": ""
            }
          ],
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
            "noelseTips": "没有下一个视1111频啦"
          }
        }
      }
    }
  }

}