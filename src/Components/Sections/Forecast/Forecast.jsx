import React, { useEffect } from "react";
import DailyForecast from "./Daily/DailyForecast";
import HourlyForecast from "./Hourly/HourlyForecast";
import Style from "./Forecast.module.scss";
import { useForecast } from "../../../Context/forecastContext";
import Loading from "../../Features/LoadingPage/Loading";
import { useSearch } from "../../../Context/searchContext";
import { useResultState } from "../../../Context/resultStateContext";

export default function Forecast() {
  const { info, fetchForecast } = useForecast(); //extracting info and fetch function from custom hook
  const { city } = useSearch(); //getting user entered city
  const { setError } = useResultState(); //extracting global error operations from custom hook

  //to fetch data whenever user changes city
  useEffect(() => {
    if (city) {
      //if city is valid fetch data
      setError(false); //reset global error state
      fetchForecast({ city });
    }
  }, [city, setError]);

  if (info.loading) {
    //shows up when there's loading state
    return <Loading />;
  } else if (info.error) {
    //shows up if any error occurs
    setError(true);
  } else {
    //actual component contains two parts
    return (
      <div className={Style.container}>
        {/* daily forecast module */}
        <DailyForecast className={Style.dailybox} />
        {/* hourly data module  */}
        <HourlyForecast className={Style.hourbox} />
      </div>
    );
  }
}
