---
title: 常用 API
isOriginal: true
icon: java
tag:
  - Java
category:
  - Java 菜鸟入门
date: 2022-08-21
---

## String

### 概述

`String` 类代表字符串，定义的变量可以用来指向字符串对象，然后操作该字符串，同时还提供了许多用于操作字符串的功能。Java 中，所有的字符串都用双引号 `""` 括起来。

此外，`String` 是不可变的字符串类型，它的对象一旦创建，就不能够再被更改。

但在实际使用过程中，给我们的实际观感可能会觉得 `String` 是可变的，但实际上 `String` 每次的修改都是产生并指向了新的字符串对象，原来的字符串对象实际上是没有改变的。

### 创建对象的 2 种方式

1.   直接使用 `""` 定义

```java
String wepublic = "村雨遥";
```

2.   通过构造方法创建

```java
String wepublic = new String("村雨遥");
```

| 构造方法                         | 说明                                 |
| -------------------------------- | ------------------------------------ |
| `public String()`                | 创建一个不含任何内容的空白字符串对象 |
| `public String(String original)` | 根据传入的字符串内容来创建字符串对象 |
| `public String(char[] chs)`      | 根据字符串数组的内容来创建字符串对象 |
| `public String(bytes[] chs)`     | 根据字符数组的内容来创建字符串对象   |

### 字符串常用 API

### 常见面试题

## ArrayList

### 概述

`ArrayList` 代表的是集合类，集合是一种容器，与类似于数组，不同的是**集合的大小是不固定的**。

### 快速入门

### 泛型支持

### ArrayList 常用 API