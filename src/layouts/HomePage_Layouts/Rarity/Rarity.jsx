import React from "react";
import styles from "../Owner/Owner.module.css";
import "./Rarity.css";
import img1 from "../../../assets/images/Rarity/1.png";
import img2 from "../../../assets/images/Rarity/2.png";
import img3 from "../../../assets/images/Rarity/3.png";
import img4 from "../../../assets/images/Rarity/4.png";
function Owner() {
  return (
    <div className="rarity-container">
      <div className="container-wrapper">
        <h1 className="text-center fs-72px black weight-4 ">Rarity</h1>

        <div className="row-rarity">
          <div className="card-div-rarity">
            <img src={img3} alt="" />
          </div>
          <div className="card-div-rarity">
            <img src={img1} alt="" />
          </div>
          <div className="card-div-rarity">
            <img src={img4} alt="" />
          </div>
          <div className="card-div-rarity">
            <img src={img2} alt="" />
          </div>
        </div>
        <p
          style={{ textAlign: "center", marginTop: "4rem" }}
          className="font-cream-shoes fs-38px weight-5 mb-30px lh-1"
        >
          Palpacas have evolved according to their habitats and split into 4
          factions with varying population. When the community is awarded
          prizes, Palmos holders will be entitled to larger prizes, and have
          better chances of winning due to their limited supply. On the other
          spectrum, Paloca holders will have the opportunity for more prizes,
          though they may not be as exclusive.
        </p>
      </div>
    </div>
  );
}

export default Owner;
