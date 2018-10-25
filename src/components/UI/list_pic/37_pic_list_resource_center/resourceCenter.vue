<template>
  <div class="ui_list_pic_37">
    <h2 v-text="resourceTitle"></h2>
    <div class="ui_list_pic_37_tab">
      <button v-for="(item,index) in tabList"
              :class="(currentIndex==index)?'active':''"
              v-text="item.name"
              @click="changeTab(item,index)"
              :key="index">
      </button>
    </div>
    <table class="ui_list_pic_37_table el-table el-table--border">
      <thead class="ui_list_pic_37_thead">
        <!-- <th v-for="(item,index) in CONFIG.tHeadAudioList" v-text="item" :key="index" v-show="tBodyList[0] && (tBodyList[0][keys.pubResType] == display.audio)"></th> -->
        <th v-for="(item,index) in CONFIG.tHeadList" :key="index">{{item}}</th>
      </thead>
      <tbody class="ui_list_pic_37_tbody">
        <tr v-for="(item,index) in tBodyList" :key="index">
          <!-- <td v-if="item[keys.pubResType] == display.audio">{{item[keys.id] || display.noData || '暂无数据'}}</td> -->
          <td><i :class='"fa fa-file-"+changeIconName(item)+"-o"'></i><span>{{changeShow(item) || display.noData || '暂无数据'}}</span></td>
          <td v-if="item[keys.pubResType] == display.audio">
            <div><img @click="toContent(item)" :src="item[keys.picSmall || require('@static/img/defaultCover.png')] || '暂无图片'" alt=""></div>
            <div>
              <div @click="toContent(item)">{{item[keys.resName] || display.noData || '暂无数据'}}</div>
              <div>
                <span>{{display.description || display.noData || '暂无描述'}}</span>
                <span>{{item[AUDIO-MEDIA_DESCRIPTION] || display.noData || '暂无数据'}}</span>
              </div>
            </div>
          </td>
          <td v-else class="ui_list_pic_37_tbody_contentTitle" @click="toContent(item)">{{item[keys.resName] || display.noData || '暂无数据'}}</td>
          <!-- <td v-if="item[keys.pubResType] == display.audio">哈哈</td> -->
          <td>{{item[keys.created] | formatDateNEW}}</td>
        </tr>
      </tbody>
    </table>
    <div class="ui_list_pic_37_resourcelists_nodata" v-if="tBodyList && tBodyList.length == 0">{{getStaticText('noData') ? getStaticText('noData') : '暂无数据'}}</div>
    <ui_pagination v-if="tBodyList.length>0"  :page-sizes="CONFIG.pageSizes" :pageMessage="{totalCount}" :excuteFunction="paging">
    </ui_pagination>
  </div>
</template>

