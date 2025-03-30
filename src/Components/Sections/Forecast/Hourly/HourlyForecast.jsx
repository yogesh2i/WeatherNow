import React from "react";
import Style from "./HourlyForecast.module.scss";
import styled from "styled-components";
import { useTheme } from "../../../../Context/themeContext";
import { useForecast } from "../../../../Context/forecastContext";
import { getIcon } from "../../../../Utility/helperFunctions";

export default function HourlyForecast() {
  const { theme } = useTheme(); //extracting theme from custom theme hook
  //extracting forecast info from custom hook
  const { info } = useForecast();
  const { hourlyForecast } = info?.data;

  return (
    //component holds two parts top and bottom
    <Container className={Style.container} theme={theme}>
        {/* top part contains text  */}
      <p className={Style.boldText}>Hourly Forecast:</p>

        {/* bottom part holds repeating cards  */}
      <div className={Style.forecast}>

        {hourlyForecast.map((item, index) => {
          const { icon, temperature, time, date, weather } = item;
          return (
            <p key={index}>
              <span>
                <img src={getIcon(icon)} alt={weather} />
              </span>
              <span>{weather}</span>
              <span>{temperature}&deg;C</span>
              <span>{time}</span>
              <span>{date}</span>
            </p>
          );
        })}
      </div>
    </Container>
  );
}

//styled css for managing global theme
const Container = styled.div(
  ({ theme }) => `
     background-color:  ${theme === "light" ? "#d9d9d9" : "#444444"};
`
);
