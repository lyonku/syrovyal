import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ReviewsSection.scss";

import ReviewsData from "./assets/ReviewsData.json";
import Spices from "components/Assets/Spices";
import Spice from "components/Assets/Spice";

interface ReviewsSectionProps {}

const ReviewsSection: FC<ReviewsSectionProps> = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-section__wrap">
        <h2 className="reviews-section__title">О НАС ГОВОРЯТ</h2>
        <div className="reviews-section__carousel-wrap">
          <Swiper
            className="reviews-section__carousel"
            spaceBetween={44}
            slidesPerView={3}
            modules={[Autoplay, Navigation, Pagination]}
            pagination={{ clickable: true }}
            onBeforeInit={(swiper: any) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            loop={true}
          >
            {ReviewsData.map((review, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="reviews-section__carousel-item"
                >
                  <img src={review.img.src} alt={review.img.alt} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            className="reviews-section__carousel-btn reviews-section__carousel-prev-btn"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img src="/imgs/carousel-left.svg" alt="" />
          </button>
          <button
            className="reviews-section__carousel-btn reviews-section__carousel-next-btn"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <img src="/imgs/carousel-right.svg" alt="" />
          </button>
        </div>
        <Spices className="reviews-section__spices_left-bottom" />
        <Spice className="reviews-section__spice_right-bottom" type="3" />
      </div>
    </section>
  );
};

export default ReviewsSection;
