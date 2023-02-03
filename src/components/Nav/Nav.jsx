import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
    return <nav className={s.nav}>
    <ul>
      <li><a>Профиль</a></li>
      <li><a>Сообщения</a></li>
      <li><a>Новости</a></li>
      <li><a>Музыка</a></li>
      <li><a>Настройки</a></li>
    </ul>
  </nav>
}

export default Nav;
