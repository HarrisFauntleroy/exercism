export function toRoman(num: number): string {
	const romanMap = [
		[1000, "M"],
		[900, "CM"],
		[500, "D"],
		[400, "CD"],
		[100, "C"],
		[90, "XC"],
		[50, "L"],
		[40, "XL"],
		[10, "X"],
		[9, "IX"],
		[5, "V"],
		[4, "IV"],
		[1, "I"],
	] as const;

	let result = "";
	let remaining = num;

	for (const [value, symbol] of romanMap) {
		while (remaining >= value) {
			result += symbol;
			remaining -= value;
		}
	}

	return result;
}
