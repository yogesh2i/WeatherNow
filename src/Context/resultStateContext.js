import { createContext, useContext, useState } from "react";

const ResultStateContext = createContext(null);

export const ResultStateProvider = ({children})=>{

    const [error,setError] = useState(false);
    return(
        <ResultStateContext.Provider value={{error,setError}}>
          {children}
        </ResultStateContext.Provider>
    )
}

export const useResultState = ()=> useContext(ResultStateContext);