'use client';
import style from './style.module.scss';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  tab: string;
  text: string;
  img: string;
}

export default function ContentToggle({
  content,
  weight = 700,
  height = 250,
  imgWeightProcet = '50%',
}: {
  content: Props[];
  weight?: number;
  height?: number;
  imgWeightProcet?: string;
}) {
  const [tab, setTab] = useState(0);
  const imgWeight = (Number(imgWeightProcet.slice(0, -1)) / 100) * weight;

  console.log((Number('50%'.slice(0, -1)) / 100) * weight);

  return (
    <div
      style={{ width: weight }}
      className={style.main}
    >
      <div className={style.leftSide}>
        <Image
          // fill
          width={imgWeight}
          height={height}
          // sizes="10vw"
          // layout="full"
          alt="image"
          src={content[tab].img}
          className={style.img}
        ></Image>
      </div>
      <div className={style.rightSide}>
        <ul className={style.tabs}>
          {content.map((item, index) => (
            <li
              key={index}
              onClick={() => setTab(index)}
              className={`${style.tabs__item} ${tab == index ? style.tabs__item_active : ''}`}
            >
              {item.tab}
            </li>
          ))}
        </ul>
        <p className={style.content}>{content[tab].text}</p>
      </div>
    </div>
  );
}
