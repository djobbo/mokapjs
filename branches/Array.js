const { randomArray, randomInt } = require('../util/generators');

function mockArray(value, length = 0) {
    if (Array.isArray(value))
        return () => value.map(x => (typeof x).toString() === 'function' ? x() : x);

    return () => randomArray(
        (typeof length).toString().includes('object')
            ? randomInt(length.min, length.max)
            : length,
        value
    );
}

module.exports = mockArray;