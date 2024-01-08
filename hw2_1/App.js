import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import MyButton from './src/Button/MyButton.js';

export default function App() {

  const [redCount, setRedCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);
  const [blueCount, setBlueCount] = useState(0);
  const [hexColor, setHexColor] = useState('#000000');

  useEffect(() => {
    updateHexColor();
  }, [redCount, greenCount, blueCount]);

  const handleColorChange = (color, value) => {
    switch (color) {
      case 'red':
        setRedCount(Math.min(255, Math.max(0, redCount + value)));
        break;
      case 'green':
        setGreenCount(Math.min(255, Math.max(0, greenCount + value)));
        break;
      case 'blue':
        setBlueCount(Math.min(255, Math.max(0, blueCount + value)));
        break;
      default:
        break;
    }
  };

  const updateHexColor = () => {
    const hexValue = `#${redCount.toString(16).padStart(2, '0')}${greenCount.toString(16).padStart(2, '0')}${blueCount.toString(16).padStart(2, '0')}`;
    setHexColor(hexValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <MyButton
          myTitle='-'
          myOnPress={() => handleColorChange('red', -1)}
          backgroundColor={'red'} color={'#fff'}
        ></MyButton>
        <MyButton
          myTitle='+'
          myOnPress={() => handleColorChange('red', 1)}
          backgroundColor={'red'} color={'#fff'}
        ></MyButton>
        <MyButton
          myTitle='-16'
          myOnPress={() => handleColorChange('red', -16)}
          backgroundColor={'red'} color={'#fff'}
        ></MyButton>
        <MyButton
          myTitle='+16'
          myOnPress={() => handleColorChange('red', 16)}
          backgroundColor={'red'} color={'#fff'}
        ></MyButton>
      </View>
      <Text style={styles.colorText}>紅色值: {redCount}</Text>

      <View style={styles.row}>
        <MyButton
          myTitle='-'
          myOnPress={() => handleColorChange('green', -1)}
          backgroundColor={'green'} color={'#fff'}
        ></MyButton>
        <MyButton
          myTitle='+'
          myOnPress={() => handleColorChange('green', 1)}
          backgroundColor={'green'} color={'#fff'}
        ></MyButton>
        <MyButton
          myTitle='-16'
          myOnPress={() => handleColorChange('green', -16)}
          backgroundColor={'green'} color={'#fff'}
        ></MyButton>
        <MyButton
          myTitle='+16'
          myOnPress={() => handleColorChange('green', 16)}
          backgroundColor={'green'} color={'#fff'}
        ></MyButton>
      </View>
      <Text style={styles.colorText}>綠色值: {greenCount}</Text>

      <View style={styles.row}>
        <MyButton
          myTitle='-'
          myOnPress={() => handleColorChange('blue', -1)}
          backgroundColor={'blue'} color={'#fff'}
        ></MyButton>
        <MyButton
          myTitle='+'
          myOnPress={() => handleColorChange('blue', 1)}
          backgroundColor={'blue'} color={'#fff'}
        ></MyButton>
        <MyButton
          myTitle='-16'
          myOnPress={() => handleColorChange('blue', -16)}
          backgroundColor={'blue'} color={'#fff'}
        ></MyButton>
        <MyButton
          myTitle='+16'
          myOnPress={() => handleColorChange('blue', 16)}
          backgroundColor={'blue'} color={'#fff'}
        ></MyButton>
      </View>
      <Text style={styles.colorText}>藍色值: {blueCount}</Text>
      <View style={{ marginTop: 2, backgroundColor: hexColor, width: 100 ,height: 100 }}></View>
      <Text style={styles.colorText}>顏色: {hexColor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  colorText: {
    fontSize: 40,
    marginLeft: 2,
  },
});