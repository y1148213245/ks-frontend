<template>
  <div class="components_resource_lib">
    <el-row class="tac fl">
      <el-col :span="12" :style="{height: clientHeight + 'px'}" class="comList">
        <el-menu
          default-active="0"
          class="el-menu-vertical-demo">
          <el-menu-item v-for="(item,index) in resourceTypeList" :key="index" :index="String(index)" @click="changeNote(item.docLibCode)">
            <i class="el-icon-menu"></i>
            <span slot="title" v-text="item.colName"></span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <!--<table class="fl" border="1" cellspacing="0">-->
      <!--<thead>-->
        <!--<th>字段名称</th>-->
        <!--<th>显示名称</th>-->
        <!--<th>字段类型</th>-->
      <!--</thead>-->
      <!--<tbody>-->
        <!--<tr v-for="(item,index) in resourceNoteList">-->
          <!--<td width="400">{{item.fieldName}}</td>-->
          <!--<td width="400">{{item.fieldNameCn}}</td>-->
          <!--<td>{{item.filedTypeName}}</td>-->
        <!--</tr>-->
      <!--</tbody>-->
    <!--</table>-->
    <el-table
      :data="resourceNoteList"
      border
      style="width: 80%;float: left;margin-left: 20%">
      <el-table-column
        prop="fieldName"
        label="字段名称"
        width="400">
      </el-table-column>
      <el-table-column
        prop="fieldNameCn"
        label="显示名称"
        width="400">
      </el-table-column>
      <el-table-column
        prop="filedTypeName"
        label="字段类型">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    import {resourceConfig,resourceFileType} from "./config/api.js";
    import {Get} from "@common";
    export default {
        name: "components_resource_lib",
        reused:true,
        data:function(){
          return {
            resourceTypeList:[],
            resourceNoteList:[],
            clientHeight:0
          }
        },
        mounted:function(){
          this.resourceTypeConfig=resourceConfig.resourceType;  //资源列表接口配置
          this.resourceNoteConfig=resourceConfig.resourceNote;  //资源信息接口配置
          this.getResourceType();   //获取资源列表
          this.clientHeight = document.documentElement.clientHeight;
        },
        methods:{
          getResourceType:function(){
            Get(this.resourceTypeConfig.url).then((rep)=>{
              if(rep.data && rep.data instanceof Array){
                this.resourceTypeList=rep.data;
                this.changeNote(rep.data[0].docLibCode);  //默认显示第一条
              }
            });
          },
          changeNote:function(id){
            let params=Object.assign({},this.resourceNoteConfig.params,{doclibCode:id});
            Get(this.resourceNoteConfig.url,{"params":params}).then((rep)=>{
              let data=rep.data.fields;
              if(data && data instanceof Array){
                data.forEach(function(item,index){
                  if(resourceFileType.hasOwnProperty(item.fieldType)){
                    item.filedTypeName=resourceFileType[item.fieldType];
                  }
                });
                this.resourceNoteList=data;
              }
            });

          }
        }
    }
</script>

<style scoped>
  .components_resource_lib .el-row{
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
  }
  .components_resource_lib .el-col{
    width: 100%;
    overflow-y: scroll;
  }
  .components_resource_lib .comList::-webkit-scrollbar {
    width: 10px;
  }
  .components_resource_lib .comList::-webkit-scrollbar-thumb {
    background: #d2d2d2;
    background-clip: padding-box;
    border: 3px solid #fff;
    border-radius: 5px;
  }
  .components_resource_lib .el-menu{
    border-right: none;
  }
  .fl{
    float: left;
  }
  thead{
    height: 30px;
  }
  tbody td{
    text-align: center;
  }
  tbody tr:nth-child(even){
    background-color: #eee;
  }
</style>
