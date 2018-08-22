/*
 *参赛组件
 */

import component from "../contestants.vue";

const name = component.name; // 组件标签名

const title = "参赛组件"; // 组件title

const description = `参赛

`; // 组件描述信息

const dev = {
  contestants: {
    contestants_01: {
      url: "../data/work_contestants_01_data.json",
      staticText:{
        participantInformation:"参赛人信息",
        uploadPortfolios:"上传作品",
        accomplish:"完成",
        selectParticipant:"选择参赛人员",
        addParticipant:"新增参赛人员",
        addParticipantInformation:"添加参赛人信息",
        name:"姓名",
        sex:"性别",
        male:"男",
        female:"女",
        identityCard:"身份证",
        telePhone:"电话",
        cancel:"取 消",
        confirm:"确 定",
        mobilePhoneNum:"手机号",
        identityCardNum:"身份证号",
        haveEnteredTheCompetition:"已参赛",
        relevantInformation:"相关信息",
        pothunter:"参赛人",
        region:"地区",
        group:"组别",
        pleaseSelectTheEntryGroup:"请选择参赛组别",
        school:"学校",
        pleaseSelectSchool:"请选择学校",
        otherSchools:"其他学校",
        gradeAndClass:"年级班级",
        pleaseEnterGradeAndClass:"请填写年级班级",
        schoolAddress:"学校地址",
        pleaseEnterSchoolAddress:"请填写学校地址",
        email:"邮箱",
        pleaseEnterEmail:"请填写邮箱",
        postcode:"邮编",
        pleaseInputPostcode:"请填写邮编",
        guidanceTeacher:"指导教师",
        pleaseEnterGuidanceTeacher:"请填写指导教师",
        guidanceTeacherPhoneNum:"指导教师电话",
        pleaseInputGuidanceTeacherTelephone:"请填写指导教师电话",
        organizationTeacher:"组织教师",
        pleaseInputOrganizationTeacher:"请填写组织教师",
        organizationTeacherPhoneNum:"组织教师电话",
        pleaseInputOrganizationTeacherPhoneNum:"请填写组织教师电话",
        setToPrivacy:"设为隐私",
        yes:"是",
        no:"否",
        thePrivacyFunctionIntroduction:"隐私功能用于设置是否公开参赛作品，如选择“否”，默认为您自愿公开展示参赛作品。",
        nextStep:"下一步",
        inputProductionInfo:"填写作品信息",
        title:"标题：",
        briefIntroduction:"简介",
        file:"文件",
        clickOnToUpload:"点击上传",
        mainBody:"正文",
        pleaseInputMainBody:"请输入正文",
        lastStep:"上一步",
        submit:"提交",
        preview:"预览",
        basicInformation:"基本信息",
        additionalInformation:"补充信息",
        whetherPrivacy:"是否隐私",
        productionInfo:"作品信息",
        productionSubmitSuccessfullyInfo:"您的作品已提交成功",
        goToHomePage:"前往首页",
        goToTheEventsYouParticipateIn:"前往参与的活动",
        continueToContribute:"继续投稿",
        others:"其他",
        pleaseInputSchool:"请填写学校",
        pleaseInputCorrectPhoneNum:"请输入正确电话号",
        pleaseInputCorrectPostcode:"请输入正确邮政编码",
        profileShallNotExceedFiveHundredsWords:"简介不得多于500字",
        pleaseInputParticipantName:"请输入参赛人姓名",
        pleaseInputParticipantIDCard:"请输入参赛人身份证号",
        pleaseInputParticipantPhoneNum:"请输入参赛人手机号",
        pleaseEnterSchool:"请输入学校",
        pleaseInputGuidanceTeacher:"请输入指导教师",
        pleaseInputGradeAndClass:"请输入年级班级",
        pleaseInputEmail:"请输入邮箱",
        pleaseInputSchoolAddress:"请输入学校地址",
        pleaseInputEntryTitle:"请输入参赛作品标题",
        pleaseInputEntryIntroduction:"请输入参赛作品简介",
        pleaseInputEntryArticle:"请填写参赛文章",
        pleaseLogin:"请登录",
        pleaseSelectTheParticipantInTheList:"请在列表里选择参赛人",
        pleaseSelectRegion:"请选择地区",
        pleaseSelectGroup:"请选择组别",
        pleaseSelectAndInputSchool:"请选择填写学校",
        pleaseSelectAndInputSchoolAddress:"请选择填写学校地址",
        pleaseSelectAndInputClass:"请选择填写班级",
        pleaseSelectAndInputCorrectGuidanceTeacherPhoneNum:"请选择填写正确指导教师手机号",
        pleaseSelectAndInputCorrectOrganizationTeacherPhoneNum:"请选择填写正确组织教师手机号",
        pleaseEnterCorrectPostcode:"请填写正确邮编",
        studentAddSuccess:"学生添加成功！",
        uploadProductionFormatInfo:"上传作品文件只能是 doc、docx、txt、pdf格式,图片或音频!",
        uploadProductionSizeInfo:"上传作品文件不能超过10M！",
        fileUploadSuccessInfo:"文件上传成功",
        fileUploadErrorInfo:"文件上传失败，请重试",
        pleaseUploadEntryAccessory:"请上传参赛附件",
        pleaseInputEntryMainBody:"请填写参赛正文",
        briefIntroductionSizeInfo:"简介不得多于500字",
        submitFailed:"提交失败",
        onlyOneEntryCanBeUploaded:"只能上传一个参赛作品附件",
        accessory:"附件"
      }
    }
  }
};

