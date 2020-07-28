webpackJsonp([49],{132:/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/boilerplates/custom/vue-blocks-MapSurrounding/codepan.js ***!
  \************************************************************************************************//*! dynamic exports provided *//*! all exports used */function(a){a.exports="new Vue({\n\t\tprops: ['mapInfo', 'mapKey'],\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\tmap: '',\n\t\t\t\tmarker: '',\n\t\t\t\ttabs: [\n\t\t\t\t\t{\n\t\t\t\t\t\tname: '\u516C\u4EA4',\n\t\t\t\t\t}, {\n\t\t\t\t\t\tname: '\u5730\u94C1',\n\t\t\t\t\t}, {\n\t\t\t\t\t\tname: '\u5546\u573A',\n\t\t\t\t\t}, {\n\t\t\t\t\t\tname: '\u5B66\u6821',\n\t\t\t\t\t}, {\n\t\t\t\t\t\tname: '\u533B\u9662',\n\t\t\t\t\t}, {\n\t\t\t\t\t\tname: '\u94F6\u884C',\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\tslectedIndex: 0,\n\t\t\t\taddressOverlay: null, // \u5730\u56FE\u4E0A\u7684\u4FE1\u606F\u8986\u76D6\u7269\n\t\t\t\tdisplayedPoiList: [] // \u5C55\u793A\u5728\u9875\u9762\u4E0A\u7684poi\u4FE1\u606F\n\t\t\t}\n\t\t},\n\t\tcreated() {\n\t\t\tthis.initMap()\n\t\t},\n\t\tactivated() {\n\t\t\tthis.initSearchService()\n\t\t},\n\t\tmethods: {\n\t\t\tinitMap() {\n\t\t\t\tconst { addressLat: lat, addressLon: lng, mapTitle, mapAddress } = this.mapInfo\n        const locationIconUrl = 'https://img13.360buyimg.com/imagetools/jfs/t1/122736/18/3158/1064/5ece1822E5338665c/ab2190c296ea5f01.png'\n\t\t\t\tTMap(this.mapKey || '').then(qq => {\n\t\t\t\t\tlet latLng = new qq.maps.LatLng(lat, lng)\n\t\t\t\t\tthis.map = new qq.maps.Map(document.getElementById(\"map-box\"), {\n\t\t\t\t\t\tcenter: new qq.maps.LatLng(lat + 0.0015, lng - 0.0025),\n\t\t\t\t\t\tzoom: 15,\n\t\t\t\t\t\tdraggable: false,\n\t\t\t\t\t\tscrollwheel: false,\n\t\t\t\t\t\tdisableDoubleClickZoom: false,\n\t\t\t\t\t\tzoomControl: false,\n\t\t\t\t\t\tpanControl: false,\n\t\t\t\t\t\tmapTypeControl: false\n\t\t\t\t\t})\n\t\t\t\t\tthis.marker = new qq.maps.Marker({\n\t\t\t\t\t\ticon: new qq.maps.MarkerImage(locationIconUrl, '', '', '', new qq.maps.Size(24, 32)),\n\t\t\t\t\t\tposition: latLng,\n\t\t\t\t\t\tmap: this.map\n\t\t\t\t\t})\n          // \u8BBE\u7F6E\u5730\u56FE\u8986\u76D6\u7269\n          if (mapTitle) {\n\t\t\t\t\t\tconst addressOverlayClass = this.getAddressOverlay(this)\n\t\t\t\t\t\tthis.addressOverlay = new addressOverlayClass(latLng, mapTitle || '', mapAddress || '')\n\t\t\t\t\t\tthis.map && this.addressOverlay.setMap(this.map)\n\t\t\t\t\t}\n\t\t\t\t\tthis.initSearchService()\n\t\t\t\t\tthis.searchService.searchNearBy(this.tabs[0].name, latLng, 3000)\n\t\t\t\t\tqq.maps.event.addListener(\n\t\t\t\t\t\tthis.map,\n\t\t\t\t\t\t'click',\n\t\t\t\t\t\t() => {\n\t\t\t\t\t\t\tthis.toClickMap()\n\t\t\t\t\t\t}\n\t\t\t\t\t);\n\t\t\t\t})\n\t\t\t},\n      // \u521D\u59CB\u5316\u5730\u56FE\u670D\u52A1\n\t\t\tinitSearchService() {\n        const { cityName = '' } = this.mapInfo\n\t\t\t\tthis.searchService = new qq.maps.SearchService({\n\t\t\t\t\tlocation: cityName,\n\t\t\t\t\tpageCapacity: 5,\n\t\t\t\t\tautoExtend: false,\n\t\t\t\t\tcomplete: (results) => {\n\t\t\t\t\t\tthis.displayedPoiList = []\n\t\t\t\t\t\tlet displayedPoiList = []\n\t\t\t\t\t\tvar pois = results.detail.pois\n\t\t\t\t\t\tfor (var i = 0, l = pois.length; i < l; i++) {\n\t\t\t\t\t\t\tvar poi = pois[i]\n\t\t\t\t\t\t\tif (poi.dist <= 3000) {\n\t\t\t\t\t\t\t\tpoi.customDist = this.getUnifiedDist(poi.dist)\n\t\t\t\t\t\t\t\tpoi.customLabelName = this.getLabelName(this.tabs[this.slectedIndex].name, poi.address)\n\t\t\t\t\t\t\t\tdisplayedPoiList.push(poi)\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (displayedPoiList.length) {\n\t\t\t\t\t\t\tdisplayedPoiList = displayedPoiList.sort((poiA, poiB) => {\n\t\t\t\t\t\t\t\tlet distA = poiA.dist\n\t\t\t\t\t\t\t\tlet distB = poiB.dist\n\t\t\t\t\t\t\t\treturn distA - distB\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\tthis.displayedPoiList = displayedPoiList.slice(0, 3)\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\terror: (err) => {\n\t\t\t\t\t\tthis.displayedPoiList = []\n\t\t\t\t\t\tconsole.log(err, 'searchService err!')\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t},\n\t\t\t// \u5207\u6362tab\u6807\u7B7E\n\t\t\tswitchTab(item, index) {\n\t\t\t\tthis.slectedIndex = index\n\t\t\t\tlet {addressLat, addressLon} = this.mapInfo\n\t\t\t\tlet region = new qq.maps.LatLng(addressLat, addressLon)\n\t\t\t\tthis.searchService && this.searchService.searchNearBy(item, region, 3000)\n\t\t\t},\n\t\t\t// \u5B9A\u4E49\u5C0F\u533A\u5730\u56FE\u4E0A\u4F4D\u7F6E\u4FE1\u606F\u8986\u76D6\u7269\n\t\t\tgetAddressOverlay() {\n\t\t\t\tfunction addressOverlay(position, title, address) {\n\t\t\t\t\tthis.position = position\n\t\t\t\t\tthis.title = title\n\t\t\t\t\tthis.address = address\n\t\t\t\t}\n\t\t\t\taddressOverlay.prototype = new qq.maps.Overlay()\n\t\t\t\t//\u5B9A\u4E49construct,\u5B9E\u73B0\u8FD9\u4E2A\u63A5\u53E3\u6765\u521D\u59CB\u5316\u81EA\u5B9A\u4E49\u7684Dom\u5143\u7D20\n\t\t\t\taddressOverlay.prototype.construct = function () {\n\t\t\t\t\tvar addressBoxDiv = this.addressBoxDiv = document.createElement(\"div\")\n\t\t\t\t\taddressBoxDiv.setAttribute(\"class\", \"address-box\")\n\t\t\t\t\t//\u5C06dom\u6DFB\u52A0\u5230\u8986\u76D6\u7269\u5C42\n\t\t\t\t\tvar panes = this.getPanes()\n\t\t\t\t\t//\u8BBE\u7F6Epanes\u7684\u5C42\u7EA7\uFF0CoverlayMouseTarget\u53EF\u63A5\u6536\u70B9\u51FB\u4E8B\u4EF6\n\t\t\t\t\tpanes.overlayMouseTarget.appendChild(addressBoxDiv)\n\t\t\t\t\tvar addressContanierHtml = '<div class=\"address-contanier\"><p class=\"address-title\">' + this.title + '</p><p class=\"address-details\">' + this.address + '</p></div>'\n\t\t\t\t\tvar arrowHtml = '<div class=\"address-arrow\"></div>'\n\t\t\t\t\taddressContanierHtml += arrowHtml\n\t\t\t\t\taddressBoxDiv.innerHTML = addressContanierHtml\n\t\t\t\t}\n\t\t\t\t//\u5B9E\u73B0draw\u63A5\u53E3\u6765\u7ED8\u5236\u548C\u66F4\u65B0\u81EA\u5B9A\u4E49\u7684dom\u5143\u7D20\n\t\t\t\taddressOverlay.prototype.draw = function () {\n\t\t\t\t\tvar overlayProjection = this.getProjection()\n\t\t\t\t\t//\u8FD4\u56DE\u8986\u76D6\u7269\u5BB9\u5668\u7684\u76F8\u5BF9\u50CF\u7D20\u5750\u6807\n\t\t\t\t\tvar pixel = overlayProjection.fromLatLngToDivPixel(this.position)\n\t\t\t\t\tvar divStyle = this.addressBoxDiv.style\n\t\t\t\t\tdivStyle.left = pixel.x + \"px\"\n\t\t\t\t\tdivStyle.top = pixel.y - 36 + \"px\"\n\t\t\t\t}\n\t\t\t\t//\u5B9E\u73B0destroy\u63A5\u53E3\u6765\u5220\u9664\u81EA\u5B9A\u4E49\u7684Dom\u5143\u7D20\uFF0C\u6B64\u65B9\u6CD5\u4F1A\u5728setMap(null)\u540E\u88AB\u8C03\u7528\n\t\t\t\taddressOverlay.prototype.destroy = function () {\n\t\t\t\t\tthis.addressBoxDiv.parentNode.removeChild(this.addressBoxDiv)\n\t\t\t\t\tthis.addressBoxDiv = null\n\t\t\t\t}\n\t\t\t\treturn addressOverlay\n\t\t\t},\n      // \u5C06\u8DDD\u79BB\u89C4\u8303\u5316\uFF0C\u4E0D\u8D85\u8FC71000m\u6574\u6570\u5C55\u793A\uFF1B\u8D85\u8FC71000\u7C73\u5C31\u6309\u516C\u91CC\u6570\u5C55\u793A\uFF0C\u4F8B\u59821.2\u516C\u91CC\n\t\t\tgetUnifiedDist(dist = 0) {\n\t\t\t\tlet unifiedDist = 0\n\t\t\t\tdist = Math.abs(Number(dist))\n\t\t\t\tif (dist <= 1000) {\n\t\t\t\t\tunifiedDist = parseInt(dist) + 'm'\n\t\t\t\t} else {\n\t\t\t\t\tunifiedDist = Math.floor(dist / 100) / 10 + 'km'\n\t\t\t\t}\n\t\t\t\treturn unifiedDist\n\t\t\t},\n\t\t\tgetLabelName(keyword, address = '') {\n\t\t\t\tlet labelName = ''\n\t\t\t\tswitch (keyword) {\n\t\t\t\t\tcase '\u516C\u4EA4':\n\t\t\t\t\t\tlabelName = '\u7AD9\u70B9'\n\t\t\t\t\t\tbreak\n\t\t\t\t\tcase '\u5730\u94C1':\n\t\t\t\t\t\tlabelName = address.replace(/\u5730\u94C1/ig, '')\n\t\t\t\t\t\tbreak\n\t\t\t\t\tdefault:\n\t\t\t\t\t\tlabelName = keyword\n\t\t\t\t}\n\t\t\t\treturn labelName\n\t\t\t},\n\t\t\ttoClickMap() {\n\t\t\t\tthis.$emit('toClickMap')\n\t\t\t}\n\t\t}\n\t}\n).$mount('#app')\n"}});