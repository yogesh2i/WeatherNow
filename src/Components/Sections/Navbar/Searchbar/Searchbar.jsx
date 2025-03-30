import React, { useEffect, useState } from 'react'
import Style from './Searchbar.module.scss';
import { useSearch } from '../../../../Context/searchContext';



export default function Searchbar() {
    const {setCity,updateRecentCity,recentCity} = useSearch();
    const [search,setSearch] = useState('');
    const [isFocused,setIsFocused] = useState(false);

    useEffect(() => {
        // Debounce logic: update city after 800ms delay
        const timer = setTimeout(() => {
          setCity(search);
          updateRecentCity(search);
          setIsFocused(false);
        }, 800);
    
        // Cleanup the timer on every re-render to avoid memory leaks
        return () => clearTimeout(timer);
      }, [search]);
    

      const handleBlur = (e)=>{
        if(e.relatedTarget && e.relatedTarget.className==="recent"){
            setSearch(e.relatedTarget.innerText);
        }
        setIsFocused(false);
      }
 
  return (
    <div className={Style.container}>

    <input className={Style.input}
     placeholder='Enter city or zip code...' 
     type="text"
    value={search}
    onFocus={()=>setIsFocused(true)}
    onBlur={(e)=>handleBlur(e)}
    onChange={(e) => setSearch(e.target.value)}>
    </input> 

    {isFocused && recentCity.length>0 && <div className={Style.recentBox}>
        <ul>
      { recentCity.map((item)=>{
          return(<li key={item} onClick={()=>setCity(item)} className='recent' tabIndex={0}>
             {item}
          </li>)
        })}
        </ul>
    </div>}

    </div>
  )
}
