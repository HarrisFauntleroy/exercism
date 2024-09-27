const sumDigitPowers = (
	acc: bigint,
	cur: bigint,
	_idx: number,
	array: bigint[],
): bigint => {
	return acc + cur ** BigInt(array.length);
};

const calculateArmstrongSum = (number: number): bigint => {
	return number
		.toString()
		.split("")
		.map(BigInt)
		.reduce(sumDigitPowers, BigInt(0));
};

export const isArmstrongNumber = (number: number): boolean => {
	return calculateArmstrongSum(number) === BigInt(number);
};
