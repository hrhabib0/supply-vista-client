import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Reviews = () => {
    return (
        <div className='bg-blue-500/50'>
            <div className='max-w-7xl mx-auto py-10'>
                <h1 className="pb-5 text-center font-semibold text-xl md:text-3xl">Our Satisfied Customer Reviews</h1>
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
                                <img src={'https://i.ibb.co/h1XfnFxH/lawyers12.jpg'} alt="" className='w-full h-full rounded-full' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <span className='text-4xl font-bold'>"</span>
                                <p>"SupplyVista has drastically improved how we source gadgets in bulk. The platform is easy to navigate, and the minimum order details are clear. We placed our first order within 15 minutes!"</p>
                                <h3 className='opacity-50 pl-8'>--Rajiv Khan</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:flex gap-5 w-2/3 mx-auto items-center justify-center'>
                            <div className='w-36 h-28 mx-auto rounded-full bg-white p-1'>
                                <img src={'https://i.ibb.co/tMtLHw5S/lawyers1.jpg'} alt="" className='w-full h-full rounded-full' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <span className='text-4xl font-bold'>"</span>
                                <p>I love how SupplyVista categorizes everything so neatly. The product ratings and descriptions helped me make informed purchases. Great for fashion retailers!</p>
                                <h3 className='opacity-50 pl-8'>--Fatema Noor</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:flex gap-5 w-2/3 mx-auto items-center justify-center'>
                            <div className='w-36 h-28 mx-auto rounded-full bg-white p-1'>
                                <img src={'https://i.ibb.co/tM74VGdB/lawyers7.jpg'} alt="" className='w-full h-full rounded-full' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <span className='text-4xl font-bold'>"</span>
                                <p>Finding trusted manufacturers used to be a hassle. Now, I get verified suppliers and secure bulk orders without making hundreds of calls. Game changer!</p>
                                <h3 className='opacity-50 pl-8'>--Mahbub Hossain</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:flex gap-5 w-2/3 mx-auto items-center justify-center'>
                            <div className='w-36 h-28 mx-auto rounded-full bg-white p-1'>
                                <img src={'https://i.ibb.co/x88rZ5cK/lawyers4.jpg'} alt="" className='w-full h-full rounded-full' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <span className='text-4xl font-bold'>"</span>
                                <p>The Health & Beauty category is fantastic. I love that I can set my quantity filters and get accurate pricing for each item. Everything feels transparent and professional.</p>
                                <h3 className='opacity-50 pl-8'>--Nila Chowdhuri</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;