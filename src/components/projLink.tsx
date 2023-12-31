import React from 'react';
import Link from 'next/link';
import style from './projLink.module.scss';

export default function ProjLink({
  content,
  href,
  rel = '',
}: {
  content: string;
  href: string;
  rel?: string;
}) {
  return (
    <Link
      className={style.project}
      href={href}
      rel="preload"
    >
      <div className={style.project__name}>{content}</div>
      <div className={style.animation}>
        <div className={`${style.animation__effect} ${style.animation__effect_1}`}></div>
        <div className={`${style.animation__effect} ${style.animation__effect_2}`}></div>
        <div className={`${style.animation__effect} ${style.animation__effect_3}`}></div>
        <div className={`${style.animation__effect} ${style.animation__effect_4}`}></div>
        <div className={`${style.animation__effect} ${style.animation__effect_5}`}></div>
        <div className={`${style.animation__effect} ${style.animation__effect_6}`}></div>
      </div>
    </Link>
  );
}
