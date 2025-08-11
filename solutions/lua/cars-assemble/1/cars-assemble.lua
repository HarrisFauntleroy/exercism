local cars = {
  cost_per_car = 10000
}

-- returns the amount of working cars produced by the assembly line every hour
function cars.calculate_working_cars_per_hour(production_rate, success_rate)
  local result = production_rate * (success_rate / 100)
  return math.floor(result * 100 + 0.5) / 100
end

-- returns the amount of working cars produced by the assembly line every minute
function cars.calculate_working_cars_per_minute(production_rate, success_rate)
  return math.floor(production_rate * (success_rate / 100) / 60)
end

-- returns the cost of producing the given number of cars
-- every 10 cars can be produced for 95000
function cars.calculate_cost(cars_count)
  local full_batches = math.floor(cars_count / 10)
  local remaining_cars = cars_count % 10
  
  local batch_cost = full_batches * 95000
  local remaining_cost = remaining_cars * cars.cost_per_car
  
  return batch_cost + remaining_cost
end

return cars
