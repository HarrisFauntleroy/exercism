class Raindrops
  def self.convert(input)
    rules = [
  		[3, "Pling"],
  		[5, "Plang"],
  		[7, "Plong"],
  	]
  
    output = rules
      .select { |divisor| input % divisor[0] == 0 }
      .map { |pair| pair[1]  }
      .join("")
  
    output.empty? ? input.to_s : output
  end
end
