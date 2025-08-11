<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        return trim($name)[0];
    }

    public function initial(string $name): string
    {
        $firstLetter = strtoupper($this->firstLetter($name));
        return "$firstLetter.";
    }

    public function initials(string $name): string
    {
        $names = explode(" ", $name);
        $firstName = $this->initial($names[0]);
        $lastName = $this->initial($names[1]);
        return "$firstName $lastName";
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        $usr1 = $this->initials($sweetheart_a);
        $usr2 = $this->initials($sweetheart_b);
        
        $heart = <<<EOT
             ******       ******
           **      **   **      **
         **         ** **         **
        **            *            **
        **                         **
        **     $usr1  +  $usr2     **
         **                       **
           **                   **
             **               **
               **           **
                 **       **
                   **   **
                     ***
                      *
        EOT;
        return $heart;
    }
}
