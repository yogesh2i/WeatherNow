import React, { useEffect, useState } from 'react'
import InfoBox from './Infobox/InfoBox'
import Timebox from './Timebox/Timebox'
import Style from './MainInfo.module.scss';
import { useWeather } from '../../../Context/weatherInfoContext';
import Loading from '../../Features/LoadingPage/Loading';
import Error from '../../Features/ErrorPage/Error';
import { useSearch } from '../../../Context/searchContext';
import { useResultState } from '../../../Context/resultStateContext';

export default function MainInfo() {
    const {info,fetchWeather} = useWeather();
    const {city} = useSearch();
    const {setError} = useResultState();
    useEffect(()=>{
    if(city){
        setError(false);
        fetchWeather({city});
    }
    },[city])

    if(info.loading){
        return <Loading/>
    }else if(info.error){
        setError(true);
        return <></>
    }else{
        return( <div className={Style.container}>
          <Timebox className={Style.timebox}/>
          <InfoBox className={Style.infobox}/>
        </div>
      )
    }
}
