<template>
	<div class="common_components_lib">
		<!-- example 请参考 src/components/UI/list_pic/02_pic_list_download/js/example.js -->
		<!-- <img src="./screenshots/ui_list_pic_02.jpg" style="max-width: 200px; max-height: 200px;"/> -->
		<!-- <hr> -->
		<!-- {{this.examples}} -->
		<el-row class="tac">
			<el-col :span="7" :style="{height: clientHeight + 'px'}" class="comList">
				<el-menu
					default-active="0"
					class="el-menu-vertical-demo">
					<el-menu-item  v-for="(com,vkey,index) in examples" :key="vkey" :index="String(index)" @click="toggleShowCom(com)">
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

export default {
	name: "common_components_lib",
	reused: true,
	data: function () {
		return {
			examples: {},
			showComponents: null,
			imgUrl: "",
			clientHeight: 0,
			devConfig: null,
		}
	},
	mounted: function () {
		this.clientHeight = document.documentElement.clientHeight;
		this.examples = ScanExamples();
		for (var key in this.examples) {
			if (!this.showComponents) {
				this.showComponents = this.examples[key];
				// this.devConfig = eval('(' + JSON.stringify(this.showComponents.dev) + ')');
				this.loadImg(this.showComponents);
				break;
			}
		}
	},
	methods: {
		toggleShowCom (com) {
			this.showComponents = this.examples[com.name];
			this.loadImg(this.showComponents);
		},
		loadImg (com) {
			var hasImg = true;  // 是否有图片的状态值 兼容有些没有图片的组件
			try {
				require('./screenshots/' + com.name + '.jpg');
			} catch (error) {
				hasImg = false;
			}
			this.imgUrl = hasImg ? require('./screenshots/' + com.name + '.jpg') : '';
		}
	}
};  
</script>
<style>
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
  top: 0;
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
  top: 0;
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
