let expectedMinutesInOven = 40
let preperationTimePerLayer = 2

func remainingMinutesInOven(elapsedMinutes: Int) -> Int {
  return expectedMinutesInOven - elapsedMinutes;
}

func preparationTimeInMinutes(layers: Int) -> Int {
  return layers * preperationTimePerLayer;
}

func totalTimeInMinutes(layers: Int, elapsedMinutes: Int) -> Int {
  return preparationTimeInMinutes(layers: layers) + elapsedMinutes;
}
