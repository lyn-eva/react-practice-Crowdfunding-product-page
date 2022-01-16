import styles from "./About.module.css";
import Container from "../UI/Container";
import PriceCard from "../UI/PriceCard";

function About() {
  return (
    <section>
      <Container className={styles.about}>
        <h2>About this project</h2>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        <div className={styles["pledge-section"]}>
          <PriceCard
            itemName="Bamboo Stand"
            restriction="Pledge $25 or more"
            descr="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
            amount="101"
          />
          <PriceCard 
            itemName="Black Edition Stand"
            restriction="pledge $75 or more"
            descr="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included"
            amount="64"
          />
          <PriceCard
            itemName="Mahogany Special Edition"
            restriction="Pledge $200 or more"
            descr="You get two Special Edition Mahogany stands, a Backer T0Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included"
            amount="0"
          />          
        </div>
      </Container>
    </section>
  );
}

export default About;
