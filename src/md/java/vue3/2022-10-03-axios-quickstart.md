---
title: Axios 简单使用指南
isOriginal: true
order: 10
category:
  - Vue3 笔记
date: 2022-10-03
---
作者：村雨遥

博客：[JavaPark](https://cunyu1943.github.io/JavaPark)

>   吾生也有涯，而知也无涯。

---


## 概述

###  什么是 Axios ？

`Axios` 是一个开源的基于 `promise` 的 `HTTP` 请求库，一般常用于浏览器和 `node.js` 中。它能够在具有相同代码库的浏览器和 `nodejs` 中同时运行，在服务器侧，它利用服务器端原生的 `node.js`  `http` 模块，而在客户端侧（一般是浏览器），则使用的是 `XMLHttpRequest`。

从 `Vue 2.0` 版本开始，就极力推荐使用 `Axios` 来进行 `ajax` 请求，其源码仓库为：

>   `https://github.com/axios/axios`

### 特性

-   从浏览器中创建 `XMLHttpRequests`
-   从 `node.js` 创建 `http` 请求
-   支持 `Promise API`
-   拦截请求和响应
-   转换请求数据和响应数据
-   取消请求
-   支持自动转换 `JSON` 数据
-   客户端侧支持防御 `XSRF`

###  Axios 的安装

`Axios` 安装主要有两种方式，一种是通过引入 `CDN`，另一种则是通过 `npm` 进行安装，两中安装的方式介绍如下。

1.  使用 CDN

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

2.  使用 npm

```bash
npm install axios
```

### 支持的浏览器



| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                 | Latest ✔                                                                                    | Latest ✔                                                                                 | Latest ✔                                                                              | Latest ✔                                                                           | 8+ ✔                                                                                                                         |

##  Axios 的使用

`Axios` 提供了两种不同的方式来发送 `HTTP` 请求，其中一种是直接通过 `axios()` 方法，而另一种则是通过 `axios` 对象提供的跟 `HTTP` 方法对应起来的方法来发起请求，例如：

-   `axios.get()`
-   `axios.post()`
-   `axios.update()`
-   `axios.put()`
-   ……

### get 请求

-   语法

````js
axios.get(url?key=value&key2=value2).then(function(response){}, function(err){});
````

-   实例

```html
<!DOCTYPE html>
<html lang="zh">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Axios 使用</title>
		<link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.6.1/css/bootstrap.css" rel="stylesheet">
		<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
	</head>
	<body>
		<div class="container">
			<button class="btn btn-primary">GET 请求</button>
		</div>
		<script>
			const btn = document.querySelector("button");
			btn.onclick = function() {
				axios.get("https://www.baidu.com/s?wd=村雨遥").then(response => {
					console.log(response)
				});
			}
		</script>
	</body>
</html>
```



###  post 请求

-   语法：

````js
axios.post(url, {key=value, key2=value2}).then(function(response){}, function(err){});
````

-   实例

```html
<!DOCTYPE html>
<html lang="zh">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Axios 使用</title>
		<link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.6.1/css/bootstrap.css" rel="stylesheet">
		<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
	</head>
	<body>
		<div class="container">			
			<button class="btn btn-warning">POTST 请求</button>
		</div>
		<script>
            data: {
                wd: "村雨遥"
            }
			const btn = document.querySelector("button");           
			btn.onclick = function() {
				axios.post('https://www.baidu.com/s', data).then(response => {
					console.log(response)
				});
			}
		</script>
	</body>
</html>
```

### put 请求

-   语法

```js
axios.put(url, {key=value, key2=value2}).then(function(response){}, function(err){});
```



-   实例

```html
<!DOCTYPE html>
<html lang="zh">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Axios 使用</title>
		<link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.6.1/css/bootstrap.css" rel="stylesheet">
		<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
	</head>
	<body>
		<div class="container">
			<button class="btn btn-success">PUT 请求</button>
		</div>
		<script>
			data: {
				name: "村雨遥",
				id: "cunyu1943"
			}
			const btn = document.querySelector("button");
			btn.onclick = function() {
				axios.put('https://www.baidu.com/s', data).then(response => {
					console.log(response)
				});
			}
		</script>
	</body>
</html>
```

### delete 请求

-   语法

```js
axios.delete(url?key=value&key2=value2).then(function(response){}, function(err){});
```

-   实例

```html
<!DOCTYPE html>
<html lang="zh">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Axios 使用</title>
		<link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.6.1/css/bootstrap.css" rel="stylesheet">
		<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
	</head>
	<body>
		<div class="container">
			<button class="btn btn-danger">DELETE 请求</button>
		</div>
		<script>
			const btn = document.querySelector("button");
			btn.onclick = function() {
				axios.delete("https://www.baidu.com/s?wd=村雨遥").then(response => {
					console.log(response)
				});
			}
		</script>
	</body>
</html>
```

## 总结

以上就是本文的所有内容了，主要介绍了 `Axios` 的定义、特性、如何安装以及所支持的浏览器，然后介绍了如何使用 `Axios` 来模拟发起最常用的 `GET`、`POST`、`PUT` 以及 `DELETE` 请求。
