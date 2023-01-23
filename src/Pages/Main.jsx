import React from "react";
import {Row, Col} from "react-bootstrap";
import AdBlock from "../components/AdBlock";


let ads = [
    {
        caption: "Зубочистки",
        text: "Лучшее средство поддержания здоровья зубов для ваших любимых питомцев",
        bg: "springgreen",
        pic: "https://avatars.mds.yandex.net/get-mpic/5268639/img_id2353893688558851266.png/orig"
    },
    {
        caption: "Мягкие косточки",
        text: "Ваш питомец скажет спасибо",
        bg: "violet",
        pic: "https://zveryatam.ru/images/products/product_img_7207.gif"
    },
    {
        caption: "Нямка",
        text: "Лучшее лакомство для собак за пол цены",
        bg: "violet",
        pic: "https://ozerki.ru/er-pics/images/goods/90538/main"
    },
    {
        caption: "Полезное питание",
        text: "Здоровая шерсть без забот,предлагаем индивидуальный подбор питания",
        bg: "orange",
        pic: "https://avatars.dzeninfra.ru/get-zen_doc/3420563/pub_600975a9fc8f1029f73a84e7_60097652da2b0069732e0563/scale_1200"
    },
    {
        caption: "Биточки",
        text: "Лучшее лакомство для собак за пол цены",
        bg: "lightblue",
        pic: "https://minizoomarket.ru/upload/iblock/f46/f46dade3b99c80f940dc782804e9c45b.png"
    },
    {
        caption: "Овсяночка",
        text: "Вкусная и полезная смесь для пищеварения",
        bg: "lightblue",
        pic: "https://thumb.tildacdn.com/tild6164-3533-4930-a439-323066366233/-/resize/228x/-/format/webp/_4.png"
    }
]

const Main = () => {
    return <>
    <Row className="gx-3">
        <Col xs={12} className="">
                <AdBlock {...ads[0]}></AdBlock>
        </Col>
            <Col xs={12} sm={6}>
            <AdBlock {...ads[1]}></AdBlock>
        </Col>
        <Col xs={12} sm={6}>
            <AdBlock {...ads[2]}></AdBlock>
        </Col>
        <Col xs={12}>
            <AdBlock {...ads[3]}></AdBlock>
        </Col>
        <Col xs={12} sm={6}>
            <AdBlock {...ads[4]}></AdBlock>
        </Col>
        <Col xs={12} sm={6}>
            <AdBlock {...ads[5]}></AdBlock>
        </Col>
    </Row>
    </>
}

export default Main;