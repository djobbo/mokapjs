const { randomBoolean } = require('../util/generators');

function mockBoolean() {
    return randomBoolean;
}

module.exports = mockBoolean;