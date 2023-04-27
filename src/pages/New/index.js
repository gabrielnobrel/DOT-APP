import React, { useState } from "react";
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
import { getAuth, currentUser } from "firebase/auth";
import { getDatabase, get, set, ref, push } from "firebase/database";

import Header from "../../components/Header";
import { Background, Input, SubmitButton, SubmitText } from "./styles";
import Picker from "../../components/Picker";

export default function New() {
  const navigation = useNavigation();

  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("receita");

  const auth = getAuth(firebaseConnection);
  const database = getDatabase(firebaseConnection);

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

  async function handleAdd() {
    //pegando o uid do usuário
    let uid = await auth.currentUser.uid();
    //gerando uma chave aleatória
    let key = await push(ref(database).child("historico").child(uid)).key;
    await set(ref(child(ref(database), `historico/${uid}/${key}`)), {
      tipo: tipo,
      valor: parseFloat(valor),
      //utilizar o formato de date fns
      // date: new Date(),
      date: format(new Date(), "dd/MM/YY"),
    });
    //Atualizar o saldo
    let user = ref(database, `users/${uid}`);
    //transformando para parsefloat
    let saldo = parseFloat(
      await get(ref(database, `users/${uid}`)).val().saldo
    );

    tipo === "despesa"
      ? (saldo -= parseFloat(valor))
      : (saldo += parseFloat(valor));
    //enviando para o usuário o novo saldo
    await set(ref(user, "saldo"), saldo);
    Keyboard.dismiss();
    setValor("");
    navigation.navigate("Home");
  }

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
