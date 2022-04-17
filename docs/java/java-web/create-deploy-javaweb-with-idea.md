---
title: 如何在 IDEA 中创建并部署 JavaWeb 程序
isOriginal: true
icon: java
tag:
  - Java
  - JavaWeb
category:
  - Java Web
date: 2022-02-19 23:05:11
---



## 前言

在之前 Java 的学习中，我们可能更多地是和控制台程序打交道，也就是我们日常说的黑框框程序。 现在既然完成了 Java SE 部分的基础知识，是时候来学习 JavaWeb 部分。而随着 IDEA 的强势崛起和不断更新，使用 Eclipse 的同学可能会有些不习惯 IDEA。这一点确实是，IDEA 不同版本之间的操作和设置可能都有微小的变动，就算你之前一直使用的 IDEA，也可能会随着 IDEA 的更新找不到某些隐藏在犄角旮旯的操作。

今天我们就来看看，如何在 IDEA 最新版中从零创建一个 Java Web 项目，然后将其部署到 Tomcat 中，实现一个最简单的 JavaWeb 小程序。

前排提升，写作本博客时，博主使用的环境如下：

-   IDEA 2021.3.2（Ultimate Edition） 
-   Windows 11
-   Tomcat 9.0.52
-   JDK 11.0.11

接下来就主要从创建项目、配置 Tomcat以及验证访问三个部分来看看，如何在 IDEA 中创建、部署、运行一个 JavaWeb 项目。

## 创建项目

1.   新建一个 Java 项目

具体操作如下，依次进入 `File -> New -> Project`，然后选择左侧的 Java 选项后默认点击 `Next` 即可。

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/blog/image-new-project.png)

2.   选择是否从模板创建

如果不勾选，此时创建出来的项目就是一个空项目。如果勾选上，就会创建一个最简单的模板程序。这里默认不勾选即可，直接点击 `Next` 进入下一步。

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/blog/%E6%98%AF%E5%90%A6%E4%BB%8E%E6%A8%A1%E6%9D%BF%E5%88%9B%E5%BB%BA.png)

3.   设置项目名

这里需要自己设置自己项目名以及项目所存放位置，`Project name` 为项目名，`Project location` 为项目存放地址。关于 `More Settings` 部分则不用管，会随着我们设置好项目名和项目存放地址后自动变化。设置好之后，直接点击 `Finish` 即可。

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/blog/%E9%A1%B9%E7%9B%AE%E5%90%8D.png)

4.   添加 Web 支持

项目创建完成之后，我们发现和之前的 Java SE 项目并没有什么不同，而要将项目变成一个 Java Web 项目，就需要添加 Web 支持。具体操作为：在项目上单击鼠标右键，然后选择 `Add Framework Support` 选项卡。

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/blog/web-support.png)

然后会出现如下的选项供我们选择，这里勾选 `Web Application` 即可，最后点击 `OK` 完成。

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/blog/webapplication.png)

5.   项目目录

完成上面的步骤之后，一个空白的 Java Web 项目就创建好了。创建好之后的项目目录如下，这里会在 `web` 目录下自动生成一个 `index.jsp` 文件，现在大家都基本上抛弃了 jsp，所以我们一般都是选择将其删除。

```
D:\个人文件\代码\IDEA\JAVAWEB-IDEA-DEMO
├─src
└─web
    └─WEB-INF
```

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/blog/project-content.png)

## 配置 Tomcat

1.   点击工具栏的 `Add Configuration`，弹出 `Run/Debug Configurations` 窗口

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/blog/add-configurations.png)

2.   点击左上角 `+` 号，选择 `Tomcat Server` 下的 `Local`，注意不要选成了 `TomEE Server` 下的 `Local`。

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/blog/add-tomcat.png)

3.   配置相关属性

这里主要配置 `Name`，也就是我们 Tomcat 服务器的名称，可以保持默认不变，也可以设置为自己喜欢的名字。

