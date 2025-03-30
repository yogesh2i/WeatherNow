import { createContext, useContext, useState } from "react";

//component to provide global states
//currently holds global error state
//more can be added later like loading etc.
const ResultStateContext = createContext(null);

export const ResultStateProvider = ({ children }) => {
  const [error, setError] = useState(false);
  return (
    <ResultStateContext.Provider value={{ error, setError }}>
      {children}
    </ResultStateContext.Provider>
  );
};

//custom hook to access global error
//gives error,setError method to get and set error
export const useResultState = () => useContext(ResultStateContext);
