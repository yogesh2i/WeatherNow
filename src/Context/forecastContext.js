
import { createContext, useContext, useState } from "react";
import { fetchResults } from "../Utility/helperFunctions";
import { forecastDataFilter } from "../Utility/forecastDataFilter";


const ForecastContext = createContext(null);

const initialState = {
    loading: true,
    error: false,
    data : null
}

export const ForecastContextProvider = ({children})=>{
    const [info,setInfo] = useState(initialState);


    const fetchForecast = async ({city})=>{
      setInfo(initialState);
      let result = await fetchResults({type:'forecast',city})
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
            data: forecastDataFilter(result)
        })
      }
    }
    return(
        <ForecastContext.Provider value={{info,fetchForecast}}>
            {children}
        </ForecastContext.Provider>
    )
}

export const useForecast = ()=> useContext(ForecastContext)