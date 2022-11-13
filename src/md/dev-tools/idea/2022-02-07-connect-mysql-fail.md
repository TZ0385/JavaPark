---
title: 连接 MySQL 失败解决方案
isOriginal: true
date: 2022-02-07
order: 30
category:
    - IDEA 教程
---

作者：村雨遥

博客：[JavaPark](https://cunyu1943.github.io/JavaPark)

>   吾生也有涯，而知也无涯。


## 前言

此文章用于记录自己在 IDEA 中使用 MySQL 开发过程中所遇到的问题及如何修复。



## Bug 及修复

### 使用正确的用户及密码连接数据库时，但却连不上

1.  **Bug 重现**

```bash
java.sql.SQLException: Access denied for user 'root'@'localhost' (using password: YES)
	at com.mysql.cj.jdbc.exceptions.SQLError.createSQLException(SQLError.java:129) ~[mysql-connector-java-8.0.21.jar:8.0.21]
	at com.mysql.cj.jdbc.exceptions.SQLError.createSQLException(SQLError.java:97) ~[mysql-connector-java-8.0.21.jar:8.0.21]
	at com.mysql.cj.jdbc.exceptions.SQLExceptionsMapping.translateException(SQLExceptionsMapping.java:122) ~[mysql-connector-java-8.0.21.jar:8.0.21]
	at com.mysql.cj.jdbc.ConnectionImpl.createNewIO(ConnectionImpl.java:836) ~[mysql-connector-java-8.0.21.jar:8.0.21]
	at com.mysql.cj.jdbc.ConnectionImpl.<init>(ConnectionImpl.java:456) ~[mysql-connector-java-8.0.21.jar:8.0.21]
	at com.mysql.cj.jdbc.ConnectionImpl.getInstance(ConnectionImpl.java:246) ~[mysql-connector-java-8.0.21.jar:8.0.21]
	at com.mysql.cj.jdbc.NonRegisteringDriver.connect(NonRegisteringDriver.java:197) ~[mysql-connector-java-8.0.21.jar:8.0.21]
	at com.zaxxer.hikari.util.DriverDataSource.getConnection(DriverDataSource.java:138) ~[HikariCP-3.4.5.jar:na]
	at com.zaxxer.hikari.pool.PoolBase.newConnection(PoolBase.java:358) ~[HikariCP-3.4.5.jar:na]
	at com.zaxxer.hikari.pool.PoolBase.newPoolEntry(PoolBase.java:206) ~[HikariCP-3.4.5.jar:na]
	at com.zaxxer.hikari.pool.HikariPool.createPoolEntry(HikariPool.java:477) [HikariCP-3.4.5.jar:na]
	at com.zaxxer.hikari.pool.HikariPool.checkFailFast(HikariPool.java:560) [HikariCP-3.4.5.jar:na]
	at com.zaxxer.hikari.pool.HikariPool.<init>(HikariPool.java:115) [HikariCP-3.4.5.jar:na]
	at com.zaxxer.hikari.HikariDataSource.getConnection(HikariDataSource.java:112) [HikariCP-3.4.5.jar:na]
	at org.springframework.jdbc.datasource.DataSourceUtils.fetchConnection(DataSourceUtils.java:158) [spring-jdbc-5.2.8.RELEASE.jar:5.2.8.RELEASE]
	at org.springframework.jdbc.datasource.DataSourceUtils.doGetConnection(DataSourceUtils.java:116) [spring-jdbc-5.2.8.RELEASE.jar:5.2.8.RELEASE]
	at org.springframework.jdbc.datasource.DataSourceUtils.getConnection(DataSourceUtils.java:79) [spring-jdbc-5.2.8.RELEASE.jar:5.2.8.RELEASE]
	at org.mybatis.spring.transaction.SpringManagedTransaction.openConnection(SpringManagedTransaction.java:80) [mybatis-spring-2.0.4.jar:2.0.4]
	……
```

2.  **原因**

最后发现是因为我的密码是以 `0` 开头的数字组合，所以会导致连接失败；

```yml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mp?useSSL=false&useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC
    username: root
    password: 0123456
    driver-class-name: com.mysql.cj.jdbc.Driver

```

3.  **解决方案**

将密码用 `“”` 括起来即可；

```yml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mp?useSSL=false&useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC
    username: root
    password: "0123456"
    driver-class-name: com.mysql.cj.jdbc.Driver
```
