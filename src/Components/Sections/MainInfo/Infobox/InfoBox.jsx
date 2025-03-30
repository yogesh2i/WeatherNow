import React from 'react'
import Style from './Infobox.module.scss';
import styled from 'styled-components';
import { useTheme } from '../../../../Context/themeContext';
import { WiHumidity, WiStrongWind , WiBarometer} from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { useWeather } from '../../../../Context/weatherInfoContext';
import { getIcon } from '../../../../Utility/helperFunctions';

function OtherInfo({text,data}){
 return(
    <div>
      {text==="Humidity"&&<WiHumidity fontSize={'50px'}/>}
      {text==="Wind"&&<WiStrongWind fontSize={'50px'}/>}
      {text==="Pressure"&&<WiBarometer fontSize={'50px'}/>}
      {text==="Max Temp"&&<CiTempHigh fontSize={'50px'}/>}
      <p style={{fontSize:'1rem'}}>{data}</p>
      <p>{text}</p>
    </div>
 )
}

export default function InfoBox() {
    const {theme} = useTheme();
    const {info} = useWeather();
    const {temperature,wind,pressure,humidity,feels,sunrise,sunset,weather,icon} = info?.data;
  return (
    <Container className={Style.container} theme={theme}>
      <div className={Style.left}>
        <p>{temperature}&deg;C</p>
        <p>Feels Like: <span>{feels}&deg;C</span></p>
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset}</p>
      </div>
      <div className={Style.middle}>
        <img src={getIcon(icon)} alt={weather} />
        <p>{weather}</p>
      </div>
      <div className={Style.right}>
         <OtherInfo text="Humidity" data={humidity}/>
         <OtherInfo text="Wind" data={wind}/>
         <OtherInfo text="Pressure" data={pressure}/>
         <OtherInfo text="Max Temp" data={feels}/>
      </div>
    </Container>
  )
}


const Container = styled.div(({theme})=>`
     background-color:  ${theme==='light'?'#d9d9d9':'#444444'};
`)