import React from 'react'
import style from './Footer.module.css'
import imgshop from '../../assets/compra.png'
import logo from '../../assets/logopufiblack.png'
import facebooklogo from '../../assets/facebook.png'
import twitterlogo from '../../assets/twitter.png'
import instagramlogo from '../../assets/instagram.png'

export default function Footer() {

    function scrollToRain(){
        window.scroll({top: 800, behavior:'smooth'});
    };

    function scrollToPuff(){
        window.scroll({top: 1300, behavior:'smooth'});
    };

    function scrollToCart(){
        window.scroll({top: 2000, behavior:'smooth'});
    };

    function scrollToNap(){
        window.scroll({top: 2500, behavior:'smooth'});
    };

return (
    <div className={style.main}>
        <div className={style.containerlogo}>
            <img className={style.logo} src={logo} alt="logo"></img>
        </div>
        <div className={style.list}>
            <ul>
                <li onClick={scrollToRain}>PUFI RAIN</li>
                <li onClick={scrollToPuff}>PUFI PUFF</li>
                <li onClick={scrollToCart}>PUFI CART</li>
                <li onClick={scrollToNap}>PUFI NAP</li>
            </ul>
        </div>

        <div className={style.list}>
            <ul>
                <li>CONTACTO</li>
                <li>AYUDA</li>
                <li>COMO COMPRAR</li>
                <li>TERMINOS Y CONDICIONES</li>
            </ul>
        </div>

        <div>
            <img src={imgshop} alt="imgshop"></img>
        </div>

        <div className={style.social}>
            <h1>Seguinos en </h1>
            <img src={facebooklogo} alt="fblogo"></img>
            <img src={twitterlogo} alt="twlogo"></img>
            <img src={instagramlogo} alt="iglogo"></img>
        </div>
    </div>
  )
}

