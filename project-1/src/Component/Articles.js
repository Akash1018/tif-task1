import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Article.css';
import { data } from '../data';

function App() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    draggable:true,
    autoplay:true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          rows:3,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <div className="Apps">
      <h1 className='Latest'>Latest Articles</h1>
      <Slider {...settings}>
        {data.map((item) => (
          <div className="card">
            <div className="card-top">
               <img
                src={
                  item.img
                }
                alt={item.head}
              />
              </div>
              <div className="card-bottom">
                <h1>{item.head}</h1>
                <p>{item.para}</p>
                <button>Read More</button>
              </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;