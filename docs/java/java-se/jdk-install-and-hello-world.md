---
title: 开发环境搭建及入门程序
isOriginal: true
icon: java
tag:
  - Java
  - JDK
category:
  - Java 菜鸟入门
date: 2022-01-11 10:42:38
---



## 前言

作为一个入门的学习者，要进行 Java 开发，那怎么能少得了 JDK 呢，本文就先来看看如何安装并配置 JDK，为后续的学习做好铺垫。

## 下载并安装 JDK

什么是 JDK 呢？JDK（Java Development Kit）即 Java 开发者工具包，使我们学习 Java 语言必须安装的一个工具。

这里主要以 Windows 和 macOS 系统中 JDK 的安装为例，一来因为考虑到大家用的最多的还是 Windows 和 macOS 系统，二来则是因为手边没有安装 Linux 图形化系统。如果恰好你使用的是 Linux 系统，那么推荐你参考一下其他的资料，同样你也可以参考我的另一篇文章：[手把手带你玩转 Ubuntu](https://cunyu1943.blog.csdn.net/article/details/105648148)。

### Windows

#### 安装

1.  首先进入  [Oracle 官网](https://www.oracle.com/java/technologies/javase-downloads.html)，然后找到自己想要的 JDK 版本，这边以 JDK 11 为例；

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe539fc47dd54171a4302dbe2e52afc6~tplv-k3u1fbpfcp-zoom-1.image)



2.  点击 JDK Download 后，它会跳转到具体下载页面，然后根据自己的系统来进行选择，此处以 Windows 10 64 位为例；

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee382fc3c0aa42b79450fc011c687ad5~tplv-k3u1fbpfcp-zoom-1.image)

3.  点击最后的连接后，它会让你同意协议，勾选同意，然后登陆你的 Oracle 账户即可开始下载，若是没有 Oracle 账户，点击下面的创建一个即可；
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6439d2e180de40bba90daf396c66643a~tplv-k3u1fbpfcp-zoom-1.image)
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f27a7be5ef5c4926868d9c27c3f37995~tplv-k3u1fbpfcp-zoom-1.image)



4.  下载完成后，进行安装即可，安装流程和我们平常安装软件的一样，就不再赘述，需要注意的是要记住如下的安装路径，因为一般我们都不会安装到默认路径，所以一定要记住你所安装到的路径，这关系到后续的配置步骤；

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56fe9ab565954275aa002377907cf4fe~tplv-k3u1fbpfcp-zoom-1.image)


#### 配置 JDK

好了，经过上面的配置，我们的 JDK 就已经安装好了，但是这个使用你是用不了的，我们还需要进一步的配置；

打开系统属性来进行环境变量配置，打开系统属性并进行配置的方式如下：

1.  **Windows + R**  快捷键组合唤醒 Windows 运行窗口，然后输入 `sysdm.cpl`，紧接着回车即可，一般会打开如下界面，然后点击最上方的 **高级**；

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ae1af9752d544879aa54c00de90d263~tplv-k3u1fbpfcp-zoom-1.image)

2.  点击高级后，就会打开如下界面，然后打开环境变量；

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ffc2f73109f4608a788ed527177a080~tplv-k3u1fbpfcp-zoom-1.image)


3.  新建环境变量 **JAVA_HOME**，然后变量值填入刚才安装 JDK 的路径（刚才提醒过要记住！）；

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eea42bacfb2744e9a5f114976a35cb62~tplv-k3u1fbpfcp-zoom-1.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9cd26d5a1b8246dba432515d58c6ac5f~tplv-k3u1fbpfcp-zoom-1.image)

4.  编辑 **Path** 环境变量，然后新建一个变量值，填入如下内容：`%JAVA_HOME%\bin`；

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d2117a8be01432b882eaee330d9882c~tplv-k3u1fbpfcp-zoom-1.image)

5.  各种确定，然后突出系统属性即可，到这一步，理论上我们的 JDK 就安装并配置成功了，接下来我们就去确认一下到底安装好了没；

#### 验证 JDK

按照上述步骤操作完成之后，接下来就是验证了，一般我们可以通过如下三个命令来进行验证；

```bash
# 查看 JDK 版本
java -version

# 编译命令
javac

# 运行命令
java
```

打开命令控制台（**Windows + R，然后输入 cmd 回车**），然后输入如上三个命令，如果安装成功，一般是会出现如下内容的；

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b782bd2aab5742be9fb7dda7fb6a004a~tplv-k3u1fbpfcp-zoom-1.image)


![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e9d63756ba23471c8bba97fe6f479e8a~tplv-k3u1fbpfcp-zoom-1.image)


![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef57a17d98a7482db63c240665fd065b~tplv-k3u1fbpfcp-zoom-1.image)



