# jsql-neo4li

**jsql-neo 数据库的 li 语言绑定。**

给 li 语言加一个完整的嵌入式数据库能力，直接调用 jsql-neo。

## 安装

直接下载 `index.js`，放到你的 li 项目里就能用。

前提：先装好 jsql-neo：
```bash
bash jsql.vexify.top/setup
# 或
npm install jsql-neo
```

## 使用

```li
导入 jsql-neo4li

# 打开数据库
db = jsql-neo4li.打开("test.db")

# 建表
jsql-neo4li.创建表(db, "users", {
    id: "INTEGER PRIMARY KEY",
    name: "TEXT",
    age: "INTEGER"
})

# 插入数据
jsql-neo4li.执行(db, "INSERT INTO users VALUES (1, '小明', 18)")

# 查询数据
结果 = jsql-neo4li.查询(db, "SELECT * FROM users")
当 i 在 0..结果.长度 {
    打印(结果[i].name)
}

# 关闭
jsql-neo4li.关闭(db)
```

## API

### 核心

| 函数 | 说明 |
|---|---|
| `打开(路径)` | 打开数据库，返回 db 对象 |
| `执行(db, sql, 参数?)` | 执行写操作（INSERT/UPDATE/DELETE） |
| `查询(db, sql, 参数?)` | 执行读操作，返回行数组 |
| `关闭(db)` | 关闭数据库 |

### 表操作

| 函数 | 说明 |
|---|---|
| `创建表(db, 表名, 字段定义)` | 创建表 |
| `删除表(db, 表名)` | 删除表 |
| `表是否存在(db, 表名)` | 判断表是否存在 |
| `获取所有表(db)` | 获取所有表名 |

### 迁移工具

| 函数 | 说明 |
|---|---|
| `导出表为JSON(db, 表名)` | 导出单表为 JSON |
| `导出全部为JSON(db)` | 导出全库为 JSON |
| `从JSON导入(db, 数据)` | 从 JSON 导入 |
| `导出表为CSV(db, 表名)` | 导出单表为 CSV |
| `从CSV导入(db, 表名, csv)` | 从 CSV 导入 |
| `导入SQL文件(db, sql)` | 从 SQL dump 导入 |

### SQL 工具

| 函数 | 说明 |
|---|---|
| `解析SQL(sql)` | 解析 SQL 为 AST |
| `分割语句(sql)` | 分割多条 SQL 语句 |
| `转义值(值)` | 转义字符串值 |
| `转义标识符(标识)` | 转义表名/字段名 |

### 服务器模式

| 函数 | 说明 |
|---|---|
| `创建MySQL服务器(选项)` | 启动 MySQL 兼容服务器 |
| `创建Redis服务器(选项)` | 启动 Redis 兼容服务器 |

### 连接池

| 函数 | 说明 |
|---|---|
| `创建连接(选项)` | 创建单个连接 |
| `创建连接池(选项)` | 创建连接池 |

## 依赖

- li 语言 ≥ v0.1.0
- Node.js ≥ 18
- jsql-neo ≥ v6.6.0

## 协议

MIT
