import React from 'react';

const PlayerCard = props => {

    return (
        <div className="cards">
            <p>{props.item.name}</p>
            <p>{props.item.country}</p>
            <p>{props.item.searches}</p>
        </div>
    );
}


export default PlayerCard;