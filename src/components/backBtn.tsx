import Link from 'next/link';
import styles from './backBtn.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export default function BackBtn() {
  return (
    <Link
      href="/"
      className={styles.backBtn}
    >
      <FontAwesomeIcon
        style={{ width: '12.5px' }}
        icon={faAngleLeft}
      />
    </Link>
  );
}
