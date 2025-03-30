import { createContext, useContext, useState } from "react";
import { mainDataFilter } from "../Utility/mainDataFilter";
import { fetchResults } from "../Utility/helperFunctions";


const WeatherContext = createContext(null);

const initialState = {
    loading: true,
    error: false,
    data : null
}

export const WeatherContextProvider = ({children})=>{
    const [info,setInfo] = useState(initialState);

    const fetchWeather = async ({city})=>{
      setInfo(initialState);
      let result = await fetchResults({type: 'weather',city})
      if(!result){
   
        setInfo({
            loading: false,
            error: true,
            data: null
        })
      }else{
     
        setInfo({
            loading: false,
            error: false,
            data: mainDataFilter(result)
        })
      }
    }
    return(
        <WeatherContext.Provider value={{info,fetchWeather}}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeather = ()=> useContext(WeatherContext)