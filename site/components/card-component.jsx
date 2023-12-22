import React from 'react';
import {Container} from 'react-bootstrap';

const CardComponent = ({img,title,text}) => {

    return (
      <Container>
        <div className="container card my-5">
          <img src={img} alt="img" />
          <div className="overlay"></div>
          <div className="con-text">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </Container>
    );
}

export default CardComponent;