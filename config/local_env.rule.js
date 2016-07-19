// don't edit this file
// This file just tell you the local config file rule 
// you can use this in development environment
// if you have diffrent config, then you should create a config file `../config/local_env.json"  


module.exports = {

  // 当前环境 
  // development  开发环境   
  // production 生产环境
  "environment": "development",

  // 程序运行接口
  "port": "2004",

 
  // 开发环境下的热加载配置
  "hotLoad": {

    // 是否启用热加载
    enable: true,

    // 热加载代理接口，也是我们在开发环境中实际访问的地址
    port: "2002",

    // browser-sync 本身的管理界面端口
    ui: "2001"

  }
}
