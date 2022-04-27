import React, { useEffect, useState } from 'react';
import BannerItem from '../Banner-item/Banner-item';
import './Banners.scss';
import { GameBanner } from '/src/interfaces/api-interface';
import Arrow from '/src/assets/images/arrow.png';
import { GamesService } from '/src/services/games.service';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

const Banners = () => {

  const [index, setIndex]: [number, any] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [banners, setBanners]: [GameBanner[], any] = useState([]);

  const getBanners = () =>{
    setBanners(GamesService.getBanners());
  };

  useEffect(() => {
    getBanners();
  }, []);

  const changeBanner = (increase: boolean = false) => {
    setIndex(increase? index + 1 : index - 1); 
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className="banners">
      { banners ? 
      <div className='banners-list' style={
          {
            width: (windowDimensions - ((windowDimensions * 10) / 100)) * 3, 
            transform: 'translateX(' + -((windowDimensions - ((windowDimensions * 10) / 100)) * index) + 'px)',
          }
        }>
        {banners?.map((banner) => {
          return <BannerItem banner={banner}></BannerItem>
        })}
        </div>
      : null }
        { banners && index < banners.length - 1 ?
          <div className='arrow right' onClick={() => changeBanner(true)}>
            <img src={Arrow} alt="arrow" />
          </div>
        : null }
        { index > 0 && banners ?
          <div className='arrow left' onClick={() => changeBanner()}>
            <img src={Arrow} alt="arrow" />
          </div>
        : null }
    </div>
  );
}

export default Banners;