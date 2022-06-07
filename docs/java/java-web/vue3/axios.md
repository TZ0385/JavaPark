

##  Axios 简介

###  什么是 Axios ？

Axios 是一个基于 promise 的 HTTP 库，能够在浏览器和 Node.js 中使用；

###  Axios 的特性

-   从浏览器中创建 XMLHttpRequests
-   从 node.js 创建 http 请求
-   支持 Promise API
-   拦截请求和响应
-   转换请求数据和响应数据
-   取消请求
-   自动转换 JSON 数据
-   客户端支持防御 XSRF

###  Axios 的安装

1.  使用 CDN

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

2.  使用 npm

```bash
npm install axios
```

### 支持的浏览器

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Latest ✔                                                     | Latest ✔                                                     | Latest ✔                                                     | Latest ✔                                                     | Latest ✔                                                     | 8+ ✔                                                         |

##  Axios 的使用

### get 请求

-   语法：`axios.get(url?key=value&key2=value2).then(function(response){}, function(err){})`；

###  post 请求

-   语法：语法：`axios.post(url, {key=value, key2=value2}).then(function(response){}, function(err){})`；

###  this

在 `axios` 中，`this` 指针所指向的对象会改变，所以我们需要将其存储起来，然后再进行数据输出；

