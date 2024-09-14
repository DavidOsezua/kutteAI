import React from "react";
import styles from "./Super.module.css";
import Button from "./Button";

const Super = () => {
  return (
    <section className={`section ${styles.superSection}`}>
      <div className={`sectionContainer`}>
        <div className={`${styles.colContainer}`}>
          <div className={`${styles.firstCol}`}>
            <div className={`${styles.textContainer}`}>
              <h2>A Super Cute Meme Coin</h2>
              <p>
                Get ready to blast off with Kutte Ai—the cutest and most
                thrilling new meme coin in the crypto universe! 🚀✨ Join the
                Kutte Ai mission today and secure your seat for a wild ride to
                the moon. <br />
                Don't miss out on the excitement—your Kutte Ai adventure starts
                now!
              </p>
            </div>
          </div>

          <div className={`${styles.secondCol}`}>
            <div className={`flex gap-3`}>
              <Button colored text={`How to buy`} />

              <Button text={`Staking`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Super;
