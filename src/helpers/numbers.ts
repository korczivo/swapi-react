export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function parseToNumber(data: number | string): number {
  if (data === 'unknown' || data === '') {
    return 0;
  }

  return Number(data);
}
