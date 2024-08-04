import React from "react";
import Header from "../header/header";
import Logo from '../assets/OIP.jpeg'
import Video from '../assets/THE BATMAN - The Bat and The Cat Trailer.mp4'
import './index.css'
import { Link } from "react-router-dom";

function Home(){
    return (
        <>
            <Header />
            <div id="banner"></div>
    <div id="trailer-container">
      <div className="content">
        <video className="trailer" controls>
          <source id="video" src={Video} />
          seu navegador não tem suporte para video
        </video>
        <div id="sinopse">
          <p className="description">
            Após dois anos espreitando as ruas como batman, Bruce Wayne se
            encontra nas profundezas mais sombrias de Gothan City, com poucos
            aliados confiaveis, o vigilante solitario se estabelce como a
            personificação da vingança para a população.
          </p>
          <button className="button">compra ingresso</button>
        </div>
      </div>
    </div>
    <div className="actor-cards-container">
      <div className="cards-content">
        <div className="card banner1">robert pattison - batman</div>
        <div className="card banner2">zoe kravitz - mulher gato</div>
        <div className="card banner3">jeffrey wrigth - gordon</div>
      </div>
    </div> {/* fim principal */}
    <footer>
      <img id="logo" src={Logo} />
      <span>todos os direitos resevados ©copy</span>
      <span>desenvolvido por: wesley silva</span>
      <nav className="footer-navigation">
        <ul className="footer-list">
            <Link to={'/'}>
             <li>Home</li>
            </Link>
          
            <Link to={'/Fotos'}>
                <li>Fotos</li>
            </Link>
          
            <Link to={'/Contato'}>
                <li>Contato</li>
            </Link>
        </ul>
      </nav>
    </footer>
        </>
    )
}

export default Home