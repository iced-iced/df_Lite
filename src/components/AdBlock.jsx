import React from "react";
import {Row, Col, Card} from "react-bootstrap";


const Block = ({pic, bg, caption, text}) => {

    let style = {
        backgroundImage: "url(https://abrakadabra.fun/uploads/posts/2022-01/1643130833_19-abrakadabra-fun-p-pattern-lapki-41.png)",
        backgroundSize: "auto 200%",
        backgroundColor: bg
    };
    return <>
        <Row style={style} className="ad-block justify-content-center">
            <Col xs={8} md={9}>
                <Card style={{ height: '90%', width: '65%'}}>
                <h3>{caption}</h3>
                <p>{text}</p>
                </Card>
            </Col>
            <Col xs={4} md={2}>
                 <img src={pic} alt={caption} style={{ height: '100%', width: '110%'}} className="mt-1" md={1}/>
            </Col>
        </Row>
    </>
}

export default Block;
