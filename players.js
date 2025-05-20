class Player {
	constructor(firstName, lastName, position, age, photo, hiddenDetail, starPlayer = false) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.position = position;
		this.age = age;
		this.photo = photo;
		this.hiddenDetail = hiddenDetail;
		this.starPlayer = starPlayer;
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

class Team {
	constructor(name, players) {
		this.name = name;
		this.players = players;
	}

	addPlayer(player) {
		this.players.push(player);
	}

	get roster() {
		return this.players;
	}
}

// Player objects.
// Each player has a first name, last name, position, age, photo URL, hidden detail, and a boolean indicating if they are a star player.
// The photo URL is empty for now, need to find appropriate images later.
const playersList = [
	new Player("Michael", "Johnson", "SS", 25,
		"",
		"Led the league in stolen bases last season with 42 steals and maintains a pre-game ritual of eating exactly 3 blueberry muffins.",
		true),

	new Player("Sarah", "Martinez", "P", 30,
		"",
		"Has pitched two no-hitters in her career and can throw a knuckleball with both hands."),

	new Player("Robert", "Thompson", "C", 28,
		"",
		"Gold Glove winner with a cannon for an arm. Once threw out three base stealers in a single inning.",
		true),

	new Player("Emily", "Rodriguez", "1B", 22,
		"",
		"Rookie of the Year candidate with 25 home runs in her first season. She's also a concert pianist in the off-season."),

	new Player("David", "Wilson", "2B", 27,
		"",
		"Known for his incredible double-play turns. He studied ballet for 12 years to improve his footwork around the bag."),

	new Player("Jessica", "Taylor", "3B", 29,
		"",
		"Has the highest fielding percentage at third base in league history and speaks five languages fluently.",
		true),

	new Player("Marcus", "Anderson", "OF", 26,
		"",
		"Known for making spectacular diving catches in center field. Has a degree in astrophysics."),

	new Player("Olivia", "Garcia", "P", 24,
		"",
		"Throws a 98 mph fastball and is also an accomplished oil painter who has exhibited in galleries.")
];

// Create team object
const team = new Team("All-Stars", playersList);

const players = team.roster;
