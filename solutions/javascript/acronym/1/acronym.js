export const parse = (phrase) => {
	const words = phrase.match(/[A-Za-z]+(?:'\w+)?/g) || [];
	return words.map((word) => word[0].toUpperCase()).join("");
};
