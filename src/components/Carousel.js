import waldoEasy from "../img/waldo-easy.jpg";
import waldoMedium from "../img/waldo-medium.jpg";
import waldoHard from "../img/waldo-hard.jpg";
import easy1 from "../img/easy-1.png";
import easy2 from "../img/easy-2.png";
import easy3 from "../img/easy-3.png";
import med1 from "../img/med-1.png";
import med2 from "../img/med-2.png";
import med3 from "../img/med-3.png";
import hard1 from "../img/hard-1.png";
import hard2 from "../img/hard-2.png";
import hard3 from "../img/hard-3.png";

import CarouselSlide from "./CarouselSlide";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination } from "swiper";

function Carousel() {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#fff",
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
        <CarouselSlide
          url={waldoEasy}
          chars={[
            { name: "Mojo Jojo", series: "Power Puff Girls", url: easy1 },
            { name: "Goku", series: "Dragon Ball", url: easy2 },
            { name: "Batman", series: "The Dark Knight", url: easy3 },
          ]}
          alt="Easy Level"
          name="Robot City"
        />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <CarouselSlide
          url={waldoMedium}
          chars={[
            { name: "Waldo", series: "Where's Waldo?", url: med1 },
            { name: "Crash", series: "Crash Bandicoot", url: med2 },
            { name: "R2D2", series: "Star Wars", url: med3 },
          ]}
          alt="Medium Level"
          name="Universe 113"
        />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <CarouselSlide
          url={waldoHard}
          chars={[
            { name: "Spider-man", series: "Spider-man", url: hard1 },
            { name: "Ferb", series: "Phineas & Ferb", url: hard2 },
            { name: "Ash Ketchum", series: "Pokemon", url: hard3 },
          ]}
          alt="Hard Level"
          name="AD 2222"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;