import Link from 'next/link';
import { path } from '/config/config';
import AppLayout from '../components/AppLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import 'swiper/swiper-bundle.css';
import { useEffect, useState } from 'react';

SwiperCore.use([Pagination])

const Home = () => {
  const [dday, setDday] = useState(["0"]);
  useEffect(() => {
    const _now = new Date();
    const _dday = new Date("2021-10-31");
    const gap = _now.getTime() - _dday.getTime();
    const result = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;

    if (result.toString().length >= 2) {
      setDday(Array.from(result.toString()));
    } else {
      setDday([
        ...dday,
        result.toString()
      ]);
    }
  }, []);

  return (
    <AppLayout className={"intro"}>
      <div className="main-content" id="content">
        <h1 className="logo">
          <img src={`${path}/images/intro_logo.png`} alt="" />
        </h1>
        <div className="main-title">
          <img src={`${path}/images/intro_title.png`} alt="" />
        </div>
        <div className="slide-wrap">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
              <SwiperSlide>
                <p className="text">
                  <strong>
                    EXO XR GALLERY VER.2<br />
                    NOW OPEN!
                  </strong>
                </p>
                <p className="text">
                  CHECK OUT NEW VIDEOS AND REWARDS!
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="d-day">
                  SITE CLOSES IN
                  <div className="day">
                    {dday.map((v, i) => (
                      <span key={v + i}>{v}</span>
                    ))}
                  </div>
                  DAYS
                </div>	
              </SwiperSlide>
              <SwiperSlide>
                <p className="text">
                  This page provides official EXO XR Gallery videos<br />
                  for fans worldwide who are not able to access the U+VR app.
                </p>
                <p className="text">
                  You can discover hidden rewards if you <br className="m" />
                  complete the full journey.
                </p>
              </SwiperSlide>
          </Swiper>
        </div>
        <div className="button-wrap">
          <Link href={`/gallery`} as={`${path}/gallery`}>
            <a className="button">
              <span>ENTER</span>
            </a>
          </Link>
        </div>
      </div>
    </AppLayout>
  )
}

export default Home;