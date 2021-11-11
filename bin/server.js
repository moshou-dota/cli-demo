#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import execa from 'execa'
import questions from './question/index.js'
import { createConfig } from './config.js'
import createIndexTemplate from './createIndexTemplate.js'
import createPackageTemplate from './createPackageTempalte.js'

async function init() {
	function getRootPath() {
		return path.resolve(process.cwd(), config.packageName)
	}
	const answer = await questions()
	const config = createConfig(answer)

	// 1. 创建项目文件夹
	fs.mkdirSync(getRootPath())
	// 2. 创建 index.js
	fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(config))
	// 3. 创建 package.json
	fs.writeFileSync(
		`${getRootPath()}/package.json`,
		createPackageTemplate(config)
	)

	// 4. 安装依赖
	// execa('yarn', [], {
	// 	cwd: getRootPath()
	// }).stdout.pipe(process.stdout)
	execa('npm', ['install'], {
		cwd: getRootPath()
	}).stdout.pipe(process.stdout)
}

init()
