<template>
  <div class="work_mobile_personalcenter_10">
    <booklist :namespace="namespace" :modulename="modulename"></booklist>
  </div>

</template>

<script>
	import booklist from '../08_booklist/booklist.vue'

	export default {
		name: 'work_mobile_personalcenter_10',
		props: ['namespace'],
		reused: true,
		data () {
			return {
				modulename:'collection'
			}
		},
		components:{
			booklist  //注册booklist组件
		}

	}
</script>

<style>

</style>