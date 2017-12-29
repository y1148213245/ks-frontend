<template>
	<section id="content">
		<div class="content-wrap">
			<div class="container clearfix">
				<div class="accordion accordion-lg divcenter nobottommargin clearfix" style="max-width: 550px;">
					<!-- 登陆 -->
					<div class="acctitle">
						<i class="acc-closed icon-lock3"></i>
						<i class="acc-open icon-unlock"></i>登 录
					</div>
					<div class="acc_content clearfix">
						<work_login_02_login></work_login_02_login>
					</div>
					<!-- END 登陆 -->

					<!-- 注册 -->
					<div class="acctitle">
						<i class="acc-closed icon-user4"></i>
						<i class="acc-open icon-ok-sign"></i>未注册? 创建账号
					</div>
					<div class="acc_content clearfix">
						<work_login_02_register></work_login_02_register>
					</div>
					<!-- END 注册 -->
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		name: "components_login_login",
		reused: true,
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
</style>