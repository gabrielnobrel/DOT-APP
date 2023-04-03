import styled from "styled-components";

export const Backgound = styled.View`
  flex: 1;
  background-color: #4a433f;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 15px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "rgba(51,50,46,20)",
})`
  background: rgba(0, 0, 0, 0.9);
  width: 90%;
  font-size: 17px;
  color: #fff;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 7px;
`;

export const SubmitButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const SubmitText = styled.Text``;

export const Link = styled.TouchableOpacity``;

export const LinkText = styled.Text``;
