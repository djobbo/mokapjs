const {
	randomValueFromArray,
	randomString,
	randomInt
} = require('../util/generators');

function mockMap(value) {
	if (Array.isArray(value)) return () => randomValueFromArray(value);

	return () =>
		Object.entries(value).reduce(
			(acc, [key, val]) => ({
				...acc,
				[key]: (typeof val).toString() === 'function' ? val() : val
			}),
			{}
		);
}

module.exports = mockMap;
