import React from 'react'
import style from './Productimg.module.css'

export default function Productimg({img, button}) {
  return (
    <div className={style.main}>
        <img src={img} alt="productimg"></img>
        {button && <button>SHOP</button>}
    </div>
  )
}
