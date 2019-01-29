import React from 'react';

const HelloWorld = (props) => {
    const {id, textoProp } = props;

    return (
      <div id={id}>
          <p>{textoProp}</p>
      </div>
    );
};

export default HelloWorld;