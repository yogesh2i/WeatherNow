import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../../Context/themeContext';
import Style from './DailyForecast.module.scss';
import { useForecast } from '../../../../Context/forecastContext';
import { getIcon } from '../../../../Utility/helperFunctions';

export default function DailyForecast() {
    const {theme} = useTheme();
    const {info} = useForecast();
    console.log(info)
    const {fiveDayForecast} = info?.data;
  return (
    <Container className={Style.container} theme={theme}>
      <p className={Style.boldText}>5 Days Forecast:</p>
      <div className={Style.forecast}>
        {fiveDayForecast.map((item,index)=>{
            const {icon,temperature,date,weather} = item;
           return(
        <p key={index}>
            <span><img src={getIcon(icon)} alt={weather} /></span>
            <span>{temperature}&deg;C</span>
            <span>{date}</span>
        </p>
           )
        })}
       
      </div>
    </Container>
  )
}

const Container = styled.div(({theme})=>`
     background-color:  ${theme==='light'?'#d9d9d9':'#444444'};
`)