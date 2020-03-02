const { randomValueFromArray, randomDate } = require('../util/generators');

function mockDate(branch) {
    if (Array.isArray(branch.value))
        return randomValueFromArray(branch.value);

	return randomDate(branch.value.start, branch.value.end);
}

module.exports = mockDate;