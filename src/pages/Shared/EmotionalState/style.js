import styled from 'styled-components';

const Container = styled.View`
  alignItems: center;
  justifyContent: center;
  `;
  // backgroundColor: #08a092;

const QuestionContainer = styled.View`
  alignItems: center;
`;

const ImageContainer = styled.View`
  width: 90%;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-around;
`;

const Title = styled.Text`
  marginTop: 20px;
  color: #7E8CE6;
  fontWeight: bold;
  fontSize: 25px;
  textAlign: center;
`;

const SubTitle = styled.Text`
  color: #7E8CE6;
  fontWeight: bold;
  fontSize: 18px;
  textAlign: center;
`;

const SuccessMessage = styled.Text`
  textAlign: center;
  color: #08a092;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 5px;
  backgroundColor: #fff;
  alignSelf: stretch;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 16px;
`;

const ErrorMessage = styled.Text`
  textAlign: center;
  color: #ce2029;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const Button = styled.TouchableOpacity`
  padding: 20px;
  borderRadius: 5px;
  backgroundColor: #84C6F0;
  alignSelf: stretch;
  margin: 15px;
  marginHorizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

const SignInLink = styled.TouchableHighlight`
  padding: 10px;
  marginTop: 20px;
`;

const SignInLinkText = styled.Text`
  color: #fff;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

export {
  Container,
  ImageContainer,
  Title,
  SubTitle,
  QuestionContainer,
  SuccessMessage,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignInLink,
  SignInLinkText,
};