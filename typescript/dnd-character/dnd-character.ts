export class DnDCharacter {
	public strength: number;
	public dexterity: number;
	public constitution: number;
	public intelligence: number;
	public wisdom: number;
	public charisma: number;
	public hitpoints: number;

	constructor() {
		this.strength = DnDCharacter.generateAbilityScore();
		this.dexterity = DnDCharacter.generateAbilityScore();
		this.constitution = DnDCharacter.generateAbilityScore();
		this.intelligence = DnDCharacter.generateAbilityScore();
		this.wisdom = DnDCharacter.generateAbilityScore();
		this.charisma = DnDCharacter.generateAbilityScore();
		this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
	}

	public static generateAbilityScore(): number {
		const rolls = this.rollDice(4);
		const highestThree = this.removeLowestRoll(rolls);
		return this.sum(highestThree);
	}

	public static getModifierFor(abilityValue: number): number {
		return Math.floor((abilityValue - 10) / 2);
	}

	private static rollDice = (iterations: number): number[] => {
		return Array.from({ length: iterations }, () => Math.floor(Math.random() * 6) + 1);
	};

  	private static removeLowestRoll = (array: number[]): number[] => {
		return array.sort((a, b) => a - b).slice(1);
	};

  	private static sum = (array: number[]): number => {
		return array.reduce((partialSum, a) => partialSum + a, 0);
	};
}
