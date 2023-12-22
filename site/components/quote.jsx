import React from 'react';
import { Fade } from "react-awesome-reveal";

const Quote = () => {
    return (
        <div className="quote-div">
            <div className="head mx-5">
                <div className="main-div">
                <Fade top cascade duration={2500}>
                    <section className="div-1 quote">
                        <p className="my-3">"It's don't matter if you're black or white"</p>
                        <span>- <em>Michael Jackson</em></span>
                    </section>
                </Fade>
                </div>
            </div>
        </div>
    )
}

export default Quote;
