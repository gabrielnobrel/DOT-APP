import styled from "styled-components";

export const Background = styled.View`
  flex: 1;
  background-color: #00171e;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

export const AreaLoja = styled.View`
  width: 317px;
  height: 70px;
  border-radius: 66px;

  background-color: #fff;
`;

export const Img = styled.Image`
  width: 20px;
  height: 20px;

  clip-path: inset(50px 100px 50px 100px);
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
