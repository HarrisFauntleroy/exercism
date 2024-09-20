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

export function decodedValue(input: string[]) {
  const first = colors[input[0]].toString()
  const second = colors[input[1]].toString()
  return parseInt(first+second)
}
