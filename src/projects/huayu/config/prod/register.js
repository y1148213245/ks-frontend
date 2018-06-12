/*
 * @Author: yan.chaoming 
 * @Date: 2018-04-27 16:34:34 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-05-22 19:08:44
 */

export default {
  name: "register",
  register: {
		work_register_03: {
			sendNum:{
				url:'user/sendMobileMessage.do',   /* /user/sendToMobile.do 文联用  user/sendMobileMessage.do 华育用 */
				
			},
			showItem:['bindMobile']
		}
	}
}