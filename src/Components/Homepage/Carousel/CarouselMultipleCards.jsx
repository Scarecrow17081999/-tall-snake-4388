import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CarouselMultipleCards.module.css";

export default function CarouselMultipleCards({ data }) {
  return (
    <>
      <Swiper
        style={{ width: "75%", height: "90%", margin: "125px auto" }}
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {data?.map((e) => {
          return (
            <SwiperSlide>
              <img style={{ height: "350px" }} src={e.img} alt={e.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
