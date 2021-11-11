# cli-demo

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

2. ```#!/usr/bin/env node```
3. process.cwd() __diranme import.meta.url
4. npm login -> npm publish -> npm unpublish --force

## other 

后续想将自定义的ssr用cli包装下
