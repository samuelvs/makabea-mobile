import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StatusBar,
  AsyncStorage,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Slider
} from 'react-native';
// import Slider from '@react-native-community/slider';
import api from '../../services/api';
import { StackActions, NavigationActions } from 'react-navigation';

import {
  Container,
  Input,
  Title,
  QuestionContainer,
  SuccessMessage,
  ErrorMessage,
  Button,
  ButtonText,
  SignInLink,
  SignInLinkText,
} from './styles';


export default class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    humor: null,
    ansiety: null,
    confident: null,
    energy: null,
    // description: ''
  };

  render() {
    const { humor, ansiety, confident, energy } = this.state;

    return (
      <Container>
        <Title>Como você está agora?</Title>
        <Title>{ansiety}</Title>
        <Title>{confident}</Title>
        <Title>{energy}</Title>
        <QuestionContainer>

        </QuestionContainer>

        <Title>Qual o seu nivel de ansiedade no momento?</Title>
        <QuestionContainer>
          <Slider
          style={{ width: 250 }}
          step={1}
          minimumValue={0}
          maximumValue={4}
          value={ansiety}
          onValueChange={val => this.setState({ ansiety: val })}
          // onSlidingComplete={ val => this.getVal(val)}
          />
        <Title>0           1           2           3           4</Title>
        </QuestionContainer>

        <Title>Qual o seu nivel de confiança no momento?</Title>
        <QuestionContainer>
        <Slider
          style={{ width: 250 }}
          step={1}
          minimumValue={0}
          maximumValue={4}
          value={confident}
          onValueChange={val => this.setState({ confident: val })}
          // onSlidingComplete={ val => this.getVal(val)}
          />
        <Title>0           1           2           3           4</Title>

        </QuestionContainer>

        <Title>Qual o seu nivel de energia no momento?</Title>
        <QuestionContainer>
        <Slider
          style={{ width: 250 }}
          step={1}
          minimumValue={0}
          maximumValue={4}
          value={energy}
          onValueChange={val => this.setState({ energy: val })}
          // onSlidingComplete={ val => this.getVal(val)}
          />
        <Title>0           1           2           3           4</Title>
        </QuestionContainer>

        <Title>Quer contar algo?</Title>
        <QuestionContainer>

        </QuestionContainer>
      </Container>
    );
  }
}