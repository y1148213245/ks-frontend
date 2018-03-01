<!-- 作品搜索条件组件 -->
<template>
  <el-row class="work_activitydetail_04">
    <el-col class="work_activitydetail_04-label" :span="2">地区：</el-col>
    <el-col :span="6">
      <el-select v-model="formData.place" placeholder="地区" style="width:100%" @change="updateSchool">
        <el-option v-for="(option,index) in placeArr" :label="option" :value="option" :key="index"></el-option>
      </el-select>
    </el-col>

    <el-col class="work_activitydetail_04-label" :span="2">学校：</el-col>
    <el-col :span="6">
      <el-select v-model="formData.school" placeholder="学校" style="width:100%">
        <el-option label="全部" value="0"></el-option>
         <el-option v-for="(option,index) in schoolArr" :label="option" :value="option" :key="index"></el-option>
      </el-select>
    </el-col>

    <el-col class="work_activitydetail_04-label" :span="2">组别：</el-col>
    <el-col :span="6">
      <el-select v-model="formData.group" placeholder="组别" style="width:100%">
         <el-option v-for="(option,index) in groupArr" :label="option" :value="option" :key="index" @change="updateSchool"></el-option>
      </el-select>
    </el-col>

    <el-col class="work_activitydetail_04-label" :span="2">搜索：</el-col>
    <el-col :span="16">
     <el-input v-model="formData.searchText" placeholder="搜索" label="搜索："></el-input>
    </el-col>

    <el-col class="work_activitydetail_04-button_box" :span="6">
      <el-button type="primary" @click="onSubmit" style="width:80%">搜索</el-button>
    </el-col>
    
</el-row>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Get } from "@common";
export default {
  name: 'work_activitydetail_04',
  reused: true,
  props: {
    namespace: String
  },
  data () {
    return {
      projectConfig: null,
      keys: null,
      formData: {
        place: '',
        school: '',
        group: '',
        searchText: '',
      },
      placeArr: [],
      groupArr: [],
      schoolArr:[],
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.projectConfig.isDevelopment ? this.loadDatas() : this.$bus.on(this.projectConfig.eventName_listenLoadedData, this.loadDatas);
  },

  mounted () { },

  methods: {
    initConfig () {
      this.projectConfig = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_04;
      this.keys = this.projectConfig.keys;
    },
    loadDatas () {
      let url = this.projectConfig.url;
      Get(url).then((resp) => {
        let data = resp.data;
        if (data.AREALIMT) {
          this.placeArr = data.AREALIMT.split(';')
        }
        if (data.CLASSLIMT) {
          this.groupArr = data.CLASSLIMT.split(';')
        }
      })
    },
    updateSchool () {

      let doclibCode = this.keys.getSchoolRequest_doclibCode + '=' + this.projectConfig.params.getSchoolRequest_doclibCode;//配库码
      let relations = this.keys.getSchoolRequest_relations + '=' + this.projectConfig.params.getSchoolRequest_relations;//并且，或者
      let cols = this.keys.getSchoolRequest_cols + '=' + this.projectConfig.params.getSchoolRequest_cols;//字段名
      let symbols = this.keys.getSchoolRequest_symbols + '=' + this.projectConfig.params.getSchoolRequest_symbols;//匹配模式，包含，等于，不等于
      let vals = this.keys.getSchoolRequest_vals + '=' + this.formData.place + ',' + this.formData.group;//值

      let url = this.projectConfig.getSchoolUrl + '?' + doclibCode + '&' + relations + '&' + cols + '&' + symbols + '&' + vals
      Get(url).then((resp) => {
        this.schoolArr = resp.data.content
      })
    },
    onSubmit () {
      let formData = this.formData;
      let keys = this.keys;

      let param = {
        [this.keys.place]: formData.place,
        [this.keys.school]: formData.school,
        [this.keys.group]: formData.group,
        [this.keys.searchText]: formData.searchText,
      }
      this.$bus.emit(this.projectConfig.eventName_search, param);
    }
  }
}

</script>
<style>
.work_activitydetail_04 {
}
.work_activitydetail_04-label {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.work_activitydetail_04 .el-col {
  margin-top: 10px;
}
.work_activitydetail_04-button_box {
  text-align: center;
}
</style>
