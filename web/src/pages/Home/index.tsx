import React from "react";
import CardHomeComponent from "./components/card-home";
import NavBar from "../../components/navbar";
import Map from '../../assets/map.png'
import './index.scss'

function HomePage() {
  return (
    <div className='home'>
      <img src={Map} className='map'/>
      <div className='card'>
        <CardHomeComponent />
        <CardHomeComponent />
        <CardHomeComponent />
        <CardHomeComponent />
      </div>
    </div>
  );
}

export default HomePage;
// https://eorisis.com/images/web-design/joomla-extensions/google-maps/screenshots/google-maps-content-plugin-joomla-extension-map-demo.png
