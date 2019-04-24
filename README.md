## 新增了babel的几个包

> 其他两个分支没有加入

- [@babel/plugin-proposal-decorators](https://babel.docschina.org/docs/en/babel-plugin-proposal-decorators): 解析装饰器模式语法，如使用react-redux的@connect
- [@babel/plugin-proposal-class-properties](https://babel.docschina.org/docs/en/babel-plugin-proposal-class-properties): 解析class类的属性
- [@babel/plugin-proposal-export-default-from](https://babel.docschina.org/docs/en/babel-plugin-proposal-export-default-from): 解析export xxx from 'xxx'语法
- [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime/): 一个插件，可以重复使用Babel注入的帮助程序代码来节省代码
- @babel/runtime": @babel/plugin-transform-runtime的依赖，不下载会报错