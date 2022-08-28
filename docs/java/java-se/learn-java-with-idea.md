---
title: 利用 IDEA 进行 Java 开发
icon: java
isOriginal: true
tag:
  - Java
  - IDEA
category:
  - Java 菜鸟入门
date: 2022-01-11 21:43:01
---

## 前言

上一篇中，我们讲了 [如何搭建 Java 开发环境](https://cunyu1943.github.io/JavaPark/java/java-se/jdk-install-and-hello-world)。不过既然确定了要从事 Java 开发，那怎么能少得了一个趁手的 IDE 呢。正所谓工欲善其事。必先利其器，一个趁手的 IDE 就像电视剧里的神兵利器，能让我们功力大增，大大提高我们的效率。

但是目前市场上那么多的 IDE，有 Eclipse、IntelliJ IDEA、NetBeans …… 我们究竟该选择哪一个呢？既然做不了决定，那我就替你选择吧！要是都没接触过，那就直接 IDEA 吧，要是你之前是个 Eclipse 的忠实粉丝，也推荐你用一下 IDEA 试试，你只需要把 IDEA 的快捷键方式设置为 Eclipse 方式即可，相信过了一开始的阵痛期之后，就会喜欢上 IDEA 这一神器。那接下来，我们就来进行 IDEA 的安装工作！




## 安装前的准备工作

开始安装之前，我们需要进行一些准备，首先是**社区版和旗舰版该选谁**，接着是**软硬件的支持**。

### 旗舰版 VS 社区版

对于旗舰版和社区版，我从官网给出的对比从而摘选了如下图所示的区别。可以看出旗舰版无论在 **语言支持、框架支持、Build 工具、部署工具、版本控制** 等多方面都比社区版更加强大，但是最大的区别也是我们最为关心的一点：**旗舰版收费，而社区版免费**， 所以可以根据自己的需求进行选择。

![](https://img-blog.csdnimg.cn/20200604092817501.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTY1NTAyOQ==,size_16,color_FFFFFF,t_70)

### 软件

- IntelliJ IDEA 安装包，下载地址：https://www.jetbrains.com/idea/download/，选择自己系统对应安装包即可。

###  硬件

| 配置项目     | 最低配置                                                                                                                                              | 推荐配置                                |
| ------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **内存**     | 2G +                                                                                                                                                  | 8 G +                                   |
| **硬盘**     | 2.5 GB + 1 GB 缓存                                                                                                                                    | 至少 5GB+ 空间的 SSD                    |
| **显示器**   | 1024 x 768                                                                                                                                            | 1920×1080                               |
| **操作系统** | 官方放出的 64 位操作系统：<br />1. Windows 8 +<br />2. macOS 10.13 +<br />3. Linux 的 Gnome、KDE、Unity 桌面环境的支持<br />4. 预览版系统可能支持不好 | 最新的 64 位 Windows、macOS、Linux 系统 |

## 安装工作

###  Ubuntu

#### 安装

1. 下载安装包，根据自己的需求选择旗舰版或是社区版

![](https://img-blog.csdnimg.cn/img_convert/c8e6ed571070c0f4e901afcabf1bb5dd.png)

2. 将下载好的安装包 `ideaIU-2020.1.1.tar.gz` 移动到平时存放软件的目录下进行解压缩

```shell
tar -zxvf ideaIU-2020.1.1.tar.gz
```

![解压](https://img-blog.csdnimg.cn/img_convert/5c9639809d7c328e018fb6b61f61a398.png)

![解压后的目录结构](https://img-blog.csdnimg.cn/img_convert/3d9686b9b627c266902bf8285e6e2070.png)

3. 进入解压后的 `bin` 目录，然后在终端启动如下命令即可：

```shell
./idea.sh
```

![](https://img-blog.csdnimg.cn/img_convert/7bf398f1e0ffce8f7befe700382cfafd.png)

4. 进入初始化启动后的设置即可。

首先是 UI 主题选择，根据自己的喜好选择 Light 还是 Darcula 模式；

![图片源自 IDEA 官网](https://img-blog.csdnimg.cn/img_convert/50c45c95d8a949b84fa2fe9c9cf2610f.png)

接着是否创建启动器脚本，同时选择自己的脚本保存目录

![图片源自 IDEA 官网](https://img-blog.csdnimg.cn/img_convert/ceb4487d5361393427d4042c97eed63b.png)

接着选择自己想要的插件和禁用无关插件，根据自己的需求安装即可，如果不知道怎么选择，默认即可

![图片源自 IDEA 官网](https://img-blog.csdnimg.cn/img_convert/6a9a3e366d5cb27097bfba77c72525d6.png)

选择额外的插件支持，按需安装，默认不勾选，后续也可以自行安装

![图片源自 IDEA 官网](https://img-blog.csdnimg.cn/img_convert/5f82ed4452d9651f332cfdcd59b05534.png)

#### 卸载

Linux 下卸载只需要将对应目录（即刚才解压后的目录）删除即可。

### Windows

#### 安装

安装过程和 Ubuntu 大致相同，只是 Windows 中的安装包是可执行文件，只需要双击进行安装即可，然后后面选择自己的安装路径即可，安装好之后的设置和 Ubuntu 一致。

#### 卸载

进入 Windows 设置，然后进入应用，然后搜索 IDEA，选择卸载即可。

![](https://img-blog.csdnimg.cn/img_convert/44bfa0d6b9a4603a36aa97e6541f33fa.png)



###  macOS

#### 安装

1.  首先去 [官网下载](https://www.jetbrains.com/idea/download/#section=mac) 对应安装包；

![](https://img-blog.csdnimg.cn/img_convert/4ef290b1d198ca527be68976b2b0d1f9.png)

2.  然后双击下载好的 `.dmg` 安装包，等待验证后拖拽到 `Applications` 即可；

![](https://img-blog.csdnimg.cn/img_convert/4fe048a188a173cd0af8c6554e9543af.png)

3.  安装成功，打开的主页面如下图所示；

![](https://img-blog.csdnimg.cn/img_convert/03d5e35d96a9d0e58de0417da5fa3904.png)

#### 卸载

打开访达中的 **应用程序**，然后找到 IDEA，将其拖到 **🗑️废纸篓** 即可，也可以单击鼠标右键，然后 **移到废纸篓**；

![](https://img-blog.csdnimg.cn/img_convert/b07e6e7541c46d466b4a7d1ef4b74212.png)

##  创建 Java 项目

[上一篇](https://mp.weixin.qq.com/s/geOWlAwVMhtmmIMvFvjSpQ) 文章中，我们介绍了如何利用编辑器写我们的 `Hello World`，接下来就讲讲如何利用 IDEA 来创建并书写我们的 `Hello World` 程序。

1.  依次进入 `File -> New -> Project`，然后选择左侧 Java，配置项目 JDK；

![](https://img-blog.csdnimg.cn/img_convert/96300c4662be3303a16b10a5c9e9f259.png)

2.  下一步之后，如果勾选上面的选项，就会从模板创建一个项目（一般都是 `HelloWorld`），不勾选就是一个空项目，看自己选择；

![](https://img-blog.csdnimg.cn/img_convert/1c432029df5d079f9cfe8b8de7e325da.png)

3.  再接下来，就是设置项目名以及项目存储目录了；

![](https://img-blog.csdnimg.cn/img_convert/a736ab37266ffb211c86ae8c9c53426d.png)

4.  最后点击完成，我们的普通 Java 项目就创建成功了；

![](https://img-blog.csdnimg.cn/img_convert/be2c04c4161b0a22a7d8576c7c43988b.png)

5.  项目创建成功了，我们在项目 `src` 目录上右键新建一个 Java 类文件。注意，一般来讲，我们倾向于把类的命名方式定义为首字母大写的驼峰命名法。然后填入如下代码，一个 简单的 `HelloWorld` 就完成了；

```java
/**
 * @author : cunyu
 * @version : 1.0
 * @className : HelloWorld
 * @date : 2020/10/23 11:14
 * @description : HelloWorld
 */

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

![](https://img-blog.csdnimg.cn/img_convert/a2e8be34e51c7f05f82d4697003147b8.png)

6.  最后运行我们刚才写的代码，可以看到输出了 `Hello World`，和我们在上一篇文章中通过控制台打印出的一样！

```bash
Hello World!
```

## 总结

今天的内容就到此为止了，主要介绍了 IDEA 的不同版本之间的区别，以及 IDEA 在不同系统中的安装和卸载工作，最后则是给大家演示了如何利用 IDEA 创建一个项目，编写我们最简单的 `Hello World!` 程序。

这里如果您想了解 IDEA 的更多使用技巧，可以关注一下，后边我会抽空写一个完整的教程系列，敬请期待吧！您要是等不及了，那就加我微信来催我更文吧！

>   最后，针对更多 IntelliJ IDEA 的使用，我特地写了一篇文章，赶紧去看看吧！
>
>   -> [传送门](https://cunyu1943.github.io/JavaPark/dev-tools/idea/idea-guide)

**关注公众号，获取最新文章更新**

<img src="https://img-blog.csdnimg.cn/29df27912ca342e4a6219e967ef2f8a2.png" width="200" alt="公众号" />
