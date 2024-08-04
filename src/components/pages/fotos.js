import React from "react";
import Logo from '../assets/OIP.jpeg'
import './fotos.css'
import { Link } from "react-router-dom";


function Fotos(){
    return(
        <>
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
        </div> {/* fim navegação */ }
         <div id="banner"></div> {/* fim banner */}
        
        </>
    )
}

export default Fotos