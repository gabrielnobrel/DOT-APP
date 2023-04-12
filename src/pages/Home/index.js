import React, { useContext, useState } from "react";

import Header from "../../components/Header";
import { AuthContext } from "../../contexts/auth";
import HistoricoList from "../../components/HistoricoList";

import { Background, Container, Nome, Saldo, Title, List } from "./styles";

export default function Home() {
  const [historico, setHistorico] = useState([
    { key: "1", tipo: "receita", valor: 1200 },
    { key: "2", tipo: "despesa", valor: 200 },
    { key: "3", tipo: "receit", valor: 40 },
    { key: "4", tipo: "receita", valor: 89.62 },
  ]);

  const { user } = useContext(AuthContext);

  return (
    <Background>
      <Header />

      <Container>
        <Nome>Matheus</Nome>
        <Saldo>R$ 123,00</Saldo>
      </Container>

      <Title>Últimas Movimentações</Title>

      <List
        showVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <HistoricoList />}
      />
    </Background>
  );
}
