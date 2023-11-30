import React from 'react';
import { Pagination } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import './Expectation.scss';

export const Expectation = () => {
  return (
    <div id="expectation-scene" className="expectation-scene">
      <h1 className="expectation-scene__title">What to Expect</h1>

      <div className="expectation-scene__slider">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={24}
          centeredSlides={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {/*Mobile screens*/}
          <SwiperSlide className="md:hidden">
            <img src="/expect-slide-mobile-1.png" srcSet="/expect-slide-mobile-1@2x.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="md:hidden">
            <img src="/expect-slide-mobile-2.png" srcSet="/expect-slide-mobile-2@2x.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="md:hidden">
            <img src="/expect-slide-mobile-3.png" srcSet="/expect-slide-mobile-3@2x.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="md:hidden">
            <img src="/expect-slide-mobile-4.png" srcSet="/expect-slide-mobile-4@2x.png" alt="" />
          </SwiperSlide>

          {/*Desktop screens*/}
          <SwiperSlide className="hidden md:block">
            <img src="/expect-slide-1.png" srcSet="/expect-slide-1@2x.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="hidden md:block">
            <img src="/expect-slide-2.png" srcSet="/expect-slide-2@2x.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="hidden md:block">
            <img src="/expect-slide-3.png" srcSet="/expect-slide-3@2x.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="hidden md:block">
            <img src="/expect-slide-4.png" srcSet="/expect-slide-4@2x.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
