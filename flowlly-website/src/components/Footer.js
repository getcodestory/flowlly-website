import React from "react";
import logo from "../img/logo.svg";

//react footer component

const Footer = () => {
  return (
    <div className="bg-white border-t border-black py-8 flex flex-row justify-around">
      <img src={logo} alt="logo" className="w-[10%]" />
      <p>Copyright © 2023 CodeStory, Inc.</p>
    </div>
  )
  }

export default Footer;