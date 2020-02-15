import React, { Component } from "react";
import './area-card.scss'

const section = [
  {
    name: 'อาคาร A',
    responsible: 'นรสิงห์ โพธิ์ไทยแท้',
    man: '9'
  },
  {
    name: 'อาคาร B',
    responsible: 'ชิษณุพงศ์ วรจิตร',
    man: '16'
  }
]
class AreaCard extends Component<any>  {
  genCard() {
    let box: any[] = []
      section.forEach((site:any,i) => {
          box.push(
              <div className='area-card'>
                  {site.name}
                  <div className='box'>
                      ผู้รับผิดชอบ
                      <span>{site.responsible}</span>
                  </div>
                  <div className='box'>
                      จำนวน
                      <span>{site.man} คน</span>
                  </div>
              </div>
          )
      })
    return <div>{box}</div>
  }

  render() {
    return (
      <>{this.genCard()}</>
    );
  }
}

export default AreaCard;