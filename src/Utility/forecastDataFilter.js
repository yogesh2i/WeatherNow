import { formatDate, formatTime } from "./helperFunctions";

export function forecastDataFilter(data){
    const fiveDayForecast = processDailyData(data?.list);
    const hourlyForecast = processHourData(data?.list);
   return {fiveDayForecast,hourlyForecast};
}

const processHourData=(data)=>{
   const result = data.map((entry)=>{
        return {
            icon: entry?.weather[0]?.icon,
            date: formatDate(new Date(entry?.dt)).split(", ")[1],
            time: formatTime(new Date(entry?.dt)),
            temperature: entry?.main?.temp,
            weather: entry?.weather[0]?.main
        }
   })
   return result;
}

// Function to extract data for 5 different days
const processDailyData = (data) => {
    const processedDates = new Set(); // To track unique days

    const result = [];
     data.forEach((entry) => {
    const date = formatDate(new Date(entry?.dt)); // Extract date (YYYY-MM-DD)
   
    if (!processedDates.has(date)) {
      // Add the first entry of each unique date
      result.push({
          date: date,
          temperature: entry?.main?.temp, // Use the temperature value
          icon: entry?.weather[0]?.icon, // Use the wind speed value
          weather: entry?.weather[0]?.main, // Use the wind speed value
        });
        processedDates.add(date); // Mark this date as processed
    }
  });

  return result.slice(0, 5); // Ensure we return data for only 5 days
};

