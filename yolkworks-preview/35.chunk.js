webpackJsonp([35],{146:/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/boilerplates/custom/vue-blocks-YolkPhotoSwipe/codepan.html ***!
  \**************************************************************************************************//*! dynamic exports provided *//*! all exports used */function(a){a.exports="<script src=\"https://unpkg.com/vue\"></script>\n<div id=\"app\">\n  <!--1. \u53D6\u6D88\u4E86photoswipe\u56FE\u7247\u9700\u8BBE\u5B9A\u5C3A\u5BF8\u7684\u8981\u6C42-->\n  <!--2. \u652F\u6301slot\u6269\u5C55\u5934\u90E8\u548C\u5C3E\u90E8\u5185\u5BB9-->\n  <div\n    ref=\"scaler\" class=\"pswp\"\n    :style=\"pswpStyle\"\n    tabindex=\"-1\" role=\"dialog\">\n    <div class=\"pswp__bg\"></div>\n    <div class=\"pswp__scroll-wrap\">\n      <div class=\"pswp__container\">\n        <div class=\"pswp__item\"></div>\n        <div class=\"pswp__item\"></div>\n        <div class=\"pswp__item\"></div>\n      </div>\n      <div class=\"yolk-pswp__header\">\n        <slot name=\"header\"></slot>\n      </div>\n      <div class=\"yolk-pswp__footer\">\n        <slot name=\"footer\"></slot>\n      </div>\n    </div>\n  </div>\n</div>\n"}});