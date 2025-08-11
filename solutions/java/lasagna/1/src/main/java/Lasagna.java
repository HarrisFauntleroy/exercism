public class Lasagna {
    private static final int PREPARATION_MINUTES_PER_LAYER = 2;
    private static final int EXPECTED_TIME_IN_OVEN = 40;
    
    public static int expectedMinutesInOven() {
        return EXPECTED_TIME_IN_OVEN;
    }

    public static int remainingMinutesInOven(int actualMinutesInOven) {
        return expectedMinutesInOven() - actualMinutesInOven;
    }

    public static int preparationTimeInMinutes(int numberOfLayers) {
        return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
    }

    public static int totalTimeInMinutes(int numberOfLayers, int actualMinutesInOven) {
        return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
    }
}
