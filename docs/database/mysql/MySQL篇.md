

## MySQL管理

### 图形化管理软件

- [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
- [Navicat](https://www.navicat.com/en/products#navicat)
- [phpMyAdmin](https://www.phpmyadmin.net/)

### 数据库

- 创建新数据库；

```sql
CREATE DATABASE <databaseName>;
```

- 切换数据库；

```sql
USE <databaseName>;
```

- 删除数据库；

```sql
DROP DATABASE <databaseName>；
```

### 表

- 列出当前数据库中所有表；

```sql
SHOW <tableName>
```

- 查看表结构；

```sql
DESC <tableName>
```

- 查看创建表的SQL语句；

```sql
SHOW CREATE TABLE <tableName>;
```

- 创建表；

```sql
CREATE TABLE <tableName>;
```

- 删除表；

```sql
DROP TABLE <tableName>;
```

- 修改表

```sql
-- 添加列
ALTER TABLE <tableName> ADD COLUMN <列名> <数据类型>;
-- 删除列
ALTER TABLE <tableName> DROP COLUMN <列名>;
```

---

## 实用SQL语句

- 插入或替换

```sql
REPLACE INTO <tableName> (...) VALUES (...);
```

- 插入或更新

```sql
INSERT INTO <tableName> (...) VALUES (...) ON DUPLICATE KEY UPDATE ...;
```

- 插入或忽略

```sql
INSERT IGNORE INTO <tableName> (...) VALUES (...);
```

- 快照

```sql
CREATE TABLE <newTableName> SELECT * FROM <tableName> WHERE <条件表达式>;
```


