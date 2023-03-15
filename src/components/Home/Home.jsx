import React from "react";
import "./home.css"

import dockVideo from "../../assets/video/fura.mp4";

function Home() {
    return (
        <section id="home">
            <video autoPlay="autoplay" loop="loop" muted id="video-dock">
                <source src={dockVideo} type="video/mp4" />
            </video>
            <div className="home_video-overlay"></div>
            <div className="container">
                <div className="home_text-box">
                    <h2>Nigmat Logistic</h2>
                    <h3>Мы помогаем развиваться нашим партнерам</h3>
                </div>
            </div>
        </section>
    );
}

export default Home;