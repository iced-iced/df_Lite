import React from "react";
import {Row, Col} from "react-bootstrap";


const Block = ({pic, bg, caption, text}) => {

    let style = {
        backgroundImage: "url(https://abrakadabra.fun/uploads/posts/2022-01/1643130833_19-abrakadabra-fun-p-pattern-lapki-41.png)",
        backgroundSize: "auto 200%",
        backgroundColor: bg
    };
    return <>
        <Row style={style} className="ad-block">
            <Col xs={8}>
            <h3>{caption}</h3>
            <p>{text}</p>
            </Col>
            <Col xs={4}>
            <img src={pic} alt={caption} style={{ width: '10rem' }}/>
            </Col>
        </Row>
    </>
}

export default Block;

const ads = ["https://w7.pngwing.com/pngs/829/872/png-transparent-drawing-coloring-book-painting-bone-painting-white-text-hand.png", "https://w7.pngwing.com/pngs/837/158/png-transparent-white-and-brown-dog-art-pet-sitting-happy-animals-dog-animals-in-spanish-white-beard-dog-game-mammal-food.png", "https://w7.pngwing.com/pngs/600/7/png-transparent-dog-cat-food-junk-food-color-cat-food-color-splash-food-animals.png"]