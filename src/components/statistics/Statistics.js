import styles from "./Statistics.module.css";
import Container from "../UI/Container";

function Statistics() {
  return (
    <section>
      <Container className={styles.statistics}>
      <div className={styles.statistic}>
        <h2>$89,914</h2>
        <p>of $100,000 backed</p>
      </div>
      <hr/>
      <div className={styles.statistic}>
        <h2>5,007</h2>
        <p>total backers</p>
      </div>
      <hr/>
      <div className={styles.statistic}>
        <h2>56</h2>
        <p>days left</p>
      </div>
      <div className={styles["progress-bar"]}>
        <div className={styles.progress}></div>
      </div>
      </Container>
    </section>
  );
}
export default Statistics;
