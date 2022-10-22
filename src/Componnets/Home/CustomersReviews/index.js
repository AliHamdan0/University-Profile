import { ReviewCard } from "./ReviewCard";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/controller";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Responsive } from "./SwipperBreakpoints";
import { useRef } from "react";
SwiperCore.use([Pagination, Autoplay]);
export const CustomerReviews = () => {
  const clientsRef = useRef();
  return (
    <div>
      <Swiper
        {...Responsive}
        ref={clientsRef}
        speed={1500}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        dir="ltr"
        className="clientSwipper"
      >
        <SwiperSlide key="1" dir="ltr">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide dir="ltr">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide dir="ltr">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide dir="ltr">
          <ReviewCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
