import React, { useEffect, useState } from 'react';
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation'

import { Pagination, Navigation, Autoplay } from "swiper";

import star1 from "../images/star-v1.svg"
import star2 from "../images/star-v2.svg"

const Container = styled.div`
height: 460px;
margin: 0 auto;

.swiper {
    width: 100%;
    height: 100%;
}


.swiper-pagination-bullet {
    background: #ffa244;
}

.swiper-slide {
    min-height: 300px;

    div {
        padding: 20px;
        margin: 0 auto;
        width: 80%;
        min-height: 70%;
        min-height: 300px;
        border-radius: 8px;
        background-color: rgba(255,255,255,.07);

        
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
                background: url(${star1})
            }

            &:after {

            }

            img {
                width: 100%;
            }
        }

        h4 {
            margin-top: 10px;
            margin-bottom: 15px;
            color: #fff;
            font-size: 24px;
            font-family: Gilroy,sans-serif;
            font-weight: 700;
        }

        P {
            padding-bottom: 15px;
            color: #6e6e74;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
        }

        span {
            font-size: 10px;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 2px;
        }
    }
}

.swiper-pagination {
    margin: 0 auto;
}

`


const Carousel = () => {
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 648 && window.innerWidth < 980) {
                setSlidesPerView(2)
            } else if (window.innerWidth > 980) {
                setSlidesPerView(3)
            } else {
                setSlidesPerView(1)
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Container>
            <Swiper
                slidesPerView={slidesPerView}
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
                effect={"cards"}
                grabCursor={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <section></section>
                        <h4>I have very positive impressions</h4>
                        <p>I have very positive impressions using this platform. A reliable company with profitable mining and fast payouts. The company has a certificate and friendly competent support.</p>
                        <span> RIMON MORAN</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <section></section>
                        <h4>My first payments have already arrived</h4>
                        <p>This project has a lot advantages with round-the-clock support that solves any of your questions and problems, detailed analytics, daily payments that betray the reputation and trust in the client, as well as a security system for your assets In general I recommend working wiht them, my first payments ahve already dropped into the wallet.</p>
                        <span> Job Mac</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <section></section>
                        <h4>Best mining site</h4>
                        <p>A perfect site for investment, very profitable and pleasant packages, very quick payback. I can recommend this service to everyone, Best wishes to you!. </p>
                        <span> John Hogue</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <section></section>
                        <h4>I highly recommend...</h4>
                        <p>This is a fairly stable platform for earning money. They have very interesting palns, they are profitable. The referral program is interesting. At first I had some problems, but the technical support successfully helped me. I recommend it.</p>
                        <span>Luis Farry</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <section></section>
                        <h4>I've already found something for myself</h4>
                        <p>Everyone can easily mine on this site. Support team is always there to help with questions. One of the most important things on this site is that withdrawal requests from AtomicHashes are processed instanly thanks to the automated payout process, so you don't have to wait a day or two. I already found something for myself.</p>
                        <span>William Hossen</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <section></section>
                        <h4>I have very positive impressions</h4>
                        <p>I have very positive impressions from using this platform. A reliable company with profitable mining and fast payouts. the company has a certificate and friendly, competent support.</p>
                        <span>Rimon Moran</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Container >
    )
}

export default Carousel;