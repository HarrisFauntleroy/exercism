import java.util.Arrays;

class BirdWatcher {
    private final int[] birdsPerDay;

    public BirdWatcher(int[] birdsPerDay) {
        this.birdsPerDay = birdsPerDay.clone();
    }

    public int[] getLastWeek() {
        int[] birdsByDay = { 0, 2, 5, 3, 7, 8, 4 };
        return birdsByDay;
    }

    public int getToday() {
        return this.birdsPerDay[this.birdsPerDay.length - 1];
    }

    public void incrementTodaysCount() {
        int todaysBirds = getToday();
        this.birdsPerDay[this.birdsPerDay.length - 1] = getToday() + 1;
    }

    public boolean hasDayWithoutBirds() {
        return Arrays.stream(this.birdsPerDay).anyMatch(birdsForDay -> birdsForDay == 0);
    }

    public int getCountForFirstDays(int numberOfDays) {
        return Arrays.stream(this.birdsPerDay).limit(numberOfDays).sum();
    }

    public int getBusyDays() {
        return Arrays.stream(this.birdsPerDay).filter(birdsForDay -> birdsForDay >= 5).toArray().length;
    }
}
