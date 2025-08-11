export const parse = (phrase: string): string => {
	const words: string[] = phrase.match(/[A-Z]+[a-z]*|[a-z]+/g) || [];
	return words.map((word) => word[0].toUpperCase()).join("");
};
