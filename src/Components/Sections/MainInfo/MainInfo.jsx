import React, { useEffect } from "react";
import InfoBox from "./Infobox/InfoBox";
import Timebox from "./Timebox/Timebox";
import Style from "./MainInfo.module.scss";
import { useWeather } from "../../../Context/weatherInfoContext";
import Loading from "../../Features/LoadingPage/Loading";
import { useSearch } from "../../../Context/searchContext";
import { useResultState } from "../../../Context/resultStateContext";

export default function MainInfo() {
  const { info, fetchWeather } = useWeather(); //for weather fetching and data populating
  const { city } = useSearch(); //get user entered city
  const { setError } = useResultState(); //for global error operations

  //fetching data whenever city changes
  useEffect(() => {
    if (city) {
      //if city is valid fetch data
      setError(false); //reset global errors if any
      fetchWeather({ city });
    }
  }, [city, setError]);

  if (info.loading) {
    //shows up loading state
    return <Loading />;
  } else if (info.error) {
    //shows up error state and set global error true
    setError(true);
  } else {
    //actual component holds two comps
    return (
      <div className={Style.container}>
        {/* left box to display time, place ,date */}
        <Timebox className={Style.timebox} />
        {/* left box to display weather info  */}
        <InfoBox className={Style.infobox} />
      </div>
    );
  }
}
