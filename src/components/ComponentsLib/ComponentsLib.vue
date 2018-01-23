<template>
	<div class="common_components_lib">
		<!-- example 请参考 src/components/UI/list_pic/02_pic_list_download/js/example.js -->
		<!-- <img src="./screenshots/ui_list_pic_02.jpg" style="max-width: 200px; max-height: 200px;"/> -->
		<!-- <hr> -->
		<!-- {{this.examples}} -->
		<div class="titleHead">
			<el-input class="searchCom" v-model="searchText" placeholder="搜索组件"></el-input>
			<div class="checkBtn">
				<div class="title">资源类别</div>
				<el-checkbox-group v-model="checkedResourceType">
					<!-- <el-checkbox v-for="(resource, index) in resourceTypeObj" :key="index" :label="resource.type" @change="filterDatas()">{{resource.name}}</el-checkbox> -->
					<el-checkbox v-for="(resource, index) in resourceTypeObj" :key="index" :label="resource.type" @change="selectResourceType()">{{resource.name}}</el-checkbox>
				</el-checkbox-group>
			</div>
			<div class="checkBtn">
				<div class="title">页面类别</div>
				<el-checkbox-group v-model="checkedPageType">
					<!-- <el-checkbox v-for="(page, index) in pageTypeObj" :key="index" :label="page.type" @change="filterDatas()">{{page.name}}</el-checkbox> -->
					<el-checkbox v-for="(page, index) in pageTypeObj" :key="index" :label="page.type" @change="selectPageType()">{{page.name}}</el-checkbox>
				</el-checkbox-group>
			</div>
		</div>
		
		<el-row class="tac">
			<el-col :span="7" :style="{height: clientHeight + 'px'}" class="comList">
				<el-menu default-active="0"
					class="el-menu-vertical-demo">
					<el-menu-item v-for="(com,vkey,index) in examples" :key="vkey" :index="String(index)" @click="toggleShowCom(com)">
						<i class="el-icon-menu"></i>
						<span slot="title" v-text="com.title + '（' + com.name + '）'"></span>
					</el-menu-item>
				</el-menu>
			</el-col>

			<el-col :span="17" class="comInfo">
				<img :src="imgUrl" alt="暂无图片">
				<div>组件标签名： <span v-text="this.showComponents && this.showComponents.name"></span></div>
				<div>组件描述：{{this.showComponents && this.showComponents.description}}</div>
				<div>dev 配置：</div>
				<textarea class="jsonInfo" v-html="this.showComponents && this.showComponents.dev"></textarea>
				<div>prod 配置：</div>
				<textarea class="jsonInfo" v-html="this.showComponents && this.showComponents.prod"></textarea>
			</el-col>
</el-row>
	</div>
</template>
<script type="text/ecmascript-6">
import ScanExamples from "@common/scans/ScanExamples";
import { resourceTypeObj, pageTypeObj } from "./js/config.js";

