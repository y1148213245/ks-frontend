<!-- 广告列表组件 -->
<template>
  <div class="ui_swiper_08">
      <ul class="ui_swiper_08_ul" v-if="CONFIG && advList.length>0">
          <li class="ui_swiper_08_ul_li" v-for="(item,index) in advList" :key="index">
              <!-- 测试图片用 -->
              <!-- <img class="ui_swiper_08_advImg" v-if="CONFIG" @load="advDrawImaget($event)" @click="toDetail(item)" alt="暂无图片" src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525785202670&di=0cb3084ab6398b76b19e9128fe174d37&imgtype=0&src=http%3A%2F%2Fnpic7.fangtoo.com%2Fcn%2Fzixun%2Fzh-chs%2F2018-03%2F26%2F492377-201803262021263437.jpg'/> -->
              <!-- End测试图片用 -->
              <!-- @load="advDrawImaget($event)" 由美工控制图片尺寸 -->
              <img class="ui_swiper_08_advImg" v-if="CONFIG"  @click="toDetail(item)" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" :src="item[keys.picMiddle]"/>
          </li>
      </ul>
  </div>
</template>
<script>
import PROJECT_CONFIG from "projectConfig";
import { Post, DrawImage, getFieldAdapter, toOtherPage } from "@common";

export default {
  name: "ui_swiper_08",
  reused: true,
  props: ["namespace", "modulename"],
  data() {
    return {
      CONFIG: null,
      keys: {},
      advList: []
    };
  },
  created() {
    this.CONFIG = PROJECT_CONFIG[this.namespace].swiper.swiper_08[this.modulename];
    this.keys = getFieldAdapter(
      this.CONFIG.getResourceLists.sysAdapter,
      this.CONFIG.getResourceLists.typeAdapter
    );
    let paramsObj = this.CONFIG.getResourceLists.params;
    (paramsObj.pageSize =
      this.CONFIG.getResourceLists.maxNum +
      this.CONFIG.getResourceLists.startNum +
      ""),
      Post(CONFIG.BASE_URL + this.CONFIG.getResourceLists.url, paramsObj).then(
        rep => {
          if (
            rep.data.success &&
            rep.data.result &&
            rep.data.result.length > 0
          ) {
            rep.data.result.forEach((val, ind) => {
              if (ind >= this.CONFIG.getResourceLists.startNum) {
                this.advList.push(val);
              }
            });
          }
        }
      );
  },
  methods: {
    advDrawImaget(e) {
      DrawImage(e.path[0], this.CONFIG.imgMaxWidth, this.CONFIG.imgMaxHeight);
    },
    toDetail(item) { // 点击广告图图片的时候 优先级：来源链接 >> 详情
      window.open(item[this.keys.sourceUrl] ? item[this.keys.sourceUrl] : toOtherPage(item, this.CONFIG.toDetail, this.keys));
    },
    getStaticText(text){
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]){
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    }
  }
};
</script>
<style>
.ui_swiper_08_ul_li {
  float: left;
}

.ui_swiper_08_advImg {
  cursor: pointer;
}
</style>

