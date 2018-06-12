/*
 * @Author: yan.chaoming 
 * @Date: 2018-04-27 16:53:39 
 * @Last Modified by:   yan.chaoming 
 * @Last Modified time: 2018-04-27 16:53:39 
 */

export default {
  name: "register_success",
  common: {
    work_common_04: {
      getLocationParam: {
        keys: {
          status: 'status',
          token: 'token'
        },
        toLoginHref: './login'
      }
    }
  }
}