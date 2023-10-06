'use client';
import React from 'react';
import style from './style.module.scss';
import { useEffect, useState } from 'react';

export default function ScrollProj() {
  return (
    <>
      <div className={style.header}>
        <div className={style.icon}></div>
        <nav className={style.nav}>
          <a
            className={style.nav__link}
            href="#Home"
          >
            Home
          </a>
          <a
            className={style.nav__link}
            href="#About"
          >
            About
          </a>
          <a
            className={style.nav__link}
            href="#Services"
          >
            Services
          </a>
          <a
            className={style.nav__link}
            href="#Tours"
          >
            Tours
          </a>
        </nav>
      </div>
      <div
        id="Home"
        className={style.main}
      >
        <h1 className="proj__name">Scroll Project</h1>
      </div>
      <section
        id="About"
        className={style.section}
      >
        <h2 className={style.section__name}>About</h2>
      </section>
      <section
        id="Services"
        className={style.section}
      >
        <h2 className={style.section__name}>Services</h2>
      </section>
      <section
        id="Tours"
        className={`${style.section} ${style.section_borderless}`}
      >
        <h2 className={style.section__name}>Tours</h2>
      </section>
    </>
  );
}
