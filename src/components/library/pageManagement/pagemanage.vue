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
                  <span class="operation">
                    <el-upload
                      class="upload-demo"
                      :action="importUrl()"
                      name="file"
                      :show-file-list="false"
                      :on-progress="importProgress"
                      :on-success="importSuccess"
                      :before-upload="beforeImport">
                      <i class="el-icon-upload"></i>
                      <span>导入</span>
                    </el-upload>
                  </span>
                  <span class="operation" @click="downloadFile()"><i class="el-icon-download"></i><span>导出</span></span>
                  <span class="operation" @click="deleteFile()"><i class="el-icon-delete"></i><span>删除</span></span>
                </div>
                <div class="listWrapper">
                  <ul class="listConUl">
                    <li v-for="(list, index) in activeLists" v-if="activeLists.length > 0" :key="index" :title="list" @click="toRightModule(list, 'review')">
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
         <div class="reviewArea" v-if="debugModel">
          <div class="reviewAreaDiv">
            <el-upload
              class="upload-demo"
              :action="importResource()"
              name="file"
              :show-file-list="false"
              :on-progress="importProgress"
              :on-success="importResourceSuccess"
              :before-upload="beforeImport">
              <i class="el-icon-upload"></i>
              <span>导入资源</span>
            </el-upload>
          </div>
         </div>
         <div class="handle" v-if="showItem === 'component'">
           <div class="handleLeft">
             <span class="opon">预览</span>
           </div>
         </div>
         <div class="handle" v-else>
           <div class="handleLeft">
             <span v-for="(handle, index) in handleLists" @click="toggleOperation(handle.type)" v-text="handle.name" :class="{opon: showItem == handle.type}" :key="index" :click="handle.type" v-if="!(activeType === 'img' && handle.type === 'coding')">
             </span>
           </div>
           <div class="handleRight">
             <el-button class="saveBtn" size="mini" round @click="saveCode()" v-if="showItem === 'coding'">保存</el-button>
             <span @click="toggleView()" style="cursor: pointer;">切换视图</span>
           </div>
         </div>
         <div class="contentCon">
             <div class="review" v-if="showItem == 'review' && !noData">
                <iframe :src="reviewContext"></iframe>
             </div>
             <div class="codemirror" v-if="showItem == 'coding' && !noData">
                <!-- codemirror-->
                <codemirror v-model="code"></codemirror>
             </div>
             <div class="component" v-if="showItem == 'component' && !noData">
                <img :src="imgUrl" alt="暂无图片">
                <div>组件标签名： <span><{{showComponents.name}}></{{showComponents.name}}></span></div>
                <div>组件描述：{{showComponents && showComponents.description}}</div>
                <div>dev 配置：</div>
                <textarea class="jsonInfo" v-html="showComponents && showComponents.dev"></textarea>
                <div>prod 配置：</div>
                <textarea class="jsonInfo" v-html="showComponents && showComponents.prod"></textarea>
                <div>html片段：</div>
				        <textarea class="jsonInfo" v-html="this.showComponents && this.showComponents.templateCon"></textarea>
             </div>
             <div v-if="noData" style="padding: 20px;">暂无内容</div>
          </div>
       </div>

       <!-- 右侧组件列表区 -->
       <div class="rightList">
         <div class="rightListTop listArea">
           <div class="title">已用组件列表</div>
           <div class="conponentsCon">
             <ul class="usedComUl">
               <li v-if="JSON.stringify(usedComponents) !== '{}'" v-for="(com, vkey, index) in usedComponents" :key="index" :title="com.title + '（' + com.name + '）'" :class="{onFileName: activeFile == com.name}">
                 <el-button size="mini" @click="showConfig(com.name)">配置</el-button>
                 <span v-text="com.title + '（' + com.name + '）'" @click="showComponentDetail(com)"></span>
               </li>
               <li v-if="JSON.stringify(usedComponents) === '{}'">暂无已用组件</li>
             </ul>
           </div>
         </div>
         <div class="rightListBottom listArea">
           <div class="title">
             <span>未采用组件列表</span>
             <a href="./zjk.html" target="_blank" style="float: right; text-decoration: none;" >查看组件库</a>
           </div>
           <div class="conponentsCon">
             <ul class="usedComUl">
               <li v-if="JSON.stringify(unusedComponents) !== '{}'" v-for="(com, vkey, index) in unusedComponents" :key="index" :title="com.title + '（' + com.name + '）'" :class="{onFileName: activeFile == com.name}">
                 <span v-text="com.title + '（' + com.name + '）'" @click="showComponentDetail(com)"></span>
               </li>
               <li v-if="JSON.stringify(unusedComponents) === '{}'">暂无未用组件</li>
             </ul>
           </div>
         </div>
       </div>
     </div>
     <!-- 修改配置文件的模态弹窗 -->
     <el-dialog title="组件配置信息" :visible.sync="editConfigModel" :model="configForm" :rules="configRules">
      <div>
        <el-form  :model="configForm" :rules="configRules" :label-position="labelPosition" ref="configForm">
          <el-form-item label="组件命名空间(namespace)" prop="namespace">
            <el-input v-model="configForm.namespace" style="width: 200px;" :disabled="true"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="editConfigModel = false">取 消</el-button>
        <el-button type="primary" @click="confirmConfig('configForm')">确 定</el-button>
      </span>
      
     </el-dialog>
   </div>
 </template>
 
 <script>
