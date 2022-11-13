---
title: Gitee + Typora 打造写作环境
isOriginal: true
order: 15
category:
  - 效率提升
date: 2022-04-24
---
作者：村雨遥

博客：[JavaPark](https://cunyu1943.github.io/JavaPark)

>   吾生也有涯，而知也无涯。
## 前言

对于写博客的朋友们来讲，图床这个东西一定不会陌生，而且在一定程度上也给大家造成过一定困扰。

上一篇文章中我们讲了如何 [利用 Github 搭建自己的免费图床](https://cunyu1943.github.io/JavaPark/efficiency/github-img-bed)，但有人反映 Github 访问有点慢，而且也不太稳定，所以就推荐用国内的 Gitee 来搭建，于是今天就带来新鲜热乎的基于 Gitee  所搭建的免费图床教程，也水一篇文章，希望对大家伙有所帮助。

![](http://ww1.sinaimg.cn/bmiddle/9150e4e5ly1fqdi3jit6oj203h03h3yb.jpg)



##  准备工作

那么在正式开始之前，同样的，你得提前准备以下东西：

>   一个 Gitee 账号

![](http://ww2.sinaimg.cn/bmiddle/6af89bc8gw1f8so949lh9j205i03st8i.jpg)

是的，就这么简单，只要你有一个 Gitee 账号就够了，你就能拥有一个免费的图床了，如果你还没有，那赶紧出门去 [注册](http://gitee.com/) 一个账号吧。

## 搭建过程

接下来就是正式开始搭建过程了，准备好大干一场吧！

![](http://ww2.sinaimg.cn/bmiddle/006r3PQBjw1fb2ti0rsmpj307406ywes.jpg)

1.  登录你的 Gitee 之后，创建一个新的仓库；

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs/gitee-new.png)

2.  填写仓库先关资料，一般只需要选一个合适的仓库名，然后确保仓库为 `public` 其他的保持默认就好；

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs/image-info.png)

3.  一般创建成功之后，会出现如下界面，至此，我们的图床算是创建好了，接下来就是如何上传图片了；

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs/image-finish.png)

##  上传图片

通过上面的步骤，我们的图床时搭建好了，但是通过传统的方法向 Gitee 上传图片太麻烦了，这里我们推荐使用一个开源图床工具 [PicGo](https://molunerfinn.com/PicGo/) 来作为我们的图片上传工具；

PicGo 的安装就不说了，去他的 [官网](https://molunerfinn.com/PicGo/) 下载对应版本进行安装即可，我们主要讲讲如何用它来上传图片。安装后，打开软件其主页面如下：

![](https://cdn.jsdelivr.net/gh/cunyu1943/image-hosting-for-blog/blog/image-picgo.png)

接下来就是配置 PicGo 的过程了。

1.  首先，我们先要去 Gitee 创建一个 令牌；

以此打开 `设置 -> 私人令牌`，最后点击右上角 `生成新令牌`；

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs/image-tokengene.png)

2.  填写令牌描述信息及勾选相关信息，然后点击 `提交` 即可，提交后会输入密码验证生成；

![令牌生成](https://gitee.com/cunyu1943/blog-img/raw/master/images/image-tokengenetate.png)

3.  `令牌` 生成，注意它只会显示一次，所以你最好把它复制下来到你的备忘录存好，方便下次使用，否则下次有需要重新新建；

4.  配置 PicGo，PicGo 默认是不支持 Gitee 图床的，但我们可以通过安装插件来实现。打开 **插件设置**，在右方搜索框中搜索 **picgo**，然后安装 **gitee-uploader** 插件，也可以安装 **github-plus** 或者 **gitee**；

5.  然后到图床设置中打开 Gitee 图床；

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs/image-giteeconfig.png)

6.  填写相关信息，最后点击 `确定`即可，要将其作为默认图床的话，点击设为默认图床，其中的相关信息如下：
    -   **repo**：就是刚才创建的 **用户名/仓库名**;
    -   **branch**：默认为 **master** 即可；
    -   **token**：刚才生成的令牌；
    -   **path**：可自定义，但是要填，否则可能导致上传失败；
    -   **customPath**：图片归档方式，以年、年月……
    -   **customUrl**：保持默认；

![设置](https://gitee.com/cunyu1943/blog-img/raw/master/images/image-configgitee.png)

6.  上传图片，通过上传区上传即可（Ctrl V 或者将图片拖拽都可以），也可以通过快捷键的方式上传（默认上传键为 `Ctrl + Shift + P`）；

![](https://cdn.jsdelivr.net/gh/cunyu1943/image-hosting-for-blog/blog/image-20210126135321015.png)

##  搭配 Typora 使用

[Typora](https://www.typora.io/) 是一款跨平台的本地 Markdown 编辑器（个人认为是同类最棒的一款软件了），通过搭配 Typora + Picgo，我们不用向上面上传图片那么麻烦，只需要在 Typora 设置后图片就能自动上传，设置方法如下：

依次打开 `文件->偏好设置->图像`，然后选择插入图片时的动作为上传图片，并勾选对本地位置的图片应用，最后在 PicGo 路径中找到你安装 PicGo 的地址即可；

![Typora 设置](https://gitee.com/cunyu1943/blog-img/raw/master/images/image-typoraconfig.png)

##  总结

至此，我们的搭建免费图床的教程就到此结束了，总体上来讲和 Github 搭建的方式还是一样的，只是有一些小细节需要注意。好了，总结一下本文，主要有如下几部分：

1.  准备一个 Gitee 账号；
2.  搭建图床仓库；
3.  上传图片设置；
4.  搭配 Typora 使用；

如果你对上面的部分有疑问，欢迎留言或者私信，我会在看到的第一时间回复你！

![](http://ww4.sinaimg.cn/bmiddle/6af89bc8gw1f8srz9343vj205i05ijr9.jpg)
