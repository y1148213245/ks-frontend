/*  课程列表展示组件  Created by yy 2018/05/10  */
import component from "../videoColumn.vue";

const name = component.name; // 组件标签名

const title = "课程列表展示组件"; // 组件title

const description = `课程列表展示组件`; // 组件描述信息

const dev = {
  list_pic: {
    list_pic_36: {
      'videolist': {
        display: {
          courseContain: '课程包含内容：',
          courseName: '课程名称'
        },
        url: "spc/cms/publish/list.do",
        params: {
          conditions: "[{pub_parent_id:'2179'}]",
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order asc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "16",
          searchText: "",
        },
        toDetail: { // 去视频详情页面
          url: "../pages/videoplay.html",
          dataKeys: {
            parentId: "parentId", // id是从适配器里对应的
            id: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
        },
        keys: { // 字段兼容
          bookName: "pub_resource_name",
          starNum: "pub_star_num",
          memberPrice: "prod_member_price",
          ebPrice: "BOOK_EB_PRICE",
          bookAuthor: "BOOK_SYS_AUTHORS",
          pubId: "id",
          contentType: "pub_content_type",
          colId: "pub_col_id",
          colName: "pub_col_name",
          bookPic: "pub_picBig",
          pressName: "BOOK_PRESS_NAME",
          pubDate: "BOOK_PUBDATE",
          column: "VIDEO-MEDIA_SYS_TOPIC",
          id: "id",
          parentId: "pub_parent_id"
        },
        detailHref: "./bookdetail.html", // 详情
        moreHref: "./bookList.html", // 更多
        maxNum: 15,
        pageSizes:[8,16,32,48],

      }
    }
  }
}

const prod = {
  list_pic: {
    list_pic_36: {
      'videolist': {
        display: {
          courseContain: '课程包含内容：',
          courseName: '课程名称'
        },
        url: "spc/cms/publish/list.do",
        params: {
          conditions: "[{pub_parent_id:'2179'}]",
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order asc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "16",
          searchText: "",
        },
        toDetail: { // 去视频详情页面
          url: "../pages/videoplay.html",
          dataKeys: {
            parentId: "parentId", // id是从适配器里对应的
            id: "id", // id是从适配器里对应的
          },
          fixedKeys: {}
        },
        keys: { // 字段兼容
          bookName: "pub_resource_name",
          starNum: "pub_star_num",
          memberPrice: "prod_member_price",
          ebPrice: "BOOK_EB_PRICE",
          bookAuthor: "BOOK_SYS_AUTHORS",
          pubId: "id",
          contentType: "pub_content_type",
          colId: "pub_col_id",
          colName: "pub_col_name",
          bookPic: "pub_picBig",
          pressName: "BOOK_PRESS_NAME",
          pubDate: "BOOK_PUBDATE",
          column: "VIDEO-MEDIA_SYS_TOPIC",
          id: "id",
          parentId: "pub_parent_id"
        },
        detailHref: "./bookdetail.html", // 详情
        moreHref: "./bookList.html", // 更多
        maxNum: 15,
        pageSizes:[8,16,32,48],

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
