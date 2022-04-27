import React from 'react';
import './Home.scss';

import Banners from '../../components/Banners/Banners';
import List from '../../components/List/List';

const Home = () => {


  return (
    <div className="home">
      <div className="banners">
        <Banners></Banners>
      </div>
      <div className='list'>
        <List title='Novos Lançamentos'></List>
      </div>
      <div className='list'>
        <List title='Mais comprados'></List>
      </div>
    </div>
  );
}

export default Home;