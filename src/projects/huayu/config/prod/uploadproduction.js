/*
 * @Author: song 
 * @Date: 2018-02-08 15:34:54 
 * @Last Modified by: song
 * @Last Modified time: 2018-02-08 15:36:07
 */
/* 上传作品 */
export default {
  name: "upload",
  contestants: {
    contestants_01: {
      competitionList: {
        url:
          "http://172.19.57.153/portal/api/user/getActivityMemberByTeacher.do?",
        params: {
          teacherId: "217996",
          pageNo: "1",
          pageSize: "8"
        }
      },
      //查询补充信息接口
      supplementaryInformation: {
        url: "http://172.19.92.76:8080/spc-portal-web/spc/prodb/detail.do?",
        params: {
          doclibCode: "PORTAL_ACTIVITY",
          docID: "601858"
        }
      }, 
      //附件上传接口
      upLoadUrl: "http://172.19.57.153/spc-portal-web/dynamicFile/upload.do?", 
      // 汇总上传接口
      informationUploading: {
        url: "http://172.19.92.76:8080/portal/api/spc/prodb/saveItem.do?",
        params: {
          doclibCode: "PORTAL_WORKS",
          metaMap: {
            // ACTIVITYLIBID:"PORTAL_ACTIVITY",
            ACTIVITYID: "601858",
            POTHUNTER_NAME: "联调姓名", //参赛人姓名
            POTHUNTER_SEX: "1", //参赛人性别
            POTHUNTER_PHONENUMBER: "18888888888", //参赛人手机号
            POTHUNTER_IDNUMBER: "210303888888888888", //	参赛人身份证号
            GUIDE_TEACHER: "联调指导教师", //指导教师
            AREA: "北京~西城", //地区
            CLASS: "小学~三年级", //年级
            SCHOOL: "联调学校", //学校
            SYS_TOPIC: "第六次测试", //作品标题
            DESCRIPTION: "联调作品简介", //作品简介
            TEXTCONTENT: "", //	正文内容
            ATTACHID: "176730", //文件附件ID
            COMMITUSER: "18813015362", //提交用户
            WORKSTYPE: "附件" //作品类型
          },
          attachMap: [
            {
              FILERECORDID: "176730", //文件附件ID
              CATEGORYID: "4127" //写死
            }
          ]
        }
      }
    }
  }
};
