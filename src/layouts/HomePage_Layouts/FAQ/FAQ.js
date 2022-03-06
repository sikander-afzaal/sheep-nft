import Accordion from "components/Accordion/Accordion";
import React from "react";
import styles from "./FAQ.module.css";

function FAQ() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2 py-100px">
        <h1 className="text-center fs-72px black weight-4 mb-40px">FAQs</h1>

        <div className={styles.faqs}>
          <Accordion title="PALPACAS, RELIEF & SMARTCONTRACT ACCOUNTABILITY">
            <p className="font-cream-shoes fs-40px black mb-5px weight-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, itaque.
            </p>
          </Accordion>
          <Accordion title="What is the total supply of Palpacas?">
            <p className="font-cream-shoes fs-40px black mb-5px weight-5">
              There will be a total of 3,333 Palpacas available for mint
            </p>
          </Accordion>
          <Accordion title="How much will it cost to mint a Palpaca?">
            <p className="font-cream-shoes fs-34px black ">
              For an accessible price of 0.04 ETH, you will receive 1 Palpaca
              NFT that not only serves as an awesome PFP, but also access to an
              exclusive community of supportive Pals and access to the
              Palpacaverse!
            </p>
          </Accordion>
          <Accordion title="WHEN WILL PALPACAS LAUNCH?">
            <p className="font-cream-shoes fs-40px black mb-25px weight-5">
              The pre-sale will commence on March 15th, 2022 at 9AM PST, and our
              public sale will commence 24 hours later on March 16th, 2022 at
              9AM PST
            </p>
          </Accordion>
          <Accordion title="HOW WILL DIFFERENT FUR RARITIES BENEFIT HOLDERS?">
            <p className="font-cream-shoes fs-30px black weight-5">
              Palpacas will have four different fur types. From the most basic
              to rare. If you own a Palpaca, depending on it’s fur rarity you
              will have more or less availability for the raffles we choose when
              picking up expensive NFTs as prizes. Prizes can also range from
              notable NFTs such as Doodles, Cool Cats, Azukis, Alien Frens, or
              simply ETH!
            </p>
          </Accordion>
          <Accordion title="WHAT DOES MY PAL GET ME?">
            <p className="font-cream-shoes fs-30px black weight-5">
              When you mint a Palpaca, you get a cute AF PFP, as well as raffle
              rights (only for active holders) to our giveaways, whitelists, and
              any other perks that become available to Palpaca holders. You will
              also receive access to our merch store and a pass to exclusive
              channels in our discord.
            </p>
          </Accordion>
          <Accordion title="HOW TO OBTAIN A PALPACA">
            <p className="font-cream-shoes fs-30px black weight-5">
              On March 15th, our presale will begin for 0.04 ETH. If you are
              selected to be on our whitelist, you can mint a Palpaca during
              this period for up to 24 hours. Please take note that this
              exclusive minting period is meant to save gas fees for whitelisted
              members.
            </p>
            <p className="font-cream-shoes fs-30px black weight-5">
              On March 16th, the public launch will begin for the same mint
              price.
            </p>
          </Accordion>
          <Accordion title="How do I buy? (New to NFTs)">
            <p className="font-cream-shoes fs-30px black weight-5">
              Here are a few simple steps to how you can obtain a Palpaca NFT.
            </p>

            <ol>
              <li className="fs-30px mb-5px black font-cream-shoes">
                Downlaod Metamask extension on your browser
              </li>
              <li className="fs-30px mb-5px black font-cream-shoes">
                Purchase enough Ethereum for mint + gas and make sure the funds
                are available on your metamask wallet
              </li>
              <li className="fs-30px mb-5px black font-cream-shoes">
                Open our official link (On discord under #official-links
                channel) to the minting site, and choose the amount of Palpaca
                NFTs you wish to mint.
              </li>
              <li className="fs-30px mb-5px black font-cream-shoes">
                Click on the “Mint” button, which will then prompt the metamask
                extension to ask you to connect your wallet.
              </li>
              <li className="fs-30px mb-5px black font-cream-shoes">
                Confirm the transaction plus gas fees
              </li>
            </ol>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
