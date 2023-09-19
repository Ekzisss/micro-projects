import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './backBtn.module.scss';

export default function BackBtn() {
  return (
    <Link
      href="/"
      className={styles.backBtn}
    >
      <FontAwesomeIcon icon={faAngleLeft} />
    </Link>
  );
}
