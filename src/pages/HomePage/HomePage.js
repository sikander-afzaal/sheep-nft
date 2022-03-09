import React from "react";
import Owner from "layouts/HomePage_Layouts/Owner/Owner";
import About from "layouts/HomePage_Layouts/About/About";
import NFTS from "layouts/HomePage_Layouts/NFTS/NFTS";
import Cards from "layouts/HomePage_Layouts/Cards/Cards";
import Team from "layouts/HomePage_Layouts/Team/Team";
import FAQ from "layouts/HomePage_Layouts/FAQ/FAQ";
import Story from "layouts/HomePage_Layouts/Story/Story";
import Roadmap from "layouts/HomePage_Layouts/Roadmap/Roadmap";
import Rarity from "layouts/HomePage_Layouts/Rarity/Rarity";

import Navbar from "layouts/Navbar/Navbar";
import Footer from "layouts/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div id="about">
        <About />
      </div>
      <div id="story">
        <Story
          back={true}
          btn={true}
          list={true}
          title={"What are Palpacas?"}
          p2={
            "Palpacas exist to provide a helping hand. Our vision is to build a community of helpful pals that wish to contribute towards the betterment of our communities and contribute towards environmental sustainability."
          }
          p1={
            "Palpacas is our way of contributing to the “Web3 for good” movement, and we plan on having a ton of fun while doing so!"
          }
          p3={
            "To start, we’ve decided to allocate 20% of all mint proceeds towards the RELI3F fund. RELI3F is a humanitarian aid initiative currently supporting those affected by the war in Ukraine."
          }
        />
      </div>

      <NFTS />
      <Cards />
      <Rarity />
      <div id="roadmap">
        <Roadmap />
      </div>
      <div className="one-section">
        <Story
          trans={true}
          title={"Future of Palpacas"}
          p1={
            "As we continue building a community of likeminded individuals dedicated towards taking the initiative towards a better future, we are excited for the Palpacas community!"
          }
          p2={
            "To facilitate the continual development and ensure a sustainable future for the Palpacas, 50% of all secondary market royalties will be allocated towards the Palpaca Treasury."
          }
          p3={
            "Whether this means using the treasury to purchase metaverse land, or launching a merch store to support charitable causes, the community will have direct influence on the direction of this project."
          }
        />
        <Owner />
      </div>

      <div id="team">
        <Team />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
