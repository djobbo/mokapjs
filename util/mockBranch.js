module.exports = mockBranch;

const mockNumber = require('../branches/Number');
const mockString = require('../branches/String');
const mockArray = require('../branches/Array');
const mockMap = require('../branches/Map');
const mockDate = require('../branches/Date');
const mockBoolean = require('../branches/Boolean');


function mockBranch(branch) {
    if ((typeof branch).toString() !== 'object')
        return branch;

    if ((typeof branch.type).toString() !== 'function')
        return undefined;

    const branchType = branch.type.toString().split(' ')[1];

    switch(branchType) {
        case 'Number()':
            return mockNumber(branch);
        case 'String()':
            return mockString(branch);
        case 'Array()':
            return mockArray(branch);
        case 'Map()':
            return mockMap(branch);
        case 'Date()':
            return mockDate(branch);
        case 'Boolean()':
            return mockBoolean(branch);
        default:
            break;
    }

	return {};
};
