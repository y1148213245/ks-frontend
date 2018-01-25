const resourceConfig={
  resourceType:{
    url:"http://172.19.57.153/spc-portal-web/spc/prodb/allDoclibs.do"
  },
  resourceNote:{
    url:"http://172.19.57.153/spc-portal-web/spc/prodb/doclibFields.do",
    params:{
      doclibCode:""
    }
  }
}

const resourceFileType={
  "VARCHAR":"字符串",
  "INTEGER":"整数",
  "LONG":"长整数",
  "FLOAT":"实数",
  "TIMESTAMP":"时间",
  "DATE":"日期",
  "CLOB":"大字段类型"
}

export {resourceConfig,resourceFileType};
