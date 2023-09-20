import React from 'react';
import styles from './btn.module.scss';

export default function Btn({ content, onClick = () => {} }: { content: string; onClick?: Function }) {
  console.log(onClick);

  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={styles.btn}
    >
      {content}
    </button>
  );
}
