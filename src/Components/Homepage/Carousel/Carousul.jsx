// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import "./Carousel.module.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const images = [
  "https://assets.tatacliq.com/medias/sys_master/images/46573625278494.jpg",
  "https://assets.tatacliq.com/medias/sys_master/images/46573625540638.jpg",
  "https://assets.tatacliq.com/medias/sys_master/images/46573625344030.jpg",
  "https://assets.tatacliq.com/medias/sys_master/images/46573625409566.jpg",
  "https://assets.tatacliq.com/medias/sys_master/images/46573625475102.jpg",
];
export default function Carousel() {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        className="mySwiper"
      >
        {images.map((e) => {
          return (
            <SwiperSlide>
              <img src={e} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
