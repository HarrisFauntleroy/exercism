module LuciansLusciousLasagna

let expectedMinutesInOven: int = 40
let preparationMinutesPerLayer: int = 2

let remainingMinutesInOven (actualMinutesInOven: int): int = expectedMinutesInOven - actualMinutesInOven

let preparationTimeInMinutes (numberOfLayers: int): int = numberOfLayers * preparationMinutesPerLayer

let elapsedTimeInMinutes (numberOfLayers: int) (actualMinutesInOven: int): int = preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven