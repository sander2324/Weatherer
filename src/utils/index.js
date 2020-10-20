import differenceInMinutes from 'date-fns/differenceInMinutes';


// eslint-disable-next-line import/prefer-default-export
export function getLastUpdatedMessage(weatherDate) {
  if (!weatherDate) return null;

  const diffMinutes = differenceInMinutes(new Date(), weatherDate);
  if (!diffMinutes) return 'Net bijgewerkt';

  if (diffMinutes >= 60) {
    const diffHours = (diffMinutes / 60).toFixed(1);
    return `${diffHours} uur geleden bijgewerkt`;
  }

  if (diffMinutes === 1) {
    return `${diffMinutes} minuut geleden bijgewerkt`;
  }

  return `${diffMinutes} minuten geleden bijgewerkt`;
}
