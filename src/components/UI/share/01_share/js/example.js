/*  分享列表组件  Created by zong 2018/06/01  */
import component from "../shareInfo.vue";

const name = component.name; // 组件标签名

const title = "分享组件"; // 组件title

const description = `配置分享平台的关键参数是cmd的值，不同的cmd值对应不同的平台：
   名称	ID
印象笔记 evernotecn
网易热 h163
一键分享 mshare
QQ空间 qzone
新浪微博 tsina
人人网 renren
腾讯微博 tqq
百度相册 bdxc
开心网 kaixin001
腾讯朋友 tqf
百度贴吧 tieba
豆瓣网 douban
百度新首页 bdhome
QQ好友 sqq
和讯微博 thx
百度云收藏 bdysc
美丽说 meilishuo
蘑菇街 mogujie
点点网 diandian
花瓣 huaban
堆糖 duitang
和讯 hx
飞信 fx
有道云笔记 youdao
麦库记事 sdo
轻笔记 qingbiji
人民微博 people
新华微博 xinhua
邮件分享 mail
我的搜狐 isohu
摇篮空间 yaolan
若邻网 wealink
天涯社区 ty
Facebook fbook
Twitter twi
linkedin linkedin
复制网址 copy
打印 print
百度中心 ibaidu
微信 weixin
股吧 iguba 
更多 more
`; // 组件描述信息

const dev = {
  share: {
    ui_share_01: {
      'modulename': {
        shareLists: [ // 分享配置
          {
            title: '分享到QQ空间', //
            class: 'bds_qzone', //
            cmd: 'qzone', //
          },
          {
            title: '分享到新浪微博',
            class: 'bds_tsina',
            cmd: 'tsina',
          },
          {
            title: '分享到腾讯微博',
            class: 'bds_tqq',
            cmd: 'tqq',
          },
          {
            title: '分享到人人网',
            class: 'bds_renren',
            cmd: 'renren',
          },
        ]
      }
    }
  }
}

const prod = {
  share: {
    ui_share_01: {
      'modulename': {
        shareLists: [ // 分享配置
          {
            title: '分享到QQ空间', //
            class: 'bds_qzone', //
            cmd: 'qzone', //
          },
          {
            title: '分享到新浪微博',
            class: 'bds_tsina',
            cmd: 'tsina',
          },
          {
            title: '分享到腾讯微博',
            class: 'bds_tqq',
            cmd: 'tqq',
          },
          {
            title: '分享到人人网',
            class: 'bds_renren',
            cmd: 'renren',
          }
        ]
      }
    }
  }
}

const platform = 'PC';
const pageType = [];
const resourceType = [];

export {
  name,
  title,
  dev,
  prod,
  description,
  platform,
  pageType,
  resourceType
};
