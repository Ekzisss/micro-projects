'use client';
import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import Btn from '@/components/btn';
import { useState } from 'react';

export default function Menu() {
  const [currentCat, setCurrentCat] = useState('');

  const menu = [
    {
      id: 1,
      title: 'buttermilk pancakes',
      category: 'breakfast',
      price: 15.99,
      img: '/restaruant-images/item-1.jpeg',
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: 'diner double',
      category: 'lunch',
      price: 13.99,
      img: '/restaruant-images/item-2.jpeg',
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: 'godzilla milkshake',
      category: 'shakes',
      price: 6.99,
      img: '/restaruant-images/item-3.jpeg',
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: 'country delight',
      category: 'breakfast',
      price: 20.99,
      img: '/restaruant-images/item-4.jpeg',
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: 'egg attack',
      category: 'lunch',
      price: 22.99,
      img: '/restaruant-images/item-5.jpeg',
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: 'oreo dream',
      category: 'shakes',
      price: 18.99,
      img: '/restaruant-images/item-6.jpeg',
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: 'bacon overflow',
      category: 'breakfast',
      price: 8.99,
      img: '/restaruant-images/item-7.jpeg',
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: 'american classic',
      category: 'lunch',
      price: 12.99,
      img: '/restaruant-images/item-8.jpeg',
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: 'quarantine buddy',
      category: 'shakes',
      price: 16.99,
      img: '/restaruant-images/item-9.jpeg',
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: 'bison steak',
      category: 'dinner',
      price: 22.99,
      img: '/restaruant-images/item-10.jpeg',
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const tags = [...new Set(menu.map((item) => item.category))];

  return (
    <main className={style.main}>
      <h1 className="proj__name2">Restaurant menu</h1>
      <ul className={style.tagsField}>
        {tags.map((item, index) => (
          <Btn
            key={index}
            content={item}
            onClick={() => setCurrentCat(item)}
          ></Btn>
        ))}
        <Btn
          content="Reset"
          onClick={() => setCurrentCat('')}
          style={{ color: 'red' }}
        ></Btn>
      </ul>
      <div className={style.menu}>
        {menu.map((item) =>
          item.category == currentCat || currentCat == '' ? (
            <div
              key={item.id}
              className={style.menu__item}
            >
              <div className={style.menu__left}>
                <Image
                  className={style.menu__img}
                  alt="avatar"
                  src={item.img}
                  width={150}
                  height={100}
                ></Image>
              </div>
              <div className={style.menu__right}>
                <div className={style.menu__top}>
                  <h2 className={style.menu__name}>{item.title}</h2>
                  <span className={style.menu__price}> {`${item.price}$`}</span>
                </div>
                <p className={style.menu__desc}>{item.desc}</p>
              </div>
            </div>
          ) : (
            ''
          )
        )}
      </div>
    </main>
  );
}
