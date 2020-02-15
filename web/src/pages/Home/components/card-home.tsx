import React, { Component } from "react";
import "./card-home-style.scss";
import { useHistory } from "react-router-dom";

const CardHomeComponent = () => {
  const history = useHistory();

  return (
    <div
      className="card-home"
      style={{
        cursor: "pointer"
      }}
      onClick={() => {
        history.push("/project");
      }}
    >
      <div className="left">
        <div>1</div>
      </div>
      <div className="right">
        ห้างสรรพสินค้า ก
        <div className="box">
          ที่อยู่
          <span>987 ถนนพระราม 1 แขวงปทุมวัน เขตปทุมวัน กทม</span>
        </div>
        <div className="box">
          จำนวน
          <span>9 คน</span>
        </div>
      </div>
    </div>
  );
};

export default CardHomeComponent;
