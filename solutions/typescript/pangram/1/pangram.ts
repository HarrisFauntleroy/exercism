export function isPangram(sentence: string) {
	return new Set(
		sentence
			.toLowerCase()
			.replace(/[^\p{L}\s]/gu, "")
			.split("")
			.filter((word) => word.trim().length > 0),
	).size === 26;
}
