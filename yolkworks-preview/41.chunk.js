webpackJsonp([41],{136:/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/boilerplates/custom/vue-blocks-UpFile/codepan.html ***!
  \******************************************************************************************//*! dynamic exports provided *//*! all exports used */function(a){a.exports="<script src=\"https://unpkg.com/vue\"></script>\n<div id=\"app\">\n  <div class=\" cRKBfT\">\n    <my-upload\n      ref=\"myUpload\"\n      action=\"https://fy.jd.com/selectionNotice/attachUpload\"\n      :file-list=\"fileList\"\n      :on-success=\"uploadSuccess\"\n      :on-progress=\"uploadProgress\"\n      :on-failed=\"uploadFailed\"\n      :on-finished=\"uploadFinished\"\n      :multiple = false\n      :limit=\"5\"\n    >\n    </my-upload>\n    <div class=\"jsiOBP cailiao\">\n      <div class=\"cailiaod\"></div>\n      <label class=\"cailiaot\" for=\"my-upload\">\n        <span>\u4E0A\u4F20\u6587\u4EF6</span>\n      </label>\n      <p class=\"cp\">\u8BF7\u4E0A\u4F20\u516C\u544A\u4E2D\u8981\u6C42\u63D0\u4EA4\u7684\u5BA1\u6838\u6750\u6599\uFF081\u3001\u652F\u6301PNG\u3001JPG\u3001DOCX\u3001PDF\u7C7B\u578B\u6587\u4EF6\uFF1B2\u3001\u6700\u591A\u53EF\u4E0A\u4F205\u4E2A\u6587\u4EF6\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u4E0D\u8D85\u8FC750M\u5927\u5C0F\u3002\uFF09</p>\n      <table class=\"tab\"  width=\"500px\" cellpadding=\"0\" cellspacing=\"0\">\n        <tr>\n          <th>\u6587\u4EF6\u540D</th>\n          <th>\u72B6\u6001</th>\n          <th>\u64CD\u4F5C</th>\n        </tr>\n        <tr v-for=\"(item,index) in fileList\" :key=\"index+'_fileList'\">\n          <td class=\"td-name\">{{item.originalFileName}}</td>\n          <td class=\"td-state\" >\u4E0A\u4F20\u6210\u529F</td>\n          <td class=\"lasttd\" >\n            <span class=\"operationde\" @click=\"removeFile(index)\"> \u5220\u9664</span>\n          </td>\n        </tr>\n      </table>\n      <div  class=\"nofile\" v-if=\"fileList.length ==0\">\u8BF7\u9009\u62E9\u6587\u4EF6</div>\n    </div>\n  </div>\n</div>\n"}});