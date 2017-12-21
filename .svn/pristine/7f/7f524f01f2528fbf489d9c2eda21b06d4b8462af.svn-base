
function GetQueryString(name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
   var r = window.location.search.substr(1).match(reg);
   if (r!=null) return (r[2]); return null;
}

//更新购物车数量
function refreshCartSize(){
	var loginName;
	if(GetQueryString("loginName")!=null){
		loginName=GetQueryString("loginName");
		sessionStorage.setItem("loginName",GetQueryString("loginName"));
	}else{
		loginName=sessionStorage.getItem("loginName")
	}
	if(loginName!=null && loginName !=""){
		$.ajax({
			type : "get",
			cache:false, 
			url : "/mobilereader/cartlist1.do?pageIndex=0&loginName="+loginName,
			success: function(data){
				var cartsize=data.data;
				if(parseInt(cartsize) != NaN && parseInt(cartsize)>0){
					$("#gwcsize").show();
					$("#gwcsize").html(cartsize);
				}else{
					$("#gwcsize").hide();
				}	
			},
			error:function (e){
				console.log(e);
			}
		})
	}
}
refreshCartSize();

function showSearchBody(){
	if(document.getElementById("recommandBody").style.display!="none"){
		$("#searchBody").show();
		$("#recommandBody").hide();	
	}	
}
$(document).keydown(function(event){

	if(event.keyCode == 13){

		searchDeal();

	}	

});

function searchDeal(){

	var keyword = $("#searchText").val();

	if(keyword==""){

		alert("搜索的内容不能为空。");

		return false;

	}

	//window.location.href="/appsearch_1_"+keyword+".jhtml";

	window.open("/appsearch/index.jhtml?app=1&pageno=1&keyword="+encodeURI(encodeURI(keyword)));

}

function searchSubmit(){

	searchDeal();

}

function canCle(){

	$("#searchText").val("");

}

