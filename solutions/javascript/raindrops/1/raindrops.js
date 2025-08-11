export function convert(input) {
	const rules = [
		[3, "Pling"],
		[5, "Plang"],
		[7, "Plong"],
	];

	const output = rules
		.filter(([divisor]) => input % divisor === 0)
		.map(([, sound]) => sound)
		.join("");

	return output || String(input);
}
