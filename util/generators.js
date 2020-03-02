const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

module.exports.randomNumber = (min, max) => Math.random() * (max - min) + min;

module.exports.randomInt = (min, max) => Math.floor(randomNumber(min, max));

module.exports.randomString = (length, regex) => {
	const chars = regex ? characters.match(regex).join('') : characters;
	return new Array(length)
		.fill()
		.map(c => chars[Math.floor(Math.random() * chars.length)])
		.join('');
};

module.exports.randomArray = (length, fun) => new Array(length).fill().map(fun);

module.exports.randomDate = (start, end) =>
	new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );

module.exports.randomValueFromArray = arr => arr[randomInt(0, arr.length)];