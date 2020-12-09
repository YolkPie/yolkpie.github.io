
function add(a, b){
  return a + b;

  // 1、基础参数类型判断
  // if(typeof a === 'number' && typeof b === 'number'){
  //   return a + b;
  // } else {
  //   throw new Error('a or b is not a number')
  // }
}

// 场景一 正常入参
add(1,2) // 正常

 
// 最简单的参数问题引起
add(1)  // 参数2未传 ==> 返回NaN 
axios.get() // ==> 但程序不报错，如果这个结果需要传给后台，接口可能响应400 bad request,
            // 那如果你的代码量又比较大的时候，定位这个问题是不是就要花很长时间了

// 2、参数是一个配置对象
new Vue({}); 
// 怎么保证必传参数都传了？ // el, template
// 像vue 这类框架，就是靠选项合并
function Vue(config){
  let _default = {
    el: document, 
    template:'<div></div>'
  }
  for(let key in config){
    _default[key] = config[key] || _default[key];
  }
}

// 3、参数是某个类的实例化对象
// 在造轮子的时候，就会用到
function Class1(){

}
function fn(obj){
  if(obj instanceof Class1){
    // dosomthing
  } else {
    throw new Error('obj 必须是 Class1的实例')
  }
}

// 像上面的3种情况  全部都是开习惯中可以避免的

// js 还有一种特有的
function a(){}// function 可能是一个方法，还可能代码一个什么东东？ --class 在es6之前，都是用function 代表一个类
// 如果想把它当一个类调用，应该怎么办呢？怎么保证他按一个类去调用呢？
// this 问题
// 执行方法时，this指向当前运行的上下文； 是一个类的话，this指向当前类的实例
function Vue(){
  if(this instanceof Vue){
    // 类实例
  } else {
    // 当作一个方法调用
    // return new Vue(); // 这样即使当一个方法调用 ，拿到的还是一个vue的实例
    // 像一些框架之类的都会有这种措施  vue是这样
    throw new Error('Vue is a constructor and should be called with the `new` keyword ')
  }
}


// 易错代码控制： 这段代码出不出错不是由你控制
// eg: 用户下载一个文件，如果这个文件存在，直接下载， 如果输入了一个不存在的文件，就会出错，这个时候出不出错就是用户决定的了
// 前端： 请求方面的错误； 数据结构的错误，
let a = {
  b:[
    {c:1}
  ]
}
// 如果说 a 这个结构是后端返回的，我们取值的时候是a.b[0].c  这样很可能因为某一级缺失导致出错，那怎么办呢？
一般有两种方法: 
  // 1、模拟一个这样的数据结构
  // 2、用&&操作符 先判断为空的情况
a.b && a.b[0]  // 使用与操作符 判断为空的情况

// 这种就是预期之外的错误，这些就不是自己控制的
// 像后端 一般就是try catch 去处理这种易错的代码块
// 后端是一个持久性服务，如果因为一段代码出问题，就抛出，服务就断了，那这样损失就大了，


function install(){
  let _router = {};
  Object.defineProperty(this, $router, {
    writable: false,
    get:function(){
      return _router;
    }
  })
}



// 结构清晰
//   回调问题
  $.ajax({
    success:function(){
      $.ajax({
        success:function(){

        }
      })
    }
  })

  
// 需求：写一个编辑器， 有前进，后退，改变字体，大小，颜色功能
// 分析：有界面，点击按钮触发事件
// html 初始化--> 事件绑定 --> 前进后退模块 -->数据记录模块 --> 字体控制模块 --> 数据渲染模块
// 前进后退： 一般都是数据驱动思维，
[{color:'red', content:'hello'}, {color:'green', content:'hello'}]

// 工厂模式  -- JQuery 
// 操作dom 时代，大量频繁的获取操作dom
$('.class') // $ 就是一个工厂，他是批量产生jquery对象的，根据你传入的选择器，生成一批jquery对象
new Vue({}) // 建造者模式，明显传入了一大批配置


