import React from "react";
import styles from "./Sponsors.module.css";
import { sponsors } from "../data/data";

const Sponsors = () => {
  return (
    <section className={`section ${styles.sponsorSection}`}>
      <div className={`sectionContainer`}>
        <h2 className={`title text-[#444444]`}>Powered By</h2>

        <div className={`${styles.sponsorContainer}`}>
          {sponsors.map((item, i) => (
            <div
              key={i}
              className={`${styles.item}`}
              style={{ backgroundColor: item.color }}
            >
              <img src={item.image} className={`w-[70px]`}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
