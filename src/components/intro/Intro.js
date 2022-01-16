import React from "react";
import profileLogo from "../../assests/logo-mastercraft.svg";
import bookmarkLogo from "../../assests/icon-bookmark.svg";
import styles from "./Intro.module.css";
import Container from "../UI/Container";
import Button from "../UI/Button";

function Intro() {
  return (
    <section>
      <Container className={styles.intro}>
        <div className={styles.logo}>
          <img src={profileLogo} alt="mastercraft" />
        </div>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautifylly handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className={styles.actions}>
          <Button type="button">Back this project</Button>
          <button id={styles.bookmark} type="button">
            <img src={bookmarkLogo} alt="bookmark" />
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Intro;
