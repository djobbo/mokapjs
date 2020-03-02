const { randomValueFromArray, randomInt } = require('../util/generators');

function mockNumber(branch) {
    if (Array.isArray(branch.value))
        return randomValueFromArray(branch.value);

    return (typeof branch.value).toString().includes('object')
        ? randomInt(branch.value.min, branch.value.max)
        : branch.value;
}

module.exports = mockNumber;