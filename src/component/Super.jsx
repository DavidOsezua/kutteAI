// import React, { useState } from "react";
// import styles from "./Super.module.css";
// import Button from "./Button";
// import { communityImage } from "../assets";
// import { useModal } from "../App";
// import Modal from "./Modal";

// const buttons = [
//   { ID: "HOB", text: "How To Buy", colored: true },
//   { ID: "Stkn", text: "Staking", colored: false },
// ];

// const Super = () => {
//   const [button, setButton] = useState("");
//   const [modal, setModal] = useState(false);

//   const modalHandler = () => {
//     setModal(!modal);
//   };

//   const selectButton = (text) => {
//     setButton(text);
//   };

//   return (
//     <>
//       <section className={`section ${styles.superSection}`}>
//         <div className={`sectionContainer relative`}>
//           <div className={`${styles.colContainer}`}>
//             <div className={`${styles.firstCol} `}>
//               <div className={`${styles.textContainer}`}>
//                 <h2>Cute watch guard meme coin</h2>
//                 <div className=" md:hidden ">
//                   <img src={communityImage} className="w-[80%] mx-auto" />
//                 </div>
//                 <p className={`${styles.text}`}>
//                   A blockchain watchdog ensuring transparency and security,
//                   blending governance with meme culture and playful engagement.
//                 </p>
//                 <p className={`${styles.text}`}>
//                   Get ready to blast off with Kutte Ai-the cutest and most
//                   thrilling new meme coin in the crypto universe! Join the Kutte
//                   Ai mission today and secure your seat for a wild ride to the
//                   moon. Don't miss out on the excitement_ your Kutte Ai
//                   adventure starts now!
//                 </p>

//                 <p className={`${styles.text}`}>
//                   A blockchain watchdog ensuring transparency and security,
//                   blending governance with meme culture and playful engagement.
//                   Get ready to blast off with Kutte Ai-the cutest and most
//                   thrilling new meme coin in the crypto universe! Join the Kutte
//                   Ai mission today and secure your seat for a wild ride to the
//                   moon.
//                   <span className={`text-[#3A3A3A] font-bold`}>
//                     Don't miss out on the excitement_ your Kutte Ai adventure
//                     starts now!
//                   </span>
//                 </p>
//               </div>
//             </div>

//             <div
//               className={`${styles.secondCol} flex items-center justify-between relative`}
//             >
//               <div className={`flex gap-3 `}>
//                 <Button
//                   text={"How to Buy"}
//                   colored
//                   clickFunction={() => selectButton("HOB")}
//                 />
//                 <Button
//                   text={"Staking"}
//                   clickFunction={() => selectButton("Staking")}
//                 />
//               </div>
//               <div className="hidden md:block absolute right-0 top-0 transform -translate-y-[40%] translate-x-[30%]">
//                 <img src={communityImage} className="w-[65%]" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {button === "HOB" ? <Modal modalHandler={modalHandler}></Modal> : ""}
//       {button === "Staking" ? <Modal modalHandler={modalHandler}></Modal> : ""}
//     </>
//   );
// };

// export default Super;

import React, { useState } from "react";
import styles from "./Super.module.css";
import Button from "./Button";
import { communityImage } from "../assets";
import Modal from "./Modal";
import Staking from "./Staking";
import HowToBuy from "./HowToBuy";

const buttons = [
  { ID: "HOB", text: "How To Buy", colored: true },
  { ID: "Stkn", text: "Staking", colored: false },
];

const Super = () => {
  const [button, setButton] = useState("");
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  const selectButton = (text) => {
    setButton(text);
    setModal(true); // Set modal to true when a button is selected
  };

  return (
    <>
      <section className={`section ${styles.superSection}`}>
        <div className={`sectionContainer relative`}>
          <div className={`${styles.colContainer}`}>
            <div className={`${styles.firstCol} `}>
              <div className={`${styles.textContainer}`}>
                <h2>Cute watch guard meme coin</h2>
                {/* <div className="md:hidden">
                  <img src={communityImage} className="w-[80%] mx-auto" />
                </div> */}
                <p className={`${styles.text}`}>
                  A blockchain watchdog ensuring transparency and security,
                  blending governance with meme culture and playful engagement.
                </p>
                <p className={`${styles.text}`}>
                  Get ready to blast off with Kutte Ai-the cutest and most
                  thrilling new meme coin in the crypto universe! Join the Kutte
                  Ai mission today and secure your seat for a wild ride to the
                  moon. Don't miss out on the excitement_ your Kutte Ai
                  adventure starts now!
                </p>

                <p className={`${styles.text}`}>
                  A blockchain watchdog ensuring transparency and security,
                  blending governance with meme culture and playful engagement.
                  Get ready to blast off with Kutte Ai-the cutest and most
                  thrilling new meme coin in the crypto universe! Join the Kutte
                  Ai mission today and secure your seat for a wild ride to the
                  moon.
                  <span className={`text-[#3A3A3A] font-bold`}>
                    Don't miss out on the excitement_ your Kutte Ai adventure
                    starts now!
                  </span>
                </p>
              </div>
            </div>

            <div
              className={`${styles.secondCol} flex items-center justify-between relative`}
            >
              <div className="flex gap-3">
                <Button
                  text={"How to Buy"}
                  colored
                  clickFunction={() => selectButton("HOB")}
                />
                <Button
                  text={"Staking"}
                  clickFunction={() => selectButton("Staking")}
                />
              </div>
              <div className="hidden md:block absolute right-0 top-0 transform -translate-y-[40%] translate-x-[30%]">
                <img src={communityImage} className="w-[65%]" />
              </div>

              <div className="md:hidden">
                <img src={communityImage} className="w-[80%] mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal logic */}
      {modal && button === "HOB" && (
        <Modal modalHandler={modalHandler}>
          <HowToBuy />
        </Modal>
      )}
      {/* {modal && button === "Staking" && (
        <Modal modalHandler={modalHandler}>
          <Staking />
        </Modal>
      )} */}
    </>
  );
};

export default Super;
