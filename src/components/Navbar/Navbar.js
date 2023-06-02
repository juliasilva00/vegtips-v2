import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./NavbarStyles.css";

import { useAuth } from '../../contexts/AuthContext'




const Navbar = () => {

    const { logout } = useAuth()
    const navegacao = useNavigate();

    const [clicked, setClicked] = useState(false)


    const handleClick = () => {
        setClicked(!clicked)
    }

    const handleLogout = async () =>{

        try{
            await logout();
            navegacao('/')

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <nav>
                <a href="/">
                    <h1 id="titulo">VegTips</h1>
                </a>

                <div>
                    <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
                        <Link to="/home" className="nav-links" onClick={handleClick}>
                            <li><a href="index.html" className="active">Home</a></li>
                        </Link>
                        <li>
                            <Link to="/restaurantes" className="nav-links" onClick={handleClick}>
                                <a href="index.html">Restaurantes</a>
                            </Link>
                        </li>

                        <Link to="/receitas" className="nav-links" onClick={handleClick}>
                            <li><a href="index.html">Receitas</a></li>
                        </Link>

                        <Link to="/dicas" className="nav-links" onClick={handleClick}>
                            <li><a href='index.html'>Dicas</a></li>
                        </Link>

                        <li><a href='index.html'>Perfil</a></li>
                        <li><a href='index.html' onClick={handleLogout} > Sair</a></li>
                    </ul>
                </div>

                <div id="mobile" onClick={handleClick}>
                    <i id="bar" style={{ color: '#02A28F' }} className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar;