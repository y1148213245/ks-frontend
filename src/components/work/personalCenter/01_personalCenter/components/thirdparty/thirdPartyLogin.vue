<template>
  
</template>


<script>
import { Get } from "@common";
import axios from "axios";
export default {
  name: "third_party_login",
  reused: true,
  props: {
    namespace: String
  },
  created() {
    var _this = this;
    var getUrlStr = function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    };
    _this.token = getUrlStr("token");
    _this.url = getUrlStr("url");
    if (_this.token) {
      window.localStorage.setItem("token", _this.token);
      Get(BASE_URL + "checkToken.do").then(function(rep) {
        let datas = rep.data.data;
        if (datas && datas.checkStatus == "1") {
            window.location.href = _this.url;
        } else {
          console.log("登录失败");
        }
      });
    }
  }
};
</script>
