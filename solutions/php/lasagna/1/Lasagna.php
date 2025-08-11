<?php

class Lasagna
{    
    public function expectedCookTime()
    {
        $expectedTimeInOven = 40;
        return $expectedTimeInOven;
    }

    public function remainingCookTime($elapsed_minutes)
    {
        return $this->expectedCookTime() - $elapsed_minutes;
    }

    public function totalPreparationTime($layers_to_prep)
    {
        $prepTimePerLayer = 2;
        return $layers_to_prep * $prepTimePerLayer;
    }

    public function totalElapsedTime($layers_to_prep, $elapsed_minutes)
    {
        return $this->totalPreparationTime($layers_to_prep) + $elapsed_minutes;
    }

    public function alarm()
    {
        return "Ding!";
    }
}
