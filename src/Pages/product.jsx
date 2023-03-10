import React, {useState, useEffect} from "react";
import {Image , Col, Row, Table, ButtonGroup, Button, Alert, Badge} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import {ChevronLeft, Plus, Dash, BalloonHeart, Award, Truck} from "react-bootstrap-icons";


const Product = ({token}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [cnt, setCnt] = useState(0);
    useEffect(() => {
        fetch(`https://api.react-learning.ru/products/${id}`, {
            headers : {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (!data.error) {
                setProduct(data);
            }
        })
    }, [])

    const navigate = useNavigate();

    const move = (e) => {
        e.preventDefault();
        navigate("/catalogue");
    }

    return <>
        <Row className="my-4">
            <Col xs={12}>
                <a href="" onClick={move} className="text-decoration-none text-secondary text-small"><ChevronLeft/>Назад</a>
            </Col>
            <Col xs={12}>
                {product.name && <h1>{product.name}</h1>}
            </Col>
            <Col xs = {4}>
                {product.discount > 0 && <Badge bg="danger">-{product.discount} %</Badge>}
                {product.pictures && <Image src={product.pictures} alt="pic" className="w-100"/>}
            </Col>
            <Col xs={1}/>
            <Col sx={6}>
                {product.discount ? 
                    <>
                    {product.price && 
                        <>
                            <div><del><small>{product.price}</small></del></div>
                            <div><strong className="text-danger">{product.price * (100 - product.discount)/100} ₽</strong></div>
                        </>
                    } 
                    </> :
                    <>
                    {product.price && <div><strong>{product.price}₽</strong></div>}
                    </>
                }
                <Row className="gx-5 my-3">    
                    <Col xs={4}>  
                        <ButtonGroup>
                            <Button variant="outline-secondary" disabled = {cnt ===0} onClick = {() => {setCnt(cnt - 1)}}><Dash/></Button>
                            <Button variant="outline-secondary" disabled>{cnt}</Button>
                            <Button variant="outline-secondary" onClick = {() => {setCnt(cnt + 1)}}><Plus/></Button>
                        </ButtonGroup>
                    </Col>
                    <Col xs={8}>  
                        <Button variant={"warning"} className="w-100">В корзину</Button>
                    </Col>
                </Row>
                <div className="text-secondary"><BalloonHeart/> В избранное</div>
                <Alert variant="secondary" className="mt-3 my-2">
                    <Row>
                        <Col xs={2}><Truck/></Col>
                        <Col xs={10}>
                            <h6>Доставка по всему миру!</h6>
                            <p className="mt-3">Доставка курьером - <strong> от 399 ₽</strong></p>
                            <p className="mb-0">Доставка в пункт выдачи - <strong> от 199 ₽</strong></p>
                        </Col>
                    </Row> 
                </Alert>    
                <Alert variant="secondary" className="mt-3 my-2">
                    <Row>
                        <Col xs={2}><Award/></Col>
                        <Col xs={10}>
                            <h6>Гарантия качества</h6>
                            <p className="mt-3 mb-0">Доставка курьером - <strong> от 399 ₽</strong></p>
                        </Col>
                    </Row> 
                </Alert>      
            </Col>
            <Col xs={12}>
                <h3>Описание</h3>
                {product.description && <p>{product.description}</p>}
                <Table>
                    <tbody>
                        {product.wight && <tr>
                            <th>Вес</th>
                            <td>{product.wight} </td>
                        </tr>}
                        {product.price && <tr>
                            <th>Цена</th>
                            <td>{product.price} ₽/ 100г</td>
                        </tr>}
                        {product.description && <tr>
                            <th>Польза</th>
                            <td>{product.description}</td>
                        </tr>}
                    </tbody>
                </Table>
            </Col>
            <Col xs={12}>
                <h3>Отзывы</h3>
                {product.reviews && product.reviews.map(el => <div className="my-4" key={el._id}>
                        {el.rating && <h5>{"★".repeat(el.rating)}{"☆".repeat(5 - el.rating)}</h5>}
                        {el.text && <p className="my-2">{el.text}</p>}
                        <div className="text-secondary text-small">{new Date(el.created_at).toLocaleString()}</div>
                </div>)}
            </Col>
        </Row>
        </>
}

export default Product;