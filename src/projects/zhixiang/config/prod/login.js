/*
 * @Author: yan.chaoming 
 * @Date: 2017-12-25 18:29:13 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2017-12-28 17:25:54
 */
export default {
  name: 'login',
  login: {
    work_login_01: {
      loginUrl: BASE_URL + 'login.do',
    }
  },
  components: {
    components_login_content: {
			loginSuccessHref: './index.html',
			loginSuccessDontHrefPage: ['register.html','register_success.html'],
		}
  }
};
