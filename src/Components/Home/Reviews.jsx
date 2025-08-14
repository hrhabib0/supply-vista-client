import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Reviews = () => {
    const reviews = [
        {
            name: 'Rajiv Khan',
            img: 'https://i.ibb.co/h1XfnFxH/lawyers12.jpg',
            text: 'SupplyVista has drastically improved how we source gadgets in bulk. The platform is easy to navigate, and the minimum order details are clear. We placed our first order within 15 minutes!'
        },
        {
            name: 'Fatema Noor',
            img: 'https://i.ibb.co/tMtLHw5S/lawyers1.jpg',
            text: 'I love how SupplyVista categorizes everything so neatly. The product ratings and descriptions helped me make informed purchases. Great for fashion retailers!'
        },
        {
            name: 'Mahbub Hossain',
            img: 'https://i.ibb.co/tM74VGdB/lawyers7.jpg',
            text: 'Finding trusted manufacturers used to be a hassle. Now, I get verified suppliers and secure bulk orders without making hundreds of calls. Game changer!'
        },
        {
            name: 'Nila Chowdhuri',
            img: 'https://i.ibb.co/x88rZ5cK/lawyers4.jpg',
            text: 'The Health & Beauty category is fantastic. I love that I can set my quantity filters and get accurate pricing for each item. Everything feels transparent and professional.'
        }
    ];

    return (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="pb-8 text-center font-bold text-2xl md:text-3xl text-blue-700">
                    Our Satisfied Customer Reviews
                </h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    centeredSlides={true}
                    className="mySwiper"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6">
                                <div className="w-28 h-28 flex-shrink-0">
                                    <img
                                        src={review.img}
                                        alt={review.name}
                                        className="w-full h-full object-cover rounded-full border-4 border-blue-500"
                                    />
                                </div>
                                <div className="text-center md:text-left">
                                    <span className="text-5xl font-bold text-blue-500 leading-none">"</span>
                                    <p className="text-gray-700 italic mb-3">{review.text}</p>
                                    <h3 className="font-semibold text-blue-700">-- {review.name}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;
