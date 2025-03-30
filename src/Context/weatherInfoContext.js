import { createContext, useContext, useState } from "react";
import { mainDataFilter } from "../Utility/mainDataFilter";
import { fetchResults } from "../Utility/helperFunctions";

//global context to populate mainInfo section
const WeatherContext = createContext(null);

const initialState = {
  loading: true,
  error: false,
  data: null,
};

//weahter context provider
export const WeatherContextProvider = ({ children }) => {
  const [info, setInfo] = useState(initialState);

  //function to fetch weather
  const fetchWeather = async ({ city }) => {
    setInfo(initialState); //reset states to initial values to reset previous error or loading states

    //calling global fetch function specifying type: weather
    let result = await fetchResults({ type: "weather", city });
    if (!result) {
      //if error occurs set respective states
      setInfo({
        loading: false,
        error: true,
        data: null,
      });
    } else {
      //if succeeds set data
      setInfo({
        loading: false,
        error: false,
        data: mainDataFilter(result),
      });
    }
  };
  return (
    <WeatherContext.Provider value={{ info, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

//custom hook to provide weather info and fetch function
export const useWeather = () => useContext(WeatherContext);
