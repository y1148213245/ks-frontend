/**
 * Created by codingnuts on 2017/12/12.
 */

import component from "../headerNavigation.vue";


const name = component.name;  // 组件标签名

const title = "导航组件";  // 组件title

const description = `头部导航`;  // 组件描述信息

const dev = {
  navigation:{
    headerNavigation_01:{
      navigationTitleWordList:[
        {
          name:"资讯",
          columnType:0
        },
        {
          name:"图书",
          columnType:2
        },
        {
          name:"电子书",
          columnType:3
        },
        {
          name:"资源",
          columnType:1
        },
        {
          name:"天猫旗舰店",
          columnType:4,
          href:"https://shrmms.tmall.com/",
          type:"shopLink",
          childHref:[
            {
              name:"亚马逊",
              href:"#"
            },{
              name:"京东",
              href:"#"
            },{
              name:"当当网",
              href:"#"
            }
          ]
        },
      ],
      url: '/data/snavigation_01_headerNavigation.json'
    }
  }
}

const prod = {
  navigation:{
    headerNavigation_01:{
      navigationTitleWordList:[
        {
          name:"资讯",
          columnType:0
        },
        {
          name:"图书",
          columnType:2
        },
        {
          name:"电子书",
          columnType:3
        },
        {
          name:"资源",
          columnType:1
        },
        {
          name:"天猫旗舰店",
          columnType:4,
          href:"https://shrmms.tmall.com/",
          type:"shopLink",
          childHref:[
            {
              name:"亚马逊",
              href:"#"
            },{
              name:"京东",
              href:"#"
            },{
              name:"当当网",
              href:"#"
            }
          ]
        },
      ],
      url: '/data/snavigation_01_headerNavigation.json'
    }
  }
};

const platform = 'PC';
const pageType = ['others'];
const resourceType = ['others'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
