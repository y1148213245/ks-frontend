<template>
	<div>

	</div>
</template>
<script type="text/ecmascript-6">
	import URL from "url";

	export default {
		name: "components_recommend_handleurl",
		reused: true,
		mounted: function () {
			var query = URL.parse(document.URL, true).query;
			this.$bus.$emit("toClassification", query.cascadeId);
		}
	}
</script>
<style>

</style>
