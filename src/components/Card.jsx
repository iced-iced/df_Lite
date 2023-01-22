import React from "react";
import {Button, Card, Container} from "react-bootstrap";
import "../components/Card/style.css"

const MyCard = (props) => {
    return <Card>
        <Container className="cards-container">
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text className="card__text">{props.txt.slice(0, 11)}...</Card.Text>
                <Card.Img src={props.pictures} className="card__img"></Card.Img>
                <Card.Text className="card__price">{props.price} руб.</Card.Text>
                <Button className="btn">Click</Button>
            </Card.Body>
        </Container>
    </Card>
}
export default MyCard;