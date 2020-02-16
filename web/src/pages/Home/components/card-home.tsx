import React, { Component } from "react";
import "./card-home-style.scss";
import { COLOR_PRIMARY } from "../../../constants";
import { Link } from 'react-router-dom';


const sites = [
  {
    place: 'ห้างสรรพสินค้า ก',
    address: '987 ถนนพระราม 1 แขวงปทุมวัน เขตปทุมวัน กทม',
    man: 22
  },
  {
    place: 'โรงแรม ข',
    address: '1 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร กทม',
    man: 9
  },
  {
    place: 'คอนโดแอล',
    address: '21 ถนนพระราม 1 แขวงปทุมวัน เขตปทุมวัน กทม',
    man: 18
  },
  {
    place: 'อาคารที่อยู่อาศัย มน',
    address: '23 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร กทม',
    man: 5
  }
]

class CardHomeComponent extends Component<any> {
  genCard() {
    let box: any[] = []
      sites.forEach((site:any,i) => {
          box.push(
              <Link className='card-home' to='/project'>
                <div className='left'>
                  <div>{i+1}</div>
                </div>
                <div className='right'>
                  {site.place}
                  <div className='box'>
                    ที่อยู่
                    <span>
                      {site.address}
                    </span>
                  </div>
                  <div className='box'>
                    จำนวน
                    <span>
                      {site.man}
                    </span>
                  </div>
                </div>
              </Link>
          )
      })
    return <div>{box}</div>
  }

  render () {
    return (
      <>
        {this.genCard()}
      </>
    );
  }
}

export default CardHomeComponent;
