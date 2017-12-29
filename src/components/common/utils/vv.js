let validateLogin = (rule, value, callback) => {
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
};
let validatePassWord = (rule, value, callback) => {
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
};
let validateEmail = (rule, value, callback) => {
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
		if (this.ruleForm.checkPassword !== "") {
			this.$refs.ruleForm.validateField("checkPassword");
		}
		callback();
	}
};
let validatePass2 = (rule, value, callback) => {
	let i;
	let char;
	let badword;
	badword = ';|<>`&!*(~^)#?:"/$=\\' + "'";
	for (i = 0; i < value.length; i++) {
		char = value.charAt(i);
	}
	if (badword.indexOf(char) >= 0) {
		callback(new Error('格式错误，密码仅支持汉字、字母、数字、"-"、"_"的组合'));
	} else if (value === "") {
		callback(new Error("请输入密码"));
	} else if (value.length <= 5) {
		callback(new Error("密码至少为6位数"));
	} else if (value.length >= 17) {
		callback(new Error("密码最多为16位数"));
	} else {
		if (this.ruleForm.checkPassword !== "") {
			this.$refs.ruleForm.validateField("checkPassword");
		}
		callback();
	}
};
let validatePass3 = (rule, value, callback) => {
	if (value === "") {
		callback(new Error("请再次输入密码"));
	} else if (value !== this.ruleForm.pass) {
		callback(new Error("两次输入密码不一致!"));
	} else {
		callback();
	}
};
let validateCaptcha = (rule, value, callback) => {
	let inputCode = value.toUpperCase();
	if (inputCode == 1) {
		callback();
	} else if (value === "") {
		callback(new Error("请输入验证码"));
	} else if (inputCode != this.code) {
		this.$message({
			type: "warning",
			message: "验证码输入错误！"
		});
		this.code = "";
		this.createCode();
		return false;
	} else {
		if (this.ruleForm.checkPassword !== "") {
			this.$refs.ruleForm.validateField("checkPassword");
		}
		callback();
	}
};

export default {
	/***************** login ******************/
	loginForm: {
		email: "",
		password: ""
	},
	loginRules: {
		email: [{validator: validateLogin, trigger: "blur"}],
		password: [{validator: validatePassWord, trigger: "blur"}]
	},

	/***************** register ******************/
	registerForm: {
		email: "",
		password: "",
		checkPassword: "",
		captcha: ""
	},

	registerRules: {
		loginName: [{validator: validateEmail, trigger: "blur"}],
		email: [{validator: validateEmail, trigger: "blur"}],
		password: [{validator: validatePass2, trigger: "blur"}],
		checkPassword: [{validator: validatePass3, trigger: "blur"}],
		captcha: [{validator: validateCaptcha, trigger: "blur"}]
	}
};