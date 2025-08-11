export class GradeSchool {
	private students: Record<number, string[]> = {};

	roster(): Record<number, string[]> {
		return JSON.parse(JSON.stringify(this.students));
	}

	add(name: string, grade: number) {
		this.removeFromAllGrades(name);

		if (!this.students[grade]) {
			this.students[grade] = [];
		}
		this.students[grade].push(name);
		this.students[grade].sort();

		return this.students;
	}

	grade(grade: number): string[] {
		return (this.roster()[grade] || []).sort();
	}

	private removeFromAllGrades(name: string): void {
		for (const grade in this.students) {
			this.students[grade] = this.students[grade].filter(
				(student) => student !== name,
			);
			if (this.students[grade].length === 0) {
				delete this.students[grade];
			}
		}
	}
}
