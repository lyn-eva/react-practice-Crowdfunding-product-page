import { Fragment } from "react";
import { createPortal } from "react-dom";
import checkIcon from "../../assests/icon-check.svg";
import styles from "./Modal.module.css";
import Container from "../UI/Container";
import Button from "../UI/Button";
import Backdrop from "./Backdrop";

function Modal(props) {
  return (
    <>
      {createPortal(<Backdrop onClick={props.onClick}/>, document.getElementById("backdrop"))}
      {createPortal(
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
          <Button onClick={props.onClick}>Got it!</Button>
        </Container>,
        document.getElementById("modal")
      )}
      ;
    </>
  );
}

export default Modal;
