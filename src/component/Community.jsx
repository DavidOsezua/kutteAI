import React from "react";
import styles from "./Community.module.css";
import Button from "./Button";
import { communityImage } from "../assets";

const Community = () => {
  return (
    <section className={`section ${styles.communitySection} relative`}>
      <div className={`sectionContainer relative`}>
        <div className={`contentContainer `}>
          <h2 className={`title text-left`}>Join the community</h2>

          <p>Join Now</p>

          <div className={`flex gap-3 items-center pb-[4rem]`}>
            <Button colored text={`Telegram`} />
            <Button colored text={`Twitter(x)`} />
          </div>

          <div className="absolute right-[0] bottom-[0] transform -translate-y-1/2 w-[150px]">
            <img src={communityImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
