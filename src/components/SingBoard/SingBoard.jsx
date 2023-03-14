import styles from './SingBoard.module.scss'


const SingBoard = () => {
  const signs = ['/', 'x', '-', '+']

  return (
    <div className={styles['sing-board']}>
      {signs.map((sing, index)=> <button key={index} className={styles.sing}>{sing}</button>)}
    </div>
  );
};

export default SingBoard;