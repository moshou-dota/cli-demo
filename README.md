# cli-demo
![cli-demo](https://img.shields.io/badge/cli--demo-v1.0.0-green)

模拟vue-cli的demo

## Build-step

``` bash
# install dependencies
npm install

# test cli

npm start
```

## Some detail in development

1. package.json 字段配置
    - files: 数组里面的字符串填写需要发布到 NPM 的文件名
    - bin: 若项目中包含一些可执行文件，可以把文件名在 bin 字段下

2. ```#!/usr/bin/env node``` -- Shebang
3. process.cwd() __diranme import.meta.url
4. npm login -> npm publish -> npm unpublish --force

## other 

后续想将自定义的ssr用cli包装下

## reference

[你还在重复的搬砖！？写个 cli 工具解放你的双手吧 - 动态生成代码模板](https://juejin.cn/post/6977567286013984776)

[NPM Package.json 字段列表介绍](http://note.youdao.com/noteshare?id=1920a1dbb280471210495b85949b1b8b&sub=2E1FF189DA5944D38FD789E43DDAB422)

[用 Substats 和 Shields.io 为你的个人主页定制动态数据小牌子](https://sspai.com/post/59593)
