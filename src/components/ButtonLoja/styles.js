import styled from "styled-components";

export const ListLojas = styled.View`
  display: flex;
  flex-direction: column;
`;

export const AreaLoja = styled.View`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  width: 317px;
  height: 70px;
  border-radius: 66px;
  margin-top: 25px;

  background-color: #fff;
`;

export const CircleImage = styled.Image`
  width: 70px;
  height: 100%;
  border-radius: 100px;
  overflow: hidden;
`;

export const LojaInformation = styled.View`
  margin-left: 29px;
`;

export const TitleLoja = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #00171e;
`;

export const SubtitleLoja = styled.Text`
  color: #00171e;
`;
