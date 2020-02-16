import React from "react";
import "./header-style.scss";
import Avatar from '../assets/avatar.png'

function Header() {
  return (
    <div className="headerme">
      <div
        style={{
          marginRight: "auto"
        }}
      ></div>
      <div className="headerme__name">
        <a className="headerme__name-name">Theresa Steward</a>
        <a className="headerme__name-position">ผู้ดูแลระบบ</a>
      </div>
      <img src={Avatar} className="headerme__avatar"/>
    </div>
  );
}

export default Header;
