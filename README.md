## jQuery 无缝滚动插件

在线演示地址：https://hehaibao.github.io/seamless-rolling/

### 插件说明：

1. ES6语法，支持jQuery；
2. 压缩后seamlessRolling.min.js仅1kb,未压缩文件是2kb；
3. 支持gulp压缩js；

### 如何使用？

1. 引入jQuery

```javascript
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
```

2. 引用我写好的默认CSS 
【Tips：

```html
<div class="list">
   <ul>
      <li></li>
      <li></li>
   </ul>
</div>
```
HTML结构请按照这种结构来，其他内容随便你定义】

```css
<style>
/* reset */
html,body,ul,li{margin: 0;padding: 0;}
html, body{background-color: #f2f2f2;font-size: 16px;}
ul{list-style: none;}
a{text-decoration: none;color: #666;}

.clearfix{zoom: 1;}
.clearfix:after{display:block;clear:both;visibility:hidden;height:0;overflow:hidden;content:".";}

.fl{float: left;}

/* list css */
.list{width: 270px;height: 260px;margin: 30px auto auto;overflow: hidden;background-color: #fff;}
.list ul{padding: 20px;}
.list li{margin-bottom: 20px;}
.post-user{width: 20px;}
.post-user-avatar{width: 100%;height: 20px;line-height: 20px;display: inline-block;border-radius: 50%;margin-right: 6px;vertical-align: middle;}
.post-info-right{margin-left: 30px;}
.post-user-name{display: block;color: #666;font-size: 12px;}
.post-con{font-size: 12px;color: #999;line-height: 16px;word-wrap: break-word;}
</style>
```

3. 引入seamlessRolling.min.js, 目录根据你自己项目来;

```javascript
<script src="js/seamlessRolling.min.js"></script>
```

4. 最后一步 调用

```javascript
<script>
   $(() => $.seamlessRolling());
</script>
```


--插件依赖：

* [jQuery](http://jquery.com/)
