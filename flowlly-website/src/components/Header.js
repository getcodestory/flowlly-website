import React, {useEffect, useState} from "react";
import logo from "../img/logo.svg";

const Header= ({scroll}) => {

  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', updatePosition)

    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])


  return (
      <div id="nav-bar" className={`py-8 px-20  z-40 fixed w-full flex flex-row justify-between ${scrollPosition < 60 ? '' : 'bg-[#000000E5] rounded'}`}>
        <img src={logo} alt="logo" className={`${scrollPosition < 60 ? 'w-[20%]': 'w-[12%]'}`}/>
        <button className="text-black text-xl font-bold bg-white px-3 py-2 rounded-full shadow-md" onClick={scroll}>Contact Us</button>
      </div>     

  );
}

export default Header;