webpackJsonp([50],{131:/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/boilerplates/custom/vue-blocks-MapSurrounding/codepan.html ***!
  \**************************************************************************************************//*! dynamic exports provided *//*! all exports used */function(a){a.exports="<script src=\"https://unpkg.com/vue\"></script>\n\n<div id=\"app\">\n  <div class=\"house-location\">\n    <!--\u4E0D\u8981\u76F4\u63A5\u5728\u5730\u56FE\u76D2\u5B50\u4E0A\u901A\u8FC7@click\u8BBE\u7F6E\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u53EF\u80FD\u4F1A\u6267\u884C\u591A\u6B21\u70B9\u51FB\u4E8B\u4EF6-->\n    <!--\u76F4\u63A5\u7ED9\u6DFB\u52A0\u5730\u56FE\u70B9\u51FB\u4E8B\u4EF6-->\n    <div\n      class=\"map-box\"\n      id=\"map-box\"\n    ></div>\n    <div class=\"tab-box\">\n      <ul class=\"tab-ul flex-row\">\n        <li\n          class=\"tab-li flex-one\"\n          :class=\"{'selected-li': slectedIndex == index}\"\n          v-for=\"(item, index) in tabs\"\n          :key=\"'mapTab_'+index\"\n          @click=\"switchTab(item.name, index)\"\n        >{{item.name}}\n        </li>\n      </ul>\n      <div class=\"info-box\">\n        <ul class=\"info-ul border-bottom\" v-if=\"displayedPoiList && displayedPoiList.length\">\n          <li class=\"info-li\" v-for=\"(item, index) in displayedPoiList\" :key=\"'infoLi_'+index\">\n            <span class=\"label-name\">{{item.customLabelName}}</span>\n            <span class=\"info-details\">{{item.name}}</span>\n            <span class=\"distance\">{{item.customDist}}</span>\n          </li>\n        </ul>\n        <div class=\"no-info border-bottom\" v-else>\n          <p class=\"tip-info\">\u62B1\u6B49\uFF0C3\u516C\u91CC\u5185\u6CA1\u6709{{tabs[slectedIndex].name}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"}});