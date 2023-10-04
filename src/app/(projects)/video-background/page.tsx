'use client';
import { useState, useRef } from 'react';
import style from './style.module.scss';
import Btn from '@/components/btn';

export default function VideoBc() {
  const vidRef = useRef<any>(null);
  const [isVideoPaused, setIsVideoPaused] = useState(false);

  vidRef && vidRef.current ? (isVideoPaused ? vidRef.current.pause() : vidRef.current.play()) : '';

  return (
    <main className={style.main}>
      <video
        autoPlay
        muted
        loop
        preload="auto"
        className={style.video}
        ref={vidRef}
      >
        <source
          src="videoBc.mp4"
          type="video/mp4"
        />
      </video>
      <h1 className="proj__name">Video Background</h1>
      <Btn
        onClick={() => setIsVideoPaused(!isVideoPaused)}
        content={isVideoPaused ? 'Resume' : 'Pause'}
      ></Btn>
    </main>
  );
}
