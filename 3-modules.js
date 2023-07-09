//CommonJS every file is module by default
//Modules - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-util');
const data = require('./6-alt-flav')
require('./7-mind-grenade')

//console.log(data)

sayHi('Vikesh');
sayHi(names.john)
sayHi(names.peter)