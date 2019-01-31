import React from 'react';
import './HelloWorld.css';

const HelloWorld = (props) => {
    const {id, textoProp } = props;

    return (
      <div className="hello-world" id={id}>
          <p>{textoProp}</p>
      </div>
    );
};

export default HelloWorld;