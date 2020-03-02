function mockString(branch) {
    if (Array.isArray(branch.value))
        return randomValueFromArray(branch.value);
    return randomString(
        randomInt(
            branch.value.minLength || branch.value.length || 3,
            branch.value.maxLength || branch.value.length || 32
        ),
        branch.value.regex || null
    );
}

module.exports = mockString;