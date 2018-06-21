<!-- 作品搜索条件组件 -->
<template>
  <div class="work_activitydetail_04">
    <div class="work_activitydetail_04-place" v-if="showItem('place')">
      <label class="work_activitydetail_04-label">地区：</label>
      <!-- 级联组件 -->
      <work_common_05 :namespace="namespace" modulename="contestants_area" :currentarea.sync="formData.place" :areastr="placeArr" ref="cascader" :config="CONFIG.cascaderConfig"></work_common_05>
      <!-- END 级联组件 -->
    </div>

    <div class="work_activitydetail_04-group" v-if="showItem('group')">
      <label class="work_activitydetail_04-label">组别：</label>
      <el-select v-model="formData.group" filterable placeholder="组别" @change="updateSchool">
        <el-option label="全部" value=""></el-option>
        <el-option v-for="(option,index) in groupArr" :label="option" :value="option" :key="index"></el-option>
      </el-select>
    </div>

    <div class="work_activitydetail_04-school" v-if="showItem('school')">
      <label class="work_activitydetail_04-label">学校：</label>
      <el-select v-model="formData.school" filterable placeholder="学校">
        <el-option label="全部" value=""></el-option>
        <el-option v-for="(option,index) in schoolArr" :label="option[keys.school_name]" :value="option[keys.school_name]" :key="index"></el-option>
      </el-select>
    </div>

    <div class="work_activitydetail_04-topic" v-if="showItem('topic')">
      <label class="work_activitydetail_04-label">标题搜索：</label>
      <el-input v-model="formData.searchText" placeholder="标题" @keyup.enter.native="onSubmit"></el-input>
    </div>

    <div class="work_activitydetail_04-author" v-if="showItem('author')">
      <label class="work_activitydetail_04-label">参赛人：</label>
      <el-input v-model="formData.author" placeholder="参赛人" @keyup.enter.native="onSubmit"></el-input>
    </div>

    <div class="work_activitydetail_04-id" v-if="showItem('idCard')">
      <label class="work_activitydetail_04-label">身份证：</label>
      <el-input v-model="formData.idCard" placeholder="身份证" @keyup.enter.native="onSubmit"></el-input>
    </div>

    <div class="work_activitydetail_04-button_box">
      <el-button type="primary" @click="onSubmit">搜索</el-button>
    </div>

  </div>
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
      CONFIG: null,
      keys: null,
      formData: {
        place: '',
        school: '',
        group: '',
        searchText: '',
        author: '',
        idCard: ''
      },
      placeArr: "",
      groupArr: [],
      schoolArr: [],
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.CONFIG.isDevelopment ? this.loadDatas() : this.$bus.on(this.CONFIG.eventName_listenLoadedData, this.loadDatas);
  },

  mounted () { },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_04;
      this.keys = this.CONFIG.keys;
    },
    loadDatas (activityDetail) {
      let doclibCode = this.keys.getPlaceRequest_doclibCode + '=' + this.CONFIG.params.getPlaceRequest_doclibCode;
      let docID = this.keys.getPlaceRequest_docID + '=' + activityDetail[this.keys.eventData_docID];

      let url = this.CONFIG.url + '?' + doclibCode + '&' + docID;
      Get(CONFIG.BASE_URL + url).then((resp) => {
        let data = resp.data;
        if (data[this.keys.getPlaceRequestBack_areas]) {
          this.placeArr = data[this.keys.getPlaceRequestBack_areas];
          this.$nextTick(() => {
            this.$refs['cascader'].loadData();
          })
        }
        if (data[this.keys.getPlaceRequestBack_classes]) {
          this.groupArr = data[this.keys.getPlaceRequestBack_classes].split(';');
        }
      })
    },
    showItem (item) {
      if (!this.CONFIG.showItem) {
        return true
      }
      if (this.CONFIG.showItem.indexOf(item) > -1) {
        return true
      } else {
        return false
      }
    },
    updateSchool () {
      this.schoolArr = []
      if (this.formData.place) {
        let doclibCode = this.keys.getSchoolRequest_doclibCode + '=' + this.CONFIG.params.getSchoolRequest_doclibCode;//配库码
        let relations = this.keys.getSchoolRequest_relations + '=' + this.CONFIG.params.getSchoolRequest_relations;//并且，或者
        let cols = this.keys.getSchoolRequest_cols + '=' + this.CONFIG.params.getSchoolRequest_cols;//字段名
        let symbols = this.keys.getSchoolRequest_symbols + '=' + this.CONFIG.params.getSchoolRequest_symbols;//匹配模式，包含，等于，不等于
        let vals = this.keys.getSchoolRequest_vals + '=' + this.formData.place + ',' + this.formData.group;//值

        let url = this.CONFIG.getSchoolUrl + '?' + doclibCode + '&' + relations + '&' + cols + '&' + symbols + '&' + vals + '&page=0&size=999';
        Get(CONFIG.BASE_URL + url).then((resp) => {
          this.formData.school = '';//清空学校
          this.schoolArr = resp.data.content;
        })
      }

    },
    onSubmit () {
      let formData = this.formData;

      let param = {
        [this.keys.output_place]: formData.place,
        [this.keys.output_school]: formData.school,
        [this.keys.output_group]: formData.group,
        [this.keys.output_searchText]: formData.searchText,
        [this.keys.output_author]: formData.author,
        [this.keys.output_idCard]: formData.idCard
      }

      this.$bus.emit(this.CONFIG.eventName_search, param);
    }
  },
  watch: {
    'formData.place' (nv, ov) {
      this.updateSchool();
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
.work_activitydetail_04 .div {
  margin-top: 10px;
}
.work_activitydetail_04-button_box {
  text-align: center;
}
</style>
