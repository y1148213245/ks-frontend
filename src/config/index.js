/**
 * Created by codingnuts on 2017/12/7.
 */
module.exports = {
  //项目名 - 根据这里设置的项目名，启动不同的项目
  concurrentProject: process.env.PROJECT_ENV || "huayu",
  //proxy: {
  // 'http://localhost:8081': {
  // target: 'http://www.liaoningxinhuajiaoyu.com',
  // pathRewrite: {"^/file": "/portal/file"},
  //changeOrigin: true
  // }
  //},
  proxy: {
    "/file": {
      target: "http://www.liaoningxinhuajiaoyu.com",
      pathRewrite: {
        "^/file": "/portal/file"
      },
      logLevel: 'debug'
    }
  }
}
