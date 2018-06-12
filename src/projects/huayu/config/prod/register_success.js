/*
 * @Author: yan.chaoming 
 * @Date: 2018-04-27 16:34:34 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-04-27 17:14:27
 */

export default {
  name: "register_success",
  common: {
    work_common_04: {
      getLocationParam: {
        keys: {
          status: 'status',
          token: 'token'
        }

      },
      toLoginHref: './login.html',
      toLoginType: 'auto',/* 是否自动跳到登录页，‘auto’：自动 ‘’：手动 */
    }
  }
}