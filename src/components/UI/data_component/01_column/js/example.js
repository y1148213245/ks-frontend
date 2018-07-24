/*
 * @Author: song 
 * @Date: 2018-07-18 10:56:27 
 * @Last Modified by: song
 * @Last Modified time: 2018-07-18 14:06:31
 */

// import component from "../resourceList.vue";

const name = 'ui_data_component_01'; // 组件标签名

const title = "资源列表组件"; // 组件title

const description = `资源列表组件，是数据组件。
** ** ** ** ** ** ** ** **  输出说明 ** ** ** ** ** ** ** ** ** 
请求返回的资源对象：resourceLists

** ** ** ** ** ** ** ** ** 输入说明 ** ** ** ** ** ** ** ** **
"modulename": { // 必须与组件标签上的modulename一致
  queryResourceLists: { // 请求栏目资源传参
    params: {
      conditions: [{  // conditions 一律以数组对象的形式传
        pub_col_id: '437'
      }, {
        pub_status: '1'
      }],
      groupBy: "pub_resource_id",
      orderBy: "pub_a_order asc pub_lastmodified desc id asc", // 排序 默认和后台栏目排序一致
      pageNo: "1", // 请求第几页
      pageSize: "15", //  一页返回多少个数据
      searchText: "", // 搜索内容
    }
  }
}

** ** ** ** ** ** ** ** ** 使用样例 ** ** ** ** ** ** ** ** **
<ui_data_component_01 namespace = "test" modulename = "test" >
  <template slot-scope = "{resourceLists}" >
    <ul>
      <li v-for = "list in resourceLists" >
        <span v - text = "list.pub_resource_name"></span>
      </li> 
    </ul> 
  </template>
</ui_data_component_01>
`; // 组件描述信息

const dev = {
  ui_data_component: {
    ui_data_component_01: {
      "modulename": {
        queryResourceLists: { // 请求栏目资源传参
          params: {
            conditions: [{ // conditions一律以数组对象的形式传
              pub_col_id: '437'
            }, {
              pub_status: '1'
            }],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "15",
            searchText: "",
          }
        }
      }
    }
  }
}

const prod = {
  ui_data_component: {
    ui_data_component_01: {
      "modulename": {
        queryResourceLists: { // 请求栏目资源传参
          params: {
            conditions: [{ // conditions一律以数组对象的形式传
              pub_col_id: '437'
            }, {
              pub_status: '1'
            }],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "15",
            searchText: "",
          }
        }
      }
    }
  }
}

const platform = 'PC';
const pageType = ['index', 'channel'];
const resourceType = ['book', 'information', 'radio', 'vedio'];

export {
  name,
  title,
  dev,
  prod,
  description,
  platform,
  pageType,
  resourceType,
}
