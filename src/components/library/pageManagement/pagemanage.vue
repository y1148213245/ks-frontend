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
                  <span class="operation" @click="createNew()"><i class="el-icon-plus"></i><span>新建</span></span>
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
              <span>导入公共组件资源</span>
            </el-upload>
          </div>
          <div class="reviewAreaDiv">
            <el-upload
              class="upload-demo"
              :action="importProjectResource()"
              name="file"
              :show-file-list="false"
              :on-progress="importProgress"
              :on-success="importResourceSuccess"
              :before-upload="beforeImport">
              <i class="el-icon-upload"></i>
              <span>导入项目组件资源</span>
            </el-upload>
          </div>
          <div class="reviewAreaDiv" @click="selectSkin()">
            <span>选为皮肤</span>
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
           <div class="title">
             <span>已用组件列表</span>
             <el-button size="mini" style="float: right; margin-top: 6px;" @click="globalConfig()">全局配置</el-button>
           </div>
           <div class="conponentsCon">
             <ul class="usedComUl">
               <li v-if="JSON.stringify(usedComponents) !== '{}' && com && com.name" v-for="(com, vkey, index) in usedComponents" :key="index" :title="com.title + '（' + com.name + '）'" :class="{onFileName: activeFile == com.name}">
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
               <li v-if="JSON.stringify(unusedComponents) !== '{}' && com && com.name" v-for="(com, vkey, index) in unusedComponents" :key="index" :title="com.title + '（' + com.name + '）'" :class="{onFileName: activeFile == com.name}">
                 <span v-text="com.title + '（' + com.name + '）'" @click="showComponentDetail(com)"></span>
               </li>
               <li v-if="JSON.stringify(unusedComponents) === '{}'">暂无未用组件</li>
             </ul>
           </div>
         </div>
       </div>
     </div>
     <!-- 修改组件配置文件的模态弹窗 -->
     <el-dialog title="编辑组件配置信息" v-if="editConfigModel" :visible.sync="editConfigModel">
      <div>
        <textarea id="prodConfig" v-html="currentComponent" style="width: 100%; min-height: 200px;"></textarea>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="editConfigModel = false">取 消</el-button>
        <el-button type="primary" @click="confirmConfig()">确 定</el-button>
      </span>
      
     </el-dialog>

     <!-- 修改全局配置文件， 即config/index.js的模态弹窗 -->
     <el-dialog title="编辑全局配置信息" v-if="editGlobalConfigModel" :visible.sync="editGlobalConfigModel">
      <div>
        <textarea id="globalConfig" v-html="CONFIG" style="width: 100%; min-height: 200px;"></textarea>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="editGlobalConfigModel = false">取 消</el-button>
        <el-button type="primary" @click="confirmGlobalConfig()">确 定</el-button>
      </span>
      
     </el-dialog>

     <!-- 新建文件的模态弹窗 -->
     <el-dialog title="新建文件" :visible.sync="createNewModel">
      <div>
        
        <span>文件名：</span>
        <el-input v-model="newFileName" placeholder="请输入文件名称" style="display: inline-block; width: 160px;"></el-input>
        <span>.html</span>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="createNewModel = false">取 消</el-button>
        <el-button type="primary" @click="confirmCreateNew()">确 定</el-button>
      </span>
      
     </el-dialog>

     <!-- 选为皮肤的模态弹窗 -->
     <el-dialog title="选为皮肤" :visible.sync="selectSkinModel">
      <el-form :model="skinForm" :rules="ruleForm" ref="skinForm">
        <el-form-item label="皮肤名称" prop="skinName">
          <el-input v-model="skinForm.skinName" placeholder="请输入皮肤描述信息" style="width: 50%;"></el-input>
        </el-form-item>
        <el-form-item label="皮肤描述" prop="skinDescription">
          <el-input v-model="skinForm.skinDescription" placeholder="请输入皮肤描述信息" style="width: 50%;"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelSelectSkin('skinForm')">取 消</el-button>
        <el-button type="primary" @click="confirmSelectSkin('skinForm')">确 定</el-button>
      </span>
      
     </el-dialog>
   </div>
 </template>
 
 <script>
