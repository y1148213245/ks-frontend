/*
 * @Author: song 
 * @Date: 2018-09-12 10:20:27 
 * @Last Modified by: song
 * @Last Modified time: 2018-09-12 15:24:09
 * 组件配置文件
 */
<template>
  <div class="editContainer">
    <!-- 保存按钮 -->
    <div class="btnContainer">
      <el-button @click="saveEdit(false)">取消</el-button>
      <el-button @click="saveEdit(true)" type="primary">保存</el-button>
    </div>

    <JsonEditor class="editVueContainer" :json="vueconfig" @change="change"></JsonEditor>

  </div>
</template>

<script>
import JsonEditor from './jsoneditor.vue';
import PROJECT_CONFIG from 'projectConfig';

export default {
  name: 'library_components_config',
  props: ['namespace', 'vueconfig'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      endJsonData: null, // 最后要保存下来的最终json数据
    };
  },
  components: {
    JsonEditor
  },
  mounted () {
    this.endJsonData = this.vueconfig; // 初始化
  },
  methods: {
    change (val) { // json指改变的时候 每次改变都记录下来
      this.endJsonData = val;
    },
    saveEdit (data) { // 执行保存操作
      this.$emit('broadcastconfig', data ? this.endJsonData : data);
    }
  }

}
</script>
<style>
.editVueConfig .el-dialog__body {
  height: calc(100% - 100px);
}

.editVueConfig .editContainer {
  height: 100%;
}

.editVueConfig .editContainer .btnContainer {
  position: absolute;
  right: 20px;
  top: 10px;
}
.editVueConfig div.jsoneditor-outer.has-nav-bar {
  margin: 0;
  padding: 0;
  height: 100%;
}

.editVueConfig div.json_editor {
  height: 100%;
}

.editVueConfig div.jsoneditor-tree {
  height: calc(100% - 61px);
}
</style>