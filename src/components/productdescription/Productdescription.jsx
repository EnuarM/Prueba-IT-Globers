import React from 'react'
import style from './Productdescription.module.css'

export default function productimage({img, title, description, buttontitle}) {
    return (
        <div className={style.main}>
            <img src={img}></img>
            <h1>{title}</h1><hr/>
            <p>{description}</p>
            <button>{buttontitle}</button>
        </div>
    )
}