import ScanExamples from "@common/scans/ScanExamples";
import VueExamples from "@common/scans/ScanVues";
import { Get, Post, Delete } from "@common";
import URL from "url";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: "components_pagemanagement",
  reused: true,
  data () {
    return {
      examples: {},   // 组件对象
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
      }/* , {
        name: '替换',
        type: 'change'
      } */, {
        name: '发布',
        type: 'public'
      }, {
        name: '在线查看',
        type: 'view'
      }/* , {
        name: '删除',
        type: 'delete'
      } */],
      configUrl: 'http://172.19.57.153:8085/spc/api/',  // 请求url
      // configUrl: 'http://172.19.36.57:8084/spc/api/',  //  ff本地ip
      reviewContext: '',  // iframe里面的内容 呈现源码
      noData: true,
      usedComponents: {},
      unusedComponents: {},
      debugModel: false,  // debug模式 暗号 790118
      imgUrl: "",         // 组件截图
      showComponents: null,   // 中间区域当前展示的组件
      siteName: '',  // 站点名 用于区分不同的站点
      VueExamples: {},           // 扫描出来的vue文件的全部内容 截取的是template模块
      editConfigModel: false,  // 编辑组件配置文件信息的模态弹窗
      labelPosition: 'right',
      configForm: {
        namespace: '',
      },
      configRules: {
        namespace: { required: true, message: '请填写组件命名空间', trigger: 'blur' }
      },
      currentComponent: {}
    };
  },

  mounted () {
    let query = URL.parse(document.URL, true).query;
    this.debugModel = query && query.debug && query.debug == '790118' ? true : false;  // 暗号对上 进入debug模式
    this.examples = ScanExamples();
    this.unusedComponents = ScanExamples();
    this.VueExamples = VueExamples();
    this.clientHeight = document.documentElement.clientHeight - 80;
    try {
      if (SITE_NAME) { // 站点名字
        this.siteName = SITE_NAME;
      }
    } catch (error) {
      console.log(error);
    }
    this.queryLists(); // 页面一加载 查询列表
  },

  methods: {
    showConfig (com) { // 显示当前组件的配置文件 支持编辑
      this.currentComponent = this.examples[com];
      this.configForm.namespace = this.currentComponent.name;
      this.editConfigModel = true;
    },
    confirmConfig (configForm) {  // 确定修改组件配置信息
      this.$refs[configForm].validate(valid => {
        if (valid) {
          $_$[this.configForm.namespace] = this.currentComponent.prod;
          this.editConfigModel = false;
          if (this.code.indexOf('namespace') === -1) { // 有命名空间就不再重复添加
            this.code = this.code.replace('<' + this.currentComponent.name, '<' + this.currentComponent.name + ' namespace="' + this.currentComponent.name + '"');  // ？？？ 这样的话namespace相当于还是不能外部编辑 只能代码编写
          }
          this.saveCode(false);
        } else {
          return false;
        }
      });
    },
    toggleListType (tab, event) { // 切换显示列表：页面列表、样式列表、图片列表
      this.activeType = tab && tab.name ? tab.name : this.activeType;
      this.showItem = 'review';  // 每次切换列表的时候都要选中预览操作 因为并不是所有的列表下的文件都有编程操作
      this.code = ''; // 每次切换列表的时候都要置空codemirror的值 理由同上
      this.queryLists();
    },
    toRightModule (file, item) {  // 点击文件名操作：控制中间区域的显示内容 首先判断当前处于何种操作
      this.activeFile = file;
      this.showItem = item ? item : this.showItem;
      this.toggleOperation(this.showItem);
      this.usedComponents = {};
    },
    toggleOperation (item) { // 切换中间区域的操作: 预览、编程、替换、发布
      if (item === 'public') { //  发布操作
        let loadingTag = this.$loading({ lock: true, spinner: "el-icon-loading", text: '加载中...' }); // loading
        Get(this.configUrl + 'project/release?projectName=' + this.siteName).then((res) => {
          loadingTag.close();
          if (res.data && res.data.success) {
            this.$message({
              type: "success",
              message: "发布成功"
            });
          } else {
            this.$message({
              type: "info",
              message: "发布失败，请稍后重试"
            });
          }

        })
        return false;
      }
      if (item === 'view') { //  在线查看
        window.open('./' + this.activeFile, '_blank'); // 服务器端正常跳转
        return false;
      }
      this.showItem = item;
      this.noData = this.activeFile ? false : true;  // 中间预览区要兼容没有数据的情况
      if (!this.noData) {  // 有数据才执行
        this.reviewContext = this.configUrl + 'files?fileName=' + this.activeFile + '&projectName=' + this.siteName;
        Get(this.configUrl + 'files/edit?fileName=' + this.activeFile + '&projectName=' + this.siteName).then((res) => {
          var datas = res.data;
          if (datas.success && datas.content) {
            this.code = datas.content;
            /* 扫描已用组件标签 先用正则匹配 再用字符串方法筛出标签名 */
            let bodyContent = datas.content.indexOf('<body') !== -1 ? datas.content.substring(datas.content.indexOf('<body'), datas.content.indexOf('</body>')) : '';
            var uiComponent = bodyContent.match(/<ui_.*?>(.*?)<\/ui_.*?>/g) ? bodyContent.match(/<ui_.*?>(.*?)<\/ui_.*?>/g) : [];
            var uiComArray = [];  // ui组件列表
            for (var i = 0; i < uiComponent.length; i++) {
              uiComArray.push(uiComponent[i].substring(uiComponent[i].indexOf('</'), uiComponent[i].length).replace('</', '').replace('>', ''));
            }
            var workComponent = bodyContent.match(/<work_.*?>(.*?)<\/work_.*?>/g) ? bodyContent.match(/<work_.*?>(.*?)<\/work_.*?>/g) : [];
            var workComArray = []; // work组件列表
            for (var j = 0; j < workComponent.length; j++) {
              workComArray.push(workComponent[j].substring(workComponent[j].indexOf('</'), workComponent[j].length).replace('</', '').replace('>', ''));
            }
            let exampleArray = uiComArray.concat(workComArray);  // 将两个数组拼成一个
            for (var k = 0; k < exampleArray.length; k++) {
              this.usedComponents[exampleArray[k]] = this.examples[exampleArray[k]];
              delete this.unusedComponents[exampleArray[k]]
            }
            this.$forceUpdate();
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
        Delete(this.configUrl + 'files?fileName=' + this.activeFile + '&projectName=' + this.siteName).then((res) => {
          if (res.data.success) {
            this.queryLists();
            this.$message({
              type: "success",
              message: "文件删除成功"
            });
          } else {
            this.$message({
              type: "info",
              message: "文件删除失败"
            });
          }
        })
      });
    },
    saveCode (status) { // 保存修改
      var data = {
        fileName: this.activeFile,
        fileContent: this.code,
      };
      Post(this.configUrl + 'files/edit?fileName=' + data.fileName + '&fileContent=' + encodeURIComponent(data.fileContent) + '&projectName=' + this.siteName).then((res) => {
        if (res.data.success) {
          if (status == false) {  // 配置组件的时候是隐形进行编辑文件的操作 所以不需要提示操作成功
            return false;
          }
          this.$message({
            type: "success",
            message: "操作成功"
          });
        } else {
          this.$message({
            type: "info",
            message: "操作失败，请稍后重试"
          });
        }
      })
    },
    toggleView () { // 切换视图
      window.open(this.reviewContext, '_blank');
    },
    upLoadUrl () {  // 上传地址
      return (
        this.configUrl + 'files?projectName=' + this.siteName
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
    upLoadingFailed () {  // 上传失败
      this.loading.close();
      this.$message({
        type: "info",
        message: "文件上传失败，请重试"
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
    importUrl () {   // 导入地址
      return (
        this.configUrl + 'project/import?projectName=' + this.siteName
      );
    },
    importProgress () {  // 导入过程
      this.loading = this.$loading({
        lock: true,
        text: "正在导入...",
        spinner: "el-icon-loading",
      });
    },
    importSuccess (res, file) { // 导入成功
      this.loading.close();
      if (res.success) {
        this.$message({
          type: "success",
          message: "文件导入成功"
        });
        this.toggleListType();
        this.queryLists();
      } else {
        this.$message({
          type: "info",
          message: "文件导入失败，请重试"
        });
      }
    },
    /* importFailed (err) {  // 导入失败
      this.loading.close();
      this.$message({
        type: "info",
        message: "文件导入失败，请重试"
      });
    }, */
    beforeImport (file) {  // 导入前要校验格式
      let typeMatch = false;
      let errorMsg = '请上传zip格式的压缩文件';  // 只支持zip格式的压缩文件
      typeMatch = file.type === 'application/x-zip-compressed' ? true : false;
      if (!typeMatch) {
        this.$message.error(errorMsg);
      }
      return typeMatch;
    },
    downloadFile () {  // 导出
      Get(this.configUrl + 'project/export?projectName=' + this.siteName).then((res) => {
        if (res.status === 200) {
          window.location.href = this.configUrl + 'project/export?projectName=' + this.siteName;
        }
      })
    },
    queryLists () {  // 查询左侧列表
      Get(this.configUrl + 'files/list?type=' + this.activeType + '&projectName=' + this.siteName).then(res => {
        let datas = res.data;
        if (datas && datas.list) {
          this.activeLists = datas.list;
          this.activeFile = datas.list.length > 0 ? datas.list[0] : '';
          this.noData = datas.list.length > 0 ? false : true;
          this.toRightModule(this.activeFile, this.showItem);
        }
      })
    },
    importResource () {  // 开发者模式 导入资源
      return (
        this.configUrl + 'project/import/assets'
      )
    },
    importResourceSuccess (res, file) { // 导入资源成功
      this.loading.close();
      if (res.status === 200) {
        toggleListType(this.activeType);
        this.$message({
          type: "success",
          message: "资源导入成功"
        });
      } else {
        this.$message({
          type: "info",
          message: "资源导入失败，请重试"
        });
      }
    },
    showComponentDetail (com) {  // 展示组件详情
      this.showItem = 'component';
      this.noData = false;
      this.activeFile = com.name;
      this.showComponents = this.examples[com.name];
      this.showComponents.templateCon = this.VueExamples[com.name];
      this.imgUrl = require('../ComponentsLib/screenshots/' + com.name + '.jpg');
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
  line-height: 39px;
}

.components_pagemanagement .mainContent .reviewArea .reviewAreaDiv {
  display: inline-block;
  margin-left: 20px;
  height: 30px;
  line-height: 30px;
  width: 100px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  color: #7f7f7f;
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
  width: 66px;
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
  height: 50%;
}

.components_pagemanagement .mainFooter .contentCon {
  height: calc(100% - 39px);
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

.components_pagemanagement .mainFooter .contentCon .jsonInfo {
  width: 100%;
  height: 200px;
  overflow-y: scroll;
  border: none;
  resize: none;
}

.components_pagemanagement .mainFooter .contentCon .component {
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 10px;
  box-sizing: border-box;
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
  padding: 0px 20px;
}

.components_pagemanagement .mainFooter .listNav .el-tabs__content {
  height: 100%;
}
.components_pagemanagement .mainFooter .listNav .el-tab-pane {
  height: 100%;
}

.components_pagemanagement .listCon {
  height: 100%;
  overflow-y: scroll;
}

.components_pagemanagement .listCon .listWrapper .listConUl {
  padding: 0px 20px 40px 20px;
}

.components_pagemanagement .onFileName {
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

.components_pagemanagement .conponentsCon {
  height: calc(100% - 40px);
  overflow-y: auto;
}

.components_pagemanagement .usedComUl {
  margin: 0px;
  padding: 10px;
}

.components_pagemanagement .usedComUl li {
  font-size: 14px;
  list-style-type: none;
  padding: 6px 0px;
  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
  cursor: pointer;
}
</style>