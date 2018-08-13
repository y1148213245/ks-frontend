
<template>
  <section class="personalcenter-comment-box">
    <!-- <div>{{myComment}}</div> -->
    <div class="personalcenter-comment-data" v-if="myComment.data && myComment.data.length > 0">
      <div class="personalcenter-comment-table">
        <el-table border :data="myComment.data" style="width: 100%">
          <el-table-column label="商品信息" align="center" width="250">
            <template slot-scope="scope">
              <div @click="toDetail(scope.row)" class="personalcenter-comment-firstcol">
                <div class="personalcenter-comment-firstcol-img"><img :src="scope.row.smallPic"></div>
                <h4 class="personalcenter-comment-firstcol-name">{{scope.row.productName}}</h4>
              </div> 
            </template>
          </el-table-column>
          <el-table-column label="评论详情" prop="" align="center">
          </el-table-column>
          <el-table-column label="评论时间" prop="ruleValue" align="center" width="180">
            <template slot-scope="scope">
              <span>{{formatDateNEW(Number(scope.row.pubTime))}}</span>
            </template>
          </el-table-column>
          <el-table-column label="删除" prop="createTime" align="center" width="150">
            <template slot-scope="scope">
              <button class="personalcenter-comment-delete" @click="deleteComment(scope.row)">删除</button>
            </template>
          </el-table-column>
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
  props: ["namespace"],
  data () {
    return {
      // readConfig: READ_CONFIG
    };
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
    pagingF: function ({ pageNo, pageSize }) {
      var param = {
        pageIndex: pageNo,
        pageSize: pageSize,
        type: 2
      };
      this.$store.dispatch("personalCenter/getMyComment", param);
    },
    toDetail(data){
      console.log(data);
    },
    deleteComment(data){
      console.log(data);
    },
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

.personalcenter-message-nodata {
  text-align: center;
  font-size: 16px;
  color: #999;
}
.personalcenter-message-nodata img {
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
  position: relative;
  margin:10px;
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
