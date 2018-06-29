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
            departCascadId: "AUDIO-MEDIA_DEPART_CASCADID",
            remotePath: "remotePath",
            refTable: "refTable",
            fileRecordID: "fileRecordID",
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
        },
        productArticleAdapter: { // 稿件
            sysTopic: "PRODUCT-ARTICLE _SYS_TOPIC",
            subTitle: "PRODUCT-ARTICLE _SUBTITLE",
            sysAuthors: "PRODUCT-ARTICLE _SYS_AUTHORS",
            language: "	PRODUCT-ARTICLE _LANGUAGE",
            abstract: "PRODUCT-ARTICLE _ABSTRACT",
            docSource: "PRODUCT-ARTICLE _DOCSOURCE",
            magazine: "PRODUCT-ARTICLE _MAGAZINE",
            engKeywords: "PRODUCT-ARTICLE _ENGKEYWORDS",
            columnName: "PRODUCT-ARTICLE _COLUMNNAME",
            ontology: "PRODUCT-ARTICLE _ONTOLOGY",
            keyWords: "PRODUCT-ARTICLE _KEYWORDS",
            themeWord: "PRODUCT-ARTICLE _THEME_WORD",
            authorUnit: "PRODUCT-ARTICLE _AUTHORUNIT",
            authorAddress: "PRODUCT-ARTICLE _AUTHORADDRESS",
            publishYear: "PRODUCT-ARTICLE _PUBLISH_YEAR",
            periodNum: "PRODUCT-ARTICLE _PERIOD_NUM",
            publishDate: "PRODUCT-ARTICLE _PUBLISHDATE",
            totalPeriod: "PRODUCT-ARTICLE _TOTAL_PERIOD",
            engAbstract: "PRODUCT-ARTICLE _ENGABSTRACT",
            resourceId: "PRODUCT-ARTICLE _RESOURCEID",
            knowCat: "PRODUCT-ARTICLE _KNOWCAT",
            reference: "PRODUCT-ARTICLE _REFERENCE",
            format: "PRODUCT-ARTICLE _FORMAT",
            knowCatId: "PRODUCT-ARTICLE _KNOWCATID",
            knowCascadId: "PRODUCT-ARTICLE _KNOWCASCADID",
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
        talentAdapter: {
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
        }
    }
};

export {
    FIELD_ADAPTER
};