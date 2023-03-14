import styles from './NumbersBoard.module.scss'

const NumbersBoard = () => {
  const numbers = [ ',',0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse()

  return (
    <div className={styles['numbers-board']}>
      {numbers.map((number, index)=> <button key={index} className={styles.number}>{number}</button>)}
    </div>
  );
};

export default NumbersBoard;