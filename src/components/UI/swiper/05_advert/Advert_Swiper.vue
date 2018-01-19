// 广告组件，暂定归类为轮播
<template>
  <div class="advertCon ui_swiper_05_advert" v-if="infoUrl">
    <a :href="infoUrl" class="gz_001">
      <img :src="advertList[0] && advertList[0].pub_picBig" class="advImg"/>
    </a>
  </div>
</template>
<script type="text/ecmascript-6">
  import {Post} from "@common";
  import PROJECT_CONFIG from "projectConfig";

  export default{
    name: 'ui_swiper_05_advert',
    reused: true,
    props: ['namespace'],
    data: function () {
      return {
        CONFIG: null, // API配置
        advertList: [], // 广告列表
        infoUrl: '' // 详情页跳转URL
      }
    },
    mounted: function () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].swiper.pic_advert_05;
      this.queryAdvertInfo();
    },
    methods: {
      queryAdvertInfo: function () {
        Post(this.CONFIG.url, this.CONFIG.params || {
            conditions: "[{pub_col_id:'214'}]",
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc id asc",
            pageNo: "1",
            pageSize: "15",
            searchText: ""
          }).then(rep => {
          if (rep.data && rep.data.success && rep.data.result && rep.data.result.length) {
            this.advertList = rep.data.result;
            this.setInfoUrl(rep.data.result);
          }
        })
      },
      setInfoUrl: function (list) {
        let id = list[0].id || '';
        this.infoUrl = (this.CONFIG.infoUrlPrefix || 'informationInfo.html?pubId=') + id;
      }
    }
  }
</script>
<style>
  .ui_swiper_05_advert .gz_001{
    display:block;
  }
  .ui_swiper_05_advert .advImg{
    width: 100%;
  }
</style>
