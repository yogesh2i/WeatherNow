/*function to fetch results 
 expects two args - type,city
 1. type: weather or forecast
 2. city: city name or zip code
*/
export async function fetchResults({ type, city }) {
  //set query parameters
  const param = new URLSearchParams({
    q: city, //city user want to search
    appid: process.env.REACT_APP_APPID, //appid provided by open weather
    units: "metric", //fethcing in degree celsius
  }).toString();

  const url = `${process.env.REACT_APP_BASE_API_URL}${type}?${param}`; //formatting url

  let response = await fetch(url);
  let data = await response.json();
  if (parseInt(data?.cod) === 200) {
    //if fetched succesfully return data
    return data;
  } else {
    return false; //send as failed response
  }
}




//function formaat time like 09:33
export function formatTime(data) {
  let time = new Date(data * 1000);
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}




//function to fomrat date like Sunday, 30 March
export function formatDate(data) {
  let time = new Date(data * 1000);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[time.getDay()];

  // Get day number
  const dayNumber = time.getDate();

  // Get month name
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = months[time.getMonth()];

  // Format the date
  return `${dayName}, ${dayNumber} ${monthName}`;
}






//formatting icon string
export function getIcon(icon) {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}
