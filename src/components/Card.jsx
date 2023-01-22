import React from "react";
import {Button, Card, Container} from "react-bootstrap";
import "../components/Card/style.css"
import {useNavigate} from "react-router-dom";

const MyCard = (props) => {
    const navigate = useNavigate();

    const handler = () => {
        navigate(`/product/${props._id}`)
    }

    return <Card onClick={handler} className="h-100">
        <Container className="cards-container">
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text className="card__text">{props.description.slice(0, 11)}...</Card.Text>
                <Card.Img src={props.pictures} className="card__img"></Card.Img>
                <Card.Text className="card__price">{props.price} ₽</Card.Text>
                <Button className="btn">Click</Button>
            </Card.Body>
        </Container>
    </Card>
}
export default MyCard;