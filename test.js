const { arr, bool, date, map, num, str } = require('./main');

const emailGen = str(
	/[A-Z][a-z][aeiou]([bcdfghjklmnpqrstvwxys]{0,1}[aeiou]{0,2}){2,5}([0-9]{0,4})@(gmail|yahoo|outlook)\.com/
);
const usernameGen = str(
	/[A-Z][a-z][aeiou]([bcdfghjklmnpqrstvwxys]{0,1}[aeiou]{0,2}){2,5}([0-9]{0,4})/
);

console.log(arr(map({ username: usernameGen, email: emailGen }), 20)());