`Application Serveer`，也就是我们本地 Tomcat 安装的路径。

如果勾选 `After launch`，那么就会在项目运行起来后自动在浏览器中打开项目主页，这里的浏览器可以根据自己平常用的进行选择。

`URL`，即运行后默认打开的网址。

最后，一般还需要点击右下角的 `Fix`，IDEA 就会自动配置好项目的虚拟路径 `Application context`。

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/blog/configuration-tomcat.png)

4.   点击上面的 `Fix` 步骤后，会自动跳转到 `Deployment` 选项卡下，同时 `Server` 下的 URL 会变成以下形式：

>   http://localhost:8080/javaweb_idea_demo_war_exploded/

这里如果要想访问项目主页就很麻烦，为了方便直接通过 `http://localhost:8080` 就能进入我们的项目，我们需要做如下配置。

-   首先是 `Deploy` 选项卡下的 `Application Context` 修改成 `/`。

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/blog/application-context-config.png)

-   然后将 `Server` 选项卡下的 `URL` 修改为：

>   http://localhost:8080/

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/blog/config-url.png)

5.   注意以下设置。为了实现热部署，我们通常将 `On Update action` 选择为 `Redeploy`，同时将 `On frame deactivation` 选择为 `Update classes and resources`。这样一来，通过部署后一旦出现代码改动，IDEA 就会自动将我们的项目重新部署，而不用再去重新启动服务器，实现实时更新。此外，`JRE` 设置这里默认的是使用项目的 JRE 版本，如果要单独设置，则可以在这里进行改动。

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/blog/hot-deploy.png)

## 验证访问

之前我们说过，在我们新建项目并添加 Web 框架支持后，默认会生成一个 `index.jsp`，我们需要将其删除。

而为了验证我们程序是否配置成功，我们需要将其运行起来进行验证。这里我们选择创建了一个 `index.html`，让项目启动后去访问该页面，如果出现预期内容，则说明项目部署成功，否则则说明部署失败。

其中 `index.html` 的内容如下：

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>主页</title>
    </head>
    <body>
        <p>你好，我是村雨遥</p>
    </body>
</html>
```

然后启动我们的 IDEA 项目，控制台中就会打印出如下信息：

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/blog/tomcat-log.png)

同时，浏览器将会自动弹窗访问我们的 `index.html`。如果浏览器中正确出现如下图中的信息，则说明我们的项目创建和部署就成功了。

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/blog/index.png)

## 注意

一般来讲，完成上述的步骤之后，我们的项目就算创建、部署、运行成功了。不过其中还是有几点需要注意的地方，这里分别说明一下。

1.   编译输出目录

默认情况下，项目编译输出的结果是在项目的 `out` 目录下的，如果我们要改成自定义的路径，就需要自己进行设置。

我们一般自定义是选择在 `WEB-INF` 目录下创建一个 `classes` 目录，然后依次进入 `File -> Project Structure` ，选择项目设置中的 `Modules` 选项卡，在右侧的 `Paths` 选项卡下选择 `Use` module compile out path，并将 `Output path` 设置为我们创建的  `classes` 目录即可。

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/blog/web-classes.png)

2.   项目访问端口

默认情况下，IDEA 给每个新建的项目分配的接口都是 `8080`，如果我们想要自定义，则需要在配置 Tomcat 时注意，设置位置如下。

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main/blog/tomcat-port.png)

## 总结

OK，今天的学习就到这里了！如果您在学习实践过程中遇到任何困难，欢迎加入我的[技术交流群](https://raw.githubusercontent.com/cunyu1943/ebooks/main/img/%E5%BE%AE%E4%BF%A1%E7%BE%A4.png)，和大家一起交流讨论，更好的学习与进步！更多精彩内容可以[点击直达](https://cunyu1943.github.io)，您的收藏、转发与点赞就是对我最大的支持！
