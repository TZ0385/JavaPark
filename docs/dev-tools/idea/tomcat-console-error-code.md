---
title: IDEA 教程：Tomcat 控制台乱码解决方法
date: 2022-01-15 21:34:09
isOriginal: true
tag:
    - Tomcat
    - IDEA
category:
    - IDEA 教程
---

## 前言

当我们在 Windows 下使用 IntelliJ IDEA + Tomcat 运行自己的 Web 程序时，常会遇见控制台 Tomcat 中文乱码的情况，在网上试了很多方法，最终找到成功解决的方法，现记录如下；

## 解决方法

### IntelliJ IDEA 及项目配置

将 IntelliJ IDEA 和项目均配置为 `UTF-8` 编码；

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9naXRlZS5jb20vY3VueXUxOTQzL2ltYWdlcy9yYXcvbWFzdGVyL0ltZ3NXaW4vMjAyMDA0MTMyMjI5MTQucG5n?x-oss-process=image/format,png)



![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9naXRlZS5jb20vY3VueXUxOTQzL2ltYWdlcy9yYXcvbWFzdGVyL0ltZ3NXaW4vMjAyMDA0MTMyMjI5NTcucG5n?x-oss-process=image/format,png)



### IntelliJ IDEA 启动项



-    在 IntelliJ IDEA 安装目录下，进入 `./bin` 目录，找到 `idea.exe.vmoptions` （ 32 位）或 `idea64.exe.vmoptions` ( 64 位)，根据自己所使用的版本进行修改，在文件最后加入如下配置（如果不确定自己是哪个版本，可以对两个文件均修改）；  

```plain
  -Dfile.encoding=UTF-8
```

-    或者直接在 IntelliJ IDEA 中直接进行修改； 



![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9naXRlZS5jb20vY3VueXUxOTQzL2ltYWdlcy9yYXcvbWFzdGVyL0ltZ3NXaW4vMjAyMDA0MTMyMjM2NDUucG5n?x-oss-process=image/format,png)



![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9naXRlZS5jb20vY3VueXUxOTQzL2ltYWdlcy9yYXcvbWFzdGVyL0ltZ3NXaW4vMjAyMDA0MTMyMjM3MjgucG5n?x-oss-process=image/format,png)



### Tomcat 配置



对 Tomcat 启动脚本 `catalina.bat` 中的环境变量 `JAVA_OPTIONS` 追加如下参数；



```bash
-Dfile.encoding=UTF8 -Dsun.jnu.encoding=UTF8
```



![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9naXRlZS5jb20vY3VueXUxOTQzL2ltYWdlcy9yYXcvbWFzdGVyL0ltZ3NXaW4vMjAyMDA0MTMyMjQ1MDYucG5n?x-oss-process=image/format,png)

## 总结



经过上述配置之后，就成功解决 Tomcat 中文乱码问题。

如果你也遇到过上述问题，那就赶紧去试试我这种方法，看能不能解决吧！
