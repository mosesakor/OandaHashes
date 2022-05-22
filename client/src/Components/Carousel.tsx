import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper';

import star1 from '../images/star-v1.svg';
// import star2 from '../images/star-v2.svg';

const Container = styled.div`
  display: flex;

  .swiper {
  }

  .swiper-pagination-bullet {
    background: var(--link-active);
  }

  .swiper-slide {
    display: flex;
    height: fit-content;
    margin-bottom: 4rem;

    div {
      padding: 1rem;
      margin: 0 auto;
      width: 80%;
      min-height: 70%;
      min-height: 300px;
      border-radius: 8px;
      background-color: var(--background-secondary);
      border: 1px solid var(--border);

      section {
        dsiplay: flex;
        align-items: center;
        height: 26px;
        width: 200px;

        &:before {
          content: '';
          width: 88px;
          height: 18px;
          display: block;
          overflow: hidden;
          background: url(${star1});
        }

        &:after {
        }

        img {
          width: 100%;
        }
      }

      h4 {
        margin: 0.5rem 0;
        color: #fff;
        font-size: 2rem;
        font-weight: 700;
      }

      p {
        padding-bottom: 15px;
        font-size: 1rem;
        font-weight: 400;
      }

      span {
        font-size: 0.8rem;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 0.15rem;
      }
    }
  }

  .swiper-pagination {
    margin: 0 auto;
  }
`;

type CarouselState = {
  slidesPerView: number;
};

export default class Carousel extends React.PureComponent<{}, CarouselState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = { slidesPerView: 1 };

    this.handleResize = this.handleResize.bind(this);
    window.addEventListener('resize', this.handleResize);
  }

  componentDidMount() {
    this.handleResize();
  }

  handleResize() {
    if (window.innerWidth > 648 && window.innerWidth < 980) {
      this.setState({ slidesPerView: 2 });
    } else if (window.innerWidth > 980) {
      this.setState({ slidesPerView: 3 });
    } else {
      this.setState({ slidesPerView: 1 });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <Container>
        <Swiper
          slidesPerView={this.state.slidesPerView}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: 'bullets',
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation, Autoplay]}
          effect={'cards'}
          grabCursor={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <section></section>
              <h4>I have very positive impressions</h4>
              <p>
                I have very positive impressions using this platform. A reliable
                company with profitable mining and fast payouts. The company has
                a certificate and friendly competent support.
              </p>
              <span> RIMON MORAN</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <section></section>
              <h4>My first payments have already arrived</h4>
              <p>
                This project has a lot advantages with round-the-clock support
                that solves any of your questions and problems, detailed
                analytics, daily payments that betray the reputation and trust
                in the client, as well as a security system for your assets In
                general I recommend working wiht them, my first payments ahve
                already dropped into the wallet.
              </p>
              <span> Job Mac</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <section></section>
              <h4>Best mining site</h4>
              <p>
                A perfect site for investment, very profitable and pleasant
                packages, very quick payback. I can recommend this service to
                everyone, Best wishes to you!.{' '}
              </p>
              <span> John Hogue</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <section></section>
              <h4>I highly recommend...</h4>
              <p>
                This is a fairly stable platform for earning money. They have
                very interesting palns, they are profitable. The referral
                program is interesting. At first I had some problems, but the
                technical support successfully helped me. I recommend it.
              </p>
              <span>Luis Farry</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <section></section>
              <h4>I've already found something for myself</h4>
              <p>
                Everyone can easily mine on this site. Support team is always
                there to help with questions. One of the most important things
                on this site is that withdrawal requests from AtomicHashes are
                processed instanly thanks to the automated payout process, so
                you don't have to wait a day or two. I already found something
                for myself.
              </p>
              <span>William Hossen</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <section></section>
              <h4>I have very positive impressions</h4>
              <p>
                I have very positive impressions from using this platform. A
                reliable company with profitable mining and fast payouts. the
                company has a certificate and friendly, competent support.
              </p>
              <span>Rimon Moran</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    );
  }
}
