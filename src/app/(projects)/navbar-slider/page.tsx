'use client';
import style from './page.module.scss';
import { useState } from 'react';

export default function NavbarSlider() {
  const [showNav, setShowNav] = useState(false);

  const mobileWidth = 768;

  return (
    <div className={style.origin}>
      <nav
        style={{ display: `${showNav ? 'flex' : 'none'}` }}
        className={style.nav}
      >
        <h2 className={style.nav__item}>Home</h2>
        <h2 className={style.nav__item}>About</h2>
        <h2 className={style.nav__item}>Projects</h2>
        <h2 className={style.nav__item}>Contact</h2>
        <button
          onClick={() => setShowNav(false)}
          className={style.close}
        >
          <div className={style.close__img}></div>
        </button>
      </nav>
      <main className={style.main}>
        <header className={style.header}>
          <button
            onClick={() => setShowNav(!showNav)}
            style={{ width: '24px', height: '30px' }}
          >
            <div className={style.burger}></div>
          </button>
        </header>
        <h1 className={style.title}>Navbar & slider</h1>
        <h3 style={{ textAlign: 'center', fontSize: '16px', marginTop: '10px' }}>
          navbar for mobile, slider for desktop
        </h3>
      </main>
    </div>
  );
}