// 弹框插件，应该用什么模式？ 工厂，因为这个要频繁的创建
Pop('confirm'), new Pop('confirm'); //哪个用起来舒服

// 编辑器 应该用什么模式？ 建造者， 一般一个页面只有一个，不需要频繁创建
// 编辑器可能还要涉及到复杂的配置，需要精细化创建


// 下面是创建型设计模式的使用
// 工厂模式： 
// 1、球类工厂
function ball(type){

  switch(type){
    case 'football':
      return new football();
      break;
    default:
      break;
  }
  
  // 局部 
  function football(){} //网球
  function basketball(){}
}

// 原型链上
ball.prototype.football = function(){}

// 静态函数 jquery的实现
function jquery(params){
  return new jquery.fn.init(params);
}
jquery.fn = {};
jquery.fn.init = function (params) {};
window.$ = jquery;

// 建造者模式 
// 关键思想 先把相关的模块放一边开发好，再把各模块集成到一起
// new F1
function F1(){
  // 方法1 直接绑定
  this.model1 = new Model1({});
  this.model2 = new Model2({});
  this.model3 = new Model3({});
}

function Model1(params){}
function Model2(params){}
function Model3(params){}


// 方法2 Vue 是怎么做的 混合方式
// 先把各个模块独立开发好，之后再混合进实例里
function Vue (options) {
  if (!(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);


// 单例模式
// 如何保证这个类的实例只有一个呢？
// 常规类：靠挂在这个类上面的一个静态属性
function vuex(params){
  if(vuex.instance){
    return vuex.instance;
  } else {
    this.name ='xxx'
    this.attr = 'bbbb';
    
    vuex.instance = this;
  }
}
new vuex();
new vuex();

// vue插件时如何保证单例的 以vue-router为例
// 通过一个参数，变量，静态属性去标识这个类是否被new 过，已经new过的，不再去new
Vue.use(vue-router); 
// Vue.use 实际上是调用了插件的install方法

// vue-router
{
  var _vue; 
  function install(vue){
    if(_vue === vue && install.installed) 
      return;
    _vue = vue;
    install.installed = true;// 静态属性
  }
}


// 需求2： 写一个表单验证工具，给出我要验证的dom、value 加对应的规则，就会自动验证
//   分析模块：dom初始化模块 --> 事件绑定模块 --> 验证模块 --> 消息提示模块
// 工厂模式
// 1、防JQuery
function t(dom, msgDom){
  return new t.init(dom, msgDom);
}
t.init = function(dom, msgDom){
  this.dom = dom;
  this.msgDom = msgDom;
  this.validateArr = [];
}
// 2、思考以后的扩展性，想想模块是否需要细化， 模块越细，扩展越方便
// 验证模块变化最大，细化
// 开启验证模块，验证队列模块
t.init.prototype.initBind = function(params){
  let self = this;
  this.dom.onblur = function(){
    self.run(this.value)
  }
}

t.init.prototype.add = function(fn){
  if(typeof fn === 'function'){
    this.validateArr.push(fn);
  } else if(typeof fn === 'string'){
    // 预置的验证规则 下面这样写，可读性差，代码不清楚
    // 引入设计模式解决
    // if(fn === 'isPhone'){
    //   this.validateArr.push(()=>{/*手机号验证*/})
    // } else if(fn === 'isNumber'){
    //   this.validateArr.push(()=>{/**是否是数字*/}) 
    // }

    // 策略模式解决 
    // 简单if-else可以很好解决
    let strage = {
      isPhone:function(params){},
      isNumber: function(params){},
      // 更多验证规则
    }
    this.validateArr.push(strage[fn]);

    // 状态模式
    // 核心：根据对象不同的状态，让对象展示不同的行为， 相当于加了状态管理的策略模式

  }
}

t.init.prototype.run = function(value){
  while(this.validateArr.length > 0){
    // _result 是约定好的验证结果的数据结构
    // {success: true|false, msg:''}
    let _result = this.validateArr.shift().run(value);
    if(!_result.success){
      this.sendMsg(_result.msg);
      break;
    }
  }
}

t.init.prototype.sendMsg = function(msg){
  this.msgDom.innerHtml = msg;
}

// 后期的使用   职责链模式
t('input', 'errorMsg')
  .add('isPhone')
  .add(() => {/**自定义验证1 */})
  .add(() => {/**自定义验证2 */})

 
// 状态模式 复合if-else分支
// 让对象拥有一个状态，对象根据状态展示不同的行为
// 移动div的方法,要求根据传参，实现上下左右移动
moveDiv('left') // 左移
moveDiv('left','top') // 左上移
function moveDiv(){
  if(arguments.length === 1){
    // 可以用策略模式
    if(arguments[0] == 'left'){
      moveLeft();
    } else if (arguments[0] === 'right'){
      moveRight();
    }
  } else if(arguments.length === 2){
    if(arguments[0] == 'left' && arguments[1] == 'top'){
      moveLeft();
      moveTop();
    }
  }
}

// 用状态模式实现
// 这时候moveDiv就成了一个类了，不是一个方法了
function moveDiv(params){
  this.stateArr = [];//因为存在复合运动的行为，所以需要一个数组去存储数据
}
moveDiv.prototype.run = function(params){
  // arguments 类数组  将类数组转成真正数组
  this.stateArr = Array.prototype.slice.call(arguments);
  let strage = {
    left: moveLeft,
    right:moveRight,
    top:moveTop
  };
  this.stateArr.forEach(state => {
    strage[state]();
  });
}
let moveObj = new moveDiv();
moveObj.run('left', 'top');



// 享元模式
// 当类似对象和类似代码块时，减少代码块
// 提取的享元其实提的是不同的点， 把不同的提出来，剩下的就是相同的，这样代码块就由多化一了
// 与平时提取公共代码不是一个意思
jquery.extend
// 作用：
$.extend({a:1}) // 会把对象扩展到$对象上$.a = 1; 为jquery对象扩展方法属性使用
$.extend({a:1},{b:2}) // ==> {a:1,b:2}
// 实现
$.extend = function(){
  // if(arguments.length === 1){
  //   for(let item in arguments[0]){
  //     this[item] = arguments[0][item]
  //   }
  // } else if(arguments.length === 2){
  //   for(let item in arguments[1]){
  //     arguments[0][item] = arguments[1][item];
  //   }
  // }

  // 享元模式，提取不同点：
  // 1、for in 的对象不同，
  // 2、接收的对象不同
  let source = arguments[0];
  let target = this;
  if(arguments.length === 2){
    source = arguments[1];
    target = arguments[0];
  }
  for(let item in source){
    target[item] = source[item]
  }

  // 总结应用场景： 两个if else 分支中，两段代码块非常相似时，就可以用享元模式了
}



// 装饰者模式
//   目的：不重写方法的扩展方法
//   应用场景：当一个方法需要扩展，但又不方便或不能去修改方法时 是公共的方法 或他人的方法 或原生方法 或第三方模块的方法
//   在不去修改原方法的情况下，扩展方法的功能
// 例子： 删除按钮--> 点击可以删除 ---> 但没有提示  ---> 好多删除按钮都是这样实现，产品需求是要给出删除提示
// 简单理解，就是原来的删除功能，扩展出提示功能
// 1、全部改写  2、找到原来定义，修改原方法，增加提示
function decorate(dom, fn){
  // 健壮性校验
  if(typeof dom.onClick === 'function'){
    // 装饰者 三步走
    // 1、重写原方法，或定义新方法;
    // 2、提取老方法，并调用
    // 3、加入新方法

    let _oldFn = dom.onClick; // 在方法被重写前提取
    dom.onClick = function(params){
      _oldFn.call(this);
      fn.call(this);
    }
  }
}
// 使用
decorate('btnDel', function(params){
  console.log('删除成功')
});

// Vue的双向数据绑定 如何实现
Object.defineProperty(vue,'data.key',{
  get: function(){ },
  set: function(){}
})
// 是对象里的属性变了，会触发， 它没办法用到数组上，那Vue对数组是怎么实现双向绑定的
// 数组：利用装饰者模式，给数组的 push pop 
let arr = ['push', 'pop', 'shift']
let arrProto = Array.prototype;
let arrCopy = Object.create(arrProto); // 为了不污染旧原型链，提前拷贝一份出来
arr.forEach(method => {
  arrCopy[method] = function (){
    let _ref = arrProto[method].apply(this, arguments);
    dep.notify();// 触发更新
  }
})
// 把data时的所有数组，都变成这里的这个arrCopy
// 主要是一些技巧



// 观察者模式
// 1、异步模块沟通
//    a 异步模块；b 同步模块; b需要a处理完成后a的消息  观察者 类似事件监听
// 2、方便加入新的模块， 本来没有想到某个模块会突然要加入的情况
//    聊天室的沟通：我和你在聊天室的沟通（聊天室就是观察者),这样别人加入更容易，
// 根本没有考虑过你要加入时，你非要加入，实在没办法了，才会引入观察者模式； 虽然使用观察者容易做到某件事儿，但它也确实要花费一些开销

// 需求：抽奖转盘，特点是越转越快，
// 模块分析： 奖品初始化html --> 最终结果选定 --> 转动控制，转动效果 
// 转动控制模块 调用 转动效果模块，转动效果只负责转动效果，通知转动控制模块我转完了，接下来再怎么转动
// 转动效果模块接收消息体{moveTime: 10, speed: 200} 多长时间内转动几个奖品  setInterval 异步了，
// 转动控制与转动效果 的沟通问题在，转动控制不知道什么时候转动效果结束，因为转动速度是不恒定的

// 观察者三要素：队列，注册，触发
function observer(params){
  // 1、队列
  this.message = {

  }
}
// 2、注册
observer.prototype.regist = function(type, fn){
  this.message[key] = fn;
}
// 3、触发
observer.prototype.fire = function(type){
  this.message[key]();
}

var observerObj = new observer();

var _domArr = [];
function htmlInt(params){
  for(let i = 1; i <= 5; i++){
    _domArr.push(document.body.append(`<div>${i}</div>`));
  }
}
function getResult(params){
  let _num = Math.random() * 10 + 40; // 40是基础动画圈数
  return Math.floor(_num, 0);
}
function moveControll(params){
  let result = getResult();
  let _circle = Math.floor(result/10, 0);// 基础动画圈
  let _runCircle = 0; // 已经转了多少圈
  let stopNum = result%10; // 最终停留的奖品数
  let _speed = 200; // 转速
  observerObj.regist('finish', () => {
    let _time = 0; // 应该转几个数
    _speed -=50; // 转一圈 速度加快50
    _runCircle++; // 已转的圈数
    if(_runCircle <= _circle){ // 未达到指定的圈数
      _time = 10; // 继续转10个数
    } else {
      _time = stopNum;
    }

    move({moveTime: _time, speed: _speed});
  });
}
// 动画效果：1，2，3，4，5...10 依次高亮显示
function move(config){
  let nowIn = 0;
  let rmNum = 9; // 移除效果的索引
  let timer = setInterval(() => {
    // if(nowIn == 0){ // 单独处理第5个跳第1个的情况
    //   _domArr[9].setAttribute('class', 'item');
    //   _domArr[nowIn].setAttribute('class', 'item item-on');
    // } else{
    //   _domArr[nowIn-1].setAttribute('class', 'item');
    //   _domArr[nowIn].setAttribute('class', 'item item-on');
    // }
    
    if(nowIn != 9){
      rmNum = nowIn--
    }
    _domArr[rmNum].setAttribute('class', 'item');
    _domArr[nowIn].setAttribute('class', 'item item-on');
    nowIn++;
    if(nowIn == config.moveTime){
      clearInterval(timer);
      observerObj.fire('finish');
    }
  }, config.speed);
}
