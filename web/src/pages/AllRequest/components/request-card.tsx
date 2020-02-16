import React, { useState } from "react";
import "./request-card.scss";
import { useHistory } from "react-router-dom";
import Avatar from "../../../assets/avatar_man.png";
import {
  accept,
  request as reqe,
  startRequest,
  contribute
} from "../../../functional/borrow-function";

const RequestCard = (props: any) => {
  const history = useHistory();
  const [load, setLoad] = useState(false);
  const genCard = () => {
    let box: any[] = [];
    props.req.forEach((req: any, i: number) => {
      box.push(
        <div className="request-card">
          <div
            style={{
              display: "flex",
              fontWeight: 500
            }}
          >
            <img src={Avatar} />
            <div style={{ marginBottom: "6px" }}>
              {req.topic}
              <div className="text">
                <span style={{ marginRight: "14px" }}>ไซต์งาน</span>
                {req.address}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontWeight: 300,
              marginTop: "16px"
            }}
          >
            <div>
              <span style={{ marginRight: "14px" }}>บริษัท</span>
              {req.from}
            </div>
            <div>
              <span style={{ marginRight: "14px", marginLeft: "40px" }}>
                จำนวน
              </span>
              {req.man}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontWeight: 300,
              marginTop: "16px"
            }}
          >
            <div>
              <span style={{ marginRight: "20px" }}>วันที่</span>
              {req.date}
            </div>
            <div>
              <span style={{ marginRight: "14px", marginLeft: "16px" }}>
                เวลา
              </span>
              {req.time}
            </div>
          </div>
          {load ? (
            <h1>LOADING ...... </h1>
          ) : (
            <div className="button-box">
              <div className="button">ลบ</div>
              <div
                className="button color"
                onClick={async () => {
                  setLoad(true);
                  setTimeout(() => {
                    setLoad(false);
                    history.push("/exchange");
                  }, 1000);
                  //   await startRequest(req.contract_address);
                  //   await contribute(req.contract_address, 3, "teststt");
                  //   await accept(req.contract_address);
                }}
              >
                ตอบรับคำร้องขอ
              </div>
            </div>
          )}
        </div>
      );
    });
    return <div style={{ display: "flex" }}>{box}</div>;
  };
  return <>{genCard()}</>;
};

export default RequestCard;
