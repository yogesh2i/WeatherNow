import React from 'react';
import Style from './HourlyForecast.module.scss';
import styled from 'styled-components';
import { useTheme } from '../../../../Context/themeContext';
import { useForecast } from '../../../../Context/forecastContext';
import { getIcon } from '../../../../Utility/helperFunctions';

export default function HourlyForecast() {
    const {theme} = useTheme();
    const {info} = useForecast();
    const {hourlyForecast} = info?.data;
    return (
        <Container className={Style.container} theme={theme}>
      <p className={Style.boldText}>Hourly Forecast:</p>
      <div className={Style.forecast}>
        {hourlyForecast.map((item,index)=>{
        const {icon,temperature,time,date,weather} = item;
            return (
        <p key={index}>
            <span><img src={getIcon(icon)} alt={weather} /></span>
            <span>{weather}</span>
            <span>{temperature}&deg;C</span>
            <span>{time}</span>
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