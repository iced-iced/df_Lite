import React, {useState, useEffect} from "react";
import {Container, Row, Col } from "react-bootstrap";
import {Routes, Link, Route} from "react-router-dom";
import Main from "./Pages/Main";
import Catalogue from "./Pages/Catalogue"
import Header from "./components/Header";
import Footer from "./components/Footer"
import Product from "./Pages/product"


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhNTEwNjU5Yjk4YjAzOGY3NzlkMDIiLCJncm91cCI6Imdyb3VwLTciLCJpYXQiOjE2Njc5MTE5NDcsImV4cCI6MTY5OTQ0Nzk0N30.bzrJU5tN4M2kdJ1J0Jc1RYe-S4EFm8CVI0KHaCOH6Ns"


export default () => {
    const [goods, setGoods] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://api.react-learning.ru/products", {
            headers : {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setGoods(data.products);
            setData(data.products) 
        });
    }, []);
    return <>
    <div className="wrapper">
        <Header products={data} update={setGoods}/>
        <main>
            <Container>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/catalogue" element={<Catalogue goods={goods}/>}/>
                    <Route path="/product/:id" element={<Product token={token}/>}/>
                </Routes>
            </Container>
        </main>
        <Footer/>
        </div>
    </>
}
