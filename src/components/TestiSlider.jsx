import React from 'react';

// testimonials data
import { testimonials } from '../data';
import { projectsData } from '../data';
import data from '../data'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';

// import required modules
import { Autoplay, Pagination } from 'swiper';

console.log(projectsData);
const TestiSlider = ({ item }) => {

  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition, img } = item;
          return (
            <SwiperSlide key={index}>
              <div
                className='flex flex-col lg:flex-row gap-12 lg:gap-10 '
              >
                <div
                  className='w-48 h-48 lg:w-[328px] lg:h-[328px]'
                >
                  <img className='rounded-2xl' src={authorImg} alt='' />
                </div>
                <div
                  className='flex flex-col max-w-3xl'
                >
                  <h5 className='font-body text-2xl mb-8 italic font-normal'>
                    {authorText}
                  </h5>
                  <p className='text-lg text-accent'>{authorName}</p>
                  <div className='grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 mt-5'>
                    <img src={img} alt="" />
                  </div>
                  <p className='text-lg text-accent'>{authorPosition}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestiSlider;