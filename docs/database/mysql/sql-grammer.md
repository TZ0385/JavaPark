---
title: SQL 常用语法
isOriginal: true
icon: mysql
tag:
  - 数据库
  - MySQL
category:
  - MySQL 教程
date: 2022-08-07 10:40:56
---

之前了解了数据库的相关知识，然后又学习了如何安装 MySQL，接下来就来看看 SQL 常用语法，然后利用所学语法来操作我们的 MySQL 数据库实现增、删、改、查。

## SQL 通用语法

所谓通用语法，就是适用于所有关系型数据库的语法，而不是只针对某一个数据库。

常用的 SQL 通用语法主要有以下内容：

1.  SQL 语句可以以单行或多行书写，并且用分号 `;` 来表示一条语句的结束。

```sql
SELECT * FROM user;
```

```sql
SELECT *
FROM
user;
```

也就是说，以上两种方式书写的 SQL 语句其实最终实现的效果都是一样的。

2.   MySQL 中的 SQL 语句不区分大小写，但是为了将关键字和自定义变量分开，建议关键字使用大写。

```sql
SELECT * FROM user;
```

```sql
select * from user;
```

3.   SQL 中的两种种注释方式。

-   **单行注释**

```bash
SQL语句 -- 注释内容
SQL语句 # 注释内容（MySQL 特有）
```

