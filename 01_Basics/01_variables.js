const accountId = 123345
let accountEmail = "Neyaz@gmail.com"
var accountPassword ="1234567"
accountCity = "jaipur"
let accountState;

// accountId = 2 not allowed
accountCity = "lucknow"
accountPassword = "123"
accountEmail = "khan@gmaol.com"
// accountId = 1233
console.log(accountId);

/*
prefer not to use Var
because of issue in 
block scope and function 
scope
  */

console.table([accountEmail,accountPassword,accountId,accountCity,accountState])