import React from 'react';
import logo from '../../assets/logopufi.png';
import style from './NavBar.module.css';
import puf from '../../assets/puf.png';
import umbrella from '../../assets/umbrella.png';
import bag from '../../assets/shopping-bag.png';
import nap from '../../assets/sleep.png';


export default function NavBar() {

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
      <img src={logo} alt='logo' className={style.logo}/>
      {/* MENU */}
        <div  className={style.li_navbar}>
          <div onClick={scrollToPuff} className={style.menucontainer}>
            <img src={puf} alt='puf'/>
            <h2>PUFI PUFF</h2>                       
          </div>
          <div onClick={scrollToRain} className={style.menucontainer}>
          <img src={umbrella} alt='umbrella'/>
            <h2>PUFI RAIN</h2>                       
          </div>
          <div onClick={scrollToCart} className={style.menucontainer}>
            <img src={bag} alt='bag'/>
            <h2>PUFI CART</h2>                       
          </div>
          <div onClick={scrollToNap} className={style.menucontainer}>
            <img src={nap} alt='nap'/>
            <h2>PUFI NAP</h2>                       
          </div>
        </div>
        {/* FIN MENU */}
      <div className={style.useraccess}>      
          <select>
            <option>Mi Cuenta</option>
            <option>Perfil</option>
            <option>Cerrar Sesion</option>
          </select>
        <h3>Mi Compra</h3>
      </div>
    </div>
  )
}