export default {
	name: "common_components_lib",
	reused: true,
	data: function () {
		return {
			examples: {},              // 通过js扫描得到的所有组件map对象
			tempExamples: {},          // 备份examples
			showComponents: null,      // 右侧当前展示的组件
			imgUrl: "",                // 组件截图
			clientHeight: 0, 					 // 容器高度
			searchText: "",            // 搜索内容
			resourceTypeObj: [],       // 所有资源类型
			pageTypeObj: [],           // 所有页面类型
			checkedResourceType: [],   // 已选资源类型
			checkedPageType: [],       // 已选页面类型
			oldExamples: {},
		}
	},
	mounted: function () {
		this.resourceTypeObj = resourceTypeObj;
		this.pageTypeObj = pageTypeObj;
		this.clientHeight = document.documentElement.clientHeight;
		this.examples = ScanExamples();
		this.tempExamples = ScanExamples();
		this.loadComponent(this.examples);
	},
	methods: {
		toggleShowCom (com) {
			this.showComponents = this.examples[com.name];
			this.loadImg(this.showComponents);
		},
		loadComponent (examples) {
			for (var key in examples) {
				if (!this.showComponents) {
					this.showComponents = examples[key];
					this.loadImg(this.showComponents);
					break;
				}
			}
		},
		loadImg (com) {
			var hasImg = true;  // 是否有图片的状态值 兼容有些没有图片的组件
			try {
				require('./screenshots/' + com.name + '.jpg');
			} catch (error) {
				hasImg = false;
			}
			this.imgUrl = hasImg ? require('./screenshots/' + com.name + '.jpg') : '';
		},
		calFirstFiltersMap (checkType, type, examples) {  // 第一层过滤数据
			var tempExamples = {};
			for (var i = 0; i < this[checkType].length; i++) {
				for (var key in examples) {
					if (examples[key][type] && examples[key][type].indexOf(this[checkType][i]) !== -1) {
						if (tempExamples[examples[key].name] === undefined) {
							tempExamples[examples[key].name] = examples[key];
						}
					}
				}
			}
			this.showComponents = null;
			this.loadComponent(tempExamples);
			return tempExamples;
		},
		calSecondFiltersMap (checkType, type, examples) {  // 第二层过滤数据
			var curEx = JSON.parse(JSON.stringify(examples));
			var tempExamples = {};
			for (var i = 0; i < this[checkType].length; i++) {
				for (var key in curEx) {
					if (curEx[key][type] && curEx[key][type].indexOf(this[checkType][i]) === -1) {
						delete curEx[key];
					}
					tempExamples = curEx;
				}
			}
			this.showComponents = null;
			this.loadComponent(tempExamples);
			return tempExamples;
		},
		endFiltersMap (checkType, type, examples) { // 终极过滤
			var tempExamples = JSON.parse(JSON.stringify(examples));
			for (var key in tempExamples) {
				if (tempExamples[key][type] == undefined) {  // 兼容可能没有资源类型或者页面类型的组件 没有就剔除
					delete tempExamples[key];
				} else if (tempExamples[key][type]) {
					for (var i = 0; i < this[checkType].length; i++) {
						if (tempExamples[key][type].indexOf(this[checkType][i]) === -1) {
							delete tempExamples[key];
						}
					}
				}
			}
			return tempExamples;
		},
		selectResourceType () {  // 资源类型筛选 四种情况
			if (this.checkedResourceType.length > 0 && this.checkedPageType.length === 0) {// 资源有，页面无
				var tempExamples = this.calFirstFiltersMap('checkedResourceType', 'resourceType', this.tempExamples);
				this.examples = this.calSecondFiltersMap('checkedResourceType', 'resourceType', tempExamples);
			} else if (this.checkedPageType.length === 0 && this.checkedResourceType.length === 0) {// 资源无，页面无
				this.examples = this.tempExamples;
			} else if (this.checkedResourceType.length > 0 && this.checkedPageType.length > 0) { // 资源有，页面有 ?????
				var tempExamples = this.calFirstFiltersMap('checkedPageType', 'pageType', this.examples);
				this.examples = this.calSecondFiltersMap('checkedResourceType', 'resourceType', tempExamples); // 第二层筛选要在第一层过滤出来的数组列表 基础上进行筛选
			} else if (this.checkedResourceType.length === 0 && this.checkedPageType.length > 0) {// 资源无，页面有
				var tempExamples = this.calFirstFiltersMap('checkedPageType', 'pageType', this.tempExamples);
				this.examples = this.calSecondFiltersMap('checkedPageType', 'pageType', tempExamples);
			}
		},
		selectPageType () { // 页面类型筛选 四种情况
			if (this.checkedPageType.length > 0 && this.checkedResourceType.length === 0) {
				var tempExamples = this.calFirstFiltersMap('checkedPageType', 'pageType', this.tempExamples);
				this.examples = this.calSecondFiltersMap('checkedPageType', 'pageType', tempExamples);
			} else if (this.checkedResourceType.length === 0 && this.checkedPageType.length === 0) {
				this.examples = this.tempExamples;
			} else if (this.checkedResourceType.length > 0 && this.checkedPageType.length > 0) { // 资源有，页面有 ?????
				/* var tempExamples = this.calFirstFiltersMap('resourceType', 'resourceType', this.tempExamples);
				this.examples = this.calSecondFiltersMap('checkedPageType', 'pageType', tempExamples); */
				var ex = this.endFiltersMap('checkedResourceType', 'resourceType', this.tempExamples);
				this.examples = this.endFiltersMap('checkedPageType', 'pageType', ex);
				/* var tempExamples = JSON.parse(JSON.stringify(this.tempExamples));
				for (var key in tempExamples) {
					if (tempExamples[key].resourceType == undefined) {
						delete tempExamples[key];
					} else if (tempExamples[key].resourceType) {
						for (var i = 0; i < this.checkedResourceType.length; i++) {
							if (tempExamples[key].resourceType.indexOf(this.checkedResourceType[i]) === -1) {
								delete tempExamples[key];
							}
						}
					}
				}
				for (var keys in tempExamples) {
					if (tempExamples[keys].pageType == undefined) {
						delete tempExamples[keys];
					} else if (tempExamples[keys].pageType) {
						for (var j = 0; j < this.checkedPageType.length; j++) {
							if (tempExamples[keys].pageType.indexOf(this.checkedPageType[j]) === -1) {
								delete tempExamples[keys];
							}
						}
					}
				}
				console.log(tempExamples);
				this.examples = tempExamples; */
			} else if (this.checkedResourceType.length > 0 && this.checkedPageType.length === 0) {
				var tempExamples = this.calFirstFiltersMap('checkedResourceType', 'resourceType', this.tempExamples);
				this.examples = this.calSecondFiltersMap('checkedResourceType', 'resourceType', tempExamples);
			}
		},
		filterDatas () {
			//examples 
			//tempExamples
			let datas = this.tempExamples;				//组件map
			let loadedDatas = {};
			let resourceTypeArr = this.checkedResourceType;//当前选中资源 
			let pageTypeArr = this.checkedPageType;//当前选中资源
			
			if (resourceTypeArr.length > 0 || pageTypeArr.length > 0) {
				this.examples = []; //有筛选条件了，清空显示数组

				for (let key in datas) {
					let component = datas[key];
					let isResultArr = [false, false];
					let isHave = false;

					//筛选组件
					if (component.resourceType) {
						//判断是否有选中的资源
						if (resourceTypeArr.length == 0) {
							isResultArr[0] = true;
						} else {
							for (let index = 0, len = resourceTypeArr.length; index < len; index++) {
								const type = resourceTypeArr[index]; //当前选中的每个类型（字符串）

								if (component.resourceType.indexOf(type) === -1) {//判断是否为不存在
									isResultArr[0] = false;
									break
								}else{
									isResultArr[0] = true;
								}
							}
						}

						//判断是否有选中的页面
						if (pageTypeArr.length == 0) {
							isResultArr[1] = true;
						} else {
							for (let index = 0, len = pageTypeArr.length; index < len; index++) {
								const type = pageTypeArr[index]; //当前选中的每个类型（字符串）

								if (component.pageType.indexOf(type) === -1) {//判断是否为不存在
									isResultArr[1] = false;
									break
								}else{
									isResultArr[1] = true;
								}
							}
						}

					}

					//几次的筛选结果
					for (let index = 0, len = isResultArr.length; index < len; index++) {
						if (isResultArr[index]) {
							isHave = true
						} else {
							isHave = false;
							break;
						}
					}

					if (isHave) {
						loadedDatas[key] = component;
					}
				}

				this.examples = loadedDatas;
			} else {
				this.examples = datas;
			}
		}
	},
	watch: {
		/* examples: function (newValue, oldValue) {
			if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
				this.oldExamples = oldValue;
			}
		},
		checkedPageType: function (newValue, oldValue) {
			if (newValue.length < oldValue.length) { // 减条件
				this.selectPageType(this.oldExamples);
			} else {                                 // 加条件
				this.selectPageType(this.examples);
			}
		} */
	}
};  
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.common_components_lib .titleHead {
  width: 100%;
  overflow: hidden;
  height: 100px;
  width: 100%;
  background-color: #f8f8f8;
  box-shadow: 0 0 10px 2px #ccc;
  padding-left: 50px;
  font-size: 20px;
}

