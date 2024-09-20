function isDivisibleBy(number: number, divisor: number): boolean {
  return number % divisor === 0;
}
export function isLeap(year: number) {
  const isEvenlyDivisibleBy4 = isDivisibleBy(year, 4)
  const isEvenlyDivisibleBy100 = isDivisibleBy(year, 100)
  const isEvenlyDivisibleBy400 = isDivisibleBy(year, 400)
  return isEvenlyDivisibleBy4 && (!isEvenlyDivisibleBy100 || isEvenlyDivisibleBy100 && isEvenlyDivisibleBy400)
}