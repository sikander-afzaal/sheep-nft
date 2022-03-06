import React from "react";
import styles from "./Cards.module.css";



const Card = ({ title, desc, descFontSize = "fs-24px" }) => {

  return (
    <div className="text-center">
      <h1 className="text-center fs-32px black weight-4 mb-30px">{title}</h1>
   
      <p className={`text-center ${descFontSize} weight-5 font-cream-shoes`}>
        {desc}
      </p>
    </div>
  );
};

function Cards() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2 py-100px padding-0">
      <h1 className="text-center fs-72px black weight-4 mb-40px">
      Values & Vision
      </h1>
        <div className={styles.cards}>
          <Card
            title="Fostering an amazing community that serves as a source of positivity to uplift each other as true pals.
            "
            desc="“Community will always be our top priority” 
            "
          />
          <Card
            title="Continue to !vibe with one another, maintain a selfless attitude and always offering help to others.
            "
            desc="“Helpful pals don’t ask how they can help, they just do it.“
            "
          />
             <div className="text-center">
      <h1 className="text-center fs-32px black weight-4 mb-30px">Providing a supportive environment to aspiring artists and developers in the world of WEB<span style={{fontFamily:"font-cream-shoes", fontSize:"41px",fontWeight:"bold"}}>3</span>.</h1>
   
      <p className={`text-center fs-24px weight-5 font-cream-shoes`}>
      “Our goal is to support and inspire each other to do their absolute best.”
      </p>
    </div>
         
         
        </div>
      </div>
    </div>
  );
}

export default Cards;
