import React from "react";
import { Autoplay, Keyboard, Navigation, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import UserReview from "./UserReview";

const Reviews = () => {
  const reviews = [1, 2, 3, 4];
  return (
    <div className="my-20 py-10 bg-white shadow-sm">
      <h3 className="text-center text-2xl mb-3">What out Customers Says</h3>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((r, index) => (
          <SwiperSlide key={index}>
            <UserReview />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-4">
        <button className="btn btn-primary text-white capitalize font-normal">
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default Reviews;
