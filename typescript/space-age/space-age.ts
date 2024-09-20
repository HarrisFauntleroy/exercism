enum Planet {
	MERCURY = "mercury",
	VENUS = "venus",
	EARTH = "earth",
	MARS = "mars",
	JUPITER = "jupiter",
	SATURN = "saturn",
	URANUS = "uranus",
	NEPTUNE = "neptune",
}

const EARTH_YEAR_IN_SECONDS = 31557600;

const orbitalPeriods: Record<Planet, number> = {
	[Planet.MERCURY]: 0.2408467,
	[Planet.VENUS]: 0.61519726,
	[Planet.EARTH]: 1,
	[Planet.MARS]: 1.8808158,
	[Planet.JUPITER]: 11.862615,
	[Planet.SATURN]: 29.447498,
	[Planet.URANUS]: 84.016846,
	[Planet.NEPTUNE]: 164.79132,
};

export function age(planet: Planet, seconds: number): number {
	const earthYears = seconds / EARTH_YEAR_IN_SECONDS;
	const planetYears = earthYears / orbitalPeriods[planet];
	return Number(planetYears.toFixed(2));
}
