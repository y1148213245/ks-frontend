<template>
  <footer class="footer" style="margin-top:24px">
    <div class="container">
      <div class="col-md-6">版权所有：方正电子   2016-2017   |   备案序号：ICP备05032912号
        </br>地址：北京海淀区上地五街9号  |   电话：54044520</div>
      <div class="col-md-6 tright"><a href="#">关于我们</a>   |    <a href="#">联系我们</a>   |    <a href="#">招聘启事</a>    |    <a href="#">版权声明</a></div>
    </div>
  </footer>
</template>

<script>

	export default {
		name: 'footer_component',
		reused: true,
	}
</script>

<style>
  .footer {
    position: relative;
    margin-top: 24px;
    color: #7F7F7F;
    font-size: 12px;
  }
  .footer .container{border-top:2px solid #7F7F7F;padding: 16px 0px 24px 0px;}
  .tright a{color:#AE0F29;}
  .tright a:hover{color: #000;}
  .tright{
    text-align: right !important;
  }
</style>
