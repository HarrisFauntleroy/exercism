export function convert(input: number): string {
	const rules: [number, string][] = [
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
