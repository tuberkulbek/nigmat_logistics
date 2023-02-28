import React from "react";
import "./do.css"

import Box from "./components/Box";

import truck from "../../assets/images/truck_edit.jpg";
import cargo from "../../assets/images/cargo.jpg";
import plane from "../../assets/images/plane.jpg";
import freight from "../../assets/images/freight-train.jpg";

function Do() {
    const boxData = [truck, cargo, plane, freight]

    return (
        <section id="do" className="wrapper style2">
            <div className="container">
                <div className="do_boxes">
                    {boxData.map(e=><Box background={e}/>)}
                </div>
            </div>
        </section>
    );
}

export default Do;