(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d9f81"],{"6a33":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("h4",{staticClass:"form-header h4"},[e._v("基本信息")]),a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:8,offset:2}},[a("el-form-item",{attrs:{label:"用户昵称",prop:"nickName"}},[a("el-input",{attrs:{disabled:""},model:{value:e.form.nickName,callback:function(t){e.$set(e.form,"nickName",t)},expression:"form.nickName"}})],1)],1),a("el-col",{attrs:{span:8,offset:2}},[a("el-form-item",{attrs:{label:"登录账号",prop:"phonenumber"}},[a("el-input",{attrs:{disabled:""},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}})],1)],1)],1)],1),a("h4",{staticClass:"form-header h4"},[e._v("角色信息")]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",attrs:{"row-key":e.getRowKey,data:e.roles.slice((e.pageNum-1)*e.pageSize,e.pageNum*e.pageSize)},on:{"row-click":e.clickRow,"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{label:"序号",type:"index",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.pageNum-1)*e.pageSize+t.$index+1))])]}}])}),a("el-table-column",{attrs:{type:"selection","reserve-selection":!0,width:"55"}}),a("el-table-column",{attrs:{label:"角色编号",align:"center",prop:"roleId"}}),a("el-table-column",{attrs:{label:"角色名称",align:"center",prop:"roleName"}}),a("el-table-column",{attrs:{label:"权限字符",align:"center",prop:"roleKey"}}),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.pageNum,limit:e.pageSize},on:{"update:page":function(t){e.pageNum=t},"update:limit":function(t){e.pageSize=t}}}),a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{staticStyle:{"text-align":"center","margin-left":"-120px","margin-top":"30px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("提交")]),a("el-button",{on:{click:function(t){return e.close()}}},[e._v("返回")])],1)],1)],1)},o=[],n=(a("d3b7"),a("159b"),a("d81d"),a("a15b"),a("c0c7")),r={name:"AuthRole",data:function(){return{loading:!0,total:0,pageNum:1,pageSize:10,roleIds:[],roles:[],form:{}}},created:function(){var e=this,t=this.$route.params&&this.$route.params.userId;t&&(this.loading=!0,Object(n["e"])(t).then((function(t){e.form=t.user,e.roles=t.roles,e.total=e.roles.length,e.$nextTick((function(){e.roles.forEach((function(t){t.flag&&e.$refs.table.toggleRowSelection(t)}))})),e.loading=!1})))},methods:{clickRow:function(e){this.$refs.table.toggleRowSelection(e)},handleSelectionChange:function(e){this.roleIds=e.map((function(e){return e.roleId}))},getRowKey:function(e){return e.roleId},submitForm:function(){var e=this,t=this.form.userId,a=this.roleIds.join(",");Object(n["k"])({userId:t,roleIds:a}).then((function(t){e.$modal.msgSuccess("授权成功"),e.close()}))},close:function(){this.$store.dispatch("tagsView/delView",this.$route),this.$router.push({path:"/system/user"})}}},i=r,s=a("2877"),c=Object(s["a"])(i,l,o,!1,null,null,null);t["default"]=c.exports}}]);