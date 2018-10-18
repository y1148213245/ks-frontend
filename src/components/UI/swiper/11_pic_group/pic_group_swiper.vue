<!-- PC端图片轮播组件，从getPicGroupDetailList.do接口获取数据，根据获取到的数据类型跳转页面  jiangwei 2018/10/12-->
<template>
	<div class="ui_swiper_11">
		<el-carousel class="ui_swiper_11_slides" :interval="CONFIG.interval" arrow="always" :height="CONFIG.height">
			<template v-for="(item, index) in picList">
        <div class="ui_swiper_11_slides_wrap" @click="backgroundImgEve(item)" :key="index" v-if="picList.length>0 && index < (CONFIG.picGroupLength ? CONFIG.picGroupLength : picListLength)">
          <el-carousel-item :key="index" :style="{backgroundImage: 'url(\''+item.picUrl+'\')'}" class="background_image_no_repeat">
					  <div v-if="CONFIG && CONFIG.showTitle && CONFIG.showTitle==true" class="ui_swiper_11_pictitle"> {{item.picName}}</div>
				  </el-carousel-item>
        </div>
			</template>

		</el-carousel>
  </div>
</template>
<script type="text/ecmascript-6">
import PROJECT_CONFIG from "projectConfig";
import { Get, Post } from "@common";

export default {
  name: "ui_swiper_11",
  reused: true,
  props: ["namespace", "modulename"],
  data: function() {
    return {
      CONFIG: null,
      picList: [],
      loginName: "",
      picListLength: null
    };
  },
  created: function() {
    this.CONFIG = this.namespace
      ? PROJECT_CONFIG[this.namespace].swiper.pic_group_11
      : PROJECT_CONFIG.swiper.pic_group_11;
    this.queryData();
  },
  methods: {
    queryData: function() {
      let param = {
        picGroupAlias: this.CONFIG.picGroupAlias,
        siteId: CONFIG.SITE_CONFIG.siteId
      };
      Get(CONFIG.BASE_URL + this.CONFIG.getPicGroupUrl, { params: param }).then(
        resp => {
          var data = resp.data.data;
          if (data && data instanceof Array && data.length > 0) {
            this.picList = data;
            this.picListLength = data.length;
          }
        }
      );
    },
    backgroundImgEve(item) {
      //点击轮播图片，URL：外部链接，COL：链接到栏目，RES：链接到资源
      if (item.picType == "URL") {
        window.open(
          item.picAddress.indexOf("https://") != -1
            ? item.picAddress
            : "https://" + item.picAddress,
          this.CONFIG.openTarget
        );
      } else if (item.picType == "COL") {
        let param = {
          siteId: CONFIG.SITE_CONFIG.siteId,
          chId: CONFIG.SITE_CONFIG.chId
        };
        Get(CONFIG.BASE_URL + this.CONFIG.getAllColUrl, { params: param }).then(
          //调所有栏目接口
          resp => {
            var colList = resp.data.data;
            for (var i in colList) {
              if (colList[i].id == item.picAddress) {
                //栏目ID与返回值一致时i，获取外部链接
                window.open(
                  colList[i].url ? colList[i].url : "index.html",
                  this.CONFIG.openTarget
                );
              }
            }
          }
        );
      } else if (item.picType == "RES") {
        Get(
          CONFIG.BASE_URL +
            this.CONFIG.getDetailUrl +
            "?pubId=" +
            item.picAddress +
            "&loginName=" +
            this.loginName
        ).then(resp => {
          //调图书详情接口
          var resDetail = resp.data.data;
          window.open(
            this.CONFIG.toResDetail[resDetail.contentType].detailUrl +
              item.picAddress,
            this.CONFIG.openTarget
          );
        });
      }
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

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.background_image_no_repeat {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  cursor: pointer;
}

.ui_swiper_11_pictitle {
  display: inline-block;
  position: absolute;
  z-index: 2;
  bottom: 0px;
  height: 40px;
  line-height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding-left: 20px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
