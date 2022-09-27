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
      <div className={`max-w-full w-full`}>
        <Swiper
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
                <div className={`rounded-lg w-full h-[250px] max-h-[300px]`}>
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
