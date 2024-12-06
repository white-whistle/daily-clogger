import { POST_DATES } from "../consts";

export type Post = {
	id: number;
	title: string;
	body: string;
	rating: number;
	date: Date;
}

// A factory class for seeded random number generation
class SeededRandom {
	seed: number;
	counter: number;

	constructor(seed: number) {
		this.seed = seed;
		this.counter = 0;
	}

	next() {
		this.counter++;
		const x = Math.sin((this.seed + this.counter) * 12345.6789) * 10000 + Math.cos((this.seed + this.counter) * 98765.4321) * 1000;
		return x - Math.floor(x);
	}
}

// Generate a BlogPost object given an id
export function getPost(id: number): Post {
	// Create a new seeded random generator instance
	const randomGenerator = new SeededRandom(id * 1103515245 + 12345);

	// Generate title
	const adjectives = ["Amazing", "Exciting", "Intriguing", "Mysterious", "Wonderful", "Thrilling", "Enchanting", "Elegant", "Sophisticated", "Pristine", "Bold", "Clever", "Dazzling", "Innovative", "Pioneering", "Clogged", "Overflowing", "Blocked", "Fresh", "Odorous"];
	const nouns = ["Adventure", "Discovery", "Journey", "Tale", "Experience", "Saga", "Chronicle", "Debacle", "Clog", "Solution", "Breakthrough", "Challenge", "Conundrum", "Technique", "Mystery", "Toilet", "Bathroom", "Plumbing", "Backup", "Overflow"];
	const title = `${adjectives[Math.floor(randomGenerator.next() * adjectives.length)]} ${nouns[Math.floor(randomGenerator.next() * nouns.length)]}`;

	// Generate body using templates
	const templates = [
		"Today, we explore the delicate balance between {adjective1} toilet design and the challenges of {noun1}. The pressure to maintain {adjective2} cleanliness is ever-present.",
		"Nothing compares to the {adjective1} feeling of a properly functioning toilet. However, when {noun1} strikes, it can disrupt the harmony of {noun2}.",
		"Have you ever considered the role of {adjective1} toilet paper and {noun1} water pressure in preventing clogs? Let's dive into the {adjective2} details.",
		"The elegance of {adjective1} bathroom design often conceals the complexities of {noun1}. Maintaining {adjective2} hygiene is an art form.",
		"In the world of plumbing, {noun1} is both a challenge and an opportunity. With {adjective1} tools and {adjective2} techniques, solutions are always within reach.",
		"The artistry of {adjective1} clogs can only be appreciated by true clogging enthusiasts. It's a {adjective2} marvel to behold.",
		"When facing {noun1}, always ensure you have {adjective1} resources at hand. This makes the experience both {adjective2} and efficient.",
		"A clogged toilet is a rite of passage for any {adjective1} clogger. It tests both your patience and your {adjective2} resolve.",
		"The {adjective1} flow of water can turn into chaos when {noun1} arises, but with {adjective2} preparation, order is restored.",
		"Cloggers around the world admire the {adjective1} finesse required to tackle {noun1} and bring {adjective2} relief to bathroom users everywhere."
	];

	const wordBank = {
		adjectives: ["elegant", "pristine", "powerful", "clean", "sophisticated", "delicate", "robust", "innovative", "refreshing", "essential", "vital", "efficient", "bold", "intrepid", "resilient", "clogged", "overflowing", "odorous", "sanitary", "compact"],
		nouns: ["clogs", "plumbing", "toilet paper", "water pressure", "design", "sanitation", "resources", "maintenance", "aromas", "flow", "technique", "strategy", "backup", "solution", "artistry", "toilet", "bathroom", "blockages", "pipes", "flush"]
	};

	const template = templates[Math.floor(randomGenerator.next() * templates.length)];
	let body = template
		.replace(/{adjective1}/g, wordBank.adjectives[Math.floor(randomGenerator.next() * wordBank.adjectives.length)])
		.replace(/{adjective2}/g, wordBank.adjectives[Math.floor(randomGenerator.next() * wordBank.adjectives.length)])
		.replace(/{noun1}/g, wordBank.nouns[Math.floor(randomGenerator.next() * wordBank.nouns.length)])
		.replace(/{noun2}/g, wordBank.nouns[Math.floor(randomGenerator.next() * wordBank.nouns.length)]);

	// Add clogger jargon conditionally
	if (randomGenerator.next() > 0.5) {
		body += " I would definitely add this to my clogging rotation. It has that perfect balance of pressure and elegance.";
	} else {
		body += " A true clogger knows the value of {adjective1} preparation and {adjective2} execution."
			.replace(/{adjective1}/g, wordBank.adjectives[Math.floor(randomGenerator.next() * wordBank.adjectives.length)])
			.replace(/{adjective2}/g, wordBank.adjectives[Math.floor(randomGenerator.next() * wordBank.adjectives.length)]);
	}

	// Generate rating
	const rating = Math.round(randomGenerator.next() * 50) / 10; // Rating between 0.0 and 5.0

	return {
		id,
		title,
		body,
		rating,
		date: POST_DATES[id],
	};
}