export class Anagram {
	private input: string;
	private sortedInput: string;

	constructor(input: string) {
		this.input = input.toLowerCase();
		this.sortedInput = this.sortChars(this.input);
	}

	private sortChars(chars: string): string {
		return chars.split("").sort().join("");
	}

	private isAnagram(potentialChars: string): boolean {
		const sortedPotential = this.sortChars(potentialChars.toLowerCase());
		return (
			sortedPotential === this.sortedInput &&
			potentialChars.toLowerCase() !== this.input.toLowerCase()
		);
	}

	public matches(...potentials: unknown[]): string[] {
		return potentials.filter((potential) => {
			return typeof potential === "string" && this.isAnagram(potential);
		}) as string[];
	}
}
