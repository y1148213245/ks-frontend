<template>

    <el-cascader
      size="small"
      :options="options"
      v-model="selectedOptions"
      :change-on-select="true"
      :clearable="true"
      :filterable="true"
      @change="handleChange"
      >
    </el-cascader>

</template>

<script>
  import { CityInfo } from "@components/work/personalCenter/01_personalCenter/assets/js/city-data"
	export default {
		name: 'personalCenter_address',
		reused: true,
    props:['flag'],
		data () {
			return {
				options:[],      //数组
				selectedOptions:[] , //选取的值
      }
		},
    created(){
	    this.selectedOptions = [];
			this.options = CityInfo;
    },
    methods:{
	    handleChange(value){
	    	this.$bus.$emit("handleChange",this.selectedOptions);
      }
    }
	}
</script>

<style>
  .el-cascader input{
    width: 100% !important;
    border-radius: 0;
  }
</style>