import React, { useState, useContext } from "react";
import { Platform } from "react-native"; //identificção de qual sistema operacional está sendo utilizado

import { AuthContext } from "../../contexts/auth";

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from "./styles";

export default function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useContext(AuthContext);

  function handleSignUp() {
    signUp(email, password, nome);
  }

  return (
    <Background>
      {/* Para saber se está no sistema IOS, assim a aplicação se adapta ao teclado */}
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <Logo source={require("../../assets/LogoSignUp.png")} />

        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            //Ao clicar aparecer primeiramente letras minúsculas no teclado
            // autoCapitalize={"none"}
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            //Ao clicar aparecer primeiramente letras minúsculas no teclado
            autoCapitalize={"none"}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize={"none"}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastre-se</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
