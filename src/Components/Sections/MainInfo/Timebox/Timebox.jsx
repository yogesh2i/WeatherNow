import React from "react";
import Style from "./Timebox.module.scss";
import styled from "styled-components";
import { useTheme } from "../../../../Context/themeContext";
import { useWeather } from "../../../../Context/weatherInfoContext";

export default function Timebox() {
  const { theme } = useTheme(); //get theme from custom theme hook
  //extracting data from info
  const { info } = useWeather();
  const { place, time, date } = info?.data;

  return (
    <Container className={Style.container} theme={theme}>
      <p className={Style.place}>{place}</p>
      <p className={Style.time}>{time}</p>
      <p className={Style.day}>{date}</p>
    </Container>
  );
}

//styled css to manage theme ui
const Container = styled.div(
  ({ theme }) => `
     background-color:  ${theme === "light" ? "#d9d9d9" : "#444444"};
`
);
