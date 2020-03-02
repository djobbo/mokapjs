function mockArray(branch) {
    if (Array.isArray(branch.value))
        return branch.value;

    return randomArray(
        (typeof branch.length).toString().includes('object')
            ? randomInt(branch.length.min, branch.length.max)
            : branch.length,
        () => mockBranch(branch.value)
    );
}

module.exports = mockArray;