### macOS

#### 安装

1.  首先去 [官网下载](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) 对应安装包；

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fb2df44b192545fe8663774d3d955cb5~tplv-k3u1fbpfcp-zoom-1.image)


2.  接受相关协议并登录下载；


![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32c155177f444452894ad2e1b0d3da62~tplv-k3u1fbpfcp-watermark.image?)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/40a11444998b4217a2a3cf8776297706~tplv-k3u1fbpfcp-watermark.image?)

3.  双击下载好的 `.dmg` 安装包，然后开始安装；

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/577aef8bdf5d4558abc8bf50405041cc~tplv-k3u1fbpfcp-zoom-1.image)

4.  安装过程中会让你输入密码，也就是你本机的秘密；



![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/311ed8c16ff34ad9b33fb4a50e2923de~tplv-k3u1fbpfcp-watermark.image?)
5.  安装成功；


![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5735ff82d1904af6a7bfdbd0de58602f~tplv-k3u1fbpfcp-watermark.image?)

####  验证

不同于 Windows，macOS 下不用再去配置了，它会给你自动配置好，我们只需要去验证即可；

1.  查看 JDK 版本；

```bash
java -version
```


![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/acc8058fe8054ef5a06aa134d6905dee~tplv-k3u1fbpfcp-watermark.image?)

2.  编译命令；


![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/87b264c3430349499508327e23ba3dd5~tplv-k3u1fbpfcp-watermark.image?)

3.  运行命令；


![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f1e7f819348e463fb7ccd8ddea26cd72~tplv-k3u1fbpfcp-watermark.image?)

## 你的第一个 Java程序：HelloWorld

好了，经过上面的安装配置，我们就可以开始我们的第一个 Java 程序编写了。

要开发一个 Java 程序，主要分成 3 个步骤：

1.   **编写代码**
2.   **编译代码**
3.   **运行代码**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de245ce605e04958bfb3d2c9a07772e3~tplv-k3u1fbpfcp-zoom-1.image)

我们不需要任何的基础，只需要按照上面的步骤配置好 JDK 之后，然后以上三个步骤逐一来进行就可以了。下面就来进行具体实践：

1.  打开编辑器（推荐 VS Code），如果没有，记事本也成，然后写入如下内容，然后保存为 `Main.java`，这里文件名一定要是 `Main`，文件后缀名为 `.java`。

```java
public class Main{
    public static void main(String[] args){
        System.out.println("Hello World!");
    }
}
```

2.  打开控制命令台，然后进入上述文件存放的路径，使用如下命令进行编译，然后会生成一个 `Main.class` 文件；

```bash
javac Main.java
```

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c3b2ab5900c4bc98b5215eae4052130~tplv-k3u1fbpfcp-watermark.image?)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ce413126ad34cb981f83e5476e5e521~tplv-k3u1fbpfcp-watermark.image?)

3.  运行，使用如下命令进行运行，然后就可以看到打印出的最终结果了！

```bash
java Main
```

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b0b8127e89e4552a05fd4a45cb0d604~tplv-k3u1fbpfcp-watermark.image?)

## 知识点说明

我们的 Hello World 是打印出来了，但是你肯定对里边的代码很感兴趣，这一节就主要针对我们的 Hello World 程序进行说明；

```java
public class Main{
    public static void main(String[] args){
        System.out.println("Hello World!");
    }
}
```

完整的程序代码如上：

-   `public`：权限修饰符，表示这一个可以公开访问的类，类似的还有 `protected、default、private`，后续学习过程中再一一介绍；
-   `class`：Java 关键字，表示这是一个类；
-   `Main`： 表示我们的类名，在保存时文件一定要和它同名，否则你的程序是编译不了的。你可以试试，如果把我们上面的 `Main.java` 改成其他名字，你看看是不是还能编译成功呢？
-   `public static void main(String[] args){}`：主方法，这是我们以后最常接触到的一个方法，每个主类当中都必须有一个 `main` 方法；
-   `System.out.println("Hello World!")`：控制台输出语句，执行该语句会在控制台中输出字符串，字符串要用双引号 `""` 括起来，你可以把其中的 `Hello Wolrd!` 换成你想要打印的内容试试看；

## 总结

好了，今天的内容到此就结束了，主要介绍了如何在 Windows 和 macOS 中安装 JDK，具体过程可以总结如下：

-   安装
-   配置
-   验证

然后编写了我们的第一个 `Hello World` 程序，并利用安装好的的 JDK 对其进行编译和运行。最后，则是对我们的 `Hello World` 程序中的相关知识进行了介绍。

**关注公众号，获取最新文章更新**

<img src="https://img-blog.csdnimg.cn/29df27912ca342e4a6219e967ef2f8a2.png" width="200" alt="公众号" />
