import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import './button.css'
function Nav() {
    return (

        <div className='w-100'>
            <nav className="navbar2 navbar-expand-lg ">
                <div className='container'>
                    <div className='header-nav'>


                        <ul className='main-head'>

                            <li className='items'><a href='/'>Awards & Achievments</a></li>
                            <li className='items'><a href='/'>Gallery</a></li>
                            <li className='items'><a href='/'>Careers</a></li>
                            <li className='items'><a href='/'>School Calendar</a></li>
                            <li className='items'><a href='/'>Alumini</a></li>
                            <li className='items'><a href='/'>eMagazine</a></li>
                            <li className='items'><a href='/'>CUET</a></li>
                        </ul>

                    </div>
                </div>


            </nav>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                pagination={{ clickable: true }}

            >

                <SwiperSlide>
                    <div className='banner'>
                        <img className='banner-img' src='../assets/benner (1).jpg' alt='Banner' />
                        <div className='overlay'>

                            <button class="tour-button" >Virtual Tour</button>
                            <button class="career-button" >Career</button>

                        </div>
                        <div className='overlay-bottom-text'>
                            <h2 className='banner-text'>Making a Difference to Education so that Education can make a Difference to the World.</h2>
                            <p className='banner-subtext'>Arise! Awake! and Stop not till the goal is reached</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner'>
                        <img className='banner-img' src='../assets/benner (2).jpg' alt='Banner' />
                        <div className='overlay'>

                            <button class="tour-button" >Virtual Tour</button>
                            <button class="career-button" >Career</button>

                        </div>
                        <div className='overlay-bottom-text'>
                            <h2 className='banner-text'>Making a Difference to Education so that Education can make a Difference to the World.</h2>
                            <p className='banner-subtext'>Arise! Awake! and Stop not till the goal is reached</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner'>
                        <img className='banner-img' src='../assets/benner (3).jpg' alt='Banner' />
                        <div className='overlay'>

                            <button class="tour-button" >Virtual Tour</button>
                            <button class="career-button">Career</button>

                        </div>
                        <div className='overlay-bottom-text'>
                            <h2 className='banner-text'>Making a Difference to Education so that Education can make a Difference to the World.</h2>
                            <p className='banner-subtext'>Arise! Awake! and Stop not till the goal is reached</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner'>
                        <img className='banner-img' src='../assets/benner (4).jpg' alt='Banner' />
                        <div className='overlay'>

                            <button class="tour-button" >Virtual Tour</button>
                            <button class="career-button" >Career</button>

                        </div>
                        <div className='overlay-bottom-text'>
                            <h2 className='banner-text'>Making a Difference to Education so that Education can make a Difference to the World.</h2>
                            <p className='banner-subtext'>Arise! Awake! and Stop not till the goal is reached</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner'>
                        <img className='banner-img' src='../assets/banner4.jpg' alt='Banner' />
                        <div className='overlay'>

                            <button class="tour-button" >Virtual Tour</button>
                            <button class="career-button" >Career</button>

                        </div>
                        <div className='overlay-bottom-text'>
                            <h2 className='banner-text'>Making a Difference to Education so that Education can make a Difference to the World.</h2>
                            <p className='banner-subtext'>Arise! Awake! and Stop not till the goal is reached</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>

    )
}

export default Nav