import ScanExamples from "@common/scans/ScanExamples";
import VueExamples from "@common/scans/ScanVues";
/* import ProdExamples from "@common/scans/ScanProds"; */
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
      handleLists: [{      // 中间操作对象： 预览、编程、替换、发布、删除
        name: '预览',
        type: 'review'
      }, {
        name: '编程',
        type: 'coding'
      }, {
        name: '发布',
        type: 'public'
      }, {
        name: '在线查看',
        type: 'view'
      }],
      // configUrl: 'http://172.19.57.153:8085/spc/api/',  // 请求url
      // configUrl: 'http://172.19.36.57:8084/spc/api/',  //  ff本地ip
      configUrl: '',
      reviewContext: '',  // iframe里面的内容 呈现源码
      noData: true,
      usedComponents: {},
      unusedComponents: {},
      debugModel: false,  // debug模式 暗号 19790118
      imgUrl: "",         // 组件截图
      showComponents: null,   // 中间区域当前展示的组件
      siteName: '',  // 站点名 用于区分不同的站点
      VueExamples: {},           // 扫描出来的vue文件的全部内容 截取的是template模块
      editConfigModel: false,  // 编辑组件配置文件信息的模态弹窗
      currentComponent: {},  // 当前选中组件 用于支撑显示模态弹窗里的配置内容
      currentExamples: {},   // 记录当前选中的组件
      usedComTagArr: [], // 已用组件数据集合
      editGlobalConfigModel: false,  // 编辑全局配置文件信息的模态弹窗
      CONFIG: null, // 全局配置对象
      createNewModel: false,  // 新建文件的模态弹窗
      newFileName: '', // 新建文件名称
      selectSkinModel: false,  // 选为皮肤模态弹窗
      skinForm: {
        skinName: "", // 皮肤名称
        skinDescription: "", // 皮肤描述信息
      },
      ruleForm: {
        skinName: [
          { required: true, message: '请输入皮肤名称', trigger: 'blur' }
        ],
        skinDescription: [
          { required: true, message: '请输入皮肤描述信息', trigger: 'blur' }
        ],
      }
    };
  },

  mounted () {
    this.configUrl = CONFIG.PAGE_MANAGEMENT_URL;
    let query = URL.parse(document.URL, true).query;
    this.debugModel = query && query.debug && query.debug == 'zhixiang323' ? true : false;  // 暗号对上 进入debug模式
    this.examples = ScanExamples();
    this.unusedComponents = ScanExamples();
    this.VueExamples = VueExamples();
    /* this.ProdExamples = ProdExamples(); */
    this.clientHeight = document.documentElement.clientHeight - 80;
    try {
      if ($_$.SITE_NAME) { // 站点名字
        this.siteName = $_$.SITE_NAME;
      }
    } catch (error) {
      console.log(error);
    }
    this.queryLists(); // 页面一加载 查询列表
  },

  methods: {
    createNew () {  // 新建文件
      this.createNewModel = true;
    },
    confirmCreateNew () {  // 确定新建文件
      Post(this.configUrl + 'files/add?projectName=' + this.siteName + '&fileName=' + this.newFileName).then((res) => {
        if (res.data && res.data.success) {
          this.$message({
            type: "success",
            message: "添加成功"
          });
        } else {
          var errorMsg = res.data && res.data.reason ? res.data.reason : '操作失败，请稍后重试';
          this.$message({
            type: "info",
            message: errorMsg
          });
        }
      })
      this.createNewModel = false;
      this.newFileName = '';
      this.queryLists();
    },
    showConfig (com) { // 显示当前组件的配置文件 支持编辑
      this.currentExamples = this.examples[com];
      /* TODO: 项目组件没有修改配置的入口  */
      /* FIXME: 获取组件配置方式
        获取组件配置优先级： config/index.js $_$变量  >>  prod/xxx.js  >>  js/example.js
        $_$: 修改之后直接写进$_$变量上 初次编辑组件配置 就新增对象 再次编辑 就修改  拿导航组件举例 新增对象的结构如下  
              namespace: {
                navigation: {
                  navifation_01：{ ... }
                  }
              }
        prod/xxx.js：项目实际跑的配置文件【取消】
        js/example.js：样例配置文件
      */
      this.currentComponent = {};   // 当前选中的组件
      this.editConfigModel = true;
      var configCon = '';
      for (var i = 0, len = this.usedComTagArr.length; i < len; i++) {
        if (this.usedComTagArr[i].indexOf(this.examples[com].name) !== -1) {
          configCon = this.usedComTagArr[i].substring(this.usedComTagArr[i].indexOf('"', this.usedComTagArr[i].indexOf('"', this.usedComTagArr[i].indexOf('namespace'))) + 1, this.usedComTagArr[i].indexOf('"', this.usedComTagArr[i].indexOf('"', this.usedComTagArr[i].indexOf('namespace')) + 1));
          break;
        }
      }
      if (this.examples[com].childComponents && this.examples[com].childComponents.length > 0) { // 有子组件的复合组件
        for (var i = 0, len = this.examples[com].childComponents.length; i < len; i++) {
          var componentName = this.examples[com].childComponents[i];
          this.dealCurComponent(configCon, componentName);
        }
      } else {  // 没有子组件的简单组件
        this.dealCurComponent(configCon, com);
      }

    },
    dealCurComponent (configCon, com) {
      var curConfig = {};
      var itemConfig = "";
      var subItemConfig = "";
      for (let item in this.examples[com].prod) {  // 遍历找出两层对象结构如：classification: { classification_01: { ... }}
        itemConfig = item;  // 第一层key 如: classification
        for (let subItem in this.examples[com].prod[item]) {
          subItemConfig = subItem; // 第二层key 如：classification_01
        }
      }

      curConfig[itemConfig] = curConfig[itemConfig] ? curConfig[itemConfig] : {};
      if ($_$[configCon] && $_$[configCon][itemConfig] && $_$[configCon][itemConfig][subItemConfig]) {  // config/index.js $_$变量
        console.log('config/index.js $_$变量');
        curConfig[itemConfig][subItemConfig] = $_$[configCon][itemConfig][subItemConfig];
        console.log(curConfig);
      } /* else if (this.ProdExamples[configCon] && this.ProdExamples[configCon][itemConfig] && this.ProdExamples[configCon][itemConfig][subItemConfig]) { // prod/xxx.js
        curConfig[itemConfig][subItemConfig] = this.ProdExamples[configCon][itemConfig][subItemConfig];
      } */ else { // js/example.js
        console.log('js/example.js');
        curConfig[itemConfig][subItemConfig] = this.examples[com].prod[itemConfig][subItemConfig];
        console.log(curConfig);
      }

      for (let key in this.examples[com].prod[itemConfig][subItemConfig]) {  // 遍历处理组件升级问题
        if (!curConfig[itemConfig][subItemConfig].hasOwnProperty(key)) {  // 组件升级新增属性
          // console.log('组件升级新增属性');
          curConfig[itemConfig][subItemConfig][key] = this.examples[com].prod[itemConfig][subItemConfig][key];
        } else { // 组件原有属性对象里新增属性
          if (typeof (curConfig[itemConfig][subItemConfig][key]) === "object") {
            // console.log('组件原有属性对象里新增属性');
            for (let subKey in this.examples[com].prod[itemConfig][subItemConfig][key]) {
              if (!curConfig[itemConfig][subItemConfig][key].hasOwnProperty(subKey)) {
                curConfig[itemConfig][subItemConfig][key][subKey] = this.examples[com].prod[itemConfig][subItemConfig][key][subKey];
              }
            }
          }

        }
      }

      this.currentComponent[itemConfig] = this.currentComponent[itemConfig] ? this.currentComponent[itemConfig] : {};
      this.currentComponent[itemConfig][subItemConfig] = curConfig[itemConfig][subItemConfig];
    },
    globalConfig () {  // 显示当前项目的全局配置
      this.editGlobalConfigModel = true;
      this.CONFIG = JSON.parse(JSON.stringify(CONFIG));
    },
    confirmConfig () {  // 确定修改组件配置信息
      var key = "";
      var value = {};
      for (var i = 0, len = this.usedComTagArr.length; i < len; i++) {
        if (this.usedComTagArr[i].indexOf('<' + this.currentExamples.name) !== -1) { // 修改的当前组件
          key = this.usedComTagArr[i].substring(this.usedComTagArr[i].indexOf('"', this.usedComTagArr[i].indexOf('"', this.usedComTagArr[i].indexOf('namespace'))) + 1, this.usedComTagArr[i].indexOf('"', this.usedComTagArr[i].indexOf('"', this.usedComTagArr[i].indexOf('namespace')) + 1));
          value = document.getElementById('prodConfig').value;
          break;
        }
      }
      let params = {
        projectName: this.siteName,
        key: '$_$.' + key,
        value: JSON.parse(value)
      };
      Post(this.configUrl + 'project/config', params).then((res) => {
        if (res.data && res.data.success) {
          this.$message({
            type: "success",
            message: "修改成功"
          });
        } else {
          this.$message({
            type: "info",
            message: "修改失败，请稍后重试"
          });
        }
        this.editConfigModel = false;
      })
    },
    confirmGlobalConfig () {  // 确定修改全局配置文件信息
      var key = 'CONFIG';
      var value = document.getElementById('globalConfig').value;
      this.configUrl = JSON.parse(value).PAGE_MANAGEMENT_URL;
      let params = {
        projectName: this.siteName,
        key: key,
        value: JSON.parse(value)
      }
      Post(this.configUrl + 'project/config', params).then((res) => {
        if (res.data && res.data.success) {
          this.$message({
            type: "success",
            message: "修改成功"
          });
        } else {
          this.$message({
            type: "info",
            message: "修改失败，请稍后重试"
          });
        }

      })
      this.editGlobalConfigModel = false;
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
        this.reviewContext = this.activeType === 'html' ? (this.configUrl + '../' + this.siteName + '/pages/' + this.activeFile) : (this.configUrl + 'files?fileName=' + this.activeFile + '&projectName=' + this.siteName);
        Get(this.configUrl + 'files/edit?fileName=' + this.activeFile + '&projectName=' + this.siteName).then((res) => {
          var datas = res.data;
          if (datas.success && datas.content) {
            this.usedComponents = {};
            this.code = datas.content;
            /* 扫描已用组件标签 先用正则匹配 再用字符串方法筛出标签名 */
            // let bodyContent = datas.content.indexOf('<body') !== -1 ? datas.content.substring(datas.content.indexOf('<body'), datas.content.indexOf('</body>')) : '';
            let bodyContent = datas.content;
            var uiComponent = bodyContent.match(/<ui_.*?>([\s\S]*?.*?[\s\S]*?)<\/ui_.*?>/g) ? bodyContent.match(/<ui_.*?>([\s\S]*?.*?[\s\S]*?)<\/ui_.*?>/g) : [];
            var uiComArray = [];  // ui组件列表
            for (var i = 0; i < uiComponent.length; i++) {
              uiComArray.push(uiComponent[i].substring(uiComponent[i].indexOf('</'), uiComponent[i].length).replace('</', '').replace('>', ''));
            }
            var workComponent = bodyContent.match(/<work_.*?>([\s\S]*?.*?[\s\S]*?)<\/work_.*?>/g) ? bodyContent.match(/<work_.*?>([\s\S]*?.*?[\s\S]*?)<\/work_.*?>/g) : [];
            var workComArray = []; // work组件列表
            for (var j = 0; j < workComponent.length; j++) {
              workComArray.push(workComponent[j].substring(workComponent[j].indexOf('</'), workComponent[j].length).replace('</', '').replace('>', ''));
            }
            let exampleArray = uiComArray.concat(workComArray);  // 将两个数组拼成一个
            this.usedComTagArr = [];
            for (var k = 0, len = exampleArray.length; k < len; k++) {
              this.usedComponents[exampleArray[k]] = this.examples[exampleArray[k]];
              delete this.unusedComponents[exampleArray[k]];
              /* 强制添加不可更改的命名空间 namespace 格式只能是 namespace = "pagename" 或 namespace="pagename"  */
              var con = this.code.substring(this.code.indexOf('<' + exampleArray[k]), this.code.indexOf('</' + exampleArray[k]));
              if (con.indexOf("namespace") === -1) { // 没有命名空间的组件 直接添加 有命名空间不做修改
                this.code = this.code.replace('<' + exampleArray[k], '<' + exampleArray[k] + ' namespace="' + this.activeFile.substring(0, this.activeFile.indexOf('.html')) + '"');
              }
              con = this.code.substring(this.code.indexOf('<' + exampleArray[k]), this.code.indexOf('</' + exampleArray[k]));
              this.usedComTagArr.push(con);
            }
            this.$forceUpdate();
          }
        })
      }
      // console.log(this.usedComponents); // 项目组件undefined问题 导致报错：Cannot read property 'name' of undefined"
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

      let params = {
        fileName: data.fileName,
        fileContent: encodeURIComponent(data.fileContent),
        projectName: this.siteName
      }
      Post(this.configUrl + 'files/edit', params).then((res) => {
        if (res.data.success) {
          this.toggleOperation(this.showItem);
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
    importResource () {  // 开发者模式 导入公共组件资源
      return (
        this.configUrl + 'project/import/vue/common'
      )
    },
    importProjectResource () {  // 开发者模式 导入项目组件资源
      return (
        this.configUrl + 'project/import/vue/project?projectName=' + this.siteName
      )
    },
    selectSkin () {  // 开发者模式 选为皮肤
      this.selectSkinModel = true;
    },
    cancelSelectSkin (formName) {  // 取消选为皮肤的操作
      this.$refs[formName].resetFields();
    },
    confirmSelectSkin (formName) { // 确定选为皮肤的操作
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let loading = this.$loading({ fullscreen: true });
          this.selectSkinModel = false;
          Get(this.configUrl + 'project/selectAsSkin?projectName=' + this.siteName + '&name=' + this.skinForm.skinName + '&describe=' + this.skinForm.skinDescription).then((res) => {
            loading.close();
            if (res.data && res.data.success) {
              this.$message({
                type: "success",
                message: "操作成功"
              });
            } else {
              var errorMsg = res.data && res.data.reason ? res.data.reason : '操作失败，请稍后重试';
              this.$message({
                type: "info",
                message: errorMsg
              });
            }
          })
        } else {
          return false;
        }
      });
    },
    importResourceSuccess (res, file) {  // 导入资源成功
      this.loading.close();
      if (res.success) {
        this.toggleListType(this.activeType);
        this.$message({
          type: "success",
          message: "资源导入成功"
        });
      } else {
        this.$message({
          type: "error",
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
  position: absolute;
  right: 0px;
  left: 0px;
  background-color: #fff;
  z-index: 999;
}

.components_pagemanagement .leftList .listNav .listWrapper {
  margin-top: 46px;
}

.components_pagemanagement .leftList .listNav .operation {
  display: inline-block;
  width: 18%;
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
  padding: 0px 10px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  color: #7f7f7f;
  cursor: pointer;
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
  box-sizing: border-box;
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
