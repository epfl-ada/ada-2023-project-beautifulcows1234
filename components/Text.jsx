import React from 'react';
import { Fade } from "react-awesome-reveal";

const Text = (props) => {
    const data2 = props.data;
    return (
      <div
        style={{ background: "#0b0b0d", color: "white" }}
        className="main-div"
        id= "1"
      >
        <Fade left cascade>
        <section className="div-1 about">
          <p className='title'>{data2.title}</p>
          <div>
            <p className="text mt-4 mb-3">
              {data2.text1}
            </p>
            <p className="text my-3">
              {data2.text2}
            </p>
          </div>
        </section>
        </Fade>
      </div>
    );
}

export default Text;
