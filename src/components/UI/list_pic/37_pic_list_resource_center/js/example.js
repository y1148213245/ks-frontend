/*  课程列表展示组件  Created by yy 2018/05/10  */
import component from "../resourceCenter.vue";

const name = component.name; // 组件标签名

const title = "资料中心列表展示组件"; // 组件title

const description = `资料中心列表展示组件`; // 组件描述信息

const dev = {
  list_pic: {
    list_pic_37: {
      'resourceCenter': {
        display: {
          resourceTitle: '参考答案',
          tabList: [],  //存放tab的数组 通过栏目树传进来的参数格式如下
          // id: val[this.keys.id],
          // name: val[this.keys.name],
          // parentId: val[this.keys.parentId],
          // childNav: [],
          // showChild: false, //子导航是否展示(鼠标单击控制展示收起)
          // createChild: false //是否已经点击创建过子导航
          tHeadList: [  //存放table头部信息的数组
            '文件类型',
            '资料名称',
            '日期'
          ],
          tBodyList: [  //存放table内容信息的数组
            {
              resourceType: '电子书',
              resourceName: '数学',
              resourceDate: '2016-03-15'
            },
            {
              resourceType: 'PDF',
              resourceName: '语文',
              resourceDate: '2016-05-25'
            },
            {
              resourceType: 'zip',
              resourceName: '英语',
              resourceDate: '2016-11-05'
            }
          ],
        },
        transTitle: "transNavTitle",
        data: [
          {
            grade: '1',  //小学（1），初中（2），高中（3）
            type: '1',  // 全部（0），训练（1），复习（2）
            fileType: '1', //音频（1），视频（2），PDF（3），ZIP（4）
            resourceName: '数学',
            resourceDate: '2016-03-15',
            resourceType: 'PDF'
          },
          {
            grade: '2',  //小学（1），初中（2），高中（3）
            type: '1',  // 全部（0），训练（1），复习（2）
            fileType: '2', //音频（1），视频（2），PDF（3），ZIP（4）
            resourceName: '语文',
            resourceDate: '2017-03-15',
            resourceType: 'ZIP'
          },
          {
            grade: '3',  //小学（1），初中（2），高中（3）
            type: '2',  // 全部（0），训练（1），复习（2）
            fileType: '3', //音频（1），视频（2），PDF（3），ZIP（4）
            resourceName: '英语',
            resourceDate: '2026-03-15',
            resourceType: '视频'
          },
          {
            grade: '1',  //小学（1），初中（2），高中（3）
            type: '2',  // 全部（0），训练（1），复习（2）
            fileType: '4', //音频（1），视频（2），PDF（3），ZIP（4）
            resourceName: '物理',
            resourceDate: '2116-03-15',
            resourceType: '音频'
          }
        ]
      }
    }
  }
}

const prod = {
  list_pic: {
    list_pic_37: {
      'resourceCenter': {
        display: {
          resourceTitle: '参考答案',
          tabList: [],  //存放tab的数组 通过栏目树传进来的参数格式如下
          // id: val[this.keys.id],
          // name: val[this.keys.name],
          // parentId: val[this.keys.parentId],
          // childNav: [],
          // showChild: false, //子导航是否展示(鼠标单击控制展示收起)
          // createChild: false //是否已经点击创建过子导航
          tHeadList: [  //存放table头部信息的数组
            '文件类型',
            '资料名称',
            '日期'
          ],
          tBodyList: [  //存放table内容信息的数组
            {
              resourceType: '电子书',
              resourceName: '数学',
              resourceDate: '2016-03-15'
            },
            {
              resourceType: 'PDF',
              resourceName: '语文',
              resourceDate: '2016-05-25'
            },
            {
              resourceType: 'zip',
              resourceName: '英语',
              resourceDate: '2016-11-05'
            }
          ],
        },
        transTitle: "transNavTitle",
        data: [
          {
            grade: '1',  //小学（1），初中（2），高中（3）
            type: '1',  // 全部（0），训练（1），复习（2）
            fileType: '1', //音频（1），视频（2），PDF（3），ZIP（4）
            resourceName: '数学',
            resourceDate: '2016-03-15',
            resourceType: 'PDF'
          },
          {
            grade: '2',  //小学（1），初中（2），高中（3）
            type: '1',  // 全部（0），训练（1），复习（2）
            fileType: '2', //音频（1），视频（2），PDF（3），ZIP（4）
            resourceName: '语文',
            resourceDate: '2017-03-15',
            resourceType: 'ZIP'
          },
          {
            grade: '3',  //小学（1），初中（2），高中（3）
            type: '2',  // 全部（0），训练（1），复习（2）
            fileType: '3', //音频（1），视频（2），PDF（3），ZIP（4）
            resourceName: '英语',
            resourceDate: '2026-03-15',
            resourceType: '视频'
          },
          {
            grade: '1',  //小学（1），初中（2），高中（3）
            type: '2',  // 全部（0），训练（1），复习（2）
            fileType: '4', //音频（1），视频（2），PDF（3），ZIP（4）
            resourceName: '物理',
            resourceDate: '2116-03-15',
            resourceType: '音频'
          }
        ]
      }
    }
  }
}

const platform = 'PC';
const pageType = ['detail'];
const resourceType = ['video'];

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
