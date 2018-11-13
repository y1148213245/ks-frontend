
<template>
  <section class="personalcenter-comment-box">
    <!-- <div>{{myComment}}</div> -->
    <div class="personalcenter-comment-data" v-if="myComment.data && myComment.data.length > 0">
      <div class="personalcenter-comment-table">
        <el-table border :data="myComment.data" style="width: 100%">
          <el-table-column label="商品信息" align="center" width="250">
            <template slot-scope="scope">
              <div @click="toDetail(scope.row)" class="personalcenter-comment-firstcol">
                <div class="personalcenter-comment-firstcol-img"><img :src="scope.row.smallPic || require('@static/img/defaultCover.png')"></div>
                <h4 class="personalcenter-comment-firstcol-name">{{scope.row.productName}}</h4>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="评论详情" prop="" align="center">
            <template slot-scope="scope">
              <span>{{scope.row.discussContent}}</span>
            </template>
          </el-table-column>
          <el-table-column label="评论时间" prop="ruleValue" align="center" width="180">
            <template slot-scope="scope">
              <span>{{scope.row.discussTime}}</span>
            </template>
          </el-table-column>
          <!-- <el-table-column label="删除" prop="createTime" align="center" width="150">
            <template slot-scope="scope">
              <button class="personalcenter-comment-delete" @click="deleteComment(scope.row)">删除</button>
            </template>
          </el-table-column> -->
        </el-table>
      </div>
      <div class="personalcenter-comment-page">
        <ui_pagination :pageMessage="{totalCount: this.myComment.data && this.myComment.totalCount - 0 || 0}" :excuteFunction="pagingF" :page-sizes="[5]"></ui_pagination>
      </div>
    </div>
    <div v-else class="personalcenter-comment-nodata">
        <img src="../../assets/img/empty.png" alt="">
        <div>暂无评论</div>
      </div>

  </section>
</template>
<script type="text/ecmascript-6">
import { mapGetters, mapActions } from "vuex";
import moment from "moment"
export default {
  name: "comment",
  reused: true,
  props: ["namespace", "parentConfig"],
  data () {
    return {
      // readConfig: READ_CONFIG
      CONFIG:{}   //获取父元素配置
    };
  },
  created() {
    this.CONFIG = this.parentConfig.comment;
  },
  mounted: function () {
    this.$store.dispatch("personalCenter/queryUser", {
      loadedCallBack: this.loadedCallBack
    });
  },
  computed: {
    ...mapGetters("personalCenter/", {
      myComment: "getMyComment"
    })
  },
  methods: {
    loadedCallBack () {
      var param = {
        pageIndex: 1,
        pageSize: 5,
        type: 2
      };
      this.$store.dispatch("personalCenter/getMyComment", param);
    },
    // 获取每页数据
    pagingF: function ({ pageNo, pageSize }) {
      var param = {
        pageIndex: pageNo,
        pageSize: pageSize,
        type: 2
      };
      this.$store.dispatch("personalCenter/getMyComment", param);
    },
    // 去详情页
    /*toDetail(data){
    	debugger;
      console.log(data);//productType pubId  colId
      if(data.productType && this.CONFIG.detailUrl && this.CONFIG.detailUrl[data.productType]){
        window.open(this.CONFIG.detailUrl[data.productType] + "?pubId=" + data.pubId);
      }
    },*/
	  //新增去详情页
	  toDetail(data){
		  window.location.href = "../pages/bookdetail.html?pubId=" + data.pubId;
	  },
    // 删除评论
    // deleteComment(data){
    //   console.log(data);
    // },
    // 转换时间类型
    formatDateNEW(value) {
      if (value) {
        return moment(Number(value)).format("YYYY-MM-DD HH:mm:ss"); // 只接收Number类型
      } else {
        return '暂无日期';
      }
    }
  }
};
</script>
<style scoped>

.personalcenter-comment-nodata {
  text-align: center;
  font-size: 16px;
  color: #999;
}
.personalcenter-comment-nodata img {
  width: 150px;
  margin-bottom: 20px;
}
.personalcenter-comment-delete{
  border:none;
  background:none;
  cursor: pointer;
}
.personalcenter-comment-delete:hover{
  color:#ff2222;
}
.personalcenter-comment-firstcol{
  height:200px;
}
.personalcenter-comment-firstcol-img{
  height:150px;
  width: 150px;
  margin: 10px auto;
  position: relative;
  overflow: hidden;
}
.personalcenter-comment-firstcol-img img{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
.personalcenter-comment-firstcol-name{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 90%;
  margin: 0 auto;
}



</style>
