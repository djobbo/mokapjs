const Hobby = {
	type: Map,
	value: {
		name: {
			type: String,
			value: { minLength: 6, maxLength: 16, regex: /[a-z]/g }
		},
		years: { type: Number, value: { min: 0, max: 50 } }
	}
};

const User = {
	type: Map,
	value: {
		id: { type: String, value: { length: 16 } },
		name: {
			type: Map,
			value: {
				firstnames: {
					type: Array,
					length: 3,
					value: {
						type: String,
						value: { minLength: 3, maxLength: 12, regex: /[a-z]/g }
					}
				},
				lastname: {
					type: String,
					value: { minLength: 8, maxLength: 20, regex: /[A-Z]/g }
				}
			}
		},
		birthdate: {
			type: Date,
			value: { start: new Date(1900, 0, 1), end: new Date(2020, 0, 1) }
		},
		username: {
			type: String,
			value: { minLength: 8, maxLength: 24, regex: /[a-z0-9]/g }
		},
		points: { type: Number, value: { min: 0, max: 100 } },
        hobbies: { type: Array, length: { min: 0, max: 3 }, value: Hobby }
	}
};

module.exports = User;
