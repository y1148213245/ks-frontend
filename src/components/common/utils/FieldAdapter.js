/**
 * 字段适配器数据
 * fieldAdapter
 * 调用字段适配器的方法需要传两个参数
 * sysAdapter: "", // 系统字段 取 zykAdapter 或者 sykAdapter
 * typeAdapter: "",  // 类型字段 按资源类型取 bookAdapter 或者 videoAdapter 等等
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
        },
        magAdapter: { // 期刊
            id: "id", //期刊id
            magType: "magType", // 期刊类型
            magName: "magName", // 期刊名称
            magIsrc: "magIsrc", //  这个不是图片
            magLanguage: "magLanguage", // 期刊语言类型
            magMainEditor: "magMainEditor", // 期刊上次修改人
            magDesc: "magDesc", // 期刊简介
            depart: "depart", //？？
            departid: "departid", //父级id？？
            departCascadid: "departCascadid", // 这厮是啥
            price: "price", //价格
            magNoCN: "magNoCN", //？？？
            magNoNational: "magNoNational", //
            magSize: "magSize", //
            magProductSize: "magProductSize", //
            reader: "reader", //
            pressName: "pressName", //
            magzg: "magzg", //
            printcompany: "printcompany", //
            cmsMagOrderMap: "cmsMagOrderMap", //
            PUBLISH_YEAR: 'PUBLISH_YEAR', //年份
        },
        candidateAdapter: { /* 活动的参赛人 */
            activityId: 'ACTIVITYID',
            /* 活动id */
            awardName: 'AWARD_NAME',
            /* 奖项名字 */
            awardType: 'AWARD_TYPE',
            /* 奖项类型 */
            description: 'DESCRIPTION',
            /* 描述 */
            pic: 'HEAD_PICTURE',
            /* 头像 */
            voteNum: 'VOTE_NUMBERNEW',
            /* 投票数量 */
            company:'COMPANY',
            /* 所属单位 */
        },
        activityAwardAdapter: {
            awardType: 'AWARD_TYPE',
            topic: 'SYS_TOPIC'
        }
    },
    sykAdapter: { // 索引库字段
        systemAdapter: { // 系统字段/顶层字段
            id: "id",
            isCollect: "isCollect",
            isLike: "isLike",
            productId: "productId",
            colId: "pub_col_id",
            colName: "pub_col_name",
            resId: "pub_resource_id",
            resName: "pub_resource_name",
            pubResType: "pub_resource_type",
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
            contentType: "pub_content_type", // 书的类型  纸书：91 电子书 94
            resType: "prod_resource_type",
            salePrice: "prod_sale_price",
            memberPrice: "prod_member_price",
            parentId: 'pub_parent_id',
            fileRecordID: 'fileRecordID'
        },
        bookAdapter: { // 图书
            sysTopic: "BOOK_SYS_TOPIC",
            sysAuthors: "BOOK_SYS_AUTHORS",
            seriesName: "BOOK_SERIES_NAME",
            isbn: "BOOK_ISBN",
            sysCreated: "BOOK_SYS_CREATED",
            pressName: "BOOK_PRESS_NAME",
            bookCata: "BOOK_BOOK_CAT",
            clcCat: "BOOK_CLC_CAT",
            orderObject: "BOOK_READER_OBJECT",
            editor: "BOOK_EDITOR",
            copyDesigner: "BOOK_COPY_DESIGNER",
            coverDesinger: "BOOK_COVER_DESIGNER",
            majorEditor: "BOOK_MAJOR_EDITOR",
            printVersion: "BOOK_PRINT_VERSION",
            bookVersion: "BOOK_BOOK_VERSION",
            textNum: "BOOK_TEXT_NUM",
            price: "BOOK_PRICE",
            shelfAdvice: "BOOK_SHELF_ADVICE",
            format: "BOOK_FORMAT",
            productSize: "BOOK_PRODUCT_SIZE",
            flatPlate: "BOOK_FLAT_PLATE",
            remark: "BOOK_REMARK",
            coverSoft: "BOOK_COVER_SOFT",
            textType: "BOOK_TEXT_TYPE",
            textColor: "BOOK_TEXT_COLOR",
            textSoft: "BOOK_TEXT_SOFT",
            pubdate: "BOOK_PUBDATE",
            materialId: "BOOK_MATERIAL_ID",
            language: "BOOK_LANGUAGE",
            departCascadId: "BOOK_DEPART_CASCADID",
            departId: "BOOK_DEPARTID",
            legalnotice: "BOOK_LEGALNOTICE",
            subtitle: "BOOK_SUBTITLE",
            fitment: "BOOK_FITMENT",
            printCompany: "BOOK_PRINT_COMPANY",
            synopsis: "BOOK_SYNOPSIS",
            printedSheets: "BOOK_PRINTED_SHEETS",
            proofEditor: "BOOK_PROOF_EDITOR",
            keywords: "BOOK_KEYWORDS",
            bookwords: "BOOK_WORDS",
            themeWord: "BOOK_THEME_WORD",
            ontology: "BOOK_ONTOLOGY",
            bookBsn: "BOOK_BSN",
            ebPrice: "BOOK_EB_PRICE",
            bookCatId: "BOOK_BOOK_CATID",
            bookCascadId: "BOOK_BOOK_CASCADID",
            clcCatId: "BOOK_CLC_CATID",
            clcCascadId: "BOOK_CLC_CASCADID",
            departId: "BOOK_DEPARTID",
            departCascadId: "BOOK_DEPART_CASCADID",
            pageNum: "BOOK_PAGE_NUM_BOOK",
            activityList: "activityList",
            bookFreeDownLoadPath: "bookFreeDownLoadPath"
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
        activityVoteAdapter: { /* 投票活动 */
            sysTopic: 'PORTAL_VOTEACTIVITY_SYS_TOPIC',
            description: 'PORTAL_VOTEACTIVITY_DESCRIPTION',
            endTimeStamp: 'PORTAL_VOTEACTIVITY_END_TIMESTAMPNEW',
            beginTimeStamp:'PORTAL_VOTEACTIVITY_BEGIN_TIMESTAMPNEW'
        },
        activityShowAdapter:{/* 展示类活动 */
            sysTopic: 'PORTAL_SHOWACTIVITY_SYS_TOPIC',
            description: 'PORTAL_SHOWACTIVITY_TEXTCONTENT',
        },
        videoAdapter: { // 视频 包括视频组
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
            courseNumber: "GROUP_VIDEO_COURSES_NUMBER",
            courseDuration: "GROUP_VIDEO_COURSES_DURATION",
            coursePrice: "GROUP_VIDEO_PRICE", // 原价
            courseSalePrice: 'GROUP_VIDEO_SALE_PRICE', // 售价
            courseTitle: "GROUP_VIDEO_SYS_TOPIC",
            lecturer: "GROUP_VIDEO_LECTURER", // 讲师
            groupVideoDesc: "GROUP_VIDEO_DESCRIPTION", // 描述
        },
        audioAdapter: { // 音频
            fileSize: "AUDIO-MEDIA_FILE_SIZE",
            coverId: "AUDIO-MEDIA_COVERID",
            rescource: "AUDIO-MEDIA_RESOURCEID",
            themeWord: "AUDIO-MEDIA_THEME_WORD",
            ontology: "AUDIO-MEDIA_ONTOLOGY",
            keywords: "AUDIO-MEDIA_KEYWORDS",
            catId: "AUDIO-MEDIA_MEDIA_CATID",
            mediaCascadId: "AUDIO-MEDIA_MEDIA_CASCADID",
            departId: "AUDIO-MEDIA_DEPARTID",
            departCascadId: "AUDIO-MEDIA_DEPART_CASCADID",
            remotePath: "remotePath",
            refTable: "refTable",
            fileRecordID: "fileRecordID",
            remark: "AUDIO-MEDIA_REMARK",  //备注
            description: "AUDIO-MEDIA_DESCRIPTION",  // 内容简介
            recorder: "AUDIO-MEDIA_RECORDER"  // 制作人
        },
        audioGroupAdapter: { // 音频组
          agCat: "YINPINZU_CAT1",
          agCatCascadId: "YINPINZU_CAT1_CASCADID",
          coursesDuration: "YINPINZU_COURSES_DURATION",
          coursesNumber: "YINPINZU_COURSES_NUMBER",
          coverId: "YINPINZU_COVERID",
          agDescription: "YINPINZU_DESCRIPTION", // 描述信息
          agFullText: "YINPINZU_FULL_TEXT",
          lecturer: "YINPINZU_LECTURER", // 讲师
          agPicNum: "YINPINZU_PIC_NUM",
          agPrice: "YINPINZU_PRICE", // 原价
          agSalePrice: "YINPINZU_SALE_PRICE", // 售价
          agAuthor: "YINPINZU_SYS_AUTHORS",
          agCreated: "YINPINZU_SYS_CREATED",
          agSysTopic: "YINPINZU_SYS_TOPIC"
        },
        columnAdapter: { // 栏目
            colId: "id", // 兼容宗教
            id: "id", //栏目id
            name: "name", // 栏目名称
            code: "code", //副标题
            url: "url",
            bigPic: "big_pic",
            smallPic: "small_pic",
            describe: "describe", //描述信息
            parentId: "parentId",
        },
        magazineAdapter: { // 期刊
            sysTopic: "MAGAZINE_SYS_TOPIC",
            isbn: "MAGAZINE_ISSN",
            cn: "MAGAZINE_CN",
            periodNum: "MAGAZINE_PERIOD_NUM",
            totalPeriod: "MAGAZINE_TOTAL_PERIOD",
            publishYear: "MAGAZINE_PUBLISH_YEAR",
            pressName: "MAGAZINE_PRESS_NAME",
            language: "MAGAZINE_LANGUAGE",
            majorEditor: "MAGAZINE_MAJOR_EDITOR",
            magCat: "MAGAZINE_MAG_CAT",
            editor: "MAGAZINE_EDITOR",
            coverDesigner: "MAGAZINE_COVER_DESIGNER",
            copyDesigner: "MAGAZINE_COPY_DESIGNER",
            magCycle: "MAGAZINE_MAG_CYCLE",
            pageNum: "MAGAZINE_PAGE_NUM",
            price: "MAGAZINE_PRICE",
            format: "MAGAZINE_FORMAT",
            textPaper: "MAGAZINE_TEXT_PAPER",
            color: "MAGAZINE_COLOR",
            textSoft: "MAGAZINE_TEXT_SOFT",
            coverSoft: "MAGAZINE_COVER_SOFT",
            flatPlate: "MAGAZINE_FLAT_PLATE",
            supportProduct: "MAGAZINE_SUPPORT_PRODUCT",
            productSize: "MAGAZINE_PRODUCT_SIZE",
            shelfAdvice: "MAGAZINE_SHELF_ADVICE",
            depart: "MAGAZINE_DEPART",
            readerObject: "MAGAZINE_READER_OBJECT",
            synopsis: "MAGAZINE_SYNOPSIS",
            remark: "MAGAZINE_REMARK",
            orderId: "MAGAZINE_ORDER_ID",
            publishDate: "MAGAZINE_PUBLISH_DATE",
            magId: "MAGAZINE_MAG_ID",
            publicationCatId: "MAGAZINE_PUBLICATION_CATID",
            publicationCascadId: "MAGAZINE_PUBLICATION_CASCADID",
            orientation: "MAGAZINE_ORIENTATION",
            sysCreated: "MAGAZINE_SYS_CREATED",
            keywords: "MAGAZINE_KEYWORDS",
            themeWord: "MAGAZINE_THEME_WORD",
            ontology: "MAGAZINE_ONTOLOGY",
            periodOrder: "MAGAZINE_PERIOD_ORDER",
            magCatId: "MAGAZINE_MAG_CATID",
            magCascadId: "MAGAZINE_MAG_CASCADID",
            departId: "MAGAZINE_DEPARTID",
            departCascadId: "MAGAZINE_DEPART_CASCADID",
            magZg: "MAGAZINE_MAG_ZG"  //主管主办
        },
        productArticleAdapter: { // 稿件
            sysTopic: "PRODUCT-ARTICLE_SYS_TOPIC",
            subTitle: "PRODUCT-ARTICLE_SUBTITLE",
            sysAuthors: "PRODUCT-ARTICLE_SYS_AUTHORS",
            language: "	PRODUCT-ARTICLE_LANGUAGE",
            abstract: "PRODUCT-ARTICLE_ABSTRACT",
            docSource: "PRODUCT-ARTICLE_DOCSOURCE",
            magazine: "PRODUCT-ARTICLE_MAGAZINE",
            engKeywords: "PRODUCT-ARTICLE_ENGKEYWORDS",
            columnName: "PRODUCT-ARTICLE_COLUMNNAME",
            ontology: "PRODUCT-ARTICLE_ONTOLOGY",
            keyWords: "PRODUCT-ARTICLE_KEYWORDS",
            themeWord: "PRODUCT-ARTICLE_THEME_WORD",
            authorUnit: "PRODUCT-ARTICLE_AUTHORUNIT",
            authorAddress: "PRODUCT-ARTICLE_AUTHORADDRESS",
            publishYear: "PRODUCT-ARTICLE_PUBLISH_YEAR",
            periodNum: "PRODUCT-ARTICLE_PERIOD_NUM",
            publishDate: "PRODUCT-ARTICLE_PUBLISHDATE",
            totalPeriod: "PRODUCT-ARTICLE_TOTAL_PERIOD",
            engAbstract: "PRODUCT-ARTICLE_ENGABSTRACT",
            resourceId: "PRODUCT-ARTICLE_RESOURCEID",
            knowCat: "PRODUCT-ARTICLE_KNOWCAT",
            reference: "PRODUCT-ARTICLE_REFERENCE",
            format: "PRODUCT-ARTICLE_FORMAT",
            knowCatId: "PRODUCT-ARTICLE_KNOWCATID",
            knowCascadId: "PRODUCT-ARTICLE_KNOWCASCADID",
            pages: "PRODUCT-ARTICLE_PAGES",
            paContent: "PRODUCT-ARTICLE_CONTENT",
            articleFlag: "PRODUCT-ARTICLE_ARTICLE_FLAG"
        },
        imageAdapter: { //图片
            coverId: "MATERIAL-PIC_COVERID",
            picDesc: "MATERIAL-PIC_DESCRIPTION",
            picFileSize: "MATERIAL-PIC_FILE_SIZE",
            format: "MATERIAL-PIC_FORMAT",
            height: "MATERIAL-PIC_HEIGHT",
            width: "MATERIAL-PIC_WEIGHT",
            resourceId: "MATERIAL-PIC_RESOURCEID",
            authors: "MATERIAL-PIC_SYS_AUTHORS",
            sysTopic: "MATERIAL-PIC_SYS_TOPIC",
            keyWords: "MATERIAL-PIC_KEYWORDS",
            remark: "MATERIAL-PIC_REMARK",
            picCat: "MATERIAL-PIC_PIC_CAT",
            pubTime: "pub_created",
            actTime: "MATERIAL-PIC_ACT_TIME",
            actSpot: "MATERIAL-PIC_ACT_SPOT"
        },
        talentAdapter: { // 人才招聘
            coverId: "COVERID",
            resourceId: "RESOURCEID",
            sysTopic: "SYS_TOPIC",
            type: "TYPE",
            sex: "SEX",
            address: "ADDRESS",
            birth: "BIRTH",
            place: "PLACE",
            cardId: "CARD_ID",
            specialty: "SPECIALTY",
            politicalStatus: "POLITICAL_STATUS",
            cat1: "CAT_1",
            race: "RACE",
            workAddress: "WORK_ADDRESS",
            graduateInstitutions: "GRADUATE_INSTITUTIONS",
            education: "EDUCATION",
            degree: "DEGREE",
            specialty1: "SPECIALTY",
            wysp: "WYSP",
            jsjsp: "JSJSP",
            org: "ORG",
            firstOrg: "FIRST_ORG",
            qualification: "QUALIFICATION",
            activities: "ACTIVITIES",
            specialties: "SPECIALTIES",
            maritalStatus: "MARITAL_STATUS",
            health: "HEALTH",
            height: "HEIGHT",
            phone: "PHONE",
            mailCode: "MAIL_CODE",
            email: "EMAIL",
            mailAddress: "MAIL_ADDRESS",
            experience: "EXPERIENCE",
            achievements: "ACHIEVEMENTS",
            awardRecords: "AWARD_RECORDS",
            internshipExperience: "INTERNSHIP_EXPERIENCE",
            wordExperience: "WORK_EXPERIENCE",
            familySituation: "FAMILY_SITUATION",
            otherSituation: "OTHER_SITUATION",
            description: "DESCRIPTION"
        },
        sampleBookAdapter:{  // 样书
            name: "NAME",  // 姓名
            school: "SCHOOL",  // 执教学校
            college: "COLLEGE",  // 所属院系
            profession: "PROFESSIONAL_TITLE",  // 职称
            duty: "ADMINISTRATIVE_DUTIES",   // 行政职务
            teachLevel: "TEACHING_LEVEL",   // 教学层次
            email: "EMAIL",
            presentWay: "PRESENTED_WAY",  // 赠书方式
            address: "ADDRESS", // 地址
            course: "COURSE",  // 所授课程
            scale: "SCALE", // 授课学生规模
            teachMaterial: "TEACHING_MATERIAL", // 现用教材
            cooPurpose: "COOPERATIVE_PURPOSE", // 是否有与我社的合作出版意向
            selectTopic: "SELECTED_TOPIC",  // 选题名称或方向
            otherOpinion: "OTHER_OPINIONS",  // 其他意见
            telephone: "TELEPHONE" // 联系电话
        }
    }
};

export {
    FIELD_ADAPTER
};
