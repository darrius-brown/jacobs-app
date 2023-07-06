import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


function SignIn() {
  const navigation = useNavigation();
  const [formInfo, setFormInfo] = useState({
    username: '',
    password: ''
  })

  const navigateToProgram = () => {
    navigation.navigate('Program');
  };

  const handleChange = (text, inputName) => {
    setFormInfo({ ...formInfo, [inputName]: text });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formInfo),
      });
  
      if (response.ok) {
        const data = await response.json();
        const authToken = data.access;
        const user = data.username
        await AsyncStorage.setItem('authToken', authToken);
        await AsyncStorage.setItem('user', user);
        navigateToProgram()

      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => handleChange(text, 'username')}
        value={formInfo.username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => handleChange(text, 'password')}
        value={formInfo.password}
        secureTextEntry={true}
      />
      <Button title="Log in" onPress={handleSubmit} />
    </View>
  )
}

export default SignIn