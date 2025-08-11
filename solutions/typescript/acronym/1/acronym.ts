const PUNCTUATION = /[_\-\p{P}]/gu;
const ACRONYM = /^[A-Z]{2,}$/;
const PASCAL_CASE = /(?=[A-Z])/;

const processWord = (word: string) => {
	if (ACRONYM.test(word)) return word.charAt(0);
	return word
		.split(PASCAL_CASE)
		.map((word) => word[0])
		.join("");
};

export const parse = (phrase: string) => {
	return phrase
		.replace(PUNCTUATION, " ")
		.split(" ")
		.filter(Boolean)
		.flatMap(processWord)
		.join("")
		.toUpperCase();
};
