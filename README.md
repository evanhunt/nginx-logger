## 简介

使用 `node` 做一个简单的 `nginx` 日志采集 `api`;

- [ ] node [8.6.0]()
- [ ] express [4.16.0]()
- [ ] express-generator
- [ ] mongoose [5.1.3]()
- [ ] postman

## 待完善

- [ ] `node` 热启动
- [ ] 权限验证
- [ ] `mongo` 权限
- [ ] 加入 `ts`
- [ ] 错误处理
- [ ] `json` 格式统一处理
- [ ] `error code` 统一处理
- [ ] `eslint`
- [ ] 编译, 发布
- [ ] 线上环境
- [ ] docker

## 启动

### 启动 `node`
```shell
npm install

# MacOS Linux
DEBUG=myapp:* npm start

# windows
set DEBUG=myapp:* & npm start

# postman 操作

# 获取所有列表
GET http://localhost:3000/api/bears

# 提交记录 body { name: baiwei }
POST http://localhost:3000/api/bears

# 获取指定id 记录
GET http://localhost:3000/api/bears/bears/:bear_id

# 更新指定id 记录
PUT http://localhost:3000/api/bears/bears/:bear_id

# 删除指定id记录
DELETE http://localhost:3000/api/bears/bears/:bear_id
```

### 启动 `mongo`

```shell
# 启动数据库 data
./mongod --dbpath=./data

# 链接数据库 (shell 操作数据库)
./bin/mongo
```

## 参考

RESTful API design with Node.js  (https://hackernoon.com/restful-api-design-with-node-js-26ccf66eab09)

Build Node.js RESTful APIs in 10 Minutes (https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd)
