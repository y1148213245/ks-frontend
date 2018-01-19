/**
 * Created by codingnuts on 2017/12/27.
 */

export const ACTION_LOGIN = 'toLogin';  // 登陆


export const SET_MEMBER = 'setMember'; //存用户信息
export const GET_MEMBER = 'getMember'; //获取用户
export const GET_MEMBER_ISLOGIN = 'isLogin'; //判断是否登录

export const ACTION_KEEP_SESSION = 'keepSession'; //获取用户
export const ACTION_LOGOUT = 'logout'; //获取用户

/********************************* REGISTER *************************************/

export const ACTION_REGISTER = 'doRegister';  // 注册
export const ACTION_REGISTER_EMAIL = 'doRegister2'; //通过邮箱注册
export const ACTION_REGISTER_MOBILE = 'doRegisterByMobile' //通过手机号注册
export const ACTION_CHECK_USERINFO = 'checkUserInfo'; //检查用户名信息是否重复
export const ACTION_SEND_MOBILE_NUM = 'sendMobileNum'; //发送手机号

/********************************* cart *************************************/
export const GET_TOTAL_AMOUNT = 'getTotalAmount'; // 获取购物车列表商品总数

