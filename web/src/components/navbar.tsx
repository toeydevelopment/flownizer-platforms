import React from "react";
import { COLOR_PRIMARY } from "../constants";
import "./navbar-style.scss";

export default function NavBar() {
  return (
    <div className="navbar">
      <div style={{ height: "10vh" }}></div>
      <a className="navbar__item">หน้าหลัก</a>
      <a className="navbar__item">การแจ้งเตือน</a>
      <div style={{ height: "10vh" }}></div>
      <a className="navbar__item">จัดการ</a>
      <a className="navbar__item">ภาพรวม</a>
      <a className="navbar__item">พนักงาน</a>
      <a className="navbar__item">ตารางเวลา</a>
      <a className="navbar__item">คำนวณเงิน</a>
    </div>
  );
}
