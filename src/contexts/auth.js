import React, { createContext, useState } from "react";
import firebaseConnection from "../services/firebaseConnection";
import { getAuth } from "firebase/auth";
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

  return (
    //Tudo que tiver dentro do AuthContext.Provider pode ser acessado em qualquer canto da página, para isso foi repassado o children como parâmetro
    //Recebe como parâmetro o signed, E converte para booleano, com "!!"
    <AuthContext.Provider value={{ signed: !!user, user, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
