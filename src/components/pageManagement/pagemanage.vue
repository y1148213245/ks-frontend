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
          <el-tabs type="border-card" v-model="activeType" @tab-click="toggleListType">
            <el-tab-pane v-for="(list, index) in listArray" :label="list.name" :key="index" :name="list.type">
              <div class="listCon">
                <div class="listHead">
                  <span class="operation">
                    <el-upload
                      class="upload-demo"
                      :action="upLoadUrl()"
                      name="file"
                      :show-file-list="false"
                      :on-progress="upLoading"
                      :on-success="upLoadingSuccess"
                      :before-upload="beforeUpload">
                      <i class="el-icon-upload2"></i>
                      <span>上传</span>
                    </el-upload>
                  </span>
                  <span class="operation"><i class="el-icon-upload"></i><span>导入</span></span>
                  <span class="operation" @click="downloadFile()"><i class="el-icon-download"></i><span>导出</span></span>
                  <span class="operation" @click="deleteFile()"><i class="el-icon-delete"></i><span>删除</span></span>
                </div>
                <div class="listWrapper">
                  <ul class="listConUl">
                    <li v-for="(list, index) in activeLists" v-if="activeLists.length > 0" :key="index" :title="list" @click="toRightModule(list)">
                      <img src="./img/html.png" alt="" class="listIcon" v-if="activeType === 'html'">
                      <img src="./img/css.png" alt="" class="listIcon" v-if="activeType === 'css'">
                      <img src="./img/img.png" alt="" class="listIcon" v-if="activeType === 'img'">
                      <span v-text="list" class="listName" :class="{onFileName: activeFile == list}"></span>
                    </li>
                    <li v-if="activeLists.length === 0">暂无数据</li>
                  </ul>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
         </div>
       </div>

       <!-- 中间预览区 -->
       <div class="mainContent">
         <div class="reviewArea">
          <span>左侧列表预览区</span>
         </div>
         <div class="handle">
           <div class="handleLeft">
             <span v-for="(handle, index) in handleLists" @click="toggleOperation(handle.type)" v-text="handle.name" :class="{opon: showItem == handle.type}" :key="index" :click="handle.type">
             </span>
           </div>
           <div class="handleRight">
             <el-button class="saveBtn" size="mini" round @click="saveCode()" v-if="showItem === 'coding'">保存</el-button>
             <el-radio label="1">切换视图</el-radio>
           </div>
         </div>
         <div class="contentCon">
             <div class="review" v-if="showItem == 'review'">
               <iframe :src="reviewContext"></iframe>
             </div>
             <div class="codemirror" v-if="showItem == 'coding'">
               <!-- codemirror-->
               <codemirror v-model="code"></codemirror>
             </div>
          </div>
       </div>

       <!-- 右侧组件列表区 -->
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
import { Get, Post, Delete } from "@common";

