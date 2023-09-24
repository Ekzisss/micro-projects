import style from './style.module.scss';
import { useState } from 'react';

export default function TextWithDetails({ text, details }: { text: string; details: string }) {
  const [show, setShow] = useState(false);

  return (
    <div className={style.main}>
      <div className={style.text_space}>
        <p>{text}</p>
        <button
          className={style.btn}
          onClick={() => setShow(!show)}
        >
          +
        </button>
      </div>
      <div
        style={{ display: `${show ? 'block' : 'none'}` }}
        className={style.details}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt reiciendis temporibus porro
          laborum suscipit dolorum laudantium, cumque facilis voluptates ipsa recusandae possimus voluptas
          dolorem consectetur ipsum provident nam dicta similique?
        </p>
      </div>
    </div>
  );
}
