import React from "react";
import NavBar from "../../components/navbar";
import './project-details.scss'
import AreaCard from './components/area-card';

function ProjectDetails() {
  return (
    <div style={{
      display: 'flex',
    }}>
      <NavBar />
      <div className='title'>
        ห้างสรรพสินค้า ก
      </div>
      <div className='project-details'>
        <div className='details'>
          รายละเอียดโครงการ
          <div>
            <span>
            ขอบเขตงาน
            </span>
            รักษาความปลอดภัยอาคาร
          </div>
          <div>
            <span>
            พื้นที่ทั้งหมด
            </span>
            1094 ตร.ม.
          </div>
          <div>
            <span>
            จำนวนคน
            </span>
            15 คน
          </div>
          <div>
            <span>
            ตั้งแต่วันที่
            </span>
            1 ธันวาคม 2562
          </div>
          <div>
            <span>
            ถึงวันที่
            </span>
            1 ตุลาคม 2563
          </div>
          <div>
            <span>
            สถานที่ตั้ง
            </span>
            987 ถนนพระราม 1 แขวงปทุมวัน เขตปทุมวัน กทม
          </div>
          <div style={{
            fontWeight: 400
          }}>
            เอกสารเพิ่มเติม
          </div>
          <div style={{
            display: 'flex'
          }}>
            <div className='button'>
              ขอบเขตงาน
            </div>
            <div className='button'>
              มาตรฐานการดำเนินงาน
            </div>
          </div>
        </div>
        <div className='area'>
          พื้นที่
          <AreaCard />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
// https://eorisis.com/images/web-design/joomla-extensions/google-maps/screenshots/google-maps-content-plugin-joomla-extension-map-demo.png
