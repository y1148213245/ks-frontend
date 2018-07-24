/*
 * @Author: song 
 * @Date: 2018-07-17 14:13:37 
 * @Last Modified by: song
 * @Last Modified time: 2018-07-17 15:41:27
 * 组件API接口封装: 按后端swagger分类  以下属于prodb-controller
 */

import {
  Get,
  Post
} from "@common";

export default {
  secondQueryResourceData(params) { // 通过list.do接口查询资源数据
    return Post(CONFIG.BASE_URL + 'spc/cms/publish/list.do', params)
  }
}
