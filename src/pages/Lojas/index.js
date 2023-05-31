import React, { useState, useContext } from "react";
import {
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import format from "date-fns";

//FIREBASE
import firebaseConnection from "../../services/firebaseConnection";
import { getDatabase, get, set, ref, push, child } from "firebase/database";

//COMPONENTS
import Header from "../../components/Header";
// import Picker from "../../components/Picker";

import { AuthContext } from "../../contexts/auth";

//STYLES

import {
  Background,
  Title,
  AreaLoja,
  Img,
  Input,
  SubmitButton,
  SubmitText,
} from "./styles";

const database = getDatabase();

export default function Lojas() {
  return (
    //quando apertar fora o teclado recolher

    <Background>
      <Header />

      {/* garantir que ele vai pegar a área do celular de qualquer modelo */}
      <SafeAreaView style={{ alignItems: "center" }}>
        <Title>Lojas Parceias</Title>

        <AreaLoja>
          <Img source={require("../../assets/Loja1.jpg")} />
        </AreaLoja>
        {/* <Input
            placeholder="Valor desejado"
            //tipo do teclado
            keyboardType="numeric"
            //ao apertar no enter irá para o próximo campo
            returnKeyType="next"
            //ao apertar no enter no último campo, irá recolher o teclado
          /> */}

        {/* <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton> */}
      </SafeAreaView>
    </Background>
  );
}
