import React from "react";

function Box({background, text}) {

    return (
        <div className="do_box">
            <div className="do_image" style={{backgroundImage: `url(${background})`}}></div>
            <div className="do_text">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Box;