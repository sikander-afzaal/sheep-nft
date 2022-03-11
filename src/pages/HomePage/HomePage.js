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
          btn={false}
          list={false}
          title={"What are Palpacas?"}
          p1={
            "Palpacas are 3,333 unique collectible NFTs randomly generated on the Ethereum blockchain. With a primary focus for organic growth within the WEB3 space for our community of Pals, this project will be available to the public and selected whitelist members for free!"
          }
          p2={
            "A free mint is our way of getting our collection into the hands of those that truly appreciate our collection."
          }
          p3={
            "We believe in building our project up from the ground up, with a genuine and inclusive community that seeks growth through internal collaboration and external partnerships."
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
            "We will work hard to continue to foster our community and build for the future of Palpacas. To facilitate the continual development and ensure a sustainable future for the Palpcas, 20% of all secondary market royalties will be allocated towards the Palpaca Treasury."
          }
          p2={
            "As written in our roadmap, the Palpaca Treasury will be primarily used to acquire NFT prizes and experiences for our Pals. Long term goals include acquiring land within the metaverse for our Pals to build and connect in."
          }
          p3={
            "We are also excited to collaborate with our community to curate clothing/products for our community, with 100% of proceeds being funneled back into the Palpaca Treasury."
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
