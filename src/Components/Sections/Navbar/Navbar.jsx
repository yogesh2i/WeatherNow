import React from 'react'
import Style from './Navbar.module.scss';
import ToggleTheme from './ToggleTheme/ToggleTheme';
import Searchbar from './Searchbar/Searchbar';
export default function Navbar() {
  return (
    <div className={Style.nav}>
       <h2>Weather Now</h2>
       <Searchbar></Searchbar>
       <ToggleTheme></ToggleTheme>
    </div>
  )
}
