'use client';
import { useState } from 'react';
import './page.scss';
import BackBtn from '@/components/backBtn';

export default function ColorFlipper() {
  const [mode, setMode] = useState(false);
  const [color, setColor] = useState('#0c100a');

  function colorFlip() {
    if (!mode) {
      const num = convertTo16Bit(Math.floor(Math.random() * 15)).toString();
      setColor(`#${num + num + num + num + num + num}`);
    } else {
      setColor(
        `#${
          convertTo16Bit(Math.floor(Math.random() * 15)).toString() +
          convertTo16Bit(Math.floor(Math.random() * 15)).toString() +
          convertTo16Bit(Math.floor(Math.random() * 15)).toString() +
          convertTo16Bit(Math.floor(Math.random() * 15)).toString() +
          convertTo16Bit(Math.floor(Math.random() * 15)).toString() +
          convertTo16Bit(Math.floor(Math.random() * 15)).toString()
        }`
      );
    }
  }

  return (
    <div
      className="color-flipper__body"
      style={{ background: color }}
    >
      <h1 className="color-flipper__name">Color flipper</h1>
      <div className="color-flipper__main">
        <div className="color-flipper__main__choice">
          <button
            onClick={() => setMode(false)}
            className={!mode ? 'color-flipper__main__choice-btn_active' : ''}
          >
            Simple
          </button>
          <button
            onClick={() => setMode(true)}
            className={mode ? 'color-flipper__main__choice-btn_active' : ''}
          >
            Hex
          </button>
        </div>
        <div className="color-flipper__main__current-color">
          Current color:{' '}
          <span
            style={{ color: color }}
            className="color-flipper__color"
          >
            {color}
          </span>
        </div>
        <button
          className="color-flipper__main__flip"
          onClick={colorFlip}
        >
          click me
        </button>
      </div>
      <BackBtn></BackBtn>
    </div>
  );
}

function convertTo16Bit(num: Number) {
  switch (num) {
    case 10:
      return 'A';
    case 11:
      return 'B';
    case 12:
      return 'C';
    case 13:
      return 'D';
    case 14:
      return 'E';
    case 15:
      return 'F';
    default:
      return num;
  }
}
