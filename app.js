console.log("Starting Password Manager");

var storage = require('node-persist');
storage.initSync();

//storage.setItemSync( 'name', 'Marcus');
var name = storage.getItemSync('name');

console.log('Saved name is: ' + name);