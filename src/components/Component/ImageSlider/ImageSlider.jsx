import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Zoom } from 'swiper/modules';
import './ImageSider.css';
import 'swiper/css/zoom';

const ImageSlider = ({ images }) => {
  return (
    <>
      <Swiper
        spaceBetween={25}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        direction="horizontal"
        pagination={{
          clickable: true,
          type: 'bullets',
        }}
        zoom={true}
        slidesPerView={2}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Zoom]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          985: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
        }}
      >
        {images.map((i) => (
          <SwiperSlide key={i.id}>
            <img key={i.id} src={i.name} alt={`${i.name}`} />
            <span key={i.id}>{i.details}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSlider;
