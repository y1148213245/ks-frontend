/*  分享列表组件  Created by zong 2018/06/01  */
import component from "../shareInfo.vue";

const name = component.name; // 组件标签名

const title = "分享组件"; // 组件title

const description = "分享组件 \n复制网址  Copy\t 拷贝\nQQ空间  \nqzone\t http://sns.qzone.qq.com\n新浪微博\ntsina\t http://t.sina.com.cn\n百度搜藏\nbaidu\t http://cang.baidu.com\n人人网\nrenren\t http://share.renren.com\n腾讯微博\ntqq\thttp://t.qq.com\n开心网\nkaixin001\thttp://www.kaixin001.com\n腾讯朋友\ntqf\thttp://www.pengyou.com\n百度空间\nhi\thttp://apps.hi.baidu.com\n豆瓣网\ndouban\thttp://www.douban.com\n搜狐微博\ntsohu\thttp://t.sohu.com\nMSN\nmsn\thttp://profile.live.com/badge\nQQ收藏\nqq\thttp://shuqian.qq.com\n和讯微博\nthx\thttp://t.hexun.com\n淘宝\ntaobao\thttp://jianghu.taobao.com\n百度贴吧\ntieba\thttp://tieba.baidu.com\n谷歌Buzz\nbuzz\thttp://www.google.com/buzz\n搜狐白社会\nsohu\thttp://bai.sohu.com\n网易微博\nt163\thttp://t.163.com/"; // 组件描述信息

const dev = {
  share: {
    ui_share_01: {
      'modulename': {
        shareLists: [// 分享配置
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
        shareLists: [// 分享配置
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
