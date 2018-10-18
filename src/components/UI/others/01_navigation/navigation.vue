<template>
    <div class="ui_others_navigation_01">
        <ul class="ui_others_navigation_01-ul">
            <li class="ui_others_navigation_01-li" 
            :class="{'active': currentActive == item.id}" 
            v-for="(item ,index) in navigationLists" 
            :key="index"
            @click.self="changeTabs(item)"
            >{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
import Vue from "vue";
import PROJECT_CONFIG from "projectConfig";
import URL from "url";
import $ from "jquery";
export default {
  name: 'ui_others_navigation_01',
  props: ["namespace", "modulename"],
  reused: true,
  data(){
      return {
          navigationLists: [],
          CONFIG: "",
          currentActive: ""
      }
  },
  created(){
    this.CONFIG = PROJECT_CONFIG[this.namespace].others.ui_others_navigation_01[this.modulename];
  },
  mounted(){
    if(this.CONFIG && this.CONFIG.navigationLists && this.CONFIG.navigationLists.length > 0){
        this.navigationLists = this.CONFIG.navigationLists;
        this.changeTabs(this.navigationLists[0]);
    }
  },
  methods:{
    changeTabs(item){
        this.currentActive = item.id;
        this.$bus.$emit(this.CONFIG.broadcastName, item);
    }
  }
  
}
</script>

<style>
.ui_others_navigation_01-ul{
    font-size: 0;
}

.ui_others_navigation_01-li{
    display: inline-block;
    padding: 0 20px;
    font-size: 14px;
}

.ui_others_navigation_01-li.active{
    color: red;
}
</style>

