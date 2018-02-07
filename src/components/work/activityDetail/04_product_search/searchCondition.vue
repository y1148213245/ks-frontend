<!-- 作品搜索条件组件 -->
<template>
  <el-row class="work_activitydetail_04">
    <el-col class="work_activitydetail_04-label" :span="2">地区：</el-col>
    <el-col :span="6">
      <el-select v-model="formData.school" placeholder="地区" style="width:100%">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-col>

    <el-col class="work_activitydetail_04-label" :span="2">学校：</el-col>
    <el-col :span="6">
      <el-select v-model="formData.school" placeholder="学校" style="width:100%">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-col>

    <el-col class="work_activitydetail_04-label" :span="2">组别：</el-col>
    <el-col :span="6">
      <el-select v-model="formData.group" placeholder="组别" style="width:100%">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
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
export default {
  name: 'work_activitydetail_04',
  reused: true,
  props: {},
  data () {
    return {
      formData: {
        place: '',
        school: '',
        group: '',
        searchText: '',
      }
    };
  },

  computed: {},

  created () { },

  mounted () { },

  methods: {
    onSubmit(){

    }
  }
}

</script>
<style>
.work_activitydetail_04{

}
.work_activitydetail_04-label{
 height: 40px;
 line-height: 40px;
 text-align: center;
}
.work_activitydetail_04 .el-col{
  margin-top: 10px;
}
.work_activitydetail_04-button_box{
  text-align: center;
}
</style>
