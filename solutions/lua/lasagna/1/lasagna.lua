local lasagna = {
  oven_time = 40,
  prep_minutes_per_layer = 2
}

-- returns the remaining minutes based on the actual minutes in the oven
function lasagna.remaining_oven_time(actual_minutes_in_oven)
  return lasagna.oven_time - actual_minutes_in_oven
end


function lasagna.preparation_time(number_of_layers)
  return number_of_layers * lasagna.prep_minutes_per_layer
end

function lasagna.elapsed_time(number_of_layers, actual_minutes_in_oven)
  return lasagna.preparation_time(number_of_layers) + actual_minutes_in_oven
end

return lasagna
