import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #063e23;
`;

//O KeyboardAvoidingView serve para que a aplicação acompanhe o teclado
export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const Logo = styled.Image`
  margin-bottom: 60px;
`;
export const AreaInput = styled.View`
  flex-direction: row;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255, 255, 255, 0.5)",
})`
  background: rgba(255, 255, 255, 0.5);
  width: 90%;
  font-size: 17px;
  color: #fff;
  margin-bottom: 19px;
  padding: 10px;
  border-radius: 7px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 40%;
  height: 45px;
  border-radius: 50px;
  margin-top: 10px;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #063e23;
`;

export const Link = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: absolute;
  bottom: 20px;

  margin-top: 5px;
  margin-bottom: 9px;
`;

export const Text = styled.Text`
  color: #fff;
`;

export const LinkText = styled.Text`
  font-weight: 700;
  color: #fff;
`;
