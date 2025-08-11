// Updates Map with incremented count for a word
function countWords(
	counts: Map<string, number>,
	word: string,
): Map<string, number> {
	return counts.set(word, (counts.get(word) || 0) + 1);
}

export const count = (phrase: string): Map<string, number> => {
	return phrase
		.toLowerCase() // Normalize case
		.match(/\b[\w']+\b/g)! // Match words with apostrophes
		.reduce(countWords, new Map()); // Count word occurrences
};
