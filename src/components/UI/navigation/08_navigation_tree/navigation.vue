<!-- created by zrn at 2018-06-23 -->
<!-- 栏目树组件2 -->
<template>
  <nav class="ui_navigation_08" v-if="CONFIG && tree && tree.length>0">
    <h3 class="ui_navigation_08_title" v-if="CONFIG.comTitle.isShow">{{CONFIG.comTitle.name}}</h3>
    <ul class="ui_navigation_08_ul" v-for="(item1,index1) in tree" :key="index1">
      <li class="ui_navigation_08_ul_li" :class="{'ui_navigation_08_ul_li_arrow': item1.childNav.length>0, 'ui_navigation_08_ul_li_arrowdown': item1.showChild && item1.childNav.length>0}" v-show="CONFIG && (typeof(CONFIG.showColumnArray) == 'undefined' || (typeof(CONFIG.showColumnArray) != 'undefined' && CONFIG.showColumnArray && (CONFIG.showColumnArray).indexOf(item1.id) !== -1))">
        <span :class="{'ui_navigation_08_item--active':currentActive == item1.id}" class="ui_navigation_08_first" @click.self="navClick(item1,tree)">{{item1.name}}</span>

        <ul class="ui_navigation_08_ul_child1" v-show="item1.childNav.length>0" v-for="(item2,index2) in item1.childNav" :key="index2">

          <li class="ui_navigation_08_ul_child1_li" :class="{'ui_navigation_08_item--active':currentActive == item2.id}" v-show="item1.showChild" @click.self="navClick(item2,item1.childNav)">
            {{item2.name}}
            <ul class="ui_navigation_08_ul_child2" v-show="item2.childNav.length>0" v-for="(item3,index3) in item2.childNav" :key="index3">
              <li class="ui_navigation_08_ul_child2_li" :class="{'ui_navigation_08_item--active':currentActive == item3.id}" v-show="item2.showChild" @click.self="changeContent(item3.id)">{{item3.name}}</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script>
import PROJECT_CONFIG from "projectConfig";
import { Get } from "@common";
import URL from "url";

