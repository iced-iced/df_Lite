import React from "react";
import Logo from "../logo";
import "./style.css";

export default () => {
    return <footer>
        <Logo/>
        <span className="copyright">&copy;{new Date().getFullYear()}DogFood.ru</span>
        <a href="">Lorem.</a>
        <a href="">Voluptas.</a>
        <a href="">Vel.</a>
        <a href="">Veniam!</a>
        <a href="">Maxime.</a>
        <a href="">Corporis!</a>
        <a href="">Earum!</a>
        <a href="">Unde.</a>
        <div className="contacts">
            <p>Мы на связи</p>
            <a href="tel:+79995946556">+7(999)594-65-65</a>
            <nav>
                <a href=""><i className="fa-brands fa-vk"></i></a>
                <a href=""><i className="fa-brands fa-odnoklassniki"></i></a>
                <a href=""><i className="fa-brands fa-telegram"></i></a>
            </nav>
        </div>
    </footer>
}