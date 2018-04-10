<template>
  
</template>


<script>
import { Get } from "@common";
import axios from "axios";
export default {
  name: "third_party_logout",
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

    Get( "/logout.do").then(function(rep) {
      window.localStorage.removeItem("token");
      window.sessionStorage.removeItem("token");
      window.location.href = _this.url;
    });
  }
};
</script>
