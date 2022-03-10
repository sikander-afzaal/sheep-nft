import React from "react";
import styles from "./Roadmap.module.css";

import roadmap_catGIF from "assets/images/roadmap.png";

const Card = ({ index, desc, toRight = false, children, list }) => {
  return (
    <div className={styles.card} style={{ marginLeft: toRight ? "auto" : 0 }}>
      <h1 className="fs-50px white font-cream-shoes mb-15px">{index}</h1>
      <div className={styles.cardContent}>
        {list ? (
          <ul className="ml-15px">
            {desc.map((elem, key) => {
              return (
                <li key={key} className="font-cream-shoes fs-30px weight-5">
                  {elem}
                </li>
              );
            })}
          </ul>
        ) : (
          desc.map((elem, key) => {
            return (
              <p key={key} className="font-cream-shoes fs-30px weight-5">
                {elem}
              </p>
            );
          })
        )}

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
            index="Community"
            list={true}
            desc={[
              "Paying homage to ALPACADABRAZ, the OG Alpaca NFT collection, 333 Whitelist spots will be opened on a first come first serve basis. Interested owners will be able to confirm ownership in our discord to obtain whitelist.",
              "Our discord server will remain closed until 200 OG roles have been given out on twitter. ",
              "1,200 total whitelist spots will be given out on discord.",
            ]}
          />
          <Card
            index="Community Treasury"
            desc={[
              "The community wallet aka the Palpaca Treasury will be funded via 20% of secondary royalties. The treasury will be used to fund tier-dependent giveaways for our Pals. As the project continues to grow, other uses for the treasury will be decided by the community.",
            ]}
            toRight={true}
          />
          <Card
            index="Tier-dependant Prizes"
            desc={[
              "Recurring prize giveaways will be held for our Pals, with raffles for varying prizes available according to the tier of your Palpaca.",
              "Check out the “rarity” section!",
            ]}
          />
          <Card
            index="Charity"
            desc={[
              "5% of secondary royalties will be dedicated towards charitable causes chosen by the community, with the exception of the first donation which will be decided by the team. These donations will happen periodically every month!",
            ]}
            toRight={true}
          ></Card>
          <Card
            index="Merch"
            desc={[
              "We hope to eventually develop a merch store with a line of clothing and products inspired by our community. We want Pals to be an integral part of our journey, and 100% of proceeds go towards the Palpaca Treasury.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
