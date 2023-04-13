import React from "react";
import { PickerView } from "./styles";
import RNPickerSelect from "react-native-picker-select";

export default function Picker({ onChange, tipo }) {
  return (
    <PickerView>
      <RNPickerSelect
        style={{
          inputIOS: {
            height: 50,
            padding: 5,
            backgroundColor: "#fff",
            fontSize: 16,
          },
        }}
        placeholder={{
          label: "Selecione o tipo",
          color: "#222",
          //quando não for selecionado, será enviado null
          value: null,
        }}
        selectedValue={tipo}
        onValueChange={(valorSelecionado) => onChange(valorSelecionado)}
        items={[
          { label: "Receita", value: "receita", color: "#222" },
          { label: "Despesa", value: "despesa", color: "#222" },
        ]}
      />
    </PickerView>
  );
}
