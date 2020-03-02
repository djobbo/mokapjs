const { randomValueFromArray, randomDate } = require('../util/generators');

function mockDate(value) {
	if (Array.isArray(value)) return () => randomValueFromArray(value);

	return () => randomDate(value.start, value.end);
}

module.exports = mockDate;
