import React from "react";
import styles from "./Earn.module.css";
import Button from "./Button";
import { earnImage, logo } from "../assets";

const Earn = () => {
  return (
    <section className={`section ${styles.earnSection}`}>
      <div
        className={`mt-[-7rem] flex justify-center bg-[#fff] w-[200px] p-[1rem] rounded-full mx-auto `}
      >
        <img src={logo} className={`w-[200px]`} />
      </div>
      <div className={`sectionContainer`}>
        <div className={`contentContainer flex flex-col items-center`}>
          <h2 className={`title text-[#3B2621]`}>
            Earn $KAI coin with <br />
            Kutte Ai Referrals!
          </h2>
          <p className={`text text-[#fff]`}>
            Invite friends to join the kutte Ai journey with your referral code!
            When they make a purchase of $25 or more, they’ll get an extra 50%
            in coins as a bonus.
          </p>

          <p className={`text text-[#fff]`}>
            Plus, every purchase through your code adds up, pushing you up the
            leaderboard. The top 20 referrers at the end of the month will win a
            special bonus: 10% of the total value purchased using their code,
            paid in $KAI coins, calculated at the launch price of $0.003. The
            more you refer, the more you earn—get in the race to the top!
          </p>

          <div>
            <img src={earnImage} className="w-[300px]" />
          </div>
          <Button colored text={`Start Referring`} />
        </div>
      </div>
    </section>
  );
};

export default Earn;
