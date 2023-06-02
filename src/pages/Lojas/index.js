import React, { useState, useContext } from "react";
import { ImageBackground } from "react-native-web";
import {
  SafeAreaView,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

//COMPONENTS
import Header from "../../components/Header";
import ButtonLoja from "../../components/ButtonLoja";

//STYLES
import { Background, Title, ListLojas } from "./styles";

export default function Lojas() {
  return (
    //quando apertar fora o teclado recolher

    <Background>
      <Header />

      {/* garantir que ele vai pegar a área do celular de qualquer modelo */}
      <SafeAreaView style={{ alignItems: "center" }}>
        <Title>Lojas Parceiras</Title>

        <ListLojas showsVerticalScrollIndicator={false}>
          <ButtonLoja
            title={"Zara"}
            subtitle={"Loja 303 - Piso L2"}
            imgSrc={require("../../assets/zara.jpg")}
          />

          <ButtonLoja
            title={"Dior"}
            subtitle={"Loja 25 - Piso L1"}
            imgSrc={require("../../assets/dior.jpg")}
          />

          <ButtonLoja
            title={"Fenty Beauty"}
            subtitle={"Loja 86 - Piso L2"}
            imgSrc={require("../../assets/fentyBeauty.jpg")}
          />

          <ButtonLoja
            title={"Le Creuset"}
            subtitle={"Loja 54 - Piso L1"}
            imgSrc={require("../../assets/leCreuset.png")}
          />

          <ButtonLoja
            title={"Renner"}
            subtitle={"Loja 77 - Piso L3"}
            imgSrc={require("../../assets/renner.png")}
          />

          <ButtonLoja
            title={"MAC"}
            subtitle={"Loja 62 - Piso L2"}
            imgSrc={require("../../assets/mac.png")}
          />

          <ButtonLoja
            title={"Apple"}
            subtitle={"Loja 24 - Piso L1"}
            imgSrc={require("../../assets/Apple.avif")}
          />

          <ButtonLoja
            title={"Rolex"}
            subtitle={"Loja 56 - Piso L3"}
            imgSrc={require("../../assets/rolex.jpg")}
          />

          <View style={{ height: 160 }} />
        </ListLojas>
      </SafeAreaView>
    </Background>
  );
}
