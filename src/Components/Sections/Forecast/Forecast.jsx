import React, { useEffect } from 'react'
import DailyForecast from './Daily/DailyForecast'
import HourlyForecast from './Hourly/HourlyForecast'
import Style from './Forecast.module.scss';
import { useForecast } from '../../../Context/forecastContext';
import Loading from '../../Features/LoadingPage/Loading';
import { useSearch } from '../../../Context/searchContext';
import { useResultState } from '../../../Context/resultStateContext';

export default function Forecast() {
    const {info,fetchForecast} = useForecast();
    const {city} = useSearch();
    const {setError} = useResultState();
    useEffect(()=>{
        if(city){
            setError(false);
            fetchForecast({city});
        }
    },[city])

    if(info.loading){
        return <Loading/>
    }else if(info.error){
        setError(true);
        return <></>
    }else{
  return (
    <div className={Style.container}>
      <DailyForecast className={Style.dailybox}/>
      <HourlyForecast className={Style.hourbox}/>
    </div>
  )
}
}
