#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import execa from 'execa' // 执行命令
import chalk from 'chalk' // 美化输出
import prettier from "prettier" // 格式化文件内容格式
// "node": "^12.17.0 || ^14.13 || >=16.0.0"
import questions from './question/index.js'
import { createConfig } from './config.js'
import createIndexTemplate from './createIndexTemplate.js'
import createPackageTemplate from './createPackageTempalte.js'

async function init () {
	function getRootPath () {
		return path.resolve(process.cwd(), config.packageName)
	}
	const answer = await questions()
	const config = createConfig(answer)
	const log = console.log;

	// 1. 创建项目文件夹
	log(chalk.blue(`创建项目文件夹:${config.packageName}`))
	fs.mkdirSync(getRootPath())
	// 2. 创建 index.js
	log(chalk.blue(`创建入口文件：index.js`))
	fs.writeFileSync(`${getRootPath()}/index.js`, prettier.format(createIndexTemplate(config), { parser: "babel" }))
	// 3. 创建 package.json
	log(chalk.blue(`创建 package.json`))
	fs.writeFileSync(
		`${getRootPath()}/package.json`,
		prettier.format(createPackageTemplate(config), { parser: "json" })
	)

	// 4. 安装依赖
	log(chalk.blue(`安装依赖`))
	// execa('yarn', [], {
	// 	cwd: getRootPath()
	// }).stdout.pipe(process.stdout)
	execa('npm', ['install'], {
		cwd: getRootPath()
	}).stdout.pipe(process.stdout)
}

init()
