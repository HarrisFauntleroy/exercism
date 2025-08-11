-module(two_fer).

-export([two_fer/0, two_fer/1]).

two_fer() -> 
    "One for you, one for me.".

two_fer(Name) -> 
    "One for " ++ name_or_you(Name) ++ ", one for me.".

name_or_you(undefined) -> "you";
name_or_you([]) -> "you";
name_or_you(Name) when is_list(Name) -> Name.