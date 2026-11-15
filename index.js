// jsql-neo4li - li 语言的 jsql-neo 绑定
// 薄包装层，直接调用 jsql-neo

const jsql = require("jsql-neo");

// ============ 核心类 ============

// 打开数据库
function 打开(路径, 选项) {
    return new jsql.JSQL(路径, 选项);
}

// 执行 SQL（写操作）
function 执行(db, sql, 参数) {
    return db.exec(sql, 参数);
}

// 查询 SQL（读操作）
function 查询(db, sql, 参数) {
    return db.query(sql, 参数);
}

// 关闭数据库
function 关闭(db) {
    return db.close();
}

// ============ 表操作 ============

function 创建表(db, 表名, 字段定义) {
    return db.createTable(表名, 字段定义);
}

function 删除表(db, 表名) {
    return db.dropTable(表名);
}

function 表是否存在(db, 表名) {
    return db.hasTable(表名);
}

function 获取所有表(db) {
    return db.getTables();
}

// ============ 迁移工具 ============

function 导出表为JSON(db, 表名) {
    return jsql.exportTableToJSON(db, 表名);
}

function 导出全部为JSON(db) {
    return jsql.exportAllToJSON(db);
}

function 从JSON导入(db, 数据) {
    return jsql.importFromJSON(db, 数据);
}

function 导出表为CSV(db, 表名) {
    return jsql.exportTableToCSV(db, 表名);
}

function 从CSV导入(db, 表名, csv内容, 选项) {
    return jsql.importFromCSV(db, 表名, csv内容, 选项);
}

function 导出到文件(db, 表名, 输出文件) {
    return jsql.exportToFile(db, 表名, 输出文件);
}

function 导入SQL文件(db, sql语句, 选项) {
    return jsql.importDump(db, sql语句, 选项);
}

// ============ SQL 工具 ============

function 解析SQL(sql) {
    return jsql.parseSQL(sql);
}

function 分割语句(sql) {
    return jsql.splitStatements(sql);
}

function 转义值(值) {
    return jsql.escapeValue(值);
}

function 转义标识符(标识) {
    return jsql.escapeId(标识);
}

// ============ 服务器模式 ============

function 创建MySQL服务器(选项) {
    return jsql.createMysqlServer(选项);
}

function 创建Redis服务器(选项) {
    return jsql.createRedisServer(选项);
}

// ============ 连接池 ============

function 创建连接(选项) {
    return jsql.createConnection(选项);
}

function 创建连接池(选项) {
    return jsql.createPool(选项);
}

// ============ 导出 ============

module.exports = {
    // 核心
    打开,
    执行,
    查询,
    关闭,
    // 表操作
    创建表,
    删除表,
    表是否存在,
    获取所有表,
    // 迁移
    导出表为JSON,
    导出全部为JSON,
    从JSON导入,
    导出表为CSV,
    从CSV导入,
    导出到文件,
    导入SQL文件,
    // SQL 工具
    解析SQL,
    分割语句,
    转义值,
    转义标识符,
    // 服务器
    创建MySQL服务器,
    创建Redis服务器,
    // 连接池
    创建连接,
    创建连接池,
    // 底层类（高级用户用）
    JSQL: jsql.JSQL,
    Database: jsql.Database,
    Table: jsql.Table,
    Query: jsql.Query,
    // 原始导出（逃生舱）
    原始: jsql,
};
