/**
 * Created by song on 2018/1/18.
 * 购买该书的用户还买  / 该作者其他图书
 */

import component from "../relatedInformation.vue";


const name = component.name;

const title = "相关资讯列表组件";

const description = `相关资讯列表`;

const dev = {
  list_pic:{
    work_list_pic_20:{
      toDetailUrl:''
    }
  }
};

const prod = {
  list_pic:{
    work_list_pic_20:{
      url:'spc/cms/publish/relatedZX.do?pubId=',
      toDetailUrl:'./newsdetail.html?pubId='
    }
  }
};

export { name, title, dev, prod, description };
