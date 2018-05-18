/**
 * 字段适配器数据
 * fieldAdapter
 * 调用字段适配器的方法需要传两个参数 
 * sysAdapter: "", // 系统字段 取 zykAdapter 或者 sykAdapter
 * typeAdapter: "", // 类型字段 按资源类型取 bookAdapter 或者 videoAdapter 等等
 */

var FIELD_ADAPTER = {
  zykAdapter: { //资源库
    systemAdapter: { // 系统字段/顶层字段
      sysDocumentId: "SYS_DOCUMENTID", // 文档ID
      sysDoclibId: "SYS_DOCLIBID", // 文档库ID
      sysCreated: "SYS_CREATED", // 创建时间
      sysAuthor: "SYS_AUTHORS", // 作者
      sysTopic: "SYS_TOPIC", //主题
      sysHaveAttach: "SYS_HAVEATTACH", // 有无附件
      sbkIsbn: "SBK_ISBN", // 书号
      sbkMenu: "SBK_MENU", // 目录
      sbkPreface: "SBK_PREFACE", // 前言
      sbkSynopsis: "SBK_SYNOPSIS", // 简介
    },
    bookAdapter: { // 图书
      sysTopic: "SYS_TOPIC", // 书名
      sysAuthors: "SYS_AUTHORS", // 作者
      isbn: "ISBN", // 书号ISBN
      sysCreated: "BSYS_CREATED", // 入库日期
      pressName: "PRESS_NAME", // 出版社
      bookCata: "BOOK_CAT", // 图书分类
      editor: "EDITOR", // 责任编辑
      majorEditor: "MAJOR_EDITOR", // 主编
      printVersion: "PRINT_VERSION", // 印次
      bookVersion: "BOOK_VERSION", // 版次
      textNum: "TEXT_NUM", // 页数
      price: "PRICE", //价格
      productSize: "PRODUCT_SIZE", // 成品尺寸
      remark: "REMARK", // 备注
      pubdate: "PUBDATE", // 出版日期
      synopsis: "SYNOPSIS", //内容简介
    },
    videoAdapter: { // 视频
      sysTopic: "SYS_TOPIC", //视频名称
      mediaName: "MEDIA_NAME", // 系列名称
      sysCreated: "SYS_CREATED", // 入库时间
      isrcIsbn: "ISRC_ISBN",
      format: "FORMAT", // 文件格式
      mediaCat: "MEDIA_CAT", // 视频分类
      editor: "EDITOR", //责任编辑
      textEditor: "TEXT_EDITOR", //文字编辑
      pecorder: "RECORDER", //制作人
      pecoreTime: "RECORD_TIME", //出版时间
      description: "DESCRIPTION", //内容简介
      timeLength: "TIME_LENGTH", // 时长
      fileSize: "FILE_SIZE", //文件大小
      remark: "REMARK", //备注
      resourceId: "RESOURCEID", // 资源ID
      sysAuthor: "SYS_AUTHORS", // 作者
    }
  },
  sykAdapter: { // 索引库字段
    systemAdapter: { // 系统字段/顶层字段
      id: "id",
      colId: "pub_col_id",
      colName: "pub_col_name",
      resId: "pub_resource_id",
      resName: "pub_resource_name",
      resCata: "pub_resource_cata",
      picMiddle: "pub_picMiddle",
      picSmall: "pub_picSmall",
      picBig: "pub_picBig",
      clickNum: "pub_click_num",
      likeNum: "pub_like_num",
      readNum: "pub_read_num",
      commentNum: "pub_comment_num",
      downloadsNum: "pub_downloads_num",
      salesNum: "pub_sales_num",
      siteId: "pub_site_id",
      starNum: "pub_star_num",
      poster: "pub_POSTER", // 海报图
      created: "pub_created",
      lastModified: "pub_lastmodified",
      resType: "prod_resource_type",
      salePrice: "prod_sale_price",
      memberPrice: "prod_member_price",
    },
    bookAdapter: { // 图书
      sysTopic: "BOOK_SYS_TOPIC",
      sysAuthors: "BOOK_SYS_AUTHORS",
      isbn: "BOOK_ISBN",
      sysCreated: "BOOK_SYS_CREATED",
      pressName: "BOOK_PRESS_NAME",
      bookCata: "BOOK_BOOK_CAT",
      editor: "BOOK_EDITOR",
      majorEditor: "BOOK_MAJOR_EDITOR",
      printVersion: "BOOK_PRINT_VERSION",
      bookVersion: "BOOK_BOOK_VERSION",
      textNum: "BOOK_TEXT_NUM",
      price: "BOOK_PRICE",
      productSize: "BOOK_PRODUCT_SIZE",
      remark: "BOOK_REMARK",
      pubdate: "BOOK_PUBDATE",
      synopsis: "BOOK_SYNOPSIS",
      ebPrice: "BOOK_EB_PRICE",
      bookCascadId: "BOOK_BOOK_CASCADID",
    },
    newsAdapter: { // 资讯
      documentId: "information_SYS_DOCUMENTID",
      created: "information_SYS_CREATED", //创建时间
      lastModified: "information_SYS_LASTMODIFIED", // 最后修改时间
      isLocked: "	information_SYS_ISLOCKED",
      authors: "information_SYS_AUTHORS",
      topic: "information_SYS_TOPIC",
      haveAttach: "information_SYS_HAVEATTACH",
      type: "information_a_type",
      pubTime: "information_a_pubTime", // 发布时间
      realPubTime: "information_a_realPubTime", // 真实发布时间
      abstract: "information_a_abstract", //摘要
      content: "information_a_content",
      source: "information_a_source", //来源
      sourceUrl: "information_a_sourceUrl", // 来源链接
      subTitle: "information_a_subTitle", // 副标题
    },
    quesAdapter: { // 题库 [暂空]

    },
    editAdapter: { // 编辑 [暂空]

    },
    authorAdapter: { // 作者
      sysTopic: "ORGAUTHOR_SYS_TOPIC",
      nation: "ORGAUTHOR_NATION",
      sex: "ORGAUTHOR_SEX",
      specialty: "ORGAUTHOR_SPECIALTY",
      email: "ORGAUTHOR_EMAIL",
      qq: "	ORGAUTHOR_QQ",
      mailAddress: "ORGAUTHOR_MAIL_ADDRESS",
      phone: "ORGAUTHOR_PHONE",
      jobTitle: "ORGAUTHOR_JOB_TITLE",
      birth: "ORGAUTHOR_BIRTH",
      research: "ORGAUTHOR_RESEARCH",
      workAddress: "ORGAUTHOR_WORK_ADDRESS",
    },
    activityAdapter: { // 活动
      created: "PORTAL_ACTIVITY_SYS_CREATED",
      lastModified: "PORTAL_ACTIVITY_SYS_LASTMODIFIED",
      currentStatus: "PORTAL_ACTIVITY_SYS_CURRENTSTATUS",
      sysTopic: "PORTAL_ACTIVITY_SYS_TOPIC",
      description: "PORTAL_ACTIVITY_DESCRIPTION",
      beginTime: "PORTAL_ACTIVITY_BEGIN_TIME",
      workType: "PORTAL_ACTIVITY_WORKTYPE",
      isComment: "PORTAL_ACTIVITY_IS_COMMENT",
      arealimt: "PORTAL_ACTIVITY_AREALIMT",
      classlimt: "PORTAL_ACTIVITY_CLASSLIMT",
      beginTimeStampNew: "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",
      reviewTimeStampNew: "PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW",
      endTimeStampNew: "PORTAL_ACTIVITY_END_TIMESTAMPNEW",
      praiseSwicth: "PORTAL_ACTIVITY_PRAISE_SWITCH",
      isEndActivity: "PORTAL_ACTIVITY_IS_ENDACTIVITY",
      praiseDescription: "PORTAL_ACTIVITY_PRAISE_DESCRIPTION",
      arealimtid: "PORTAL_ACTIVITY_AREALIMTID",
      arealimtCascadId: "PORTAL_ACTIVITY_AREALIMT_CASCADID",
      classLimtid: "PORTAL_ACTIVITY_CLASSLIMTID",
      classLimtCascadId: "PORTAL_ACTIVITY_CLASSLIMT_CASCADID"
    },
    videoAdapter: { // 视频
      sysTopic: "VIDEO-MEDIA_SYS_TOPIC",
      mediaName: "VIDEO-MEDIA_MEDIA_NAME",
      sysCreated: "	VIDEO-MEDIA_SYS_CREATED",
      mediaCat: "VIDEO-MEDIA_MEDIA_CAT",
      editor: "VIDEO-MEDIA_EDITOR",
      description: "VIDEO-MEDIA_DESCRIPTION",
      time: "VIDEO-MEDIA_TIME_LENGTH",
      price: "VIDEO-MEDIA_PRICE",
      resourceId: "VIDEO-MEDIA_RESOURCEID",
      video: "video",
    },
    audioAdapter: { // 音频
      sysTopic: "AUDIO-MEDIA_SYS_TOPIC",
      mediaName: "AUDIO-MEDIA_MEDIA_NAME",
      sysCreated: "AUDIO-MEDIA_SYS_CREATED",
      isrcIsbn: "AUDIO-MEDIA_ISRC_ISBN",
      materialNo: "AUDIO-MEDIA_MATERIAL_NO",
      format: "AUDIO-MEDIA_FORMAT",
      mediaCat: "AUDIO-MEDIA_MEDIA_CAT",
      carrierType: "AUDIO-MEDIA_CARRIER_TYPE",
      language: "AUDIO-MEDIA_LANGUAGE",
      editor: "AUDIO-MEDIA_EDITOR",
      textEditor: "AUDIO-MEDIA_TEXT_EDITOR",
      recorder: "AUDIO-MEDIA_RECORDER",
      recordTime: "AUDIO-MEDIA_RECORD_TIME",
      supportProduct: "AUDIO-MEDIA_SUPPORT_PRODUCT",
      depart: "AUDIO-MEDIA_DEPART",
      description: "AUDIO-MEDIA_DESCRIPTION",
      remark: "AUDIO-MEDIA_REMARK",
      time: "AUDIO-MEDIA_TIME_LENGTH",
      fileSize: "AUDIO-MEDIA_FILE_SIZE",
      coverId: "AUDIO-MEDIA_COVERID",
      rescource: "AUDIO-MEDIA_RESOURCEID",
      themeWord: "AUDIO-MEDIA_THEME_WORD",
      ontology: "AUDIO-MEDIA_ONTOLOGY",
      keywords: "AUDIO-MEDIA_KEYWORDS",
      catId: "AUDIO-MEDIA_MEDIA_CATID",
      mediaCascadId: "AUDIO-MEDIA_MEDIA_CASCADID",
      departId: "AUDIO-MEDIA_DEPARTID",
      departCascadId:"AUDIO-MEDIA_DEPART_CASCADID",
    },
    columnAdapter: { // 栏目
      id: "id", //栏目id
      name: "name", // 栏目名称
      code: "code", //副标题
      url: "url",
      bigPic: "big_pic",
      smallPic: "small_pic",
      describe: "describe",//描述信息
    }
  }
};

export {
  FIELD_ADAPTER
};
