# 项目名称

> 本文档提供项目基础结构与框架使用的介绍

## 项目线上地址

```javascript
// xx 环境地址 账号/密码

```

## 项目运行

```
npm run serve
```

## 项目打包

```
先运行 dll 编译不常修改的第三方库
npm run dll

生成 dll 文件之后再运行 build （如果之前已经生成了 dll 则直接 build，除非对应的第三方库版本更新 则需要再次 dll）
npm run build
```

## 项目结构

```javascript
  |-- src
    |-- common
      |-- ajax // axios 封装
        |-- ajaxErrorHandle.js // 定义 axios 拦截器处理方法，处理接口响应数据，以及异常处理
        |-- axios.js // axios 实例以及拦截器
        |-- index.js
        |-- jsonp.js // 创建统一的 jsonp 实例
      |-- utils.js // 项目的公共方法
    |-- config // axios 相关配置参数
    |-- router // vue-router
    |-- service // 发送请求的封装，页面市级调用后端接口的实例方法
    |-- store // vuex
    |-- views // 项目页面
      |-- common // 特殊展示页面
        |-- 404.vue // 404页面
        |-- error.vue // 访问异常页面
        |-- lowVersion.vue // 浏览器版本过低提示页面
      |-- components // 公共组件
      
```
