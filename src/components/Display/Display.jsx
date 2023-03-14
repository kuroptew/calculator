import styles from './Display.module.scss'

const Display = () => {
  return (
    <div className={styles['display__wrapper']}>
      <div className={styles.display}>0</div>
    </div>
  );
};

export default Display;