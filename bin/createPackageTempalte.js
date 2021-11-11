import fs from 'fs'
import ejs from 'ejs'
import path from 'path'
import { fileURLToPath } from 'url'

export default (config) => {
  // 因为是以esm形式加载而不是commonjs，所以没有自带了dirname变量
  // 由于 import.meta.url 返回的是 D:\test\cli-test\bin\createIndexTemplate.js， 所以 path.resolve 参数要 ../
	const __dirname = fileURLToPath(import.meta.url)
	const templateCode = fs.readFileSync(
		path.resolve(__dirname, '../template/package.ejs')
	)
	return ejs.render(templateCode.toString(), {
		middleware: config.middleware,
    packageName: config.packageName,
	})
}
// 这里的 config 就是基于用户的选项来生成的配置，不过这里还会涉及到另外一个组织代码的方式，就是需要把程序的主逻辑和程序的输入和输出分离。
// 因为输入和输出总是会容易变化的，而在我们的这个小程序里面我们把主逻辑和输出绑定在了一起（这里的输出就是 fs 模块，创建文件夹和文件），因为基于实际的情况的话我们的输出是不容易变化的
// 但是输出就不一样了，有可能是基于 inquirer.js ，也有可能改天就换个库，或者基于 GUI 的方式来调用，所以我们这里把输入抽离出来，主逻辑只依赖 config ，而我们需要对输入得到的 answer 对象做适配处理，这个其实就是适配层