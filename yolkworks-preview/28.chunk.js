webpackJsonp([28],{149:/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/boilerplates/custom/vue-blocks-YolkTabs/codepan.js ***!
  \******************************************************************************************//*! dynamic exports provided *//*! all exports used */function(a){a.exports="new Vue({\n\t\tname: \"yolkTabs\",\n\t\tprops: {\n\t\t\ttabs: {\n\t\t\t\ttype: Array,\n\t\t\t\tdefault: []\n\t\t\t},\n\t\t\tscrollable: {\n\t\t\t\ttype: Boolean,\n\t\t\t\tdefault: true\n\t\t\t},\n\t\t\tduration: {\n\t\t\t\ttype: Number,\n\t\t\t\tdefault: 0.2\n\t\t\t}, // \u6EDA\u52A8\u7684\u95F4\u9694\n\t\t\tnavStyle: {\n\t\t\t\ttype: Object\n\t\t\t}, // tabs\u5BFC\u822A\u6761\u7684\u6837\u5F0F\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u9AD8\u5EA6\u3001\u989C\u8272\u7B49\n\t\t\ttabItemStyle: {\n\t\t\t\ttype: Object\n\t\t\t}, // \u6BCF\u4E2Atab\u9879\u7684\u6837\u5F0F\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u5B57\u4F53\u5927\u5C0F\u548C\u989C\u8272\u7B49\n\t\t\tlineStyle: {\n\t\t\t\ttype: Object\n\t\t\t}, // \u9009\u4E2D'\u7EBF\u6761'\u7684\u6837\u5F0F\uFF0C\u5305\u62EC\u4F4D\u7F6E\u3001\u989C\u8272\u7B49\n\t\t\tclickTabItemFunc: {\n\t\t\t\ttype: Function\n\t\t\t}, // \u70B9\u51FBtab\u9879\u6267\u884C\u7684\u65B9\u6CD5\n\t\t},\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\tcurActive: 0,\n\t\t\t\tinnerLineStyle: {}\n\t\t\t}\n\t\t},\n\t\twatch: {\n\t\t\tcurActive() {\n\t\t\t\tthis.scrollIntoView()\n\t\t\t\tthis.setLine()\n\t\t\t}\n\t\t},\n\t\tmounted() {\n\t\t\tthis.setLine()\n\t\t\ttry {\n\t\t\t\t// todo \u9632\u6B62\u9875\u9762\u672A\u52A0\u8F7D\u5B8C\u6BD5\uFF0C\u83B7\u53D6\u4E0D\u5230dom\u5143\u7D20\u53CA\u5176\u4F4D\u7F6E\u4FE1\u606F\n\t\t\t\tdocument.onreadystatechange = () => { // \u5F53\u9875\u9762\u52A0\u8F7D\u72B6\u6001\u6539\u53D8\u7684\u65F6\u5019\u6267\u884C\u8FD9\u4E2A\u65B9\u6CD5\n\t\t\t\t\tif (document.readyState === 'complete') { // \u5F53\u9875\u9762\u52A0\u8F7D\u72B6\u6001\u4E3A\u5B8C\u5168\u7ED3\u675F\u65F6\u8FDB\u5165\n\t\t\t\t\t\tthis.setLine()\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} catch (e) {\t}\n\t\t},\n\t\tmethods: {\n\t\t\tclickTabItem(tab, index) {\n\t\t\t\tif (index !== this.curActive) {\n\t\t\t\t\tthis.curActive = index\n\t\t\t\t\tthis.clickTabItemFunc(tab, index)\n\t\t\t\t}\n\t\t\t},\n\t\t\tscrollIntoView(immediate) {\n\t\t\t\tif (!this.scrollable || !this.$refs.tabs) {\n\t\t\t\t\treturn\n\t\t\t\t}\n\t\t\t\tconst tab = this.$refs.tabs[this.curActive]\n\t\t\t\tconst { nav } = this.$refs\n\t\t\t\tconst { scrollLeft, offsetWidth: navWidth } = nav\n\t\t\t\tconst { offsetLeft, offsetWidth: tabWidth } = tab\n\t\t\t\tthis.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2, immediate)\n\t\t\t},\n\t\t\tscrollTo(el, from, to, immediate) {\n\t\t\t\tif (immediate) {\n\t\t\t\t\tel.scrollLeft += to - from\n\t\t\t\t\treturn\n\t\t\t\t}\n\t\t\t\tlet count = 0\n\t\t\t\t// \u5927\u591A\u7535\u8111\u663E\u793A\u5668\u7684\u5237\u65B0\u9891\u7387\u662F60HZ\uFF0C\u5927\u6982\u662F\u6BCF\u79D2\u949F\u91CD\u7ED860\u6B21\u3002\n\t\t\t\t// \u56E0\u6B64\uFF0C\u6700\u5E73\u6ED1\u7684\u52A8\u753B\u6548\u7684\u6700\u4F73\u5FAA\u73AF\u95F4\u9694\u662F1000ms/60\uFF0C\u7EA6\u7B49\u4E8E16.6ms\n\t\t\t\tconst frames = Math.round(this.duration * 1000 / 16)\n\t\t\t\tconst animate = () => {\n\t\t\t\t\tel.scrollLeft += (to - from) / frames\n\t\t\t\t\tif (++count < frames) {\n\t\t\t\t\t\traf(animate)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tanimate()\n\t\t\t},\n\t\t\tsetLine() {\n\t\t\t\tthis.$nextTick(() => {\n\t\t\t\t\tif (!this.$refs.tabs || !this.$refs.tabLine) {\n\t\t\t\t\t\treturn\n\t\t\t\t\t}\n\t\t\t\t\tconst tab = this.$refs.tabs[this.curActive]\n\t\t\t\t\tconst tabLine = this.$refs.tabLine\n\t\t\t\t\tconst width = tabLine.offsetWidth\n\t\t\t\t\tconst left = tab.offsetLeft + (tab.offsetWidth - width) / 2\n\t\t\t\t\tthis.innerLineStyle = {\n\t\t\t\t\t\t...this.lineStyle,\n\t\t\t\t\t\ttransform: `translateX(${left}px)`,\n\t\t\t\t\t\ttransitionDuration: `${this.duration}s`,\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t},\n\t\t}\n\t}\n).$mount('#app')\n"}});