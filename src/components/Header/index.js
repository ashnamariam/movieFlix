import React from "react";
import SearchComponent from "../SearchComponent";
import './style.css';
import logo from '../../assets/images/logo1.svg'
const Header = ({setSearchTerm }) => {
  return (
    <div className="header">
      <img className="logo" src={logo}></img>
      <div className="rightContainer">
      <SearchComponent onChangeSearch={setSearchTerm}></SearchComponent>   
      </div>
    </div>
  )
}

export default Header;