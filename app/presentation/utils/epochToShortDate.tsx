export default function epochToShortDate(epoch: number): string {
  const paddedEpoch =
    String(epoch).length < 13 ? Number(String(epoch).padEnd(13, '0')) : epoch;

  const now = new Date().getTime();
  const inputTime = new Date(paddedEpoch).getTime();
  const differenceInSeconds = Math.floor((now - inputTime) / 1000);
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);

  if (differenceInSeconds < 60) {
    return `${differenceInSeconds}s`;
  } else if (differenceInMinutes < 60) {
    return `${differenceInMinutes}m`;
  } else if (differenceInHours < 24) {
    return `${differenceInHours}h`;
  } else if (differenceInDays === 1) {
    return 'Yesterday';
  } else if (differenceInDays > 1) {
    const date = new Date(paddedEpoch);
    const month = date.toLocaleString('default', {month: 'short'});
    const day = date.getDate();
    return `${month} ${day}`;
  } else {
    return 'Invalid date';
  }
}
