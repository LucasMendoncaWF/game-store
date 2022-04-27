import React from 'react';
import './List.scss';

interface ListProps {
  title: string;
}

const List = (props: ListProps) => {

  return (
    <div className="list">
      <div className='list-title'>{ props.title }</div>
    </div>
  );
}

export default List;