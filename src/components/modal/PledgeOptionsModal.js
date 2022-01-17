import { Fragment } from "react";
import { createPortal } from "react-dom";
import closeIcon from "../../assests/icon-close-menu.svg";
import styles from "./PledgeOptionsModal.module.css";
import Container from "../UI/Container";
import Backdrop from "./Backdrop";
import PriceCard from "../UI/PriceCard";

function PledgeOptionsModal() {
  return (
    <>
      createPortal(
      <Backdrop />, document.getElementById('backdrop')) createPortal(
      <Container className={styles.pledgeOptionsModal}>
        <div className={styles.context}>
          <h2>Back this project</h2>
          <img id={styles.close} src={closeIcon} alt="close"/>
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
            the world?
          </p>
        </div>
        <ul>
          <PriceCard
            className="pledge-card"
            itemName="Bamboo Stand"
            restriction="Pledge $25 or more"
            descr="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
            amount="101"
            />
          <PriceCard 
            className="pledge-card"
            itemName="Black Edition Stand"
            restriction="pledge $75 or more"
            descr="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included"
            amount="64"
            />
          <PriceCard
            className="pledge-card"
            itemName="Mahogany Special Edition"
            restriction="Pledge $200 or more"
            descr="You get two Special Edition Mahogany stands, a Backer T0Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included"
            amount="0"
          />          
        </ul>
      </Container>
      , document.getElementById('modal'))
    </>
  );
}

export default PledgeOptionsModal;
