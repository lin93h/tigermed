(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f844103","chunk-f4ec5f10"],{"078a":function(e,t,r){"use strict";r.d(t,"f",(function(){return _})),r.d(t,"d",(function(){return n})),r.d(t,"e",(function(){return i})),r.d(t,"g",(function(){return o})),r.d(t,"a",(function(){return u})),r.d(t,"i",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return c})),r.d(t,"h",(function(){return d}));var a=r("b775");function _(e){return Object(a["b"])({url:"/query/conf/list",method:"get",params:e})}function n(e){return Object(a["b"])({url:"/query/conf/"+e,method:"get"})}function i(e){return Object(a["b"])({url:"/query/conf/byfieldid/"+e,method:"get"})}function o(e){return Object(a["b"])({url:"/query/conf/selectConfByFieldId/"+e,method:"get"})}function u(e){return Object(a["b"])({url:"/query/conf",method:"post",data:e})}function s(e){return Object(a["b"])({url:"/query/conf",method:"put",data:e})}function l(e){return Object(a["b"])({url:"/query/conf/"+e,method:"delete"})}function c(e){return Object(a["b"])({url:"/query/conf/export",method:"get",params:e})}function d(e){return Object(a["b"])({url:"/log/list",method:"get",params:e})}},"937a":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("avue-crud",{attrs:{option:e.option,data:e.data,page:e.page,"cell-class-name":e.addClass},on:{"update:page":function(t){e.page=t},"on-load":e.onLoad,"cell-click":e.pageto},scopedSlots:e._u([{key:"menuLeft",fn:function(t){return[r("el-form",{staticClass:"demo-form-inline",staticStyle:{"margin-top":"20px"},attrs:{inline:"",model:e.formInline,"label-width":"120px"}},[e._l(e.search,(function(t){return t.flag?r("el-form-item",{attrs:{label:t.lable}},[t.flag&&"1"==t.type?r("el-input",{staticStyle:{width:"200px"},attrs:{clearable:""},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}}):e._e(),t.flag&&"2"==t.type?r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}}):e._e(),t.flag&&"3"==t.type?r("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"item.value"}},e._l(t.downBoxData,(function(e){return r("el-option",{attrs:{label:e.label,value:e.value}})})),1):e._e()],1):e._e()})),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")]),e.isExport?r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.exportLoading,expression:"exportLoading"}],attrs:{type:"primary"},on:{click:e.handleExport}},[e._v("导出")]):e._e()],1)],2)]}}])}),r("el-dialog",{attrs:{title:e.erjititle,visible:e.erjidialogTableVisible,fullscreen:"","append-to-body":""},on:{"update:visible":function(t){e.erjidialogTableVisible=t}}},["1"==e.type?r("queryPage",{ref:"erjiQueryPage",attrs:{reportIdF:e.reportId,valueF:e.value}}):e._e(),"2"==e.type?r("detail",{ref:"erjiQueryPage",attrs:{reportId:e.reportId,column:e.column,value:e.value}}):e._e()],1)],1)},_=[],n=r("bf71"),i=n["a"],o=(r("e621"),r("2877")),u=Object(o["a"])(i,a,_,!1,null,null,null);t["default"]=u.exports},"93a2":function(e,t,r){"use strict";r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return o}));var a=r("b775");function _(e){return Object(a["b"])({url:"/query/query/dynamicList",method:"post",data:e})}function n(e){return Object(a["b"])({url:"/query/query/export",method:"post",data:e})}function i(e){return Object(a["b"])({url:"/query/query/getConf",method:"get",params:e})}function o(e){return Object(a["b"])({url:"/query/query/getParamList",method:"get",params:e})}},bf71:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_project_report_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("53ca"),D_project_report_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("1da1"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("96cf"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("841c"),core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("b0c0"),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("b64b"),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("b680"),core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_7__),_api_query_queryPage__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("93a2"),_api_query_fieldlist__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("ed2c"),_api_query_conf__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("078a"),_views_query_detail__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("c49d");__webpack_exports__["a"]={name:"queryPage",components:{detail:_views_query_detail__WEBPACK_IMPORTED_MODULE_11__["default"]},data:function(){return{exportLoading:!1,isPage:!0,isExport:!0,openType:"1",type:"1",reportId:0,column:"",value:"",erjidialogTableVisible:!1,erjititle:"",flag:0,page:{pageSize:20,pagerCount:5,currentPage:1,total:0},form:{},data:[],option:{menu:!1,addBtn:!1,align:"center",menuAlign:"center",column:[]},selectdata:[],value1:"",formInline:{},formParam:{},search:[],erjiFieldList:[],pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]},optionsSelect:[],loadFlag:!1}},props:["reportIdF","valueF"],created:function(){void 0!=this.reportIdF?(this.value1=this.reportIdF,this.chuShi()):(this.value1=this.$route.query.id,void 0!=this.value1&&this.chuShi())},computed:{baobiaoData:function(){var e=this.reportIdF,t=this.valueF;return{reportIdF:e,valueF:t}}},watch:{baobiaoData:function(e,t){this.value1=this.reportIdF,this.chuShi()}},methods:{chuShi:function(){var e=this;Object(_api_query_conf__WEBPACK_IMPORTED_MODULE_10__["d"])(this.value1).then((function(t){if(void 0!=t.data.config){var r=JSON.parse(t.data.config);2==r.isExport&&(e.isExport=!1),2==r.isPage&&(e.isPage=!1)}})),Object(_api_query_fieldlist__WEBPACK_IMPORTED_MODULE_9__["d"])(this.value1).then((function(t){e.erjiFieldList=t.data,e.getParamList(),e.loadFlag=!0}))},setId:function(e){this.value1=e,this.chuShi()},handleExport:function(){var e=this;this.$modal.confirm("是否确认导出数据？").then((function(){if(""!=e.value1&&null!=e.value1){var t={};return t.p=e.search,t.pageNum=1,t.pageSize=1e3,e.exportLoading=!0,Object(_api_query_queryPage__WEBPACK_IMPORTED_MODULE_8__["b"])(t)}e.$message.success("请选择查询项")})).then((function(t){e.$download.name(t.msg),e.exportLoading=!1})).catch((function(){}))},addClass:function(e){e.row;for(var t=e.column,r=(e.rowIndex,e.columnIndex,0);r<this.erjiFieldList.length;r++)if(t.label==this.erjiFieldList[r].label)return"cell-color"},pageto:function(e,t,r,a){for(var _=this,n=function(r){t.label==_.erjiFieldList[r].label&&Object(_api_query_conf__WEBPACK_IMPORTED_MODULE_10__["g"])(_.erjiFieldList[r].id).then(function(){var t=Object(D_project_report_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["a"])(regeneratorRuntime.mark((function t(a){var n,i,o,u,s,l,c,d,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=JSON.parse(_.erjiFieldList[r].config),i=JSON.parse(a.data[0].config),[],o="string"==typeof i.isTableData?JSON.parse(i.isTableData):i.isTableData,0!=o.length)for(u in o)for(null!=e[o[u]]&&(o[u]=e[o[u]]),s=0;s<_.search.length;s++)_.search[s].fieldName==o[u]&&(o[u]=_.search[s].value);for(e.isTableData=o,_.type=a.data[0].type,_.reportId=a.data[0].id,_.erjititle=a.data[0].name,_.value=e,l=0;l<_.search.length;l++)void 0==e[_.search[l].fieldName]&&(e[_.search[l].fieldName]=_.search[l].value);return c=_.tansParams(e),1,t.next=15,Object(_api_query_fieldlist__WEBPACK_IMPORTED_MODULE_9__["f"])(_.erjiFieldList[r].id).then((function(e){var t=JSON.parse(e.data.config);t.openType}));case 15:if(1!=i.isTable){t.next=19;break}return _.reportId=i.isTableId,t.next=19,Object(_api_query_conf__WEBPACK_IMPORTED_MODULE_10__["d"])(i.isTableId).then((function(e){_.type=e.data.type}));case 19:void 0==_.type&&(_.type=1),2==n.openType?1==_.type?(d=location.pathname+"#/queryPage?id="+_.reportId+"&"+c,window.open(d)):(p=location.pathname+"#/detail?reportId="+_.reportId+"&"+c,window.open(p)):_.erjidialogTableVisible=!0;case 21:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},i=0;i<this.erjiFieldList.length;i++)n(i)},tansParams:function(e){for(var t="",r=0,a=Object.keys(e);r<a.length;r++){var _=a[r],n=e[_],i=encodeURIComponent(_)+"=";if(null!==n&&"undefined"!==typeof n)if("object"===Object(D_project_report_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__["a"])(n))for(var o=0,u=Object.keys(n);o<u.length;o++){var s=u[o];if(null!==n[s]&&"undefined"!==typeof n[s]){var l=_+"["+s+"]",c=encodeURIComponent(l)+"=";t+=c+encodeURIComponent(n[s])+"&"}}else t+=i+encodeURIComponent(n)+"&"}return t},onLoad:function(e){this.loadFlag&&this.onSubmit()},getSelectdata:function(){var e=this;Object(_api_query_queryPage__WEBPACK_IMPORTED_MODULE_8__["c"])().then((function(t){e.selectdata=t.data}))},getParamList:function(){var e=this,t={reportId:this.value1};this.data=[],this.option.column=[],Object(_api_query_queryPage__WEBPACK_IMPORTED_MODULE_8__["d"])(t).then((function(t){if(e.search=t.data,void 0!=e.valueF){for(var r=e.valueF.isTableData,a=0;a<e.search.length;a++)e.search[a].value=e.valueF[e.search[a].fieldName];for(var _ in r)for(var n=0;n<e.search.length;n++)e.search[n].fieldName==_&&(e.search[n].value=r[_])}if(void 0!=e.valueF){for(var i=e.valueF.isTableData,o=0;o<e.search.length;o++)e.search[o].value=e.valueF[e.search[o].fieldName];for(var u in i)for(var s=0;s<e.search.length;s++)e.search[s].fieldName==u&&(e.search[s].value=i[u])}var l=e.$route.query;for(var c in l)if(-1!=c.indexOf("isTableData"))for(var d=c.substring(c.indexOf("[")+1,c.lastIndexOf("]")),p=0;p<e.search.length;p++)e.search[p].fieldName==d&&(e.search[p].value=l[c]);e.onSubmit()}))},onSubmit:function onSubmit(){var _this6=this;if(""!=this.value1&&null!=this.value1){var params={};params.p=this.search,params.pageNum=this.page.currentPage,params.pageSize=this.page.pageSize,this.isPage||(params.pageSize=1e3),Object(_api_query_queryPage__WEBPACK_IMPORTED_MODULE_8__["a"])(params).then((function(response){_this6.data=response.data.rows,_this6.page.total=response.data.total,_this6.option.column=response.column;for(var columnConfig=response.columnConfig,isSum=!1,isCount=!1,sumMap={},countMap={},i=0;i<columnConfig.length;i++){var config=JSON.parse(columnConfig[i].config);if(1==config.isSum)if(isSum=!0,2!=config.sumType){for(var sum=0,j=0;j<_this6.data.length;j++)"number"==typeof _this6.data[j][columnConfig[i].prop]&&(sum+=_this6.data[j][columnConfig[i].prop]);sum=eval(sum.toFixed(4)),sumMap[columnConfig[i].prop]=sum}else sumMap[columnConfig[i].prop]=config.sum;1==config.isCount&&(isCount=!0,countMap[columnConfig[i].prop]="计数:"+_this6.page.total)}sumMap[columnConfig[0].prop]="合计",isSum&&_this6.data.push(sumMap),isCount&&_this6.data.push(countMap),_this6.isPage||(_this6.page.total=0)}))}else this.$message.success("请选择查询项")}}}},c49d:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"200px"}},[r("el-row",e._l(e.columns,(function(t,a){return r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:t.label}},[r("el-input",{attrs:{disabled:!0},model:{value:e.form[t.prop],callback:function(r){e.$set(e.form,t.prop,r)},expression:"form[item.prop]"}})],1)],1)})),1)],1)],1)},_=[],n=(r("ac1f"),r("841c"),r("93a2")),i={data:function(){return{search:{},columns:[],data:[],form:{}}},props:["reportId","column","value"],computed:{baobiaoData:function(){var e=this.reportId,t=this.value;return{reportId:e,value:t}}},watch:{baobiaoData:function(e,t){this.value1=this.reportId,this.getParamList()}},mounted:function(){void 0==this.$route.query.reportId?(this.value1=this.reportId,this.getParamList()):(this.reportId=this.$route.query.reportId,this.column=this.$route.query.column,this.value=this.$route.query)},methods:{getParamList:function(){var e=this,t={reportId:this.value1};Object(n["d"])(t).then((function(t){e.search=t.data;for(var r=0;r<e.search.length;r++)e.search[r].value=e.value[e.search[r].fieldName];e.onSubmit()}))},onSubmit:function(){var e=this,t={};t.p=this.search,t.pageNum=1,t.pageSize=999999,Object(n["a"])(t).then((function(t){e.columns=t.column,e.data=t.data.rows,0!=e.data.length?e.form=e.data[0]:e.form={}}))}}},o=i,u=r("2877"),s=Object(u["a"])(o,a,_,!1,null,null,null);t["default"]=s.exports},c830:function(e,t,r){},e621:function(e,t,r){"use strict";r("c830")},ed2c:function(e,t,r){"use strict";r.d(t,"h",(function(){return _})),r.d(t,"e",(function(){return n})),r.d(t,"f",(function(){return i})),r.d(t,"d",(function(){return o})),r.d(t,"a",(function(){return u})),r.d(t,"i",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return c})),r.d(t,"g",(function(){return d}));var a=r("b775");function _(e){return Object(a["b"])({url:"/query/fieldlist/list",method:"get",params:e})}function n(e){return Object(a["b"])({url:"/query/fieldlist/getFieldListById/"+e,method:"get"})}function i(e){return Object(a["b"])({url:"/query/fieldlist/"+e,method:"get"})}function o(e){return Object(a["b"])({url:"/query/fieldlist/erjilist/"+e,method:"get"})}function u(e){return Object(a["b"])({url:"/query/fieldlist",method:"post",data:e})}function s(e){return Object(a["b"])({url:"/query/fieldlist",method:"put",data:e})}function l(e){return Object(a["b"])({url:"/query/fieldlist/"+e,method:"delete"})}function c(e){return Object(a["b"])({url:"/query/fieldlist/export",method:"get",params:e})}function d(e){return Object(a["b"])({url:"/query/fieldlist/importFeildBySql",method:"post",data:e})}}}]);