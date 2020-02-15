import React from "react";
import './area-card.scss'

function AreaCard() {
  return (
    <div className='area-card'>
        อาคาร A
        <div className='box'>
            ผู้รับผิดชอบ
            <span>นรสิงห์ โพธิ์ไทยแท้</span>
        </div>
        <div className='box'>
            จำนวน
            <span>9 คน</span>
        </div>
    </div>
  );
}

export default AreaCard;