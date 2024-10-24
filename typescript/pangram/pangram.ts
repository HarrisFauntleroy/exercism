export const isPangram = (sentence: string) =>
	new Set(
		sentence
			.toLowerCase()
			.split("")
			.filter((char: string) => char.match(/[a-z]/i)),
	).size === 26;
