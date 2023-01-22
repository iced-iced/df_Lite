import React from "react";
import {Row, Col} from "react-bootstrap";
import MyCard from "../components/Card"


const Catalogue = ({goods}) => {
    return <>
        <Row className="gy-3">
            <Col className="catalogue__header" xs={12}><h1>Каталог товаров</h1></Col>
            {goods.map(el => <Col xs={6} sm={4} lg={3} key={el._id}>
                <MyCard {...el}/>
            </Col>)}
        </Row>
    </>
}

export default Catalogue;