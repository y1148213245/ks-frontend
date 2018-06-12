
import component from "../07_navigation.vue";


const name = component.name;  // 组件标签名

const title = "选项下拉组件";  // 组件title

const description = `选项下拉组件，可配置
colId: 245,   //以此节点为根元素
selectType: 'toPage',       //toPage 打开新页面 fieldValue 应该设置为url   tobroadcast 广播 fieldValue 应该设置为id
showColumnArray用来控制过滤显示哪个栏目 比如：showColumnArray: [307, 308] 过滤输入的应该和  field.fieldValue 保持一致
  field: {
    fieldname:'name',  //option 展示的
    fieldValue:'id',   //option 的value
  },
`;  // 组件描述信息

const dev = {
  navigation: {
    navigation_07: {
      "modulename": {
        field: {
          fieldname:'name',
          fieldValue:'id',
        },
        selectType: 'toPage',       //toPage 打开新页面 fieldValue 应该设置为url   tobroadcast 广播 fieldValue 应该设置为id
        broadcastName: "showNavContent",
        getNavLists: { // 获取某一栏目下的数据列表
          url: "../data/commonNavigation_07.json",
          params: {
            colId: 245, //以此节点为根元素
          },
          keys: {
            parentId: "parentId",
            id: "id",
            name: "name"
          }
        },
        // showColumnArray: [249,250], // 过滤显示的栏目 （并不是所有的栏目都应该显示）  //过滤输入的应该和  field.fieldValue 保持一致
      }
    }
  }
}

const prod = {
  navigation: {
    navigation_07: {
      "modulename": {
        field: {
          fieldname:'name',
          fieldValue:'id',
        },
        selectType: 'toPage',       //toPage 打开新页面 fieldValue 应该设置为url   tobroadcast 广播 fieldValue 应该设置为id
        broadcastName: "showNavContent",
        getNavLists: { // 获取某一栏目下的数据列表
          url: "/spc/cms/col/getColNextLevelNode",
          params: {
            colId: 245, //以此节点为根元素
          },
          keys: {
            parentId: "parentId",
            id: "id",
            name: "name"
          }
        },
        showColumnArray: [249,250], // 过滤显示的栏目 （并不是所有的栏目都应该显示）  //过滤输入的应该和  field.fieldValue 保持一致
      }
    }
  }
};

const platform = 'PC';
const pageType = ['others'];
const resourceType = ['others'];

export { name, title, dev, prod, description, platform, pageType, resourceType };
