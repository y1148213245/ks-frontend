 <!-- 
  Created by song 2018/1/25
  前端页面管理系统
 -->
 <template>
   <div class="components_pagemanagement">
     <div class="titleHead">
       <div class="pageLogo">
          <img src="./img/pageLogo.png" alt="暂无图片">
       </div>
       <div class="titleText">方正数字出版应用平台前端页面管理系统</div>
     </div>
     <!-- 三列式 -->
     <div class="mainFooter" :style="{height: clientHeight + 'px'}">
       <!-- 左侧 列表 -->
       <div class="leftList"> 
         <div class="listNav">
          <el-tabs type="border-card">
            <el-tab-pane v-for="(list, index) in listArray" :label="list.name" :key="index">
              <div class="listCon">
                <div class="listHead">
                  <span class="operation" v-for="(op, ind) in operationArray">
                    <i :class="op.icon"></i>
                    <span v-text="op.name"></span>
                  </span>
                </div>
                <div v-text="list.name"></div>
              </div>
            </el-tab-pane>
          </el-tabs>
         </div>
       </div>

       <div class="mainContent">
         <div class="reviewArea">
          <span>左侧列表预览区</span>
         </div>
         <div class="handle">
           <div class="handleLeft">
            <span>编程</span>
            <span>替换</span>
            <span>预览</span>
            <span>发布</span>
            <span>删除</span>
           </div>
           <div class="handleRight">
             <el-radio label="1">切换视图</el-radio>
           </div>
         </div>
         <div class="contentCon">
             <div class="codemirror">
               <!-- codemirror-->
               <codemirror v-model="code"></codemirror>
             </div>
          </div>
       </div>
       <div class="rightList">
         <div class="rightListTop listArea">
           <div class="title">已用组件列表</div>
           <div class="conponentsCon"></div>
         </div>
         <div class="rightListBottom listArea">
           <div class="title">未采用组件列表</div>
           <div class="conponentsCon"></div>
         </div>
       </div>
     </div>
   </div>
 </template>
 
 <script>
export default {
  name: "components_pagemanagement",
  reused: true,
  data () {
    const code =
`<html style="color: green">
  <!-- this is a comment -->
  <head>
    <title>HTML Example</title>
  </head>
  <body>
  <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <span>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</span>
    <span>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</span>
    <span>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</span>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <span>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</span>
    <span>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</span>
    <span>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</span>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <span>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</span>
    <span>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</span>
    <span>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</span>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
    <div>Code Mirror是由js写的一款插件，其功能非常强大,用来实现网页端代码编辑器非常方便。</div>
  </body>
</html>
`
    return {
      code,  // 源码
      clientHeight: 0, // 容器高度
      listArray: [{    // 列表对象：页面列表、样式列表、图片列表 
        name: '页面列表',
        type: 'page'
      }, {
        name: '样式列表',
        type: 'style'
      }, {
        name: '图片列表',
        type: 'image'
      }],
      operationArray: [{ // 操作对象： 上传、导入、导出、删除
        name: '上传',
        type: 'upload',
        icon: 'el-icon-upload2'
      }, {
        name: '导入',
        type: 'uploadQ',
        icon: 'el-icon-upload'
      }, {
        name: '导出',
        type: 'download',
        icon: 'el-icon-download'
      }, {
        name: '删除',
        type: 'delete',
        icon: 'el-icon-delete'
      }],
    };
  },

  components: {},

  computed: {},

  mounted () {
    this.clientHeight = document.documentElement.clientHeight - 80;
  },

  methods: {}
}

</script>
<style>
body {
  margin: 0px;
}

.components_pagemanagement .titleHead {
  width: 100%;
  height: 80px;
  background-color: #1c2e46;
  color: #fff;
  padding: 0 20px;
  position: fixed;
  top: 0px;
}

.components_pagemanagement .pageLogo {
  top: 50%;
  position: relative;
  transform: translateY(-50%);
  float: left;
}

.components_pagemanagement .titleHead .titleText {
  font-size: 24px;
  margin-left: 16px;
  float: left;
  height: 100%;
  line-height: 80px;
}

.components_pagemanagement .mainFooter {
  width: 100%;
  position: fixed;
  top: 80px;
  bottom: 0px;
}

.components_pagemanagement .mainFooter .leftList {
  width: 296px;
  float: left;
  height: 100%;
}

.components_pagemanagement .leftList .listNav .el-tabs__item {
  padding: 0 21px;
}

.components_pagemanagement .leftList .listNav .el-tabs--border-card>.el-tabs__content {
  padding: 0px; 
}

.components_pagemanagement .leftList .listNav .el-tabs__nav {
  font-size: 16px;
}

.components_pagemanagement .leftList .listNav {
  height: 100%;
}

.components_pagemanagement .leftList .listNav .el-tabs--border-card {
  height: 100%;
}

.components_pagemanagement .leftList .listNav .listHead {
  padding: 10px 5px;
  color: #7f7f7f;
  font-size: 14px;
}

.components_pagemanagement .leftList .listNav .operation {
  display: inline-block;
  width: 23.7%;
  text-align: center;
  cursor: pointer;
}

/* .components_pagemanagement .leftList .listNav .operation.active {
  background-color: #eaecf0;
  border-radius: 4px;
  height: 26px;
  line-height: 26px;
} */

.components_pagemanagement .mainFooter .mainContent {
  width: calc( 100% - 556px );
  height: 100%;
  float: left;
}

.components_pagemanagement .mainContent .reviewArea {
  height: 39px;
  border-bottom: 1px solid #e4e7ed;
  background-color: #f6f7f9;
}

.components_pagemanagement .mainContent .reviewArea span {
  display: inline-block;
  padding: 5px 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 3px;
  background-color: #fff;
}

.components_pagemanagement .mainContent .handle {
  height: 39px;
  line-height: 39px;
  background-color: #f6f7f9;
}

.components_pagemanagement .mainContent .handle .handleLeft {
  float: left;
  margin-left: 40px;
}

.components_pagemanagement .mainContent .handle .handleLeft span {
  display: inline-block;
  width: 60px;
  text-align: center;
  cursor: pointer;
}

.components_pagemanagement .mainContent .handle .handleRight {
  float: right;
  margin-right: 40px;
}

.components_pagemanagement .mainFooter .rightList {
  width: 260px;
  float: right;
  height: 100%;
  background-color: #f5f7fa;
}

.components_pagemanagement .mainFooter .rightList .listArea {
  height: calc( 50% - 40px );
}

.components_pagemanagement .mainFooter .contentCon {
  height: calc( 100% - 80px );
  overflow-y: scroll;
}

.components_pagemanagement .mainFooter .contentCon .CodeMirror {
  height: 100%
}

.components_pagemanagement .mainFooter .rightList .title {
  height: 39px;
  line-height: 39px;
  border-bottom: 1px solid #e4e7ed;
  padding-left: 20px;
}
</style>