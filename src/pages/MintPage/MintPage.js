import Navbar from "layouts/MintPage-Layouts/Navbar/Navbar";
import React, { useState } from "react";
import styles from "./MintPage.module.css";
import { HiMinus } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";

function MintPage() {
  const [counter, setCounter] = useState(1);
  return (
    <div className={styles.page}>
      <Navbar />

      <div className="container-wrapper py-50px text-center bottom-minting">
        <h1 className="fs-72px black weight-4 text-center mb-10px">
          Public Mint
        </h1>
        <h2 className="fs-24px black weight-4 mb-20px">Unleash the kittens</h2>
       
        <div className={styles.counter}>
          <button
            className="pointer"
            onClick={() => setCounter(counter <= 1 ? counter : counter - 1)}
          >
            <HiMinus size={40} />
          </button>
          <div className={`${styles.count}`}>
            <p className="fs-64px black weight-4 font-kids-daday">{counter}</p>
          </div>
          <button className="pointer" onClick={() => setCounter(counter + 1)}>
            <BsPlusLg size={30} />
          </button>
        </div>
        <p className="fs-64px weight-6 black font-kids-daday  mb-20px">
          {counter}/10000
        </p>

        <button
          className={`${styles.mintButton} pointer fs-42px black weight-4 `}
        >
          Mint
        </button>
      </div>
    </div>
  );
}

export default MintPage;
