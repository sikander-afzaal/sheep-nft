import React from "react";
import styles from "./Roadmap.module.css";

import roadmap_catGIF from "assets/images/roadmap.png";

const Card = ({ index, desc, toRight = false, children }) => {
  return (
    <div className={styles.card} style={{ marginLeft: toRight ? "auto" : 0 }}>
      <h1 className="fs-72px white font-cream-shoes mb-15px">{index}% Mint</h1>
      <div className={styles.cardContent}>
        {desc.map((elem,key) => {
         return <p key={key} className="font-cream-shoes fs-30px weight-5">{elem}</p>
        })}
        {children}
      </div>
    </div>
  );
};

function Roadmap() {
  return (
    <div className={styles.wrapper}>
      <div
        className="container-wrapper-2 py-100px relative"
        style={{ zIndex: 10 }}
      >
        <h1
          className={`${styles.roadmapTITLE} fs-72px text-center black weight-4 `}
        >
          Roadmap
        </h1>
        <img src={roadmap_catGIF} className={styles.roadmapGIF} alt="" />

        <div className={styles.cards}>
          <Card
            index="0"
            desc={["Paying homage to ALPACADABRAZ, the OG Alpaca NFT – 1111 Whitelist spots will be opened on a first come first serve basis. Confirm ownership in our discord to obtain your spot!"]}
          />
          <Card
            index="25"
            desc={[
              "5 ETH transferred to the Palpaca Treasure",
              "DAO mechanics for community voting announced."
            ]}
            toRight={true}
          />
          <Card
            index="50"
            desc={[
             " 10 ETH transferred to the Palpaca Treasury.",
            "NFT Giveaways for holders will be announced! ALPACADABRAZ and other bluechip NFTs will be acquired for giveaways"
            ]}
          />
          <Card
            index="75"
            desc={["Official launch of the PalpacaDAO."]}
            toRight={true}
          >
         
          </Card>
          <Card
            index="100"
            desc={["15 ETH deposited into the Palpaca Treasury."]}
          />
          
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
