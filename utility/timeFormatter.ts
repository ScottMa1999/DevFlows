export default function timeFormatter(past: string | Date): string {
  const currTime: any = new Date();
  const pastTime: any = new Date(past);
  const differenceInMille = currTime - pastTime;
  const differenceInDate = Math.floor(
    differenceInMille / (1000 * 60 * 60 * 24)
  );
  const differenceInMonth = Math.floor(differenceInDate / 30);
  const differenceInYear = Math.floor(differenceInMonth / 12);
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "always" });

  if (differenceInDate <= 31) {
    return rtf.format(differenceInDate * -1, "day");
  } else if (differenceInDate > 31 && differenceInMonth <= 12) {
    return rtf.format(differenceInMonth * -1, "month");
  } else {
    return rtf.format(differenceInYear, "year");
  }
}
