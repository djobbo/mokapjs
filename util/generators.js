const characters =
	'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const randomNumber = (min, max) => Math.random() * (max - min) + min;

const randomInt = (min, max) => Math.floor(randomNumber(min, max));

const randomString = (length, regex) => {
	const chars = regex ? characters.match(regex).join('') : characters;
	return new Array(length)
		.fill()
		.map(c => chars[Math.floor(Math.random() * chars.length)])
		.join('');
};

const randomArray = (length, fun) => new Array(length).fill().map(fun);

const randomDate = (start, end) =>
	new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	);

const randomBoolean = _ => !!randomInt(0, 2);

const randomValueFromArray = arr => arr[randomInt(0, arr.length)];

module.exports = {
	randomNumber,
	randomInt,
	randomString,
	randomArray,
	randomDate,
	randomBoolean,
	randomValueFromArray
};
