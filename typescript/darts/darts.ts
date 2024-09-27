const distanceFromCenterOfCircle = (x: number, y: number): number => {
  return Math.sqrt(x ** 2 + y ** 2);
}
  
export function score(x: number, y: number): number {
  const distance = distanceFromCenterOfCircle(x, y)
  if (distance <= 1) return 10
  if (distance <= 5) return 5
  if (distance <= 10) return 1
  return 0
}
