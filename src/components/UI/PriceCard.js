import styles from "./PriceCard.module.css";
import Button from "./Button";

function PriceCard(props) {
  return <div className={styles.card}>
    <div className={styles.header}>
      <h3>{props.itemName}</h3>
      <p>{props.restriction}</p>
    </div>
    <p>{props.descr}</p>
    <p><span className={styles.amount}>{props.amount}</span> left</p>
    <Button type="button">Select Reward</Button>
  </div>;
}

export default PriceCard;