const prod = {
  contestants: {
    contestants_01: {
      competitionList: {
        url: "/user/getActivityMemberByUser.do",/* 获取参赛人 */
        competitionedUrl: 'spc/prodb/activity/activityPothunterExist.do',/* 获取已参赛人url */
        params: {
          userId: "",
          pageNo: "1",
          pageSize: "99"
        },
        competitionedParams:{
          IDNumbers:'',
          activityID:''
        }
      },
      //查询补充信息接口
      supplementaryInformation: {
        url: "/spc/prodb/detail.do?",
        getSchoolUrl: "spc/prodb/searchNL.do",
        params: {
          getPlaceRequest_doclibCode: "PORTAL_ACTIVITY", //配库码
          getSchoolRequest_doclibCode: "PORTAL_SCHOOL", //配库码
          getSchoolRequest_relations: "1,1", //1并且，2或者
          getSchoolRequest_cols: "AREA,CLASS", //字段名
          getSchoolRequest_symbols: "1,1", //匹配模式，1包含，2等于，3不等于
          doclibCode: "PORTAL_ACTIVITY",
          docID: ""
        },
        keys: {
          output_place: "place",
          output_school: "school",
          output_group: "group",
          output_searchText: "searchText",
          school_name: "SYS_TOPIC",
          eventData_docID: "pub_resource_id", //事件接受参数数据，资源id
          getPlaceRequest_doclibCode: "doclibCode",
          getPlaceRequest_docID: "docID", //资源id
          getPlaceRequestBack_areas: "AREALIMT",
          getPlaceRequestBack_classes: "CLASSLIMT",
          getSchoolRequest_doclibCode: "doclibCode",
          getSchoolRequest_relations: "relations",
          getSchoolRequest_cols: "cols",
          getSchoolRequest_symbols: "symbols",
          getSchoolRequest_vals: "vals" //值
        }
      },
      //附件上传接口
      upLoadUrl: "/dynamicFile/upload.do?",
      // 汇总上传接口
      informationUploading: {
        url: "/spc/prodb/saveItem.do?",
        params: {
          doclibCode: "PORTAL_WORKS",//库码
          metaMap: {
            // ACTIVITYLIBID:"PORTAL_ACTIVITY",
            ACTIVITYID: "",
            ACTIVITY_NAME: "",//活动名称
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
            WORKSTYPE: "", //作品类型
            CONCRETE_CLASS: '', //班级
            SCHOOL_ADDRESS: '',//学校
            MAILBOX: '',//邮箱
            POSTCODE: '',//邮编
            GUIDETEACHER_PHONENUMBER: '',//指导教师电话
            ORGANIZE_TEACHER: '',//组织教师
            ORGANIZETEACHER_PHONENUMBER: '',//组织教师电话
            IS_HIDE: '' //是否是隐私
          },
          attachMap: [
            {
              FILERECORDID: "", //文件附件ID
              CATEGORYID: "4127" //写死
            }
          ]
        }
      },
      cascaderConfig:{
        splitTag:{
          item:';',
          category:'~'
        }
      },
      staticText:{
        participantInformation:"参赛人信息",
        uploadPortfolios:"上传作品",
        accomplish:"完成",
        selectParticipant:"选择参赛人员",
        addParticipant:"新增参赛人员",
        addParticipantInformation:"添加参赛人信息",
        name:"姓名：",
        sex:"性别：",
        male:"男",
        female:"女",
        identityCard:"身份证",
        telePhone:"电话",
        cancel:"取 消",
        confirm:"确 定",
        mobilePhoneNum:"手机号",
        identityCardNum:"身份证号",
        haveEnteredTheCompetition:"已参赛",
        relevantInformation:"相关信息",
        pothunter:"参赛人",
        region:"地区",
        group:"组别",
        pleaseSelectTheEntryGroup:"请选择参赛组别",
        school:"学校",
        pleaseSelectSchool:"请选择学校",
        gradeAndClass:"年级班级",
        pleaseEnterGradeAndClass:"请填写年级班级",
        schoolAddress:"学校地址",
        otherSchools:"其他学校",
        pleaseEnterSchoolAddress:"请填写学校地址",
        email:"邮箱",
        pleaseEnterEmail:"请填写邮箱",
        postcode:"邮编",
        pleaseInputPostcode:"请填写邮编",
        guidanceTeacher:"指导教师",
        pleaseEnterGuidanceTeacher:"请填写指导教师",
        pleaseInputGuidanceTeacherTelephone:"请填写指导教师电话",
        guidanceTeacherPhoneNum:"指导教师电话",
        organizationTeacher:"组织教师",
        pleaseInputOrganizationTeacher:"请填写组织教师",
        organizationTeacherPhoneNum:"组织教师电话",
        pleaseInputOrganizationTeacherPhoneNum:"请填写组织教师电话",
        setToPrivacy:"设为隐私",
        yes:"是",
        no:"否",
        thePrivacyFunctionIntroduction:"隐私功能用于设置是否公开参赛作品，如选择“否”，默认为您自愿公开展示参赛作品。",
        nextStep:"下一步",
        inputProductionInfo:"填写作品信息",
        title:"标题：",
        briefIntroduction:"简介",
        file:"文件",
        clickOnToUpload:"点击上传",
        mainBody:"正文",
        pleaseInputMainBody:"请输入正文",
        lastStep:"上一步",
        submit:"提交",
        preview:"预览",
        basicInformation:"基本信息",
        additionalInformation:"补充信息",
        whetherPrivacy:"是否隐私",
        productionInfo:"作品信息",
        productionSubmitSuccessfullyInfo:"您的作品已提交成功",
        goToHomePage:"前往首页",
        goToTheEventsYouParticipateIn:"前往参与的活动",
        continueToContribute:"继续投稿",
        others:"其他",
        pleaseInputSchool:"请填写学校",
        pleaseInputCorrectPhoneNum:"请输入正确电话号",
        pleaseInputCorrectPostcode:"请输入正确邮政编码",
        profileShallNotExceedFiveHundredsWords:"简介不得多于500字",
        pleaseInputParticipantName:"请输入参赛人姓名",
        pleaseInputParticipantIDCard:"请输入参赛人身份证号",
        pleaseInputParticipantPhoneNum:"请输入参赛人手机号",
        pleaseEnterSchool:"请输入学校",
        pleaseInputGuidanceTeacher:"请输入指导教师",
        pleaseInputGradeAndClass:"请输入年级班级",
        pleaseInputEmail:"请输入邮箱",
        pleaseInputSchoolAddress:"请输入学校地址",
        pleaseInputEntryTitle:"请输入参赛作品标题",
        pleaseInputEntryIntroduction:"请输入参赛作品简介",
        pleaseInputEntryArticle:"请填写参赛文章",
        pleaseLogin:"请登录",
        pleaseSelectTheParticipantInTheList:"请在列表里选择参赛人",
        pleaseSelectRegion:"请选择地区",
        pleaseSelectGroup:"请选择组别",
        pleaseSelectAndInputSchool:"请选择填写学校",
        pleaseSelectAndInputSchoolAddress:"请选择填写学校地址",
        pleaseSelectAndInputClass:"请选择填写班级",
        pleaseSelectAndInputCorrectGuidanceTeacherPhoneNum:"请选择填写正确指导教师手机号",
        pleaseSelectAndInputCorrectOrganizationTeacherPhoneNum:"请选择填写正确组织教师手机号",
        pleaseEnterCorrectPostcode:"请填写正确邮编",
        studentAddSuccess:"学生添加成功！",
        uploadProductionFormatInfo:"上传作品文件只能是 doc、docx、txt、pdf格式,图片或音频!",
        uploadProductionSizeInfo:"上传作品文件不能超过10M！",
        fileUploadSuccessInfo:"文件上传成功",
        fileUploadErrorInfo:"文件上传失败，请重试",
        pleaseUploadEntryAccessory:"请上传参赛附件",
        pleaseInputEntryMainBody:"请填写参赛正文",
        briefIntroductionSizeInfo:"简介不得多于500字",
        submitFailed:"提交失败",
        onlyOneEntryCanBeUploaded:"只能上传一个参赛作品附件",
        accessory:"附件"
      }

    }
  }
};

const platform = 'PC';
const pageType = ['channel'];
const resourceType = ['activity'];

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
