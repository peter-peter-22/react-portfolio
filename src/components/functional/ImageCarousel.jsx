import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

export function ImageCarousel({ urls = [] }) {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            pagination={true}
            spaceBetween={30}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
        >
            {urls.map((url, i) => (
                <SwiperSlide key={i}>
                    <img src={url} alt={`project slide ${i}`}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
