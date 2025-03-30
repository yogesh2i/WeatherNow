import { formatDate, formatTime } from "./helperFunctions";



//expects one arg as data
export function forecastDataFilter(data) {
  const fiveDayForecast = processDailyData(data?.list); //process for formatting daily data
  const hourlyForecast = processHourData(data?.list); //process for formatting hourly data
  return { fiveDayForecast, hourlyForecast };
}




//formatting hourly data with only required data
const processHourData = (data) => {
  const result = data.map((entry) => {
    return {
      icon: entry?.weather[0]?.icon,
      date: formatDate(new Date(entry?.dt)).split(", ")[1],
      time: formatTime(new Date(entry?.dt)),
      temperature: entry?.main?.temp,
      weather: entry?.weather[0]?.main,
    };
  });
  return result;
};





// Function to extract data for 5 different days
const processDailyData = (data) => {
  const processedDates = new Set(); // To track unique days

  const result = [];
  data.forEach((entry) => {
    const date = formatDate(new Date(entry?.dt));

    if (!processedDates.has(date)) {
      // Add the first entry of each unique date
      result.push({
        date: date,
        temperature: entry?.main?.temp,
        icon: entry?.weather[0]?.icon,
        weather: entry?.weather[0]?.main,
      });
      processedDates.add(date); // Mark this date as processed
    }
  });

  return result.slice(0, 5); // Ensure we return data for only 5 days
};
