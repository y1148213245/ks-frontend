<template>
	<div class="ui_pic_list_26">
		<template v-for="item in categoryList">
			<slot :item="item" >{{item}}</slot>
		</template>
	</div>
</template>
<script type="text/ecmascript-6">
	import axios from "axios";
	import URL from "url";
	import CONFIG from "projectConfig";

	export default {
		name: "ui_pic_list_26",
		reused: true,
		props: ["namespace"],
		data: function () {
			return {
				categoryList: [],
			}
		},
		created: function () {
			this.CATA_CONFIG = CONFIG[this.namespace].components.categoryList;
			this.queryCategory();
		},
		methods: {
			queryCategory: function () {
				axios.get(this.CATA_CONFIG.url)
						.then((response) => {
							if (response.data && response.data instanceof Array && response.data.length > 0) {
								this.categoryList = response.data;
							}
						}).catch(function (error) {
				});
			}
		}
	};
</script>
<style>

</style>
