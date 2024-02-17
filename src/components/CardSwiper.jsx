import { Card } from './Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/bundle'
import { useInfo } from '../context/contextWrapper'

export const CardSwiper = () => {
    const { data } = useInfo()
    const slidesData = Array(12).fill(data)

    return (
        <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            navigation
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                963: {
                    slidesPerView: 1,
                },
                1488: {
                    slidesPerView: 3,
                },
            }}>
            {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                    {slide.map((d, innerIndex) => (
                        <Card
                            key={innerIndex}
                            sumBefore={d.bpi?.USD?.rate_float}
                            info={d.chartName}
                        />
                    ))}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
