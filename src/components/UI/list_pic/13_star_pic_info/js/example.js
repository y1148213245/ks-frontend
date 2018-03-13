/**
 * 电子书城 图书列表
 */


import component from "../starPicInfo.vue";


const name = component.name;

const title = "图书组件";

const description = `纵向的图书组件`;

const  dev = {
  star_pic_info_13: {
    url: '/data/ui_list_pic_13.json',
    picLinkUrl: ''
  }
}

const prod = {
  star_pic_info_13:{
    url:CONFIG.BASE_URL+"spc/cms/publish/list.do",
    params:{
      conditions:"[{pub_col_id:'131'},{pub_status:'1'}]",
      groupBy:"pub_resource_id",
      orderBy:"pub_read_num desc",
      pageNo:"1",
      pageSize:"4"
    }
  }
}


const platform = 'PC';
const pageType = ['index', 'list', 'channel'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
