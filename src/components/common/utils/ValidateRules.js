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
					callback(new Error('格式错误，密码仅支持汉字、字母、数字、"-"、"_"的组合'));
					result = false;
					break;
				}
			}
			result ? callback() : '';
		}

	}
}