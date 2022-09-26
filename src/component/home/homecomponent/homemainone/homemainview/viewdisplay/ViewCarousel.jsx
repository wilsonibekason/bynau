import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  /**SwiperCore */ Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { viewDisplayCarousel } from "../../../../../../utils/binauData";
const ViewCarousel = () => {
  //   SwiperCore.use([Autoplay]);

  return (
    <>
      <div className={`max-w-nine w-full`}>
        <Swiper
          //   autoplay={{
          //     delay: 500,
          //     disableOnInteraction: false,
          //   }}
          //   spaceBetween={50}
          //   slidesPerView={1}
          //   navigation
          //   effect="fade"
          //   loop
          //   draggable={true}
          //   speed={500}
          //   pagination={{ enabled: false }}
          //   Scrollbar={{ draggable: true }}
          //   onSwiper={(swiper) => console.log(swiper)}
          //   onSlideChange={() => console.log("slider has changed")}
          //   modules={[
          //     Navigation,
          //     EffectFade,
          //     Pagination,
          //     Scrollbar,
          //     A11y,
          //     Autoplay,
          //   ]}
          direction="horizontal"
          speed={1000}
          loop
          slidesPerView={1}
          centeredSlides={false}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          scrollbar={true}
          navigation={true}
          modules={[Keyboard, Scrollbar, Navigation, Autoplay, Mousewheel]}
          className="mySwiper"
        >
          {viewDisplayCarousel.map((item) => {
            return (
              <SwiperSlide>
                <div className={`rounded-lg w-full h-[300px] max-h-[350px]`}>
                  <img
                    src={item.Image}
                    alt=""
                    className={`rounded-lg w-full h-full object-cover`}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default ViewCarousel;
