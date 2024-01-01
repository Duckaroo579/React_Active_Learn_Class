import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import MyButton from './src/Button/MyButton.js'

export default function App() {

  const [redCount, setRedCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);
  const [blueCount, setBlueCount] = useState(0);

  const rMinusClick = () => {
    setRedCount(redCount - 1);
  };

  const rPlusClick = () => {
    setRedCount(redCount + 1);
  };

  const gMinusClick = () => {
    setGreenCount(greenCount - 1);
  };

  const gPlusClick = () => {
    setGreenCount(greenCount + 1);
  };

  const bMinusClick = () => {
    setBlueCount(blueCount - 1);
  };

  const bPlusClick = () => {
    setBlueCount(blueCount + 1);
  };



  return (
    <View style={styles.container}>
      
      <MyButton
        myTitle='-'
        myOnPress={() => rMinusClick()}
        backgroundColor={'red'} color={'#fff'}

      ></MyButton>
      <MyButton
        myTitle='+'
        myOnPress={() => rPlusClick()}
        backgroundColor={'red'} color={'#fff'}
      ></MyButton>

      <Text>紅色值: {redCount}</Text>

      <MyButton
        myTitle='-'
        myOnPress={() => gMinusClick()}
        backgroundColor={'green'} color={'#fff'}
      ></MyButton>
      <MyButton
        myTitle='+'
        myOnPress={() => gPlusClick()}
        backgroundColor={'green'} color={'#fff'}
      ></MyButton>
      <Text>綠色值: {greenCount}</Text>
      <MyButton
        myTitle='-'
        myOnPress={() => bMinusClick()}
        backgroundColor={'blue'} color={'#fff'}

      ></MyButton>
      <MyButton
        myTitle='+'
        myOnPress={() => bPlusClick()}
        backgroundColor={'blue'} color={'#fff'}
      ></MyButton>
      <Text>藍色值: {blueCount}</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});