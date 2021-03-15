import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../images/IMG_0001.jpg';
import slide2 from '../images/IMG_0002.jpg';
import slide3 from '../images/IMG_0003.jpg';
import slide4 from '../images/IMG_0004.jpg';
import slide5 from '../images/IMG_0005.jpg';

const PortfolioPage = () => {
    return (
        <section className="flex flex-col h-screen w-full" style={{backgroundColor: '#222D44'}}>
            <div className="my-40">
                <h1 className="text-center italic text-white">Portfolio</h1>
                <Slider
                    className="my-auto"
                    dots={false}
                    fade={true}
                    autoplay={true}
                    autoplaySpeed={4000}
                    speed={1500}
                    pauseOnHover={false}
                >
                    <div className="">
                        <img src={slide1} alt="slide 1"/>
                    </div>
                    <div className="">
                        <img src={slide2} alt="slide 2"/>
                    </div>
                    <div className="">
                        <img src={slide3} alt="slide 3"/>
                    </div>
                    <div className="">
                        <img src={slide4} alt="slide 4"/>
                    </div>
                    <div className="">
                        <img src={slide5} alt="slide 5"/>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default PortfolioPage;