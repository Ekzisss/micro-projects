'use client';
import React from 'react';
import Carousel from '@/components/carousel';
import BackBtn from '@/components/backBtn';

export default function ReviewCarousel() {
  const info = [
    {
      img: '/1.jpg',
      name: 'Adam Jones',
      profession: 'web developer',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsam, est aut at doloribus consequatur quae odit inventore natus nemo reprehenderit, adipisci ut optio! Iste architecto sequi voluptatum doloremque.',
    },
    {
      img: '/2.jpg',
      name: 'Christopher Nolan',
      profession: 'Film director',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsam, est aut at doloribus consequatur quae odit inventore natus nemo reprehenderit, adipisci ut optio! Iste architecto sequi voluptatum doloremque.',
    },
    {
      img: '/3.png',
      name: 'Susan Smith',
      profession: 'web developer',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsam, est aut at doloribus consequatur quae odit inventore natus nemo reprehenderit, adipisci ut optio! Iste architecto sequi voluptatum doloremque.',
    },
  ];

  return (
    <main>
      <h1 className="proj__name">Review carousel</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Carousel info={info}></Carousel>
      </div>
      <BackBtn></BackBtn>
    </main>
  );
}
