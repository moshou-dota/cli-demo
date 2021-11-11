import inquirer from "inquirer";
import packageName from "./packageName.js";
import port from "./port.js";
import middleware from "./middleware.js";

export default () => {
  return inquirer.prompt([
    /* Pass your questions in here */
    packageName(),
    port(),
    middleware(),
  ]);
};

// packageName.js、port.js、middleware.js 其实就是对 inquirer 定义问题配置的封装，在实现代码的时候，不光要实现功能，还需要考虑到维护性以及代码的可读性，遵守单一职责，时时刻刻对代码进行重构