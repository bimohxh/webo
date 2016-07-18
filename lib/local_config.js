const fs = require("fs")

module.exports = async (ctx, next)=> {
  global.localEnv = require('../config/local_env.rule.json')
  if (fs.existsSync(__dirname + '/config/local_env.json')) {
    global.localEnv = require('../config/local_env')
  }

  await next()
}



