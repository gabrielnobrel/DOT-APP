import React from "react";
import Ionicons from "@expo/vector-icons/Feather";

import { Container, Tipo, IconView, TipoText, ValorText } from "./styles";

export default function HistoricoList() {
  return (
    <Container>
      <Tipo>
        <IconView>
          <Ionicons name="arrow-up" color={"#fff"} size={20} />
          <TipoText>Receita</TipoText>
        </IconView>
      </Tipo>

      <ValorText> R$ 900,00</ValorText>
    </Container>
  );
}
