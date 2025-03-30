import React from 'react'
import { FaCarCrash } from "react-icons/fa";
import Style from './error.module.scss';
//global error page
export default function Error() {
  return (
    <div className={Style.error}>
        <FaCarCrash/>
       <p>Sorry! Looks like we failed to reach asked location.</p>
    </div>
  )
}
