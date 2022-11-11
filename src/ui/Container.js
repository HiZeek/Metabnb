import React from 'react';
import '../style/Container.css';

const Container = (props) => {
  return (
    <div className={`container ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Container;