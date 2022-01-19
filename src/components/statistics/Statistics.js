import { useContext, useState, useEffect } from "react";
import styles from "./Statistics.module.css";
import Container from "../UI/Container";
import Context from "../store/Context";

function Statistics() {
  const ctx = useContext(Context);
  const [barLen, setBarLen] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setBarLen(ctx.total/1000);
    }, 0);
  }, [ctx.total])

  return (
    <section>
      <Container className={styles.statistics}>
        <div className={styles["statistic-ctr"]}>
          <div className={styles.statistic}>
            <h2>${ctx.total.toLocaleString()}</h2>
            <p>of $100,000 backed</p>
          </div>
          <hr />
          <div className={styles.statistic}>
            <h2>{ctx.backer.toLocaleString()}</h2>
            <p>total backers</p>
          </div>
          <hr />
          <div className={styles.statistic}>
            <h2>{ctx.dayLeft.toLocaleString()}</h2>
            <p>days left</p>
          </div>
        </div>
        <div className={styles["progress-bar"]}>
          <div className={styles.progress} style={{width: `${barLen}%`}}></div>
        </div>
      </Container>
    </section>
  );
}
export default Statistics;
