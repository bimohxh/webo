let model;
let Test = require('../../component/test')
class Index extends Basic {
  constructor(){
    super();
    model = this;
    var a = Test.name
    var b = "b"
  }
}
Core.expose('home', 'index', Index)
