webpackJsonp([39],{142:/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/boilerplates/custom/vue-blocks-UpFile/index.css ***!
  \***************************************************************************************//*! dynamic exports provided *//*! all exports used */function(a){a.exports="<template>\n  <div class=\" cRKBfT\">\n    <my-upload\n      ref=\"myUpload\"\n      action=\"https://fy.jd.com/selectionNotice/attachUpload\"\n      :file-list=\"fileList\"\n      :on-success=\"uploadSuccess\"\n      :on-progress=\"uploadProgress\"\n      :on-failed=\"uploadFailed\"\n      :on-finished=\"uploadFinished\"\n      :multiple = false\n      :limit=\"5\"\n    >\n    </my-upload>\n    <div class=\"jsiOBP cailiao\">\n      <div class=\"cailiaod\"></div>\n      <label class=\"cailiaot\" for=\"my-upload\">\n        <span>\u4E0A\u4F20\u6587\u4EF6</span>\n      </label>\n      <p class=\"cp\">\u8BF7\u4E0A\u4F20\u516C\u544A\u4E2D\u8981\u6C42\u63D0\u4EA4\u7684\u5BA1\u6838\u6750\u6599\uFF081\u3001\u652F\u6301PNG\u3001JPG\u3001DOCX\u3001PDF\u7C7B\u578B\u6587\u4EF6\uFF1B2\u3001\u6700\u591A\u53EF\u4E0A\u4F205\u4E2A\u6587\u4EF6\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u4E0D\u8D85\u8FC750M\u5927\u5C0F\u3002\uFF09</p>\n      <table class=\"tab\"  width=\"500px\" cellpadding=\"0\" cellspacing=\"0\">\n        <tr>\n          <th>\u6587\u4EF6\u540D</th>\n          <th>\u72B6\u6001</th>\n          <th>\u64CD\u4F5C</th>\n        </tr>\n        <tr v-for=\"(item,index) in fileList\" :key=\"index+'_fileList'\">\n          <td class=\"td-name\">{{item.originalFileName}}</td>\n          <td class=\"td-state\" >\u4E0A\u4F20\u6210\u529F</td>\n          <td class=\"lasttd\" >\n            <span class=\"operationde\" @click=\"removeFile(index)\"> \u5220\u9664</span>\n          </td>\n        </tr>\n      </table>\n      <div  class=\"nofile\" v-if=\"fileList.length ==0\">\u8BF7\u9009\u62E9\u6587\u4EF6</div>\n    </div>\n  </div>\n</template>\n<script>\nimport myUpload from './my-upload'\nexport default {\n  name: 'action',\n  data () {\n    return {\n      fileList: [],//\u4E0A\u4F20\u6587\u4EF6\u5217\u8868\uFF0C\u65E0\u8BBA\u5355\u9009\u8FD8\u662F\u652F\u6301\u591A\u9009\uFF0C\u6587\u4EF6\u90FD\u4EE5\u5217\u8868\u683C\u5F0F\u4FDD\u5B58\n    }\n  },\n  created () {\n  },\n  props: [],\n  components: {\n    myUpload\n  },\n  mounted () {\n  },\n  methods: {\n    removeFile (index) {\n      let fileList = [...this.fileList]\n      if (fileList.length) {\n        fileList.splice(index, 1)\n        this.onChange(fileList)\n      }\n    },\n    onChange(fileList){//\u76D1\u542C\u6587\u4EF6\u53D8\u5316\uFF0C\u589E\u51CF\u6587\u4EF6\u65F6\u90FD\u4F1A\u88AB\u5B50\u7EC4\u4EF6\u8C03\u7528\n      this.fileList = [...fileList];\n      console.log(this.fileList,'\u8C03\u7528onChange');\n    },\n    uploadSuccess(response, file){//\u67D0\u4E2A\u6587\u4EF6\u4E0A\u4F20\u6210\u529F\u90FD\u4F1A\u6267\u884C\u8BE5\u65B9\u6CD5\uFF0Cindex\u4EE3\u8868\u5217\u8868\u4E2D\u7B2Cindex\u4E2A\u6587\u4EF6\n      console.log(response,file,'\u67D0\u4E2A\u6587\u4EF6\u4E0A\u4F20\u6210\u529F\u8C03\u7528uploadSuccess');\n      if(response.code==='0000'){\n        var fileobj = {originalFileName:'',jssFileName:'',name:'', status:'',type:''}\n        fileobj.originalFileName = response.data.originalFileName\n        fileobj.jssFileName = response.data.jssFileName\n        fileobj.status = 'success'\n        fileobj.type = file.datame.type\n        let fileList = [...this.fileList];\n        fileList.push(fileobj)\n        this.onChange(fileList);\n      }else{\n        console.log('\u4E0A\u4F20\u5931\u8D25\uFF0C');\n      }\n    },\n    uploadProgress(progress){//\u4E0A\u4F20\u8FDB\u5EA6\uFF0C\u4E0A\u4F20\u65F6\u4F1A\u4E0D\u65AD\u88AB\u89E6\u53D1\uFF0C\u9700\u8981\u8FDB\u5EA6\u6307\u793A\u65F6\u4F1A\u5F88\u6709\u7528\n      const{ percent } = progress;\n      console.log(percent,'\u4E0A\u4F20\u8FDB\u5EA6\u8C03\u7528uploadProgress');\n    },\n    uploadFailed( err){//\u67D0\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\u4F1A\u6267\u884C\uFF0Cindex\u4EE3\u8868\u5217\u8868\u4E2D\u7B2Cindex\u4E2A\u6587\u4EF6\n      console.log(err,'\u67D0\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25uploadFailed');\n    },\n    uploadFinished(result){//\u6240\u6709\u6587\u4EF6\u4E0A\u4F20\u5B8C\u6BD5\u540E\uFF08\u65E0\u8BBA\u6210\u8D25\uFF09\u6267\u884C\uFF0Cresult: { success: \u6210\u529F\u6570\u76EE, failed: \u5931\u8D25\u6570\u76EE }\n      console.log(result,'\u6240\u6709\u6587\u4EF6\u4E0A\u4F20\u5B8C\u6BD5onFinished');\n    }\n  }\n}\n</script>\n<style lang=\"scss\" scoped>\n@import \"./css/mixin\";\n  .cRKBfT {\n    padding: 20px 30px 30px 40px;\n    background: rgb(255, 255, 255);\n    //\u4E0A\u4F20\u6750\u6599\n    .cailiao{\n      position: relative;\n      .sureupload{\n        position: absolute;\n        top:3px;\n        left:140px;\n        width:100px;\n        height: 30px;\n        background: #1b8f68;\n        font-size: 14px;\n        color: #fff;\n        text-align: center;\n        line-height: 30px;\n      }\n      .sureupload:hover{\n        cursor: pointer;\n      }\n      .displaynone{\n        display: none;\n      }\n      .nofile{\n        width:498px;\n        text-align: center;\n        background: #fff;\n        font-size: 12px;\n        color: #666666;\n        height:36px;\n        line-height: 36px;\n        border:1px solid #F3F3F3;\n      }\n      .cailiaot {\n        margin-left: 16px;\n        display: inline-block;\n        width:100px;\n        height: 30px;\n        background: #C7171E;\n        font-size: 14px;\n        color: #FFFFFF;\n        text-align: center;\n        line-height: 30px;\n      }\n      .cailiaot:hover{\n        cursor: pointer;\n      }\n      .cailiaod{\n        display: inline-block;\n        width: 6px;\n        height: 6px;\n        margin-top: 18px ;\n        border-radius: 4px;\n        background: rgb(199, 22, 34);\n      }\n      .cp{\n        font-size: 12px;\n        color: #999999;\n        letter-spacing: 0;\n        line-height: 20px;\n        padding:5px 0 10px 0;\n      }\n      .tab{\n        border:1px solid #F5F7F9;\n        tr{\n          height: 35px;\n          line-height: 35px;\n          border-top:1px solid #F5F7F9;\n          font-size: 12px;\n          color: #666666;\n          letter-spacing: 0;\n          text-align: center;\n        }\n        th{\n          background: #F3F3F3;\n          text-align: center;\n          font-size: 12px;\n          color: #666666;\n        }\n        .td-state{\n          //background: url(../../assets/img/close.png) center center no-repeat;\n          //background-size: 12px 12px;\n        }\n        .operationadd{\n          cursor:pointer;\n          display: inline-block;\n          width:40px;\n          color: #1b8f68;\n        }\n        .operationde{\n          cursor:pointer;\n          display: inline-block;\n          width:40px;\n          color: #C7171E;\n        }\n      }\n    }\n  }\n</style>\n"}});