import styles from "./Backdrop.module.css";

function Backdrop(props) {
  return <div onClick={props.onClick} id={styles.backdrop}></div>;
}

export default Backdrop;
