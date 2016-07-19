"use strict";

var exec = require('child_process').execSync

exec('node app.js | node tool/watch.js | browser-sync start -c bs-config.js ')
