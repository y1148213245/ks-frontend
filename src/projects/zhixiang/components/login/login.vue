<template>
	<section id="content">
		<div class="content-wrap">
			<div class="container clearfix">

        <el-collapse v-model="activeNames" accordion  @change="change">
          <el-collapse-item title="登 录" :class="isShow?'icon-lock3':'icon-unlock'" name="1" >
            <div class="acc_content clearfix">
              <work_login_02_login :namespace = "namespace"></work_login_02_login>
            </div>
          </el-collapse-item>
          <el-collapse-item title="未注册? 创建账号" :class="isOpen ?'icon-user4':'icon-ok-sign'" name="2" >
            <div class="acc_content clearfix">
              <work_login_02_register :namespace = "namespace"></work_login_02_register>
            </div>
          </el-collapse-item>
        </el-collapse>

      </div>
		</div>
	</section>
</template>
<script>
	export default {
		name: "components_login_login",
		reused: true,
    props:["namespace"],
		data() {
			return {
				activeNames: ['1'],
        isShow:false,
        isOpen:true,
			};
		},
		methods:{
			change:function () {
        this.isShow =!(this.isShow );
				this.isOpen =!(this.isOpen );
			},
    }
	};
</script>
<style scoped>

	.captcha input {
		display: inline-block;
		border-radius: 3px;
		height: 36px;
	}

	.captcha .input1 {
		width: 150px;
	}

	#code {
		width: 80px;
		font-family: Arial;
		font-style: italic;
		font-weight: bold;
		border: 0;
		letter-spacing: 2px;
		color: #33938d;
	}
  .el-collapse-item.is-active .el-collapse-item__header .el-collapse-item__arrow{
    display: none !important;
  }
</style>