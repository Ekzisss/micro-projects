'use client';
import { useState } from 'react';
import './counter.scss';
import Btn from '@/components/btn';

export default function Counter() {
  const [counter, setcounter] = useState(0);

  return (
    <main className="counter__body">
      <div className="counter">
        <h1 className="proj__name">Counter</h1>
        <div className="counter__number">{counter}</div>
        <div className="counter__btns">
          <Btn
            onClick={() => setcounter(counter - 1)}
            content="decrease"
          ></Btn>
          <Btn
            onClick={() => setcounter(0)}
            content="reset"
          ></Btn>
          <Btn
            onClick={() => setcounter(counter + 1)}
            content="increase"
          ></Btn>
        </div>
      </div>
    </main>
  );
}