export default {
  name: "ui_navigation_08",
  reused: true,
  props: ["namespace", "modulename"],
  data() {
    return {
      CONFIG: null,
      keys: {},
      navData: [], //存放接口返回数据
      tree: [], //存放生成的结构树数据
      defaultBus: true, //created后发送一次默认bus
      currentActive: "" /* 当前选中高亮 */,
      colId: "" // 地址栏取栏目id高亮
    };
  },
  created() {
    this.colId = URL.parse(document.URL, true).query.colId;
    this.CONFIG =
      PROJECT_CONFIG[this.namespace].navigation.navigation_08[this.modulename];
    this.keys = this.CONFIG.getNavLists.keys;
    this.getNavList();
  },
  mounted() {},
  methods: {
    navInteract(colId) {
      if (this.CONFIG && this.CONFIG.broadcastEventName) {
        // 有配置需要和面包屑导航通讯
        let event = this.CONFIG.broadcastEventName;
        this.$bus.$emit(event.transCol, { [event.keys.colId]: colId });
      }
    },
    getNavList() {
      var paramsObj = Object.assign({}, this.CONFIG.getNavLists.params);
      Get(CONFIG.BASE_URL + this.CONFIG.getNavLists.url, {
        params: paramsObj
      }).then(rep => {
        if (rep.data.success && rep.data.data && rep.data.data.length > 0) {
          this.navData = rep.data.data;
          this.createTree(this.CONFIG.colId, this.tree, this.navData);
          this.navClick(this.tree[0], this.tree);
        }
      });
    },
    createTree(colId, tree, navData) {
      this.navInteract(colId);
      //参数说明：(colId：当前栏目的colId，tree:生成的子结构存放数组，navData：接口返回的data结构)
      navData.forEach((val, ind) => {
        if (val[this.keys.parentId] == colId) {
          var treeObj = {
            id: val[this.keys.id],
            name: val[this.keys.name],
            childNav: [],
            showChild: false, //子导航是否展示(鼠标单击控制展示收起)
            createChild: true //是否已经点击创建过子导航
          };
          tree.push(treeObj);
        }
      });
      //console.log("111" , tree);
      navData.forEach((val, index) => {
        tree.forEach((val1, index1) => {
          if (val[this.keys.parentId] == tree[index1].id) {
            var subTreeObj = {
              id: val[this.keys.id],
              name: val[this.keys.name],
              childNav: [],
              showChild: false, //子导航是否展示(鼠标单击控制展示收起)
              createChild: false //是否已经点击创建过子导航
            };
            tree[index1].childNav.push(subTreeObj);
          }
        });
      });
      //console.log("222=" , tree);

      //发送默认bus
      if (this.defaultBus) {
        if (this.tree.length > 0) {
          if(this.tree[0].childNav.length > 0){
            this.currentActive = this.colId ? this.colId: this.tree[0].childNav[0].id;
            let subFirstChild = this.currentActive;
            let subFirstTit = this.tree[0].name;
            let subFirstChildId = [];
            let subFirstChildName = [];
            this.tree[0].childNav.forEach((val, ind) => {
              subFirstChildId.push(val.id);
              subFirstChildName.push(val.name);
            });
            this.$bus.$emit(this.CONFIG.broadcastName, [
              subFirstChild,
              subFirstTit,
              subFirstChildId,
              subFirstChildName
            ]);
          }else{
            this.currentActive = this.colId ? this.colId : this.tree[0].id;
            let curIndex = 0;
            this.tree.map((item, index) => {
              if (item.id == this.currentActive) {
                curIndex = index;
              }
            });
            let firstColId = this.tree[curIndex].id;
            let firstTit = this.tree[curIndex].name;
            let firstChildId = [];
            let firstChildName = [];
            this.navData.forEach((val, ind) => {
              if (val[this.keys.parentId] == firstColId) {
                firstChildId.push(val.id);
                firstChildName.push(val.name);
              }
            });
            this.$bus.$emit(this.CONFIG.broadcastName, [
              firstColId,
              firstTit,
              firstChildId,
              firstChildName
            ]);
          }
        }

        this.navInteract(this.currentActive);
        
        this.defaultBus = false;
      }
    },
    navClick(item, items) {
      this.navInteract(item.id);

      items.map(entry => {
        // 手风琴效果
        if (entry.id != item.id) {
          // 隐藏同级子栏目
          entry.showChild = false;
        }
      });
      //if (item.createChild == false) {
        //判断点击的菜单是否已经点击创建过子导航，如果没有则创建子导航
        //this.createTree(item.id, item.childNav, this.navData);
        //item.createChild = true;
      //}
      if (item.childNav.length > 0 && this.CONFIG.showChildren) {
        if(!item.showChild){
          this.currentActive = item.childNav[0].id; // 默认选中第一个栏目的第一个子栏目
          let childId1 = [];
          let childName1 = [];
          item.childNav[0].childNav.forEach((val, ind) => {
            childId1.push(val.id);
            childName1.push(val.name);
          });
          this.changeContent(this.currentActive, item.childNav[0].name, childId1, childName1);
        }
       
      } else {
        this.currentActive = item.id;
      }

      if (item.childNav.length == 0 || !this.CONFIG.showChildren) {
        let childId = [];
        let childName = [];
        item.childNav.forEach((val, ind) => {
          childId.push(val.id);
          childName.push(val.name);
        });
        this.changeContent(item.id, item.name, childId, childName);
      } 
      else {
        if(!item.showChild){
          item.showChild = true;
        }
      }
    },
    changeContent(colId, titName, childId, childName) {
      this.currentActive = colId; /* 选中 */
      //通过广播发送当前点击导航的colId和name,如果有子导航且不展示,发送存放子导航id的数组和存放子导航name的数组
      this.$bus.$emit(this.CONFIG.broadcastName, [
        colId,
        titName,
        childId,
        childName
      ]);
    }
  }
};
</script>
<style>
.ui_navigation_08_ul_li {
  width: 270px;
  text-align: center;
  cursor: pointer;
  line-height: 30px;
}
.ui_navigation_08_ul_child1_li {
  height: 30px;
  cursor: pointer;
  padding-left: 30px;
}
.ui_navigation_08_ul_child2_li {
  height: 30px;
  cursor: pointer;
  padding-left: 60px;
}

.ui_navigation_08_item--active {
  color: red;
}
</style>
