import React from "react";
import styles from "./Owner.module.css";
import "./row.css";
import img2 from "../../../assets/images/ownership/Buy Land.png";
import img3 from "../../../assets/images/ownership/Merch Store.png";
import img4 from "../../../assets/images/ownership/Community Treasury.png";
function Owner() {
  return (
    <div className={styles.container}>
      <div className="container-wrapper">
        <h1 className="fs-66px weight-4 mb-20px">Ownership Benefits</h1>
        <div className="row-owner">
          <div className="img-div">
            <img src={img2} alt="" />
            <p>Buy Land</p>
          </div>
          <div className="img-div">
            <img src={img3} alt="" />
            <p>Merch Store</p>
          </div>
          <div className="img-div">
            <img src={img4} alt="" />
            <p>Community Treasury</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Owner;
