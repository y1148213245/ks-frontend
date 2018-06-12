/*
 * @Author: yan.chaoming 
 * @Date: 2017-12-25 18:27:14 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-01-02 09:22:23
 */

const dev = {
  name: "login",
  login: {
    components_login_content: {
      loginSuccess: []
    }
  }
};

const prod = {
  name: "login",
  login: {
    components_login_content: {
      loginSuccessHref: "./index.html" /* 登陆成功后转跳url */,
      loginSuccessDontHrefPage: {
        /* 登陆成功后判断前一页记录不回退的页面，并转跳指定url */
        dont: ["register.html", "register_success.html"],
        to: "./index.html"
      }
    }
  }
};
