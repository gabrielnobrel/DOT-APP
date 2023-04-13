import React, { useState } from "react";
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Background, Input, SubmitButton, SubmitText } from "./styles";

import Picker from "../../components/Picker";
import Header from "../../components/Header";

export default function New() {
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("receita");

  return (
    //quando apertar fora o teclado recolher
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header />

        {/* garantir que ele vai pegar a área do celular de qualquer modelo */}
        <SafeAreaView style={{ alignItems: "center" }}>
          <Input
            placeholder="Valor desejado"
            //tipo do teclado
            keyboardType="numeric"
            //ao apertar no enter irá para o próximo campo
            returnKeyType="next"
            //ao apertar no enter no último campo, irá recolher o teclado
            onSubmitEditing={() => Keyboard.dismiss()}
            value={valor}
            onChangeText={(text) => setValor(text)}
          />

          <Picker onChange={setTipo} tipo={tipo} />

          <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}
