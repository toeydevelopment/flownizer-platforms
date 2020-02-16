import React from "react";
import NavBar from "../../components/navbar";
import "./exchange-style.scss";
import { COLOR_PRIMARY, COLOR_GREY_LIGHT_1, COLOR_GREY } from "../../constants";
import Avatar from '../../assets/avatar_man.png'
import Arrow from '../../assets/arrow.png'
import src from "*.bmp";

function ExchangePage() {
  return (
    <div
      style={{
        display: "flex"
      }}
    >
      <NavBar />
      <div className='title'>
        แลกเปลี่ยนพนักงาน
      </div>
      <div
        style={{
          width: "100%",
          marginLeft: '20%',
        }}
      >
        <div style={{fontSize: '3rem', fontWeight: 500, textAlign: 'center', marginTop: 60}}>ตอบรับคำขอเรียบร้อยแล้ว</div>
        <div style={{
          position: "relative",
          display: 'flex',
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: 180
        }}
        >
          <img src={Avatar}
            style={{
              borderRadius: "50%",
              width: "10rem",
              height: "10rem",
              backgroundSize: "cover",
            }}
          />
          <img src={Arrow}
            style={{
              backgroundSize: "cover",
              width:"10rem",
              height:"auto",
            }}
          />
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
                <img src={Avatar}
                  style={{
                    borderRadius: "50%",
                    width: "3rem",
                    height: "3rem",
                  }}
                />
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
    </div>
  );
}

export default ExchangePage;
