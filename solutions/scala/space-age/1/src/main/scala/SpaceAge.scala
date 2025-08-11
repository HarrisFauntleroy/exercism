object SpaceAge {
  private val EarthYearInSeconds = 31557600.0
  
  private val OrbitalPeriods = Map(
    "Earth" -> 1.0,
    "Venus" -> 0.61519726,
    "Mercury" -> 0.2408467,
    "Mars" -> 1.8808158,
    "Jupiter" -> 11.862615,
    "Saturn" -> 29.447498,
    "Uranus" -> 84.016846,
    "Neptune" -> 164.79132
  )

  def on(planet: String)(age: Double): Double = {
    val orbitalPeriod = OrbitalPeriods.getOrElse(planet, throw new IllegalArgumentException(s"Unknown planet: $planet"))
    (age / EarthYearInSeconds) / orbitalPeriod
  }

  def onEarth(age: Double): Double = on("Earth")(age)
  def onVenus(age: Double): Double = on("Venus")(age)
  def onMercury(age: Double): Double = on("Mercury")(age)
  def onMars(age: Double): Double = on("Mars")(age)
  def onJupiter(age: Double): Double = on("Jupiter")(age)
  def onSaturn(age: Double): Double = on("Saturn")(age)
  def onUranus(age: Double): Double = on("Uranus")(age)
  def onNeptune(age: Double): Double = on("Neptune")(age)
}