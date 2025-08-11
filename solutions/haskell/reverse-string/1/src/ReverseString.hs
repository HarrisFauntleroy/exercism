module ReverseString (reverseString) where

-- Reverse string: fold from left, flip cons
reverseString :: String -> String
reverseString = foldl (flip (:)) []
