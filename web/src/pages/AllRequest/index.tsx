import React from "react";
import NavBar from "../../components/navbar";
import "./all-request.scss";
import Avatar from '../../assets/avatar_man.png'
import RequestCard from "./components/request-card";
import SendingCard from './components/sending-card';

function AllRequest() {
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
      <div className='all-request'>
        <div>
          <h1 style={{fontWeight: 400, marginLeft: 40, marginTop: 31}}>ได้รับคำขอ</h1>
          <RequestCard />
        </div>
        <div>
          <h1 style={{fontWeight: 400, marginLeft: 40, marginTop: 31}}>คำขอที่ถูกส่ง</h1>
          <SendingCard />
        </div>
      </div>
    </div>
  );
}

export default AllRequest;
