import React, { useRef } from "react";
import styles from "./NFTS.module.css";

import nft1 from "assets/images/NFTS/1.png";
import nft2 from "assets/images/NFTS/2.png";
import nft3 from "assets/images/NFTS/3.png";
import nft4 from "assets/images/NFTS/4.png";
import nft5 from "assets/images/NFTS/5.png";

import navigationLeft from "assets/images/navigation-left.png";
import navigationRight from "assets/images/navigation-right.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

function NFTS() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className={styles.wrapper}>
      <div style={{paddingTop:"0px"}} className="container-wrapper-2 py-100px">
       

        <div className={`${styles.slider} mb-35px`}>
          <button className="pointer" ref={navigationPrevRef}>
            <img src={navigationLeft} alt="" />
          </button>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            loop={true}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            breakpoints={{
              1000: {
                spaceBetween: 50,
                slidesPerView: 4,
              },
              800: {
                spaceBetween: 20,
                slidesPerView: 4,
              },
              600: {
                spaceBetween: 20,
                slidesPerView: 3,
              },
              500: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              200: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <img src={nft1} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft2} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft3} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft4} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft5} className="w-full" alt="" />
            </SwiperSlide>
           
          </Swiper>
          <button className="pointer" ref={navigationNextRef}>
            <img src={navigationRight} alt="" />
          </button>
        </div>

      </div>
    </div>
  );
}

export default NFTS;
