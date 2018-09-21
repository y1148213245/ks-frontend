/*
 * @Author: song 
 * @Date: 2018-09-12 10:42:23 
 * @Last Modified by: song
 * @Last Modified time: 2018-09-19 18:16:26
 */

<template>
  <div class="json_editor" ref="json_editor"></div>
</template>

<script>
import $ from "jquery"
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.css'

export default {
  name: 'JsonEditor',
  props: {
    json: {
      required: true
    }
  },
  data () {
    return {
      jsonEditor: null,
      options: { // 基础配置
        'modes': ['tree', 'code', 'view', 'text', 'form'], // 查看配置的模式 默认tree
        'sortObjectKeys': false,
        'language': 'pt-BR',
        'languages': {
          'pt-BR': {
            'type': '类型',
            'array': '数组',
            'string': '字符串',
            'auto': '自适应',
            'sort': '排序',
            'sortTitleShort': '排序',
            'appendText': '添加',
            'appendTitle': '添加',
            'appendSubmenuTitle': '添加二级菜单标题',
            'appendTitleAuto': '自动添加标题',
            'ascending': '升序',
            'ascendingTitle': '按标题升序',
            'collapseAll': '折叠所有',
            'descending': '降序',
            'descendingTitle': '按标题降序',
            'duplicateKey': '复制键',
            'drag': '拖拽',
            'duplicateText': '复制',
            'duplicateTitle': '复制标题',
            'duplicateField': '复制字段',
            'empty': '空',
            'expandAll': '展开所有',
            'expandTitle': '展开',
            'insert': '插入',
            'insertTitle': '插入',
            'insertSub': '插入子元素',
            'transform': '过滤',
            'transformTitleShort': '过滤',
            'transformTitle': '过滤',
            'object': '对象',
            'ok': '完成',
            'redo': '撤回',
            'removeText': '移除',
            'removeTitle': '移除标题',
            'removeField': '移除字段',
          }
        }
      },
      errors: null,
    }
  },
  methods: {
    change () {
      this.$emit('change', this.jsonEditor.get());
    },
    changeJson (val) {
      console.log(val)
    },
    err (err) {
      console.info(err)
    },
    changeMode (oldMode, newMode) {
      console.log("changeMode from " + newMode + " to " + oldMode)
    },
    onValidate: function (json) {
      if (json && json.qwert && 'boolean' != typeof json.qwert) {
        this.errors.qwert = {
          message: "qwert必须是Boolean"
        };
        console.error(this.errors.qwert.message);
      }
    },
    onTextSelectionChange (startPos, endPos, text) {
      console.log(startPos)
      console.log(endPos)
      console.log(text)
    }
  },
  watch: {
    json: function (newJson) {
      if (this.jsonEditor) {
        this.jsonEditor.set(newJson)
      }
    }
  },
  mounted () {
    var container = this.$refs.json_editor;
    this.options = $.extend(this.options, {
      onChange: this.change,
      onError: this.err,
      onModeChange: this.changeMode,
      onValidate: this.onValidate,
      onTextSelectionChange: this.onTextSelectionChange,
      ace: false
    });
    this.jsonEditor = new JSONEditor(container, this.options, this.json);
  },
  beforeDestroy () {
    if (this.jsonEditor) {
      this.jsonEditor.destroy()
      this.jsonEditor = null
    }
  }
}
</script>

<style>
</style>
