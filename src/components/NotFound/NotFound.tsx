import { PiWarningCircleLight } from 'react-icons/pi';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.error}>
      <PiWarningCircleLight className={styles.erroricon} data-testid="icon-element" />
      <br />
      <p>No weather data found</p>
    </div>
  );
};

export default NotFound;
