import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={`${styles.button} ${props.className || ""} ${props.Disable ? styles.disable : ''}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
