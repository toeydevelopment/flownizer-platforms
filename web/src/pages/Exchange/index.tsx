import React from "react";
import NavBar from "../../components/navbar";
import "./exchange-style.scss";
import { COLOR_PRIMARY, COLOR_GREY_LIGHT_1, COLOR_GREY } from "../../constants";

function ExchangePage() {
  return (
    <div
      style={{
        display: "flex"
      }}
    >
      <NavBar />
      <div
        style={{
          width: "100%",
          height: "90vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly"
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            width: "10rem",
            height: "10rem",
            backgroundSize: "cover",
            backgroundImage:
              "url('https://ya-webdesign.com/images/avatar-png-1.png')"
          }}
        ></div>
        <div
          style={{
            backgroundSize: "cover",
            width:"10rem",
            height:"10rem",
            backgroundImage:
              "url('https://www.freeiconspng.com/uploads/arrow-png-22.png')"
          }}
        >
        </div>
        <div className="exchange-card">
          <div
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                display: "flex"
              }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                  backgroundImage:
                    "url('https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png')",
                  backgroundSize: "cover"
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "5rem",
                  width: "100%",
                  marginLeft: ".5rem"
                }}
              >
                <div>ต้องการพนักงานรักษาความปลอดภัย</div>
                <div>
                  {" "}
                  <span style={{ color: COLOR_GREY_LIGHT_1 }}>
                    เขตพญาไท
                  </span>{" "}
                  <span style={{ color: COLOR_GREY, marginLeft: "1rem" }}>
                    กรุงเทพ
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex"
              }}
            >
              <span style={{ width: "10%" }}>บริษัท </span>
              <span
                style={{
                  width: "40%",
                  display: "inline"
                }}
              >
                A
              </span>
              <span style={{ width: "10%" }}>จำนวน</span>
              <span
                style={{
                  width: "40",
                  display: "inline"
                }}
              >
                4 คน
              </span>
            </div>
            <div
              style={{
                display: "flex"
              }}
            >
              <span style={{ width: "10%" }}>วันที่ </span>
              <span
                style={{
                  display: "inline",
                  fontSize: "1rem",
                  width: "40%"
                }}
              >
                18 กุมภาพันธ์ 2563
              </span>
              <span style={{ width: "10%" }}>เวลา </span>
              <span style={{ width: "40%", fontSize: "1rem" }}>
                8:00 น. - 20:00 น
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExchangePage;
