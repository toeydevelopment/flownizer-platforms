import React from "react";
import "./card-home-style.scss";
import { COLOR_PRIMARY } from "../../../constants";

function CardHomeComponent() {
  return (
    <div className="card-home">
      <div
        style={{
          height: "100%",
          width: "10%",
          backgroundColor: COLOR_PRIMARY
        }}
      >
        <h1>1</h1>
      </div>
      <div
        style={{
          padding: "0 1rem",
          width: "90%",
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <p>ห้างสรรพสินค้า A</p>
        <div
          style={{
            display: "flex",
            justifyContent:"space-evenly"
          }}
        >
          <p>ที่อยู่</p>
          <p>987 ถนนพระราม 1 แขวงปทุมวัน เขตปทุมวัน กทม</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent:"space-evenly"
          }}
        >
          <p>จำนวน</p>
          <p>9 คน</p>
        </div>
      </div>
    </div>
  );
}

export default CardHomeComponent;
