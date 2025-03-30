import { createContext, useContext, useState } from "react";
import { fetchResults } from "../Utility/helperFunctions";
import { forecastDataFilter } from "../Utility/forecastDataFilter";

//creating context for forecast data only , populates forcast section
const ForecastContext = createContext(null); 

const initialState = {
  loading: true,
  error: false,
  data: null,
};

//provider for forecast context
export const ForecastContextProvider = ({ children }) => {
  const [info, setInfo] = useState(initialState);

  const fetchForecast = async ({ city }) => {
    setInfo(initialState); //setting to initialState so that after previous error or loading states can be removed
    //calling global fetch function by specifying type : forecast
    let result = await fetchResults({ type: "forecast", city });

    if (!result) {
      //if theres any error
      setInfo({
        loading: false,
        error: true,
        data: null,
      });
    } else {
      //set data if successful
      setInfo({
        loading: false,
        error: false,
        data: forecastDataFilter(result),
      });
    }
  };
  return (
    <ForecastContext.Provider value={{ info, fetchForecast }}>
      {children}
    </ForecastContext.Provider>
  );
};

//custom hook for easy accessibility of data and loading states
//provides a function to fetch forecast as fetchForecast and result as info
export const useForecast = () => useContext(ForecastContext);
