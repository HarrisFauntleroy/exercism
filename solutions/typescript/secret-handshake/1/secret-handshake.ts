function toBinary(num: number): string {
  return (num >>> 0).toString(2).padStart(5, '0'); // Ensures 5-bit representation
}

const actions: Record<number, string> = {
  [0]: "wink",
  [1]: "double blink",
  [2]: "close your eyes",
  [3]: "jump",
  [4]: "reverse"
}

export function commands(input: number) {
  const binaryValue = toBinary(input)
  const toArray = binaryValue.split("")
  const mapped = toArray.reverse().map((val, index) => {
    if (Number(val) === 1) {
     return actions[index]
    }
    return 
  })
  const reversed = mapped.includes("reverse") ? mapped.reverse() : mapped
  return reversed.filter(Boolean).filter(val => val !== 'reverse')
}