export function count(phrase: string): Map<string, number> {
	return phrase
		.toLowerCase()
		.split(/[^a-z0-9']+/i)
		.map((word) => word.replace(/^'|'$/g, ""))
		.filter(Boolean)
		.reduce((acc: Map<string, number>, word: string) => {
			acc.set(word, (acc.get(word) || 0) + 1);
			return acc;
		}, new Map());
}
