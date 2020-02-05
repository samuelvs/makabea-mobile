import React, { Component } from 'react';

import { View, Image, Slider, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import {
  Container,
  Input,
  Title,
  SubTitle,
  QuestionContainer,
  ImageContainer,
  SuccessMessage,
  ErrorMessage,
  Button,
  ButtonText,
  SignInLink,
  SignInLinkText,
} from './style';

export default class EmotionalState extends Component {
  state = {
    humor: null,
    ansiety: null,
    confident: null,
    energy: null,
    description: ''
  };
  

  render() {
    const { humor, ansiety, confident, energy, description } = this.state;


    return (
      <Container>
        <ScrollView>
          <Title>Como você está agora?</Title>
          <QuestionContainer>
            <ImageContainer>
              <TouchableOpacity
                style={humor == 1 ? styles.cryingHumor : { backgroundColor: null }}
                onPress={() => this.setState({ humor: 1 })}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('~/images/crying.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ humor: 2 })}
                style={humor == 2 ? styles.sadHumor : { backgroundColor: null }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('~/images/sad.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={humor == 3 ? styles.mehHumor : { backgroundColor: null }}
                onPress={() => this.setState({ humor: 3 })}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('~/images/meh.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={humor == 4 ? styles.smileHumor : { backgroundColor: null }}
                onPress={() => this.setState({ humor: 4 })}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('~/images/smile.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={humor == 5 ? styles.happyHumor : { backgroundColor: null }}
                onPress={() => this.setState({ humor: 5 })}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('~/images/happy.png')}
                />
              </TouchableOpacity>

            </ImageContainer>
          </QuestionContainer>

          <Title>Como esta sua ansiedade?</Title>
          <QuestionContainer>
            <View>
              <Slider
                minimumTrackTintColor='#7E8CE6'
                maximumTrackTintColor='#7E8CE6'
                thumbTintColor='#84C6F0'
                style={{ width: 250 }}
                step={1}
                minimumValue={0}
                maximumValue={4}
                value={ansiety}
                onValueChange={val => this.setState({ ansiety: val })}
              />
              <SubTitle>0           1           2           3           4</SubTitle>
            </View>
          </QuestionContainer>

          <Title>Como esta sua confiança?</Title>
          <QuestionContainer>
            <Slider
              minimumTrackTintColor='#7E8CE6'
              maximumTrackTintColor='#7E8CE6'
              thumbTintColor='#84C6F0'
              style={{ width: 250 }}
              step={1}
              minimumValue={0}
              maximumValue={4}
              value={confident}
              onValueChange={val => this.setState({ confident: val })}
            />
            <SubTitle>0           1           2           3           4</SubTitle>

          </QuestionContainer>

          <Title>Como esta sua energia?</Title>
          <QuestionContainer>
            <Slider
              thumbSize={{ width: 8, height: 8 }}
              minimumTrackTintColor='#7E8CE6'
              maximumTrackTintColor='#7E8CE6'
              thumbTintColor='#84C6F0'
              style={{ width: 250 }}
              step={1}
              minimumValue={0}
              maximumValue={4}
              value={energy}
              onValueChange={val => this.setState({ energy: val })}
            />
            <SubTitle>0           1           2           3           4</SubTitle>
          </QuestionContainer>

          <Title>Quer contar algo?</Title>
          <QuestionContainer>
            <Input value={description} style={{ color: '#7E8CE6' }}
              onChangeText={text => this.setState({ description: text })}></Input>
          </QuestionContainer>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cryingHumor: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'rgba(85, 82, 108, .5)'
  },
  sadHumor: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'rgba(85, 121, 166, .5)'
  },
  mehHumor: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'rgba(143, 84, 165, .5)'
  },
  smileHumor: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'rgba(66, 167, 102, .5)'
  },
  happyHumor: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'rgba(251, 140, 0, .5)'
  }

});