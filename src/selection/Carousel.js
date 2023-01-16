import LevelInfo from "../LevelInfo";
import CarouselSlide from "./CarouselSlide";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination } from "swiper";

function Carousel(props) {
  const { setLevel } = props;

  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#fff",
        marginRight: 0 + "px",
        marginLeft: 0 + "px",
      }}
      slidesPerView={1}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Keyboard, Pagination]}
    >
      <SwiperSlide className="flex items-center justify-center">
        <CarouselSlide setLevel={() => setLevel(LevelInfo.easy)} level={LevelInfo.easy} />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <CarouselSlide setLevel={() => setLevel(LevelInfo.med)} level={LevelInfo.med} />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <CarouselSlide setLevel={() => setLevel(LevelInfo.hard)} level={LevelInfo.hard} />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
