---
title: 事务
isOriginal: true
order: 30
icon: affair
category:
  - MySQL 教程
date: 2022-03-07
---
作者：村雨遥

博客：[JavaPark](https://cunyu1943.github.io/JavaPark)

>   吾生也有涯，而知也无涯。

## 事务简介

事务是一组操作的集合，是一个不可分割的工作单位，它会将所有的操作当做一个整体一起向系统提交或者撤销操作请求，因此这些操作**要么同时成功，那么同时失败**，最常见的就是业务场景就是银行转账。



## 事务操作

1.   查看/设置事务提交方式

```sql
SELECT @@autocommit;
SET @@autocommit = 0;
```

| 提交方式 | 说明     |
| -------- | -------- |
| `0`      | 手动提交 |
| `1`      | 自动提交 |



2.   提交事务

```sql
COMMIT;
```

3.   回滚事务

```sql
ROLLBACK;
```

4.   开启事务

```sql
START TRANSACTION / BEGIN
```

## 事务四大特性

-   **原子性(Atomicity)**：事务是不可分割的最小操作单元，要么全部成功，要么全部失败。
-   **一致性(Consistency)**：事务完成时，必须使所有数据都保持一直状态。
-   **隔离性(Isolation)**：数据库系统提供的隔离机制，保证事务在不收外部并发操作影响的独立环境下运行。
-   **持久性(Durability)**：事务一旦提交或回滚，那么它对数据库中数据的修改就是永久的。

## 并发事务问题

| 问题       | 说明                                                                                         |
| ---------- | -------------------------------------------------------------------------------------------- |
| 脏读       | 一个事务读到另一个事务中还未提交的数据                                                       |
| 不可重复读 | 一个事务先后读取同一条记录，但两次读取的数据不同                                             |
| 幻读       | 一个事务按照条件查询时，没有对应的数据行，但在插入数据时，又发现改行数据已存在，如同幻影一样 |

## 事务隔离级别

| 隔离级别                | 脏读 | 不可重复读 | 幻读 |
| ----------------------- | ---- | ---------- | ---- |
| `Read Uncommitted`      | √    | √          | √    |
| `Read Committed`        | ×    | √          | √    |
| `Repeatable Read`(默认) | ×    | ×          |      |
| `Serializable`          | ×    | ×          | ×    |

1.   查看事务隔离级别

```sql
SELECT @@TRANSACTION_ISOLATION;
```

2.   设置事务隔离级别

```sql
SET [SESSION|GLOBAL] TRANSACTION ISOLATION LEVEL {READ UNCOMMITED | READ COMMITED | REPEATABLE READ | SERIALIZABLE}
```

 
