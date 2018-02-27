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
          teacherId: "",
          pageNo: "1",
          pageSize: "8"
        }
      },
      //查询补充信息接口
      supplementaryInformation: {
        url: "http://172.19.92.76:8080/spc-portal-web/spc/prodb/detail.do?",
        params: {
          doclibCode: "PORTAL_ACTIVITY",
          docID: ""
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
            ACTIVITYID: "",
            POTHUNTER_NAME: "", //参赛人姓名
            POTHUNTER_SEX: "", //参赛人性别
            POTHUNTER_PHONENUMBER: "", //参赛人手机号
            POTHUNTER_IDNUMBER: "", //	参赛人身份证号
            GUIDE_TEACHER: "", //指导教师
            AREA: "", //地区
            CLASS: "", //年级
            SCHOOL: "", //学校
            SYS_TOPIC: "", //作品标题
            DESCRIPTION: "", //作品简介
            TEXTCONTENT: "", //	正文内容
            ATTACHID: "", //文件附件ID
            COMMITUSER: "", //提交用户
            WORKSTYPE: "" //作品类型
          },
          attachMap: [
            {
              FILERECORDID: "", //文件附件ID
              CATEGORYID: "4127" //写死
            }
          ]
        }
      }
    }
  }
};
