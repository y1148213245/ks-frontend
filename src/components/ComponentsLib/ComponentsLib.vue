<template>
	<div class="common_components_lib">
		example 请参考 src/components/UI/list_pic/02_pic_list_download/js/example.js
		<img src="./screenshots/ui_list_pic_02.jpg" style="max-width: 200px; max-height: 200px;"/>
		<hr>
		{{this.examples}}
	</div>
</template>
<script type="text/ecmascript-6">
	import ScanExamples from "@common/scans/ScanExamples";

	export default {
		name: "common_components_lib",
		reused: true,
		data: function () {
			return {
				examples: {}
			}
		},
		mounted: function () {
			this.examples = ScanExamples();
		}
	};
</script>
<style>

</style>
