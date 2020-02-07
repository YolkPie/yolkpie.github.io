(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{215:function(t,s,n){"use strict";n.r(s);var e=n(0),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vue-单页应用模板"}},[t._v("vue 单页应用模板")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("Node 版本要求")]),t._v(" "),n("p",[t._v("Vue CLI 需要 "),n("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),n("OutboundLink")],1),t._v(" 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 "),n("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvm"),n("OutboundLink")],1),t._v(" 或 "),n("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvm-windows"),n("OutboundLink")],1),t._v(" 在同一台电脑中管理多个 Node 版本。")])]),t._v(" "),n("h3",{attrs:{id:"模板目录结构"}},[t._v("模板目录结构")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("├── dist                           # 打包后生成的文件\n├── node_modules                   # 安装的依赖\n├── public                         # 静态资源文件夹\n└── src\n    ├── api                        # 接口\n    ├── assets                     # 项目依赖的一些静态资源\n    ├── components                 # 公共组件\n        ├── pre-render-skeleton    # 页面骨架屏\n        ├── pre-render-loading     # 页面loading\n    ├── config                     # 公共配置\n    ├── directives                 # vue指令\n    ├── filters                    # vue过滤器\n    ├── mixin                      # vue混入\n    ├── plugins                    # 插件\n    ├── request                    # 网络请求相关\n    ├── router                     # vue-router\n    ├── store                      # vuex\n    ├── styles                     # 公共样式\n    ├── views                      # 页面视图组件\n├── .browserslistrc                # 在不同的前端工具间共享目标浏览器\n├── .editorconfig                  # 统一代码风格\n├── .env                           # 环境变量，在所有的环境中被载入\n├── .env.prod                      # 环境变量，在生产环境被载入\n├── .env.test                      # 环境变量，在测试环境被载入\n├── .env.yufa                      # 环境变量，在预发环境被载入\n├── .eslintrc.js                   # 代码检查配置文件\n├── .gitignore                     # git忽略文件\n├── .huskyrc                       # 阻止错误的 git 提交\n├── .npmrc                         # 项目npm配置\n├── babel.config.js                # 代码转换规则\n├── package.json                   # npm包描述文件\n├── package-lock.json              # 记录当前状态下实际安装的各个npm package的具体来源和版本号\n├── postcss.config.js              # css转换规则\n├── prettier.config.js             # 代码格式化规则\n├── README.md                      # 项目说明\n├── vue.config.js                  # vue-cli配置文件\n")])])]),n("h3",{attrs:{id:"相关指令"}},[t._v("相关指令")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("           "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run serve         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行项目（本地开发）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生产环境打包")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build:prod    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生产环境打包")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build:yufa    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 预发环境打包")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build:test    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 测试环境打包")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dist          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地预览打包文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run lint          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修复不符合规范的代码")]),t._v("\n")])])]),n("h3",{attrs:{id:"本地开发"}},[t._v("本地开发")]),t._v(" "),n("ul",[n("li",[n("ol",[n("li",[n("code",[t._v("npm install")]),t._v("(安装package.json下项目依赖)；")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"2"}},[n("li",[n("code",[t._v("npm run serve")]),t._v("(安装成功后启动项目)；")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"3"}},[n("li",[t._v("项目在本地"),n("code",[t._v("localhost:80")]),t._v("端口运行， 默认运行在"),n("code",[t._v("80")]),t._v("端口，你也可以在"),n("code",[t._v("vue.config.js/devServer")]),t._v("中修改运行的端口；")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"4"}},[n("li",[t._v("编译打包：")])]),t._v(" "),n("ul",[n("li",[t._v("npm run build:prod：生产环境打包")]),t._v(" "),n("li",[t._v("npm run build:yufa：预发环境打包")]),t._v(" "),n("li",[t._v("npm run build:test：测试环境打包")])])])]),t._v(" "),n("h3",{attrs:{id:"跨域问题"}},[t._v("跨域问题")]),t._v(" "),n("ul",[n("li",[t._v("配置host：127.0.0.1 dev.*.com")]),t._v(" "),n("li",[t._v("配置devServer的proxy，配置路径为：vue.config.js -> devServer -> proxy")])]),t._v(" "),n("h3",{attrs:{id:"骨架屏"}},[t._v("骨架屏")]),t._v(" "),n("p",[t._v("本模板支持自动注入骨架屏，我们只需首页骨架屏的页面及样式，模板会基于 "),n("code",[t._v("vue-server-renderer")]),t._v("，自动将骨架屏的 css 和 html 注入到 打包的 html 中。")]),t._v(" "),n("p",[n("code",[t._v("src/components/pre-render-skeleton")]),t._v(" 就是基于 vue-server-renderer 服务端渲染，抽取手写骨架屏的 css 和 html 注入到打包的 html 中。")]),t._v(" "),n("p",[n("code",[t._v("src/components/pre-render-skeleton/pre-render-skeleton.vue")]),t._v(" 文件就是需要手写的骨架屏组件。")]),t._v(" "),n("h3",{attrs:{id:"加载效果"}},[t._v("加载效果")]),t._v(" "),n("p",[t._v("如果你不想使用骨架屏，但仍想降低首屏加载的白屏时间，可以使用 "),n("code",[t._v("pre-render-loading")]),t._v("，会自动注入 loading 效果，基于 "),n("code",[t._v("vue-server-renderer")]),t._v("，自动将 loading 的 css 和 html 注入到 打包的 html 中。")]),t._v(" "),n("p",[n("code",[t._v("src/components/pre-render-loading")]),t._v(" 就是基于 vue-server-renderer 服务端渲染，抽取手写 loading 的 css 和 html 注入到打包的 html 中。")]),t._v(" "),n("p",[n("code",[t._v("src/components/pre-render-loading/pre-render-loading.vue")]),t._v(" 文件就是需要手写的 loading 组件。")]),t._v(" "),n("h3",{attrs:{id:"环境变量与模式"}},[t._v("环境变量与模式")]),t._v(" "),n("p",[t._v("https://cli.vuejs.org/zh/guide/mode-and-env.html")]),t._v(" "),n("p",[t._v("本模板主要包括四种模式，通常一种模式会对应多个环境变量。通常情况下后端的API会有多个指向不同环境的域名（测试、预发、线上）")]),t._v(" "),n("blockquote",[n("ul",[n("li",[t._v("开发模式：本地开发，通过修改 "),n("code",[t._v(".env")]),t._v(" 文件中的 "),n("code",[t._v("REQUEST_URL")]),t._v(" 变量来请求不同后端环境API")]),t._v(" "),n("li",[t._v("测试模式：对应后端测试环境API域名")]),t._v(" "),n("li",[t._v("预发模式：对应后端预发环境API域名")]),t._v(" "),n("li",[t._v("生产模式：对应后端线上环境API域名")])])]),t._v(" "),n("p",[t._v("例如以 vue-cli-service build --mode prod 命令进行打包，会在prod模式下加载可能存在的 .env、.env.prod 和 .env.prod.local 文件然后构建出生产环境应用。")]),t._v(" "),n("p",[t._v("可以替换项目根目录中的下列文件来指定环境变量：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(".env         # 在所有环境中被载入\n.env.test    # 在测试环境中被载入\n.env.yufa    # 在预发环境中被载入\n.env.prod    # 在生产环境中被载入\n")])])]),n("p",[t._v("以.env.prod文件为例：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('# 左边是变量名(一般大写，下划线分割单词)，右边是变量值\nNODE_ENV = "production"\nREQUEST_URL = "//api.m.jd.com"\n')])])]),n("p",[t._v("只有以 "),n("code",[t._v("VUE_APP_")]),t._v(" 开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中。可以在应用的代码中这样访问它们：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_APP_SECRET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("非 "),n("code",[t._v("VUE_APP_")]),t._v(" 开头的变量需要手动嵌入到客户端侧的包中")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'define'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("args")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'process.env'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REQUEST_URL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REQUEST_URL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" args\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("除了 VUE_APP_* 变量之外，在你的应用代码中始终可用的还有两个特殊的变量：")]),t._v(" "),n("blockquote",[n("ul",[n("li",[t._v('NODE_ENV - 会是 "development"、"production" 或 "test" 中的一个。具体的值取决于应用运行的模式。')]),t._v(" "),n("li",[t._v("BASE_URL - 会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径。")])])]),t._v(" "),n("h3",{attrs:{id:"开发pc端页面"}},[t._v("开发PC端页面")]),t._v(" "),n("p",[t._v("本模板主要针对移动端开发，采用rem作为尺寸单位，为此使用postcss插件，自动将px转换成rem，同时根据屏幕宽度自动计算根字体大小。")]),t._v(" "),n("p",[t._v("如果想要开发PC页面则需要将上述特性移除：")]),t._v(" "),n("ul",[n("li",[t._v("移除postcss的pxtorem插件，配置路径为：postcss.config.js -> postcss-pxtorem")]),t._v(" "),n("li",[t._v("移除对根字体大小的计算，配置路径为：main.js -> rem")])]),t._v(" "),n("h3",{attrs:{id:"commit-message-规范"}},[t._v("commit message 规范")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),n("p",[t._v("commit message 不符合规范将无法提交代码！")])]),t._v(" "),n("p",[t._v("全局安装commitzen提交代码，规范git commit message，具体参考：https://juejin.im/post/5bd2debfe51d457abc710b57")]),t._v(" "),n("h3",{attrs:{id:"代码规范与格式化"}},[t._v("代码规范与格式化")]),t._v(" "),n("p",[t._v("代码规范标准为"),n("code",[t._v("standard")]),t._v("，建议使用"),n("code",[t._v("prettier")]),t._v("格式化代码，代码编辑使用"),n("code",[t._v("VS Code")]),t._v("，安装"),n("code",[t._v("prettier")]),t._v("扩展，"),n("code",[t._v("shift + alt + f")]),t._v(" 格式化代码。也可以运行 "),n("code",[t._v("npm run lint")]),t._v("修复不符合规范的代码。")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),n("p",[t._v("书写的代码不符合规范将无法提交代码！")])])])}),[],!1,null,null,null);s.default=a.exports}}]);