.common_components_lib .titleHead .searchCom {
  width: 300px;
  top: 50%;
  transform: translateY(-50%);
  float: left;
}

.common_components_lib .titleHead .checkBtn {
  width: 35%;
  height: 100%;
  margin-left: 30px;
  float: left;
  padding: 16px 0px;
}

.common_components_lib .titleHead .checkBtn .title {
  font-size: 16px;
  color: #303133;
  margin-bottom: 5px;
}

.common_components_lib .comList::-webkit-scrollbar {
  width: 10px;
}

.common_components_lib .comList::-webkit-scrollbar-thumb {
  background: #d2d2d2;
  background-clip: padding-box;
  border: 3px solid #fff;
  border-radius: 5px;
}

.common_components_lib .comList {
  overflow-y: scroll;
  position: fixed;
  top: 110px;
  bottom: 0;
  left: 0;
}

.comList .el-menu {
  border-right: none;
}

.common_components_lib .comInfo {
  padding: 20px 30px;
  overflow-y: scroll;
  position: fixed;
  top: 110px;
  bottom: 0;
  right: 0;
}

.common_components_lib .jsonInfo {
  width: 100%;
  height: 200px;
  overflow-y: scroll;
  border: none;
}
.common_components_lib textarea {
  resize: none;
}
.common_components_lib .comInfo div {
  margin-top: 10px;
}
</style>
