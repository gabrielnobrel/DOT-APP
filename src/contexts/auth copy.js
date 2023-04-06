import React, { createContext, useState } from "react";
import firebaseConnection from "../services/firebaseConnection";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { set, ref } from "firebase/database";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const auth = getAuth(firebaseConnection);

  //CADASTRAR USUÁRIO
  async function signUp(email, password, nome) {
    // criar um usuário no firebase
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        await set(ref(firebaseConnection, `users/${uid}`), {
          saldo: 0,
          nome: nome,
        }).then(() => {
          let data = {
            uid: uid,
            nome: nome,
            email: value.user.email,
          };

          setUser(data);
        });
      });
  }

  //AUTENTICAR COM O GOOGLE
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;

        await set(ref(firebaseConnection, `users/${user.uid}`), {
          nome: user.displayName,
          email: user.email,
        });

        setUser({
          uid: user.uid,
          nome: user.displayName,
          email: user.email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    //Tudo que tiver dentro do AuthContext.Provider pode ser acessado em qualquer canto da página, para isso foi repassado o children como parâmetro
    //Recebe como parâmetro o signed, E converte para booleano, com "!!"
    <AuthContext.Provider
      value={{ signed: !!user, user, signUp, signInWithGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
