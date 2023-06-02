import React, { useState, useContext } from "react";
import { Platform, TouchableWithoutFeedback, Keyboard } from "react-native"; //identificção de qual sistema operacional está sendo utilizado
import { useNavigation } from "@react-navigation/native";
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
  Text,
  LinkText,
} from "./styles";

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/* Para saber se está no sistema IOS, assim a aplicação se adapta ao teclado */}
        <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
          <Logo source={require("../../assets/image.png")} />

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
              //Ao clicar aparecer primeiramente letras minúsculas no teclado
              autoCapitalize={"none"}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </AreaInput>

          <SubmitButton onPress={handleLogin}>
            <SubmitText>Entrar</SubmitText>
          </SubmitButton>

          <Link>
            <Text>Não possui acesso?</Text>
            <LinkText onPress={() => navigation.navigate("SignUp")}>
              Crie uma conta
            </LinkText>
          </Link>
        </Container>
      </TouchableWithoutFeedback>
    </Background>
  );
}
