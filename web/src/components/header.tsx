import React from "react";
import "./header-style.scss";

function Header() {
  return (
    <div className="headerme">
      <div
        style={{
          marginRight: "auto"
        }}
      ></div>
      <div className="headerme__name">
        <a className="headerme__name-name">Anirut Kamchai</a>
        <a className="headerme__name-position">ผู้ดูแลระบบ</a>
      </div>
      <div className="headerme__avatar"></div>
    </div>
  );
}

export default Header;
