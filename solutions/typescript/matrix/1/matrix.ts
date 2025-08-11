export class Matrix {
	public data: number[][];

	constructor(input: string) {
		this.data = input.split(/\r?\n/).map((row) => row.split(" ").map(Number));
	}

	get rows() {
		return this.data;
	}

	get columns() {
		return this.data[0].map((_, colIndex) =>
			this.data.map((row) => row[colIndex]),
		);
	}
}
