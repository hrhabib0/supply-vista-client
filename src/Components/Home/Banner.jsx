import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    // High-quality, relevant banner slides
    const slides = [
        {
            img: "https://i.ibb.co.com/ycyCw296/gadgets.jpg",
            title: "Bulk Orders, Best Prices",
            desc: "Get unbeatable deals when you buy in bulk from trusted suppliers.",
            offer: "Up to 30% OFF on First Order"
        },
        {
            img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
            title: "Fast & Reliable Supply",
            desc: "From factory to your doorstep — secure, verified, and on time.",
            offer: "Free Shipping for Orders Over $500"
        },
        {
            img: "https://i.ibb.co.com/ycyCw296/gadgets.jpg",
            title: "Trusted B2B Marketplace",
            desc: "Connect with verified manufacturers and wholesalers worldwide.",
            offer: "Sign Up & Get $50 Credit"
        },
        {
            img: "https://i.ibb.co.com/ycyCw296/gadgets.jpg",
            title: "Special Seasonal Offers",
            desc: "Exclusive discounts on health, beauty, fashion & electronics.",
            offer: "Save Up to 40% This Month"
        }
    ];

    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[70vh]"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[70vh]">
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/50 z-10"></div>

                            {/* Image */}
                            <img
                                src={slide.img}
                                alt={`banner-${index + 1}`}
                                className="w-full h-full object-cover"
                            />

                            {/* Text overlay */}
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
                                <h1 className="text-3xl md:text-5xl font-bold mb-3">{slide.title}</h1>
                                <p className="text-lg md:text-xl max-w-xl mb-4">{slide.desc}</p>
                                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold text-sm md:text-base">
                                    {slide.offer}
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
