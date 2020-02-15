import React, { Component } from "react";
import { COLOR_PRIMARY } from "../constants";
import "./navbar-style.scss";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const pathName = history.location.pathname.split("/")[1];
  return (
    <div className={`navbar`}>
      <div style={{ height: "10vh" }}></div>
      <a
        className={`navbar__item`}
        onClick={() => {
          history.push("/");
        }}
      >
        หน้าหลัก
      </a>
      <a className={`navbar__item ${pathName == ""}`}>การแจ้งเตือน</a>
      <div style={{ height: "10vh" }}></div>
      <a className={`navbar__item ${pathName == ""}`}>จัดการ</a>
      <a
        className={`navbar__item ${pathName == "project" &&
          "navbar__item--selected"}`}
        onClick={() => {
          history.push("/project");
        }}
      >
        ภาพรวม
      </a>
      <a className={`navbar__item ${pathName == ""}`}>พนักงาน</a>
      <a
        className={`navbar__item ${pathName == "timetable" &&
          "navbar__item--selected"}`}
        onClick={() => {
          history.push("/timetable");
        }}
      >
        ตารางเวลา
      </a>
      <a
        className={`navbar__item ${pathName == "wage" &&
          "navbar__item--selected"}`}
        onClick={() => {
          history.push("/wage");
        }}
      >
        คำนวณเงิน
      </a>
    </div>
  );
};

export default NavBar;
