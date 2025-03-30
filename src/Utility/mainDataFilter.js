import { formatDate, formatTime } from "./helperFunctions"

const filteredData = {
    place: '',
    time: '',
    date: '',
    temperature: '',
    sunrise: '',
    sunset: '',
    humidity: '',
    wind: '',
    pressure: '',
    maxTemp: '',
    feels: '',
    weather: '',
    icon: ''
}

export function mainDataFilter(data){
  
  return{
    place: data.name,
    time: formatTime(data?.dt),
    date: formatDate(data?.dt),
    temperature: data?.main?.temp,
    sunrise: formatTime(data?.sys?.sunrise),
    sunset: formatTime(data?.sys?.sunset),
    humidity: data?.main?.humidity,
    wind: data?.wind?.speed,
    pressure: data?.main?.pressure,
    maxTemp: data?.main?.temp_max,
    feels: data?.main?.feels_like,
    weather: data?.weather[0]?.description,
    icon: data?.weather[0]?.icon,
  }
}