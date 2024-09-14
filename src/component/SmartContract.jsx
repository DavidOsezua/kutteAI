import React from "react";
import styles from "./SmartContract.module.css";
import Button from "./Button";

const SmartContract = () => {
  return (
    <section className={`section ${styles.smartContractSection}`}>
      <div className={`sectionContainer`}>
        <div className={`contentContainer flex flex-col items-center`}>
          <h2 className={`title text-[#3B2621]`}>Smart Contract</h2>

          <Button colored text={`Join Presale`} />
        </div>
      </div>
    </section>
  );
};

export default SmartContract;
