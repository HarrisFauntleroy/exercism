const actions = ["wink", "double blink", "close your eyes", "jump"];

export function commands(input: number): string[] {
	const binary = (input >>> 0).toString(2).padStart(5, "0");
	const result = [...binary]
		.reverse()
		.reduce(
			(acc, bit, i) => (bit === "1" ? [...acc, actions[i] || "reverse"] : acc),
			[] as string[],
		);

	return input & 16
		? result.filter((x) => x !== "reverse").reverse()
		: result.filter((x) => x !== "reverse");
}
