(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{212:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"单项目多应用模板"}},[t._v("单项目多应用模板")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Node 版本要求")]),t._v(" "),s("p",[t._v("Yolk CLI 需要 "),s("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),s("OutboundLink")],1),t._v(" 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 "),s("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvm"),s("OutboundLink")],1),t._v(" 或 "),s("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvm-windows"),s("OutboundLink")],1),t._v(" 在同一台电脑中管理多个 Node 版本。")])]),t._v(" "),s("h3",{attrs:{id:"模板目录结构"}},[t._v("模板目录结构")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("├── build                          # 脚本\n├── config                         # 配置，webpack相关配置\n├── deploy                         # 打包后生成的文件，安装文件夹区分不同的应用\n├── node_modules                   # 安装的依赖\n└── src\n    ├── [projectName]              # 应用\n        ├── css                    # 应用样式文件\n        ├── images                 # 应用图片资源\n        ├── pages                  # 应用相关页面\n├── template                       # 应用模板\n├── .browserslistrc                # 在不同的前端工具间共享目标浏览器\n├── .gitignore                     # git忽略文件\n├── .huskyrc                       # 阻止错误的 git 提交\n├── package.json                   # npm包描述文件\n├── package-lock.json              # 记录当前状态下实际安装的各个npm package的具体来源和版本号\n├── prettier.config.js             # 代码格式化规则\n├── README.md                      # 项目说明\n")])])]),s("h3",{attrs:{id:"相关指令"}},[t._v("相关指令")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run create "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("projectName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建应用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("projectName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地开发")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("projectName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生产环境打包")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build:prod "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("projectName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生产环境打包")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build:yufa "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("projectName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 预发环境打包")]),t._v("\n")])])]),s("h3",{attrs:{id:"本地开发"}},[t._v("本地开发")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[s("code",[t._v("npm install")]),t._v("(安装package.json下项目依赖)；")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("运行"),s("code",[t._v("npm run create [projectName]")]),t._v("指令生成新应用，运行该指令后会复制模板项目"),s("code",[t._v("template")]),t._v("到src文件夹下，并重命名为projectName：")])]),t._v(" "),s("ul",[s("li",[t._v("在"),s("code",[t._v("src/[projectName]/css")]),t._v("目录下生成基础样式文件")]),t._v(" "),s("li",[t._v("在"),s("code",[t._v("src/[projectName]/images")]),t._v("目录下生成基础图片资源")]),t._v(" "),s("li",[t._v("在"),s("code",[t._v("src/[projectName]/pages")]),t._v("目录下生成基础页面文件")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[s("code",[t._v("npm run dev [projectName]")]),t._v("(安装成功后启动项目)；")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("项目在本地"),s("code",[t._v("localhost:8080/[projectName]/[页面名称].html")]),t._v("运行；")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"5"}},[s("li",[t._v("编译打包，打包会将项目代码打包到"),s("code",[t._v("deploy/[projectName]")]),t._v("目录下，所有项目使用同一域名，不同项目以"),s("code",[t._v("[projectName]")]),t._v("链接路径加以区分")])]),t._v(" "),s("ul",[s("li",[t._v("npm run build:prod [projectName]：生产环境打包")]),t._v(" "),s("li",[t._v("npm run build:yufa [projectName]：预发环境打包")])])])]),t._v(" "),s("h3",{attrs:{id:"commit-message-规范"}},[t._v("commit message 规范")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),s("p",[t._v("commit message 不符合规范将无法提交代码！")])]),t._v(" "),s("p",[t._v("全局安装commitzen提交代码，规范git commit message，具体参考：https://juejin.im/post/5bd2debfe51d457abc710b57")]),t._v(" "),s("h3",{attrs:{id:"代码规范与格式化"}},[t._v("代码规范与格式化")]),t._v(" "),s("p",[t._v("代码规范标准为"),s("code",[t._v("standard")]),t._v("，建议使用"),s("code",[t._v("prettier")]),t._v("格式化代码，代码编辑使用"),s("code",[t._v("VS Code")]),t._v("，安装"),s("code",[t._v("prettier")]),t._v("扩展，"),s("code",[t._v("shift + alt + f")]),t._v(" 格式化代码。也可以运行 "),s("code",[t._v("npm run lint")]),t._v("修复不符合规范的代码。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),s("p",[t._v("书写的代码不符合规范将无法提交代码！")])])])}),[],!1,null,null,null);e.default=n.exports}}]);