export default {
  name: "components_pagemanagement",
  reused: true,
  data () {
    return {
      code: '',  // 源码
      clientHeight: 0, // 容器高度
      listArray: [{    // 列表对象：页面列表、样式列表、图片列表 
        name: '页面列表',
        type: 'html'
      }, {
        name: '样式列表',
        type: 'css'
      }, {
        name: '图片列表',
        type: 'img'
      }],
      activeType: 'html',  // 当前选中的列表 默认选中页面列表
      activeFile: '',      // 当前选中的文件 默认选中页面列表下的第一个文件
      activeLists: [],     // 左侧列表 数组
      showItem: 'review',  // 选中的操作 默认选中预览
      handleLists: [{      // 中间操作对象： 预览、编程呢个、替换、发布、删除
        name: '预览',
        type: 'review'
      }, {
        name: '编程',
        type: 'coding'
      }, {
        name: '替换',
        type: 'change'
      }, {
        name: '发布',
        type: 'public'
      }, {
        name: '删除',
        type: 'delete'
      }],
      configUrl: 'http://172.19.36.31:8085/spc/api/files',  // 请求url
      reviewContext: '',  // iframe里面的内容 呈现源码
    };
  },

  mounted () {
    this.clientHeight = document.documentElement.clientHeight - 80;
    this.queryLists(); // 页面一加载 查询列表
  },

  methods: {
    toggleListType (tab, event) { // 切换显示列表：页面列表、样式列表、图片列表
      this.activeType = tab.name;
      this.showItem = 'review';  // 每次切换列表的时候都要选中预览操作 因为并不是所有的列表下的文件都有编程操作
      this.code = ''; // 每次切换列表的时候都要置空codemirror的值 理由同上
      this.queryLists();
    },
    toRightModule (file, item) {  // 点击文件名操作：控制中间区域的显示内容 首先判断当前处于何种操作
      this.activeFile = file;
      this.showItem = item ? item : this.showItem;
      this.toggleOperation(this.showItem);
    },
    toggleOperation (item) { // 切换中间区域的操作: 预览、编程、替换、发布、删除
      this.showItem = item;
      if (this.showItem === 'review') {  // 预览
        this.reviewContext = this.configUrl + '?fileName=' + this.activeFile;
      } else if (this.showItem === 'coding') { // 编程 图片没有编程操作
        Get(this.configUrl + '/edit?fileName=' + this.activeFile).then((res) => {
          var datas = res.data;
          if (datas.success && datas.content) {
            this.code = datas.content;
          }
        })
      }
    },
    deleteFile () {  // 删除文件
      this.$confirm("删除后不可恢复，您确定要删除该文件吗？", "系统提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        Delete(this.configUrl + '?fileName=' + this.activeFile).then((res) => {  // TODO 有跨域错误
          console.log(res);
        })
      });
    },
    saveCode () { // 保存修改
      var data = {
        fileName: this.activeFile,
        fileContent: this.code,
      };
      Post(this.configUrl + '/edit?fileName=' + data.fileName + '&fileContent=' + encodeURIComponent(data.fileContent)).then((res) => {
        if (res.data.success) {
          this.$message({
            type: "success",
            message: "文件修改成功"
          });
        } else {
          this.$message({
            type: "info",
            message: "文件修改失败"
          });
        }
      })
    },
    upLoadUrl () {  // 上传地址
      return (
        this.configUrl
      );
    },
    beforeUpload (file) {  // 上传前要校验格式
      let typeMatch = false;
      let errorMsg = '请上传符合格式的文件';
      switch (this.activeType) {
        case "html":
          typeMatch = file.type === 'text/html' ? true : false;
          errorMsg = '请上传html格式的文件';
          break;
        case "css":
          typeMatch = file.type === 'text/css' ? true : false;
          errorMsg = '请上传css格式的文件';
          break;
        case "img":
          typeMatch = file.type === 'image/jpeg' || file.type === 'image/png' ? true : false;
          errorMsg = '请上传正确格式的图片';
          break;
      }
      if (!typeMatch) {
        this.$message.error(errorMsg);
      }
      return typeMatch;
    },
    upLoading () {  // 上传过程
      this.loading = this.$loading({
        lock: true,
        text: "正在上传...",
        spinner: "el-icon-loading",
      });
    },
    upLoadingSuccess (res, file) { // 上传成功回调
      this.loading.close();
      if (res.success) {
        this.queryLists();
        this.$message({
          type: "success",
          message: "文件上传成功"
        });
      } else {
        this.$message({
          type: "info",
          message: "文件上传失败，请重试"
        });
      }
    },
    downloadFile () {  // 导出
      let url = 'http://172.19.36.31:8085/spc/api/project/export';
      Get(url).then(function (res) {
        if (res.status === 200) {
          window.location.href = url;
        }
      })
    },
    queryLists () {  // 查询左侧列表
      Get(this.configUrl + '/list?type=' + this.activeType).then(res => {
        let datas = res.data;
        if (datas && datas.list) {
          this.activeLists = datas.list;
          this.activeFile = datas.list.length > 0 ? datas.list[0] : '';
          this.toRightModule(this.activeFile, this.showItem);
        }
      })
    }
  }
}

</script>
<style>
body {
  margin: 0px;
}

.components_pagemanagement .titleHead {
  width: 100%;
  height: 80px;
  background-color: #4f79a5;
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

.components_pagemanagement
  .leftList
  .listNav
  .el-tabs--border-card
  > .el-tabs__content {
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

.components_pagemanagement .leftList .listNav .operation .upload-demo {
  display: inline-block;
}

/* .components_pagemanagement .leftList .listNav .operation.active {
  background-color: #eaecf0;
  border-radius: 4px;
  height: 26px;
  line-height: 26px;
} */

.components_pagemanagement .mainFooter .mainContent {
  width: calc(100% - 556px);
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

.components_pagemanagement .mainContent .handle .handleLeft .opon {
  color: #409eff;
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
  height: calc(50% - 40px);
}

.components_pagemanagement .mainFooter .contentCon {
  height: calc(100% - 80px);
}

.components_pagemanagement .mainFooter .contentCon .review {
  height: 100%;
}

.components_pagemanagement .mainFooter .contentCon iframe {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
}

.components_pagemanagement .mainFooter .contentCon .codemirror {
  height: 100%;
}

.components_pagemanagement .mainFooter .contentCon .CodeMirror {
  height: 100%;
  width: 100%;
}

.components_pagemanagement .codemirror .vue-codemirror {
  height: 100%;
}

.components_pagemanagement .mainContent .saveBtn {
}

.components_pagemanagement .mainFooter .rightList .title {
  height: 39px;
  line-height: 39px;
  border-bottom: 1px solid #e4e7ed;
  padding-left: 20px;
}

.components_pagemanagement .listCon .listWrapper .listConUl {
  padding-left: 20px;
  padding-right: 20px;
}

.components_pagemanagement .listCon .listWrapper .listConUl .onFileName {
  color: #409eff;
}

.components_pagemanagement .listCon .listWrapper .listConUl li {
  list-style-type: none;
  position: relative;
  height: 30px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.components_pagemanagement .listCon .listWrapper .listConUl li:hover {
  color: #409eff;
}

.components_pagemanagement .listCon .listWrapper .listConUl .listIcon {
  top: 0px;
  position: absolute;
}

.components_pagemanagement .listCon .listWrapper .listConUl .listName {
  margin-left: 26px;
}
</style>