import React from "react";
import NavBar from "../../components/navbar";
import './project-details.scss'
import AreaCard from './components/area-card';

function ProjectDetails() {
  return (
    <div style={{
      display: 'flex'
    }}>
      <NavBar />
      <div className='project-details'>
        <div className='details'>
          รายละเอียดโครงการ
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
