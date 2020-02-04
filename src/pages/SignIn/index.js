import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StatusBar,
  AsyncStorage,
  View,
  Platform,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { StackActions, NavigationActions } from 'react-navigation';

import api from '~/services/api';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    password: '',
    error: '',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };

  handleCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  handleSubmit = async () => {
    const { email, password } = this.state;

    if (email.length === 0 || password.length === 0) {
      this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
    } else {
      try {
        const response = await api.post('/authenticate', {
          email: email,
          password: password,
        });

        await AsyncStorage.setItem('@makabea:token', response.data.token);

        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Main' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      } catch (_err) {
        this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
      }
    }
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <LinearGradient style={styles.background} colors={['#84C6F0', '#7E8CE6']}>
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null} style={styles.container}>
          <View>
            <Text style={styles.title}>MAKABEA</Text>

            <Text style={styles.label}>E-MAIL</Text>
            <TextInput
              value={email}
              onChangeText={text => this.setState({ email: text })}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              autoFocus
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
            />

            <Text style={styles.label}>SENHA</Text>
            <TextInput
              value={password}
              onChangeText={text => this.setState({ password: text })}
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              returnKeyType="send"
              ref={el => { this.passwordInput = el }}
              onSubmitEditing={this.handleSubmit}
            />
            {error.length !== 0 && <Text style={styles.errorText}>{error}</Text>}
            <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handleCreateAccountPress} style={styles.linkButton}>
              <Text style={styles.linkText}>CRIAR CONTA</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}