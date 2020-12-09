# web Components能代替现下主流的框架么？

[吉德林法则](#吉德林法则)

## keydown之前想的事情

> <font color=#222 size=3>1. what 什么是web Components，有什么特点？</font> <br />
> <font color=#222 size=3>2. way 为什么要用web Components？</font> <br />
> <font color=#222 size=3>3. where web Components在那里用？</font> <br />
> <font color=#222 size=3>4. how web Components怎么用？</font> <br />
> <font color=#222 size=3>5. PS web Components使用注意事项</font>

## 开始探索
#### 什么是web Components
> <font color=#222 size=3>document.querySelector最开始被广泛的被浏览器支持——浏览器提供了一个原生的方法结束了无处不在的JQuery</font> <br />
> <font color=#222 size=3>React这钟前端框架可以帮助我们去做一些做不到的事情，比如创建可以复用的前端组件，同意的事情会不会出现在它们身上</font> <br />
> <font color=#222 size=3>现在它来了</font> <br />
> <font color=#222 size=3>不用加载任何外部模块 浏览器的原生组件</font> <br />

[四大web组件标准](#四大web组件标准)


#### 为什么要用webComponents
**实际上你已经在用了**

##### 我们来看一看浏览器利用 Shadow DOM 实现的一个示例吧，那就是 video 标签：
``` javascript
<video controls src="./music.mp3" width="400" height="300"></video>
```

##### 调整Shadow DOM中的内容
根据pseudo 这个属性，你就可以在外面编写 CSS 样式来控制对应的节点样式了

``` css
video::-webkit-media-controls {
  background-color: orange;
}
```

> PS: 由于 Shadow DOM 的隔离性，所以即便是你在外面写了个样式：div { background-color: red !important; }，Shadow DOM 内部的 div 也不会受到任何影响。

##### 用webComponents的理由
1. 原生不需要框架
2. 在现代浏览器中运行，可与HTML一起使用的任何JavaScript库或框架一起使用。
3. 易于继承，不需要编译
4. 真正的局部CSS作用域
5. 标准，只有HTML，CSS，JavaScript

#### web Components怎么用？
**重点来了朋友们**

> Custom Elements 的核心，实际上就是利用 JavaScript 中的对象继承，去继承 HTML 原生的 HTMLElement 类

##### 怎么检测是否能用
``` javascript
customElements.whenDefined('my-attr').then(() => {
    console.log('my-attr defined');
});

const supportsCustomElementsV1 = 'customElements' in window;
```
##### 生命周期
- constructor(): 构造函数，用于初始化 state、创建 Shadow DOM、监听事件之类。
- connectedCallback(): 组件实例已被插入到 DOM 树中，用于进行一些展示相关的初始化操作。
- attributeChangedCallback(attrName, oldVal, newVal): 组件属性发生变化，用于更新组件的状态
- disconnectedCallback(): 组件被从 DOM 树中移除，用于进行一些清理操作。
- adoptedCallback(): 组件实例从一个文档被移动到另一个文档。

##### 可供外部调用的公共Api
> 除了这些生命周期方法，你还可以定义可以从外部调用的方法，这对于使用React和Angular等框架目前是不可行的

``` javascript
class YYY extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'})

        ...
    }

    doSomeThing() {
        console.log('========来自y-yy内部的 doSomeThing方法被调用=========')
    }
}

const element = document.querySelector('y-yy');
element.doSomeThing();
```

##### 自定义标签
###### 需求： 网页只要插入下面的代码，就会显示用户卡片。
``` javascript
<user-card></user-card>
```

###### Demo
branch 及作用
- page1 创建基础类，并将user-card元素与这个类关联

``` html
<user-card></user-card>
```

``` javascript
// 自定义元素需要使用 JavaScript 定义一个类，所有<user-card>都会是这个类的实例。
class UserCard extends HTMLElement {
    constructor() {
        super();
    }
}

// 使用浏览器原生的customElements.define()方法，告诉浏览器<user-card>元素与这个类关联。
window.customElements.define('user-card', UserCard);
```
- page2 增加自定义元素DOM结构
``` javascript
// 自定义元素需要使用 JavaScript 定义一个类，所有<user-card>都会是这个类的实例。
class UserCard extends HTMLElement {
    constructor() {
        super();
        var image = document.createElement('img');
        image.src = 'https://semantic-ui.com/images/avatar2/large/kristy.png';
        image.classList.add('image');

        var container = document.createElement('div');
        container.classList.add('container');

        var name = document.createElement('p');
        name.classList.add('name');
        name.innerText = 'User Name';

        var email = document.createElement('p');
        email.classList.add('email');
        email.innerText = 'yourmail@some-email.com';

        var button = document.createElement('button');
        button.classList.add('button');
        button.innerText = 'Follow';

        container.append(name, email, button);
        // 这里的this表示自定义元素实例
        this.append(image, container);
    }
}

// 使用浏览器原生的customElements.define()方法，告诉浏览器<user-card>元素与这个类关联。
window.customElements.define('user-card', UserCard);
```
- page3 使用template的形式定义DOM结构
``` html
<user-card></user-card>

<!-- 使用 JavaScript 写上一节的 DOM 结构很麻烦，Web Components API 提供了<template>标签，可以在它里面使用 HTML 定义 DOM。 -->
<template id="userCardTemplate">
    <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" class="image">
    <div class="container">
        <p class="name">User Name</p>
        <p class="email">yourmail@some-email.com</p>
        <button class="button">Follow</button>
    </div>
</template>
```
``` javascript
// 自定义元素需要使用 JavaScript 定义一个类，所有<user-card>都会是这个类的实例。
class UserCard extends HTMLElement {
    constructor() {
        super();

        var templateElem = document.getElementById('userCardTemplate');
        var content = templateElem.content.cloneNode(true);
        this.appendChild(content);
    }
}

// 使用浏览器原生的customElements.define()方法，告诉浏览器<user-card>元素与这个类关联。
window.customElements.define('user-card', UserCard);
```
- page4 为自定义元素添加样式
``` html
<!-- 使用 JavaScript 写上一节的 DOM 结构很麻烦，Web Components API 提供了<template>标签，可以在它里面使用 HTML 定义 DOM。 -->
<template id="userCardTemplate">
    <!-- 组件的样式应该与代码封装在一起，只对自定义元素生效，不影响外部的全局样式。所以，可以把样式写在<template>里面。 -->
    <style>
        /* :host伪类，指代自定义元素本身 */
        :host {
            display: flex;
            align-items: center;
            width: 450px;
            height: 180px;
            background-color: #d4d4d4;
            border: 1px solid #d5d5d5;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
            border-radius: 3px;
            overflow: hidden;
            padding: 10px;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        .image {
            flex: 0 0 auto;
            width: 160px;
            height: 160px;
            vertical-align: middle;
            border-radius: 5px;
        }

        .container {
            box-sizing: border-box;
            padding: 20px;
            height: 160px;
        }

        .container>.name {
            font-size: 20px;
            font-weight: 600;
            line-height: 1;
            margin: 0;
            margin-bottom: 5px;
        }

        .container>.email {
            font-size: 12px;
            opacity: 0.75;
            line-height: 1;
            margin: 0;
            margin-bottom: 15px;
        }

        .container>.button {
            padding: 10px 25px;
            font-size: 12px;
            border-radius: 5px;
            text-transform: uppercase;
        }
    </style>

    <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" class="image">
    <div class="container">
        <p class="name">User Name</p>
        <p class="email">yourmail@some-email.com</p>
        <button class="button">Follow</button>
    </div>
</template>
```
- page5 让自定义元素接收外部参数
``` html
<!-- 自定义元素的参数 -->
<user-card image="https://semantic-ui.com/images/avatar2/large/kristy.png" name="User Name"
    email="yourmail@some-email.com"></user-card>

<!-- 使用 JavaScript 写上一节的 DOM 结构很麻烦，Web Components API 提供了<template>标签，可以在它里面使用 HTML 定义 DOM。 -->
<template id="userCardTemplate">
    <!-- 组件的样式应该与代码封装在一起，只对自定义元素生效，不影响外部的全局样式。所以，可以把样式写在<template>里面。 -->
    <style>
        /* :host伪类，指代自定义元素本身 */
        :host {
            display: flex;
            align-items: center;
            width: 450px;
            height: 180px;
            background-color: #d4d4d4;
            border: 1px solid #d5d5d5;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
            border-radius: 3px;
            overflow: hidden;
            padding: 10px;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        .image {
            flex: 0 0 auto;
            width: 160px;
            height: 160px;
            vertical-align: middle;
            border-radius: 5px;
        }

        .container {
            box-sizing: border-box;
            padding: 20px;
            height: 160px;
        }

        .container>.name {
            font-size: 20px;
            font-weight: 600;
            line-height: 1;
            margin: 0;
            margin-bottom: 5px;
        }

        .container>.email {
            font-size: 12px;
            opacity: 0.75;
            line-height: 1;
            margin: 0;
            margin-bottom: 15px;
        }

        .container>.button {
            padding: 10px 25px;
            font-size: 12px;
            border-radius: 5px;
            text-transform: uppercase;
        }
    </style>

    <!-- 自定义元素的参数 -->
    <img class="image">
    <div class="container">
        <p class="name"></p>
        <p class="email"></p>
        <button class="button">Hello</button>
    </div>
</template>
```
- page6 开启Shadow Dom 隐藏内部代码 （内部代码不会影响外部代码，保证了代码的纯净）
``` javascript
// 自定义元素需要使用 JavaScript 定义一个类，所有<user-card>都会是这个类的实例。
class UserCard extends HTMLElement {
    constructor() {
        super();

        // Web Component 允许内部代码隐藏起来，这叫做 Shadow DOM，即这部分 DOM 默认与外部 DOM 隔离，内部任何代码都无法影响外部。
        var shadow = this.attachShadow( { mode: 'closed' } );

        var templateElem = document.getElementById('userCardTemplate');
        var content = templateElem.content.cloneNode(true);

        // 把参数加到自定义元素里面
        content.querySelector('img').setAttribute('src', this.getAttribute('image'));
        content.querySelector('.container>.name').innerText = this.getAttribute('name');
        content.querySelector('.container>.email').innerText = this.getAttribute('email');

        // this.attachShadow()方法开启 Shadow DOM
        shadow.appendChild(content);
    }
}

// 使用浏览器原生的customElements.define()方法，告诉浏览器<user-card>元素与这个类关联。
window.customElements.define('user-card', UserCard);
```
- page7 添加方法互动
``` javascript
// 自定义元素需要使用 JavaScript 定义一个类，所有<user-card>都会是这个类的实例。
class UserCard extends HTMLElement {
    constructor() {
        super();

        // Web Component 允许内部代码隐藏起来，这叫做 Shadow DOM，即这部分 DOM 默认与外部 DOM 隔离，内部任何代码都无法影响外部。
        var shadow = this.attachShadow({
            mode: 'closed'
        });

        var templateElem = document.getElementById('userCardTemplate');
        var content = templateElem.content.cloneNode(true);

        // 把参数加到自定义元素里面
        content.querySelector('img').setAttribute('src', this.getAttribute('image'));
        content.querySelector('.container>.name').innerText = this.getAttribute('name');
        content.querySelector('.container>.email').innerText = this.getAttribute('email');

        // 在类里面监听各种事件
        this.$button = content.querySelector('.container>.button');
        this.$button.addEventListener('click', () => {
            console.log('i am' + this.getAttribute('name'))
        });

        // this.attachShadow()方法开启 Shadow DOM
        shadow.appendChild(content);
    }
}

// 使用浏览器原生的customElements.define()方法，告诉浏览器<user-card>元素与这个类关联。
window.customElements.define('user-card', UserCard);
```
- page8 抽离样式为单独文件
``` html
<!-- 自定义元素的参数 -->
<user-card image="https://semantic-ui.com/images/avatar2/large/kristy.png" name="User Name"
    email="yourmail@some-email.com"></user-card>

<!-- 使用 JavaScript 写上一节的 DOM 结构很麻烦，Web Components API 提供了<template>标签，可以在它里面使用 HTML 定义 DOM。 -->
<template id="userCardTemplate">
    <link rel="stylesheet" href="./index.css">
    <!-- 自定义元素的参数 -->
    <img class="image">
    <div class="container">
        <p class="name"></p>
        <p class="email"></p>
        <button class="button">Hello</button>
    </div>
</template>
```
- page9 CSS样式钩子
子组件中
``` css
/* :host伪类，指代自定义元素本身 */
:host {
    display: block;
    all: initial;
    display: flex;
    align-items: center;
    width: 450px;
    height: 180px;
    /* background-color: #d4d4d4; */
    background: var(--fancy-tabs-bg,  #d4d4d4);
    border: 1px solid #d5d5d5;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    overflow: hidden;
    padding: 10px;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
```
父组件中
``` css
user-card {
        --fancy-tabs-bg: blue;
    }
```
> 可继承样式（background、color、font 以及 line-height 等）可在 shadow DOM 中继续继承。 也就是说，默认情况下它们会突破 shadow DOM 边界。 如果您想从头开始，可在它们超出影子边界时，使用 all: initial; 将可继承样式重置为初始值。
``` css
:host {
  all: initial;
}
```
> 从外部定义在组件本身的样式优先于使用:host在Shadow DOM中定义的样式。
``` css
user-card {
  display: inline-block;
}
:host {
  display: block;
}
```

##### 扩展标签
###### 需求： 创建一个漂亮的<button>
###### Demo
branch 及作用
- extend1 创建基础类，继承自HTMLButtonElement，并将button元素与这个类关联
    - [其他标签基类](https://html.spec.whatwg.org/multipage/indices.html#element-interfaces)

``` html
<button is="fancy-button">Fancy button!</button>
```
``` javascript
// 要扩展元素，您需要创建继承自正确 DOM 接口的类定义。 例如，扩展 <button> 的自定义元素需要从 HTMLButtonElement 而不是 HTMLElement 继承。 同样，扩展 <img> 的元素需要扩展 HTMLImageElement。
class FancyButton extends HTMLButtonElement {
    constructor() {
        super();
    }
}
customElements.define('my-button',
    FancyButton, {
        extends: 'button'
    }
)
```
- extend2 为基类扩展方法
``` javascript
// 要扩展元素，您需要创建继承自正确 DOM 接口的类定义。 例如，扩展 <button> 的自定义元素需要从 HTMLButtonElement 而不是 HTMLElement 继承。 同样，扩展 <img> 的元素需要扩展 HTMLImageElement。
class FancyButton extends HTMLButtonElement {
    constructor() {
        super(); // always call super() first in the constructor.
        this.addEventListener('click', e => this.drawRipple(e.offsetX, e.offsetY));
    }

    // Material design ripple animation.
    drawRipple(x, y) {
        let div = document.createElement('div');
        div.classList.add('ripple');
        this.appendChild(div);
        div.style.top = `${y - div.clientHeight/2}px`;
        div.style.left = `${x - div.clientWidth/2}px`;
        div.style.backgroundColor = 'currentColor';
        div.classList.add('run');
        div.addEventListener('transitionend', e => div.remove());
    }
}

customElements.define('fancy-button', FancyButton, {
    extends: 'button'
});
```
- extend3 在 JavaScript 中创建实例
``` javascript
// 要扩展元素，您需要创建继承自正确 DOM 接口的类定义。 例如，扩展 <button> 的自定义元素需要从 HTMLButtonElement 而不是 HTMLElement 继承。 同样，扩展 <img> 的元素需要扩展 HTMLImageElement。
class FancyButton extends HTMLButtonElement {
    constructor() {
        super(); // always call super() first in the constructor.
        this.addEventListener('click', e => this.drawRipple(e.offsetX, e.offsetY));
    }

    // Material design ripple animation.
    drawRipple(x, y) {
        let div = document.createElement('div');
        div.classList.add('ripple');
        this.appendChild(div);
        div.style.top = `${y - div.clientHeight/2}px`;
        div.style.left = `${x - div.clientWidth/2}px`;
        div.style.backgroundColor = 'currentColor';
        div.classList.add('run');
        div.addEventListener('transitionend', e => div.remove());
    }
}

customElements.define('fancy-button', FancyButton, {
    extends: 'button'
});

window.onload = function () {
    let App = document.querySelector('#app')
    let button = document.createElement('button', {
        is: 'fancy-button'
    });
    button.textContent = 'Fancy button!';
    App.appendChild(button);
}
```

##### 实现slot插槽
###### Demo
branch 及作用
- slot1 添加默认slot
``` html
<!-- 自定义元素的参数 -->
<user-card image="https://semantic-ui.com/images/avatar2/large/kristy.png" name="User Name"
    email="yourmail@some-email.com">
    this is slot data
</user-card>

<!-- 使用 JavaScript 写上一节的 DOM 结构很麻烦，Web Components API 提供了<template>标签，可以在它里面使用 HTML 定义 DOM。 -->
<template id="userCardTemplate">
    <!-- 组件的样式应该与代码封装在一起，只对自定义元素生效，不影响外部的全局样式。所以，可以把样式写在<template>里面。 -->
    <style>
        /* :host伪类，指代自定义元素本身 */
        :host {
            display: flex;
            align-items: center;
            width: 450px;
            height: 180px;
            background-color: #d4d4d4;
            border: 1px solid #d5d5d5;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
            border-radius: 3px;
            overflow: hidden;
            padding: 10px;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        .image {
            flex: 0 0 auto;
            width: 160px;
            height: 160px;
            vertical-align: middle;
            border-radius: 5px;
        }

        .container {
            box-sizing: border-box;
            padding: 20px;
            height: 160px;
        }

        .container>.name {
            font-size: 20px;
            font-weight: 600;
            line-height: 1;
            margin: 0;
            margin-bottom: 5px;
        }

        .container>.email {
            font-size: 12px;
            opacity: 0.75;
            line-height: 1;
            margin: 0;
            margin-bottom: 15px;
        }

        .container>.button {
            padding: 10px 25px;
            font-size: 12px;
            border-radius: 5px;
            text-transform: uppercase;
        }
    </style>

    <!-- 自定义元素的参数 -->
    <img class="image">
    <div class="container">
        <p class="name"></p>
        <p class="email"></p>
        <button class="button">Hello</button>
        <slot></slot>
    </div>
</template>
```
``` javascript
// 自定义元素需要使用 JavaScript 定义一个类，所有<user-card>都会是这个类的实例。
class UserCard extends HTMLElement {
    constructor() {
        super();

        // Web Component 允许内部代码隐藏起来，这叫做 Shadow DOM，即这部分 DOM 默认与外部 DOM 隔离，内部任何代码都无法影响外部。
        var shadow = this.attachShadow({
            mode: 'closed'
        });

        var templateElem = document.getElementById('userCardTemplate');
        var content = templateElem.content.cloneNode(true);

        // 把参数加到自定义元素里面
        content.querySelector('img').setAttribute('src', this.getAttribute('image'));
        content.querySelector('.container>.name').innerText = this.getAttribute('name');
        content.querySelector('.container>.email').innerText = this.getAttribute('email');

        // 在类里面监听各种事件
        this.$button = content.querySelector('.container>.button');
        this.$button.addEventListener('click', () => {
            console.log('i am' + this.getAttribute('name'))
        });

        // this.attachShadow()方法开启 Shadow DOM
        shadow.appendChild(content);
    }
}

// 使用浏览器原生的customElements.define()方法，告诉浏览器<user-card>元素与这个类关联。
window.customElements.define('user-card', UserCard);

```
- slot2 添加具名slot
``` html
<!-- 自定义元素的参数 -->
<user-card image="https://semantic-ui.com/images/avatar2/large/kristy.png" name="User Name"
    email="yourmail@some-email.com">
    this is slot data
    <p slot="title">I have a title</p>
</user-card>

<!-- 使用 JavaScript 写上一节的 DOM 结构很麻烦，Web Components API 提供了<template>标签，可以在它里面使用 HTML 定义 DOM。 -->
<template id="userCardTemplate">
    <!-- 组件的样式应该与代码封装在一起，只对自定义元素生效，不影响外部的全局样式。所以，可以把样式写在<template>里面。 -->
    <style>
        /* :host伪类，指代自定义元素本身 */
        :host {
            display: flex;
            align-items: center;
            width: 450px;
            height: 180px;
            background-color: #d4d4d4;
            border: 1px solid #d5d5d5;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
            border-radius: 3px;
            overflow: hidden;
            padding: 10px;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        .image {
            flex: 0 0 auto;
            width: 160px;
            height: 160px;
            vertical-align: middle;
            border-radius: 5px;
        }

        .container {
            box-sizing: border-box;
            padding: 20px;
            height: 160px;
        }

        .container>.name {
            font-size: 20px;
            font-weight: 600;
            line-height: 1;
            margin: 0;
            margin-bottom: 5px;
        }

        .container>.email {
            font-size: 12px;
            opacity: 0.75;
            line-height: 1;
            margin: 0;
            margin-bottom: 15px;
        }

        .container>.button {
            padding: 10px 25px;
            font-size: 12px;
            border-radius: 5px;
            text-transform: uppercase;
        }
    </style>

    <!-- 自定义元素的参数 -->
    <img class="image">
    <div class="container">
        <p class="name"></p>
        <p class="email"></p>
        <slot name="title"></slot>
        <button class="button">Hello</button>
        <slot></slot>
    </div>
</template>
```

#### web Components使用注意事项

- 根据规范，自定义元素的名称必须包含连词线，用与区别原生的 HTML 元素。所以，<user-card>不能写成<usercard>。
- 不能重复注册同一标记 否则会报错: Uncaught DOMException: Failed to execute 'define' on 'CustomElementRegistry': the name "user-card" has already been used with this registry
- 自定义元素不能自我封闭，因为 HTML 仅允许少数元素自我封闭。必须编写封闭标记 (<app-drawer></app-drawer>)。
- html 文档中的 Custom Elements 在 JavaScript 未执行时是处于一个默认的状态，浏览器默认会将其内容直接显示出来。为了避免这样的情况发生，Custom Elements 在被注册后都会有一个 :defined CSS 伪类而在注册前没有

``` css
my-element:not(:defined) {
  display: none;
}
```



## 附录

##### 吉德林法则

> 美国通用汽车公司管理顾问查尔斯·吉德林提出：把难题清清楚楚地写出来，便已经解决了一半。 只有先认清问题，才能很好地解决问题。 这种观点在管理学上被称为吉德林法则。

[keydown之前想的事情](#keydown之前想的事情)

##### 四大web组件标准

**HTML Template**
> HTML5 中的 \<template\> 标签 它只是一个模版，只有到你用到它时，它才会变得有意义。

**Shadow DOM**
> 原生组件封装的基本工具，它可以实现组件与组件之间的独立性。利用 Shadow DOM 的隔离性，我们就可以创造原生的 HTML 组件了。

**Custom Elements**
> 用来包装原生组件的容器，通过它，你就只需要写一个标签，就能得到一个完整的组件。

**HTML Imports**
> HTML 中类似于 ES6 Module 的一个东西，你可以直接 import 另一个 html 文件，然后使用其中的 DOM 节点。但是，由于 HTML Imports 和 ES6 Module 实在是太像了，并且除了 Chrome 以外没有浏览器愿意实现它，所以它已经被废弃并不推荐使用了。未来会使用 ES6 Module 来取代它，但是现在貌似还没有取代的方案，在新版的 Chrome 中这个功能已经被删除了，并且在使用的时候会在 Console 中给出警告。


[为什么要用web Components](#为什么要用webComponents)


## 参考
[阮一峰-Web Components 入门实例教程](http://www.ruanyifeng.com/blog/2019/08/web_components.html)

[深度介绍：💾 你听说过原生 HTML 组件吗？](https://juejin.im/post/6844903694891220999)

[自定义元素 v1：可重用网络组件](https://developers.google.com/web/fundamentals/web-components/customelements#intro)


##### todo
注入template
自定义事件 https://developers.google.com/web/fundamentals/web-components/shadowdom#customevents
处理焦点 https://developers.google.com/web/fundamentals/web-components/shadowdom#focus