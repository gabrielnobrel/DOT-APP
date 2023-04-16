import React, { useState } from "react";
import {
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { Background, Input, SubmitButton, SubmitText } from "./styles";

import Picker from "../../components/Picker/index.android";
import Header from "../../components/Header";

export default function New() {
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("receita");

  function handleSubmit() {
    // Fechar o teclado
    Keyboard.dismiss();
    //convertendo o valor para parseFloat e pra ser verificado se é um número
    if (isNaN(parseFloat(valor)) || tipo === null) {
      alert("Preencha todos os campos");
      return;
    }

    //Serve para personalizar o pop-up alert
    Alert.alert(
      "Confirmando dados",
      `Tipo ${tipo} - Valor: ${parseFloat(valor)}`,

      // Criando botões para o alert
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Continuar",
          onPress: () => handleAdd(),
        },
      ]
    );
  }

  function handleAdd() {}

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

          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}
