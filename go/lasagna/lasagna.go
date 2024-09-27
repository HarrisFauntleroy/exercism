package lasagna

var OvenTime int = 40
var PreparationMinutesPerLayer int = 2

func RemainingOvenTime(actualMinutesInOven int) int {
	return OvenTime - actualMinutesInOven
}

func PreparationTime(numberOfLayers int) int {
	return numberOfLayers * PreparationMinutesPerLayer
}

func ElapsedTime(numberOfLayers, actualMinutesInOven int) int {
	return PreparationTime(numberOfLayers) + actualMinutesInOven
}
