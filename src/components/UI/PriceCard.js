import styles from "./PriceCard.module.css";
import Button from "./Button";

function PriceCard(props) {
  return <li className={`${styles.card} ${styles[props.className] || ''}`}>
    <div className={styles.detail}>
      {props.className &&<input type="radio" name="slect" value='sus' checked/>}
      <div className={styles.context}>
        <div className={styles.header}>
          <h3>{props.itemName}</h3>
          <p>{props.restriction}</p>
        </div>
        <p>{props.descr}</p>
        <p className={styles.amount}><span>{props.amount}</span> left</p>
      </div>
    </div>
    <div className={styles.logic}>
      {props.className && <hr />}
      <form>
        {props.className && <label>Enter your pledge</label>}
        {props.className && <input type="number" placeholder='$0.00'/>}
      <Button type='submit' className={styles['reward-btn']}>Continue</Button>
      </form>
    </div>
  </li>;
}

export default PriceCard;
