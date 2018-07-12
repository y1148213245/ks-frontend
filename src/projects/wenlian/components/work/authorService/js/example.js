/**
 * Created by qinff on 2018/1/15.
 */
import component from '../Author_Service.vue';

const name = component.name;
const title = '投稿方式组件';
const description = '投稿方式组件，展示编辑室列表。鼠标浮动展示编辑室详细信息，点击编辑室可看到编辑信息，点击编辑名称进入编辑详情页，点击我要投稿跳转投稿系统。';
const dev = {
  information:{
    work_author_service:{
      url:'../data/bookDetail_01_bookDetail.json',
      staticText:{
        yourPosition:'您的位置',
        homePage:'首页',
        submissionMethods:'投稿方式',
        display:'展示',
      }
    }
  }
};
const prod = {
  information:{
    work_author_service:{
      staticText:{
        yourPosition:'您的位置',
        homePage:'首页',
        submissionMethods:'投稿方式',
        display:'展示',
      }
    }
  }
};

export {name, title, dev, prod, description};
