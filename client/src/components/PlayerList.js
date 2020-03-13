import React from 'react';

import PlayerCard from './PlayerCard.js';

const PlayerList = props => {

    return (
        <div>
            {props.data.map(item => (
               <PlayerCard item={item} key={item.id}/>
            ))}
        </div>
    );
}

export default PlayerList;
