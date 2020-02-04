import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StatusBar,
  AsyncStorage,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import api from '../../services/api';
import { StackActions, NavigationActions } from 'react-navigation';

import {
  Container,
  Input,
  SuccessMessage,
  ErrorMessage,
  Button,
  ButtonText,
  SignInLink,
  SignInLinkText,
} from './style';

export default class SignUp extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
      goBack: PropTypes.func,
    }).isRequired,
  };

  state = {
    username: '',
    email: '',
    password: '',
    error: '',
    success: '',
  };

  handleBackToLoginPress = () => {
    this.props.navigation.goBack();
  };

  handleSignUpPress = async () => {
    const { username, email, password } = this.state;

    if (email.length === 0 || password.length === 0) {
      this.setState({ error: 'Preencha todos os campos para continuar!' }, () => false);
    } else {
      try {
        await api.post('/register', {
          username: username,
          email: email,
          password: password,
        });

        this.setState({ success: 'Conta criada com sucesso! Redirecionando para o login', error: '' });

        setTimeout(this.goToLogin, 2500);
      } catch (_err) {
        this.setState({ error: 'Houve um problema com o cadastro, verifique os dados preenchidos!' });
      }
    }
  };

  goToLogin = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'SignIn' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    const { username, email, password, success, error } = this.state;
    return (
      <KeyboardAvoidingView style={StyleSheet.create({ flex: 1 })} behavior={Platform.OS == 'ios' ? 'padding' : null}>
        <Container>
          {success.length !== 0 && <SuccessMessage>{success}</SuccessMessage>}
          <Input
            placeholder="como você prefere ser chamada(o)?"
            value={username}
            onChangeText={text => this.setState({ username: text })}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            autoCorrect={false}
            autoFocus
            returnKeyType="next"
            onSubmitEditing={() => this.emailInput.focus()}
          />
          <Input
            keyboardType="email-address"
            placeholder="e-mail"
            value={email}
            onChangeText={text => this.setState({ email: text })}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            autoCorrect={false}
            autoFocus
            returnKeyType="next"
            ref={el => { this.emailInput = el }}
            onSubmitEditing={() => this.passwordInput.focus()}
          />
          <Input
            placeholder="senha"
            value={password}
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            returnKeyType="send"
            ref={el => { this.passwordInput = el }}
            onSubmitEditing={this.handleSignUpPress}
          />
          {error.length !== 0 && <ErrorMessage>{error}</ErrorMessage>}
          <Button onPress={this.handleSignUpPress}>
            <ButtonText>Criar conta</ButtonText>
          </Button>
          <SignInLink onPress={this.handleBackToLoginPress}>
            <SignInLinkText>Voltar ao login</SignInLinkText>
          </SignInLink>
        </Container>
      </KeyboardAvoidingView>

    );
  }
}