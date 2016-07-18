'use strict';
require("babel-polyfill");

const _ = require('underscore'),
      development = require('../lib/development'),
      confs = require('../config/route')

// 路由
let render = async (ctx, controller, action)=> {
  let contr = require('../app/controllers/' + controller)
  let para = await contr['get_' + action](ctx)

  let vi = controller + '/' + action + '.jade'
  
  await ctx.render(vi,
    _.extend({
      params: ctx.params,
      route: {
        controller: controller,
        action: action
      },
      development: development,
      localEnv: global.localEnv

      //query: qs.parse(url.parse(ctx.request.url).query)
    }, para || {})
  )
} 


module.exports = (router)=> {
  return async (ctx, next)=> {
    console.log('参数', ctx)
    for(let r in confs){
      let vs = confs[r].split('/').map((item)=> {
        return item.replace(/:\w+/g, (word)=> {

          return ctx.params[word.substring(1)]
        })
      })

      router.get(r,  async (ctx, next) =>{
        await render(ctx, vs[0], vs[1])
      });
    }
    await next()
  }
}
