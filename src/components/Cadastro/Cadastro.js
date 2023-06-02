import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope, faBowlFood, faBirthdayCake} from '@fortawesome/free-solid-svg-icons'
import './Cadastro.css'
import { Link, useNavigate } from 'react-router-dom'
import {  useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { useAuth } from '../../contexts/AuthContext'

function Cadastro() {

    //referencias
    const { criarUsuario } = useAuth()
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [preferenciaAlimentar, setPreferenciaAlimentar] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [setError] = useState('');
    const navegacao = useNavigate();


    //validações assim que o botão de submit for clicado
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        //validar senha
        if(senha !== confirmarSenha){
            setError("As senhas não são iguais!")
        }
 
     const response = await criarUsuario(nome, email, preferenciaAlimentar, dataNascimento, senha)
      if(response.user){
        //se o cadastro for sucesso vai ter o user
        navegacao('/login')
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
                        <span className="title">Cadastrar-se</span>
                        <form action=""  onSubmit={handleSubmit}>
    
                            <div className="campo-input">
                                <input onChange={(e) => setNome(e.target.value)} type="text" placeholder='Nome Completo' value={nome} required/>
                                <FontAwesomeIcon icon={faUser} style={{  position: 'absolute', top: '50%' , left: '0',transform: 'translateY(-50%)'}}/> 
                            </div>
                            <div className="campo-input">
                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' value={email} required />
                                 <FontAwesomeIcon icon={faEnvelope} style={{  position: 'absolute', top: '50%' , left: '0',transform: 'translateY(-50%)'}} /> 
                            </div>
    
                            <div className="campo-input">
                                <input onChange={(e) => setPreferenciaAlimentar(e.target.value)} type="text" placeholder='Preferência Alimentar' value={preferenciaAlimentar}  />
                                <FontAwesomeIcon icon={faBowlFood} style={{  position: 'absolute', top: '50%' , left: '0',transform: 'translateY(-50%)'}} /> 
                            </div>
    
                            <div className="campo-input">
                                <input onChange={(e) => setDataNascimento(e.target.value)} type="date" placeholder='Data de Nascimento' value={dataNascimento} />
                                 <FontAwesomeIcon icon={faBirthdayCake} style={{  position: 'absolute', top: '50%' , left: '0',transform: 'translateY(-50%)'}} /> 
                            </div>
    
                            <div className="campo-input">
                                <input onChange={(e) => setSenha(e.target.value)} type="password" placeholder='Senha' value={senha} required/>
                                 <FontAwesomeIcon icon={faLock} style={{  position: 'absolute', top: '50%' , left: '0',transform: 'translateY(-50%)'}} /> 
                            </div>
    
                            <div className="campo-input">
                                <input  onChange={(e) => setConfirmarSenha(e.target.value)} type="password" placeholder='Confirmar Senha' value={confirmarSenha} required/>
                                 <FontAwesomeIcon icon={faLock} style={{  position: 'absolute', top: '50%' , left: '0',transform: 'translateY(-50%)'}} /> 
                            </div>
    
                            <div className="campo-input button">
                                <input className=" btn" type="submit" value="Cadastrar" />
                            </div>

                        </form>
    
                        <div className="login-singup">
                            <span className="text"> Já possui uma conta?
                            <Link to="/"> Conecte-se</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
     </>
    )
}

export default Cadastro


