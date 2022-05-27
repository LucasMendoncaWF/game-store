import React, { useEffect, useState } from 'react';
import './Horizontal-list.scss';
import { Game } from '/src/interfaces/api-interface';
import Arrow from '/src/assets/images/arrow.png';
import seeMoreBG from '/src/assets/images/bg-see-more.jpg';
import ListItem from '../List-item/List-item';

interface ListProps {
  title: string;
  items: Game[];
}

const HorizontalList = (props: ListProps) => {

  const [currentPosition, setPosition]: [number, any] = useState(0);

  const setNewPosition = (direction: boolean) => {
    let index = currentPosition;
    if(direction) {
      index += 1;
    } else {
      index -= 1;
    }
    if(index <= -1 || index >= props.items.length - (getMaxPerPage() - 2)) {
      index = currentPosition;
    }
    setPosition(index);
  }

  const getMaxPerPage = () => {
    const { innerWidth: width } = window;
    const windowPercentage = width / 100;
    const windowMargin = windowPercentage * 10;
    console.log(Math.round((width - windowMargin) / 340))
    return Math.round((width - windowMargin) / 340);
  }

  useEffect(() => {
    function handleResize() {
      setNewPosition(true);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className="list">
      <div className='list-title'>{ props.title }</div>
      <div className='list-area'>
        <div className='list-items' style={{width: ((340 * props.items.length) +340) + 'px', transform: 'translate(' + (currentPosition * -340) + 'px, 0)'}}>
          {props.items?.map((game) => {
              return <ListItem game={game}></ListItem>
          })}
          <a><div className='see-more-item' style={{ 
            backgroundImage: "url('" + seeMoreBG + "')" 
          }}>See more: <br/>{props.title}</div></a>
        </div>
      </div>

      <div className='arrow-list right' onClick={() => {setNewPosition(true)}}>
        <img src={Arrow} alt="arrow" />
      </div>
      <div className='arrow-list left' onClick={() => {setNewPosition(false)}}>
        <img src={Arrow} alt="arrow" />
      </div>
      <a href="" className='see-more'>See more</a>
    </div>
  );
}

export default HorizontalList;