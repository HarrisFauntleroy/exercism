class Lasagna
{
    public int ExpectedMinutesInOven()
    {
        return 40;
    }

    public int RemainingMinutesInOven(int elapsedTime)
    {
        return ExpectedMinutesInOven() - elapsedTime;
    }
    
    public int PreparationTimeInMinutes(int layers)
    {
        int prepTimePerLayer = 2;
        return layers * prepTimePerLayer;
    }
    
    public int ElapsedTimeInMinutes(int layers, int elapsedTime)
    {
        return PreparationTimeInMinutes(layers) + elapsedTime;
    }
}
