import React from 'react';
import style from './style.module.scss';

export default function LoadingComp() {
  return (
    <div className={style.main}>
      <div className={style.load}>
        <div className={`${style.cirlce} ${style.cirlce1}`}></div>
        <div className={`${style.cirlce} ${style.cirlce2}`}></div>
        <div className={`${style.cirlce} ${style.cirlce3}`}></div>
        <div className={`${style.cirlce} ${style.cirlce4}`}></div>

        <div className={`${style.cirlce} ${style.cirlce5}`}></div>
        <div className={`${style.cirlce} ${style.cirlce6}`}></div>
        <div className={`${style.cirlce} ${style.cirlce7}`}></div>
        <div className={`${style.cirlce} ${style.cirlce8}`}></div>
      </div>
    </div>
  );
}
