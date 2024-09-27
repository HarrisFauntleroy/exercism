export class Gigasecond {
	initialDate: Date;

	constructor(date: Date) {
		this.initialDate = new Date(date);
	}

	public date() {
		const oneGigaSecondInMilliseconds = 10 ** 9 * 1000;
		const newDate = new Date(
			this.initialDate.getTime() + oneGigaSecondInMilliseconds,
		);
		return newDate;
	}
}
