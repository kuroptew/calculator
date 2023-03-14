import styles from './EqualButton.module.scss'

const EqualButton = () => {
  return (
    <div className={styles['equal__wrapper']}>
      <button className={styles.equal}>=</button>
    </div>
  );
};

export default EqualButton ;