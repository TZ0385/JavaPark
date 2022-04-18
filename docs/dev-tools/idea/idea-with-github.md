---
title: IDEA 教程：IDEA + Github 多设备同步开发
isOriginal: true
tag:
  - IDEA
  - Github
category:
  - IDEA 教程
date: 2022-01-03 21:58:37
---



## 前言

在我们日常工作生活中，当我们换设备或者重装系统后，往往需要将我们之前的代码进行同步。这个时候我们常常都是采用 U 盘拷贝的方式，但是这样十分麻烦，那有没有不用通过 U 盘之类的介质拷贝就能实现的呢。今天我们看看如何利用 IDEA + Github，实现跨设备跨平台之间的同步。后续步骤均建立在安装好 git 和拥有 Github 账户的基础上，如果还没有安装 git 或者没有 Github 账户，那赶紧先去安装 git 和申请一个 Github 账户吧。

## 同步过程

### 新建一个 Java 项目

1.   新建一个项目，如果有之前的项目，也可以直接打开，不用再新建，然后直接跳到下一小节；

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTYxMDYwNTQzZGYwNjNkMjkucG5n?x-oss-process=image/format,png)

2.   选择是否基于模板创建项目，默认我们不勾选，直接下一步，创建一个空项目；

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTg1ZTg2NWRmYjIzZTI3NDQucG5n?x-oss-process=image/format,png)

3.   自定义项目名及存储路径，在这里指定我们的项目名，并且指定项目存放地址；

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLWNkNDY3NmZmZjhkNzI0NGUucG5n?x-oss-process=image/format,png)

### Git & Github 设置

1.   在 IDEA 中设置 Git 安装的路径，一般 IDEA 是会自动检测你的 Git 所在目录的，如果没有自动检测出来，就需要我们自己去找到安装好的 Git 的路径；

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main//blog/image-20210929152236779.png)

2.   设置好 Git 的安装路径之后，我们就可以直接去登录 Github 了，在这里直接输入你的 Github 账户及密码即可；

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTY4MGUyNmFjNGZlMGFiZGIucG5n?x-oss-process=image/format,png)

3.   点击登录后，如果出现如下图中的界面，即显示你的 Github 账户头像和用户名，则说明此时登录成功；

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main//blog/image-20210929152314679.png)

### 本地项目推送到远程

1.   依次进入 `VCS -> Share Project on Github`；

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main//blog/image-20210929152433453.png)

2.   然后填写仓库名、远程分支、仓库描述，以及选择是否私有，最后点击 `Share` 即可；

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main//blog/image-20210929152612705.png)

3.   等待一会儿，IDEA 会指定弹出以下窗口。这里主要供我们选择所要推送到远程的文件，以及提交信息，确认好两者之后，最后点击 `Add` 即可；

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main//blog/image-20210929152834588.png)

4.   等待完成即可；

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main//blog/image-20210929153113252.png)

5.   如果遇到网络问题或者其他问题导致推送失败，可以点击下图中的按钮，然后再次提交推送即可；

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main//blog/image-20210929153301590.png)

6.   最后，点击 IDEA 最下边工具栏的 `Git` 就可以查看我们的提交记录了；

![image-20210929153511045](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main//blog/image-20210929153511045.png)

7.   最后去我们的 Github 查看刚才的推送是否成功；

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main//blog/image-20210929154138288.png)

## 提交与拉取

### 提交

当我们的项目有所改动之后，如果我们想要将我们改动的内容推送到远程，可以通过如下过程来进行。

1.   点击如下图中按钮（或者使用快捷键 `Ctrl + K`），然后在左侧选中我们改动的内容并填写提交信息，接着点击下方的 `Commit` 即可；

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main//blog/image-20210929154719736.png)

2.   然后重复上一小节中的第 5 个步骤即可！
3.   最后去我们的远程看看刚才提交的改动的内容。

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main//blog/image-20210929155151900.png)

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main//blog/image-20210929155228143.png)

### 拉取

假设有这样的场景，我们在公司的电脑上提交了我们新加的功能代码，回家之后想用自己的电脑接着开发，此时我们自己电脑上的代码还是之前的老版本，此时需要先从远程拉取我们在公司时所新加的内容。

此时需要按照如下过程操作：

1.   点击下图中的按钮，根据自己的需要选择 `Merge` 还是 `Rebase`；

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main//blog/image-20210929155555792.png)

2.   然后等待项目更新完成即可。

![](https://cdn.jsdelivr.net/gh/cunyu1943/blog-imgs@main//blog/image-20210929155646021.png)

## 总结

通过上述操作，即可将 IntelliJ IDEA 与远程 Github 连接起来，随时将我们所做工作推送到 Github 保存，再也不用担心不同设备之间迁移的问题，随时随地进行开发 ~

最后，创作不易，如果你觉得对你有所帮助，那就点个赞再走吧！
