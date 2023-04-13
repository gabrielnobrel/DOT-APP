import React, { useContext, useState } from "react";

import Header from "../../components/Header";
import { AuthContext } from "../../contexts/auth";
import HistoricoList from "../../components/HistoricoList";

import { Background, Container, Nome, Saldo, Title, List } from "./styles";

export default function Home() {
  const [historico, setHistorico] = useState([
    { key: "1", tipo: "receita", valor: 1200 },
    { key: "2", tipo: "despesa", valor: 200 },
    { key: "3", tipo: "receita", valor: 40 },
    { key: "4", tipo: "receita", valor: 89.62 },
    { key: "5", tipo: "despesa", valor: 500.0 },
  ]);

  const { user } = useContext(AuthContext);

  return (
    <Background>
      <Header />

      <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>R$ 123,00</Saldo>
      </Container>

      <Title>Últimas Movimentações</Title>

      <List
        //não aparecer a barra de scroll
        showsVerticalScrollIndicator={false}
        data={historico}
        //extrair uma chave única de cada item da lista
        keyExtractor={(item) => item.key}
        //repassando o item como prop
        renderItem={({ item }) => <HistoricoList data={item} />}
      />
    </Background>
  );
}
