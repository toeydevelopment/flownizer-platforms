import React, { Component } from "react";
import "./sending-card.scss";
import { COLOR_PRIMARY } from "../../../constants";
import { Link } from 'react-router-dom';
import Avatar from '../../../assets/avatar_man.png'

const request = [
    {
        topic: 'ต้องการพนักงานรักษาความปลอดภัย',
        address: 'เขตปทุมวัน กทม',
        from: 'AP',
        man: '2 คน',
        date: '19 กุมภาพันธ์ 2563',
        time: '8:00 น. - 20:00 น.'
    },
    {
        topic: 'ต้องการพนักงานรักษาความปลอดภัย',
        address: 'เขตพญาไท กทม',
        from: 'C',
        man: '1 คน',
        date: '20 กุมภาพันธ์ 2563',
        time: '7:00 น. - 19:00 น.'
    },
]

class SendingCard extends Component<any> {
    genCard() {
        let box: any[] = []
          request.forEach((req:any,i) => {
              box.push(
                <div className='request-card'>
                    <div style={{
                    display: 'flex',
                    fontWeight: 500
                    }}>
                    <img src={Avatar}/>
                    <div style={{marginBottom: '6px'}} >
                        {req.topic} 
                        <div className='text'>
                        <span style={{marginRight: '14px'}}>
                        ไซต์งาน
                        </span>
                        {req.address}
                        </div>
                    </div>
                    </div>
                    <div style={{
                    display: 'flex',
                    fontWeight: 300,
                    marginTop: '16px'
                    }}>
                    <div>
                        <span style={{marginRight: '14px'}}>
                        บริษัท 
                        </span>
                        {req.from}
                    </div>
                    <div>
                        <span style={{marginRight: '14px', marginLeft: '40px'}}>
                        จำนวน 
                        </span>
                        {req.man}
                    </div>
                    </div>
                    <div style={{
                    display: 'flex',
                    fontWeight: 300,
                    marginTop: '16px'
                    }}>
                    <div>
                        <span style={{marginRight: '20px'}}>
                        วันที่ 
                        </span>
                        {req.date}
                    </div>
                    <div>
                        <span style={{marginRight: '14px', marginLeft: '16px'}}>
                        เวลา
                        </span>
                        {req.time}
                    </div>
                    </div>
                    <div className='button-box'>
                    <div className='button color'>
                        ยกเลิกคำขอ
                    </div>
                    </div>
                </div>
              )
          })
        return <div style={{display:'flex'}}>{box}</div>
      }
    render() {
        return(
            <>{this.genCard()}</>
    )}
}

export default SendingCard