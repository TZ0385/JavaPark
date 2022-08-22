---
title: String 详解
isOriginal: true
icon: java
tag:
  - Java
category:
  - Java 菜鸟入门
date: 2022-08-21
---

## 概述

`String` 类代表字符串，定义的变量可以用来指向字符串对象，然后操作该字符串，同时还提供了许多用于操作字符串的功能。Java 中，所有的字符串都用双引号 `""` 括起来。

此外，`String` 是不可变的字符串类型，它的对象一旦创建，就不能够再被更改。

但在实际使用过程中，给我们的实际观感可能会觉得 `String` 是可变的，但实际上 `String` 每次的修改都是产生并指向了新的字符串对象，原来的字符串对象实际上是没有改变的。

## 创建对象的 2 种方式

1.   直接使用 `""` 定义

```java
String wepublic = "村雨遥";
```

2.   通过构造方法创建

```java
// 创建一个不含任何内容的空白字符串对象
String wepublic = new String();
```

```java
// 根据传入的字符串内容创建字符串对象
String wepublic = new String("村雨遥");
```

| 构造方法                         | 说明                                 |
| -------------------------------- | ------------------------------------ |
| `public String()`                | 创建一个不含任何内容的空白字符串对象 |
| `public String(String original)` | 根据传入的字符串内容来创建字符串对象 |
| `public String(char[] chs)`      | 根据字符串数组的内容来创建字符串对象 |
| `public String(bytes[] chs)`     | 根据字符数组的内容来创建字符串对象   |

两者的区别在于，利用 `""` 方式所给出的字符串对象，存储在字符串常量池中，而且相同内容只会在其中存储一份。但是通过构造方法 `new` 对象，每次 `new` 都会产生一个新对象，它们是存放在堆内存中的。

## 字符串常用 API

| 方法名                                                       | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `public boolean equals(Object anotherObject)`                | 将此字符串与指定对象比较，只关心字符串内容是否一致           |
| `public boolean equalsIgnoreCase(String anotherString)`      | 将此字符串与指定对象进行比较，忽略大小写比较字符串内容是否一致 |
| `public int length()`                                        | 返回字符串长度                                               |
| `public char charAt(int index)`                              | 获取某个索引位置处的字符                                     |
| `public char[] toCharArray()`                                | 字符串转换为字符串数组                                       |
| `public String substring(int beginIndex, int endIndex)`      | 根据开始和结束索引进行截取得到新的子串（左闭右开）           |
| `public String replace(CharSequence target, CharSequence replacement)` | 使用新值将字符串中的旧值替换得到新字符串                     |
| `public String[] split(String regex)`                        | 通过正则规则切割字符串，得到字符串数组                       |

1.   内容比较

比较字符串中的内容是否一样。