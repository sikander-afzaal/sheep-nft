import React from "react";
import styles2 from "./About.module.css";
import styles from "../Owner/Owner.module.css";
import { FaDiscord } from "react-icons/fa";
import hero_sheep from "assets/images/roadmap-car.png";
import useMediaQuery from "hooks/useMediaQuery";
import { Link } from "react-router-dom";
function About() {
  const isBellow1000 = useMediaQuery("(max-width:1000px)");
  return (
    <div className={styles2.wrapper}>
      <div className="container-wrapper-2 py-100px">
        <div className={styles2.container}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <div className="mb-40px">
                <h1 className="fs-66px weight-4 mb-20px">
                  Join us on our journey into the metaverse.
                </h1>
                <p className="font-cream-shoes fs-66px weight-5 lh-1">
                  3,333 Palpacas
                </p>
              </div>

              <div className={styles.btns}>
                <button className="button-pink fs-40px weight-4 pointer radius-26px lh-1">
                  <span className="flex">
                    <FaDiscord size={isBellow1000 ? 35 : 48} />
                  </span>
                  <div className="font-calli-cat-wrapper">
                    <p className="font-calli-cat">Discord</p>
                  </div>
                </button>
                <Link
                  to="/mint"
                  className="button-blue fs-40px weight-4 pointer radius-26px black"
                >
                  <div className="font-calli-cat-wrapper">
                    <p className="font-calli-cat">Mint</p>
                  </div>
                </Link>
              </div>
            </div>
            <p className="abs">Hi Pals</p>
            <img src={hero_sheep} className={styles.hero_kitty} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
