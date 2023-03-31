import { Text, View } from "react-native";

import { Container, Titulo, Nome, BotaoSujeito, BotaoText } from "./src/styles";

export default function App() {
  return (
    <Container>
      <Titulo cor="#ff0000" tamanho="50">
        Sujeito Programador!
      </Titulo>
      <Nome>Olá, Gabriel</Nome>

      <BotaoSujeito onPress={() => alert("Clicou")}>
        <BotaoText>Entrar</BotaoText>
      </BotaoSujeito>
    </Container>
  );
}
