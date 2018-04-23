/**
 * Created by codingnuts on 2017/12/27.
 */

export default {
  validateLogin: (rule, value, callback) => {
    if (value === " " || value === "") {
      callback(new Error("请输入邮箱"));
    } else if (value == 1) {
      // 开发账号
      callback();
    } else if (
      value !=
      value.match(
        /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
      )
    ) {
      // 开发账号
      callback(new Error("请输入正确邮箱格式"));
    } else {
      callback();
    }
  },
  validatePassWord: (rule, value, callback) => {
    if (value === "") {
      callback(new Error("请输入密码"));
    } else if (value == 1) {
      //开发密码
      callback();
    } else if (value.length <= 5 || value.length >= 17) {
      //开发密码
      callback(new Error("密码在6-16位字符"));
    } else {
      callback();
    }
  },
  validateEmail: (rule, value, callback) => {
    if (value === "") {
      callback(new Error("请输入邮箱"));
    } else if (
      value !=
      value.match(
        /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
      )
    ) {
      callback(new Error("请输入正确邮箱格式"));
    } else {
      callback();
    }
  },
  validatePass2: (rule, value, callback) => {
    let i;
    let char;
    let badword;
    badword = ';|<>`&!*(~^)#?:"/$=\\' + "'";

    if (value === "") {
      callback(new Error("请输入密码"));
    } else if (value.length <= 5) {
      callback(new Error("密码至少为6位数"));
    } else if (value.length >= 17) {
      callback(new Error("密码最多为16位数"));
    } else {
      let result = true;
      for (i = 0; i < value.length; i++) {
        char = value.charAt(i);
        if (badword.indexOf(char) >= 0) {
          callback(
            new Error('格式错误，密码仅支持汉字、字母、数字、"-"、"_"的组合')
          );
          result = false;
          break;
        }
      }
      result ? callback() : "";
    }
  },
  //   姓名校验
  nameCheck: (rule, value, callback) => {
    if (!value || !/^[A-Za-z\u4e00-\u9fa5]{2,20}$/i.test(value)) {
      callback(new Error("请输入2-20个字母或汉字"));
    } else {
      callback();
    }
  },
  //   身份证校验
  IDCheck: (rule, value, callback) => {
    if (
      !value ||
      !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(
        value
      )
    ) {
      callback(new Error("身份证号格式错误"));
    } else if (value.length == 18) {
      value = value.split("");
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      var parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0;
      var ai = 0;
      var wi = 0;
      for (var i = 0; i < 17; i++) {
        ai = value[i];
        wi = factor[i];
        sum += ai * wi;
      }
      var last = parity[sum % 11];
      if (parity[sum % 11] != value[17]) {
        callback(new Error("请输入正确的身份证号"));
      } else {
        callback();
      }
    } else {
      callback();
    }
  },
  //   手机号校验
  mobileCheck: (rule, value, callback) => {
    if (!value || !/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(value)) {
      callback(new Error("请输入正确手机号"));
    } else {
      callback();
    }
  }
};
