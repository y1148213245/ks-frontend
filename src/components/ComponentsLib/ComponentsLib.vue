<template>
	<div class="common_components_lib">
		<div class="titleHead">
			<div class="searchContent">
				<el-input class="searchCom" v-model="searchText" placeholder="搜索组件"></el-input>
				<el-button @click.enter="filterDatas()">搜索</el-button>
			</div>
			<div class="checkBtn">
				<div class="title">资源类别</div>
				<el-radio-group v-model="checkedResourceType">
					<div class="checkboxCon" style="display: inline-block; margin-right: 12px; margin-top: 5px;">
						<el-radio label="unlimited" @change="filterDatas()">不限</el-radio>
					</div>
					<div class="checkboxCon" style="display: inline-block; margin-right: 12px; margin-top: 5px;" v-for="(resource, index) in resourceTypeObj" :key="index">
						<el-radio :label="resource.type" @change="filterDatas()">{{resource.name}}</el-radio>
					</div>
				</el-radio-group>
			</div>
			<div class="checkBtn">
				<div class="title">页面类别</div>
				<el-checkbox-group v-model="checkedPageType">
					<div class="checkboxCon" style="display: inline-block; margin-right: 12px;" v-for="(page, index) in pageTypeObj" :key="index">
						<el-checkbox :label="page.type" @change="filterDatas()">{{page.name}}</el-checkbox>
					</div>
					
				</el-checkbox-group>
			</div>
		</div>
		
		<el-row class="tac">
			<el-col :span="7" :style="{height: clientHeight + 'px'}" class="comList">
				<el-menu default-active="0" class="el-menu-vertical-demo">
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
			resourceTypeObj: [],       // 所有资源类别
			pageTypeObj: [],           // 所有页面类别
			checkedResourceType: 'unlimited',   // 已选资源类别 单选 字符串 默认选中不限选项
			checkedPageType: [],       // 已选页面类别 多选 数组
			searchExamples: {},        // 搜索
		}
	},
	mounted: function () {
		this.resourceTypeObj = resourceTypeObj;
		this.pageTypeObj = pageTypeObj;
		this.clientHeight = document.documentElement.clientHeight - 120;
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
			if (JSON.stringify(examples) === '{}') {  // 对象为空：筛选得到空组件列表就不用再遍历渲染了
				this.imgUrl = "";
				return false;
			}
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
		filterDatas () {
			// this.examples  页面左侧渲染的数组列表 随着筛选条件不同会被改变
			// this.tempExamples     最初的数组列表 不变
			let datas = this.tempExamples	// 组件对象
			let loadedDatas = {};
			let resourceTypeArr = this.checkedResourceType;  // 当前选中资源 字符串
			let pageTypeArr = this.checkedPageType;          // 当前选中页面

			if (resourceTypeArr || pageTypeArr.length > 0 || this.searchText !== '') {
				this.examples = []; //有筛选条件了，清空显示数组

				for (let key in datas) {
					let component = datas[key];
					let isResultArr = [false, false, false]; // 三个维度： 资源类别、页面类别、组件名
					let isHave = false;  // 是否全部符合

					//筛选组件
					if (component.resourceType) { //判断是否有选中的资源类别 兼容组件有资源类别属性

						if (!resourceTypeArr  || resourceTypeArr === 'unlimited') {
							isResultArr[0] = true;
						} else {
							if (component.resourceType.indexOf(resourceTypeArr) === -1) { // 判断是否为不存在
								isResultArr[0] = false;
							} else {
								isResultArr[0] = true;
							}
						}
					}

					if (component.pageType) {
						//判断是否有选中的页面
						if (pageTypeArr.length == 0) {
							isResultArr[1] = true;
						} else {
							for (let index = 0, len = pageTypeArr.length; index < len; index++) {
								const type = pageTypeArr[index]; //当前选中的每个类别（字符串）
								if (component.pageType.indexOf(type) === -1) {//判断是否为不存在
									isResultArr[1] = false;
									break
								} else {
									isResultArr[1] = true;
								}
							}
						}
					}

					if (component.title.indexOf(this.searchText) !== -1) {
						isResultArr[2] = true;
					}

					//几次的筛选结果
					for (let index = 0, len = isResultArr.length; index < len; index++) {
						if (isResultArr[index]) { // 三个维度全都符合
							isHave = true
						} else {    // 有一个维度不符合就跳出整个循环
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
			this.showComponents = null;
			this.loadComponent(this.examples);
		},

	},
	watch: {
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
  height: 120px;
  width: 100%;
  background-color: #f8f8f8;
  box-shadow: 0 0 10px 2px #ccc;
  padding-left: 50px;
  font-size: 20px;
}

.common_components_lib .titleHead .searchContent {
  float: left;
  height: 100%;
}

.common_components_lib .titleHead .searchCom {
  width: 300px;
  top: 50%;
  transform: translateY(-50%);
}

.common_components_lib .titleHead button {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.common_components_lib .titleHead .checkBtn {
  width: 32%;
  height: 100%;
  margin-left: 30px;
  float: left;
  padding: 16px 0px;
}

.common_components_lib .titleHead .checkBtn .checkboxCon {
  display: inline-block;
  margin-right: 12px;
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
  overflow-x: hidden;
  overflow-y: scroll;
  position: fixed;
  top: 130px;
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
  top: 130px;
  bottom: 0;
  right: 0;
}

.common_components_lib .comInfo img {
  max-width: 100%;
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
