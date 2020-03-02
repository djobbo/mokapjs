const playerSchema = require('./user.mock');

const characters =
	'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const randomNumber = (min, max) => Math.random() * (max - min + 1) + min;
const randomInt = (min, max) => Math.floor(randomNumber(min, max));
const randomString = (length, regex) => {
	const chars = regex ? characters.match(regex).join('') : characters;
	return new Array(length)
		.fill()
		.map(c => chars[Math.floor(Math.random() * chars.length)])
		.join('');
};
const randomArray = (length, fun) => new Array(length).fill().map(fun);
const randomDate = (start, end) =>
	new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	);

const MockBranch = branch => {
	if ((typeof branch).toString() !== 'object') return branch;

	if ((typeof branch.type).toString() !== 'function') return undefined;

	const branchType = branch.type.toString();

	if (branchType.includes('Number'))
		return (typeof branch.value).toString().includes('object')
			? randomInt(branch.value.min, branch.value.max)
			: branch.value;

	if (branchType.includes('String'))
		return randomString(
			randomInt(
				branch.value.minLength || branch.value.length || 3,
				branch.value.maxLength || branch.value.length || 32
			),
			branch.value.regex || null
		);

	if (branchType.includes('Array'))
		return randomArray(
			(typeof branch.length).toString().includes('object')
				? randomInt(branch.length.min, branch.length.max)
				: branch.length,
			() => MockBranch(branch.value)
		);

	if (branchType.includes('Map'))
		return Object.entries(branch.value).reduce(
			(acc, [key, value]) => ({ ...acc, [key]: MockBranch(value) }),
			{}
		);

	if (branchType.includes('Date'))
		return randomDate(branch.value.start, branch.value.end);

	return {};
};

const MockTree = schema => MockBranch(schema);

const mock = MockTree(playerSchema);
console.log(mock);
