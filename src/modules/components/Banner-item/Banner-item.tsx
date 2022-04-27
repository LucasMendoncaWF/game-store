import React from 'react';
import './Banner-item.scss';
import { GameBanner } from '/src/interfaces/api-interface';

interface Banners {
  banner?: GameBanner;
}

const BannerItem = (props: Banners) => {
  let banner = props.banner;
  return (
    <div className='banner-container'>
      { banner ? 
      <div className="banner">   
        <div className='image' style={{ 
          backgroundImage: `url(${banner.image})` 
        }}>
          { !!banner.availability ? (
              (typeof banner.availability === 'string' || banner.availability instanceof String)?
              <div className='availability'><span>{banner.availability}</span></div>
              :
              <div className='availability date'><span>Available in {banner.availability?.getDate()}/{(banner.availability?.getMonth() || 0) + 1}/{banner.availability?.getFullYear()}</span></div>
          ): null}
        
        </div>
        <div className='info'>
          <div className='game-name'>{banner.name}</div>
          <div className='description'>{banner.description}</div>
          <div className='tags'>
            {banner.tags?.map((tag: string) => 
              <div className='tag'>{tag}</div>
            )}
          </div>
          <div className='price-area'>
            <div className='price'><span>R$</span> {banner.price?.toFixed(2)}
              {banner.originalPrice && banner.price ? 
                <div className='discount'>-{(100 - ((banner.price * 100) / banner.originalPrice)).toFixed(0)}%</div> 
              : null }
            </div>
            
            {banner.originalPrice ? 
              <div className='full-price'>R$ {banner.originalPrice.toFixed(2)}</div> 
            : null }
          </div>
          <button className='check-button'>Know more</button>
        </div>
      </div> 
      : null }
    </div>
  )
}

export default BannerItem;