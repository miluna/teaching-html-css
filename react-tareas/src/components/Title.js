import React from 'react';
import './Title.css'

const Title = (props) => {
    return (
        <div className="title">
            <h2>{props.name}</h2>
        </div>
    );
};

export default Title;
