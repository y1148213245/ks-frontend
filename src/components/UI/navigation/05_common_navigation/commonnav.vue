<!-- 栏目树组件 -->
<template>
    <nav class="ui_navigation_05" v-if="CONFIG && tree && tree.length>0">
        <h3 class="ui_navigation_05_title" v-if="CONFIG.comTitle.isShow">{{CONFIG.comTitle.name}}</h3>
        <ul class="ui_navigation_05_ul" v-for="(item1,index1) in tree" :key="index1">
          <li class="ui_navigation_05_ul_li" :class="{'ui_navigation_05_item--active':currentActive == item1.id}" @click.self="navClick(item1)" v-if="CONFIG && (typeof(CONFIG.showColumnArray) == 'undefined' || (typeof(CONFIG.showColumnArray) != 'undefined' && CONFIG.showColumnArray && (CONFIG.showColumnArray).indexOf(item1.id) !== -1))">
            {{item1.name}}
              <ul class="ui_navigation_05_ul_child1" v-if="item1.childNav.length>0" v-for="(item2,index2) in item1.childNav"     :key="index2">
                <li class="ui_navigation_05_ul_child1_li"
                  :class="{'ui_navigation_05_item--active':currentActive == item2.id}"  
                  v-show="item1.showChild" 
                  @click.self="navClick(item2)">
                    {{item2.name}}
                  <ul class="ui_navigation_05_ul_child2" v-if="item2.childNav.length>0" v-for="(item3,index3) in item2.childNav" :key="index3">
                      <li class="ui_navigation_05_ul_child2_li" :class="{'ui_navigation_05_item--active':currentActive == item3.id}" v-show="item2.showChild" @click.self="changeContent(item3.id)">{{item3.name}}</li>
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
import URL from 'url';

export default {
  name: "ui_navigation_05",
  reused: true,
  props: ["namespace", "modulename"],
  data () {
    return {
      CONFIG: null,
      keys: {},
      navData: [], //存放接口返回数据
      tree: [], //存放生成的结构树数据
      defaultBus: true, //created后发送一次默认bus
      currentActive: '',/* 当前选中高亮 */
      colId: "", // 地址栏取栏目id高亮
    };
  },
  created () {
    this.colId = URL.parse(document.URL, true).query.colId;
    this.CONFIG =
      PROJECT_CONFIG[this.namespace].navigation.navigation_05[this.modulename];
    this.keys = this.CONFIG.getNavLists.keys;
    this.getNavList();
  },
  mounted () { },
  methods: {
    getNavList () {
      var paramsObj = Object.assign({}, this.CONFIG.getNavLists.params);
      Get(CONFIG.BASE_URL + this.CONFIG.getNavLists.url, {
        params: paramsObj
      }).then(rep => {
        if (rep.data.success && rep.data.data && rep.data.data.length > 0) {
          this.navData = rep.data.data;
          this.createTree(this.CONFIG.colId, this.tree, this.navData);
        }
      });
    },
    createTree (colId, tree, navData) {
      // console.log(colId);
      //参数说明：(colId：当前栏目的colId，tree:生成的子结构存放数组，navData：接口返回的data结构)
      navData.forEach((val, ind) => {
        if (val[this.keys.parentId] == colId) {
          var treeObj = {
            id: val[this.keys.id],
            name: val[this.keys.name],
            childNav: [],
            showChild: false, //子导航是否展示(鼠标单击控制展示收起)
            createChild: false //是否已经点击创建过子导航
          };
          tree.push(treeObj);
        }
      });
      // console.log(tree);
      //发送默认bus
      if (this.defaultBus) {
        this.currentActive = this.colId ? this.colId : this.tree[0].id;
        let curIndex = 0;
        // console.log(this.currentActive);
        this.tree.map((item, index) => {
          if (item.id == this.currentActive) {
            curIndex = index
          }
        })
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
        this.defaultBus = false;
      }
    },
    navClick (item) {

      if (item.createChild == false) {
        //判断点击的菜单是否已经点击创建过子导航，如果没有则创建子导航
        this.createTree(item.id, item.childNav, this.navData);
        item.createChild = true;
      }
      if (item.childNav == 0 || !this.CONFIG.showChildren) {
        //判断当前菜单子导航是否仍为空,或者是否配置了不显示子导航
        let childId = [];
        let childName = [];
        item.childNav.forEach((val, ind) => {
          childId.push(val.id);
          childName.push(val.name);
        });
        this.changeContent(item.id, item.name, childId, childName);
      } else {
        item.showChild = !item.showChild;
      }
    },
    changeContent (colId, titName, childId, childName) {
      this.currentActive = colId;/* 选中 */
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
.ui_navigation_05_ul_li {
  width: 270px;
  text-align: center;
  cursor: pointer;
  line-height: 30px;
}
.ui_navigation_05_ul_child1_li {
  height: 30px;
  cursor: pointer;
  padding-left: 30px;
}
.ui_navigation_05_ul_child2_li {
  height: 30px;
  cursor: pointer;
  padding-left: 60px;
}

.ui_navigation_05_item--active {
  color: red;
}
</style>
 