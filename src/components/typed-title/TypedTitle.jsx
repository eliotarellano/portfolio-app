import React from 'react';
import './TypedTitle.css';
import Typewriter from 'typewriter-effect';

const TypedTitle = (props) => {

    const text = "<span className='user-card-h1'>I'm <b>Eliot Arellano</b></span>";

    return (
        <div className="typed-title">
            <Typewriter
                onInit={(typewriter) => {
                typewriter.typeString(text)
                    .pauseFor(500)
                    .start();
                }}
                options={{
                    loop: true,
                }}
            />
        </div>
    )
}

export default TypedTitle;
