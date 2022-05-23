import React, { useEffect, useState } from 'react';
import './Horizontal-list.scss';
import { Game } from '/src/interfaces/api-interface';
import Arrow from '/src/assets/images/arrow.png';
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
    if(index <= -1 || index >= props.items.length - getMaxPerPage()) {
      index = currentPosition;
    }
    setPosition(index);
  }

  const getMaxPerPage = () => {
    const { innerWidth: width } = window;
    return width < 790 ? 0 : 1;
  }

  useEffect(() => {
    function handleResize() {
      setPosition(0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className="list">
      <div className='list-title'>{ props.title }</div>
      <div className='list-area'>
        <div className='list-items' style={{width: 340 * props.items.length + 'px', transform: 'translate(' + (currentPosition * -355) + 'px, 0)'}}>
          {props.items?.map((game) => {
              return <ListItem game={game}></ListItem>
          })}
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