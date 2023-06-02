import React from "react";

import {
  ListLojas,
  AreaLoja,
  CircleImage,
  LojaInformation,
  TitleLoja,
  SubtitleLoja,
} from "./styles";

export default function ButtonLoja({ title, subtitle, imgSrc }) {
  return (
    <AreaLoja>
      <CircleImage source={imgSrc} />
      <LojaInformation>
        <TitleLoja>{title}</TitleLoja>
        <SubtitleLoja>{subtitle}</SubtitleLoja>
      </LojaInformation>
    </AreaLoja>
  );
}
