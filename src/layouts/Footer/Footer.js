import React from "react";
import styles from "./Footer.module.css";
import logo from "assets/images/logo.png";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper py-50px">
        <div className={styles.footer}>
          <div className={styles.left}>
            <img src={logo} className={styles.logo} alt="" />
            <Link
             to="/mint"
              className="no-margin black button-blue fs-36px weight-4 pointer radius-24px"
            >
              <div className="font-calli-cat-wrapper no-margin">
                <p className="font-calli-cat ">Mint</p>
              </div>
            </Link>
          </div>
          <div className={styles.right}>
            <a href="#" className="black">
              <FaDiscord size={45} />
            </a>
            <a
              className="black"
              href="https://twitter.com/KittenClubNFT"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={38} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
