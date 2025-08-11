const planets = {
	MERCURY: "mercury",
	VENUS: "venus",
	EARTH: "earth",
	MARS: "mars",
	JUPITER: "jupiter",
	SATURN: "saturn",
	URANUS: "uranus",
	NEPTUNE: "neptune",
}

const EARTH_YEAR_IN_SECONDS = 31557600;

const orbitalPeriods = {
	[planets.MERCURY]: 0.2408467,
	[planets.VENUS]: 0.61519726,
	[planets.EARTH]: 1,
	[planets.MARS]: 1.8808158,
	[planets.JUPITER]: 11.862615,
	[planets.SATURN]: 29.447498,
	[planets.URANUS]: 84.016846,
	[planets.NEPTUNE]: 164.79132,
};

export function age(planet, seconds) {
	const earthYears = seconds / EARTH_YEAR_IN_SECONDS;
	const planetYears = earthYears / orbitalPeriods[planet];
	return Number(planetYears.toFixed(2));
}