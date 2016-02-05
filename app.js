console.log("Starting Password Manager");

var storage = require('node-persist');
storage.initSync();


/*storage.setItemSync('accounts', [{
    username: 'Marcus',
    balance: 0
}]);
*/

var accounts = storage.getItemSync('accounts');

console.log(accounts);