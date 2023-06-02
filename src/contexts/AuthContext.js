import { React ,useContext, createContext, useEffect, useState} from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    fetchSignInMethodsForEmail
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { toast } from 'react-toastify';


import { auth } from '../config/firebase'


const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });
  
      return () => unsubscribe();
    }, []);
  

    const criarUsuario = async(nome, email, preferenciaAlimentar, dataNascimento, senha) => {
        try{
            //verificar se o email ja existe
            const verificaSeExisteEmail = await fetchSignInMethodsForEmail(auth, email)

            if(verificaSeExisteEmail.length > 0){
                console.error("O email já está sendo usado")
                toast.error('O email já está sendo usado ')

                return;
            }

            if(senha.length < 6){
                toast.error('A senha deve conter no mínimo 6 caracteres' + auth.error)

                return;

            }

            //criar usuario no firebase authentication
            const resultadoAutenticacao = await createUserWithEmailAndPassword(auth, email, senha);
            //armazenar o UUID do usuario criado
            const usuarioUUID = resultadoAutenticacao.user.uid;


            //criando um novo documento na coleção usuarios usando o UUID do usuario autenticado
            const db = getFirestore()
            const colecaoUsuario = collection(db, "usuarios")
            const novoUsuario = {
                uid: usuarioUUID,
                nome: nome,
                email: email,
                preferenciaAlimentar: preferenciaAlimentar,
                dataNascimento: dataNascimento
            }

            await addDoc(colecaoUsuario, novoUsuario)

            console.log("Usuario cadastrado com sucesso")
            toast.success("Usuario cadastrado com sucesso")
            return resultadoAutenticacao;

            

        } catch(error){
            console.error("Erro ao registrar usuário", error)
            toast.error('Erro ao registrar usuário ' + error.message)

        }

    }

    const logarUsuario =  (email, senha) => {
         //criar usuario no firebase authentication
         return signInWithEmailAndPassword(auth, email, senha);

    }

    const logout = () => {
        return signOut(auth)
    }

    const value = {
        currentUser,
        criarUsuario,
        logout,
        logarUsuario
      };

    return(
        // nao foi preciso usar duas chaves por que value já é um faObjectGroup, nao preciso passar o value dentro de um objeto
        <AuthContext.Provider value={value}> 
                 {children}
        </AuthContext.Provider>
    )
}



export const useAuth = () => {  
       return useContext(AuthContext)
 }

