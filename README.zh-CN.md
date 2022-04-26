# 项目中使用

1. npm install -D @babel/core
2. 根目录创建 _babel.config.js_

```
module.exports = {
  plugins: ['path']  // path: 自定babel文件的路径
}
```

3. 如果 ESlint 需要
   在 _.eslintrc.js_ 中 添加相应代码 排除校验

```
globals: {
  DEV_ROUTE: true
}
```
