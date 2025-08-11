int ovenTime() {
    return 40;
}

int remainingOvenTime(int actualMinutesInOven) {
    return ovenTime() - actualMinutesInOven;
}

int preparationTime(int numberOfLayers) {
    int prepTimePerLayer{2};
    return numberOfLayers * prepTimePerLayer;
}

int elapsedTime(int numberOfLayers, int actualMinutesInOven) {
    return preparationTime(numberOfLayers) + actualMinutesInOven;
}
