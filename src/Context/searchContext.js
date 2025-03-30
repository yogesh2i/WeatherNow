import { createContext, useContext, useState } from "react";

const SearchContext = createContext(null);

export const SearchContextProvider = ({children})=>{
    
     const [city,setCity] = useState("Mumbai");
     const [recentCity,setRecentCity] = useState([]);
    
     const updateRecentCity = (city)=>{
        if(city!==''){
            setRecentCity((prevItems) => {
                const uniqueItems = new Set([...prevItems, city]);
                return Array.from(uniqueItems); // Convert back to an array
              });
          
        }
     }
  return(
    <SearchContext.Provider value={{city,setCity,recentCity,updateRecentCity}}>
        {children}
    </SearchContext.Provider>
  )
}

export const useSearch = ()=> useContext(SearchContext);