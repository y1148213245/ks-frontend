<template>
  <header class="ui_mobile_navigation_01_header">
    <div class="ui_mobile_navigation_01">
      <a class="ui_mobile_navigation_left" href="javascript:void(0)" onclick="window.history.go(-1)">
        <i v-if="CONFIG" v-bind="{class: CONFIG.left.icon}"></i>
      </a>
      <span class="ui_mobile_navigation_title" v-text="navtitle"></span>
      <a v-if="CONFIG" class="ui_mobile_navigation_right" :href="CONFIG.right.url">
        <i v-bind="{class: CONFIG.right.icon}"></i>
      </a>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
import PROJECT_CONFIG from "projectConfig";
import { Get } from "@common";
export default {
  name: "ui_mobile_navigation_01",
  reused: true,
  props: ["namespace", "navtitle"],
  data () {
    return {
      CONFIG: null,
    }
  },
  mounted: function () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].navigation.navigation_01;
  },
  methods: {

  }
}
</script>
<style>
.ui_mobile_navigation_01_header {
  position: fixed;
  width: 7.5rem;
  background: #fff;
  z-index: 10;
}

.ui_mobile_navigation_01 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid #f5f5f5;
  -webkit-box-shadow: 0 0.12rem 0.12rem #f5f5f5;
  -moz-box-shadow: 0 0.12rem 0.12rem #f5f5f5;
  box-shadow: 0 0.12rem 0.12rem #f5f5f5;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #5b5b5b;
  font-weight: 500;
  font-size: 0.36rem;
  padding: 0.25rem 0.2rem;
}

.ui_mobile_navigation_01_header a {
  color: #5b5b5b;
}
</style>
