class Player {
	// Represents a baseball player with attributes and methods
	constructor(firstName, lastName, position, age, photo, hiddenDetail, starPlayer = false) {
		// Player's first name
		this.firstName = firstName;
		// Player's last name
		this.lastName = lastName;
		// Player's position
		this.position = position;
		// Player's age
		this.age = age;
		// URL to player's photo
		this.photo = photo;
		// Hidden detail about the player
		this.hiddenDetail = hiddenDetail;
		// Boolean indicating if player is a star
		this.starPlayer = starPlayer;
	}

	// Getter for player's full name
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

class Team {
	constructor(name, players) {
		// Team name
		this.name = name;
		// Array of Player objects
		this.players = players;
	}

	// Method to add a player to the team
	addPlayer(player) {
		this.players.push(player);
	}

	// Getter for team roster
	get roster() {
		return this.players;
	}
}

// Baseball player objects
// Each player has a first name, last name, position, age, photo URL, hidden detail, and a boolean indicating if they are a star player.
const playersList = [
	// Player: Mike Trout
	new Player("Mike", "Trout", "CF", 33,
		"https://th.bing.com/th/id/OIP.8Y_pbkZAAuoMsvq_VWC0CwHaE8?w=276&h=184&c=7&r=0&o=5&dpr=2&pid=1.7",
		"Has won three American League MVP awards and is considered one of the greatest players of his generation.",
		true),

	// Player: Max Scherzer
	new Player("Max", "Scherzer", "P", 40,
		"https://th.bing.com/th/id/OIP.T0QusnJ4X67yvu66yM4ptgHaE8?w=252&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
		"Has pitched two no-hitters in his career and is known for having heterochromia (different colored eyes).",
		true),

	// Player: Buster Posey
	new Player("Buster", "Posey", "C", 38,
		"https://th.bing.com/th/id/OIP.vnhQ7zHFfM-eAB4TMe-H0gHaLO?w=130&h=196&c=7&r=0&o=5&dpr=2&pid=1.7",
		"Gold Glove winner with a cannon for an arm. Led his team to three World Series championships.",
		true),

	// Player: Pete Alonso
	new Player("Pete", "Alonso", "1B", 30,
		"https://th.bing.com/th/id/OIP.x0hW8425iCef07IDjz6tpAHaE7?w=280&h=187&c=7&r=0&o=5&dpr=2&pid=1.7",
		"Rookie home run record holder and has won multiple Home Run Derby competitions."),

	// Player: Jose Altuve
	new Player("Jose", "Altuve", "2B", 35,
		"https://th.bing.com/th/id/OIP.jvQjxtf-vpbxaLi7r1hyxQHaE7?w=279&h=186&c=7&r=0&o=5&dpr=2&pid=1.7",
		"Despite being one of the shortest players in MLB at 5'6\", has won multiple batting titles and an MVP award."),

	// Player: Nolan Arenado
	new Player("Nolan", "Arenado", "3B", 34,
		"https://th.bing.com/th/id/OIP.leXlVo6L-kS_UJk0RVx9VAHaEK?w=309&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
		"Has won multiple Gold Glove awards and is known for making spectacular defensive plays at third base.",
		true),

	// Player: Francisco Lindor
	new Player("Francisco", "Lindor", "SS", 31,
		"https://th.bing.com/th/id/OIP.jwgatluhNzK8lmVNDNtH3wHaE7?w=284&h=189&c=7&r=0&o=5&dpr=2&pid=1.7",
		"Known as 'Mr. Smile' for his infectious enthusiasm, and is a four-time All-Star shortstop."),

	// Player: Juan Soto
	new Player("Juan", "Soto", "RF", 26,
		"https://th.bing.com/th/id/OIP.hO6xmyZ19wkBXlDIWVcgBQHaE4?w=261&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
		"One of the youngest players to win a batting title and known for his 'Soto Shuffle' in the batter's box.",
		true)
];

// Create team object
const team = new Team("All-Stars", playersList);

// Export the players for use in other scripts
const players = team.roster;
// Make players available globally
window.players = players;
