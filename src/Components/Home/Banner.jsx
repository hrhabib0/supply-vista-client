import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <div className=''>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[450px]"
            >
                <SwiperSlide>
                    <div>
                        <img src={'https://i.ibb.co/tpNM4Mvj/t-shirt.png'} alt="offer-one" className='w-full h-[450px]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={'https://i.ibb.co/h1gG64cK/offer-one.png'} alt="offer-one" className='w-full h-[450px]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={'https://i.ibb.co/W4mSc4T9/offer-3.png'} alt="offer-one" className='w-full h-[450px]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={'https://i.ibb.co/V0KN0nkS/offer-four.png'} alt="offer-one" className='w-full h-[450px]' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
