import React from "react";
import {Row, Col} from "react-bootstrap";
import AdBlock from "../components/AdBlock";


let ads = [
    {
        caption: "Нямка",
        text: "Лучщее лакомство для собак за пол цены",
        bg: "springgreen",
        pic: "https://avatars.mds.yandex.net/get-mpic/5268639/img_id2353893688558851266.png/orig"
    },
    {
        caption: "Нямка",
        text: "Лучщее лакомство для собак за пол цены",
        bg: "violet",
        pic: "https://avatars.dzeninfra.ru/get-zen_doc/3420563/pub_600975a9fc8f1029f73a84e7_60097652da2b0069732e0563/scale_1200"
    },
    {
        caption: "Нямка",
        text: "Лучщее лакомство для собак за пол цены",
        bg: "lightblue",
        pic: "https://ozerki.ru/er-pics/images/goods/90538/main"
    }
]

const Main = () => {
    return <>
    <Row>
        <Col xs={12}>
                <AdBlock {...ads[0]}></AdBlock>
        </Col>
            <Col xs={12} sm={6}>
            <AdBlock {...ads[1]}></AdBlock>
        </Col>
        <Col xs={12} sm={6}>
            <AdBlock {...ads[2]}></AdBlock>
        </Col>
        <Col xs={12}>
            <AdBlock {...ads[0]}></AdBlock>
        </Col>
        <Col xs={12} sm={6}>
            <AdBlock {...ads[1]}></AdBlock>
        </Col>
        <Col xs={12} sm={6}>
            <AdBlock {...ads[2]}></AdBlock>
        </Col>
    </Row>
    </>
}

export default Main;