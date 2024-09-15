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
              <h2>A Super Cute Meme Coin</h2>
              <p>
                Get ready to blast off with Kutte Ai—the cutest and most
                thrilling new meme coin in the crypto universe! 🚀✨ Join the
                Kutte Ai mission today and secure your seat for a wild ride to
                the moon. <br />
                <span className={`font-bold text-[#3A3A3A]`}>
                  Don't miss out on the excitement—your Kutte Ai adventure
                  starts now!
                </span>
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
