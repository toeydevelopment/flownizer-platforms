import React, { useState, useEffect } from "react";
import NavBar from "../../components/navbar";
import "./all-request.scss";
import Avatar from "../../assets/avatar_man.png";
import RequestCard from "./components/request-card";
import SendingCard from "./components/sending-card";
import { getAllTx } from "../../functional/borrow-function";
const request = [
  {
    topic: "ต้องการพนักงานรักษาความปลอดภัย",
    address: "เขตพญาไท กทม",
    from: "A",
    man: "4 คน",
    date: "18 กุมภาพันธ์ 2563",
    time: "8:00 น. - 20:00 น."
  },
  {
    topic: "ต้องการพนักงานรักษาความปลอดภัย",
    address: "อโศก กทม",
    from: "B A",
    man: "2 คน",
    date: "21 กุมภาพันธ์ 2563",
    time: "7:00 น. - 19:00 น."
  }
];

function AllRequest() {
  const [load, setLoad] = useState(false);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    setLoad(true);
    getAllTx().then((data: any) => {
      setDatas(data);
      console.log(data[0]);
      setLoad(false);
    });
  }, []);
  return (
    <div
      style={{
        display: "flex"
      }}
    >
      <NavBar />
      <div className="title">แลกเปลี่ยนพนักงาน</div>
      <div className="all-request">
        <div>
          <h1 style={{ fontWeight: 400, marginLeft: 40, marginTop: 31 }}>
            ได้รับคำขอ
          </h1>
          {load ? <h3>....... LOADING .....</h3> : <RequestCard req={datas} />}
        </div>
        <div>
          <h1 style={{ fontWeight: 400, marginLeft: 40, marginTop: 31 }}>
            คำขอที่ถูกส่ง
          </h1>
          <SendingCard />
        </div>
      </div>
    </div>
  );
}

export default AllRequest;
