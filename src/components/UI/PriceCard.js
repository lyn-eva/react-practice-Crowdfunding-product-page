import styles from "./PriceCard.module.css";
import Button from "./Button";

function PriceCard(props) {
  return (
    <li className={`${styles.card} ${styles[props.className] || ''}`}>
      <div className={styles.detail}>
        {props.enableRadio && (
          <input type="radio" name="select-pledge" value="sus"/>
        )}
        <div className={styles.context}>
          <div className={styles.header}>
            <h3>{props.itemName}</h3>
            {props.restriction && <p>{props.restriction}</p>}
          </div>
          <p>{props.descr}</p>
          {props.amount && (
            <p className={styles.amount}>
              <span>{props.amount}</span> left
            </p>
          )}
        </div>
      </div>
      <div className={styles.logic}>
        <hr />
        <form>
          <label>Enter your pledge</label>
          <div className={styles["form-action"]}>
            <input type="number" placeholder="$0.00" />
            <Button type="submit" className={styles["reward-btn"]}>
              Continue
            </Button>
          </div>
        </form>
      </div>
    </li>
  );
}

export default PriceCard;
