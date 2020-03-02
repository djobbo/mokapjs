const playerSchema = require('./user.mock');

const mockBranch = require('./util/mockBranch');

module.exports = schema => mockBranch(schema);