<script>
  import PROJECT_CONFIG from "projectConfig";
  import { Get, Post, getFieldAdapter, toOtherPage } from "@common";
  import { mapGetters } from 'vuex';
  import URL from "url";
  import * as interfaces from "@work/login/common/interfaces.js";
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
          currentIndex: -1,  //控制tab样式切换的  默认显示全部（-1）
          CONFIG: null,  //获取配置
          display: {},  //展示静态文本的
          keys: {},  //字段配置
          totalCount: '0',  //总页数
          pageNo: '',
          pageSize: '',
          tempItem: '', //临时保存数据
          zipAttachment: {},  //存储附件
          zipAttachmentId: '',  //存储附件Id
          allCols:'',//站点栏目树
          orderBy:''
        };
      },
      created(){
        this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.list_pic_37[this.modulename];
        this.keys = getFieldAdapter(this.CONFIG.sysAdapter, this.CONFIG.typeAdapter);
        this.display = this.CONFIG.display;
        this.resourceTitle = this.display.resourceTitle;
        let _self = this;
        if(this.CONFIG && this.CONFIG.showLang && this.CONFIG.showLang ==='Korean'){    //朝鲜语
        //将栏目树中的二级栏目传进来，在本组件中渲染三级栏目
        this.$bus.$on(_self.CONFIG.transTitle,function (item) {
            _self.resourceTitle = item.code;
            //渲染三级栏目
            _self.showThreeColumn(item, true);
          });
          //用于初次加载，默认渲染tree中的第一个栏目中的数据
          this.$bus.$on(_self.CONFIG.transDefaultColId,function (item) {
            _self.resourceTitle = item.code;
            _self.getListByColumnId(item);
          });
        }else{
          //将栏目树中的二级栏目传进来，在本组件中渲染三级栏目
          this.$bus.$on(_self.CONFIG.transTitle,function (item) {
          _self.resourceTitle = item.name;
          _self.currentIndex = -1
          //渲染三级栏目
          _self.showThreeColumn(item, true);
        });
        //用于初次加载，默认渲染tree中的第一个栏目中的数据
        this.$bus.$on(_self.CONFIG.transDefaultColId,function (item) {
          _self.resourceTitle = item.name;
          _self.getListByColumnId(item);
        });
        }
          // 获取location搜索变量
          this.locationQuery = URL.parse(document.URL, true).query;
        // 初始加载
        if(this.CONFIG.isAutoLoad){
          this.autoLoad();
        }
        // 广播排序
        this.$bus.$on(_self.CONFIG.eventName_loadDate,function(item){
          _self.orderBy = item.orderBy;
          _self.autoLoad();
        });
      },
      mounted(){

      },
      computed: {
        ...mapGetters("login", {
          member: interfaces.GET_MEMBER,
        })
      },
      methods: {
        // autoLoad
        autoLoad(){
          let params = Object.assign({},this.CONFIG.getList.params);
          params.pageSize = this.pageSize ? this.pageSize : params.pageSize;
          params.pageNo = this.pageNo ? this.pageNo : params.pageNo;
          params.orderBy = this.orderBy ? this.orderBy : params.orderBy;
          // 模糊查询
          var newSearchText =this.locationQuery.searchText || '';
          let searchText = '';
          if (this.CONFIG.isMoreFieldSearch && this.CONFIG.isMoreFieldSearch.length > 0) {
            for (var i=0;i<this.CONFIG.isMoreFieldSearch.length;i++){
              searchText = searchText+' '+this.CONFIG.isMoreFieldSearch[i]+":"+"*"+newSearchText+"*";
              if(i<(this.CONFIG.isMoreFieldSearch.length-1)){
                searchText = searchText + ' OR ';
              }
            }
          }else{
            searchText = newSearchText;
          }
          params.searchText = searchText;
          Post(CONFIG.BASE_URL + this.CONFIG.getList.url, params).then((rep) => {
            this.totalCount = rep.data.totalCount;
            if(rep.data.success && rep.data.result && rep.data.result.length > 0){
              this.tBodyList = rep.data.result;
            }
          });
        },
        //切换tab
        changeTab(item,index){
          this.currentIndex = index;
          //将栏目暂存起来，用于翻页时，给getListByColumnId传递参数
          this.tempItem = Object.assign({},item);
          this.getListByColumnId(item);
        },
        showThreeColumn(item, initPagination){
          //点击栏目时，先清空tab和数据列表
          this.tabList = [];
          this.tBodyList = [];
          //如果点击的是二级栏目，则将二级栏目下的三级栏目渲染在tab列表中
          if(item.parentId != this.CONFIG.colId && item.childNav){
            this.tabList = item.childNav;
          }
          //通过栏目id获取栏目下的数据
          this.getListByColumnId(item, initPagination);
        },
        //通过栏目id获取栏目下的数据
        getListByColumnId(item, initPagination){
          //先清理数据
          this.tBodyList = [];
          let colId = item.id;
          let paramCols = '';
          if (this.CONFIG.getList.isGetSubColsData) {
            if (this.allCols) {//判断是否缓存栏目树数据
              let alls = [colId];
              paramCols = this.getSubCol([colId],alls).join(' ')
            } else {
              /* 获取栏目树后再重新调用当前方法 */
              this.getAllCols().then(resp => {
                this.allCols = resp.data.data;
                this.getListByColumnId(item,initPagination)
              })
              return
            }
          } else {
            paramCols = colId
          }
          

          this.tempItem = Object.assign({},item);
          let params = Object.assign({},this.CONFIG.getList.params);
          if(!initPagination) { // 每次切换左侧菜单接受广播的时候都要把pageNo改成1
            params.pageNo = this.pageNo ? this.pageNo : params.pageNo;
          }
          params.pageSize = this.pageSize ? this.pageSize : params.pageSize;
          params.conditions="[{pub_col_id:"+paramCols+",op:'in'}]";
          Post(CONFIG.BASE_URL + this.CONFIG.getList.url, params).then((rep) => {
            this.totalCount = rep.data.totalCount;
            if(rep.data.success && rep.data.result && rep.data.result.length > 0){
              this.tBodyList = rep.data.result;
            }
          });

          
        },
        /* 获取站点栏目树 */
        getAllCols(){
          let url = this.CONFIG.getAllCols ?  this.CONFIG.getAllCols.url : 'spc/cms/col/getAllColBySiteId.do';
          let configParams = this.CONFIG.getAllCols ?  this.CONFIG.getAllCols.params : {}
          let params =  Object.assign({
            siteId:CONFIG.SITE_CONFIG.siteId,
            chId:0
          },configParams);
          return Get(CONFIG.BASE_URL + url,{ params })
        },
        /* 查找栏目的所有子栏目  递归 */
        getSubCol(container,subs,cols = this.allCols){
          let _this = this;
          subs.forEach(element => {
              let subCols = []
              cols.forEach(item=>{
                if (element == item.parentId) {
                  subCols.push(item.id);
                  container.push(item.id);
                }
              })
              if (subCols.length > 0) {
                _this.getSubCol(container,subCols)
              }
          });
          return container
        },
        paging ({ pageNo, pageSize }) {
          this.pageNo = pageNo;
          this.pageSize = pageSize;
          if(this.CONFIG.isAutoLoad){
            this.autoLoad();
          }else{
            this.getListByColumnId(this.tempItem);
          }
        },
        toContent(item){
          switch (item[this.keys.pubResType]) {
            case this.display.audio:  //去播放音频
              let audioParams = Object.assign({},this.CONFIG.toPlayAudio.params);
              window.open(toOtherPage(item,this.CONFIG.toPlayAudio,this.keys)+'&mediaResId='+item[audioParams.audioResId]);
              break;
            case this.display.video:  //去播放视频
              //把video_resource_id传给视频播放器，因为播放单个视频时需要这个id
              let videoParams = Object.assign({},this.CONFIG.toPlayVideo.params);
              window.open(toOtherPage(item,this.CONFIG.toPlayVideo,this.keys)+'&mediaResId='+item[videoParams.videoResId]);
              break;
            case this.display.download:  //资料库包含pdf附件和zip包附件
              let columns = this.CONFIG.downloadColumns;   // 附件为zip需要去下载的栏目
              if(columns.includes(item[this.keys.colId])){
                this.getZipAttachment(item,this.CONFIG.attachType.download);
              }else {
                // 附件为pdf需要在线阅读的栏目
                this.getZipAttachment(item,this.CONFIG.attachType.pdf);
              }
              break;
          }
        },
        getZipAttachment (item,attachType) { // 获取附件
          let paramsObj = Object.assign({}, this.CONFIG.getZipAttachment.params);
          paramsObj.pubId = item.id;
          paramsObj.attachTypes = attachType;
          Get(CONFIG.BASE_URL + this.CONFIG.getZipAttachment.url + '?pubId=' + paramsObj.pubId + '&loginName=' + (this.member.loginName?this.member.loginName:'') + '&siteId=' + CONFIG.SITE_CONFIG.siteId + '&attachTypes=' + paramsObj.attachTypes).then((rep) => {
            let datas = rep.data;
            if (datas.result == '1' && datas.data) {
              this.zipAttachment = datas.data;

              if(this.zipAttachment[paramsObj.attachTypes]){
                if(paramsObj.attachTypes == this.CONFIG.attachType.download){
                //获取到需要下载的资源的ID
                this.zipAttachmentId = this.zipAttachment[paramsObj.attachTypes][0][this.keys.fileRecordID];
                if(this.zipAttachmentId){
                  this.toDownload();
                }
                }else if(paramsObj.attachTypes == this.CONFIG.attachType.pdf){
                  // 如果附件是PDF，那么直接取第一个，去阅读器阅读
                  let attachList = this.zipAttachment[paramsObj.attachTypes][0]
                  let params = Object.assign({},this.CONFIG.toEbook.params) ;
                  let url = CONFIG.READ_URL + '?bookId=' + attachList['docID'] + '&readType=' + params.readType + '&bookName=' + attachList['attachName'] + '&userName=&siteType=' + CONFIG.READ_CONFIG.siteType + '&doclibCode=ZILIAOKU';
                  window.open(url);
              }
                
            }
            }
          });
        },
        toDownload(){  //通过附件的fileRecordID字段下载附件
          let url = CONFIG.BASE_URL + this.CONFIG.toDownload.url + '?recordID=' + this.zipAttachmentId;
          window.open(url,"_self");
        },
        changeShow(item){  //类型文字展示转换
          switch(item[this.keys.pubResType]){
            case this.display.video: return this.display.videShow; break;
            case this.display.audio: return this.display.audioShow; break;
            case this.display.download: 
              let columns = this.CONFIG.downloadColumns; 
              if(columns.includes(item[this.keys.colId])){
                return this.display.downloadShow; 
              }else {
                return this.display.bookShow; 
          }
              break;
          }
        },
        changeIconName(item){
          switch(item[this.keys.pubResType]){
            case this.display.video: return this.display.videIconShow; break;
            case this.display.audio: return this.display.audioIconShow; break;
            case this.display.download: 
              let columns = this.CONFIG.downloadColumns; 
              if(columns.includes(item[this.keys.colId])){
                return this.display.downloadIconShow; 
              }else {
                return this.display.bookIconShow; 
          }
              break;
        }
      },
      getStaticText (text) {
      if (
        this.CONFIG &&
        this.CONFIG.staticText &&
        this.CONFIG.staticText[text]
      ) {
        return this.CONFIG.staticText[text];
      } else {
        return false;
      }
    }
    }
    }
</script>

<style scoped>
.active {
  background-color: dodgerblue;
  color: #ffffff;
}
.ui_list_pic_37_tbody_contentTitle {
  cursor: pointer;
  text-decoration: underline;
}
</style>
