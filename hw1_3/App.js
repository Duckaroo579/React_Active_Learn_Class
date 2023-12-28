import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableHighlight } from 'react-native';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [instantMessage, setInstantMessage] = useState('');
  const [buttonMessage, setButtonMessage] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
    const isValidPhoneNumber = /^09\d{8}$/.test(text);
    if (isValidPhoneNumber) {
      setInstantMessage('即時顯示：輸入成功！');
    } else {
      setInstantMessage('即時顯示：手機輸入錯誤！');
    }
  };

  const handleButtonPress = () => {
    const isValidPhoneNumber = /^09\d{8}$/.test(inputValue);
    if (isValidPhoneNumber) {
      setButtonMessage('按鈕顯示：輸入成功！');
    } else {
      setButtonMessage('按鈕顯示：手機輸入錯誤！');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="在這裡輸入手機號碼"
        onChangeText={handleInputChange}
        value={inputValue}
        keyboardType="numeric"
      />
      <TouchableHighlight
        style={styles.button}
        onPress={handleButtonPress}
        underlayColor="#DDDDDD"
      >
        <Text>確認</Text>
      </TouchableHighlight>
      <Text style={[styles.message, { color: 'blue' }]}>{instantMessage}</Text>
      <Text style={[styles.message, { color: 'red' }]}>{buttonMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 16,
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;