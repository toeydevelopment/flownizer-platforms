import React, { Component } from "react";
import NavBar from "../../components/navbar";
import './schedule.scss'

class Schedule extends Component {
  render() {
    return (
      <div style={{
        display:'flex'
      }}>
        <NavBar />
        <div className='title'>
          ห้างสรรพสินค้า ก
        </div>
        <div className='schedule'>
          <div className='button'>

          </div>
        </div>
        
      </div>
    );
  }
}

export default Schedule;
// https://eorisis.com/images/web-design/joomla-extensions/google-maps/screenshots/google-maps-content-plugin-joomla-extension-map-demo.png
