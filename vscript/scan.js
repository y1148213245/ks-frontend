
const path = require('path')
// glob是webpack安装时依赖的一个第三方模块，还模块允许你使用 *等符号, 例如lib/*.js就是获取lib文件夹下的所有js后缀名的文件
var glob = require('glob');
const fs = require("fs");
const projectConfig = require('../src/config')
var components = []/* vue数组 */
test();


function test (params) {
  let pagePath = path.resolve(__dirname, '../src/projects/' + projectConfig.concurrentProject + '/pages');
  let componentsPath = path.resolve(__dirname, '../src/components')
  
  let componentsPathList = glob.sync(componentsPath + '/*/*/*.vue').concat(glob.sync(componentsPath + '/*/*/*/*.vue'))//获得vue组件路径


  componentsPathList.forEach(componentPath=>{
     
      let component = {
        tag:'',
        path:componentPath,
        children:[],
        childComponent:[]
      }
      let examplePath = path.resolve(componentPath,'../js/example.js')

      /* 读取example.js */
      try{
        let data = fs.readFileSync(examplePath, { flag: 'r+', encoding: 'utf8' });
        data.replace(/childComponents\s*\=\s*(.*?)[;\n]/,function (full,sub) {
          if (sub) {
            component.children = JSON.parse(sub)
          }
          console.log(component.children);
        })
      }catch(err){

      }

      /* 读取vue组件 */
      try{
        let data = fs.readFileSync(componentPath, { flag: 'r+', encoding: 'utf8' })
        data.replace(/name:\s*[\"\'](.*?)[\"\']\s*,/,function(full,sub){
          if (sub) {
            component.tag = sub;
            console.info(sub)
          }else{
            console.error(componentPath+':未获取到组件name')
          }
        })
      }catch(err){

      }
      components.push(component)
    })

  /* 创建子父组件引用关系 */ 
  components.forEach(component=>{
    if (component.children.length>0) {
      component.children.forEach(childName=>{
        components.forEach(item=>{
          if (item.tag == childName) {
            component.childComponent.push(item)
          } 
        })
      })
    }
  })

  /**
   * readFile(filename,[options],callback)
   * 
   * filename, 必选参数，文件名
   * [options],可选参数，可指定flag（文件操作选项，如r+ 读写；w+ 读写，文件不存在则创建）及encoding属性
   * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
   */
  let pagePathList = glob.sync(pagePath + '/*.html');
  let pageComponentsArr = [];
  let usedComponents = [];
  /* 获取页面使用组件的标签 */
  pagePathList.forEach(pagePath=>{
    let pageData = fs.readFileSync(pagePath, { flag: 'r+', encoding: 'utf8' })
    let componentsTagNames = pageData.match(/(?!\<)(ui_|work_)(.*?)((?=\s)|(?=\>))/g) /* 筛选组件库标签 */
    if (componentsTagNames && componentsTagNames.length>0) {
      pageComponentsArr.push(componentsTagNames);
    }
    
  })
  /* 过滤组件库组件 得到使用的组件名及子组件名 */
  components.forEach(component=>{//所有组件
    pageComponentsArr.forEach(pageComponents=>{//所有页面的组件名数组
      pageComponents.forEach(componentName=>{//每个页面的组件名数组
        if(component.tag == componentName){
          let entry = null;
          if (component.childComponent.length<=0) {
            let flag = !checkComponent(component.tag)
            if (flag) {
              entry = component;
              //添加组件地址
            }
          } else {
            component.childComponent.forEach(item=>{//添加子组件地址
              if (!checkComponent(item.tag)) {
                entry = item
              }
            })
            
          }
          
          if (entry) {
            /* 路径转换 */
            let relativePath = path.relative(componentsPath,entry.path)
            entry.path = path.join('@components',relativePath).replace(/\\/g,'/')

            usedComponents.push(entry)
          }

          
          /* 检测重复 */
          function checkComponent(name){
            let flag = false;
            for (let index = 0; index < usedComponents.length; index++) {
              const item = usedComponents[index];
              if (item.tag == name) {
                flag = true;
                break;
              }
            }
            return flag
          }
        }
      })
    })
  })

  let writeStrs = [];
  usedComponents.forEach(component=>{
    writeStrs.push(`\tVue.component("${component.tag}" , () => import("${component.path}"));\n`);
  })

  fs.writeFileSync(path.resolve(__dirname, '../src/projects/', projectConfig.concurrentProject, "main/SelectedComponents.js"),
  `
import Vue from 'vue';

function initVueComponents () {
${writeStrs.join("")}
}
export default initVueComponents;
`
  )
}