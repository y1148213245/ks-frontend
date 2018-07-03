<!--  -->
<template>
 <el-cascader
  :options="trees"
  filterable
  clearable
  @change="selectOption"
></el-cascader>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
export default {
  name: 'work_common_05',
  reused: true,
  props: {
    namespace: String,
    modulename: String,
    areastr: {
      type: String,
      default: ''
    },
    currentarea: {
      type: String
    },
    config:{
      type:Object
    }
  },
  data () {
    return {
      CONFIG: null,
      trees: []
    };
  },

  computed: {},

  created () {
    // this.initConfig();/* 测试中 */
  },

  mounted () {
    if (this.areastr) {
      this.loadData();
    }

  },

  methods: {
    loadData () {
      let str_area = this.areastr;/* 地区字符串 */
      let arr_area = str_area.split(this.config.splitTag.item);/* 地区数组 */
      let trees = [];
      for (let i = 0, len_i = arr_area.length; i < len_i; i++) {
        const area = arr_area[i];/* '全国~沈阳' */
        let currentTree = {};

        let arr = area.split(this.config.splitTag.category);/* [全国,沈阳] */

        this.addTree(trees, arr)

      }
      // debugger
      this.trees = trees

    },
    selectOption (val) {
      let str = val.join(this.config.splitTag.category)
      this.$emit('update:currentarea',str)
    },
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].common.work_common_05[this.modulename]
    },
    addTree (trees, arr) {
      if (arr.length > 0) {
        if (trees.length > 0) {
          let currentTree
          let isHas = false;

          for (let i = 0, len = trees.length; i < len; i++) {
            const item = trees[i];
            if (arr[0] == item.value && item.value != '') {
              currentTree = item;
              isHas = true;
              break;
            }
          }
          if (!isHas) {
            currentTree = {
              value: arr[0],
              label: arr[0]
            }
            trees.push(currentTree)
          }

          if (arr.slice(1).length > 0) {
            currentTree.children ? '' : currentTree.children = []
            this.addTree(currentTree.children, arr.slice(1))
          }
        } else {
          let tree = {
            value: arr[0],
            label: arr[0]
          }
          trees.push(tree)
          if (arr.slice(1).length > 0) {
            tree.children = []
            this.addTree(tree.children, arr.slice(1))
          }
        }
      }

    }
  }
}
</script>
<style>

</style>
