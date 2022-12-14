import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  EffectFade,
  Mousewheel,
  Pagination
} from 'swiper'
import { Welcome } from '../../components/HomeSection/script'
SwiperCore.use([Mousewheel, Pagination, EffectFade])

const swiperOptions = {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: 'fade',
  speed: 1000
}

const Home = () => {
  return (
    <>
      <Swiper
        {...swiperOptions}
      >
        <SwiperSlide>
          {({isActive}) => <Welcome isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          Slide2
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Home
