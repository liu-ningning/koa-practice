# koa-practice

### 项目构架

基于[koa](https://koajs.com)、[react](https://reactjs.org)构建，支持[mysql](https://www.npmjs.com/package/mysql)、[redis](https://www.npmjs.com/package/redis)查询，依赖[Node.js](https://nodejs.org)环境。

#### 项目地址

git@github.com:liu-ningning/koa-practice.git

#### 项目结构

| 路径         | 描述              | 详情 |
| ------------ | ----------------- | ---- |
| bin          | 启动文件          | -    |
| client       | 客户端文件        | --   |
| pm2          | pm2.keymetrics.io | --   |
| public       | koa-static        | --   |
| server       | 服务端文件        | --   |
| views        | koa-views         | --   |
| package.json | package.json      | --   |

#### 开发环境

  + 克隆项目 - `$ git clone git@github.com:liu-ningning/koa-practice.git`
  + 安装依赖 - `$ cd koa-practice && npm i (若失败，请尝试 npm ci)`
  + 启动项目 - `$ npm run start`

开发依赖[eslint.org](https://eslint.org)，请使用支持它的编辑器。推荐[Visual Studio Code](https://code.visualstudio.com)编辑器。

#### 访问地址

  + http://127.0.0.1:6002
  + http://127.0.0.1:6002/demo

#### 注意事项

  + pm2启动顺序（第一次启动需注意）

``` sh
  $ pm2 delete koa-practice
  $ pm2 kill
  $ cd && cd koa-practice
  $ pm2 restart /home/work/koa-practice/pm2/production.json
  ```
