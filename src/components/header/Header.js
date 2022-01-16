import {useState} from "react";

import logo from "../../assests/logo.svg";
import menuIcon from "../../assests/icon-hamburger.svg"
import closeIcon from "../../assests/icon-close-menu.svg"
import styles from "./Header.module.css"
import Container from "../UI/Container";
import Card from "../UI/Card";

function Header() {
  const [menuDropped, setMenuDropped] = useState(false);

  const clickHandler = e => {
    e.preventDefault();
    setMenuDropped(prevState => !prevState);
  }

  return (
    <header className={styles.header}>
      <Container className={styles['nav-bar']}>
        <div><img src={logo} alt="crowdfund"/></div>
        <nav className={menuDropped ? styles['menu-dropped'] : ''}>
          <a href="" onClick={clickHandler} id={styles['action-btn']}><img src={menuDropped ? closeIcon : menuIcon} alt="menuIcon"/></a>
          <Card className={styles['drop-menu']}>
            <ul>
              <li><a href=''>About</a></li>
              <li><a href=''>Discover</a></li>
              <li><a href=''>Get Started</a></li>
            </ul>
          </Card>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
