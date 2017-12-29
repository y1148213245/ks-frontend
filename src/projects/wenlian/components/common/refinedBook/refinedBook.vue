<template>
  <div >
    <div class="index_jpts">
      <div class="highQualityCon">
        <div class="index_jpts_head"><h3><span class="index_jpts_name fl f18 color_7e7">精品图书</span> <span
          class="more fr pt20 f12"><a @click="toDetailsPage()" class="color_727">MORE+</a></span>
        </h3></div>
      </div>
      <!---------------------------精品图书第一部分------------------------------->
      <ui_list_pic_10_refined_book namespace="index" :refined-book="list"></ui_list_pic_10_refined_book>
      <!---------------------- END 精品图书第一部分------------------------------------>
      <ui_list_pic_09_book_show namespace="index" :book-show="list"></ui_list_pic_09_book_show>
    </div>
  </div>
</template>

<script>
	import {Post,DrawImage} from "@common";
	import PROJECT_CONFIG from "projectConfig";


	export default {
		name: 'wenlian_common_refined_book',
		reused: true,
		props: ["namespace"],
		data () {
			return {
				CONFIG:null,
				list:[],
			}
		},
    created:function () {
	    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.refinedBook;
      this.getRefinedBook()
    },
    methods:{
      getRefinedBook:function(){
	      Post(this.CONFIG.url, this.CONFIG.param).then((rep) => {
		      this.list = rep.data.result;
	      });
      },
      toDetailsPage:function () {
	      window.location.href = this.CONFIG.href + this.CONFIG.pubId;
      }
    }
	}
</script>

<style>
  .color_727{
    cursor: pointer;
  }
</style>