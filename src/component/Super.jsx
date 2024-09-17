import React from "react";
import styles from "./Super.module.css";
import Button from "./Button";
import { communityImage } from "../assets";

const Super = () => {
  return (
    <section className={`section ${styles.superSection}`}>
      <div className={`sectionContainer relative`}>
        <div className={`${styles.colContainer}`}>
          <div className={`${styles.firstCol} `}>
            <div className={`${styles.textContainer}`}>
              <h2>Cute watch guard meme coin</h2>
              <p>
                A blockchain watchdog ensuring transparency and security,
                blending governance with meme culture and playful engagement.
              </p>
            </div>
          </div>

          <div
            className={`${styles.secondCol} flex items-center justify-between`}
          >
            <div className={`flex gap-3 `}>
              <Button colored text={`How to buy`} />

              <Button text={`Staking`} />
            </div>

            <div className="">
              <img src={communityImage} className={`w-[85%]`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Super;
