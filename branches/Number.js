const { randomValueFromArray, randomInt } = require('../util/generators');

function mockNumber(value) {
    if ((typeof value).toString() === "number")
        return value;
        
    if (Array.isArray(value))
        return () => randomValueFromArray(value);

    return () => (typeof value).toString().includes('object')
        ? randomInt(value.min, value.max)
        : value;
}

module.exports = mockNumber;