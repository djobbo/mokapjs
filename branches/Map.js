function mockMap(branch) {
    if (Array.isArray(branch.value))
        return randomValueFromArray(branch.value);

    return Object.entries(branch.value).reduce(
        (acc, [key, value]) => ({ ...acc, [key]: mockBranch(value) }),
        {}
    );
}

module.exports = mockMap;