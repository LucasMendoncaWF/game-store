import React, { useEffect, useState } from 'react';
import './Home.scss';

import Banners from '../../components/Banners/Banners';
import HorizontalList from '../../components/Horizontal-list/Horizontal-list';
import { GamesService } from '/src/services/games.service';
import { Game } from '/src/interfaces/api-interface';

const Home = () => {

  const [recentGames, setRecentGames]: [Game[], any] = useState([]);
  const [mostDownloaded, setMostDownloaded]: [Game[], any] = useState([]);

  const getGames = () =>{
    setRecentGames(GamesService.getRecents());
    setMostDownloaded(GamesService.getMostDowloaded());
  };

  useEffect(() => {
    getGames();
  }, []);


  return (
    <div className="home">
      <div className="banners">
        <Banners></Banners>
      </div>
      <div className='list'>
        <HorizontalList title='New releases' items={recentGames}></HorizontalList>
      </div>
      <div className='list'>
        <HorizontalList title='Top sellers' items={mostDownloaded}></HorizontalList>
      </div>
    </div>
  );
}

export default Home;