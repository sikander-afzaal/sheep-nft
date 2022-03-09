import React from "react";
import styles from "./Story.module.css";

function Story({ title, p1, p2, p3, back, btn, list }) {
  return (
    <div
      style={{ background: back ? "#91e8ff" : "transparent" }}
      className={styles.wrapper}
    >
      <div className="container-wrapper-2 py-100px">
        <div className={styles.container}>
          <h1 className="text-center fs-72px black weight-4 mb-40px">
            {title}
          </h1>

          <p className="font-cream-shoes fs-38px weight-5 mb-35px lh-1">{p1}</p>
          <p className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">{p2}</p>
          {list ? (
            <div className="list">
              <p className="font-cream-shoes fs-38px weight-7 mb-30px lh-1">
                Together, we will collectively strive towards:
              </p>
              <ul>
                <li className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">
                  Positively impacting the communities we reside in
                </li>
                <li className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">
                  Positively impacting the environment & our planet
                </li>
                <li className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">
                  Providing help where it is needed{" "}
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          <p className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">{p3}</p>
          {list ? (
            <>
              <p className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">
                RELI3F is a perfect example of how we can make an impact for
                good with web3. Although we are not affiliated with the RELI3F
                team, their efforts in the space are truly inspirational, and in
                total alignment with what we are trying to build!
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">
                Check out how our smart contract will provide donation
                accountability below!
              </p>
            </>
          ) : (
            ""
          )}
        </div>
        {btn ? (
          <div className="btn-div">
            <a
              href="#faq"
              className="no-margin black padd button-white fs-28px text-center weight-4 pointer radius-24px"
            >
              <div className="font-calli-cat-wrapper no-margin">
                <p className="font-calli-cat">
                  Click here to learn more about <br></br> our SmartContract
                </p>
              </div>
            </a>
            <a
              href="https://twitter.com/reli3fxyz"
              target={"_blank"}
              className="padd no-margin black button-white text-center fs-28px weight-4 pointer radius-24px"
            >
              <div className="font-calli-cat-wrapper no-margin">
                <p className="font-calli-cat ">
                  Click here to learn more about <br></br> RELI
                  <span
                    className="three"
                    style={{
                      marginRight: "-3px",
                      fontSize: "37px",
                      fontWeight: "bold",
                      fontFamily: "font-cream-shoes",
                    }}
                  >
                    3
                  </span>
                  F
                </p>
              </div>
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Story;
