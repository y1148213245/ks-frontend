/*    */
import component from "../onlineqa.vue";

const name = component.name; // 组件标签名

const title = "在线问答组件"; // 组件title

const description = ``; // 组件描述信息

const dev = {
  work_onlineqa: {
    work_onlineqa_01: {
      'modulename': {
        commitQuestion: { //  提交问题
          url: 'spc/prodb/saveItem.do',
          params: {
            doclibCode: "QUE_ANS", // 在线问答
            dataMap: {
              SYS_TOPIC: '', // 问题名称 随机字符串
              REQUESTER: '', // 提问者
              QUES_CONTENT: '', // 问题内容
            }
          }
        },
        queryQA: { // 查询问答列表
          url: "spc/prodb/searchNL.do",
          params: {
            doclibCode: 'QUE_ANS', // 在线问答
            status: 0,
            page: 0,
            size: 2,
            pageable: 1,
          }
        },
        pagination: { // 分页信息
          pagesize: [2, 30, 50, 100], // 如何分页
        },
        staticText: {
          commit: '提交',
          questioner: "提问人",
          answer: "回答者",
          loginFirst: "请您先登录",
          noContent: "提问内容不得为空",
          answerSuccess: "您已提问成功，待审核通过后显示。",
          opFailed: "操作失败",
        }
      }
    }
  }
}

const prod = {
  work_onlineqa: {
    work_onlineqa_01: {
      'modulename': {
        commitQuestion: { //  提交问题
          url: 'spc/prodb/saveItem.do',
          params: {
            doclibCode: "QUE_ANS", // 在线问答
            dataMap: {
              SYS_TOPIC: '', // 问题名称 随机字符串
              REQUESTER: '', // 提问者
              QUES_CONTENT: '', // 问题内容
            }
          }
        },
        queryQA: { // 查询问答列表
          url: "spc/prodb/searchNL.do",
          params: {
            doclibCode: 'QUE_ANS', // 在线问答
            status: 0,
            page: 0,
            size: 2,
            pageable: 1,
          }
        },
        pagination: { // 分页信息
          pagesize: [2, 30, 50, 100], // 如何分页
        },
        staticText: {
          commit: '提交',
          questioner: "提问人",
          answer: "回答者",
          loginFirst: "请您先登录",
          noContent: "提问内容不得为空",
          answerSuccess: "您已提问成功，待审核通过后显示。",
          opFailed: "操作失败",
        }
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
