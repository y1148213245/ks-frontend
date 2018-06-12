import component from '../06_col_detail.vue'
const name = component.name;  // 组件标签名
const title = '栏目详情组件';  // 组件title
const description = `栏目详情组件`;  // 组件描述信息
const dev = {
  common: {
    work_common_06: {
      'modulename': {
        getColDetail: {
          url: 'spc/cms/col/getColumnByIdForSite',
          keys: {
            name: 'name'
          },
          params: {
            colId: 'colId'
          }
        }
      }

    }
  }
};
const prod = {
  common: {
    work_common_06: {
      'modulename': {
        getColDetail: {
          url: 'spc/cms/col/getColumnByIdForSite',
          keys: {
            name: 'name'
          },
          params: {
            colId: 'colId'
          }
        },
        showItem:['title'],/* 控制显示,目前控制父栏目标题 title */
      }
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };