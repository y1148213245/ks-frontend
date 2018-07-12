<template>
  <div class="ui_list_pic_37">
    <h2 v-text="resourceTitle"></h2>
    <div class="ui_list_pic_37_tab">
      <button v-for="(item,index) in tabList"
              :class="(currentIndex==index)?'active':''"
              v-text="item.name"
              @click="changeTab(index)"
              :key="index">
      </button>
    </div>
    <table>
      <thead>
        <th v-for="(item,index) in tHeadList" v-text="item" :key="index"></th>
      </thead>
      <tbody>
        <tr v-for="(item,index) in tBodyList" :key="index">
          <td v-text="item.resourceType"></td>
          <td v-text="item.resourceName"></td>
          <td v-text="item.resourceDate"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import PROJECT_CONFIG from "projectConfig";
    export default {
      name: "ui_list_pic_37",
      props: ['namespace', 'modulename'],
      reused: true,
      data() {
        return {
          resourceTitle: [], //存放资料名称的
          tabList: [],    //存放tab的数组
          tHeadList: [],  //存放table头部信息的数组
          tBodyList: [],  //存放table内容信息的数组
          currentIndex: 0,  //控制tab样式切换的  默认显示全部（0）
          CONFIG: null,  //获取配置
          display: {},  //展示静态文本的
          tempArr: [],
        };
      },
      created(){
        this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.list_pic_37[this.modulename];
        this.display = this.CONFIG.display;
        this.tabList = this.display.tabList;
        this.tHeadList = this.display.tHeadList;
        this.tBodyList = this.display.tBodyList;
        this.resourceTitle = this.display.resourceTitle;
      },
      mounted(){
        let _self = this;
        //将栏目树中的二级栏目传进来，在本组件中渲染三级栏目
        this.$bus.$on(_self.CONFIG.transTitle,function (item) {
          _self.resourceTitle = item.name;
          //渲染三级栏目
          _self.showThreeColumn(item);
          //渲染资源列表
          _self.getResourceList(item);
        });
      },
      methods: {
        //切换tab
        changeTab(index){
          this.currentIndex = index;
          let arr = [];
          if(1 == index){
            for(let i=0,len=this.tempArr.length; i<len; i++){
              if(this.tempArr[i].type == '1'){
                arr.push(this.tempArr[i]);
              }
            }
          }else if(2 == index){
            for(let i=0,len=this.tempArr.length; i<len; i++){
              if(this.tempArr[i].type == '2'){
                arr.push(this.tempArr[i]);
              }
            }
          }else {
            arr = this.tempArr;
          }
          this.tBodyList = arr;
        },
        showThreeColumn(item){
          if(item.parentId !=0 && item.childNav){
            this.tabList = item.childNav;
          }else {
            this.tabList = [];
          }
        },
        getResourceList(item){
          if(item.parentId !=0 && item.childNav) {
            this.tBodyList = this.resourceList(item);
            this.tempArr = this.tBodyList;
          }
        },
        resourceList(item){
          let arr = this.CONFIG.data;
          let arrTemp = [];
          for(let i=0,len=arr.length; i<len; i++){
            if(arr[i].grade == item.grade){
              arrTemp.push(arr[i]);
            }
          }
          return arrTemp;
        }
      }
    }
</script>

<style scoped>
.active {
  background-color: dodgerblue;
  color: #ffffff;
}
</style>
