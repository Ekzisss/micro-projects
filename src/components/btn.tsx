import React from 'react';
import styles from './btn.module.scss';

export default function Btn({
  content,
  onClick = () => {},
  style = {},
}: {
  content: string;
  onClick?: Function;
  style?: any;
}) {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={styles.btn}
      style={style}
    >
      {content}
    </button>
  );
}
