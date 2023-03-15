import React from "react";
import "./do.css"

import Box from "./components/Box";

import truck from "../../assets/images/truck_edit.jpg";
import cargo from "../../assets/images/cargo.jpg";
import plane from "../../assets/images/plane.jpg";
import freight from "../../assets/images/freight-train.jpg";

function Do() {
    const boxData = [
        {
            image: truck,
            text: `Осуществляем перевозку автомобильным транспортом по всем странам Европы, СНГ, регионом Казахстана. Специализируемся на перевозка продуктов питания с 
            температурным режимом.`
        },
        {
            image: cargo,
            text: `Мульти-модульные перевозки производятся по специальным заказам клиентов, на определенные товары больших объем из стран не досягаемых автомобильными перевозками.`
        },
        {
            image: plane,
            text: `Перевозки авиа транспортом предпринимаются при особо хрупких и ценных грузах с ограниченными сроками доставки, под специальный заказ клиента, в малых объемах.`
        },
        {
            image: freight,
            text: `Перевозки железо-дорожными путями самый надежный и доступный вариант перевозок при больших объемах, малой стоимости, и с неограниченными сроками доставки груза`
        }
    ];


    return (
        <section id="do" className="wrapper style2">
            <div className="container">
                <div className="do_boxes">
                    {boxData.map(e => <Box background={e.image} text={e.text} />)}
                </div>
            </div>
        </section>
    );
}

export default Do;