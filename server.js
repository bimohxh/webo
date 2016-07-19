'use strict';
require("babel-polyfill");

const Koa = require('koa'),
      views = require('koa-views'),
      router = require('koa-router')(),
      route = require('./lib/route'),
      localConfig = require('./lib/local_config'),
      serve = require('koa-static'),
      mount = require('koa-mount'),
      //locale = require('koa-locale'),
      bodyParser = require('koa-bodyparser'),
      //i18n = require('koa-i18n'),
      _ = require('underscore'),
      fs = require("fs")




const app = new Koa()


app.use(bodyParser())

// 本地化
/*locale(app) 
app.use(i18n(app, {
  directory: './config/locales',
  locales: ['zh-CN', 'en'], //  `zh-CN` defualtLocale, must match the locales to the filenames
  modes: [
    'query',                //  optional detect querystring - `/?locale=en-US`
    'subdomain',            //  optional detect subdomain   - `zh-CN.koajs.com`
    'cookie',               //  optional detect cookie      - `Cookie: locale=zh-TW`
    'header',               //  optional detect header      - `Accept-Language: zh-CN,zh;q=0.5`
    'url',                  //  optional detect url         - `/en`
    'tld',                  //  optional detect tld(the last domain) - `koajs.cn`
    function() {}           //  optional custom function (will be bound to the koa context)
  ]
}))*/

// 静态文件服务
app.use(mount('/assets', serve(__dirname + '/app/assets')));
app.use(mount('/assets', serve(__dirname + '/vendor')));
app.use(mount('/tmp', serve(__dirname + '/tmp')));
app.use(mount('/', serve(__dirname + '/public')));



//视图处理
app.use(views(__dirname + '/app/views', {
  map: {
    jade: 'jade'
  }
}));


// 路由
app
  .use(route(router))
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(2004)
console.log('server start...')


      
