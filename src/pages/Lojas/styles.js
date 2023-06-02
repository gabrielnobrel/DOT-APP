import styled from "styled-components";

export const Background = styled.View`
  flex: 1;
  background-color: #00171e;
`;

export const Title = styled.Text`
  width: 100%;
  margin-left: 15px;
  font-size: 30px;
  font-weight: 700;
  color: white;
`;

export const ListLojas = styled.ScrollView`
  display: flex;
  flex-direction: column;
  height: 100%;
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
  background-color: red;
`;

export const TitleLoja = styled.Text`
  font-size: 20px;
  color: #00171e;
`;

export const SubtitleLoja = styled.Text`
  color: #00171e;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#222",
})`
  height: 50px;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.9);
  margin-top: 30px;
  padding: 15px;
  font-size: 16px;
  border-radius: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 50px;
  width: 90%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  background-color: #00b94a;
  border-radius: 10px;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
