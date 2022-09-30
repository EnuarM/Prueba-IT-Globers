import React from 'react'
import style from './Gallery.module.css'
import img1 from '../../assets/carousel1.jpg'
import img2 from '../../assets/pufbg.jpg'
import img3 from '../../assets/carousel3.jpg'
import img4 from '../../assets/umbrellagirls.jpg'
import img5 from '../../assets/bagsbg.jpg'
import img6 from '../../assets/napbg.jpg'


export default function Gallery() {
  return (
    <div className={style.main}>
        <div className={style.text}>
            <h1>INSTAGRAM</h1>
            <h2>#ESPUFI</h2>
        </div>
        <div className={style.grid}>
            <img src={img1} alt="img1"></img>
            <img src={img6} alt="img6"></img>
            <img src={img3} alt="img3"></img>
            <img src={img2} alt="img2"></img>
            <img src={img5} alt="img5"></img>
            <img src={img4} alt="img4"></img>
        </div>
    </div>
  )
}