![](https://img-blog.csdnimg.cn/img_convert/d900bd88136838b5b76cd88e24c496a1.png)

![](https://img-blog.csdnimg.cn/img_convert/f40c44947c0fcd82e0d8fb6ee8ee8d4d.png)

-   **多行注释**

```bash
SQL语句 /* 注释内容 */
```

![](https://img-blog.csdnimg.cn/img_convert/b6747ab4d4c7d0ea99e9babd50321c15.png)

## SQL 分类

对于 SQL 语句，可以分为如下几类：

-   **DDL**
-   **DML**
-   **DQL**
-   **DCL**

| 分类 | 全程                       | 解释                                                   |
| ---- | -------------------------- | ------------------------------------------------------ |
| DDL  | Data Definition Language   | 数据定义语言，用于定于数据库对象（数据库、表、字段等） |
| DML  | Data Mainpulation Language | 数据操作语言，用于对数据库表中的数据进行增、删、改     |
| DQL  | Data Query Language        | 数据查询语言，用于查询数据库中表的记录                 |
| DCL  | Data Control Language      | 数据控制语言，用于创建数据库用户、控制数据库的访问权限 |

以下就分别来看看各类语句的具体相关信息。 

## DDL（Data Definition Language）

1.  **定义**

用于 **定义数据库对象**：数据库、表、列等，相关关键字：`CREATE`、`DROP`、`ALTER`……

2.  **数据库操作**

-   **创建**

    -   创建数据库

    ```sql
    CREATE DATABASE 数据库名;
    ```

    -   创建数据库前先判断是否存在，不存在再创建

    ```sql
    CREATE DATABASE IF NOT EXISTS 数据库名;
    ```

    -   创建数据库的同时指定字符集

    ```sql
    CREATE DATABASE 数据库名 CHARACTER SET 字符集名;
    ```

![](https://img-blog.csdnimg.cn/img_convert/6ce578b106aa7b11082fcd7591a2782a.png)

![](https://img-blog.csdnimg.cn/20210621222611480.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTY1NTAyOQ==,size_16,color_FFFFFF,t_70)


-   **查询**

    -   查询所有数据库名称；

    ```sql
    SHOW DATABASES;
    ```

    -   查询某一数据库的字符集和它的创建语句；

    ```sql
    SHOW CREATE DATABASE 数据库名;
    ```

![](https://img-blog.csdnimg.cn/20210621222641552.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTY1NTAyOQ==,size_16,color_FFFFFF,t_70)


-   **更新**

    -   修改表名

    ```sql
    RENAME TABEL 表名 TO 新表名;
    ```

    -   修改数据库字符集

    ```sql
    ALTER DATABASE 数据库名 CHARACTER SET 字符集名;
    ```

![](https://img-blog.csdnimg.cn/20210621222713867.png)


-   **删除**

    -   删除数据库

    ```sql
    DROP DATABASE 数据库名;
    ```

    -   判断数据库是否存在，存在再删除

    ```sql
    DROP DATABASE IF EXISTS 数据库名;
    ```

![](https://img-blog.csdnimg.cn/20210621222731551.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTY1NTAyOQ==,size_16,color_FFFFFF,t_70)


-   **使用**

    -   使用某一个数据库

    ```sql
    USE 数据库名;
    ```

    -   查询当前正在使用的数据库

    ```sql
    SELECT DATABASE();
    ```

![](https://img-blog.csdnimg.cn/20210621222752876.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTY1NTAyOQ==,size_16,color_FFFFFF,t_70)


3.  **表操作**

-   **创建**

    -   语法

    ```sql
    CREATE TABLE 表名(
    	列名1 数据类型,
        列名2 数据类型,
        ……
        列名n 数据类型
    );
    ```

    -   常用数据类型

    | 类型        | 说明                               |
    | ----------- | ---------------------------------- |
    | `int`       | 整数类型                           |
    | `double`    | 小数类型                           |
    | `varchar`   | 字符串                             |
    | `date`      | 日期，只含年月日                   |
    | `datetime`  | 日期，不仅包含年月日，还包括时分秒 |
    | `timestamp` | 时间戳，包含年月日时分秒           |

    -   表复制

    ```sql
    CREATE TABLE 新表名 LIKE 被复制的表名;
    ```

![](https://img-blog.csdnimg.cn/20210621222825862.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTY1NTAyOQ==,size_16,color_FFFFFF,t_70)


-   **查询**

    -   查询某个数据库中所有的表

    ```sql
    SHOW TABLES;
    ```

    -   查询表结构

    ```sql
    DESC 表名;
    ```

![](https://img-blog.csdnimg.cn/20210621222846903.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTY1NTAyOQ==,size_16,color_FFFFFF,t_70)


-   **更新**

    -   修改表名

    ```sql
    ALTER TABLE 旧表名 RENAME TO 新表名;
    ```

    -   修改表的字符集

    ```sql
    ALTER TABLE 表名 CHARACTER SET 字符集名;
    ```

    -   在表中添加一列

    ```sql
    ALTER TABLE 表名 ADD 列名 数据类型;
    ```

    -   修改列名称以及对应的数据类型

    ```sql
    ALTER TABLE 表名 MODIFY 列名 新数据类型;
    ALTER TABLE 表名 CHANGE 列名 新列名 新数据类型;
    ```

    -   删除列

    ```sql
    ALTER TABLE 表名 DROP 列名;
    ```

![](https://img-blog.csdnimg.cn/20210621222940763.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTY1NTAyOQ==,size_16,color_FFFFFF,t_70)


-   **删除**

    -   直接删除表

    ```sql
    DROP TABLE 表名;
    ```

    -   判断表是否存在，存在则删除

    ```sql
    DROP TABLE IF EXISTS 表名;
    ```

![](https://img-blog.csdnimg.cn/20210621222957895.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTY1NTAyOQ==,size_16,color_FFFFFF,t_70)


​    

## DML（Data Manipulation Language）

1.  **定义**

用于 **对数据库中表的数据进行增删改**，相关关键字：`INSERT`、`UPDATE`、`DELETE`……

2.  **添加数据**

	```sql
	INSERT INTO 表名(列名1, 列名2, ……, 列名n) VALUES (值1, 值2, ……, 值n);
	```

3.  **删除数据**

    -   删除所有记录，有多少条记录就执行多少次删除操作

    ```sql
    DELETE FROM 表名 [WHERE 条件];
    ```

    -   删除所有数据，先删除表，然后创建一张结构一样的表，比 `DELETE` 效率更高

    ```sql
    TRUNCATE TABLE 表名;
    ```

4.  **修改数据**

	```sql
	UPDATE 表名 SET 列名1=值1, 类名2=值2, ……, 类名n=值n [WHERE 条件];
	```

![](https://img-blog.csdnimg.cn/20210621223028670.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTY1NTAyOQ==,size_16,color_FFFFFF,t_70)

## DQL（Data Query Language）

1.  **定义**

用于 **查询数据库中的数据**，相关关键字：`SELECT`、`HAVING`、`WHERE`……

2.  **语法**

```sql
SELECT 
	字段列表
FROM
	表名列表
WHERE
	条件列表
GROUP BY
	分组字段
HAVING
	分组后的条件
ORDER BY
	排序
LIMIT
	分页限定
OFFSET
	开始分页的起始位置
```

3.  **基础查询**

    -   多字段查询

    ```sql
    SELECT 字段1,字段2,…… FROM 表名;
    ```

    -   去重查询

    ```sql
    SELECT DISTINCT 去重字段,字段1,字段2,…… FROM 表名;
    ```

    -   起别名

    ```sql
    # 两者其一
    SELECT 字段名 AS 别名 FROM 表名;
    SELECT 字段名 别名 FROM 表名;
    ```

4.  **条件查询**

    -   `WHERE` 后加条件

| 关键字                          | 意思                                                 | 例子                                 |
| ------------------------------- | ---------------------------------------------------- | ------------------------------------ |
| `>`、`<`、`>=`、`<=`、`=`、`!=` | 大于、小于、不小于、不大于、等于、不等于             | `col_name != 4`                      |
| `BETWEEN…AND…`                  | 介于两数之间，包含左右边界                           | `col_name BETWEEN 10 AND 100`        |
| `NOT BETWEEN…AND…`              | 不在两数之间                                         | `col_name NOT BETWEEN 10 AND 100`    |
| `IN(…)`                         | 在一个列表中                                         | `col_name IN (1, 4, 5)`              |
| `NOT IN(…)`                     | 不在一个列表                                         | `col_name NOT IN (1, 4, 5)`          |
| `LIKE`                          | 模糊查询，`_` 表示单个的任意字符，`%` 表示多个字符串 | `col_name like "ABC_"`               |
| `IS NULL`                       | 判断某一字段是否为 `NULL`                            | `col_name IS NULL`                   |
| `AND` 或 `&&`                   | 表示并行关系                                         | `col_name1 == 5 AND col_name2 == 10` |
| `OR` 或 `||`                    | 表示满足其中任一条件即可                             | `col_name1 == 5 OR col_name2 == 10`  |
| `NOT` 或 `!`                    | 表示否定                                             | `col_name IS NOT NULL`               |





## DCL（Data Control Language）

1.  **定义**

用于 **定义数据库的访问权限和安全级别，以及用户创建**，相关关键字：`GRANT`、`REVOKE`……

2.  **授权**

```sql
GRANT 权限 ON 数据库名.表名 用户@'主机IP' IDENTIFIED BY 用户密码;
```

3.  **撤回授权权限**

```sql
REVOKE 权限 数据库名.表名 ON FROM 用户名;
```



