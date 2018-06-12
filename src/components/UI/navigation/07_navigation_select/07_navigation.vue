<!-- 选项下拉组件 -->
<template>
  <nav class="ui_navigation_07" v-if="CONFIG">

    <div class="ui_navigation_07_div">
      <select  class='ui_navigation_07_div_select'  @change='selectOption'>
        <option v-for="(item,index) in this.navData"
                v-if="CONFIG && (typeof(CONFIG.showColumnArray) == 'undefined' || (typeof(CONFIG.showColumnArray) != 'undefined' && CONFIG.showColumnArray && (CONFIG.showColumnArray).indexOf(item[fieldArr.fieldValue]) !== -1))"
                class="ui_navigation_07_div_select_option" :value="item[fieldArr.fieldValue]" >{{item[fieldArr.fieldname]}}</option>
      </select>
    </div>
  </nav>
</template>
<script>
  import PROJECT_CONFIG from "projectConfig";
  import { Post } from '@common'
  import URL from 'url';

  export default {
    name: "ui_navigation_07",
    reused: true,
    props: ["namespace", "modulename"],
    data () {
      return {
        CONFIG: null,
        navData: [], //存放接口返回数据
        fieldArr: [], //key数据
      };
    },
    created () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].navigation.navigation_07[this.modulename];
      this.fieldArr = this.CONFIG.field;
      this.getColumnLists();
    },
    mounted () { },
    methods: {
      getColumnLists () {
        let columnLists = this.CONFIG.getColumnList;
        // CONFIG.BASE_URL +
        Post(CONFIG.BASE_URL + this.CONFIG.getNavLists.url + '?colId=' + this.CONFIG.getNavLists.params.colId).then((rep) => {
          let datas = rep.data;
          if (rep.data.success && datas.data && datas.data.length > 0) {
            this.navData = datas.data;
          }
        });
      },
      selectOption (item) {
        if(item.target.value){
          switch(this.CONFIG.selectType)
          {
            case 'toPage':
              window.open(item.target.value);
              break;
            case 'tobroadcast':
                this.$bus.$emit(this.CONFIG.broadcastName, [item.target.value]);
              break;
            default:
          }
        }

      }
    }
  };
</script>
<style>
  .ui_navigation_07_ul_li {
    width: 270px;
    text-align: center;
    cursor: pointer;
    line-height: 30px;
  }
  .ui_navigation_07_ul_child1_li {
    height: 30px;
    cursor: pointer;
    padding-left: 30px;
  }
  .ui_navigation_07_ul_child2_li {
    height: 30px;
    cursor: pointer;
    padding-left: 60px;
  }

  .ui_navigation_07_item--active {
    color: red;
  }
</style>
