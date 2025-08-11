const colors: Record<string, number> = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
}

export function decodedResistorValue(input: string[]) {
  const firstSignificantDigit = colors[input[0]];
  const secondSignificantDigit = colors[input[1]];
  const multiplier = Math.pow(10, colors[input[2]]);
  
  const valueAsInt = (firstSignificantDigit * 10 + secondSignificantDigit) * multiplier;

  if (valueAsInt >= 1e9) {
    return `${valueAsInt / 1e9} gigaohms`;
  } else if (valueAsInt >= 1e6) {
    return `${valueAsInt / 1e6} megaohms`;
  } else if (valueAsInt >= 1e3) {
    return `${valueAsInt / 1e3} kiloohms`;
  } else {
    return `${valueAsInt} ohms`;
  }
}