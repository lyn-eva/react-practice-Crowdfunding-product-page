import checkIcon from "../../assests/icon-check.svg";
import styles from "./Modal.module.css";
import Container from "../UI/Container";
import Button from "../UI/Button";

function Modal() {
  return (
    <Container className={styles.modal}>
      <div className={styles.check}>
        <img src={checkIcon} alt="checked" />
      </div>
      <h3>Thanks for your support!</h3>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide you will get an email once our campaign is
        completed.
      </p>
      <Button>Got it!</Button>
    </Container>
  );
}

export default Modal;
