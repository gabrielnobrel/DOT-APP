import React, { createContext, useState } from "react";
import firebaseConnection from "../services/firebaseConnection";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { set, ref, getDatabase, get } from "firebase/database";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  //Inicializar o auth
  const auth = getAuth(firebaseConnection);
  //Inicializar o database
  const database = getDatabase(firebaseConnection);

  //LOGAR O USUÁRIO
  async function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      //Se der tudo certo
      .then(async (value) => {
        //pegando o id
        let uid = value.user.uid;

        //capturar os dados do usuário
        await get(ref(database, `users/${uid}`)).then((snapshot) => {
          let data = {
            uid: uid,
            nome: snapshot.val().nome,
            email: value.user.email,
          };

          setUser(data);
        });
      })
      .catch((error) => {
        //Erro padrão do firebase
        alert(error.code);
      });
  }

  //CADASTRAR USUÁRIO
  async function signUp(email, password, nome) {
    //Criar um usuário no firebase
    createUserWithEmailAndPassword(auth, email, password)
      //Se deu tudo certo
      .then(async (value) => {
        let uid = value.user.uid; //Acessar o id do usuário

        //Capturar no database o id do usuário e criar seu nome e saldo no database
        await set(ref(database, `users/${uid}`), {
          saldo: 0,
          nome: nome,
        }).then(() => {
          //armazenando o id, nome e email
          let data = {
            uid: uid,
            nome: nome,
            email: value.user.email,
          };

          setUser(data);
        });
      })
      .catch((error) => {
        //Erro padrão do firebase
        alert(error.code);
      });
  }

  return (
    //Tudo que tiver dentro do AuthContext.Provider pode ser acessado em qualquer canto da página, para isso foi repassado o children como parâmetro
    //Recebe como parâmetro o signed e converte para booleano, com "!!"
    //Ele está deixando 'aberto' o user, o signup e o SignIn
    <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
