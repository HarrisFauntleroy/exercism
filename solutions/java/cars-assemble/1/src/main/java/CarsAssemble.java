public class CarsAssemble {
    int baseProductionRate = 221;

    public double productionRatePerHour(int speed) {
        int output = speed * baseProductionRate;
        if (speed <= 4) {
            return output; // (100% success rate)
        } else if (speed >= 5 && speed <= 8) {
            return output * (1 - 0.10); // Minus 10% (90% success rate)
        } else if (speed == 9) {
            return output * (1 - 0.20); // Minus 20% (80% success rate)
        } else {
            return output * (1 - 0.23); // Minus 23% (77% success rate)
        }
    }

    public int workingItemsPerMinute(int speed) {
        int rate = (int) productionRatePerHour(speed) / 60;
        return rate;
    }
}
