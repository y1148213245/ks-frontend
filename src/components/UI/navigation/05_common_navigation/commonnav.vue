<!-- 栏目树组件 -->
<template>
  <nav class="ui_navigation_05" v-if="CONFIG && tree && tree.length>0">
    <h3 class="ui_navigation_05_title" v-if="CONFIG.comTitle.isShow">{{CONFIG.comTitle.name}}</h3>
    <ul class="ui_navigation_05_ul" v-for="(item1,index1) in tree" :key="index1">
      <li class="ui_navigation_05_ul_li" v-show="CONFIG && (typeof(CONFIG.showColumnArray) == 'undefined' || (typeof(CONFIG.showColumnArray) != 'undefined' && CONFIG.showColumnArray && (CONFIG.showColumnArray).indexOf(item1.id) !== -1))">
        <span :class="{'ui_navigation_05_item--active':currentActive == item1.id}" class="ui_navigation_05_first" @click.self="navClick(item1,tree)">{{item1.name}}</span>

        <ul class="ui_navigation_05_ul_child1" v-show="item1.childNav.length>0" v-for="(item2,index2) in item1.childNav" :key="index2">

          <li class="ui_navigation_05_ul_child1_li" :class="{'ui_navigation_05_item--active':currentActive == item2.id}" v-show="item1.showChild || currentActive == item2.id" @click.self="navClick(item2,item1.childNav)">
            {{item2.name}}
            <ul class="ui_navigation_05_ul_child2" v-if="showThreeColumn" v-show="item2.childNav.length>0" v-for="(item3,index3) in item2.childNav" :key="index3">
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
import $ from 'jquery';

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
      showThreeColumn: true,  //是否显示三级目录
    };
  },
  created () {
    this.colId = URL.parse(document.URL, true).query.colId;
    this.CONFIG =
      PROJECT_CONFIG[this.namespace].navigation.navigation_05[this.modulename];
    this.keys = this.CONFIG.getNavLists.keys;
    this.showThreeColumn = this.CONFIG.showThreeColumn;
    this.getNavList();


  },
  mounted () {
  },
  methods: {
    navInteract (colId) {
      if (this.CONFIG && this.CONFIG.broadcastEventName) { // 有配置需要和面包屑导航通讯
        let event = this.CONFIG.broadcastEventName;
        this.$bus.$emit(event.transCol, { [event.keys.colId]: colId });
      }
    },
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
      this.navInteract(colId);
      let reverseByColId = this.CONFIG.reverseByColId; //获取是否按照id反向排序
      //参数说明：(colId：当前栏目的colId，tree:生成的子结构存放数组，navData：接口返回的data结构)
      navData.forEach((val, ind) => {
        if (val[this.keys.parentId] == colId) {
          var treeObj = {
            id: val[this.keys.id],
            name: val[this.keys.name],
            parentId: val[this.keys.parentId],
            childNav: [],
            showChild: false, //子导航是否展示(鼠标单击控制展示收起)
            createChild: false //是否已经点击创建过子导航
          };
          if (reverseByColId) { //如果反向排序 , 则反压进数组
            tree.unshift(treeObj); //将对象按照顺序从头部添加进数组
          } else { //否则进行默认排序
            tree.push(treeObj);
          }
        }
      });
      //发送默认bus
      if (this.defaultBus) {
        this.currentActive = this.colId ? this.colId : this.tree[0].id;
        //首次加载时，将默认的栏目id存起来
        sessionStorage.setItem("mycolId",this.currentActive);
        if(this.CONFIG && this.CONFIG.transDefaultColId){
          this.$bus.$emit(this.CONFIG.transDefaultColId, this.tree[0]);
        }
        this.navInteract(this.currentActive);
        let curIndex = 0;
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
    navClick (item, items) {
      //每次点击栏目时，将栏目id存起来
      sessionStorage.setItem("mycolId",item.id);
      let directLink = this.CONFIG.directLink;
      if (directLink && directLink.switchFlag && directLink.directRules[item.id]) {
        // 点击左侧导航直接跳转链接 因为点击左侧不同导航时右侧内容的内容显示不一样
        window.open(this.CONFIG.directLink.directRules[item.id] + item.id, directLink.dierctWay ? directLink.dierctWay : '_blank');
        return false
      }
      this.navInteract(item.id);
      //在资料中心中需要渲染三级栏目，因此通过该方法将完整数据广播给资料中心
      this.changeContentTwo(item);
      this.currentActive = item.id;
      items.map(entry => {  // 手风琴效果
        if (entry.id != item.id) { // 隐藏同级子栏目
          $('.ui_navigation_05_content-' + entry.id).css('display', 'none')
          entry.showChild = false;
        } else {
          $('.ui_navigation_05_content-' + entry.id).css('display', 'block')
        }
      })
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
    },
    changeContentTwo (item) {
      if (this.CONFIG.transTitle) {
        this.$bus.$emit(this.CONFIG.transTitle, item);
      }
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
