import React from 'react';
import './List-item.scss';
import { Game } from '/src/interfaces/api-interface';

interface GameItem {
  game: Game;
}

const ListItem = (props: GameItem) => {

  return (
    <div className='game-item-bg'>
      <div className='game-item'>
        <div>
          <div className='game-image' style={{backgroundImage: "url('" + props.game.image + "')"}}> </div>
        </div>
        <div className='game-name'>{props.game.name}</div>
        <div className='price-area'>
          <div className='price'><span>R$</span> {props.game.price?.toFixed(2)}
            {props.game.originalPrice && props.game.price ? 
              <div className='discount'>-{(100 - ((props.game.price * 100) / props.game.originalPrice)).toFixed(0)}%</div> 
            : null }
          </div>
          
          {props.game.originalPrice ? 
            <div className='full-price'>R$ {props.game.originalPrice.toFixed(2)}</div> 
          : null }
        </div>
        <div className='tags'>
          {props?.game?.tags?.slice(0,4)?.map((tag: string) => 
            <div key={tag} className='tag'>{tag}</div>
          )}
        </div>
        <button className='check-button item-button'>Know more</button>
      </div>
    </div>
  );
}

export default ListItem;