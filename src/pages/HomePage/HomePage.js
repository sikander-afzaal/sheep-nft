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
          title={"What are Palpacas?"}
          p2={
            "Palpacas exist to provide a helping hand. Our goal is to provide donation-accountability within the WEB3 ecosystem, as we continue to build towards change for the better."
          }
          p1={
            "Using a publicly auditable vault contract, 60% of all mint proceeds will be directly sent to the RELI3F fund (Reli3f.xyz), a transparent WEB3 initiative created by several NFT community leaders to help the current situation in Ukraine."
          }
          p3={
            "We are on a mission to create a kind & supportive space for our pals in the Metaverse. Community is absolutely one of the most important aspects for any NFT project."
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
            "We have a lot of great ideas for the future of Palpacas, from physical collectibles and the launch of our Merch store, to the purchase of metaverse land for our pals to !vibe in. Collectively we will build the Palpacaverse together and of course, look to add upon the Palpaca team!"
          }
          p2={
            "To facilitate the continual development and ensure a sustainable future for the Palpacas, 50% of all secondary market royalties will be allocated towards the Palpaca Treasury."
          }
          p3={
            "Development of staking utility $PALS coin will commence also commence. $PALS will be the official digital currency of Palpacas, where you can spend $PALS on physical goods as well as digital goods to use in the metaverse."
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
