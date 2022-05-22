import React from "react";
// import required modules
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/Blogs/react-perfomance.png";
const Banner = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="slider-1">
          <div className="lg:h-[60vh] flex justify-between  flex-col-reverse lg:flex-row">
            <div className="lg:w-full lg:w-50 flex justify-center items-center h-full ">
              <div className="p-10">
                <h2 className="text-2xl text-primary">Hello world</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  dolorem ex, pariatur, nobis aspernatur quibusdam quae
                  consectetur eos, illum officiis inventore harum. Quasi facilis
                  itaque voluptas quisquam tenetur nobis laboriosam.
                </p>
                <button class="btn btn-primary">Get Started</button>
              </div>
            </div>
            <div className="w-full lg:w-50">
              <img className="h-full" src={img1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-2">
          <div className="lg:h-[60vh] flex justify-between  flex-col-reverse lg:flex-row ">
            <div className=" lg:w-full lg:w-50 flex justify-center items-center h-full ">
              <div className="p-10">
                <h2 className="text-2xl text-primary">Hello world</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  dolorem ex, pariatur, nobis aspernatur quibusdam quae
                  consectetur eos, illum officiis inventore harum. Quasi facilis
                  itaque voluptas quisquam tenetur nobis laboriosam.
                </p>
                <button class="btn btn-primary">Get Started</button>
              </div>
            </div>
            <div className=" w-full lg:w-50">
              <img className="h-full" src={img1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-3">
          <div className="lg:h-[60vh] flex justify-between  flex-col-reverse lg:flex-row">
            <div className=" lg:w-full lg:w-50 flex justify-center items-center h-full ">
              <div className="p-10">
                <h2 className="text-2xl text-primary">Hello world</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  dolorem ex, pariatur, nobis aspernatur quibusdam quae
                  consectetur eos, illum officiis inventore harum. Quasi facilis
                  itaque voluptas quisquam tenetur nobis laboriosam.
                </p>
                <button class="btn btn-primary">Get Started</button>
              </div>
            </div>
            <div className="w-full lg:w-50">
              <img className="h-full" src={img1} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
