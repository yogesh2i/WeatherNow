import React, {createContext, useContext, useState} from 'react';  

const ThemeContext = createContext(null);

export const ThemeContextProvider = ({children})=>{
    const [theme,setTheme] = useState('light');

    function toggleTheme(){
         setTheme((theme)=>theme=='light'?'dark':'light');
    }

    return(
       <ThemeContext.Provider value={{theme,toggleTheme}}>
         {children}
       </ThemeContext.Provider>
    )
}

export const useTheme = ()=> useContext(ThemeContext);
