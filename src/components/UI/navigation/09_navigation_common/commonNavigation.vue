/*
 * @Author: song 
 * @Date: 2018-07-11 14:27:40 
 * @Last Modified by: song
 * @Last Modified time: 2018-07-13 16:57:54
 * 通用栏目树导航组件 支持到第二级
 */
 <template>
  <div class="ui_navigation_09">
    <!-- 组件（栏目树）标题 -->
    <div class="ui_navigation_09_comtitle_con" v-if="CONFIG.componentTitle && CONFIG.componentTitle.isShow && columnInfo">
      <h4 class="ui_navigation_09_comtitle_title"> {{CONFIG.componentTitle.titleName ? CONFIG.componentTitle.titleName : columnInfo.name}} </h4>
      <span class="ui_navigation_09_comtitle_subtitle">{{columnInfo.code}}</span>
    </div>

    <!-- 栏目树 -->
    <div v-if="columnTreeArr && columnTreeArr.length > 0">
      <!-- <el-tree :data="columnTreeArr" node-key="id" :default-expand-all="true" @node-click="handleNodeClick" :expand-on-click-node="false"></el-tree> -->
      <ul class="ui_navigation_09_first">
        <li class="ui_navigation_09_first_li" v-for="(item, index) in columnTreeArr" :key="index">
          <span class="ui_navigation_09_first_item" v-text="item.label"></span>
          <ul class="ui_navigation_09_second">
            <li class="ui_navigation_09_second_li" v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="handleNodeClick(subItem)">
              <span class="ui_navigation_09_second_subitem" v-text="subItem.label" :class="{'ui_navigation_09_active': activeIndex == subItem.id}"></span>
            </li>
          </ul>
        </li>
      </ul>
    </div>

  </div>
</template>
 
 <script>
import PROJECT_CONFIG from 'projectConfig';
import { Get, Post } from "@common";

export default {
  name: 'ui_navigation_09',
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      columnTreeObj: null, // 栏目树对象
      columnTreeArr: [], // 栏目树数组
      isDefaultClick: false,
      columnInfo: '', // 栏目信息
      activeIndex: '', // 高亮
    };
  },

  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].ui_navigation.ui_navigation_09[this.modulename];
    if (this.CONFIG.componentTitle && this.CONFIG.componentTitle.isShow) { // 配置了显示组件标题才请求标题
      this.getComponentTitle();
    }
    this.queryColumnTree(); // 查询栏目树
  },

  mounted () {

  },

  methods: {
    getComponentTitle () { // 获取组件标题
      let params = Object.assign({}, this.CONFIG.getComponentTitle.params);
      Post(CONFIG.BASE_URL + this.CONFIG.getComponentTitle.url + '?colId=' + params.colId).then((rep) => {
        let datas = rep.data;
        if (datas.success && datas.data) {
          this.columnInfo = datas.data;
        }
      });
    },
    queryColumnTree () {
      // console.log(this.defaultCheckedKeys);
      let params = { // 请求整个站点栏目树所需参数
        siteId: CONFIG.SITE_CONFIG.siteId,
        chId: CONFIG.SITE_CONFIG.chId
      }
      Get(CONFIG.BASE_URL + this.CONFIG.getColumnTree.url, { params: params }).then((resp) => {
        var result = resp.data;
        if (result.success && result.data && result.data.length > 0) {
          this.columnTreeObj = result.data;
          this.createColumnTree(this.columnTreeArr, { id: this.CONFIG.parentColId }); // 创建符合elementui的数据结构
        }
      })
    },
    createColumnTree (tagData, parent) {

      this.columnTreeObj.map((item) => { // this.columnTreeObj 栏目树的源数据
        if (item.parentId == parent.id) { // 根据父节点取子节点数据
          tagData.push({ // 重组子节点对象到数组 tagData：子节点数组
            id: item.id,
            label: item.name,
            children: []
          })
        }
      })

      if (tagData && tagData.length == 0) {
        if (!this.isDefaultClick) {
          this.isDefaultClick = true;
          this.handleNodeClick(parent);
          this.activeIndex = parent.id; // 高亮
        }
      }

      tagData.map((item) => { // 遍历子节点 去源数据中寻找子节点的子节点
        this.createColumnTree(item.children, item); // 回调
      })

    },
    handleNodeClick (data) {
      this.activeIndex = data.id;
      this.$bus.$emit(this.CONFIG.emitEvent.emitColumnInfo, data);
    }
  }
}
</script>
 <style>
.ui_navigation_09_active {
  color: red;
}

.ui_navigation_09_second_subitem {
  cursor: pointer;
}
</style>
