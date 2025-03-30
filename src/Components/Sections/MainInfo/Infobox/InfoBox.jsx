import React from "react";
import Style from "./Infobox.module.scss";
import styled from "styled-components";
import { useTheme } from "../../../../Context/themeContext";
import { WiHumidity, WiStrongWind, WiBarometer } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { useWeather } from "../../../../Context/weatherInfoContext";
import { getIcon } from "../../../../Utility/helperFunctions";

//component for extra weather info
//we can break down more if necessary
function OtherInfo({ text, data }) {
  return (
    <div>
      {text === "Humidity" && <WiHumidity fontSize={"50px"} />}
      {text === "Wind" && <WiStrongWind fontSize={"50px"} />}
      {text === "Pressure" && <WiBarometer fontSize={"50px"} />}
      {text === "Max Temp" && <CiTempHigh fontSize={"50px"} />}
      <p style={{ fontSize: "1rem" }}>{data}</p>
      <p>{text}</p>
    </div>
  );
}

export default function InfoBox() {
  const { theme } = useTheme(); //get theme from custom hook
  //extracting required info from custom weather info hook
  const { info } = useWeather();
  const {
    temperature,
    wind,
    pressure,
    humidity,
    feels,
    sunrise,
    sunset,
    weather,
    icon,
    maxTemp,
  } = info?.data;

  return (
    // contains 3 parts left,middle,right
    <Container className={Style.container} theme={theme}>
      {/* left for temperature,feels like ,sunrise,sunset  */}
      <div className={Style.left}>
        <p>{temperature}&deg;C</p>
        <p>
          Feels Like: <span>{feels}&deg;C</span>
        </p>
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset}</p>
      </div>

      {/* middle for icon and weather type text  */}
      <div className={Style.middle}>
        <img src={getIcon(icon)} alt={weather} />
        <p>{weather}</p>
      </div>

      {/* right for extra info as humidity, pressure, wind speed, max temp  */}
      <div className={Style.right}>
        <OtherInfo text="Humidity" data={humidity} />
        <OtherInfo text="Wind" data={wind} />
        <OtherInfo text="Pressure" data={pressure} />
        <OtherInfo text="Max Temp" data={maxTemp} />
      </div>
    </Container>
  );
}

//styled css for managing theme
const Container = styled.div(
  ({ theme }) => `
     background-color:  ${theme === "light" ? "#d9d9d9" : "#444444"};
`
);
