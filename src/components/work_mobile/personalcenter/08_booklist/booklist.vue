<template>
  <div class="work_mobile_personalcenter_08">
    <div class="work_mobile_personalcenter_08_booksexist" v-if="booklist.length>0">
      <div class="work_mobile_personalcenter_08_manage">
        <span class="work_mobile_personalcenter_08_manage_btn" @click="isshowDlete = !isshowDlete" v-text="!isshowDlete?display.manage:display.cancel"></span>
      </div>
      <div class="work_mobile_personalcenter_08_bookslist">
        <ul class="work_mobile_personalcenter_08_bookslist_ul">
          <li class="work_mobile_personalcenter_08_bookslist_li" v-for="(item,index) in booklist" >
            <img :src="item.midPic?item.midPic:''" alt="" class="work_mobile_personalcenter_08_bookslist_img" @click="toProbation(item,modulename)">
            <a href="#" v-show="isshowDlete" class="work_mobile_personalcenter_08_bookslist_delete_a" @click="deleteBookList(loginName,index,item.pubId)">
              <van-icon name="delete" />
            </a>
            <span class="work_mobile_personalcenter_08_bookslist_readtrying" v-if="item.bookFreeDownLoadPath !=''">{{display.readTrying}}</span>
            <span class="work_mobile_personalcenter_08_bookslist_bookname" @click="toProbation(item,modulename)">{{item.productName ? item.productName :'暂无书名' }}</span>
            <span class="work_mobile_personalcenter_08_bookslist_author">{{item.author?item.author :'暂无作者'}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="work_mobile_personalcenter_08_books_nonexist" v-else>
      <div class="work_mobile_personalcenter_08_books_nonexist_message">
        <span class="work_mobile_personalcenter_08_books_nonexist_message_content">{{display.empty}}</span>
      </div>
      <div class="work_mobile_personalcenter_08_books_nonexist_tobookcity">
        <button class="work_mobile_personalcenter_08_books_nonexist_tobookcity_btn" @click="toBookLibrary">{{display.btnname}}</button>
      </div>
    </div>
  </div>

</template>

<script>
	import { Get,Delete, mobileLoading,getFieldAdapter, toOtherPage } from "@common";
	import { mapGetters } from 'vuex';
	import * as interfaces from "@work/login/common/interfaces.js";
	import PROJECT_CONFIG from 'projectConfig';
	import { Icon,Toast } from 'vant';


	export default {
		name: 'work_mobile_personalcenter_08',
		props: ['namespace','modulename'],
		reused: true,
		data () {
			return {
				CONFIG: null,
        isshowDlete:false,
        booklist:[],
				display:'',
				pageIndex: "1",  // 页码 从 1 开始
				pageSize: "15",  // 每页显示个数
				loginName:''   //登录名
      }
		},

		computed: {
			...mapGetters("login", {
				member: interfaces.GET_MEMBER
			}),
		},

		created () {
			this.CONFIG = PROJECT_CONFIG[this.namespace].work_mobile_personalcenter.work_mobile_personalcenter_08[this.modulename];
			this.BOOKCONFIG = this.CONFIG.getlist;
			this.DELETECONFIG = this.CONFIG.delete;
			this.display = this.CONFIG.display;
			this.PROBATION = this.CONFIG.probation;
		},

		mounted () {
			this.$bus.$emit(this.CONFIG.emitEvent.contextEventName, this.CONFIG.display.navTitle);
      /*检测滚动条*/
			$(window).scroll(() => {
				/**
				 * function 下拉底部加载
				 * params1: vue对象
				 * params2: 回调方法
				 */
				mobileLoading(this, 'queryBookList');
			});
		},

		methods: {
			initData (loginName) { // 初始化数据
				this.pageSize = this.BOOKCONFIG.params.pageSize;
				this.pageIndex = this.BOOKCONFIG.params.pageIndex;
				this.queryBookList(loginName); // 获取我的书架或者我的收藏
			},

      //获取我的书架(我的收藏)的数据
			queryBookList (loginName) {
				let obj = this;
				let params = Object.assign({}, obj.BOOKCONFIG.params);

				//根据传的是我的书架还是收藏来拼接URL,因为参数不同
        //TODO 暂时参数type是写死为'2',productType为空
        let BASE_URL = CONFIG.BASE_URL + this.BOOKCONFIG.url + '?loginName=' + (loginName ? loginName : this.member.loginName) + '&pageIndex=' + this.pageIndex + '&pageSize=' + this.pageSize + '&siteId=' + CONFIG.SITE_CONFIG.siteId ;
				if(obj.modulename == "bookmyshelf"){
					BASE_URL += '&type=' + params.type + '&productType=' + params.productType +'&status=' +params.status ;
        }else{
					BASE_URL += '&contentType=' + params.contentType ;
        }
				Get(BASE_URL).then((resp) => {
					let res = resp.data;
					if (res.result == '1' && res.data.length > 0) {
						obj.booklist = obj.booklist.concat(res.data);
					}else if(res.result == '0'){
						Toast.fail(res.error.errorMsg);

          }
				})
			},

      //删除我的书架(我的收藏)的具体的书
      deleteBookList(loginName,index,pubId){
				// console.log(this)
				let obj = this;
				let deleteIndex = index;
				let delParams = Object.assign({}, obj.DELETECONFIG.params);
	      //根据传的是我的书架还是收藏来拼接URL,因为参数不同

	      //TODO DELETE请求方式中的pubId/pubIds目前是写死的
	      let BASE_URL = CONFIG.BASE_URL + obj.DELETECONFIG.url + '?loginName=' + (loginName ? loginName : obj.member.loginName) + '&siteId=' + CONFIG.SITE_CONFIG.siteId;
	      if(obj.modulename =="bookmyshelf"){
		      BASE_URL += '&pubId=' + pubId;

		      Delete(BASE_URL).then((resp) => {
			      obj.afterDeleteHandle(obj,resp,deleteIndex);
		      })
	      }else{
		      BASE_URL += '&pubIds=' + pubId;
		      Get(BASE_URL).then((resp) => {  //删除收藏
			       obj.afterDeleteHandle(obj,resp,deleteIndex)
		      })
	      }


      },
      afterDeleteHandle(obj,resp,index){
	      let res = resp.data;
	      if(res.result =="0"){
		      Toast.fail(res.error.errorMsg)
	      }else{
		      Toast.success(res.data.msg);
		      this.booklist =[];
          obj.initData(obj.loginName);
	      }
      },
      //试读
			toProbation (item,modulename) { // 执行自定义事件
        // debugger;
	        if (!item.bookFreeDownLoadPath) {  // 没有试读地址的情况
		        return false;
	        }else{
		        if(modulename =="bookmyshelf"){
		        	let params = this.PROBATION.params;
			        var url = this.PROBATION.url || CONFIG.READ_URL + '?bookId=' + item.resourceId + '&readType=' + params.readType + '&bookName=' + item.resourceName + '&userName=&siteType=' + CONFIG.READ_CONFIG.siteType;
		        }else{
			        var url = this.CONFIG.toDetailUrl +'?pubId=' +item.pubId;
		        }
          }
				window.open(url);
			},
      //去书城
      toBookLibrary(){
	      //TODO 暂时不知道书城地址,写了个详情的地址
          var url = this.CONFIG.toBookLibraryUrl;
          window.open(url);
      }
		},

		watch: {
			member: function (newValue, oldValue) {
				if (newValue.loginName && newValue.loginName != oldValue.loginName) {
					this.initData(newValue.loginName); // 初始化数据之后再调用我的书架和我的收藏的方法
          this.loginName = newValue.loginName;
				}
			}
		}
	}
</script>

<style>
  .work_mobile_personalcenter_08 {
    font-size: 0.35rem;
    padding: 0.5rem;
  }
</style>