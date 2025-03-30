import { createContext, useContext, useState } from "react";

//creating global context for search input
const SearchContext = createContext(null);

export const SearchContextProvider = ({ children }) => {
  const [city, setCity] = useState("Mumbai"); //by default data will be fetched for location mumbai
  const [recentCity, setRecentCity] = useState([]); //hold recent search state

  //function to update recent city user entered
  const updateRecentCity = (city) => {
    if (city !== "") {
      setRecentCity((prevItems) => {
        const uniqueItems = new Set([...prevItems, city]);
        return Array.from(uniqueItems); // Convert back to an array
      });
    }
  };

  return (
    <SearchContext.Provider
      value={{ city, setCity, recentCity, updateRecentCity }}
    >
      {children}
    </SearchContext.Provider>
  );
};

//custom hook to provide operations related to search bar
export const useSearch = () => useContext(SearchContext);
