<template>
	<div>
		<el-carousel :interval="CONFIG.interval" arrow="always" :height="CONFIG.height">
			<el-carousel-item v-for="(item, index) in picList" :key="index" :style="{backgroundImage: 'url(\''+item.pub_picBig+'\')'}" class="background_image_no_repeat">
			</el-carousel-item>
		</el-carousel>
	</div>
</template>
<script type="text/ecmascript-6">
	import UI_SWIPER_01_PIC from "projectConfig";
	import {Post} from "@common";

	export default {
		name: "ui_swiper_01_pic",
		reused: true,
		props: ["namespace"],
		data: function () {
			return {
				CONFIG: null,
				picList: []
			}
		},
		created: function () {
			this.CONFIG = this.namespace ? UI_SWIPER_01_PIC[this.namespace].swiper.pic_01 : UI_SWIPER_01_PIC.swiper.pic_01;
			this.queryData();
		},
		methods: {
			queryData: function () {
				Post(this.CONFIG.url, this.CONFIG.params).then((rep) => {
					var data = rep.data.result;
					if (data && data instanceof Array && data.length > 0) {
						this.picList = data;
					}
				})
			}
		}
	};
</script>

<style>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.background_image_no_repeat {
		background-repeat: no-repeat;
		background-size: 100% 100%;
		-moz-background-size: 100% 100%;
	}
</style>
