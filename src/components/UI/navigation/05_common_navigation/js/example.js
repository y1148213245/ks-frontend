
import component from "../commonnav.vue";


const name = component.name;  // 组件标签名

const title = "导航组件";  // 组件title

const description = `通用导航组件，可配置是否含有子导航。

navigation: {
  navigation_05: {
    "moduleName": {
      colId: 0, //以此节点为根元素
      comTitle: {
        isShow: true,
        name: "华育动态新闻"
      },
      showChildren: true, //如果有子导航，点击父导航是否展开  true展开，false发广播
      showThreeColumn: false, //是否显示三级目录
      broadcastName: "showNavContent",
      transTitle: "transNavTitle",
      display: { // vue template 固定显示内容
      },
      getNavLists: { // 获取某一栏目下的数据列表
        url: "spc/cms/col/getAllColBySiteId.do",
        params: {
          siteId: CONFIG.SITE_CONFIG.siteId,
          chId: CONFIG.SITE_CONFIG.chId,
        },
        keys: {
          parentId: "parentId",
          id: "id",
          name: "name"
        }
      },
      broadcastEventName: {
        transCol: "listenInfoDetail", // 与面包屑导航通讯
        transTitle: 'listenTitle', //与在其他组件中的三级栏目通信
        keys: {
          colId: 'pub_col_id'
        }
      },
      // showColumnArray: [], // 过滤显示的栏目 （并不是所有的栏目都应该显示）过滤显示哪个栏目 比如：showColumnArray: [307, 308]
      directLink: { // 点击左侧导航直接跳转链接 因为点击左侧不同导航时右侧内容的内容显示不一样
        switchFlag: false, // 跳转功能开关
        dierctWay: '_blank', // 跳转窗口的方式 _blank代表新窗口 _self代表当前窗口
        directRules: { // 跳转链接根据栏目id不同而不同
          '1118': '../pages/newslistsnxw.html?colId=',
          '1119': '../pages/newslistyjxw.html?colId=',
          '1120': '../pages/newslistzcfg.html?colId=',
          '1121': '../pages/newslisttpxw.html?colId=',
          '1122': '../pages/newslistspjx.html?colId=',
        }
      }
    }
  },
}
`;  // 组件描述信息

const dev = {
  navigation: {
    navigation_05: {
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
          "directRules": {
            "1118": "../pages/newslistsnxw.html?colId=",
            "1119": "../pages/newslistyjxw.html?colId=",
            "1120": "../pages/newslistzcfg.html?colId=",
            "1121": "../pages/newslisttpxw.html?colId=",
            "1122": "../pages/newslistspjx.html?colId="
          }
        },
        "reverseByColId":false //是否按照id反向排序 , 默认false或者不传值按照colId排序 , true则按照colId反向排序
      },
    },
  }
}

const prod = {
  navigation: {
    navigation_05: {
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
          dierctWay: '_blank', // 跳转窗口的方式 _blank代表新窗口 _self代表当前窗口
          "directRules": {
            "1118": "../pages/newslistsnxw.html?colId=",
            "1119": "../pages/newslistyjxw.html?colId=",
            "1120": "../pages/newslistzcfg.html?colId=",
            "1121": "../pages/newslisttpxw.html?colId=",
            "1122": "../pages/newslistspjx.html?colId="
          }
        },
        "reverseByColId":false //是否按照id反向排序 , 默认false或者不传值按照colId排序 , true则按照colId反向排序
      },
    },
  }
};

const platform = 'PC';
const pageType = ['others'];
const resourceType = ['others'];

export { name, title, dev, prod, description, platform, pageType, resourceType };
