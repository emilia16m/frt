import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css'

const Nav = () => {
    return <nav className={s.nav}>
    <ul>
      <li><NavLink to='/profile'>Профиль</NavLink></li>
      <li><NavLink to='/dialogs'>Сообщения</NavLink></li>
      <li><NavLink to='/news'>Новости</NavLink></li>
      <li><NavLink to='/music'>Музыка</NavLink></li>
      <li><NavLink to='/settings'>Настройки</NavLink></li>
    </ul>
  </nav>
}

export default Nav;
 
 
