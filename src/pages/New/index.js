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
import Picker from "../../components/Picker";

import { AuthContext } from "../../contexts/auth";

//STYLES
import { Background, Input, SubmitButton, SubmitText } from "./styles";

const database = getDatabase();

export default function New() {
  // const navigation = useNavigation();

  const navigation = useNavigation();

  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState(null);

  const { user: usuario } = useContext(AuthContext);

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
    const uid = usuario.uid;

    //gerando uma chave aleatória
    // const newPostRef = push(ref(database, `historico/${uid}`));
    const key = await push(ref(database, `historico/${uid}`)).key;

    await set(ref(database, `historico/${uid}/${key}`), {
      tipo: tipo,
      valor: parseFloat(valor),
      //utilizar o formato de date fns
      // date: new Date(),
      date: format(new Date(), "dd/MM/YY"),
    });

    //Atualizar o saldo
    let userRef = child(ref(database), `users/${uid}`);
    await get(userRef).then((snapshot) => {
      //transformando para parsefloat
      const saldo = parseFloat(snapshot.val().saldo);
      const novoSaldo =
        tipo === "despesa"
          ? (saldo -= parseFloat(valor))
          : (saldo += parseFloat(valor));
      //enviando para o usuário o novo saldo
      set(child(userRef, "saldo"), novoSaldo);
    });

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

          <Picker onChange={setTipo} />

          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}
