import React, { useContext, useState } from "react";
import PanoramaView from "@lightbase/react-native-panorama-view";

import Header from "../../components/Header";
import { AuthContext } from "../../contexts/auth";
import HistoricoList from "../../components/HistoricoList";

import {
  Background,
  Container,
  Hello,
  Nome,
  Saldo,
  Title,
  List,
  PanoImage,
  Map,
} from "./styles";
import { Dimensions } from "react-native-web";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <Background>
      <Header />

      <Container>
        <Hello>Olá,</Hello>
        <Nome>{user && user.nome}</Nome>
      </Container>

      <List>
        <PanoImage source={require("../../assets/mapa.png")} />
      </List>
    </Background>
  );
}
