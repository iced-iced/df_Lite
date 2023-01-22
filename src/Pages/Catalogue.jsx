import React from "react";
import {Row, Col} from "react-bootstrap";
import MyCard from "../components/Card"


const Catalogue = ({goods}) => {
    return <>
        <Row>
            <Col className="catalogue__header" xs={12}><h1>Каталог товаров</h1></Col>
            {goods.map(el => <Col xs={6} sm={4} md={3} key={el._id}><MyCard price={el.price} name={el.name} txt={el.description} pictures={el.pictures}/></Col>)}
        </Row>
    </>
}

export default Catalogue;