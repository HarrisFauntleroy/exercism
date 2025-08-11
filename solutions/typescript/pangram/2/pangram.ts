export function isPangram(sentence: string) {
	return (
		new Set(
			sentence
				.toLowerCase()
				.split("")
				.filter((char: string) => char.match(/[a-z]/i)),
		).size === 26
	);
}
