export async function fetchResults({type,city}){
    const param = new URLSearchParams({
        q: city,
        appid: process.env.REACT_APP_APPID,
        units: 'metric',
      }).toString();
      const url = `${process.env.REACT_APP_BASE_API_URL}${type}?${param}`;
      let response = await fetch(url);
      let data = await response.json();
      if(data?.cod==200){
        return data;
      }else{
        return false;
      }
}

export function formatTime(data){
    let time = new Date(data*1000);
    const hours = String(time.getHours()).padStart(2, "0"); 
    const minutes = String(time.getMinutes()).padStart(2, "0"); 
    return `${hours}:${minutes}`;
  }
  
export  function formatDate(data){
      let time = new Date(data*1000);
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = days[time.getDay()];
  
  // Get day number
  const dayNumber = time.getDate();
  
  // Get month name
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthName = months[time.getMonth()];
  
  // Format the date
  return `${dayName}, ${dayNumber} ${monthName}`;
  
  }

 export function getIcon(icon){
    return `https://openweathermap.org/img/wn/${icon}@2x.png`
 } 