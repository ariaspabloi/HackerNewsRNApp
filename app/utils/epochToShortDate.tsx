export default function epochToShortDate(epoch: number): string {
  const date = new Date(epoch);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const oneDay = 24 * 60 * 60 * 1000;

  const formatTime = (d: Date) => {
    let hours = d.getHours();
    let minutes = d.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesString = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutesString} ${ampm}`;
  };

  if (diff < oneDay) {
    return formatTime(date);
  } else if (diff < 2 * oneDay && now.getDate() !== date.getDate()) {
    return 'Yesterday';
  } else {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return `${months[date.getMonth()]} ${date.getDate()}`;
  }
}
