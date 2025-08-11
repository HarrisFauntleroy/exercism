const isQuestion = (message: string) => message.trim().endsWith("?");
const containsLetters = (message: string) => /[A-Za-z]/.test(message);
const isShouting = (message: string) =>
	message === message.toUpperCase() && containsLetters(message);
const isSilence = (message: string) => /^\s*$/.test(message);

export function hey(message: string): string {
	const question = isQuestion(message);
	const shouting = isShouting(message);
  
	if (shouting && question) return "Calm down, I know what I'm doing!";
	if (isSilence(message)) return "Fine. Be that way!";
	if (shouting) return "Whoa, chill out!";
	if (question) return "Sure.";
	return "Whatever.";
}
