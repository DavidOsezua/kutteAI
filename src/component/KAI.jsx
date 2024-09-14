import React from "react";
import styles from "./KAI.module.css";
import Button from "./Button";
import { KaiImage } from "../assets";

const KAI = () => {
  return (
    <section className={`section ${styles.kaiSection}`}>
      <div className={`sectionContainer`}>
        <div className={`contentContainer flex flex-col items-center`}>
          <h2 className={`title text-[#3B2621]`}>Kutte Ai $KAI</h2>
          <p className={`text text-[#fff]`}>
            Meet Kutte Ai—your new favorite cosmic companion and the hottest
            cryptocurrency in the galaxy! With its smart Moonomics and limited
            token supply, Kutte Ai is making waves as the rising star of meme
            coins.Ready to explore the future of crypto? Dive into all the
            cosmic details in our Whitepaper!
          </p>

          <div>
            <img src={KaiImage} />
          </div>

          <div className="flex gap-3">
            <Button colored text={`Join Presale`} />
            <Button text={`Whitepaper`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KAI;
