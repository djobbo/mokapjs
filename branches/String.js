const RandExp = require('randexp');

const {
	randomValueFromArray,
	randomString,
	randomInt
} = require('../util/generators');

function mockString(value) {
	if ((typeof value).toString() === 'string') return value;

	if (Array.isArray(value)) return () => randomValueFromArray(value);

	return () =>
		value instanceof RegExp
			? new RandExp(value).gen()
			: randomString(
					randomInt(
						value.minLength || value.length || 3,
						(value.maxLength || value.length || 32) + 1
					),
					value.filter || null
			  );
}

module.exports = mockString;
