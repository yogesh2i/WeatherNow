import React from "react";
import styled from "styled-components";
import { useTheme } from "../../../../Context/themeContext";
import Style from "./DailyForecast.module.scss";
import { useForecast } from "../../../../Context/forecastContext";
import { getIcon } from "../../../../Utility/helperFunctions";

export default function DailyForecast() {
  const { theme } = useTheme(); //extracting theme from global theme hook
  //extracting forecast info from custom forecast hook
  const { info } = useForecast();
  const { fiveDayForecast } = info?.data;

  return (
    //component holds two parts
    <Container className={Style.container} theme={theme}>
      {/* top parts contains text part  */}
      <p className={Style.boldText}>5 Days Forecast:</p>

      {/* bottom part contains repeating cards showing daily data  */}
      <div className={Style.forecast}>
        {fiveDayForecast.map((item, index) => {
          const { icon, temperature, date, weather } = item;
          return (
            <p key={index}>
              <span>
                <img src={getIcon(icon)} alt={weather} />
              </span>
              <span>{temperature}&deg;C</span>
              <span>{date}</span>
            </p>
          );
        })}
      </div>
    </Container>
  );
}

//styled css for global theme
const Container = styled.div(
  ({ theme }) => `
     background-color:  ${theme === "light" ? "#d9d9d9" : "#444444"};
`
);
