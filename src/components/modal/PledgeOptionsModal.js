import { Fragment } from "react";
import { createPortal } from "react-dom";
import closeIcon from "../../assests/icon-close-menu.svg";
import styles from "./PledgeOptionsModal.module.css";
import Container from "../UI/Container";
import Backdrop from "./Backdrop";
import PriceCard from "../UI/PriceCard";

function PledgeOptionsModal(props) {

  return (
    <>
      {createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop")
      )}
      {createPortal(
        <Container className={styles.pledgeOptionsModal}>
          <div id="temp" className={styles.context}>
            <h2>Back this project</h2>
            <button id={styles.close} type="button" onClick={props.onClick}>
              <img src={closeIcon} alt="close" />
            </button>
            <p>
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
          </div>
          <ul>
            <PriceCard
              onConfirm={props.onClick}
              className="modalView"
              enableRadio={true}
              itemName="Pledge with no reward"
              descr="Choose to support us without a reward if you simply believe in our project.As a backer, you will be signed up to receive product updates via email."
              min='1'
              />
            <PriceCard
              onConfirm={props.onClick}
              className="modalView"
              enableRadio={true}
              itemName="Bamboo Stand"
              restriction="Pledge $25 or more"
              descr="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
              amount="101"
              min='25'
              />
            <PriceCard
              onConfirm={props.onClick}
              className="modalView"
              enableRadio={true}
              itemName="Black Edition Stand"
              restriction="pledge $75 or more"
              descr="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included"
              amount="64"
              min='75'
              />
            <PriceCard
              onConfirm={props.onClick}
              className="modalView"
              enableRadio={true}
              itemName="Mahogany Special Edition"
              restriction="Pledge $200 or more"
              descr="You get two Special Edition Mahogany stands, a Backer T0Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included"
              amount="0"
              min='200'
              />
          </ul>
        </Container>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default PledgeOptionsModal;
