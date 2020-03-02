const { arr, bool, date, map, num, str } = require('./main');

const User = arr([
	arr(bool(), 2),
	num({ min: 1, max: 12 }),
	date({
		start: new Date(1999, 11, 3),
		end: new Date()
	}),
	arr(num({ min: -10, max: 10 }), 3),
	arr(str(['a', 'b', 'c']), 3),
	arr(str({ length: 10, filter: /[A-Z]/g }), 2),
	{
		test: num()
	}
]);

const mapTest = map({
	user: User,
	hello: str(['hi', 'hello', 'sup'])
});

console.log(mapTest());
