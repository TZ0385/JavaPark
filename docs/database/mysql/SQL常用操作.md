



## 数据查询

### 查询数据库表的内容（所有行和列）

```sql
SELECT * FROM <表名>;
```

- 示例

	![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLWEzZGY0NmY1MjdjNWY4ODkucG5n?x-oss-process=image/format,png)

### 计算

```sql
SELECT <数学多项式>;
```

- 示例

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTEzODQ2ZTdmYTkxYmMyYjkucG5n?x-oss-process=image/format,png)

### 条件查询

```sql
SELECT * FROM <表名> WHERE <条件表达式>;
```

- 示例

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLWMwOGVkYzEwODZmNTAxNTMucG5n?x-oss-process=image/format,png)

- **注意**：对于条件表达式，可以用**逻辑运算符**（`AND`、`OR`、`NOT`）将多个条件同时进行匹配；

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTIzOTRkMGI0MWE1YWI2NDcucG5n?x-oss-process=image/format,png)


![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTllNGRlOTE5NzVmZDk4YjIucG5n?x-oss-process=image/format,png)

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTk5NTk2MjhlYzI5YjQxMDUucG5n?x-oss-process=image/format,png)

- 对于三个及以上的条件，可以用小括号`()`进行条件运算；

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTI3ZGRmNmRjN2UzOGQwMjgucG5n?x-oss-process=image/format,png)

- 常用条件表达式

| 条件                 | 表达式举例1     | 表达式举例2      | 说明                                              |
| :------------------- | :-------------- | :--------------- | :------------------------------------------------ |
| 使用=判断相等        | score = 90      | name = ‘cunyu’   | 字符串需要用单引号括起来                          |
| 使用>判断大于        | score > 90      | name > ‘cunyu’   | 字符串比较根据ASCII码，中文字符比较根据数据库设置 |
| 使用>=判断大于或相等 | score >= 90     | name >= ‘cunyu’  |                                                   |
| 使用<判断小于        | score < 90      | name <= ‘cunyu’  |                                                   |
| 使用<=判断小于或相等 | score <= 90     | name <= ‘cunyu’  |                                                   |
| 使用<>判断不相等     | score <> 90     | name <> ‘cunyu’  |                                                   |
| 使用LIKE判断相似     | name LIKE ‘ab%’ | name LIKE ‘%bc%’ | %表示任意字符，例如’ab%’将匹配’ab’，’abc’，’abcd’ |

### 投影查询

- 基本的投影查询

```sql
SELECT 列1,列2,列3 FROM ...;
```

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTgzMDc3YWIyNTk2N2RmNzgucG5n?x-oss-process=image/format,png)

- 对列名重命名的投影查询

```sql
SELECT 列1 别名1, 列2 别名2, 列3 别名3 FROM ...;
```

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTU1ODQzNGYzYjBmNmRkZmUucG5n?x-oss-process=image/format,png)

- **注意**： 别名是存在于内存中的，而`WHERE`仅适用于硬盘，但是`HAVING`既可以针对硬盘，也可以针对内存条件进行查询；

### 分页查询

- 经排序后获取结果中第`M`条开始后`N`条记录；

```sql
-- MySQL中两句等效
SELECT <列名> FROM <表名> ORDER BY <列名> LIMIT <M> OFFSET <N>;
SELECT <列名> FROM <表名> ORDER BY <列名> LIMIT <N> , <M>;
```

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTJjMTA5MDFhNjBhOWQxYTEucG5n?x-oss-process=image/format,png)

### 聚合查询

- 常用聚合函数

| 函数  | 说明                                   |
| :---- | :------------------------------------- |
| SUM   | 计算某一列的合计值，该列必须为数值类型 |
| AVG   | 计算某一列的平均值，该列必须为数值类型 |
| MAX   | 计算某一列的最大值                     |
| MIN   | 计算某一列的最小值                     |
| COUNT | 统计某一列的个数                       |

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTg1ZWNmZGUxMDYyN2JlNzEucG5n?x-oss-process=image/format,png)

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTQzMWI4Mzk2MjVjNjZiNTMucG5n?x-oss-process=image/format,png)

### 多表查询（笛卡尔查询）

```sql
SELECT * FROM <表1> <表2>
```

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTk0YTExMzA4ODRkZTdjZWYucG5n?x-oss-process=image/format,png)

- **注意**：多表查询时，使用`表名.列名`的方式，以防止结果集列名重复问题；

### 连接查询

- **定义**：另一种类型的多表查询，它对多个表进行`JOIN`运算，即先确定一个主表作为结果集，然后将其他表的行有选择地“连接”到主表结果集中；

- 内连接，以下是查询的写法：

```sql
SELECT ... FROM <表1> INNER JOIN <表2> ON <条件...>;
```


1. 先确定主表，继续使用`FROM <表1>`的语法；
2. 再确定需要连接的表，使用`INNER JOIN <表2>`的语法；
3. 然后确定连接条件，使用ON <条件..…>，这里的条件是s.class_id = c.id，表示students表的class_id列与classes表的id列相同的行需要连接；
4. 可选：加上`WHERE`子句、`ORDER BY`等子句；

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLWIxZjFhMTRlNDZkNzYyNmYucG5n?x-oss-process=image/format,png)

- 外连接
	- RIGHT OUTER JOIN：返回右表均存在的行；
	- LEFT OUTER JOIN：返回左表均存在的行；
	- FULL OUTER JOIN：将两张表中所有记录均选出来，且自动将对方不存在的列填充为`NULL`；

---

## 排序

- 正序（默认规则下为正序，以下两条语句功能相同）

```sql
SELECT <列名> FROM <表名> ORDER BY <列名> ASC;
SELECT <列名> FROM <表名> ORDER BY <列名>;
```

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTA5MGE4ZDhjZjM2YmIyYzEucG5n?x-oss-process=image/format,png)

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLWM0ZDNiMjE1M2Q0YjYyZmIucG5n?x-oss-process=image/format,png)

- 逆序

```sql
SELECT <列名> FROM <表名> ORDER BY <列名> DESC;
```

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLWUzNTYyNTRjZmY3ZTA3YzcucG5n?x-oss-process=image/format,png)

---

## 数据修改

### INSERT

```sql
INSERT INTO <表名> (字段1, 字段2, ...) VALUES (值1, 值2, ...);
```

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTE2YWM0YjQzN2UzNTNiMjQucG5n?x-oss-process=image/format,png)

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTUyMGM3ZTE2N2YxMDYzYmYucG5n?x-oss-process=image/format,png)

### UPDATE

```sql
UPDATE <表名> SET 字段1=值1, 字段2=值2, ... WHERE ...;
```

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTJjMzdjOGIxYjg0N2U5OTkucG5n?x-oss-process=image/format,png)

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTcyZWFkYjQ5MThkYWRkN2UucG5n?x-oss-process=image/format,png)

- **注意**：不带`WHERE`的`UPDATE`将会更新整个表的数据；

### DELETE

```sql
DELETE FROM <表名> WHERE ...;
```

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy85NzQ3MzUwLTU0YzdhNGUyYmNmNmY2MGYucG5n?x-oss-process=image/format,png)

- **注意**：不带`WHERE`的`DELETE`将会删除整个表的数据；

