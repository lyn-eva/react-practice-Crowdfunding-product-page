import { useState } from "react";
import profileLogo from "../../assests/logo-mastercraft.svg";
import bookmarkLogo from "../../assests/icon-bookmark.svg";
import styles from "./Intro.module.css";
import Container from "../UI/Container";
import Button from "../UI/Button";
import PledgeOptionsModal from "../modal/PledgeOptionsModal";

function Intro() {
  const [showOptionModal, setShowOptionModal] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const bookmarkHandler = () => {
    setBookmark(prevState => !prevState);
  }

  const clickHandler = () => {
    setShowOptionModal((prevState) => !prevState);
  };

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
          <Button onClick={clickHandler}>Back this project</Button>
          <button onClick={bookmarkHandler} id={styles.bookmark} type="button">
            <img src={bookmarkLogo} alt="bookmark" />
            <span>{bookmark? 'bookmarked' : 'bookmark'}</span>
          </button>
        </div>
      </Container>
      {showOptionModal && <PledgeOptionsModal onClick={clickHandler} />}
    </section>
  );
}

export default Intro;
