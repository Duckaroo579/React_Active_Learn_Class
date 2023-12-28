import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const App = () => {
  const [overtimeHours, setOvertimeHours] = useState(0);
  const [imageSource, setImageSource] = useState(require('./src/bird.jpg'));

  const handleCount = () => {
    setOvertimeHours(overtimeHours + 1);
  };

  const handleReset = () => {
    setOvertimeHours(0);
  };

  const handleBirdButton = () => {
    setImageSource(require('./src/bird.jpg'));
  };

  const handleGooseButton = () => {
    setImageSource(require('./src/goose.jpg'));
  };

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{`今天加班${overtimeHours}小時`}</Text>
      <TouchableOpacity style={styles.button} onPress={handleCount}>
        <Text style={styles.buttonText}>加一</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>歸零</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleBirdButton}>
        <Text style={styles.buttonText}>努力的鳥</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleGooseButton}>
        <Text style={styles.buttonText}>努力的鵝</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'lawngreen',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: '#CD0000',
    fontSize: 16,
  },
});

export default App;