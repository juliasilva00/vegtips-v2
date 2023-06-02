import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Login.css'

import { useAuth } from '../../contexts/AuthContext'

function Login() {

    const {  logarUsuario } = useAuth();

    const [error, setError] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const navegacao = useNavigate()


        //validações assim que o botão de submit for clicado
        const handleSubmit = async (e) => {
            e.preventDefault()
            setError('')

            try{
                await logarUsuario( email, senha)
                navegacao('/home')
                console.log(e.message)
    
    
            }catch (error) {
                toast.error('Erro ao realizar login ' + error.message)
                setError(e.message)
                console.log(e.message)

            }
        }


    return (

        <>
              <ToastContainer />

            <nav>
                <a href="index.html">
                    <h1 id="titulo">VegTips</h1>
                </a>
            </nav>
            <div className="login-page">
                <div className="login-container">
                    <div className="forms">
                        <div className="form-login login">
                            <span className="title">Acessar</span>
                            <form action="" onSubmit={handleSubmit}>

                                <div className="campo-input">
                                    <input onChange={(e) => setEmail(e.target.value)}  type="text" placeholder='Email' value={email}  required />
                                     <FontAwesomeIcon icon={faUser}  style={{  position: 'absolute', top: '50%' , left: '0',transform: 'translateY(-50%)'}} /> 
                                </div>
                                <div className="campo-input">
                                    <input onChange={(e) => setSenha(e.target.value)} type="password" placeholder='Senha' value={senha} required />
                                     <FontAwesomeIcon icon={faLock} style={{  position: 'absolute', top: '50%' , left: '0',transform: 'translateY(-50%)'}} /> 
                                </div>

                                <div className="checkbox-text">
                                    <div className="checkbox-content">
                                        <input type="checkbox" name="" id="logCheck" />
                                        <label for="logCheck" className="text">Lembre-me</label>
                                    </div>
                                    <a href="#" className="text">Esqueci Senha</a>
                                </div>
                              
                                <div className="campo-input button">
                                <input className=" btn" type="submit" value="Acessar" />
                            </div>
                            </form>

                            <div className="login-singup">
                                <span className="text"> Ainda não possui conta?
                                    <Link to="/cadastro"> Cadastre-se</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}

export default Login


