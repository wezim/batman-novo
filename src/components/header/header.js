import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import Logo from '../assets/OIP.jpeg'

function Header(){
    return (
        <div className="header">
            <img id="logo" src={Logo} />

            <nav>
                <ul>

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
        </div>
    )
}

export default Header