import React, { createContext, useEffect, useState } from "react";
import firebaseConnection from "../services/firebaseConnection";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { set, ref, getDatabase, get } from "firebase/database";
import AsyncStorage from "@react-native-community/async-storage";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      //pegar informações do AsyncStorage
      const storageUser = await AsyncStorage.getItem("Auth_user");

      if (storageUser) {
        //enviando as informações para o setUser. O 'parse' serve para transformar uma string em ojeto
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

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
          storageUser(data); //armazenar informações do usuário
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
          storageUser(data); //armazenar informações do usuário
        });
      })
      .catch((error) => {
        //Erro padrão do firebase
        alert(error.code);
      });
  }

  //armazenar credenciais do usuário
  async function storageUser(data) {
    //transformando para string
    await AsyncStorage.setItem("Auth_user", JSON.stringify(data));
  }

  return (
    //Tudo que tiver dentro do AuthContext.Provider pode ser acessado em qualquer canto da página, para isso foi repassado o children como parâmetro
    //Recebe como parâmetro o signed e converte para booleano, com "!!"
    //Ele está deixando 'aberto' o user, o signup e o SignIn
    <AuthContext.Provider
      value={{ signed: !!user, user, signUp, signIn, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
