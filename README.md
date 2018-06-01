## 简介

使用 `node` 做一个简单的 `nginx` 日志采集 `api`;

- [ ] node [8.6.0]()
- [ ] express [4.16.0]()
- [ ] express-generator
- [ ] mongoose [5.1.3]()
- [ ] postman

## 启动

### 启动 `node`
```shell
npm install

# MacOS Linux
DEBUG=myapp:* npm start

# windows
set DEBUG=myapp:* & npm start
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
