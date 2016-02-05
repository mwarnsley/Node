console.log("Starting Password Manager");

var storage = require('node-persist');
storage.initSync();


//creating the user account
function createAccount(account){
    var accounts = storage.getItemSync('accounts');

    if(typeof accounts === 'undefined'){
        accounts = [];
    }

    accounts.push(account);
    storage.setItemSync('accounts', accounts);

    return account;
}

//getting the user account
function getAccount(accountName){
    var accounts = storage.getItemSync('accounts');
    var matchingAccounts;

    accounts.forEach(function(account){
        if(account.name === accountName){
            matchingAccounts = account;
        }
    });

    return matchingAccounts;
}

/*createAccount({
    name: 'Facebook',
    username: 'something@gmail.com',
    password: 'Password123!'
});
*/

var facebookAccount = getAccount('Facebook');

console.log(facebookAccount);



