import React from 'react';
import logo from '../../assets/logopufi.png';
import style from './NavBar.module.css';
import puf from '../../assets/puf.png';
import umbrella from '../../assets/umbrella.png';
import bag from '../../assets/shopping-bag.png';
import nap from '../../assets/sleep.png';

export default function NavBar() {
  return (
    <div className={style.main}>
      <img src={logo} alt='logo' className={style.logo}/>
      {/* MENU */}
        <div className={style.li_navbar}>
          <div className={style.menucontainer}>
            <img src={puf} alt='puf'/>
            <h2>PUFI PUFF</h2>                       
          </div>
          <div className={style.menucontainer}>
          <img src={umbrella} alt='puf'/>
            <h2>PUFI RAIN</h2>                       
          </div>
          <div className={style.menucontainer}>
            <img src={bag} alt='puf'/>
            <h2>PUFI CART</h2>                       
          </div>
          <div className={style.menucontainer}>
            <img src={nap} alt='puf'/>
            <h2>PUFI NAP</h2>                       
          </div>
        </div>
        {/* FIN MENU */}
      <div className={style.useraccess}>      
          <select>
            <option>MI CUENTA</option>
            <option>Perfil</option>
            <option>Cerrar Sesion</option>
          </select>
        <h3>MI COMPRA</h3>
      </div>
    </div>
  )
}

