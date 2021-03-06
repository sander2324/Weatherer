import Constants from 'expo-constants';
import * as Location from 'expo-location';

import differenceInMinutes from 'date-fns/differenceInMinutes';


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

export async function getWeatherApiUrl(settings, storedLocation) {
  const apiKey = Constants.manifest.extra.owmApiKey;

  if (!settings.useLiveLocation.value) {
    const locationNameFull = `${storedLocation.name}, ${storedLocation.countryCode}`;
    return `https://api.openweathermap.org/data/2.5/weather?q=${locationNameFull}&appid=${apiKey}&units=${settings.unit.value}`;
  }

  const { status } = await Location.requestPermissionsAsync();
  if (status !== 'granted') {
    return null;
  }

  let liveLocation;
  try {
    liveLocation = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
  } catch (e) {
    return null;
  }

  return `https://api.openweathermap.org/data/2.5/weather?lat=${liveLocation.coords.latitude}&lon=${liveLocation.coords.longitude}&appid=${apiKey}&units=${settings.unit.value}`;
}


// Split an array in to an array of chunk arrays
// getChunkArray([1, 2, 3, 4], 2) -> [[1, 2], [3, 4]]
export function getChunkArray(arr, chunkSize) {
  const accumulator = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    accumulator.push(arr.slice(i, i + chunkSize));
  }

  return accumulator;
}

export function getCompassValueFromDegree(deg) {
  if (!deg || deg < 0 || deg > 360) return '?';

  const compassValues = [
    'N',
    'NNO',
    'NO',
    'ONO',
    'O',
    'OZO',
    'ZO',
    'ZZO',
    'Z',
    'ZZW',
    'ZW',
    'WZW',
    'W',
    'WNW',
    'NW',
    'NNW',
    'N',
  ];

  const index = Math.round(deg / 22.5);
  return compassValues[index];
}
