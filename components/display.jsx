import React from "react";
import CardComponent from "./card-component";
import { Fade } from "react-awesome-reveal";

const Display = (props) => {
  return (
    <div
      style={{ background: "#0b0b0d", color: "white" }}
      className="main-div"
      id="project"
    >
      <Fade left cascade>
        <section className="div-1">  
          <div className ="cardContainer">
            {props.data.map((data2, ind) => {
              const {img, title, text} = data2;
              return (
                <CardComponent
                  key={data2 + ind}
                  img={img}
                  title={title}
                  text={text}
                />
              );
            })}
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default Display;

