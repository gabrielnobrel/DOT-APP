import React from "react";
import Ionicons from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import { Container, ButtonMenu } from "./styles";

export default function Header() {
  const navigation = useNavigation();

  return (
    <Container>
      {/* O toggleDrawer serve para que ao apertar eja aberto o menu */}
      <ButtonMenu onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="menu" color="#fff" size={30} />
      </ButtonMenu>
    </Container>
  );
}
