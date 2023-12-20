import React, { useState } from "react"
import {Link} from 'react-router-dom'
import "../App.css"
const Nav = () => {
  const [isDrawer, setIsDrawer] = useState(false)
  const closeDrawer = () => {
    setIsDrawer(false);
    console.lo(isDrawer)
  };
  return (
    <nav>
      <h1>Logo</h1>
      <div className={`links ${isDrawer ? "" : "activelinks"}`}>
        <Link onClick={closeDrawer} to={'/'}> <p>Home</p> </Link>
        <Link onClick={closeDrawer} to={'/products'}>About us</Link>
        <a href="">Contact us</a>
      </div>
      <div  >
        <svg onClick={()=>setIsDrawer((preve)=>!preve)} xmlns="http://www.w3.org/2000/svg" width={'30px'} viewBox="0 0 24 24">
          <path
            d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"
            fill="currentColor"></path>
        </svg>
      </div>
    </nav>
  )
}

export default Nav
