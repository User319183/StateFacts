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

// Baseball player objects
// Each player has a first name, last name, position, age, photo URL, hidden detail, and a boolean indicating if they are a star player.
const playersList = [
	new Player("Mike", "Trout", "CF", 33,
		"",
		"Has won three American League MVP awards and is considered one of the greatest players of his generation.",
		true),

	new Player("Max", "Scherzer", "P", 40,
		"",
		"Has pitched two no-hitters in his career and is known for having heterochromia (different colored eyes).",
		true),

	new Player("Buster", "Posey", "C", 38,
		"",
		"Gold Glove winner with a cannon for an arm. Led his team to three World Series championships.",
		true),

	new Player("Pete", "Alonso", "1B", 30,
		"",
		"Rookie home run record holder and has won multiple Home Run Derby competitions."),

	new Player("Jose", "Altuve", "2B", 35,
		"",
		"Despite being one of the shortest players in MLB at 5'6\", has won multiple batting titles and an MVP award."),

	new Player("Nolan", "Arenado", "3B", 34,
		"",
		"Has won multiple Gold Glove awards and is known for making spectacular defensive plays at third base.",
		true),

	new Player("Francisco", "Lindor", "SS", 31,
		"",
		"Known as 'Mr. Smile' for his infectious enthusiasm, and is a four-time All-Star shortstop."),

	new Player("Juan", "Soto", "RF", 26,
		"",
		"One of the youngest players to win a batting title and known for his 'Soto Shuffle' in the batter's box.",
		true)
];

// Create team object
const team = new Team("All-Stars", playersList);

const players = team.roster;
