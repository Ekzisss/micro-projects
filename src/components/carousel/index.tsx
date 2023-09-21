'use clinet';
import style from './style.module.scss';
import Btn from '../btn';
import Image from 'next/image';
import { useState } from 'react';
import { words } from './words';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

interface Props {
  img: string;
  name: string;
  profession: string;
  text: string;
}

export default function Carousel({
  info,
  width = 500,
  height = 380,
}: {
  info: Props[];
  width?: number;
  height?: number;
}) {
  const [slieCount, setslieCount] = useState(1);
  const [texts, setTexts] = useState(info.map((item) => item.text));
  const count = info.length;

  const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

  function generateText() {
    let sentence = '';
    for (let i = 0; i < 30; i++) {
      sentence += ` ${words[Math.round(Math.random() * words.length)]}`;
    }

    setTexts(
      texts.map((item, index) => {
        return slieCount - 1 == index ? sentence : item;
      })
    );
  }

  return (
    <div
      style={{ height: `${height}px` }}
      className={style.frame}
    >
      <div
        style={{ transform: `translate(${width * -(slieCount - 1)}px, 0)`, width: `${width * count}px` }}
        className={style.carusel}
      >
        {info.map((item, index) => (
          <section
            key={index}
            className={style.item}
            style={{ width: `${width}px` }}
          >
            <Image
              alt="avatar"
              src={item.img}
              width={100}
              height={100}
            ></Image>
            <h2 className={style.name}>{item.name}</h2>
            <h2 className={style.profession}>{item.profession}</h2>
            <p className={style.text}>{texts[index]}</p>
          </section>
        ))}
      </div>
      <div className={style.btns}>
        <button
          onClick={() => setslieCount(clamp(slieCount - 1, 1, count))}
          className={style.back}
        >
          <FontAwesomeIcon
            style={{ width: '10px' }}
            icon={faAngleLeft}
          />
        </button>
        <button
          onClick={() => setslieCount(clamp(slieCount + 1, 1, count))}
          className={style.forward}
        >
          <FontAwesomeIcon
            style={{ width: '10px' }}
            icon={faAngleLeft}
          />
        </button>
      </div>
      <Btn
        onClick={generateText}
        content="generate"
      ></Btn>
    </div>
  );
}
