export function numberFormatter(number: number): string {
  if (number >= Math.pow(10, 6)) {
    const formattedNum: string = (number / Math.pow(10, 6)).toFixed(1);
    return `${formattedNum}M`;
  } else if (number >= Math.pow(10, 3)) {
    const formattedNum: string = (number / Math.pow(10, 3)).toFixed(1);
    return `${formattedNum}K`;
  } else {
    return number.toString();
  }
}
