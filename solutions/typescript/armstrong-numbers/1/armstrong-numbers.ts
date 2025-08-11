function sumBigInts(numbers: bigint[]): bigint {
	return numbers.reduce((sum, num) => sum + num, BigInt(0));
}

const convertBigIntToDigitArray = (number: bigint): bigint[] => {
	return number.toString().split("").map(BigInt);
};

const bigIntExponentiate = (base: bigint, exponent: bigint): bigint => {
	let result = 1n;
	for (let i = 0n; i < exponent; i++) {
		result *= base;
	}
	return result;
};

const raiseDigitsToPowerOfArrayLength = (numbers: bigint[]) => {
	const length = BigInt(numbers.length);
	return numbers.map((n) => bigIntExponentiate(n, length));
};

export const isArmstrongNumber = (num: number): boolean => {
	const numberAsBigInt = BigInt(num);
	const digitArray = convertBigIntToDigitArray(numberAsBigInt);
	const poweredDigits = raiseDigitsToPowerOfArrayLength(digitArray);
	const sumOfPoweredDigits = sumBigInts(poweredDigits);

	return sumOfPoweredDigits === numberAsBigInt;
};
