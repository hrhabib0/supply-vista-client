import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Reviews = () => {
    return (
        <div className='bg-blue-500/50'>
            <div className='max-w-7xl mx-auto py-10'>
                <h1 className="pb-5 text-center font-semibold text-2xl md:text-3xl">Our Satisfied Customer Reviews</h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Pagination]}
                    centeredSlides={true}
                    className="mySwiper h-[45vh] md:h-[30vh]"
                >
                    <SwiperSlide>
                        <div className='md:flex gap-5 w-2/3 mx-auto items-center justify-center'>
                            <div className='w-36 h-28 mx-auto rounded-full bg-white p-1'>
                                <img src={'https://i.ibb.co/dJ6KFfN8/lawyers5.jpg'} alt="" className='w-full h-full rounded-full' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <span className='text-4xl font-bold'>"</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cumque pariatur nobis sit molestiae modi eligendi quia ipsum. Animi, alias!</p>
                                <h3>John Don</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:flex gap-5 w-2/3 mx-auto items-center justify-center'>
                            <div className='w-36 h-28 mx-auto rounded-full bg-white p-1'>
                                <img src={'https://i.ibb.co/dJ6KFfN8/lawyers5.jpg'} alt="" className='w-full h-full rounded-full' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <span className='text-4xl font-bold'>"</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cumque pariatur nobis sit molestiae modi eligendi quia ipsum. Animi, alias!</p>
                                <h3>John Don</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:flex gap-5 w-2/3 mx-auto items-center justify-center'>
                            <div className='w-36 h-28 mx-auto rounded-full bg-white p-1'>
                                <img src={'https://i.ibb.co/dJ6KFfN8/lawyers5.jpg'} alt="" className='w-full h-full rounded-full' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <span className='text-4xl font-bold'>"</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cumque pariatur nobis sit molestiae modi eligendi quia ipsum. Animi, alias!</p>
                                <h3>John Don</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:flex gap-5 w-2/3 mx-auto items-center justify-center'>
                            <div className='w-36 h-28 mx-auto rounded-full bg-white p-1'>
                                <img src={'https://i.ibb.co/dJ6KFfN8/lawyers5.jpg'} alt="" className='w-full h-full rounded-full' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <span className='text-4xl font-bold'>"</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cumque pariatur nobis sit molestiae modi eligendi quia ipsum. Animi, alias!</p>
                                <h3>John Don</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;