const { arr, bool, date, map, num, str } = require('./main');

const UserNameGen = str(
	/([A-Z]{2,3} \| ){0,1}[A-Z][a-z][aeiou]([bcdfghjklmnpqrstvwxys]{0,1}[aeiou]{0,2}){2,5}([0-9]{0,4})/
);

const CharNameGen = str(
	/[A-Z][a-z][aeiou]([bcdfghjklmnpqrstvwxys]{0,1}[aeiou]{0,2}){2,5}/
);

const ClanNameGen = str(
	/[A-Z][a-z][aeiou]([bcdfghjklmnpqrstvwxys]{0,1}[aeiou]{0,2}){3,6}/
);

const CharacterGen = map({
	id: num({ min: 1, max: 50 }),
	name: CharNameGen,
	matchtime: num({ min: 0, max: 9999999 }),
	games: num({ min: 0, max: 999999 }),
	wins: num({ min: 0, max: 999999 }),
	xp: num({ min: 0, max: 9999999 }),
	level: num({ min: 1, max: 101 })
});

const ClanGen = map({
	clan_name: ClanNameGen,
	id: num({ min: 1, max: 99999 }),
	xp: num({ min: 9999, max: 9999999 }),
	personal_xp: num({ min: 0, max: 9999 })
});

const UserGen = map({
	id: num({ min: 1, max: 999999 }),
	name: UserNameGen,
	xp: num({ min: 0, max: 9999999 }),
	level: num({ min: 1, max: 101 }),
	games: num({ min: 0, max: 999999 }),
	wins: num({ min: 0, max: 999999 }),
	characters: arr(CharacterGen, 2),
	clan: ClanGen
});

console.log(UserGen());
