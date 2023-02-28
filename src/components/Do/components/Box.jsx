import React from "react";

function Box({background}) {

    return (
        <div className="do_box">
            <div className="do_image" style={{backgroundImage: `url(${background})`}}></div>
            <div className="do_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa obcaecati inventore temporibus et delectus officia quaerat ex possimus magni quam commodi,
            blanditiis nam aperiam qui fugiat repellendus iusto tempora voluptas!</p>
            </div>
        </div>
    );
}

export default Box;