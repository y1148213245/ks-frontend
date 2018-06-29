<!-- created by zrn at 2018-06-23 -->
<!-- 栏目树组件2 -->
<template>
  <nav class="ui_navigation_08" v-if="CONFIG && tree && tree.length>0">
    <h3 class="ui_navigation_08_title" v-if="CONFIG.comTitle.isShow">{{CONFIG.comTitle.name}}</h3>
    <ul class="ui_navigation_08_ul" v-for="(item1,index1) in tree" :key="index1">
      <li class="ui_navigation_08_ul_li" :class="{'ui_navigation_08_ul_li_arrow': item1.isArrow,'ui_navigation_08_ul_li_arrowdown': item1.showChild && item1.childNav.length>0}" v-show="CONFIG && (typeof(CONFIG.showColumnArray) == 'undefined' || (typeof(CONFIG.showColumnArray) != 'undefined' && CONFIG.showColumnArray && (CONFIG.showColumnArray).indexOf(item1.id) !== -1))">
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
      colId: "", // 地址栏取栏目id高亮
      colIdArr: []
    };
  },
  created() {
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
            createChild: false, //是否已经点击创建过子导航
            isArrow: true // 是否显示箭头
          };
          tree.push(treeObj);
        }
      });
      //console.log("111", tree);
      if (tree.length > 0) {
        // 默认创建第一个
        if (!tree[0].createChild) {
          navData.forEach((val, index) => {
            if (val[this.keys.parentId] == tree[0].id) {
              var subTreeObj = {
                id: val[this.keys.id],
                name: val[this.keys.name],
                childNav: [],
                showChild: false, //子导航是否展示(鼠标单击控制展示收起)
                createChild: false //是否已经点击创建过子导航
              };
              tree[0].childNav.push(subTreeObj);
            }
          });
          tree[0].createChild = true;
          console.log(tree[0]);
        }
      }

      //发送默认bus
      if (this.defaultBus) {
        if (this.tree.length > 0) {
          this.currentActive = this.tree[0].id;
          this.colIdArr.push(this.currentActive);
          this.navInteract(this.currentActive);

          let firstColId = this.currentActive;
          let firstTit = this.tree[0].name;
          let firstChildId = [];
          let firstChildName = [];

          if (this.tree[0].childNav.length > 0) {
            this.tree[0].childNav.forEach((val, ind) => {
              this.colIdArr.push(val.id);
              val.childNav.forEach((val1, ind1) => {
                this.colIdArr.push(val1.id);
              });
            });
          }
          this.navData.forEach((val, ind) => {
            if (val[this.keys.parentId] == firstColId) {
              firstChildId.push(val.id);
              firstChildName.push(val.name);
            }
          });
          this.changeContent(
            this.colIdArr,
            firstTit,
            firstChildId,
            firstChildName
          );
        }

        this.navInteract(this.currentActive);

        this.defaultBus = false;
      }
    },
    navClick(item, items) {
      this.navInteract(item.id);
      this.colIdArr = [];
      items.map(entry => {
        // 手风琴效果
        if (entry.id != item.id) {
          // 隐藏同级子栏目
          entry.showChild = false;
        }
      });
      if (item.createChild == false) {
        //判断点击的菜单是否已经点击创建过子导航，如果没有则创建子导航
        this.createTree(item.id, item.childNav, this.navData);
        item.createChild = true;
      }

      this.currentActive = item.id;
      this.colIdArr.push(item.id);
      let childId = [];
      let childName = [];

      if (item.childNav.length > 0 && this.CONFIG.showChildren) {
        item.childNav.forEach((val, ind) => {
          this.colIdArr.push(val.id);
          val.childNav.forEach((val1, ind1) => {
            this.colIdArr.push(val1.id);
          });
        });
        item.showChild = !item.showChild;
      }

      if (item.childNav.length == 0) {
        item.isArrow = false;
      }
      this.navData.forEach((val, ind) => {
        if (val[this.keys.parentId] == item.id) {
          childId.push(val.id);
          childName.push(val.name);
        }
      });
      this.changeContent(this.colIdArr, item.name, childId, childName);

      // if (item.childNav.length == 0 || !this.CONFIG.showChildren) {
      //   let childId = [];
      //   let childName = [];
      //   item.childNav.forEach((val, ind) => {
      //     childId.push(val.id);
      //     childName.push(val.name);
      //   });
      //   this.changeContent(item.id, item.name, childId, childName);
      // } else {
      //     item.showChild = !item.showChild;
      // }
    },
    changeContent(colId, titName, childId, childName) {
      this.currentActive = colId[0]; /* 选中 */
      colId = colId.join(" OR ");
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
