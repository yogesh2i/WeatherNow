import React, { useEffect, useState } from "react";
import Style from "./Searchbar.module.scss";
import { useSearch } from "../../../../Context/searchContext";

export default function Searchbar() {
  const { setCity, updateRecentCity, recentCity } = useSearch();
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    // Debounce logic: update city after 800ms delay
    const timer = setTimeout(() => {
      setCity(search);
      updateRecentCity(search);
    }, 800);

    // Cleanup the timer on every re-render to avoid memory leaks
    return () => clearTimeout(timer);
  }, [search,setCity,updateRecentCity]); //search state as dependency, as we want to take action whenever user types in input box


  //handling onblur event of input box
  const handleBlur = (e) => {
    //if we are clicking on recent item then it should fetch data first then should be out of focus
    if (e.relatedTarget && e.relatedTarget.className === "recent") {
      setSearch(e.relatedTarget.innerText);
    }
    //set out of focus
    setIsFocused(false);
  };

  return (
    <div className={Style.container}>
      <input
        className={Style.input}
        placeholder="Enter city or zip code..."
        type="text"
        value={search}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => handleBlur(e)}
        onChange={(e) => setSearch(e.target.value)}
      ></input>

      {/* recent search history list  showa up only when there's any item in history*/}
      {isFocused && recentCity.length > 0 && (
        <div className={Style.recentBox}>
          <ul>
            {recentCity.map((item) => {
              return (
                <li
                  key={item}
                  onClick={() => setCity(item)}
                  className="recent"
                  tabIndex={0}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
