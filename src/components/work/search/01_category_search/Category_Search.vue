<template>
	<div class="search-area col-md-7 nopadding">
		<form>
			<div class="input-group">
				<div class="input-group-addon search-categories">
					<select name="category" id="product_cat" v-model="category">
						<option value="0" selected="">全 部</option>
						<option class="level-0" value="BOOK">图 书</option>
						<option class="level-0" value="information">资 讯</option>
					</select>
				</div>
				<div class="input-group-addon search-field-area">
					<input type="text" id="searchInput" class="search-field tt-input input-outline" style="outline: none;" value="" name="searchText" placeholder="输入书名或资讯关键字" autocomplete="off" spellcheck="false" v-model="searchText" @keyup.13="toSearch">
					<button type="button"  id="searchButton" @click="toSearch()"><i class="icon-search3"></i></button>
				</div>
			</div>
		</form>
	</div>
</template>
<script type="text/ecmascript-6">
	import URL from 'url';
	import PROJECT_CONFIG from "projectConfig";

	export default {
		name: "work_search_01_category_search",
		reused: true,
		props: ["namespace"],
		data(){
			return {
				searchText: '',
				category: '0',
				CONFIG: null
			}
		},
		mounted: function () {
			this.CONFIG = PROJECT_CONFIG.common.search.Category_Search;
			var query = URL.parse(document.URL, true).query;
			if (JSON.stringify(query) != "{}") {
				this.searchText = query.searchText || '';
				this.category = query.category || 0;
			}
		},
		methods: {
			toSearch(e) {
				window.location.href = this.CONFIG.searchHrefPage + "?searchText=" + this.searchText + "&category=" + this.category;
			},
		}
	};
</script>
<style>
	input-outline{
		border:0;
		outline:none;
	}
</style>
