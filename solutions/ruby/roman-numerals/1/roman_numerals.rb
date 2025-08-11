class Integer
  def to_roman
    roman_map = [
      [1000, "M"],
      [900, "CM"],
      [500, "D"],
      [400, "CD"],
      [100, "C"],
      [90, "XC"],
      [50, "L"],
      [40, "XL"],
      [10, "X"],
      [9, "IX"],
      [5, "V"],
      [4, "IV"],
      [1, "I"]
    ]
    
    result = ""
    remaining = self
    
    roman_map.each do |value, symbol|
      while remaining >= value
        result += symbol
        remaining -= value
      end
    end
    
    result
  end
end