
import component from "../commonnav.vue";


const name = component.name;  // 组件标签名

const title = "导航组件";  // 组件title

const description = `通用导航组件，可配置是否含有子导航。
showColumnArray用来控制过滤显示哪个栏目 比如：showColumnArray: [307, 308]
`;  // 组件描述信息

const dev = {
  navigation: {
    navigation_05: {
      "modulename": {
        colId: 245,//以此节点为根元素
        comTitle: {
          isShow: true,
          name: "华育动态新闻"
        },
        showChildren: false,//如果有子导航，点击父导航是否展开  true展开，false发广播
        broadcastName: "showNavContent",
        display: { // vue template 固定显示内容
        },
        getNavLists: { // 获取某一栏目下的数据列表
          url: "../data/commonNavigation.json",
          params: {
            siteId: CONFIG.SITE_CONFIG.siteId,
            chId: CONFIG.SITE_CONFIG.chId
          },
          keys: {
            parentId: "parentId",
            id: "id",
            name: "name"
          }
        },
        // showColumnArray: [], // 过滤显示的栏目 （并不是所有的栏目都应该显示）
      }
    }
  }
}

const prod = {
  navigation: {
    navigation_05: {
      "modulename": {
        colId: 245,//以此节点为根元素
        comTitle: {
          isShow: true,
          name: "华育动态新闻"
        },
        showChildren: false,//如果有子导航，点击父导航是否展开  true展开，false发广播
        broadcastName: "showNavContent",
        display: { // vue template 固定显示内容
        },
        getNavLists: { // 获取某一栏目下的数据列表
          url: "spc/cms/col/getAllColBySiteId.do",
          params: {
            siteId: CONFIG.SITE_CONFIG.siteId,
            chId: CONFIG.SITE_CONFIG.chId
          },
          keys: {
            parentId: "parentId",
            id: "id",
            name: "name"
          }
        },
        // showColumnArray: [], // 过滤显示的栏目 （并不是所有的栏目都应该显示）
      }
    }
  }
};

const platform = 'PC';
const pageType = ['others'];
const resourceType = ['others'];

export { name, title, dev, prod, description, platform, pageType, resourceType };
