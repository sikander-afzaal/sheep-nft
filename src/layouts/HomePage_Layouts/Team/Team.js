import React from "react";
import styles from "./Team.module.css";

import img1 from "assets/images/team/3.png";
import img2 from "assets/images/team/4.png";
import img3 from "assets/images/team/5.png";

const Card = ({ img, heading, title, desc, bgColor, headingBgColor }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      <img src={img} className="w-full mb-15px" alt="" />
      <p
        className={`${styles.heading} text-center fs-18px weight-4 black mb-10px`}
        style={{ backgroundColor: headingBgColor }}
      >
        {heading}
      </p>

      <div className={styles.cardContent}>
        <h1 className="text-center fs-28px black weight-4 mb-5px">{title}</h1>

        <p className="font-cream-shoes fs-24px weight-5 lh-1 black">{desc}</p>
      </div>
    </div>
  );
};

function Team() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2 py-100px">
        <h1 className="text-center black fs-72px weight-4 mb-60px">Team</h1>

        <div className={styles.cards}>
          <Card
            bgColor="#91E8FF"
            headingBgColor="#FFC897"
            img={img1}
            heading="Dev"
            title="Team Member"
            desc="Lorem ipsum dolor sit amet. Et quis facilis aut mollitia necessitatibus et sunt ipsum. Sed doloribus"
          />
          <Card
            bgColor="#B3FFC7"
            headingBgColor="#FFBADF"
            img={img2}
            heading="Artist"
            title="Team Member"
            desc="Lorem ipsum dolor sit amet. Et quis facilis aut mollitia necessitatibus et sunt ipsum. Sed doloribus"
          />
          <Card
            bgColor="#FFEFB7"
            headingBgColor="#FF74A6"
            img={img3}
            heading="Lead"
            title="Team Member"
            desc="Lorem ipsum dolor sit amet. Et quis facilis aut mollitia necessitatibus et sunt ipsum. Sed doloribus"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
