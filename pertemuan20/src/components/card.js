import React from 'react';

const Card = (props) => {
    return(
    <div className="card-container">
        <p>{props.name}</p>
        <p>{props.institution}</p>
        <p>{props.address}</p>
        <p>{props.phoneNumber}</p>
    </div>
    );
};

export default Card;