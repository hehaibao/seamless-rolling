## jQuery 无缝滚动插件

在线演示地址：https://hehaibao.github.io/seamless-rolling/

效果预览：

![image](https://github.com/hehaibao/seamless-rolling/blob/master/preview.gif)

### 插件说明：

1. ES6语法，支持jQuery；
2. 压缩后seamlessRolling.min.js仅1kb,未压缩文件是3kb；
3. 支持gulp压缩js；

### 如何使用？

1. 引入jQuery

```javascript
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
```

2. HTML && CSS 【Tips：HTML结构请按照这种结构来，其他内容随便你定义，样式自定义，但li的高度务必要设置。】

```html
<div class="list">
   <ul>
      <li></li>
      <li></li>
   </ul>
</div>
```

3. 引入seamlessRolling.min.js, 目录根据你自己项目来;

```javascript
<script src="js/seamlessRolling.min.js"></script>
```

4. 最后一步 调用

```javascript
<script>
   $(() => $.seamlessRolling({
      liHeight: 60,
      hoverStop: false //鼠标悬浮时，是否暂停，默认true：暂停，false: 不暂停
   }));
   
   或自定义：
   
   //更多配置项：
   //{
       //el: '.scroll-list', //滚动列表DOM
       //speed: 40, //滚动速度，值越大越慢
       //liHeight: 30, //li的高度，默认30px
       //hoverStop: true, //鼠标悬浮时，是否暂停，默认true：暂停
       //direction: 0 //滚动方向，0：上; 1：下
    //}
    
   $(() => $.seamlessRolling({
      el: '.testList', //自定义滚动列表， 默认 .scroll-list
      speed: 12, //滚动速度，值越小越快，越大越慢
      direction: 1 //滚动方向，默认0，0：上; 1：下
   }));
</script>
```


--插件依赖：

* [jQuery](http://jquery.com/)
