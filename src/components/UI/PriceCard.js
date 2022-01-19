import { useState, useContext, useRef } from "react";
import styles from "./PriceCard.module.css";
import Button from "./Button";
import Context from "../store/Context";
import PledgeOptionsModal from "../modal/PledgeOptionsModal";

function PriceCard(props) {
  const ctx = useContext(Context);
  const [showOptionModal, setShowOptionModal] = useState(false);

  const onContinue = () => {
    setShowOptionModal((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (props.onConfirm) {
      props.onConfirm();
      ctx.updateItems(props.itemName);
      ctx.modalHandler();
    } else {
      onContinue();
      window.scrollTo(0, 0);
    }
  };

  return (
    <li className={`${styles.card} ${styles[props.className] || ""}`}>
      <div className={styles.detail}>
        {props.enableRadio && (
          <input type="radio" name="select-pledge" value="sus" />
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
        <form onSubmit={submitHandler}>
          <label>Enter your pledge</label>
          <div className={styles["form-action"]}>
            <input type="number" placeholder="$0.00" />
            <Button type="submit" className={styles["reward-btn"]}>
              Continue
            </Button>
          </div>
        </form>
      </div>
      {showOptionModal && <PledgeOptionsModal onClick={onContinue} />}
    </li>
  );
}

export default PriceCard;
